"use client";

import { useState, useEffect, useRef } from 'react';

export default function StatsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      number: "10,000+",
      label: "Research Reports",
      icon: "📊",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "150+",
      label: "Countries Covered",
      icon: "🌍",
      color: "from-green-500 to-green-600"
    },
    {
      number: "500+",
      label: "Analysts",
      icon: "👨‍💼",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "30,000+",
      label: "Client Queries in Last Year",
      icon: "💬",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const trustedClients = [
    { name: "Microsoft", logo: "🔴", color: "text-red-600" },
    { name: "Google", logo: "🔵", color: "text-blue-600" },
    { name: "Apple", logo: "⚫", color: "text-gray-800" },
    { name: "Amazon", logo: "🟠", color: "text-orange-600" },
    { name: "Meta", logo: "🔵", color: "text-blue-600" },
    { name: "Netflix", logo: "🔴", color: "text-red-600" },
    { name: "Tesla", logo: "🔴", color: "text-red-600" },
    { name: "Nike", logo: "⚫", color: "text-gray-800" },
    { name: "Coca-Cola", logo: "🔴", color: "text-red-600" },
    { name: "McDonald's", logo: "🟡", color: "text-yellow-600" },
    { name: "Walmart", logo: "🔵", color: "text-blue-600" },
    { name: "Target", logo: "🔴", color: "text-red-600" },
    { name: "Home Depot", logo: "🟠", color: "text-orange-600" },
    { name: "Costco", logo: "🔵", color: "text-blue-600" },
    { name: "Best Buy", logo: "🔵", color: "text-blue-600" },
    { name: "Johnson & Johnson", logo: "🔴", color: "text-red-600" },
    { name: "Pfizer", logo: "🔵", color: "text-blue-600" },
    { name: "Moderna", logo: "🔵", color: "text-blue-600" },
    { name: "AstraZeneca", logo: "🔵", color: "text-blue-600" },
    { name: "Merck", logo: "🔵", color: "text-blue-600" },
    { name: "Gilead Sciences", logo: "🔵", color: "text-blue-600" }
  ];

  // Continuous scrolling effect
  useEffect(() => {
    if (isPaused) return;

    const scrollStep = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          // Reset to beginning when reaching the end
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1;
        }
      }
    };

    const interval = setInterval(scrollStep, 30); // Smooth scrolling speed

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trusted By Section - Boxed Statistics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Trusted By Industry Leaders
          </h2>
          
          {/* Stats in Compartment Boxes - Horizontal for Mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="relative">
                {/* Box Container */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 md:p-6 overflow-hidden">
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="text-3xl md:text-4xl mb-3">
                      {stat.icon}
                    </div>
                    
                    {/* Number */}
                    <div className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <div className="text-sm md:text-base text-gray-700 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted Clients Section - Continuous Scrolling */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Trusted by Leading Companies Worldwide
          </h3>
          
          {/* Continuous Scrolling Container */}
          <div 
            ref={scrollContainerRef}
            className="relative overflow-hidden bg-white rounded-xl shadow-lg border border-gray-200"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Scrolling Company Names */}
            <div className="flex items-center py-8 whitespace-nowrap">
              {/* First set of companies */}
              {trustedClients.map((client, index) => (
                <div key={index} className="flex items-center space-x-4 mx-8 flex-shrink-0">
                  <div className={`text-4xl ${client.color}`}>
                    {client.logo}
                  </div>
                  <span className="text-xl font-semibold text-gray-800">
                    {client.name}
                  </span>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {trustedClients.map((client, index) => (
                <div key={`duplicate-${index}`} className="flex items-center space-x-4 mx-8 flex-shrink-0">
                  <div className={`text-4xl ${client.color}`}>
                    {client.logo}
                  </div>
                  <span className="text-xl font-semibold text-gray-800">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span>ISO 27001 Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            <span>99.9% Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
} 