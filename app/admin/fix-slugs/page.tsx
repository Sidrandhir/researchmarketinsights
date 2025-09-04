'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface FixResult {
  id: string;
  title: string;
  oldSlug: string;
  newSlug?: string;
  error?: string;
  success: boolean;
}

export default function FixSlugsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<FixResult[]>([]);
  const [message, setMessage] = useState('');

  if (status === 'loading') {
    return <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>;
  }

  if (!session || (session.user as any)?.role !== 'ADMIN') {
    router.push('/login');
    return null;
  }

  const handleFixSlugs = async () => {
    setIsLoading(true);
    setResults([]);
    setMessage('');

    try {
      const response = await fetch('/api/admin/fix-slugs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setResults(data.results || []);
        setMessage(`✅ Successfully processed ${data.results?.length || 0} reports. ${data.successful || 0} successful, ${data.failed || 0} failed.`);
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setMessage(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Fix Report Slugs</h1>
          
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              This tool will fix problematic report slugs that contain URLs or invalid characters.
              It will clean up slugs and ensure they are URL-friendly.
            </p>
            
            <button
              onClick={handleFixSlugs}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              {isLoading ? 'Fixing Slugs...' : 'Fix All Problematic Slugs'}
            </button>
          </div>

          {message && (
            <div className={`p-4 rounded-lg mb-6 ${
              message.includes('✅') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {message}
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Results:</h2>
              <div className="space-y-3">
                {results.map((result, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    result.success 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-red-50 border-red-200'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{result.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          <span className="font-medium">Old Slug:</span> {result.oldSlug}
                        </p>
                        {result.success && result.newSlug && (
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">New Slug:</span> {result.newSlug}
                          </p>
                        )}
                        {!result.success && result.error && (
                          <p className="text-sm text-red-600">
                            <span className="font-medium">Error:</span> {result.error}
                          </p>
                        )}
                      </div>
                      <div className="ml-4">
                        {result.success ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            ✅ Fixed
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            ❌ Failed
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


