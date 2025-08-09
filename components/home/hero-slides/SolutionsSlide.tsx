// file: components/home/hero-slides/SolutionsSlide.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, ArrowRight, MessageSquare } from 'lucide-react';

interface SolutionsSlideProps {
  isActive: boolean;
  t: (key: string) => string;
  currentLang: string;
}

const SolutionsSlide: React.FC<SolutionsSlideProps> = ({ isActive, t, currentLang }) => {
  return (
    <div className="text-center max-w-5xl mx-auto">
      {isActive && (
        <>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Users className="h-4 w-4" />
            <span>{t('home.hero.slide3.badge') || 'Custom Solutions'}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="heading-responsive font-bold text-white mb-6 leading-tight">
            <span className="block">{t('home.hero.slide3.title') || 'Tailored Research for Your Unique Needs'}</span>
            <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">{t('home.hero.slide3.highlight') || 'Your Strategic Partner'}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-responsive text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('home.hero.slide3.subtitle') || 'Partner with our experts to get custom research solutions that address your specific challenges.'}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Link href={`/${currentLang}/contact`} className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200">
              <MessageSquare className="h-5 w-5" />
              {t('home.hero.slide3.cta') || 'Request a Consultation'}
            </Link>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default SolutionsSlide;