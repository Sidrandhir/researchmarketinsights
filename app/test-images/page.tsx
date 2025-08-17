import Image from 'next/image';

export default function TestImagesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Image Loading Test Page</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          {/* Test 1: Logo from images directory */}
          <div>
            <h2 className="text-xl font-semibold mb-4">1. Logo from /images/logo.svg</h2>
            <div className="border border-gray-200 rounded-lg p-4">
              <Image 
                src="/images/logo.svg" 
                alt="Logo from images directory" 
                width={200}
                height={80}
                className="border border-red-500"
              />
            </div>
          </div>

          {/* Test 2: Logo from root */}
          <div>
            <h2 className="text-xl font-semibold mb-4">2. Logo from /logo.svg</h2>
            <div className="border border-gray-200 rounded-lg p-4">
              <Image 
                src="/logo.svg" 
                alt="Logo from root" 
                width={200}
                height={80}
                className="border border-blue-500"
              />
            </div>
          </div>

          {/* Test 3: Hero image test */}
          <div>
            <h2 className="text-xl font-semibold mb-4">3. Hero Image Test</h2>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-2">Testing hero image loading...</div>
              <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500">Hero image placeholder</span>
              </div>
            </div>
          </div>

          {/* Debug Information */}
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Debug Information:</h3>
            <ul className="text-sm space-y-1">
              <li>• Current working directory: <code className="bg-gray-200 px-1 rounded">/app/test-images</code></li>
              <li>• Next.js config: <code className="bg-gray-200 px-1 rounded">unoptimized: true</code></li>
              <li>• Image paths being tested: <code className="bg-gray-200 px-1 rounded">/images/logo.svg</code> and <code className="bg-gray-200 px-1 rounded">/logo.svg</code></li>
              <li>• Check browser console for any image loading errors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
