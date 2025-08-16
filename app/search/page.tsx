"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, FileText, Newspaper } from 'lucide-react';

interface SearchResult {
  id: string;
  type: 'REPORT' | 'PRESS_RELEASE';
  title: string;
  description: string;
  category: string;
  url: string;
  imageUrl?: string;
  featured: boolean;
  createdAt: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  const performSearch = async (searchQuery: string) => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      
      if (data.success) {
        setResults(data.results || []);
      } else {
        setError(data.message || 'Search failed');
      }
    } catch (err) {
      setError('An error occurred while searching');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'REPORT':
        return <FileText className="h-5 w-5 text-blue-600" />;
      case 'PRESS_RELEASE':
        return <Newspaper className="h-5 w-5 text-green-600" />;
      default:
        return <Search className="h-5 w-5 text-gray-600" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'REPORT':
        return 'Market Report';
      case 'PRESS_RELEASE':
        return 'Press Release';
      default:
        return 'Result';
    }
  };

  if (!query) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Search className="mx-auto h-12 w-12 text-gray-400" />
            <h1 className="mt-4 text-2xl font-bold text-gray-900">Search Reports & Insights</h1>
            <p className="mt-2 text-gray-600">
              Find the latest market research reports and insights. Search by industry, keyword, or &ldquo;market size&rdquo; to discover relevant reports.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Search Results for &ldquo;{query}&rdquo;
          </h1>
          <p className="text-gray-600">
            {loading ? 'Searching...' : `${results.length} results found`}
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Searching for reports...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Search Results */}
        {!loading && !error && (
          <div className="space-y-6">
            {results.length === 0 ? (
              <div className="text-center py-12">
                <Search className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">No results found</h3>
                <p className="mt-2 text-gray-600">
                  Try adjusting your search terms or browse our categories instead.
                </p>
                <div className="mt-6">
                  <Link
                    href="/industry"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Browse Industries
                  </Link>
                </div>
              </div>
            ) : (
              results.map((result) => (
                <div
                  key={`${result.type}-${result.id}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {getTypeIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {getTypeLabel(result.type)}
                        </span>
                        {result.featured && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        <Link
                          href={result.url}
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          {result.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-3 line-clamp-3">
                        {result.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="capitalize">{result.category}</span>
                          <span>•</span>
                          <span>{new Date(result.createdAt).toLocaleDateString()}</span>
                        </div>
                        <Link
                          href={result.url}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
