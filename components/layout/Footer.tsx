'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Section 1: Company Logo & Name + Subscribe */}
          <div className="space-y-6">
            {/* Company Logo */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-48 h-20 flex items-center justify-center">
                <Image 
                  src="/assets/logo.webp" 
                  alt="Research Market Insight Logo" 
                  width={192}
                  height={80}
                />
              </div>
            </div>
            
            {/* Email Subscription */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-300">Subscribe to Newsletter</p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2 hover:shadow-lg transform hover:scale-105"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Subscribe Now</span>
                </button>
              </form>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-white border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            
            <div className="space-y-3">
              <Link href="/faqs" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                FAQs
              </Link>
              <Link href="/testimonials" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                Testimonials
              </Link>
              <Link href="/terms" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                Terms of Use
              </Link>
              <Link href="/privacy" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Section 3: Contact Info & Social Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-white border-b border-gray-700 pb-2">
              Contact Us
            </h3>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Office No. 208, Vision Mall,<br />
                    Pune, Maharashtra, 411057
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:sales@researchmarketinsights.com" className="text-sm text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                  sales@researchmarketinsights.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+91-20-12345678" className="text-sm text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                  +91-20-12345678
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-300">Follow Us</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 4: Trust Badges & Payment Partners Only */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-white border-b border-gray-700 pb-2">
              Trust & Security
            </h3>
            
            {/* Payment Methods */}
            <div className="space-y-3">
              <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Payment Accepted</p>
              <div className="flex flex-wrap gap-2">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  {/* CreditCard icon was removed, so this will be empty or a placeholder */}
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <span className="text-blue-600 font-bold text-sm">VISA</span>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <span className="text-orange-600 font-bold text-sm">MC</span>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <span className="text-green-600 font-bold text-sm">AMEX</span>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <span className="text-blue-600 font-bold text-sm">PP</span>
                </div>
              </div>
            </div>
            
            {/* Security Badges */}
            <div className="space-y-3">
              <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Security & Protection</p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg text-sm border border-gray-700">
                  {/* ShieldIcon icon was removed, so this will be empty or a placeholder */}
                  <span className="text-gray-300 font-medium">DMCA Protected</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg text-sm border border-gray-700">
                  {/* Lock icon was removed, so this will be empty or a placeholder */}
                  <span className="text-gray-300 font-medium">Comodo Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Research Market Insights. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-1">
                {/* Award icon was removed, so this will be empty or a placeholder */}
                <span>ISO 9001:2015 Certified</span>
              </span>
              <span className="flex items-center space-x-1">
                {/* Shield icon was removed, so this will be empty or a placeholder */}
                <span>GDPR Compliant</span>
              </span>
              <span className="flex items-center space-x-1">
                {/* Users icon was removed, so this will be empty or a placeholder */}
                <span>24/7 Support</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
