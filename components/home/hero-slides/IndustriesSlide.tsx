// file: components/home/hero-slides/IndustriesSlide.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, TrendingUp } from 'lucide-react';

interface IndustriesSlideProps {
  isActive: boolean;
  t: (key: string) => string;
  currentLang: string;
}

const IndustriesSlide: React.FC<IndustriesSlideProps> = ({ isActive, t, currentLang }) => {
  const featuredIndustries = [
    { name: 'Healthcare', slug: 'life-sciences', icon: '🏥' },
    { name: 'Technology', slug: 'technology', icon: '💻' },
    { name: 'Automotive', slug: 'automotive', icon: '🚗' },
  ];

  return (
    <div className="text-center max-w-5xl mx-auto">
      {isActive && (
        <>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <TrendingUp className="h-4 w-4" />
            <span>{t('home.hero.slide2.badge') || 'Emerging Trends'}</span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="heading-responsive font-bold text-white mb-6 leading-tight">
            <span className="block">{t('home.hero.slide2.title') || 'Discover the Future of Your Industry'}</span>
            <span className="block bg-gradient-to-r from-cyan-300 to-sky-300 bg-clip-text text-transparent">{t('home.hero.slide2.highlight') || 'Predictive Insights'}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-responsive text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('home.hero.slide2.subtitle') || 'Leverage our predictive analytics to identify emerging trends and opportunities before they happen.'}
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex justify-center gap-4 md:gap-8">
            {featuredIndustries.map((industry, index) => (
              <Link key={industry.slug} href={`/${currentLang}/industry/${industry.slug}`} className="group">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl w-40 h-40 flex flex-col justify-center items-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-2">{industry.icon}</div>
                  <p className="font-semibold text-white">{industry.name}</p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default IndustriesSlide;