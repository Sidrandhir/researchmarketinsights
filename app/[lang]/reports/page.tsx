import Link from 'next/link';
import { FileText, Search, Filter, ArrowRight, Download } from 'lucide-react';

export default async function ReportsPage({ params }: { params: Promise<{ lang: string }> }) {
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
              Market Research Reports
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Comprehensive industry analysis and market intelligence reports across diverse sectors
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search reports by title, industry, or keyword..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option>All Industries</option>
                <option>Life Sciences</option>
                <option>Aerospace & Defence</option>
                <option>Automotive & Transportation</option>
                <option>Banking & Financial</option>
                <option>Chemicals & Materials</option>
                <option>Consumer Goods</option>
                <option>Electronics & Semiconductor</option>
                <option>Energy & Power</option>
                <option>Food & Beverages</option>
                <option>Technology & Media</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option>All Regions</option>
                <option>North America</option>
                <option>Europe</option>
                <option>Asia Pacific</option>
                <option>Latin America</option>
                <option>Middle East & Africa</option>
              </select>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Reports</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our latest and most comprehensive market research reports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Global Plant Based Meat Alternatives Market",
                industry: "Food & Beverages",
                description: "Comprehensive analysis of plant-based meat alternatives market including market size, trends, and forecast 2024-2032",
                price: "$4,999",
                reportCode: "RMI-2024-004",
                features: ["Market Size & Forecast", "Source Analysis", "Product Segmentation", "Regional Insights"]
              },
              {
                title: "Global Wearable Health Monitoring Devices Market",
                industry: "Life Sciences",
                description: "Comprehensive analysis of wearable health monitoring devices market including market size, trends, and forecast 2024-2032",
                price: "$4,999",
                reportCode: "RMI-2024-007",
                features: ["Market Size & Forecast", "Device Grade Analysis", "Application Insights", "Regional Forecast"]
              },
              {
                title: "Global Capture and Storage (CCS) Technologies Market",
                industry: "Energy & Power",
                description: "Comprehensive analysis of carbon capture and storage technologies market including market size, trends, and forecast 2024-2032",
                price: "$4,999",
                reportCode: "RMI-2024-008",
                features: ["Market Size & Forecast", "Technology Analysis", "Application Insights", "Regional Forecast"]
              },
              {
                title: "Global Robotics in e-commerce Fulfillment Market",
                industry: "Technology & Media",
                description: "Comprehensive analysis of robotics in e-commerce fulfillment market including market size, trends, and forecast 2024-2032",
                price: "$4,999",
                reportCode: "RMI-2024-009",
                features: ["Market Size & Forecast", "Robot Type Analysis", "Application Insights", "Regional Forecast"]
              },
              {
                title: "Global Agentic AI Systems Market",
                industry: "Technology & Media",
                description: "Comprehensive analysis of agentic AI systems market including market size, trends, and forecast 2024-2032",
                price: "$4,999",
                reportCode: "RMI-2024-006",
                features: ["Market Size & Forecast", "Component Analysis", "Application Insights", "Regional Forecast"]
              },
              {
                title: "Global Polymer Encapsulated Brachytherapy Devices Market",
                industry: "Life Sciences",
                description: "Comprehensive analysis of polymer encapsulated brachytherapy devices market including market size, trends, and forecast 2024-2032",
                price: "$4,999",
                reportCode: "RMI-2024-005",
                features: ["Market Size & Forecast", "Product Analysis", "Application Insights", "Regional Forecast"]
              },
              {
                title: "Global Patient Repositioning System Market",
                industry: "Life Sciences",
                description: "Analysis of patient positioning systems including market size, trends, and forecast 2024-2032",
                price: "$4,999",
                reportCode: "RPT-PRS-001",
                features: ["Market Size & Forecast", "Competitive Analysis", "Regional Insights", "Technology Trends"]
              },
              {
                title: "Connected Drug Delivery Devices Market",
                industry: "Life Sciences",
                description: "Comprehensive analysis of connected drug delivery technologies and market opportunities",
                price: "$5,499",
                reportCode: "RPT-CDD-002",
                features: ["Device Types", "Market Drivers", "Regulatory Landscape", "Future Outlook"]
              },
              {
                title: "Patient Monitoring Devices Market",
                industry: "Life Sciences",
                description: "In-depth analysis of patient monitoring technologies and market dynamics",
                price: "$5,999",
                reportCode: "RPT-PMD-003",
                features: ["Device Categories", "Market Segmentation", "Growth Factors", "Regional Analysis"]
              },
              {
                title: "Pharmaceutical Packaging Market",
                industry: "Life Sciences",
                description: "Analysis of pharmaceutical packaging solutions and market trends",
                price: "$4,499",
                reportCode: "RPT-PPM-004",
                features: ["Packaging Types", "Material Analysis", "Sustainability Trends", "Market Forecast"]
              },
              {
                title: "Medical Device Outsourcing Market",
                industry: "Life Sciences",
                description: "Comprehensive analysis of medical device outsourcing services and market opportunities",
                price: "$5,499",
                reportCode: "RPT-MDO-005",
                features: ["Service Types", "Market Drivers", "Regional Analysis", "Future Trends"]
              }
            ].map((report, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">📊</div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">Featured</div>
                    <div className="text-xs text-gray-500">Report</div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                    {report.industry}
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
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Code:</span> {report.reportCode}
                  </div>
                  <div className="text-2xl font-bold text-indigo-600">
                    {report.price}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link 
                    href={report.title === "Global Plant Based Meat Alternatives Market" 
                      ? `/${lang}/reports/global-plant-based-meat-alternatives-market`
                      : report.title === "Global Wearable Health Monitoring Devices Market"
                      ? `/${lang}/reports/global-wearable-health-monitoring-devices-market`
                      : report.title === "Global Agentic AI Systems Market"
                      ? `/${lang}/reports/global-agentic-ai-systems-market`
                      : report.title === "Global Polymer Encapsulated Brachytherapy Devices Market"
                      ? `/${lang}/reports/polymer-encapsulated-brachytherapy-devices-market`
                      : report.title === "Global Capture and Storage (CCS) Technologies Market"
                      ? `/${lang}/reports/global-capture-and-storage-ccs-technologies-market`
                      : report.title === "Global Robotics in e-commerce Fulfillment Market"
                      ? `/${lang}/reports/global-robotics-in-e-commerce-fulfillment-market`
                      : `/${lang}/reports/${report.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`
                    }
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200"
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

      {/* Industry Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Industry</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of reports across diverse industry sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Life Sciences", count: "27+ Reports", color: "from-red-500 to-red-600" },
              { name: "Aerospace & Defence", count: "15+ Reports", color: "from-gray-500 to-gray-600" },
              { name: "Automotive & Transportation", count: "20+ Reports", color: "from-blue-500 to-blue-600" },
              { name: "Banking & Financial", count: "18+ Reports", color: "from-green-500 to-green-600" },
              { name: "Chemicals & Materials", count: "12+ Reports", color: "from-purple-500 to-purple-600" },
              { name: "Consumer Goods", count: "22+ Reports", color: "from-pink-500 to-pink-600" },
              { name: "Electronics & Semiconductor", count: "30+ Reports", color: "from-indigo-500 to-indigo-600" },
              { name: "Energy & Power", count: "17+ Reports", color: "from-yellow-500 to-yellow-600" },
              { name: "Food & Beverages", count: "15+ Reports", color: "from-orange-500 to-orange-600" },
              { name: "Technology & Media", count: "29+ Reports", color: "from-teal-500 to-teal-600" }
            ].map((industry, index) => (
              <Link 
                key={index}
                href={`/${lang}/industry/${industry.name.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and')}`}
                className="group"
              >
                <div className={`bg-gradient-to-r ${industry.color} text-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                  <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-white/80">{industry.count}</p>
                  <div className="flex items-center mt-4 text-white/80 group-hover:text-white transition-colors duration-200">
                    <span className="text-sm">Explore Reports</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Research?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Can&apos;t find what you&apos;re looking for? We offer custom research solutions tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Request Custom Report
            </Link>
            <Link href={`/${lang}/services`} className="border border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
