import Link from 'next/link';
import { Rocket, Shield, Plane, Satellite, ArrowLeft } from 'lucide-react';

export default async function AerospaceDefencePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Rocket className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Aerospace and Defence
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Comprehensive market research reports on commercial aviation, military defense, space exploration, and aerospace technology
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
                The aerospace and defence industry represents one of the most technologically advanced and strategically important sectors globally. 
                This industry encompasses commercial aviation, military defense systems, space exploration, and cutting-edge aerospace technologies.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With increasing global security concerns, rising air travel demand, and rapid technological innovation, the aerospace and defence 
                sector is experiencing unprecedented growth and transformation.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$2.5T+</div>
                  <div className="text-gray-600">Global Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5.2%</div>
                  <div className="text-gray-600">Annual Growth Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Market Drivers</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Increasing defense spending globally</li>
                <li>• Rising commercial air travel demand</li>
                <li>• Space exploration and satellite technology</li>
                <li>• Advanced materials and manufacturing</li>
                <li>• Cybersecurity and digital transformation</li>
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
              Explore the diverse segments within the aerospace and defence industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Plane className="h-8 w-8 text-blue-600" />,
                title: "Commercial Aviation",
                description: "Aircraft manufacturing, airlines, and aviation services",
                features: ["Commercial Aircraft", "Regional Jets", "Business Aviation", "MRO Services"]
              },
              {
                icon: <Shield className="h-8 w-8 text-red-600" />,
                title: "Military Defense",
                description: "Military aircraft, weapons systems, and defense technology",
                features: ["Fighter Jets", "Missile Systems", "Radar Technology", "Electronic Warfare"]
              },
              {
                icon: <Satellite className="h-8 w-8 text-purple-600" />,
                title: "Space & Satellite",
                description: "Space exploration, satellite technology, and space services",
                features: ["Satellite Communications", "Space Launch", "Earth Observation", "Space Tourism"]
              },
              {
                icon: <Rocket className="h-8 w-8 text-green-600" />,
                title: "Aerospace Technology",
                description: "Advanced materials, propulsion systems, and avionics",
                features: ["Composite Materials", "Engine Technology", "Avionics Systems", "UAV Technology"]
              },
              {
                icon: <Shield className="h-8 w-8 text-orange-600" />,
                title: "Cybersecurity",
                description: "Digital security for aerospace and defense systems",
                features: ["Network Security", "Data Protection", "Threat Intelligence", "Incident Response"]
              },
              {
                icon: <Rocket className="h-8 w-8 text-indigo-600" />,
                title: "Emerging Technologies",
                description: "AI, IoT, and next-generation aerospace innovations",
                features: ["Artificial Intelligence", "Internet of Things", "Autonomous Systems", "Quantum Computing"]
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
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
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
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Aerospace & Defence Insights?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get comprehensive market research and strategic insights for the aerospace and defence industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={`/${lang}/industry`} className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Browse Other Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
