'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Plane, 
  Car, 
  Building2, 
  FlaskConical, 
  ShoppingBag, 
  Cpu, 
  Zap, 
  Coffee, 
  Heart, 
  Smartphone 
} from 'lucide-react'

const IndustryCategories = () => {
  const categories = [
    {
      name: 'Aerospace & Defense',
      slug: 'aerospace-defense',
      icon: Plane,
      description: 'Aviation, defense systems, and space technology',
      color: 'from-blue-500 to-blue-600',
      count: '2,500+ reports'
    },
    {
      name: 'Automotive & Transportation',
      slug: 'automotive-transportation',
      icon: Car,
      description: 'Vehicle manufacturing, mobility, and logistics',
      color: 'from-gray-500 to-gray-600',
      count: '3,200+ reports'
    },
    {
      name: 'Banking, Financial Services & Insurance',
      slug: 'banking-financial-services-insurance',
      icon: Building2,
      description: 'Financial markets, banking, and insurance',
      color: 'from-green-500 to-green-600',
      count: '4,100+ reports'
    },
    {
      name: 'Chemicals & Materials',
      slug: 'chemicals-materials',
      icon: FlaskConical,
      description: 'Chemical industry and advanced materials',
      color: 'from-purple-500 to-purple-600',
      count: '1,800+ reports'
    },
    {
      name: 'Consumer Goods',
      slug: 'consumer-goods',
      icon: ShoppingBag,
      description: 'Retail, consumer products, and FMCG',
      color: 'from-pink-500 to-pink-600',
      count: '2,900+ reports'
    },
    {
      name: 'Electronics & Semiconductor',
      slug: 'electronics-semiconductor',
      icon: Cpu,
      description: 'Electronics, semiconductors, and components',
      color: 'from-indigo-500 to-indigo-600',
      count: '3,600+ reports'
    },
    {
      name: 'Energy & Power',
      slug: 'energy-power',
      icon: Zap,
      description: 'Energy generation, distribution, and renewables',
      color: 'from-yellow-500 to-yellow-600',
      count: '2,300+ reports'
    },
    {
      name: 'Food & Beverages',
      slug: 'food-beverages',
      icon: Coffee,
      description: 'Food processing, beverages, and agriculture',
      color: 'from-orange-500 to-orange-600',
      count: '1,700+ reports'
    },
    {
      name: 'Life Sciences',
      slug: 'life-sciences',
      icon: Heart,
      description: 'Healthcare, pharmaceuticals, and biotechnology',
      color: 'from-red-500 to-red-600',
      count: '4,500+ reports'
    },
    {
      name: 'Technology, Media & Telecommunications',
      slug: 'technology-media-telecommunications',
      icon: Smartphone,
      description: 'IT, media, telecom, and digital transformation',
      color: 'from-teal-500 to-teal-600',
      count: '5,200+ reports'
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
            Explore Industry Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover comprehensive market research reports across all major industry sectors. 
            Find insights that drive your business decisions.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={`/industry/${category.slug}`}>
                <div className="card h-full p-6 text-center hover:shadow-medium transition-all duration-300 group-hover:border-primary-200">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="text-xs text-primary-600 font-medium">
                    {category.count}
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
          className="text-center mt-12"
        >
          <Link
            href="/industry"
            className="btn-outline inline-flex items-center"
          >
            View All Industries
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default IndustryCategories 