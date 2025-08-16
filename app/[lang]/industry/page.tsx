import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries - Research Market Insights',
  description: 'Explore market research reports across 25+ industry sectors including technology, healthcare, energy, automotive, and more.',
};

export default function IndustryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Industry Sectors
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive market research and analysis across 25+ industry sectors worldwide
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Aerospace & Defence */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Aerospace & Defence</h3>
              <p className="text-gray-600 text-sm mb-4">
                Military aircraft, commercial aviation, defense electronics, and space technology.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div>• 150+ Reports</div>
                <div>• Latest: Dec 2024</div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                View Reports
              </button>
            </div>

            {/* Automotive & Transportation */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 p-6">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automotive & Transportation</h3>
              <p className="text-gray-600 text-sm mb-4">
                Electric vehicles, autonomous driving, logistics, and supply chain solutions.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div>• 200+ Reports</div>
                <div>• Latest: Dec 2024</div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                View Reports
              </button>
            </div>

            {/* Banking & Financial */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 p-6">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Banking & Financial</h3>
              <p className="text-gray-600 text-sm mb-4">
                Digital banking, fintech innovation, wealth management, and financial services.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div>• 180+ Reports</div>
                <div>• Latest: Dec 2024</div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                View Reports
              </button>
            </div>

            {/* Chemicals & Materials */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 p-6">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Chemicals & Materials</h3>
              <p className="text-gray-600 text-sm mb-4">
                Specialty chemicals, advanced materials, sustainable packaging, and industrial solutions.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div>• 120+ Reports</div>
                <div>• Latest: Dec 2024</div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                View Reports
              </button>
            </div>

            {/* Consumer Goods */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 p-6">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Consumer Goods</h3>
              <p className="text-gray-600 text-sm mb-4">
                E-commerce growth, personal care, food & beverage, and retail innovation.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div>• 250+ Reports</div>
                <div>• Latest: Dec 2024</div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                View Reports
              </button>
            </div>

            {/* Electronics & Semiconductor */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 p-6">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Electronics & Semiconductor</h3>
              <p className="text-gray-600 text-sm mb-4">
                Global semiconductor industry, IoT devices, consumer electronics, and smart technology.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div>• 300+ Reports</div>
                <div>• Latest: Dec 2024</div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                View Reports
              </button>
            </div>

            {/* Energy & Power */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Energy & Power</h3>
              <p className="text-gray-600 text-sm mb-4">
                Renewable energy, smart grid technologies, oil & gas, and energy storage solutions.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div>• 220+ Reports</div>
                <div>• Latest: Dec 2024</div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                View Reports
              </button>
            </div>

            {/* Food & Beverages */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 p-6">
              <div className="text-4xl mb-4">🍔</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Food & Beverages</h3>
              <p className="text-gray-600 text-sm mb-4">
                Plant-based foods, beverage trends, food packaging, and consumer preferences.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div>• 180+ Reports</div>
                <div>• Latest: Dec 2024</div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                View Reports
              </button>
            </div>

            {/* Life Sciences */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 p-6">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Life Sciences</h3>
              <p className="text-gray-600 text-sm mb-4">
                Biotechnology, pharmaceuticals, medical devices, and healthcare innovation.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div>• 280+ Reports</div>
                <div>• Latest: Dec 2024</div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                View Reports
              </button>
            </div>

            {/* Technology & Media */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technology & Media</h3>
              <p className="text-gray-600 text-sm mb-4">
                Artificial intelligence, cloud computing, digital media, and emerging technologies.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div>• 400+ Reports</div>
                <div>• Latest: Dec 2024</div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                View Reports
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Coverage Statistics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive coverage spans across multiple dimensions of market research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Industry Sectors</div>
              <div className="text-sm text-gray-600">Comprehensive coverage across all major industries</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Countries Covered</div>
              <div className="text-sm text-gray-600">Global market analysis and regional insights</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Reports Published</div>
              <div className="text-sm text-gray-600">Extensive library of market research reports</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Expert Analysts</div>
              <div className="text-sm text-gray-600">Industry specialists and research professionals</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Industry-Specific Research?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our expert analysts can provide tailored research and insights for your specific industry needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Our Experts
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Request Custom Research
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}