import { NextRequest, NextResponse } from 'next/server';

interface RateLimitOptions {
  windowMs: number; // Time window in milliseconds
  max: number; // Maximum number of requests per window
  message?: string;
  skipSuccessfulRequests?: boolean;
}

class RateLimiter {
  private requests: Map<string, { count: number; resetTime: number }> = new Map();
  private options: RateLimitOptions;

  constructor(options: RateLimitOptions) {
    this.options = options;
    
    // Clean up expired entries every minute
    setInterval(() => {
      const now = Date.now();
      for (const [key, value] of this.requests.entries()) {
        if (now > value.resetTime) {
          this.requests.delete(key);
        }
      }
    }, 60000);
  }

  check(identifier: string): { allowed: boolean; remaining: number; resetTime: number } {
    const now = Date.now();
    const windowStart = now - this.options.windowMs;
    
    const current = this.requests.get(identifier);
    
    if (!current || now > current.resetTime) {
      // First request or window expired
      this.requests.set(identifier, {
        count: 1,
        resetTime: now + this.options.windowMs
      });
      
      return {
        allowed: true,
        remaining: this.options.max - 1,
        resetTime: now + this.options.windowMs
      };
    }
    
    if (current.count >= this.options.max) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: current.resetTime
      };
    }
    
    // Increment count
    current.count++;
    this.requests.set(identifier, current);
    
    return {
      allowed: true,
      remaining: this.options.max - current.count,
      resetTime: current.resetTime
    };
  }
}

// Create rate limiters for different endpoints
export const uploadRateLimit = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 uploads per 15 minutes
  message: 'Too many upload requests, please try again later.'
});

export const apiRateLimit = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 API calls per 15 minutes
  message: 'Too many API requests, please try again later.'
});

export const authRateLimit = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 login attempts per 15 minutes
  message: 'Too many login attempts, please try again later.'
});

export function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  return request.ip || 'unknown';
}

export function createRateLimitResponse(
  message: string,
  resetTime: number,
  remaining: number
): NextResponse {
  const response = NextResponse.json(
    { error: message },
    { status: 429 }
  );
  
  response.headers.set('X-RateLimit-Limit', '100');
  response.headers.set('X-RateLimit-Remaining', remaining.toString());
  response.headers.set('X-RateLimit-Reset', Math.ceil(resetTime / 1000).toString());
  response.headers.set('Retry-After', Math.ceil((resetTime - Date.now()) / 1000).toString());
  
  return response;
}



