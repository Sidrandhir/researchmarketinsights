"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const [selectedReport, setSelectedReport] = useState('patient-repositioning-system');

  const reports = [
    {
      id: 'patient-repositioning-system',
      title: 'Global Patient Repositioning System Market',
      subtitle: 'Size, Share & Industry Analysis',
      marketSize: 'USD 1.2 billion',
      forecastYear: '2032',
      forecastValue: 'USD 2.8 billion',
      cagr: '15.8%'
    },
    {
      id: 'connected-drug-delivery',
      title: 'Global Connected Drug Delivery Devices Market',
      subtitle: 'Size, Share & Industry Analysis',
      marketSize: 'USD 2.8 billion',
      forecastYear: '2032',
      forecastValue: 'USD 8.5 billion',
      cagr: '22.4%'
    }
  ];

  const pricingPlans = [
    {
      name: "EXCEL ONLY",
      price: "$3450",
      description: "Quantitative Data Only",
      features: [
        "Single User Access",
        "No Free Customization",
        "Free Analyst Support 2 months post purchase",
        "Deliverable Report Format: Excel"
      ],
      buttonText: "Buy Now",
      buttonClass: "bg-blue-600 hover:bg-blue-700",
      popular: false
    },
    {
      name: "SINGLE USER ACCESS",
      price: "$4850",
      description: "Quantitative Data & Insights",
      features: [
        "Single User Access",
        "20 hours free Customization",
        "Free Analyst Support 3 months post purchase",
        "Direct Access to the Analyst Team (through calls/email)",
        "Deliverable Report Format: PDF",
        "Market dynamics, Market trends, Key insights, Company profiles, Competitive landscape, etc"
      ],
      buttonText: "Buy Now",
      buttonClass: "bg-green-600 hover:bg-green-700",
      popular: true
    },
    {
      name: "MULTI USER ACCESS",
      price: "$5850",
      description: "Team Access (Up to 6 Users)",
      features: [
        "Team Access (Up to 6 User)",
        "40 hours free Customization",
        "Free Analyst Support 6 months post purchase",
        "Direct Access to the Analyst Team (through calls/email)",
        "15% Discount on your Next Purchase (applicable to 1 report only for the same license type)",
        "Deliverable Report Format: PDF + Excel",
        "Qualitative Data & Insights Market dynamics, Market trends, Key insights, Company profiles, Competitive landscape, etc"
      ],
      buttonText: "Buy Now",
      buttonClass: "bg-purple-600 hover:bg-purple-700",
      popular: false
    },
    {
      name: "ENTERPRISE ACCESS",
      price: "$6850",
      description: "Unlimited User Access",
      features: [
        "Unlimited User Access",
        "60 hours Free Customization",
        "Free Analyst Support 12 months post purchase",
        "Direct Access to the Analyst Team (through calls/email)",
        "25% Discount on your Next Purchase (applicable to 1 report only for the same license type)",
        "Permission to Print the Report",
        "Deliverable Report Format: PDF + Excel + Powerpoint",
        "Qualitative insights & quantitative data (editable version)"
      ],
      buttonText: "Buy Now",
      buttonClass: "bg-indigo-600 hover:bg-indigo-700",
      popular: false
    }
  ];

  const selectedReportData = reports.find(r => r.id === selectedReport);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {selectedReportData?.title}
              </h1>
              <p className="text-gray-600 mt-1">
                {selectedReportData?.subtitle}
              </p>
            </div>
            <div className="mt-4 lg:mt-0">
              <select
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {reports.map((report) => (
                  <option key={report.id} value={report.id}>
                    {report.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Report Overview */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm text-blue-600 font-medium">Market Size 2024</div>
              <div className="text-lg font-bold text-blue-900">{selectedReportData?.marketSize}</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm text-green-600 font-medium">Forecast {selectedReportData?.forecastYear}</div>
              <div className="text-lg font-bold text-green-900">{selectedReportData?.forecastValue}</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-sm text-purple-600 font-medium">CAGR</div>
              <div className="text-lg font-bold text-purple-900">{selectedReportData?.cagr}</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="text-sm text-orange-600 font-medium">Format</div>
              <div className="text-lg font-bold text-orange-900">PDF/Excel</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Your License</h2>
          <p className="text-lg text-gray-600">Choose the plan that best fits your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg border-2 ${
              plan.popular ? 'border-blue-500 relative' : 'border-gray-200'
            }`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{plan.price}</div>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full ${plan.buttonClass} text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Companies Who Rely On Us</h2>
            <p className="text-lg text-gray-600">Trusted by leading organizations worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Samsung', 'Sony', 'DHL', 'Visa', 'Mastercard', 'PayPal'].map((company, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-lg font-bold text-gray-400">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Research?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get tailored market research solutions designed specifically for your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href="/services/consulting" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
