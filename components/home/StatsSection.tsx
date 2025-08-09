'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Globe, FileText, Clock, Zap, Target } from 'lucide-react'

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '10,000+',
      label: 'Reports Published',
      description: 'Comprehensive market research reports across all industries',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      value: '50,000+',
      label: 'Happy Clients',
      description: 'Trusted by leading companies worldwide',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Years Experience',
      description: 'Industry expertise and deep knowledge',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Globe,
      value: '150+',
      label: 'Countries Served',
      description: 'Global reach and local expertise',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      value: '500+',
      label: 'Industry Experts',
      description: 'Specialized analysts and researchers',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock customer service',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const trustIndicators = [
    { name: 'Fortune 500 Companies', icon: Target },
    { name: 'Global Enterprises', icon: Globe },
    { name: 'Startups & SMEs', icon: Zap },
    { name: 'Government Agencies', icon: Award }
  ]

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
            <Target className="h-4 w-4" />
            Trusted by Industry Leaders
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="heading-responsive font-bold text-gray-900 mb-6"
          >
            Trusted by Industry Leaders
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-responsive text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We&apos;ve helped thousands of companies make informed decisions with our comprehensive market research and strategic insights.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="card h-full p-8 text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {stat.label}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Trusted by Leading Organizations
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={indicator.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl group-hover:bg-white/30 transition-all duration-300">
                      <indicator.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-lg font-semibold">
                    {indicator.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection 