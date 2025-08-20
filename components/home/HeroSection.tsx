"use client";

import React, { useState, useEffect, useMemo } from 'react';

interface Slide {
  id: number;
  image: string;
  fallbackImage: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageError, setImageError] = useState<{[key: number]: boolean}>({});

  const slides: Slide[] = useMemo(() => [
    {
      id: 1,
      image: "/images/hero1.webp",
      fallbackImage: "/images/hero1.webp",
      alt: "",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 2,
      image: "/images/hero2.webp",
      fallbackImage: "/images/hero2.webp",
      alt: "",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 3,
      image: "/images/hero3.webp",
      fallbackImage: "/images/hero3.webp",
      alt: "",
      title: "",
      subtitle: "",
      description: ""
    }
  ], []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]); // Use slides.length instead of slides array

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleImageError = (slideId: number) => {
    console.error(`Image failed to load for slide ${slideId}`);
    setImageError(prev => ({ ...prev, [slideId]: true }));
  };

  const handleImageLoad = (slideId: number) => {
    console.log(`Image loaded successfully for slide ${slideId}`);
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="relative w-full h-full">
              {!imageError[slide.id] ? (
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(slide.id)}
                  onLoad={() => handleImageLoad(slide.id)}
                  style={{ objectPosition: 'center' }}
                />
              ) : (
                // Fallback background when image fails to load
                <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"></div>
              )}
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed text-shadow-md font-medium">
                  {slide.subtitle}
                </p>
                <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-shadow opacity-95">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
