import Link from 'next/link';
import { Smartphone, Monitor, Globe, ArrowLeft, Play, Wifi } from 'lucide-react';

export default async function TechnologyMediaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Smartphone className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology and Media
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
              Comprehensive market research reports on software, digital media, entertainment, and technology innovation
            </p>
          </div>
        </div>
      </section>

      {/* Back to Industries Link */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href={`/${lang}/industry`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Industries
          </Link>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                The technology and media industry is the driving force behind digital transformation and innovation. 
                This industry encompasses software development, digital media, entertainment, and emerging technologies.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With the rise of cloud computing, artificial intelligence, streaming services, and digital platforms, 
                the industry is experiencing unprecedented growth and disruption.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">$4.2T+</div>
                  <div className="text-gray-600">Global Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">9.1%</div>
                  <div className="text-gray-600">Annual Growth Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Market Drivers</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Cloud computing and SaaS adoption</li>
                <li>• Digital transformation acceleration</li>
                <li>• Streaming and digital media growth</li>
                <li>• AI and machine learning integration</li>
                <li>• Remote work and collaboration tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Segments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Segments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the diverse segments within the technology and media industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Monitor className="h-8 w-8 text-teal-600" />,
                title: "Software & SaaS",
                description: "Enterprise software and cloud services",
                features: ["Enterprise Software", "Cloud Services", "SaaS Platforms", "Development Tools"]
              },
              {
                icon: <Play className="h-8 w-8 text-red-600" />,
                title: "Digital Media",
                description: "Streaming, gaming, and digital content",
                features: ["Streaming Services", "Gaming", "Digital Publishing", "Social Media"]
              },
              {
                icon: <Globe className="h-8 w-8 text-blue-600" />,
                title: "Internet Services",
                description: "Web platforms and online services",
                features: ["E-commerce", "Search Engines", "Social Networks", "Online Marketplaces"]
              },
              {
                icon: <Smartphone className="h-8 w-8 text-green-600" />,
                title: "Mobile Technology",
                description: "Mobile apps and mobile-first solutions",
                features: ["Mobile Apps", "Mobile Commerce", "Mobile Gaming", "Mobile Payments"]
              },
              {
                icon: <Wifi className="h-8 w-8 text-purple-600" />,
                title: "Emerging Tech",
                description: "Next-generation technologies",
                features: ["Artificial Intelligence", "Blockchain", "IoT", "Virtual Reality"]
              },
              {
                icon: <Monitor className="h-8 w-8 text-orange-600" />,
                title: "Digital Marketing",
                description: "Online advertising and marketing tech",
                features: ["Digital Advertising", "Marketing Automation", "Analytics", "Customer Experience"]
              }
            ].map((segment, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {segment.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{segment.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{segment.description}</p>
                <ul className="space-y-2">
                  {segment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Reports</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our latest market research reports in the Technology & Media industry
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-start justify-between mb-6">
                <div className="text-6xl">🤖</div>
                <div className="text-right">
                  <div className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">Featured</div>
                  <div className="text-xs text-purple-500 mt-1">Report</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Global Agentic AI Systems Market
              </h3>
              
              <p className="text-gray-700 mb-6">
                Comprehensive analysis of agentic AI systems market including market size, trends, and forecast 2024-2032. 
                Covers software, services, hardware components, deployment types, applications, and industry verticals.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">$8.45B</div>
                  <div className="text-sm text-gray-600">Market Size (2024)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">18.7%</div>
                  <div className="text-sm text-gray-600">CAGR</div>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Market Size & Forecast
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Component Analysis
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Application Insights
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Regional Forecast
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Code:</span> RMI-2024-006
                </div>
                <div className="text-2xl font-bold text-purple-600">$4,999</div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <Link 
                  href="/reports/global-agentic-ai-systems-market"
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                >
                  View Details
                </Link>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-lg transition-colors duration-200">
                  <span className="text-lg">💰</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 border border-teal-200">
              <div className="flex items-start justify-between mb-6">
                <div className="text-6xl">🤖</div>
                <div className="text-right">
                  <div className="text-sm font-medium text-teal-600 bg-teal-100 px-3 py-1 rounded-full">Featured</div>
                  <div className="text-xs text-teal-500 mt-1">Report</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Global Robotics in e-commerce Fulfillment Market
              </h3>
              
              <p className="text-gray-700 mb-6">
                Comprehensive analysis of robotics in e-commerce fulfillment market including market size, trends, and forecast 2024-2032. 
                Covers robot types, applications, regional analysis, and competitive landscape.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">$3.42B</div>
                  <div className="text-sm text-gray-600">Market Size (2024)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">24.8%</div>
                  <div className="text-sm text-gray-600">CAGR</div>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Market Size & Forecast
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Robot Type Analysis
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Application Insights
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Regional Forecast
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Code:</span> RMI-2024-009
                </div>
                <div className="text-2xl font-bold text-teal-600">$4,999</div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <Link 
                  href="/reports/global-robotics-in-ecommerce-fulfillment-market"
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                >
                  View Details
                </Link>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-lg transition-colors duration-200">
                  <span className="text-lg">💰</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Technology & Media Insights?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Get comprehensive market research and strategic insights for the technology and media industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={`/${lang}/industry`} className="border border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Browse Other Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
