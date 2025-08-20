import Link from 'next/link';
import { Search, Filter, ArrowRight, FileText, TrendingUp, Globe, BarChart3, Download, Calendar, User, Tag } from 'lucide-react';

export default async function SearchPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Search className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Search Reports & Insights
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Discover comprehensive market research reports, industry analysis, and strategic insights
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for reports, industries, or topics..."
              className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-12"
            />
            <button className="absolute right-2 top-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <Search className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-700 font-medium">Filter by:</span>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Industries</option>
              <option>Technology</option>
              <option>Healthcare</option>
              <option>Finance</option>
              <option>Energy</option>
              <option>Automotive</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Regions</option>
              <option>North America</option>
              <option>Europe</option>
              <option>Asia Pacific</option>
              <option>Latin America</option>
              <option>Middle East & Africa</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Report Types</option>
              <option>Market Research</option>
              <option>Industry Analysis</option>
              <option>Competitive Intelligence</option>
              <option>Trend Reports</option>
            </select>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
              Clear Filters
            </button>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Search Results</h2>
            <p className="text-gray-600">Showing 24 results</p>
          </div>

          <div className="space-y-6">
            {/* Result 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Technology</span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">North America</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Global Artificial Intelligence Market Analysis 2024-2030
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive analysis of the AI market including machine learning, natural language processing, computer vision, and robotics. Covers market size, growth drivers, key players, and future trends.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Published: Dec 2024
                    </span>
                    <span className="flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      150 pages
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      By Research Team
                    </span>
                  </div>
                </div>
                <div className="ml-6 flex flex-col items-end">
                  <div className="text-2xl font-bold text-blue-600 mb-2">$2,999</div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 mb-2">
                    View Report
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    Sample
                  </button>
                </div>
              </div>
            </div>

            {/* Result 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Healthcare</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Global</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Pharmaceutical Market Trends and Growth Opportunities
                  </h3>
                  <p className="text-gray-600 mb-4">
                    In-depth analysis of pharmaceutical market dynamics, drug development trends, regulatory landscape, and emerging therapeutic areas. Includes market forecasts and competitive analysis.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Published: Nov 2024
                    </span>
                    <span className="flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      200 pages
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      By Healthcare Analysts
                    </span>
                  </div>
                </div>
                <div className="ml-6 flex flex-col items-end">
                  <div className="text-2xl font-bold text-blue-600 mb-2">$3,499</div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 mb-2">
                    View Report
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    Sample
                  </button>
                </div>
              </div>
            </div>

            {/* Result 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Finance</span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Europe</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    ESG Investment Landscape and Sustainable Finance Trends
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Analysis of Environmental, Social, and Governance investing trends, sustainable finance instruments, and the impact of ESG factors on investment decisions and portfolio performance.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Published: Nov 2024
                    </span>
                    <span className="flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      120 pages
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      By Finance Specialists
                    </span>
                  </div>
                </div>
                <div className="ml-6 flex flex-col items-end">
                  <div className="text-2xl font-bold text-blue-600 mb-2">$2,799</div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 mb-2">
                    View Report
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    Sample
                  </button>
                </div>
              </div>
            </div>

            {/* Result 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Automotive</span>
                    <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">Asia Pacific</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Electric Vehicle Market Analysis and Future Outlook
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive study of the electric vehicle market including battery technology, charging infrastructure, market adoption rates, and competitive landscape across major regions.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Published: Oct 2024
                    </span>
                    <span className="flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      180 pages
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      By Industry Analysts
                    </span>
                  </div>
                </div>
                <div className="ml-6 flex flex-col items-end">
                  <div className="text-2xl font-bold text-blue-600 mb-2">$3,199</div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 mb-2">
                    View Report
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    Sample
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 text-white bg-blue-600 border border-blue-600 rounded-lg">1</button>
              <button className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
              <button className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
              <button className="px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Related Searches */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Searches</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Market Research Reports',
              'Industry Analysis',
              'Competitive Intelligence',
              'Market Trends',
              'Business Intelligence',
              'Strategic Planning',
              'Market Forecasting',
              'Industry Insights'
            ].map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our research team can create custom reports tailored to your specific needs and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/contact`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Request Custom Research
            </Link>
            <Link
              href={`/${lang}/services`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
