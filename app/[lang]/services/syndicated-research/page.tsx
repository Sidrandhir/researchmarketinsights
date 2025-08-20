import Link from 'next/link';
import { FileText, Users, BarChart3, ArrowLeft, Globe, TrendingUp, Download, Share2, Database, Target } from 'lucide-react';

export default async function SyndicatedResearchPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <FileText className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Syndicated Market Research
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Cost-effective, high-quality market research reports shared across multiple clients
            </p>
          </div>
        </div>
      </section>

      {/* Back to Services Link */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href={`/${lang}/services`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Syndicated Research Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our syndicated market research reports provide comprehensive industry insights at a fraction 
                of the cost of custom research. These reports are developed based on extensive market analysis 
                and shared across multiple clients, making them an excellent choice for budget-conscious organizations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Each report covers market size, trends, competitive landscape, and future outlook, providing 
                actionable intelligence for strategic decision-making across various industries and geographies.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">60%</div>
                  <div className="text-gray-600">Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
                  <div className="text-gray-600">Reports Available</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Cost-effective market insights</li>
                <li>• Quick access to industry data</li>
                <li>• Standardized methodology</li>
                <li>• Regular updates and revisions</li>
                <li>• Multi-client accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Report Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Report Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage across major industry sectors and market segments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-12 w-12 text-indigo-600" />,
                title: "Industry Reports",
                description: "Comprehensive analysis of specific industries and sectors",
                examples: ["Life Sciences", "Technology", "Automotive", "Energy", "Financial Services"]
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-green-600" />,
                title: "Market Trend Reports",
                description: "Analysis of emerging trends and market dynamics",
                examples: ["Digital Transformation", "Sustainability", "AI & ML", "E-commerce", "Remote Work"]
              },
              {
                icon: <Target className="h-12 w-12 text-purple-600" />,
                title: "Regional Reports",
                description: "Geographic-specific market analysis and insights",
                examples: ["North America", "Europe", "Asia Pacific", "Latin America", "Middle East"]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{category.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{category.description}</p>
                <ul className="space-y-2">
                  {category.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive content and features in every syndicated research report
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
                title: "Market Analysis",
                description: "Comprehensive market sizing, segmentation, and growth analysis",
                features: ["Market Size & Forecast", "Market Segmentation", "Growth Drivers", "Market Restraints"]
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Competitive Landscape",
                description: "Detailed analysis of key players and market positioning",
                features: ["Company Profiles", "Market Share Analysis", "Competitive Strategies", "SWOT Analysis"]
              },
              {
                icon: <Globe className="h-8 w-8 text-green-600" />,
                title: "Regional Insights",
                description: "Geographic analysis and regional market dynamics",
                features: ["Regional Breakdown", "Country Analysis", "Regional Trends", "Growth Opportunities"]
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
                title: "Future Outlook",
                description: "Market projections and strategic recommendations",
                features: ["Market Forecast", "Trend Analysis", "Strategic Recommendations", "Investment Opportunities"]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Access Quality Market Research?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Browse our extensive collection of syndicated research reports
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/reports`} className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Browse Reports
            </Link>
            <Link href={`/${lang}/contact`} className="border border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
