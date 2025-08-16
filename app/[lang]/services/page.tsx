"use client";

import Link from 'next/link';
import { Search, BarChart3, Users, TrendingUp, Globe, Target, FileText, Shield, Zap, Lightbulb } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Market Research",
      description: "Comprehensive market analysis and insights across various industries and sectors.",
      features: ["Industry Analysis", "Competitive Intelligence", "Market Trends", "Growth Opportunities"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Data Analytics",
      description: "Advanced data analysis and visualization to drive informed business decisions.",
      features: ["Statistical Analysis", "Predictive Modeling", "Data Visualization", "Performance Metrics"]
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Consumer Insights",
      description: "Deep understanding of consumer behavior, preferences, and market dynamics.",
      features: ["Consumer Surveys", "Focus Groups", "Behavioral Analysis", "Market Segmentation"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: "Growth Strategy",
      description: "Strategic planning and implementation for sustainable business growth.",
      features: ["Market Entry Strategy", "Expansion Planning", "Competitive Positioning", "Risk Assessment"]
    },
    {
      icon: <Globe className="w-8 h-8 text-red-600" />,
      title: "Global Market Intelligence",
      description: "International market insights and cross-border business opportunities.",
      features: ["Regional Analysis", "Cultural Insights", "Regulatory Compliance", "Market Entry Support"]
    },
    {
      icon: <Target className="w-8 h-8 text-indigo-600" />,
      title: "Custom Research",
      description: "Tailored research solutions designed to meet specific business objectives.",
      features: ["Custom Surveys", "Industry Reports", "Competitive Analysis", "Strategic Consulting"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive market research and business intelligence solutions to drive your success
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-bold text-gray-900 ml-3">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you make informed decisions with our expert market research services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href="/reports" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              View Reports
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
