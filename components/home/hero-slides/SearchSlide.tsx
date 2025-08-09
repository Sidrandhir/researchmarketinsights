// file: components/home/hero-slides/SearchSlide.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Sparkles } from 'lucide-react';

interface SearchSlideProps {
  isActive: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  t: (key: string) => string;
}

const SearchSlide: React.FC<SearchSlideProps> = ({ isActive, searchQuery, setSearchQuery, handleSearch, t }) => {
  return (
    <div className="text-center max-w-5xl mx-auto">
      {isActive && (
        <>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4" />
            <span>{t('home.hero.slide1.badge') || 'Market Leadership'}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="heading-responsive font-bold text-white mb-6 leading-tight">
            <span className="block">{t('home.hero.slide1.title') || 'Navigate Your Market with Confidence'}</span>
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">{t('home.hero.slide1.highlight') || 'Data-Driven Strategies'}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-responsive text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('home.hero.slide1.subtitle') || 'Unlock in-depth analysis and competitive intelligence to stay ahead of the curve.'}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="relative group">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
                <input type="text" placeholder={t('home.hero.searchPlaceholder') || 'Search for reports, industries...'} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-32 py-4 text-lg bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary-600 transition-all duration-300 border border-white/20" />
                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2">
                  {t('home.hero.searchButton') || 'Search'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default SearchSlide;