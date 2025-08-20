import Link from 'next/link';
import { ArrowLeft, Building, Globe, Users, CheckCircle, TrendingUp, BarChart3 } from 'lucide-react';

export default async function ClientsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Users className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Valued Clients
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Trusted by leading companies across industries worldwide for strategic market insights and research
            </p>
          </div>
        </div>
      </section>

      {/* Back to About Link */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href={`/${lang}/about`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to About
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Global Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-600">Countries</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
              <p className="text-gray-600">Industries</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <p className="text-gray-600">Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Client 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">TechCorp Industries</h3>
              <p className="text-gray-600 mb-4">Global technology leader with operations in 30+ countries</p>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Globe className="w-4 h-4 mr-2" />
                <span>Technology</span>
              </div>
            </div>

            {/* Client 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">GreenFuture Corp</h3>
              <p className="text-gray-600 mb-4">Leading sustainable energy solutions provider</p>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Globe className="w-4 h-4 mr-2" />
                <span>Energy</span>
              </div>
            </div>

            {/* Client 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">InnovateTech Solutions</h3>
              <p className="text-gray-600 mb-4">Cutting-edge software development company</p>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Globe className="w-4 h-4 mr-2" />
                <span>Software</span>
              </div>
            </div>

            {/* Client 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">DataFlow Systems</h3>
              <p className="text-gray-600 mb-4">Advanced analytics and data processing solutions</p>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Globe className="w-4 h-4 mr-2" />
                <span>Analytics</span>
              </div>
            </div>

            {/* Client 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AutoDrive Motors</h3>
              <p className="text-gray-600 mb-4">Electric vehicle manufacturing and innovation</p>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Globe className="w-4 h-4 mr-2" />
                <span>Automotive</span>
              </div>
            </div>

            {/* Client 6 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">BioHealth Pharma</h3>
              <p className="text-gray-600 mb-4">Biotechnology and pharmaceutical research</p>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Globe className="w-4 h-4 mr-2" />
                <span>Healthcare</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Technology & Media', icon: '💻', count: 120, color: 'from-blue-500 to-blue-600' },
              { name: 'Healthcare & Life Sciences', icon: '🏥', count: 85, color: 'from-green-500 to-green-600' },
              { name: 'Financial Services', icon: '💰', count: 95, color: 'from-yellow-500 to-yellow-600' },
              { name: 'Energy & Power', icon: '⚡', count: 65, color: 'from-orange-500 to-orange-600' },
              { name: 'Automotive & Transportation', icon: '🚗', count: 55, color: 'from-red-500 to-red-600' },
              { name: 'Consumer Goods', icon: '🛍️', count: 75, color: 'from-purple-500 to-purple-600' },
              { name: 'Manufacturing & Industrial', icon: '🏭', count: 60, color: 'from-indigo-500 to-indigo-600' },
              { name: 'Chemicals & Materials', icon: '🧪', count: 45, color: 'from-teal-500 to-teal-600' }
            ].map((industry) => (
              <div key={industry.name} className="text-center p-4">
                <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r ${industry.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200`}>
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-500">{industry.count} clients</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Success Story 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Market Expansion Success</h3>
                  <p className="text-gray-600">TechCorp Industries</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Our market research and competitive analysis helped TechCorp expand into 5 new markets, resulting in a 40% increase in revenue within 18 months.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                <span>Completed in 2024</span>
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">ESG Strategy Implementation</h3>
                  <p className="text-gray-600">GreenFuture Corp</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Developed comprehensive ESG analysis and strategy that increased investor confidence and led to a 30% improvement in sustainability ratings.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                <span>Completed in 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Growing Client Family
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Experience the same level of excellence that has made us the trusted partner for hundreds of companies worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/contact`}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              href={`/${lang}/services`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
