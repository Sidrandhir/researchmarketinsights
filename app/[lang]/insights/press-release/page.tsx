import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag, Share2, BookOpen, TrendingUp, Globe, BarChart3 } from 'lucide-react';

export default async function PressReleasePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Press Releases
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest news, announcements, and insights from Research Market Insight
            </p>
          </div>
        </div>
      </section>

      {/* Back to Insights Link */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href={`/${lang}/insights`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>
        </div>
      </section>

      {/* Press Releases Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Press Release 1 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>December 15, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Research Market Insight Launches New AI-Powered Market Intelligence Platform
                </h3>
                <p className="text-gray-600 mb-4">
                  Revolutionary platform combines artificial intelligence with comprehensive market data to provide unprecedented insights for business decision-makers.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span>By Research Team</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </article>

            {/* Press Release 2 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>December 10, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Global Market Report: Life Sciences Sector Shows 15% Growth in Q4
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive analysis reveals significant growth in pharmaceutical and biotechnology markets, driven by innovation and increased investment.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span>By Market Analysts</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </article>

            {/* Press Release 3 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>December 5, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Strategic Partnership Announced with Leading Technology Consultancy
                </h3>
                <p className="text-gray-600 mb-4">
                  Collaboration aims to expand service offerings and provide enhanced digital transformation solutions to clients worldwide.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span>By Partnership Team</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </article>

            {/* Press Release 4 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>November 30, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  ESG Analysis Report: Sustainable Investment Trends on the Rise
                </h3>
                <p className="text-gray-600 mb-4">
                  New research shows increasing adoption of ESG principles in investment decisions, with 78% of companies prioritizing sustainability.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span>By ESG Specialists</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </article>

            {/* Press Release 5 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>November 25, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Automotive Industry Report: Electric Vehicle Market Surges 45%
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive analysis of the electric vehicle market reveals unprecedented growth driven by government incentives and consumer demand.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span>By Industry Analysts</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </article>

            {/* Press Release 6 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>November 20, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  New Office Opening in Asia-Pacific Region
                </h3>
                <p className="text-gray-600 mb-4">
                  Expansion into the Asia-Pacific market to better serve growing client base and provide localized market intelligence services.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span>By Corporate Team</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Press Releases
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to receive the latest press releases and company updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
