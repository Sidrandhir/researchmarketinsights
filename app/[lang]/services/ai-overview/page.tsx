import Link from 'next/link';
import { Cpu, Brain, ArrowLeft, BarChart3, Globe, Users, Target, Rocket } from 'lucide-react';

export default async function AIOverviewPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Cpu className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Overview
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Comprehensive insights into artificial intelligence markets, trends, and strategic opportunities
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Market Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI overview services provide comprehensive insights into the rapidly evolving artificial 
                intelligence landscape. We analyze market trends, technology developments, and strategic 
                opportunities across all AI sectors and applications.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From machine learning to robotics, we help organizations understand AI market dynamics, 
                identify investment opportunities, and develop strategic AI adoption roadmaps.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">$500B+</div>
                  <div className="text-gray-600">Market Size by 2027</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">35%</div>
                  <div className="text-gray-600">Annual Growth Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Market opportunity identification</li>
                <li>• Technology trend analysis</li>
                <li>• Investment decision support</li>
                <li>• Strategic planning insights</li>
                <li>• Competitive intelligence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Landscape */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Technology Landscape</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage of AI technologies and market segments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-12 w-12 text-purple-600" />,
                title: "Machine Learning",
                description: "Supervised, unsupervised, and reinforcement learning technologies",
                applications: ["Predictive Analytics", "Computer Vision", "Natural Language Processing", "Recommendation Systems"]
              },
              {
                icon: <Cpu className="h-12 w-12 text-blue-600" />,
                title: "Deep Learning",
                description: "Neural networks and advanced AI architectures",
                applications: ["Image Recognition", "Speech Processing", "Autonomous Systems", "Creative AI"]
              },
              {
                icon: <Rocket className="h-12 w-12 text-green-600" />,
                title: "Emerging AI",
                description: "Next-generation AI technologies and innovations",
                applications: ["Quantum AI", "Edge AI", "Federated Learning", "Explainable AI"]
              }
            ].map((technology, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {technology.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{technology.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{technology.description}</p>
                <ul className="space-y-2">
                  {technology.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Market Segments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Market Segments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key market segments and industry applications of artificial intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
                title: "Enterprise AI",
                description: "AI solutions for business operations and decision-making",
                features: ["Business Intelligence", "Process Automation", "Customer Analytics", "Risk Management"]
              },
              {
                icon: <Globe className="h-8 w-8 text-blue-600" />,
                title: "AI Infrastructure",
                description: "Cloud platforms, hardware, and development tools",
                features: ["Cloud AI Platforms", "AI Chips", "Development Frameworks", "Data Infrastructure"]
              },
              {
                icon: <Users className="h-8 w-8 text-green-600" />,
                title: "Consumer AI",
                description: "AI-powered consumer applications and devices",
                features: ["Smart Assistants", "Mobile AI", "Entertainment", "Personalization"]
              },
              {
                icon: <Target className="h-8 w-8 text-orange-600" />,
                title: "Industry-Specific AI",
                description: "AI applications tailored to specific industries",
                features: ["Healthcare AI", "Financial AI", "Manufacturing AI", "Retail AI"]
              }
            ].map((segment, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  {segment.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{segment.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{segment.description}</p>
                <ul className="space-y-2">
                  {segment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
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
          <h2 className="text-3xl font-bold mb-4">Ready to Explore AI Opportunities?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact us to discuss how our AI overview services can guide your strategy
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
