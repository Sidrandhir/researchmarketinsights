'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Sparkles } from 'lucide-react';

interface Props {
  isActive: boolean;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  t: (key: string) => string;
}

const HeroSlide1_Search: React.FC<Props> = ({ isActive, searchQuery, setSearchQuery, handleSearch, t }) => {
  if (!isActive) return null;
  return (
    // FIX: Added onMouseDown event handler to stop click hijacking
    <div onMouseDown={(e) => e.stopPropagation()}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Sparkles className="h-4 w-4" />
          <span className="text-shadow">{t('home.hero.slide1.badge')}</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="heading-responsive font-bold text-white mb-6 leading-tight text-shadow-md">
          <span className="block">{t('home.hero.slide1.title')}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-responsive text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed text-shadow">
          {t('home.hero.slide1.subtitle')}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="relative group">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input type="text" placeholder={t('home.hero.searchPlaceholder')} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-32 py-4 text-lg bg-white text-gray-800 rounded-xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary-400" />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg active:scale-95 flex items-center gap-2">
                {t('home.hero.searchButton')}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default HeroSlide1_Search;