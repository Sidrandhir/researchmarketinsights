'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Download, Eye } from 'lucide-react'

const FeaturedReports = () => {
  const featuredReports = [
    {
      id: '1',
      title: 'Global Healthcare Market Analysis 2024',
      description: 'Comprehensive analysis of the healthcare industry including market size, trends, and growth opportunities.',
      category: 'Healthcare',
      price: 2999,
      originalPrice: 3999,
      rating: 4.8,
      downloads: 1250,
      views: 8500,
      image: '/images/reports/healthcare-report.jpg',
      slug: 'global-healthcare-market-analysis-2024'
    },
    {
      id: '2',
      title: 'Electric Vehicle Market Trends & Forecast',
      description: 'In-depth analysis of the electric vehicle market with regional insights and competitive landscape.',
      category: 'Automotive',
      price: 2499,
      originalPrice: 3499,
      rating: 4.9,
      downloads: 980,
      views: 7200,
      image: '/images/reports/ev-market-report.jpg',
      slug: 'electric-vehicle-market-trends-forecast'
    },
    {
      id: '3',
      title: 'Artificial Intelligence in Manufacturing',
      description: 'Market research on AI adoption in manufacturing with case studies and ROI analysis.',
      category: 'Technology',
      price: 1999,
      originalPrice: 2999,
      rating: 4.7,
      downloads: 750,
      views: 5800,
      image: '/images/reports/ai-manufacturing-report.jpg',
      slug: 'artificial-intelligence-manufacturing'
    },
    {
      id: '4',
      title: 'Renewable Energy Market Outlook 2024',
      description: 'Comprehensive study of renewable energy markets including solar, wind, and energy storage.',
      category: 'Energy',
      price: 3499,
      originalPrice: 4499,
      rating: 4.6,
      downloads: 620,
      views: 4900,
      image: '/images/reports/renewable-energy-report.jpg',
      slug: 'renewable-energy-market-outlook-2024'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Featured Reports
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our most popular and highly-rated market research reports. 
            Get insights that drive strategic decisions.
          </motion.p>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredReports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={`/reports/${report.slug}`}>
                <div className="card h-full overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <div className="text-primary-600 text-4xl font-bold">
                      {report.category.charAt(0)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                        {report.category}
                      </span>
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium ml-1">{report.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
                      {report.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {report.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Download className="h-3 w-3 mr-1" />
                        {report.downloads}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {report.views}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-900">${report.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">${report.originalPrice}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary-600 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/reports"
            className="btn-primary inline-flex items-center"
          >
            View All Reports
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedReports 