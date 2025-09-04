import { z } from 'zod';

const envSchema = z.object({
  // Database
  DATABASE_URL: z.string().url(),
  
  // NextAuth
  NEXTAUTH_SECRET: z.string().min(32),
  NEXTAUTH_URL: z.string().url(),
  
  // Site Configuration
  SITE_URL: z.string().url().optional(),
  SITE_NAME: z.string().default('Research Market Insights'),
  
  // Email Configuration
  EMAIL_SERVER_HOST: z.string().optional(),
  EMAIL_SERVER_PORT: z.string().optional(),
  EMAIL_SERVER_USER: z.string().optional(),
  EMAIL_SERVER_PASSWORD: z.string().optional(),
  EMAIL_FROM: z.string().email().optional(),
  
  // Payment Configuration
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_PUBLISHABLE_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),
  
  // File Upload
  MAX_FILE_SIZE: z.string().default('10485760'), // 10MB
  ALLOWED_FILE_TYPES: z.string().default('.xlsx,.xls,.csv'),
  
  // SEO
  GOOGLE_ANALYTICS_ID: z.string().optional(),
  GOOGLE_SEARCH_CONSOLE_ID: z.string().optional(),
  
  // Redis (for caching)
  REDIS_URL: z.string().optional(),
  
  // AWS S3 (for file storage)
  AWS_ACCESS_KEY_ID: z.string().optional(),
  AWS_SECRET_ACCESS_KEY: z.string().optional(),
  AWS_REGION: z.string().optional(),
  AWS_S3_BUCKET: z.string().optional(),
  
  // API Keys
  OPENAI_API_KEY: z.string().optional(),
  
  // Development
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export type Env = z.infer<typeof envSchema>;

function validateEnv(): Env {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.errors
        .filter(err => err.code === 'invalid_type' && err.received === 'undefined')
        .map(err => err.path.join('.'));
      
      const invalidVars = error.errors
        .filter(err => err.code !== 'invalid_type' || err.received !== 'undefined')
        .map(err => `${err.path.join('.')}: ${err.message}`);
      
      let errorMessage = '❌ Environment validation failed:\n\n';
      
      if (missingVars.length > 0) {
        errorMessage += `Missing required variables:\n${missingVars.map(v => `  - ${v}`).join('\n')}\n\n`;
      }
      
      if (invalidVars.length > 0) {
        errorMessage += `Invalid variables:\n${invalidVars.map(v => `  - ${v}`).join('\n')}\n\n`;
      }
      
      errorMessage += 'Please check your .env.local file and ensure all required variables are set correctly.';
      
      throw new Error(errorMessage);
    }
    throw error;
  }
}

export const env = validateEnv();

// Helper functions
export const isDevelopment = env.NODE_ENV === 'development';
export const isProduction = env.NODE_ENV === 'production';
export const isTest = env.NODE_ENV === 'test';

export const getMaxFileSize = () => parseInt(env.MAX_FILE_SIZE);
export const getAllowedFileTypes = () => env.ALLOWED_FILE_TYPES.split(',');

// Database URL validation
export const getDatabaseUrl = () => {
  if (!env.DATABASE_URL) {
    throw new Error('DATABASE_URL is required');
  }
  return env.DATABASE_URL;
};

// NextAuth configuration validation
export const getNextAuthConfig = () => {
  if (!env.NEXTAUTH_SECRET) {
    throw new Error('NEXTAUTH_SECRET is required');
  }
  if (!env.NEXTAUTH_URL) {
    throw new Error('NEXTAUTH_URL is required');
  }
  return {
    secret: env.NEXTAUTH_SECRET,
    url: env.NEXTAUTH_URL,
  };
};



