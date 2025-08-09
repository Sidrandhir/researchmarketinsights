'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

interface Props {
  isActive: boolean;
  t: (key: string) => string;
  currentLang: string;
}

const HeroSlide2_Industries: React.FC<Props> = ({ isActive, t, currentLang }) => {
  if (!isActive) return null;
  return (
    // FIX: Added onMouseDown event handler to stop click hijacking
    <div onMouseDown={(e) => e.stopPropagation()}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Globe className="h-4 w-4" />
          <span className="text-shadow">{t('home.hero.slide2.badge')}</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="heading-responsive font-bold text-white mb-6 leading-tight text-shadow-md">
          <span className="block">{t('home.hero.slide2.title')}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-responsive text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed text-shadow">
          {t('home.hero.slide2.subtitle')}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
          <Link href={`/${currentLang}/industry`} className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center gap-2 py-4 px-8 text-lg rounded-xl shadow-lg">
            {t('home.hero.slide2.cta')}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default HeroSlide2_Industries;