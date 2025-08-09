'use client'

import React from 'react'
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
  Smartphone,
  ArrowRight
} from 'lucide-react'

const IndustryCategories: React.FC = () => {
  const categories = [
    {
      name: 'Aerospace & Defense',
      slug: 'aerospace-defense',
      icon: Plane,
      description: 'Aviation, defense systems, and space technology',
      color: 'from-blue-500 to-blue-600',
      gradient: 'from-blue-400 to-blue-600',
      count: '2,500+ reports',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Automotive & Transportation',
      slug: 'automotive-transportation',
      icon: Car,
      description: 'Vehicle manufacturing, mobility, and logistics',
      color: 'from-gray-500 to-gray-600',
      gradient: 'from-gray-400 to-gray-600',
      count: '3,200+ reports',
      bgColor: 'bg-gray-50'
    },
    {
      name: 'Banking, Financial Services & Insurance',
      slug: 'banking-financial-services-insurance',
      icon: Building2,
      description: 'Financial markets, banking, and insurance',
      color: 'from-green-500 to-green-600',
      gradient: 'from-green-400 to-green-600',
      count: '4,100+ reports',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Chemicals & Materials',
      slug: 'chemicals-materials',
      icon: FlaskConical,
      description: 'Chemical industry and advanced materials',
      color: 'from-purple-500 to-purple-600',
      gradient: 'from-purple-400 to-purple-600',
      count: '1,800+ reports',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Consumer Goods',
      slug: 'consumer-goods',
      icon: ShoppingBag,
      description: 'Retail, consumer products, and FMCG',
      color: 'from-pink-500 to-pink-600',
      gradient: 'from-pink-400 to-pink-600',
      count: '2,900+ reports',
      bgColor: 'bg-pink-50'
    },
    {
      name: 'Electronics & Semiconductor',
      slug: 'electronics-semiconductor',
      icon: Cpu,
      description: 'Electronics, semiconductors, and components',
      color: 'from-indigo-500 to-indigo-600',
      gradient: 'from-indigo-400 to-indigo-600',
      count: '3,600+ reports',
      bgColor: 'bg-indigo-50'
    },
    {
      name: 'Energy & Power',
      slug: 'energy-power',
      icon: Zap,
      description: 'Energy generation, distribution, and renewables',
      color: 'from-yellow-500 to-yellow-600',
      gradient: 'from-yellow-400 to-yellow-600',
      count: '2,300+ reports',
      bgColor: 'bg-yellow-50'
    },
    {
      name: 'Food & Beverages',
      slug: 'food-beverages',
      icon: Coffee,
      description: 'Food processing, beverages, and agriculture',
      color: 'from-orange-500 to-orange-600',
      gradient: 'from-orange-400 to-orange-600',
      count: '1,700+ reports',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'Life Sciences',
      slug: 'life-sciences',
      icon: Heart,
      description: 'Healthcare, pharmaceuticals, and biotechnology',
      color: 'from-red-500 to-red-600',
      gradient: 'from-red-400 to-red-600',
      count: '4,500+ reports',
      bgColor: 'bg-red-50'
    },
    {
      name: 'Technology, Media & Telecommunications',
      slug: 'technology-media-telecommunications',
      icon: Smartphone,
      description: 'IT, media, telecom, and digital transformation',
      color: 'from-teal-500 to-teal-600',
      gradient: 'from-teal-400 to-teal-600',
      count: '5,200+ reports',
      bgColor: 'bg-teal-50'
    }
  ]

  return (
    <section className="section-responsive bg-gradient-to-br from-gray-50 to-white">
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
            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
            Industry Categories
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="heading-responsive font-bold text-gray-900 mb-6"
          >
            Explore Industry Categories
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-responsive text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover comprehensive market research reports across all major industry sectors. 
            Find insights that drive your business decisions and stay ahead of the competition.
          </motion.p>
        </div>

        {/* Categories Grid - Responsive Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Link href={`/reports/${category.slug}`} className="block h-full">
                <div className={`card h-full p-6 text-center hover:shadow-xl transition-all duration-300 group-hover:border-primary-200 relative overflow-hidden ${category.bgColor} hover:bg-white`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`relative w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="text-xs text-primary-600 font-semibold bg-primary-50 px-3 py-1 rounded-full inline-block">
                      {category.count}
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5 text-primary-500" />
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
              Ready to Explore More?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Access our complete library of market research reports and industry insights to make informed business decisions.
            </p>
            <Link
              href="/reports"
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center gap-2"
            >
              View All Industries
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IndustryCategories 