'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, Users, Award, Clock } from 'lucide-react'

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'TechCorp',
      content: 'The market research reports provided invaluable insights that helped us make strategic decisions. The depth of analysis and actionable recommendations exceeded our expectations.',
      rating: 5,
      avatar: '/images/testimonials/sarah.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CEO',
      company: 'InnovateLab',
      content: 'Exceptional quality and depth of analysis. The reports gave us the competitive edge we needed to enter new markets successfully.',
      rating: 5,
      avatar: '/images/testimonials/michael.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Strategy Manager',
      company: 'Global Solutions',
      content: 'Comprehensive, well-researched, and actionable insights. The reports provided exactly what we were looking for to drive our business strategy.',
      rating: 5,
      avatar: '/images/testimonials/emily.jpg'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'VP of Business Development',
      company: 'FutureTech',
      content: 'Outstanding research quality and customer service. The insights helped us identify new opportunities and optimize our market positioning.',
      rating: 5,
      avatar: '/images/testimonials/david.jpg'
    }
  ]

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Companies Served',
      description: 'Trusted by leading organizations worldwide'
    },
    {
      icon: Award,
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Consistently high satisfaction ratings'
    },
    {
      icon: Clock,
      value: '15+',
      label: 'Years Experience',
      description: 'Decades of market research expertise'
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
            <Quote className="h-4 w-4" />
            Client Testimonials
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="heading-responsive font-bold text-gray-900 mb-6"
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-responsive text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Don&apos;t just take our word for it. Here&apos;s what industry leaders and decision-makers have to say about our research and insights.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="card h-full p-6 text-center hover:shadow-xl transition-all duration-300 relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-8 w-8 text-primary-600" />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed text-sm">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-600">
                      {testimonial.position}
                    </div>
                    <div className="text-xs text-primary-600 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Satisfaction Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Trusted by Industry Leaders
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl group-hover:bg-white/30 transition-all duration-300">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-primary-100 text-sm">
                    {stat.description}
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

export default TestimonialsSection 