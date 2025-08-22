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
      color: "from-blue-700 to-blue-800"
    },
    {
      number: "150+",
      label: "Countries Covered",
      icon: "🌍",
      color: "from-blue-700 to-blue-800"
    },
    {
      number: "500+",
      label: "Analysts",
      icon: "👨‍💼",
      color: "from-blue-700 to-blue-800"
    },
    {
      number: "30,000+",
      label: "Client Queries in Last Year",
      icon: "💬",
      color: "from-blue-700 to-blue-800"
    }
  ];

  const trustedClients = [
    { 
      name: "Microsoft", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M11.5 2.75h-8a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75v-8a.75.75 0 0 0-.75-.75zm-8 1.5h6.5v6.5h-6.5v-6.5zm8.75 1.5h8a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75v-8a.75.75 0 0 1 .75-.75zm8 1.5h-6.5v6.5h6.5v-6.5z"/>
        </svg>
      ), 
      color: "text-red-600" 
    },
    { 
      name: "Google", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      ), 
      color: "text-blue-600" 
    },
    { 
      name: "Apple", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ), 
      color: "text-gray-800" 
    },
    { 
      name: "Amazon", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M15.93 17.09c-.24.33-.49.64-.76.93-1.84 1.95-4.21 2.95-6.87 2.95-2.66 0-5.03-1-6.87-2.95C.96 17.66 0 15.75 0 13.64c0-2.11.96-4.02 2.43-5.43 1.84-1.95 4.21-2.95 6.87-2.95 2.66 0 5.03 1 6.87 2.95.27.29.52.6.76.93.24-.33.49-.64.76-.93 1.84-1.95 4.21-2.95 6.87-2.95 2.66 0 5.03 1 6.87 2.95 1.47 1.41 2.43 3.32 2.43 5.43 0 2.11-.96 4.02-2.43 5.43-1.84 1.95-4.21 2.95-6.87 2.95-2.66 0-5.03-1-6.87-2.95z"/>
        </svg>
      ), 
      color: "text-orange-600" 
    },
    { 
      name: "Meta", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h20.728c.904 0 1.636.732 1.636 1.636z"/>
        </svg>
      ), 
      color: "text-blue-600" 
    },
    { 
      name: "Netflix", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 6.348 18.603.878 3.027-.75 4.974-3.878 5.913L7.2 24.863c-.5.146-.898.073-1.194-.22-.296-.293-.44-.73-.44-1.31V1.41c0-.586.144-1.024.44-1.317.296-.293.694-.366 1.194-.22L7.868.48c3.128.939 4.756 2.886 3.878 5.913-.978 3.428-3.32 10.047-6.348 18.603V0z"/>
        </svg>
      ), 
      color: "text-red-600" 
    },
    { 
      name: "Tesla", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 2C8.28 2 5.14 4.47 4.22 8h15.56C18.86 4.47 15.72 2 12 2zM12 22c3.72 0 6.86-2.47 7.78-6H4.22c.92 3.53 4.06 6 7.78 6zM3 10h18v4H3v-4z"/>
        </svg>
      ), 
      color: "text-red-600" 
    },
    { 
      name: "Nike", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M4.51 21.71C1.49 21.21.19 19.66.19 17.46c0-1.86 1.07-3.39 3.32-4.7 2.25-1.31 5.42-2.02 9.12-2.02 3.7 0 6.87.71 9.12 2.02 2.25 1.31 3.32 2.84 3.32 4.7 0 2.2-1.3 3.75-4.32 4.25L4.51 21.71z"/>
        </svg>
      ), 
      color: "text-gray-800" 
    },
    { 
      name: "Coca-Cola", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z"/>
        </svg>
      ), 
      color: "text-red-600" 
    },
    { 
      name: "McDonald's", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 2C10.5 2 9.2 2.8 8.5 4.2 7.8 2.8 6.5 2 5 2c-2.2 0-4 1.8-4 4v12c0 1.1.9 2 2 2s2-.9 2-2V6c0-.6.4-1 1-1s1 .4 1 1v12c0 1.1.9 2 2 2s2-.9 2-2V6c0-.6.4-1 1-1s1 .4 1 1v12c0 1.1.9 2 2 2s2-.9 2-2V6c0-2.2-1.8-4-4-4z"/>
        </svg>
      ), 
      color: "text-yellow-600" 
    },
    { 
      name: "Walmart", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 1l3 9h9l-7.5 5.5 3 9L12 19l-7.5 5.5 3-9L0 10h9l3-9z"/>
        </svg>
      ), 
      color: "text-blue-600" 
    },
    { 
      name: "Target", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ), 
      color: "text-red-600" 
    },
    { 
      name: "Home Depot", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 3L2 9v6l10-6 10 6V9l-10-6zM2 16v4h4v-4H2zm7 0v4h2v-4H9zm5 0v4h2v-4h-2zm5 0v4h4v-4h-4z"/>
        </svg>
      ), 
      color: "text-orange-600" 
    },
    { 
      name: "Costco", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15V7h2v10h-2zm-3-2V9h2v6H8zm6-2V9h2v6h-2z"/>
        </svg>
      ), 
      color: "text-blue-600" 
    },
    { 
      name: "Best Buy", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3 8h2v4h4v-4h2v6H9v-6zm0-2V6h8v2H9z"/>
        </svg>
      ), 
      color: "text-blue-600" 
    },
    { 
      name: "Johnson & Johnson", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ), 
      color: "text-red-600" 
    },
    { 
      name: "Pfizer", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ), 
      color: "text-blue-600" 
    },
    { 
      name: "Moderna", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ), 
      color: "text-blue-600" 
    },
    { 
      name: "AstraZeneca", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ), 
      color: "text-blue-600" 
    },
    { 
      name: "Merck", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ), 
      color: "text-blue-600" 
    },
    { 
      name: "Gilead Sciences", 
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ), 
      color: "text-blue-600" 
    }
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
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trusted By Section - Boxed Statistics */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Trusted By Industry Leaders
          </h2>
          
          {/* Stats in Compartment Boxes - Horizontal for Mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="relative">
                {/* Box Container */}
                <div className="bg-white border border-gray-300 p-4 md:p-6">
                  {/* Content */}
                  <div className="text-center">
                    {/* Icon */}
                    <div className="text-2xl md:text-3xl mb-3">
                      {stat.icon}
                    </div>
                    
                    {/* Number */}
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-blue-800">
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
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
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