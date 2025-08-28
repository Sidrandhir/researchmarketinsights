import Link from 'next/link';
import { Zap, Sun, Wind, Battery, ArrowLeft, Leaf, Download } from 'lucide-react';

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

      {/* Featured Reports */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Reports</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our latest and most comprehensive energy and power market research reports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Global Capture and Storage (CCS) Technologies Market",
                description: "Comprehensive analysis of carbon capture and storage technologies market including market size, trends, and forecast 2024-2032",
                price: "$4,999",
                reportCode: "RMI-2024-008",
                features: ["Market Size & Forecast", "Technology Analysis", "Application Insights", "Regional Forecast"],
                image: "🌱"
              },
              {
                title: "Global Renewable Energy Market",
                description: "Analysis of solar, wind, and hydroelectric power markets with comprehensive market insights",
                price: "$4,999",
                reportCode: "RMI-2024-009",
                features: ["Solar Energy", "Wind Power", "Hydroelectric", "Market Trends"],
                image: "☀️"
              },
              {
                title: "Global Energy Storage Market",
                description: "Comprehensive analysis of energy storage technologies and market opportunities",
                price: "$4,999",
                reportCode: "RMI-2024-010",
                features: ["Battery Storage", "Grid Storage", "Market Drivers", "Future Outlook"],
                image: "⚡"
              }
            ].map((report, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{report.image}</div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">Featured</div>
                    <div className="text-xs text-gray-500">Report</div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                    Energy & Power
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {report.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                    {report.description}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  {report.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Code:</span> {report.reportCode}
                  </div>
                  <div className="text-2xl font-bold text-yellow-600">
                    {report.price}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link 
                    href={report.title === "Global Capture and Storage (CCS) Technologies Market" 
                      ? `/${lang}/reports/global-capture-and-storage-ccs-technologies-market`
                      : `/${lang}/reports/${report.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`
                    }
                    className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200"
                  >
                    View Details
                  </Link>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors duration-200">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
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
