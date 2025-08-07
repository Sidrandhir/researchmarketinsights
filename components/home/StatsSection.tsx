'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Globe, FileText, Clock } from 'lucide-react'

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '10,000+',
      label: 'Reports Published',
      description: 'Comprehensive market research reports'
    },
    {
      icon: Users,
      value: '50,000+',
      label: 'Happy Clients',
      description: 'Trusted by leading companies worldwide'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Years Experience',
      description: 'Industry expertise and deep knowledge'
    },
    {
      icon: Globe,
      value: '150+',
      label: 'Countries Served',
      description: 'Global reach and local expertise'
    },
    {
      icon: FileText,
      value: '500+',
      label: 'Industry Experts',
      description: 'Specialized analysts and researchers'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock customer service'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We&apos;ve helped thousands of companies make informed decisions with our comprehensive market research.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <div className="card p-8 h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
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
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Company logos would go here */}
            <div className="text-gray-400 text-sm font-medium">Fortune 500 Companies</div>
            <div className="text-gray-400 text-sm font-medium">Global Enterprises</div>
            <div className="text-gray-400 text-sm font-medium">Startups & SMEs</div>
            <div className="text-gray-400 text-sm font-medium">Government Agencies</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection 