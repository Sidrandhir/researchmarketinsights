"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // Added import for ArrowRight icon

export default function IndustryCategories() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      name: "Aerospace & Defence",
      icon: "🚀",
      description: "Military aircraft, defense technology, space exploration",
      color: "from-blue-500 to-blue-600",
      href: "/industry/aerospace-defence"
    },
    {
      name: "Automotive & Transportation",
      icon: "🚗",
      description: "Electric vehicles, autonomous driving, logistics",
      color: "from-green-500 to-green-600",
      href: "/industry/automotive-transportation"
    },
    {
      name: "Banking & Financial",
      icon: "🏦",
      description: "Digital banking, fintech, investment strategies",
      color: "from-purple-500 to-purple-600",
      href: "/industry/banking-financial"
    },
    {
      name: "Chemicals & Materials",
      icon: "🧪",
      description: "Sustainable materials, advanced polymers, green chemistry",
      color: "from-indigo-500 to-indigo-600",
      href: "/industry/chemicals-materials"
    },
    {
      name: "Consumer Goods",
      icon: "🛍️",
      description: "E-commerce, sustainable products, digital marketing",
      color: "from-pink-500 to-pink-600",
      href: "/industry/consumer-goods"
    },
    {
      name: "Electronics & Semiconductor",
      icon: "💻",
      description: "AI chips, 5G technology, IoT devices",
      color: "from-cyan-500 to-cyan-600",
      href: "/industry/electronics-semiconductor"
    },
    {
      name: "Energy & Power",
      icon: "⚡",
      description: "Renewable energy, smart grids, energy storage",
      color: "from-yellow-500 to-yellow-600",
      href: "/industry/energy-power"
    },
    {
      name: "Food & Beverages",
      icon: "🍔",
      description: "Plant-based foods, food safety, sustainable packaging",
      color: "from-orange-500 to-orange-600",
      href: "/industry/food-beverages"
    },
    {
      name: "Life Sciences",
      icon: "🧬",
      description: "Gene therapy, digital health, biopharmaceuticals",
      color: "from-red-500 to-red-600",
      href: "/industry/life-sciences"
    },
    {
      name: "Technology & Media",
      icon: "📱",
      description: "Artificial intelligence, cloud computing, digital media",
      color: "from-teal-500 to-teal-600",
      href: "/industry/technology-media"
    }
  ];

  // Mock data for industry reports - in real app, this would come from API
  const industryReports = {
    "Aerospace & Defence": [
      {
        id: 1,
        title: "Global Military Aircraft Market Analysis 2024-2030",
        date: "December 2024",
        pages: 280,
        format: "PDF + Excel"
      },
      {
        id: 2,
        title: "Space Exploration Technology Market Report",
        date: "November 2024",
        pages: 220,
        format: "PDF + Excel"
      },
      {
        id: 3,
        title: "Defense Electronics Market Trends & Forecast",
        date: "October 2024",
        pages: 195,
        format: "PDF + Excel"
      }
    ],
    "Automotive & Transportation": [
      {
        id: 4,
        title: "Electric Vehicle Market: Global Analysis 2024-2030",
        date: "December 2024",
        pages: 240,
        format: "PDF + Excel"
      },
      {
        id: 5,
        title: "Autonomous Driving Technology Market Report",
        date: "November 2024",
        pages: 260,
        format: "PDF + Excel"
      },
      {
        id: 6,
        title: "Logistics & Supply Chain Market Analysis",
        date: "October 2024",
        pages: 180,
        format: "PDF + Excel"
      }
    ],
    "Technology & Media": [
      {
        id: 7,
        title: "Global Artificial Intelligence Market Analysis 2024-2030",
        date: "December 2024",
        pages: 250,
        format: "PDF + Excel"
      },
      {
        id: 8,
        title: "Cloud Computing Market: Trends & Opportunities",
        date: "November 2024",
        pages: 220,
        format: "PDF + Excel"
      },
      {
        id: 9,
        title: "Digital Media & Entertainment Market Report",
        date: "October 2024",
        pages: 195,
        format: "PDF + Excel"
      }
    ]
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleIndustryClick = (industryName: string) => {
    setSelectedIndustry(selectedIndustry === industryName ? null : industryName);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Your Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dive deep into specific sectors with our specialized market research reports and expert analysis
          </p>
        </div>

        {/* Industry Menu Container */}
        <div className="relative mb-12">
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Horizontal Industry Menu */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide px-12 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {industries.map((industry) => (
              <button
                key={industry.name}
                onClick={() => handleIndustryClick(industry.name)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 whitespace-nowrap ${
                  selectedIndustry === industry.name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>
        </div>

        {/* Industry Reports Section */}
        {selectedIndustry && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(industryReports[selectedIndustry as keyof typeof industryReports] || []).map((report) => (
                <div
                  key={report.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                    {report.title}
                  </h4>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{report.date}</span>
                    <span>{report.pages} Pages</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{report.format}</span>
                    <Link 
                      href={`/reports/${report.id}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href={industries.find(ind => ind.name === selectedIndustry)?.href || `/industry/${selectedIndustry.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  View All {selectedIndustry} Reports
                </Link>
                
                <Link 
                  href="/industry/life-sciences"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Explore All Industries <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* CTA Button - Only show when no industry is selected */}
        {!selectedIndustry && (
          <div className="text-center">
            <Link 
              href="/industry/life-sciences"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              Explore All Industries <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

