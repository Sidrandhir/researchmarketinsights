import Link from 'next/link';
import { Cpu, Smartphone, ArrowLeft, Zap, Monitor, Wifi } from 'lucide-react';

export default async function ElectronicsSemiconductorPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Cpu className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Electronics and Semiconductor
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Comprehensive market research reports on semiconductor manufacturing, consumer electronics, and advanced technology innovation
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
                The electronics and semiconductor industry is the backbone of modern technology, driving innovation across 
                all sectors. This industry encompasses semiconductor manufacturing, consumer electronics, and advanced 
                technology solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With the rise of AI, IoT, 5G, and autonomous systems, the industry is experiencing unprecedented growth 
                and technological advancement.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">$3.8T+</div>
                  <div className="text-gray-600">Global Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">8.5%</div>
                  <div className="text-gray-600">Annual Growth Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Market Drivers</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Artificial Intelligence and Machine Learning</li>
                <li>• Internet of Things (IoT) expansion</li>
                <li>• 5G and next-generation networks</li>
                <li>• Electric and autonomous vehicles</li>
                <li>• Cloud computing and edge devices</li>
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
              Explore the diverse segments within the electronics and semiconductor industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="h-8 w-8 text-indigo-600" />,
                title: "Semiconductors",
                description: "Chip design, manufacturing, and packaging",
                features: ["Logic Chips", "Memory Chips", "Analog ICs", "Foundry Services"]
              },
              {
                icon: <Smartphone className="h-8 w-8 text-blue-600" />,
                title: "Consumer Electronics",
                description: "Mobile devices and personal electronics",
                features: ["Smartphones", "Laptops", "Tablets", "Wearables"]
              },
              {
                icon: <Monitor className="h-8 w-8 text-green-600" />,
                title: "Display Technology",
                description: "Screens and visual technology",
                features: ["OLED Displays", "LCD Panels", "MicroLED", "Flexible Displays"]
              },
              {
                icon: <Wifi className="h-8 w-8 text-purple-600" />,
                title: "Communications",
                description: "Network infrastructure and connectivity",
                features: ["5G Networks", "WiFi 6", "Satellite Communications", "IoT Networks"]
              },
              {
                icon: <Zap className="h-8 w-8 text-yellow-600" />,
                title: "Power Electronics",
                description: "Power management and conversion",
                features: ["Power ICs", "Battery Management", "Renewable Energy", "Electric Vehicles"]
              },
              {
                icon: <Cpu className="h-8 w-8 text-red-600" />,
                title: "AI & Computing",
                description: "Artificial intelligence and computing systems",
                features: ["AI Chips", "Quantum Computing", "Edge Computing", "Data Centers"]
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
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
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
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Electronics & Semiconductor Insights?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get comprehensive market research and strategic insights for the electronics and semiconductor industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={`/${lang}/industry`} className="border border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Browse Other Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
