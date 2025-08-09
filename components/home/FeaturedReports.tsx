'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Download, Eye, TrendingUp, Clock } from 'lucide-react'

const FeaturedReports: React.FC = () => {
  const featuredReports = [
    {
      id: '1',
      title: 'Global Healthcare Market Analysis 2024',
      description: 'Comprehensive analysis of the healthcare industry including market size, trends, and growth opportunities across major regions.',
      category: 'Healthcare',
      price: 2999,
      originalPrice: 3999,
      rating: 4.8,
      downloads: 1250,
      views: 8500,
      image: '/images/reports/healthcare-report.jpg',
      slug: 'global-healthcare-market-analysis-2024',
      badge: 'Bestseller',
      publishedDate: '2024-01-15'
    },
    {
      id: '2',
      title: 'Electric Vehicle Market Trends & Forecast',
      description: 'In-depth analysis of the electric vehicle market with regional insights, competitive landscape, and future projections.',
      category: 'Automotive',
      price: 2499,
      originalPrice: 3499,
      rating: 4.9,
      downloads: 980,
      views: 7200,
      image: '/images/reports/ev-market-report.jpg',
      slug: 'electric-vehicle-market-trends-forecast',
      badge: 'Trending',
      publishedDate: '2024-01-10'
    },
    {
      id: '3',
      title: 'Artificial Intelligence in Manufacturing',
      description: 'Market research on AI adoption in manufacturing with case studies, ROI analysis, and implementation strategies.',
      category: 'Technology',
      price: 1999,
      originalPrice: 2999,
      rating: 4.7,
      downloads: 750,
      views: 5800,
      image: '/images/reports/ai-manufacturing-report.jpg',
      slug: 'artificial-intelligence-manufacturing',
      badge: 'New',
      publishedDate: '2024-01-20'
    },
    {
      id: '4',
      title: 'Renewable Energy Market Outlook 2024',
      description: 'Comprehensive study of renewable energy markets including solar, wind, and energy storage with investment analysis.',
      category: 'Energy',
      price: 3499,
      originalPrice: 4499,
      rating: 4.6,
      downloads: 620,
      views: 4900,
      image: '/images/reports/renewable-energy-report.jpg',
      slug: 'renewable-energy-market-outlook-2024',
      badge: 'Popular',
      publishedDate: '2024-01-05'
    }
  ]

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`; // Always DD/MM/YYYY
  }

  return (
    <section className="section-responsive bg-gradient-to-br from-white to-gray-50">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <TrendingUp className="h-4 w-4" />
            Featured Reports
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="heading-responsive font-bold text-gray-900 mb-6"
          >
            Featured Reports
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-responsive text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our most popular and highly-rated market research reports. 
            Get insights that drive strategic decisions and stay ahead of the competition.
          </motion.p>
        </div>

        {/* Reports Grid - Responsive Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredReports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Link href={`/reports/${report.slug}`} className="block h-full">
                <div className="card h-full overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:border-primary-200 relative">
                  {/* Badge */}
                  {report.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                        report.badge === 'Bestseller' ? 'bg-yellow-100 text-yellow-800' :
                        report.badge === 'Trending' ? 'bg-red-100 text-red-800' :
                        report.badge === 'New' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {report.badge}
                      </span>
                    </div>
                  )}

                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20"></div>
                    <div className="text-primary-600 text-4xl font-bold relative z-10">
                      {report.category.charAt(0)}
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ArrowRight className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                        {report.category}
                      </span>
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-semibold ml-1">{report.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200 leading-tight">
                      {report.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {report.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Download className="h-3 w-3 mr-1" />
                          <span className="font-medium">{report.downloads.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          <span className="font-medium">{report.views.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="h-3 w-3 mr-1" />
                        <span className="text-xs">{formatDate(report.publishedDate)}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900">${report.price.toLocaleString()}</span>
                        <span className="text-sm text-gray-500 line-through">${report.originalPrice.toLocaleString()}</span>
                        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                          {Math.round(((report.originalPrice - report.price) / report.originalPrice) * 100)}% OFF
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary-600 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Access More Insights?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Explore our complete library of market research reports and get the insights you need to make informed business decisions.
            </p>
            <Link
              href="/reports"
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center gap-2"
            >
              View All Reports
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedReports