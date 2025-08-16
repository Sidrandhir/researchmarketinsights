"use client";
import Link from 'next/link';
import { Star, Quote, Users, CheckCircle } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Director of Strategy",
      company: "TechCorp Solutions",
      rating: 5,
      content: "Research Market Insights provided us with comprehensive market analysis that helped us make informed decisions about our product launch. Their expertise and attention to detail exceeded our expectations.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      position: "VP of Business Development",
      company: "Global Healthcare Systems",
      rating: 5,
      content: "The market research report on patient repositioning systems was incredibly detailed and insightful. It gave us the competitive intelligence we needed to position our products effectively in the market.",
      avatar: "👨‍💼"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Manager",
      company: "Innovation Labs",
      rating: 5,
      content: "Working with Research Market Insights has been a game-changer for our market strategy. Their reports are not just data-heavy but provide actionable insights that drive real business results.",
      avatar: "👩‍💻"
    }
  ];

  const stats = [
    { number: "500+", label: "Reports Published" },
    { number: "1000+", label: "Clients Served" },
    { number: "50+", label: "Industries Covered" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">See what our clients say about our market research services and expertise</p>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8">Join our satisfied clients and discover how our market research expertise can help your business grow</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">Get In Touch</Link>
            <Link href="/about" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200">About Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
