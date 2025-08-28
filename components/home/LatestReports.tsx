"use client";

import React from 'react';
import Link from 'next/link';
import { Calendar, User, DollarSign, BarChart3 } from 'lucide-react';

export default function LatestReports() {
  const [activeCategory, setActiveCategory] = React.useState('all');

  // Latest reports data - only available reports
  const latestReports = [
    {
      id: 1,
      title: "Global Plant Based Meat Alternatives Market Size, Share & Industry Analysis",
      category: "Food & Beverages",
      pages: 245,
      lastUpdated: "January 15, 2024",
      image: "🥬",
      slug: "global-plant-based-meat-alternatives-market",
      description: "Comprehensive analysis of plant-based meat alternatives market including market size, trends, and forecast 2024-2032.",
      marketSize: "USD XX.XX billion",
      forecastValue: "USD XX.XX billion",
      cagr: "X.X%",
      isAvailable: true
    },
    {
      id: 2,
      title: "Global Wearable Health Monitoring Devices Market Size, Share & Industry Analysis",
      category: "Life Sciences",
      pages: 248,
      lastUpdated: "January 15, 2024",
      image: "⌚",
      slug: "global-wearable-health-monitoring-devices-market",
      description: "Comprehensive analysis of wearable health monitoring devices market including market size, trends, and forecast 2024-2032.",
      marketSize: "USD 45.67 billion",
      forecastValue: "USD 89.34 billion",
      cagr: "16.8%",
      isAvailable: true
    },
    {
      id: 3,
      title: "Global Agentic AI Systems Market Size, Share & Industry Analysis",
      category: "Technology & Media",
      pages: 245,
      lastUpdated: "January 15, 2024",
      image: "🤖",
      slug: "global-agentic-ai-systems-market",
      description: "Comprehensive analysis of agentic AI systems market including market size, trends, and forecast 2024-2032.",
      marketSize: "USD 8.45 billion",
      forecastValue: "USD 32.18 billion",
      cagr: "18.7%",
      isAvailable: true
    },
    {
      id: 4,
      title: "Global Polymer Encapsulated Brachytherapy Devices Market Size, Share & Industry Analysis",
      category: "Life Sciences",
      pages: 245,
      lastUpdated: "January 15, 2024",
      image: "🏥",
      slug: "polymer-encapsulated-brachytherapy-devices-market",
      description: "Comprehensive analysis of polymer encapsulated brachytherapy devices market including market size, trends, and forecast 2024-2032.",
      marketSize: "USD XX.XX billion",
      forecastValue: "USD XX.XX billion",
      cagr: "X.X%",
      isAvailable: true
    },
    {
      id: 5,
      title: "Global Patient Repositioning System Market Size, Share & Industry Analysis",
      category: "Life Sciences",
      pages: 189,
      lastUpdated: "January 12, 2024",
      image: "🛏️",
      slug: "global-patient-repositioning-system-market",
      description: "Comprehensive analysis of patient repositioning systems market with air-assisted, mechanical, and robotic solutions.",
      marketSize: "USD 1.2 billion",
      forecastValue: "USD 2.8 billion",
      cagr: "15.8%",
      isAvailable: true
    },
    {
      id: 6,
      title: "Global Connected Drug Delivery Devices Market Size, Share & Industry Analysis",
      category: "Life Sciences",
      pages: 245,
      lastUpdated: "January 15, 2024",
      image: "💊",
      slug: "global-connected-drug-delivery-devices-market",
      description: "In-depth research on connected drug delivery devices market including smart inhalers, connected injectors, and IoT integration.",
      marketSize: "USD 2.8 billion",
      forecastValue: "USD 8.5 billion",
      cagr: "22.4%",
      isAvailable: true
    },
    {
      id: 7,
      title: "Global Capture and Storage (CCS) Technologies Market Size, Share & Industry Analysis",
      category: "Energy & Power",
      pages: 245,
      lastUpdated: "January 15, 2024",
      image: "🌱",
      slug: "global-capture-and-storage-ccs-technologies-market",
      description: "Comprehensive analysis of carbon capture and storage technologies market including market size, trends, and forecast 2024-2032.",
      marketSize: "USD 2.85 billion",
      forecastValue: "USD 8.92 billion",
      cagr: "18.7%",
      isAvailable: true
    },
    {
      id: 8,
      title: "Global Robotics in e-commerce Fulfillment Market Size, Share & Industry Analysis",
      category: "Technology & Media",
      pages: 268,
      lastUpdated: "January 15, 2024",
      image: "🤖",
      slug: "global-robotics-in-ecommerce-fulfillment-market",
      description: "Comprehensive analysis of robotics in e-commerce fulfillment market including market size, trends, and forecast 2024-2032.",
      marketSize: "USD 3.42 billion",
      forecastValue: "USD 12.85 billion",
      cagr: "24.8%",
      isAvailable: true
    }
  ];

  // Categories for filtering
  const categories = [
    { key: 'all', label: 'All Reports', count: latestReports.filter(r => r.isAvailable).length },
    { key: 'life-sciences', label: 'Life Sciences', count: latestReports.filter(r => r.category.toLowerCase() === 'life sciences' && r.isAvailable).length },
    { key: 'food-beverages', label: 'Food & Beverages', count: latestReports.filter(r => r.category.toLowerCase() === 'food & beverages' && r.isAvailable).length },
    { key: 'technology-media', label: 'Technology & Media', count: latestReports.filter(r => r.category.toLowerCase() === 'technology & media' && r.isAvailable).length }
  ];

  // Filter reports based on selected category
  const filteredReports = activeCategory === 'all' 
    ? latestReports 
    : activeCategory === 'life-sciences'
    ? latestReports.filter(report => report.category.toLowerCase() === 'life sciences')
    : activeCategory === 'food-beverages'
    ? latestReports.filter(report => report.category.toLowerCase() === 'food & beverages')
    : activeCategory === 'technology-media'
    ? latestReports.filter(report => report.category.toLowerCase() === 'technology & media')
    : latestReports;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Market Research Reports
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Discover our most recent comprehensive market analysis reports covering emerging trends, 
            industry insights, and growth opportunities across various sectors.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              <span>Available Reports</span>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 ${
                activeCategory === category.key
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredReports.map((report) => (
            <div
              key={report.id}
              className={`bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300 ${
                report.isAvailable 
                  ? 'hover:shadow-lg hover:-translate-y-1' 
                  : 'opacity-75 cursor-not-allowed'
              }`}
            >
              {/* Report Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{report.image}</div>
                  <div className="flex-1 min-w-0">
                    {/* Status Badge */}
                    <div className="mb-2">
                      {report.isAvailable ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></span>
                          Available
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-1.5"></span>
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2 leading-tight">
                      {report.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <User className="w-4 h-4" />
                      <span>{report.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Report Details */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {report.description}
                </p>
                
                {/* Market Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4 text-xs">
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-900">Market Size</div>
                    <div className="text-blue-700">{report.marketSize}</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-900">Forecast</div>
                    <div className="text-green-700">{report.forecastValue}</div>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded-lg">
                    <div className="font-semibold text-purple-900">CAGR</div>
                    <div className="text-purple-700">{report.cagr}</div>
                  </div>
                </div>

                {/* Report Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>{report.pages} Pages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{report.lastUpdated}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {report.isAvailable ? (
                    <>
                      <Link
                        href={report.title === "Global Plant Based Meat Alternatives Market"
                          ? `/reports/global-plant-based-meat-alternatives-market`
                          : report.title === "Global Wearable Health Monitoring Devices Market"
                          ? `/reports/global-wearable-health-monitoring-devices-market`
                          : report.title === "Global Agentic AI Systems Market"
                          ? `/reports/global-agentic-ai-systems-market`
                          : report.title === "Global Polymer Encapsulated Brachytherapy Devices Market"
                          ? `/reports/polymer-encapsulated-brachytherapy-devices-market`
                          : report.title === "Global Capture and Storage (CCS) Technologies Market"
                          ? `/reports/global-capture-and-storage-ccs-technologies-market`
                          : report.title === "Global Robotics in e-commerce Fulfillment Market"
                          ? `/reports/global-robotics-in-ecommerce-fulfillment-market`
                          : `/reports/${report.slug}`
                        }
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors duration-200 text-center"
                      >
                        View Report
                      </Link>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors duration-200">
                        <DollarSign className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        disabled
                        className="flex-1 bg-gray-400 text-white py-2 px-4 rounded-lg font-medium text-sm cursor-not-allowed text-center"
                      >
                        Coming Soon
                      </button>
                      <button 
                        disabled
                        className="px-4 py-2 border border-gray-300 text-gray-400 rounded-lg font-medium text-sm cursor-not-allowed"
                      >
                        <DollarSign className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reports CTA */}
        <div className="text-center">
          <Link
            href="/reports"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            View All Reports
            <User className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
