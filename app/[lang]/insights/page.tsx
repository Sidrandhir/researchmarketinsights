"use client";

import Link from 'next/link';
import { TrendingUp, BarChart3, Globe, Users, Target, Lightbulb, FileText, Calendar } from 'lucide-react';

export default function InsightsPage() {
  const insights = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Market Trends 2024",
      description: "Discover the key market trends that will shape industries in 2024 and beyond.",
      category: "Trend Analysis",
      date: "January 15, 2024",
      readTime: "5 min read"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Digital Transformation Insights",
      description: "How digital transformation is reshaping traditional business models across sectors.",
      category: "Digital Innovation",
      date: "January 12, 2024",
      readTime: "7 min read"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Global Market Outlook",
      description: "Comprehensive analysis of global market opportunities and challenges.",
      category: "Global Markets",
      date: "January 10, 2024",
      readTime: "6 min read"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Consumer Behavior Shifts",
      description: "Understanding changing consumer preferences and their impact on markets.",
      category: "Consumer Insights",
      date: "January 8, 2024",
      readTime: "4 min read"
    },
    {
      icon: <Target className="w-8 h-8 text-red-600" />,
      title: "Strategic Growth Opportunities",
      description: "Identifying untapped market opportunities for business expansion.",
      category: "Strategy",
      date: "January 5, 2024",
      readTime: "8 min read"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-indigo-600" />,
      title: "Innovation in Healthcare",
      description: "Emerging technologies and their impact on healthcare market dynamics.",
      category: "Healthcare",
      date: "January 3, 2024",
      readTime: "6 min read"
    }
  ];

  const categories = [
    "All Insights",
    "Trend Analysis",
    "Digital Innovation",
    "Global Markets",
    "Consumer Insights",
    "Strategy",
    "Healthcare",
    "Technology"
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Market Insights & Analysis
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay ahead with our expert analysis, market trends, and strategic insights
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Insights Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {insight.icon}
                  <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    {insight.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {insight.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {insight.date}
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-1" />
                    {insight.readTime}
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Report Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Featured Market Report</h2>
              <h3 className="text-xl font-semibold mb-4 text-blue-300">
                Global Market Trends 2024-2030
              </h3>
              <p className="text-gray-300 mb-6">
                Get comprehensive insights into emerging market trends, technological disruptions, and strategic opportunities that will shape the business landscape over the next decade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/reports" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center">
                  View Report
                </Link>
                <Link href="/contact" className="border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-center">
                  Request Sample
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Latest Insights</h3>
              <p className="text-gray-700">
                Stay updated with our latest market research and industry analysis
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest market insights and industry updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Insights?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get tailored market research and strategic insights for your specific business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href="/services" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
