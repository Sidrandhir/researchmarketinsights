import Link from 'next/link';
import { Brain, BarChart3, ArrowLeft, Globe, TrendingUp, Users, Target, Zap, Search, Lightbulb } from 'lucide-react';

export default async function MarketIntelligencePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Brain className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Market Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
              Actionable market insights and competitive intelligence to drive strategic decision-making
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Intelligence Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our market intelligence services provide real-time insights into market dynamics, competitive 
                landscapes, and emerging opportunities. We help organizations make informed decisions through 
                comprehensive data analysis and strategic intelligence gathering.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From competitor analysis to market trend monitoring, we deliver actionable intelligence that 
                enables businesses to stay ahead of the competition and capitalize on market opportunities.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">90%</div>
                  <div className="text-gray-600">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                  <div className="text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Real-time market insights</li>
                <li>• Competitive advantage</li>
                <li>• Risk mitigation</li>
                <li>• Strategic decision support</li>
                <li>• Market opportunity identification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Market Intelligence Framework</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to gathering, analyzing, and delivering market intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Search className="h-10 w-10 text-teal-600" />,
                title: "Data Collection",
                description: "Comprehensive gathering of market and competitive data",
                steps: ["Primary Research", "Secondary Research", "Data Validation", "Source Verification"]
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
                title: "Analysis & Processing",
                description: "Advanced analytics and data processing techniques",
                steps: ["Data Analysis", "Trend Identification", "Pattern Recognition", "Insight Generation"]
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-green-600" />,
                title: "Intelligence Creation",
                description: "Transforming data into actionable intelligence",
                steps: ["Insight Synthesis", "Recommendation Development", "Strategic Implications", "Action Planning"]
              },
              {
                icon: <Zap className="h-10 w-10 text-purple-600" />,
                title: "Delivery & Monitoring",
                description: "Timely delivery and continuous monitoring",
                steps: ["Report Delivery", "Stakeholder Communication", "Performance Tracking", "Continuous Updates"]
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {phase.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{phase.title}</h3>
                <p className="text-gray-600 mb-4 text-center text-sm">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-center text-xs text-gray-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Market Intelligence Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive intelligence services to support your strategic decision-making
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-teal-600" />,
                title: "Competitive Intelligence",
                description: "Comprehensive analysis of competitors and market positioning",
                deliverables: ["Competitor Profiles", "Market Share Analysis", "Strategy Assessment", "Threat Analysis"]
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
                title: "Market Trend Analysis",
                description: "Identification and analysis of emerging market trends",
                deliverables: ["Trend Identification", "Impact Assessment", "Forecast Analysis", "Opportunity Mapping"]
              },
              {
                icon: <Globe className="h-8 w-8 text-green-600" />,
                title: "Geographic Intelligence",
                description: "Regional and country-specific market intelligence",
                deliverables: ["Regional Analysis", "Market Entry Assessment", "Local Insights", "Cultural Intelligence"]
              },
              {
                icon: <Target className="h-8 w-8 text-purple-600" />,
                title: "Strategic Intelligence",
                description: "Strategic insights for business planning and execution",
                deliverables: ["Strategic Assessment", "Opportunity Analysis", "Risk Evaluation", "Action Recommendations"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.deliverables.map((deliverable, deliverableIndex) => (
                    <li key={deliverableIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Gain Market Intelligence?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Contact us to discuss how our intelligence services can support your strategy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={`/${lang}/services`} className="border border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
