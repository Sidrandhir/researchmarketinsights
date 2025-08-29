"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "VP of Strategy",
      company: "TechCorp Solutions",
      content: "The market insights provided by Research Market Insights have been invaluable for our strategic planning. Their reports are comprehensive and actionable.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Director of Research",
      company: "Global Industries Ltd",
      content: "We've been working with RMI for over 3 years. Their industry expertise and timely delivery have consistently exceeded our expectations.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Head of Business Development",
      company: "InnovateTech",
      content: "The quality of their market research reports is outstanding. They've helped us identify new opportunities worth millions in revenue.",
      rating: 5
    },
    {
      name: "David Thompson",
      position: "CEO",
      company: "FutureTech Ventures",
      content: "Research Market Insights has been our trusted partner for market intelligence. Their insights have guided our expansion into new markets.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      position: "Marketing Director",
      company: "Global Solutions Inc",
      content: "The depth of analysis and actionable recommendations from RMI have transformed our marketing strategy and market positioning.",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      title: "Expert Analysts",
      description: "Our team of 500+ industry experts with 15+ years of experience",
      icon: "👨‍💼"
    },
    {
      title: "Comprehensive Coverage",
      description: "25+ industry sectors across 150+ countries worldwide",
      icon: "🌍"
    },
    {
      title: "Quality Assurance",
      description: "ISO 27001 certified with 99.9% accuracy guarantee",
      icon: "✅"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support and consultation",
      icon: "🕐"
    },
    {
      title: "Fast Delivery",
      description: "Reports delivered within 24-48 hours of purchase",
      icon: "⚡"
    },
    {
      title: "Custom Solutions",
      description: "Tailored research and consulting services available",
      icon: "🎯"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why industry leaders choose Research Market Insights for their strategic decisions
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* Left Column: Client Testimonials Carousel */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Client Testimonials
            </h3>
            
            {/* Testimonials Carousel */}
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center mb-3">
                          <div className="flex mr-3">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 italic">
                          &ldquo;The market insights provided by Research Market Insights have been invaluable for our strategic planning. Their reports are comprehensive and actionable.&rdquo;
                        </p>
                        
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-blue-600 font-semibold text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                            <div className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 shadow-sm"
                aria-label="Previous testimonial"
              >
                <span className="text-gray-600">‹</span>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 shadow-sm"
                aria-label="Next testimonial"
              >
                <span className="text-gray-600">›</span>
              </button>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-blue-600 w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Read Client Testimonials Button */}
            <div className="text-center mt-8">
              <Link 
                href="/about#testimonials"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
              >
                Read Client Testimonials
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Why Choose Us */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Stats Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Our Success Metrics
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Expert Analysts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of companies worldwide who trust our insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Get Free Sample
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}