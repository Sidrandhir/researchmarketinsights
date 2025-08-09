'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Menu, X, Globe, ChevronDown, ArrowRight } from 'lucide-react'
import { useTranslation, getLanguageFromPathname, languages, type Language } from '@/lib/i18n'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const currentLang = getLanguageFromPathname(pathname)
  const { t } = useTranslation(currentLang)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: t('nav.home'), href: `/${currentLang}` },
    { name: t('nav.industry'), href: `/${currentLang}/industry` },
    { name: t('nav.about'), href: `/${currentLang}/about` },
    { name: t('nav.pressRelease'), href: `/${currentLang}/press-releases` },
    { name: t('nav.contact'), href: `/${currentLang}/contact` },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality
    setIsSearchOpen(false)
  }

  const handleLanguageChange = (lang: Language) => {
    const pathWithoutLang = pathname.replace(`/${currentLang}`, '')
    const newPath = lang === 'en' ? pathWithoutLang : `/${lang}${pathWithoutLang}`
    router.push(newPath)
    setIsLanguageOpen(false)
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="container-responsive">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href={`/${currentLang}`} className="flex items-center group">
            <div className="text-xl lg:text-2xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors duration-200">
              Research Market Insights
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-primary-50 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-primary-50"
              >
                <Globe className="h-4 w-4" />
                <span>{languages[currentLang]}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-200"
                  >
                    {Object.entries(languages).map(([code, name]) => (
                      <button
                        key={code}
                        onClick={() => handleLanguageChange(code as Language)}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-primary-50 transition-colors duration-200 ${
                          currentLang === code ? 'text-primary-600 bg-primary-50 font-semibold' : 'text-gray-700'
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              href={`/${currentLang}/reports`}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md inline-flex items-center gap-2"
            >
              Browse Reports
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile CTA */}
                <Link
                  href={`/${currentLang}/reports`}
                  className="block mt-4 bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Browse Reports
                </Link>
                
                {/* Mobile Language Switcher */}
                <div className="px-4 py-3 border-t border-gray-200 mt-4">
                  <div className="text-sm font-medium text-gray-500 mb-3">{t('common.language')}</div>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(languages).map(([code, name]) => (
                      <button
                        key={code}
                        onClick={() => {
                          handleLanguageChange(code as Language)
                          setIsMenuOpen(false)
                        }}
                        className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                          currentLang === code
                            ? 'text-primary-600 bg-primary-50 font-semibold'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder={t('home.hero.searchPlaceholder') || 'Search for reports, industries, or topics...'}
                  className="w-full pl-12 pr-32 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                  autoFocus
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
                >
                  {t('home.hero.searchButton') || 'Search'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header 