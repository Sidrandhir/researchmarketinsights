import Image from 'next/image';

export default function TestImagesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Image Test Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Test Hero Images */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-4">Hero Image 1</h3>
            <div className="relative h-48 w-full">
              <Image
                src="/images/hero/hero1.jpg"
                alt="Hero 1"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-4">Hero Image 2</h3>
            <div className="relative h-48 w-full">
              <Image
                src="/images/hero/hero2.avif"
                alt="Hero 2"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-4">Hero Image 3</h3>
            <div className="relative h-48 w-full">
              <Image
                src="/images/hero/hero3.avif"
                alt="Hero 3"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* Test Regional Insights Image */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-4">Regional Insights</h3>
            <Image
              src="/images/regional-insights.jpg"
              alt="Regional Insights"
              width={400}
              height={300}
              className="rounded-lg w-full"
            />
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Image Status</h2>
          <p className="text-gray-600">
            If you can see the images above, then your image configuration is working correctly.
            If not, there might be an issue with:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
            <li>Image file paths</li>
            <li>Next.js Image configuration</li>
            <li>Vercel deployment settings</li>
            <li>Image file permissions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
