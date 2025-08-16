"use client";
import React from 'react';
import Link from 'next/link';
import { 
  BarChart3, 
  TrendingUp, 
  CheckCircle,
  FileText
} from 'lucide-react';

export default function SyndicatedResearchPage() {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Market Reports",
      description: "Comprehensive market research reports across various industries and sectors.",
      features: ["Industry Analysis", "Market Size & Forecast", "Competitive Landscape", "Trend Analysis"]
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Data Analytics",
      description: "Advanced data analysis and insights for informed decision making.",
      features: ["Statistical Analysis", "Predictive Modeling", "Data Visualization", "Performance Metrics"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Growth Insights",
      description: "Strategic insights to identify growth opportunities and market potential.",
      features: ["Market Opportunities", "Growth Drivers", "Risk Assessment", "Investment Analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Syndicated Market Research</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Comprehensive market research reports and data-driven insights for strategic decision making</p>
        </div>
      </div>
      
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
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Access our comprehensive market research reports and insights</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reports" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">View Reports</Link>
            <Link href="/contact" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
