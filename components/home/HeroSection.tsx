// file: components/home/HeroSection.tsx
'use client';
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation, getLanguageFromPathname } from '@/lib/i18n';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade, Navigation, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';


import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

// Type for Swiper instance
type SwiperInstance = {
  autoplay: {
    start: () => void;
    stop: () => void;
  };
};

const HeroSection: React.FC = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = getLanguageFromPathname(pathname);
  const { t } = useTranslation(currentLang);



  const toggleAutoplay = () => {
    if (swiperInstance) {
      if (isPaused) {
        swiperInstance.autoplay.start();
        setIsPaused(false);
      } else {
        swiperInstance.autoplay.stop();
        setIsPaused(true);
      }
    }
  };

  const slideBackgrounds = [
    {
      type: 'video',
      src: '/videos/hero-background.mp4',
      fallback: '/images/hero-slide-1.jpg'
    },
    {
      type: 'image',
      src: '/images/hero-slide-2.jpg',
      overlay: 'from-blue-900/60 to-purple-900/60'
    },
    {
      type: 'image',
      src: '/images/hero-slide-3.jpg',
      overlay: 'from-green-900/60 to-blue-900/60'
    }
  ];

  const slideData = [
    {
      title: t('hero.slide1.title', 'Market Research Insights'),
      subtitle: t('hero.slide1.subtitle', 'Discover comprehensive market intelligence'),
      description: t('hero.slide1.description', 'Get detailed insights across all industries to drive informed business decisions'),
      cta: t('hero.slide1.cta', 'Explore Reports'),
      link: `/${currentLang}/reports`
    },
    {
      title: t('hero.slide2.title', 'Industry Analysis'),
      subtitle: t('hero.slide2.subtitle', 'Expert consulting services'),
      description: t('hero.slide2.description', 'Strategic insights and market analysis for your business growth'),
      cta: t('hero.slide2.cta', 'Learn More'),
      link: `/${currentLang}/about`
    },
    {
      title: t('hero.slide3.title', 'Custom Research'),
      subtitle: t('hero.slide3.subtitle', 'Tailored solutions'),
      description: t('hero.slide3.description', 'Custom research reports designed for your specific business needs'),
      cta: t('hero.slide3.cta', 'Get Quote'),
      link: `/${currentLang}/contact`
    }
  ];

  return (
    <section className="relative h-screen bg-gray-900 text-white overflow-hidden">
      {/* Enhanced Swiper with Creative Effects */}
      <Swiper
        modules={[Pagination, Autoplay, EffectFade, Navigation, EffectCreative]}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        loop={true}
        speed={1200}
        autoplay={{ 
          delay: 5000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{ 
          clickable: true, 
          renderBullet: (index, className) => 
            `<span class="${className} w-3 h-3 bg-white/50 hover:bg-white transition-all duration-300"></span>`
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={setSwiperInstance}
        className="w-full h-full"
      >
        {/* Enhanced Backgrounds with Better Overlays */}
        <div slot="container-start" className="absolute inset-0 z-0">
          {slideBackgrounds.map((bg, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ${
                activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              {bg.type === 'video' ? (
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                  poster={bg.fallback}
                >
                  <source src={bg.src} type="video/mp4" />
                  <img src={bg.fallback} alt="Hero background" className="w-full h-full object-cover" />
                </video>
              ) : (
                <div 
                  className="w-full h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${bg.src})` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${bg.overlay}`}></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced Slide Content with Better Typography */}
        {slideData.map((slide, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center z-10 p-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-6">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h2>
                <h3 className="text-xl md:text-2xl text-blue-200 mb-4 font-medium">
                  {slide.subtitle}
                </h3>
                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <button 
                  onClick={() => router.push(slide.link)}
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Enhanced Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-20 cursor-pointer p-4 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-all duration-300 hover:scale-110">
          <ChevronLeft className="h-6 w-6 text-white" />
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-20 cursor-pointer p-4 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-all duration-300 hover:scale-110">
          <ChevronRight className="h-6 w-6 text-white" />
        </div>

        {/* Enhanced Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
          <button
            onClick={toggleAutoplay}
            className="p-3 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-all duration-300"
          >
            {isPaused ? <Play className="h-5 w-5 text-white" /> : <Pause className="h-5 w-5 text-white" />}
          </button>
        </div>
      </Swiper>

      {/* Enhanced Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 z-20">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${((activeIndex + 1) / slideData.length) * 100}%` }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;