"use client";
import Link from 'next/link';
import { Users, Target, TrendingUp, Globe, CheckCircle } from 'lucide-react';

export default function ConsultingServicesPage() {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Strategic Consulting",
      description: "Expert guidance for market entry, expansion, and strategic positioning.",
      features: ["Market Entry Strategy", "Competitive Analysis", "Growth Planning", "Risk Assessment"]
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Business Strategy",
      description: "Comprehensive business strategy development and implementation support.",
      features: ["Business Model Design", "Operational Excellence", "Digital Transformation", "Performance Optimization"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Market Development",
      description: "Market expansion strategies and growth acceleration services.",
      features: ["Geographic Expansion", "Product Development", "Partnership Strategy", "Market Penetration"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Consulting Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Strategic consulting solutions to drive your business growth and market success</p>
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
          <p className="text-xl text-gray-300 mb-8">Let our expert consultants help you achieve your business goals</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">Contact Us</Link>
            <Link href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200">All Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
