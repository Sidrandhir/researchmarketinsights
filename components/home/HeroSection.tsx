"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/hero/hero1.png",
      alt: "",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 2,
      image: "/images/hero/hero2.avif",
      alt: "",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 3,
      image: "/images/hero/hero3.avif",
      alt: "",
      title: "",
      subtitle: "",
      description: ""
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleKnowMore = (slideId: number) => {
    // Handle navigation to specific page based on slide
    console.log(`Know More clicked for slide ${slideId}`);
    // You can add navigation logic here
    // For example: router.push(`/reports/${slideId}`)
  };

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide w-screen h-[60vh] md:h-[70vh] lg:h-[80vh]"
      data-ride="carousel"
    >
      <div className="carousel-inner h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item h-full ${
              index === currentSlide ? 'active' : ''
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />

            {/* Content Overlay with CTA Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-shadow">
                  {slide.subtitle}
                </p>
                <p className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-shadow opacity-90">
                  {slide.description}
                </p>

                {/* Know More CTA Button - Positioned on the right */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-8 lg:mr-16">
                  <button
                    onClick={() => handleKnowMore(slide.id)}
                    className="bg-white text-gray-900 font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
        onClick={(e) => {
          e.preventDefault();
          goToPrev();
        }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>

      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
        onClick={(e) => {
          e.preventDefault();
          goToNext();
        }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>

      {/* Bottom Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
    </div>
  );
}
