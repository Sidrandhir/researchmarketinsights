/**
 * Check if database is available and configured
 */
export function isDatabaseAvailable(): boolean {
  return !!process.env.DATABASE_URL
}

/**
 * Safe database operation wrapper
 */
export async function safeDbOperation<T>(
  operation: () => Promise<T>,
  fallback: T
): Promise<T> {
  if (!isDatabaseAvailable()) {
    return fallback
  }
  
  try {
    return await operation()
  } catch (error) {
    console.error('Database operation failed:', error)
    return fallback
  }
}

/**
 * Get database status
 */
export function getDatabaseStatus() {
  return {
    available: isDatabaseAvailable(),
    url: process.env.DATABASE_URL ? 'Configured' : 'Not configured'
  }
}
