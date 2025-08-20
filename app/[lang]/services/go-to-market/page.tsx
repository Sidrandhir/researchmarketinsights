import Link from 'next/link';
import { Rocket, Target, Users, Globe, ArrowLeft, BarChart3, TrendingUp, Zap, Lightbulb } from 'lucide-react';

export default async function GoToMarketPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Rocket className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Go-to-Market Strategy
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Strategic market entry and expansion planning to maximize your product&apos;s success
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Go-to-Market Strategy Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our go-to-market strategy services help businesses successfully launch products and services 
                into new markets. We provide comprehensive market analysis, competitive positioning, and 
                strategic execution plans to ensure your market entry is successful and sustainable.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From initial market assessment to full-scale launch execution, we guide you through every 
                step of the go-to-market process with data-driven insights and proven methodologies.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
                  <div className="text-gray-600">Markets Entered</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Reduced market entry risks</li>
                <li>• Faster time to market</li>
                <li>• Optimized resource allocation</li>
                <li>• Competitive advantage</li>
                <li>• Measurable success metrics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Go-to-Market Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Go-to-Market Framework</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology for successful market entry and expansion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Target className="h-10 w-10 text-purple-600" />,
                title: "Market Assessment",
                description: "Comprehensive market analysis and opportunity identification",
                steps: ["Market Sizing", "Competitive Analysis", "Customer Segmentation", "Market Trends"]
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-blue-600" />,
                title: "Strategy Development",
                description: "Strategic planning and positioning development",
                steps: ["Value Proposition", "Positioning Strategy", "Pricing Strategy", "Channel Strategy"]
              },
              {
                icon: <Rocket className="h-10 w-10 text-green-600" />,
                title: "Launch Planning",
                description: "Detailed execution planning and resource allocation",
                steps: ["Launch Timeline", "Resource Planning", "Risk Mitigation", "Success Metrics"]
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-orange-600" />,
                title: "Execution & Optimization",
                description: "Launch execution and performance optimization",
                steps: ["Launch Execution", "Performance Monitoring", "Optimization", "Scale Planning"]
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
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Go-to-Market Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive services to support your market entry and expansion goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
                title: "Market Entry Strategy",
                description: "Comprehensive market entry planning and execution",
                deliverables: ["Market Assessment Report", "Entry Strategy Document", "Risk Analysis", "Implementation Roadmap"]
              },
              {
                icon: <Globe className="h-8 w-8 text-blue-600" />,
                title: "International Expansion",
                description: "Global market expansion and localization strategies",
                deliverables: ["Country Analysis", "Localization Strategy", "Regulatory Compliance", "Cultural Adaptation Guide"]
              },
              {
                icon: <Users className="h-8 w-8 text-green-600" />,
                title: "Customer Acquisition Strategy",
                description: "Strategic customer acquisition and retention planning",
                deliverables: ["Customer Journey Mapping", "Acquisition Strategy", "Retention Plan", "LTV Optimization"]
              },
              {
                icon: <Zap className="h-8 w-8 text-orange-600" />,
                title: "Launch Execution Support",
                description: "Hands-on support for successful product launches",
                deliverables: ["Launch Project Management", "Stakeholder Coordination", "Performance Monitoring", "Optimization Support"]
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
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
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
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Market Entry Strategy?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact us to discuss how our go-to-market services can accelerate your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={`/${lang}/services`} className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
