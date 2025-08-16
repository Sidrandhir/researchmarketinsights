"use client";

import Link from 'next/link';
import { Users, Award, Target, Globe, TrendingUp, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Reports Published" },
    { number: "50+", label: "Industries Covered" },
    { number: "1000+", label: "Clients Served" },
    { number: "15+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Excellence",
      description: "We strive for excellence in every report and analysis we deliver."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Integrity",
      description: "Maintaining the highest standards of integrity and ethical practices."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Innovation",
      description: "Continuously innovating our research methodologies and insights."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Collaboration",
      description: "Working closely with clients to deliver tailored solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Research Market Insights
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Leading provider of comprehensive market research and business intelligence solutions
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded with a vision to provide businesses with actionable market intelligence, Research Market Insights has grown into a trusted partner for organizations worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We specialize in delivering comprehensive market research reports, competitive analysis, and strategic insights across diverse industries including healthcare, technology, manufacturing, and more.
            </p>
            <p className="text-lg text-gray-600">
              Our team of experienced analysts and industry experts work tirelessly to provide accurate, timely, and actionable market intelligence that helps businesses make informed decisions and drive growth.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
            <div className="text-6xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To empower businesses with comprehensive market insights and strategic intelligence that drive informed decision-making and sustainable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Research Analysts</h3>
              <p className="text-gray-600">Expert analysts with deep industry knowledge and analytical expertise</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Experts</h3>
              <p className="text-gray-600">Seasoned professionals with years of industry experience</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Network</h3>
              <p className="text-gray-600">Worldwide network of consultants and industry specialists</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how our market research expertise can help your business grow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Get In Touch
            </Link>
            <Link href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}