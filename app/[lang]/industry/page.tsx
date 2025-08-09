'use client'

import { PageProps } from '@/types';
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslation, getLanguageFromPathname } from '@/lib/i18n'
import { Search, TrendingUp, Users, DollarSign, Globe } from 'lucide-react'

export default function IndustryPage({ params }: PageProps) { 
  const currentLang = getLanguageFromPathname(`/${params.lang}`)
  const { t } = useTranslation(currentLang)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    {
      id: 'aerospace',
      name: t('industry.categories.aerospace'),
      description: 'Defense systems, aircraft manufacturing, and space technology',
      reports: 245,
      growth: '+12.5%',
      icon: '🚀',
    },
    {
      id: 'automotive',
      name: t('industry.categories.automotive'),
      description: 'Vehicle manufacturing, transportation, and mobility solutions',
      reports: 389,
      growth: '+8.3%',
      icon: '🚗',
    },
    {
      id: 'banking',
      name: t('industry.categories.banking'),
      description: 'Financial services, insurance, and digital banking',
      reports: 567,
      growth: '+15.2%',
      icon: '🏦',
    },
    {
      id: 'chemicals',
      name: t('industry.categories.chemicals'),
      description: 'Chemical manufacturing, materials, and industrial processes',
      reports: 234,
      growth: '+6.7%',
      icon: '🧪',
    },
    {
      id: 'consumer',
      name: t('industry.categories.consumer'),
      description: 'Consumer goods, retail, and lifestyle products',
      reports: 456,
      growth: '+9.1%',
      icon: '🛍️',
    },
    {
      id: 'electronics',
      name: t('industry.categories.electronics'),
      description: 'Semiconductors, electronics, and digital devices',
      reports: 678,
      growth: '+18.4%',
      icon: '💻',
    },
    {
      id: 'energy',
      name: t('industry.categories.energy'),
      description: 'Power generation, renewable energy, and utilities',
      reports: 345,
      growth: '+11.8%',
      icon: '⚡',
    },
    {
      id: 'food',
      name: t('industry.categories.food'),
      description: 'Food processing, beverages, and agricultural products',
      reports: 298,
      growth: '+7.2%',
      icon: '🍽️',
    },
    {
      id: 'life-sciences',
      name: t('industry.categories.lifeSciences'),
      description: 'Healthcare, pharmaceuticals, and biotechnology',
      reports: 789,
      growth: '+22.1%',
      icon: '🏥',
    },
    {
      id: 'technology',
      name: t('industry.categories.technology'),
      description: 'Software, IT services, and digital transformation',
      reports: 892,
      growth: '+25.6%',
      icon: '🔧',
    },
  ]

  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || category.id === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('industry.title')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              {t('industry.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('industry.filter.search')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            {/* Filter */}
            <div className="md:w-64">
              <label htmlFor="industry-category-select" className="sr-only">
                {t('industry.filter.selectLabel') || 'Select Industry Category'}
              </label>
              <select
                id="industry-category-select"
                aria-label={t('industry.filter.selectLabel') || 'Select Industry Category'}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="all">{t('industry.filter.all')}</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Browse Industries
              </h2>
              <div className="text-sm text-gray-600">
                {filteredCategories.length} of {categories.length} industries
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{category.icon}</div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">
                      {category.growth}
                    </div>
                    <div className="text-xs text-gray-500">Growth</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  {category.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {category.reports} reports
                  </div>
                  <Link 
                    href={`/${params.lang}/industry/${category.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm hover:underline transition-all duration-200"
                  >
                    View Reports →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No industries found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry Research Statistics
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage across all major industries with detailed market analysis and insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: '4,500+', label: 'Reports Published', color: 'text-blue-600' },
              { icon: Users, value: '50,000+', label: 'Industry Experts', color: 'text-green-600' },
              { icon: DollarSign, value: '$2.5B+', label: 'Market Value Analyzed', color: 'text-purple-600' },
              { icon: Globe, value: '150+', label: 'Countries Covered', color: 'text-orange-600' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`flex justify-center mb-4 ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Need Custom Research?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our expert team can create custom research reports tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Request Custom Report
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Speak to Expert
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 