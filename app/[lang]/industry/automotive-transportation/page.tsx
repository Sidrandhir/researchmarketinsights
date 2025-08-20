import Link from 'next/link';
import { Car, Truck, Train, Ship, ArrowLeft, Zap } from 'lucide-react';

export default async function AutomotiveTransportationPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Car className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Automotive and Transportation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive market research reports on automotive manufacturing, electric vehicles, logistics, and transportation infrastructure
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
                The automotive and transportation industry is undergoing a revolutionary transformation driven by electric vehicles, 
                autonomous driving technology, and sustainable mobility solutions. This sector encompasses passenger vehicles, 
                commercial transportation, and infrastructure development.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With increasing focus on environmental sustainability, urbanization, and digital transformation, the industry 
                is experiencing unprecedented innovation and market disruption.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$8.5T+</div>
                  <div className="text-gray-600">Global Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">6.8%</div>
                  <div className="text-gray-600">Annual Growth Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Market Drivers</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Electric vehicle adoption acceleration</li>
                <li>• Autonomous driving technology</li>
                <li>• Sustainable mobility solutions</li>
                <li>• Digital transformation and connectivity</li>
                <li>• Urbanization and smart cities</li>
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
              Explore the diverse segments within the automotive and transportation industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Car className="h-8 w-8 text-blue-600" />,
                title: "Passenger Vehicles",
                description: "Cars, SUVs, and light commercial vehicles",
                features: ["Electric Vehicles", "Hybrid Cars", "Luxury Vehicles", "Compact Cars"]
              },
              {
                icon: <Truck className="h-8 w-8 text-green-600" />,
                title: "Commercial Transportation",
                description: "Trucks, buses, and heavy commercial vehicles",
                features: ["Freight Trucks", "Passenger Buses", "Delivery Vehicles", "Construction Equipment"]
              },
              {
                icon: <Train className="h-8 w-8 text-purple-600" />,
                title: "Rail Transportation",
                description: "High-speed rail, metro systems, and freight rail",
                features: ["High-Speed Rail", "Metro Systems", "Freight Rail", "Light Rail"]
              },
              {
                icon: <Ship className="h-8 w-8 text-indigo-600" />,
                title: "Maritime Transport",
                description: "Cargo ships, passenger ferries, and port infrastructure",
                features: ["Container Ships", "Passenger Ferries", "Port Operations", "Maritime Logistics"]
              },
              {
                icon: <Zap className="h-8 w-8 text-yellow-600" />,
                title: "Electric Mobility",
                description: "EV infrastructure and charging solutions",
                features: ["Charging Stations", "Battery Technology", "EV Components", "Smart Grid"]
              },
              {
                icon: <Car className="h-8 w-8 text-red-600" />,
                title: "Autonomous Vehicles",
                description: "Self-driving technology and mobility services",
                features: ["Autonomous Cars", "Robotaxis", "ADAS Systems", "Mobility Services"]
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Automotive & Transportation Insights?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get comprehensive market research and strategic insights for the automotive and transportation industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={`/${lang}/industry`} className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Browse Other Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
