import Link from 'next/link';
import { Zap, Sun, Wind, Battery, ArrowLeft, Leaf } from 'lucide-react';

export default async function EnergyPowerPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Zap className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Energy and Power
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto">
              Comprehensive market research reports on renewable energy, power generation, energy storage, and sustainable energy solutions
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
                The energy and power industry is undergoing a fundamental transformation from fossil fuels to renewable 
                energy sources. This industry encompasses power generation, energy storage, transmission, and sustainable 
                energy solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With increasing focus on climate change, energy security, and technological innovation, the industry 
                is experiencing unprecedented growth in renewable energy and energy storage solutions.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">$7.8T+</div>
                  <div className="text-gray-600">Global Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">6.2%</div>
                  <div className="text-gray-600">Annual Growth Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Market Drivers</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Renewable energy adoption acceleration</li>
                <li>• Energy storage technology advancement</li>
                <li>• Climate change and sustainability goals</li>
                <li>• Smart grid and digital transformation</li>
                <li>• Energy security and independence</li>
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
              Explore the diverse segments within the energy and power industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sun className="h-8 w-8 text-yellow-600" />,
                title: "Solar Energy",
                description: "Photovoltaic systems and solar power generation",
                features: ["Solar Panels", "Solar Farms", "Rooftop Solar", "Solar Thermal"]
              },
              {
                icon: <Wind className="h-8 w-8 text-blue-600" />,
                title: "Wind Energy",
                description: "Onshore and offshore wind power",
                features: ["Onshore Wind", "Offshore Wind", "Wind Turbines", "Wind Farms"]
              },
              {
                icon: <Battery className="h-8 w-8 text-green-600" />,
                title: "Energy Storage",
                description: "Battery storage and energy management",
                features: ["Lithium-ion Batteries", "Grid Storage", "Home Storage", "Flow Batteries"]
              },
              {
                icon: <Zap className="h-8 w-8 text-purple-600" />,
                title: "Power Generation",
                description: "Traditional and renewable power plants",
                features: ["Thermal Power", "Hydroelectric", "Nuclear Power", "Geothermal"]
              },
              {
                icon: <Leaf className="h-8 w-8 text-emerald-600" />,
                title: "Smart Grid",
                description: "Intelligent power distribution systems",
                features: ["Smart Meters", "Grid Automation", "Demand Response", "Microgrids"]
              },
              {
                icon: <Zap className="h-8 w-8 text-red-600" />,
                title: "Energy Efficiency",
                description: "Energy conservation and optimization",
                features: ["Building Efficiency", "Industrial Efficiency", "LED Lighting", "Smart Buildings"]
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
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
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
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Energy & Power Insights?</h2>
          <p className="text-xl text-yellow-100 mb-8">
            Get comprehensive market research and strategic insights for the energy and power industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={`/${lang}/industry`} className="border border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Browse Other Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
