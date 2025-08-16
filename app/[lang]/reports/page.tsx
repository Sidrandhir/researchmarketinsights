import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Market Research Reports - Research Market Insights',
  description: 'Browse our comprehensive collection of market research reports across 25+ industry sectors. Get expert analysis and insights.',
};

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Market Research Reports
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Access over 10,000 comprehensive market research reports with data-driven analysis from our expert analysts
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <input
                  type="text"
                  placeholder="Search reports by title, industry, or keyword..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">All Industries</option>
                  <option value="aerospace">Aerospace & Defence</option>
                  <option value="automotive">Automotive & Transportation</option>
                  <option value="banking">Banking & Financial</option>
                  <option value="chemicals">Chemicals & Materials</option>
                  <option value="consumer">Consumer Goods</option>
                  <option value="electronics">Electronics & Semiconductor</option>
                  <option value="energy">Energy & Power</option>
                  <option value="food">Food & Beverages</option>
                  <option value="healthcare">Life Sciences</option>
                  <option value="technology">Technology & Media</option>
                </select>
              </div>
              <div>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                  Search Reports
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Available Reports */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Life Sciences
                  </span>
                  <span className="text-sm text-gray-500">Jan 2024</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-3 leading-tight">
                  Global Patient Repositioning System Market Size, Share & Industry Analysis
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Comprehensive analysis of patient repositioning systems market with air-assisted, mechanical, and robotic solutions.
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span>189 Pages</span>
                  <span>PDF + Excel</span>
                </div>
                
                <div className="flex gap-3">
                  <Link href="/reports/global-patient-repositioning-system-market" className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-center">
                    View Report
                  </Link>
                  <button className="px-4 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold">
                    Sample
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Life Sciences
                  </span>
                  <span className="text-sm text-gray-500">Jan 2024</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-3 leading-tight">
                  Global Connected Drug Delivery Devices Market Size, Share & Industry Analysis
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  In-depth research on connected drug delivery devices market including smart inhalers, connected injectors, and IoT integration.
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span>245 Pages</span>
                  <span>PDF + Excel</span>
                </div>
                
                <div className="flex gap-3">
                  <Link href="/reports/global-connected-drug-delivery-devices-market" className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-center">
                    View Report
                  </Link>
                  <button className="px-4 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold">
                    Sample
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Research?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get tailored market research solutions designed specifically for your business needs and industry requirements.
              </p>
              <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
