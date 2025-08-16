"use client";
import React from 'react';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

export default function PressReleasePage() {
  const pressReleases = [
    {
      title: "Global Patient Repositioning System Market Shows Strong Growth",
      date: "January 15, 2024",
      excerpt: "New research reveals significant growth in patient repositioning systems market with increasing adoption of air-assisted and robotic solutions.",
      category: "Life Sciences"
    },
    {
      title: "Connected Drug Delivery Devices Market Expansion",
      date: "January 12, 2024",
      excerpt: "Market analysis shows rapid adoption of connected drug delivery devices across healthcare facilities worldwide.",
      category: "Life Sciences"
    },
    {
      title: "Market Research Industry Trends 2024",
      date: "January 10, 2024",
      excerpt: "Comprehensive analysis of emerging trends in market research and business intelligence sectors.",
      category: "Industry Analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Press Releases</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Latest news and announcements from Research Market Insights</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {pressReleases.map((release, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mr-3">
                      {release.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {release.date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{release.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{release.excerpt}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Link 
                  href="#" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                >
                  Read More <Clock className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">Get the latest press releases and industry updates delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">Contact Us</Link>
            <Link href="/insights" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200">All Insights</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
