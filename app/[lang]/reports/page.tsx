import Link from 'next/link';
import { FileText, Search, Filter, ArrowRight, Download, Calendar, DollarSign } from 'lucide-react';
import { prisma } from '@/lib/db';

export default async function ReportsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  // Fetch all published reports from database
  const reports = await prisma.report.findMany({
    where: { status: 'PUBLISHED' },
    include: {
      author: {
        select: {
          name: true,
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const getCategoryDisplayName = (category: string) => {
    return category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

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
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Reports</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {reports.length} comprehensive market research reports available
            </p>
          </div>

          {reports.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Reports Available</h3>
              <p className="text-gray-600">
                No reports are currently available. Check back soon for new reports.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reports.map((report) => (
                <div key={report.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {report.reportCode}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {getCategoryDisplayName(report.category)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {report.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {report.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(report.createdAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>By {report.author?.name || 'Admin'}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-2xl font-bold text-gray-900">
                        {formatPrice(report.price)}
                      </div>
                      {report.discount && (
                        <div className="text-lg text-green-600 font-medium">
                          {formatPrice(report.discount)}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Link
                        href={`/${lang}/reports/${report.slug}`}
                        className="flex-1 bg-indigo-600 text-white text-center py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                      >
                        View Report
                      </Link>
                      <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Life Sciences & Healthcare",
                description: "Biotechnology, pharmaceuticals, medical devices, and healthcare services",
                icon: "🧬",
                link: `/${lang}/reports/industry/life-sciences`,
                count: reports.filter(r => r.category === 'LIFE_SCIENCES').length
              },
              {
                title: "Technology & Media",
                description: "Software, hardware, telecommunications, and digital media",
                icon: "💻",
                link: `/${lang}/reports/industry/technology`,
                count: reports.filter(r => r.category === 'TECHNOLOGY_MEDIA_TELECOMMUNICATIONS').length
              },
              {
                title: "Automotive & Transportation",
                description: "Vehicle manufacturing, transportation services, and mobility solutions",
                icon: "🚗",
                link: `/${lang}/reports/industry/automotive`,
                count: reports.filter(r => r.category === 'AUTOMOTIVE_TRANSPORTATION').length
              },
              {
                title: "Energy & Power",
                description: "Renewable energy, oil & gas, power generation, and utilities",
                icon: "⚡",
                link: `/${lang}/reports/industry/energy`,
                count: reports.filter(r => r.category === 'ENERGY_POWER').length
              },
              {
                title: "Food & Beverages",
                description: "Food processing, beverages, agriculture, and food services",
                icon: "🍽️",
                link: `/${lang}/reports/industry/food`,
                count: reports.filter(r => r.category === 'FOOD_BEVERAGES').length
              },
              {
                title: "Chemicals & Materials",
                description: "Chemical manufacturing, materials science, and specialty chemicals",
                icon: "🧪",
                link: `/${lang}/reports/industry/chemicals`,
                count: reports.filter(r => r.category === 'CHEMICALS_MATERIALS').length
              },
              {
                title: "Aerospace & Defense",
                description: "Aircraft manufacturing, defense systems, and space technology",
                icon: "✈️",
                link: `/${lang}/reports/industry/aerospace`,
                count: reports.filter(r => r.category === 'AEROSPACE_DEFENSE').length
              },
              {
                title: "Banking & Financial Services",
                description: "Banking, insurance, investment, and financial technology",
                icon: "🏦",
                link: `/${lang}/reports/industry/banking`,
                count: reports.filter(r => r.category === 'BANKING_FINANCIAL_SERVICES_INSURANCE').length
              },
              {
                title: "Consumer Goods",
                description: "Retail, consumer products, fashion, and household goods",
                icon: "🛍️",
                link: `/${lang}/reports/industry/consumer`,
                count: reports.filter(r => r.category === 'CONSUMER_GOODS').length
              },
              {
                title: "Electronics & Semiconductor",
                description: "Electronics manufacturing, semiconductors, and electronic components",
                icon: "🔌",
                link: `/${lang}/reports/industry/electronics`,
                count: reports.filter(r => r.category === 'ELECTRONICS_SEMICONDUCTOR').length
              }
            ].map((industry, index) => (
              <Link key={index} href={industry.link} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {industry.description}
                    </p>
                    <div className="flex items-center justify-center text-indigo-600 font-medium">
                      <span>{industry.count} Reports</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}