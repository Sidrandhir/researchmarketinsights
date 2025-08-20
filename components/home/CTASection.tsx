"use client";

import Link from "next/link";

export default function CTASection() {
  const consultingServices = [
    {
      title: "Growth Strategy",
      description: "Develop comprehensive growth strategies tailored to your business objectives",
      icon: "📈"
    },
    {
      title: "Market Entry",
      description: "Navigate new markets with confidence using our expert analysis",
      icon: "🌍"
    },
    {
      title: "Competitive Intelligence",
      description: "Stay ahead of competition with detailed market insights",
      icon: "🎯"
    },
    {
      title: "Industry Analysis",
      description: "Deep-dive into industry trends and opportunities",
      icon: "🔍"
    }
  ];

  const handleRequestQuote = () => {
    // Handle quote request
    console.log('Request Quote clicked');
    // You can implement navigation logic here
    // For example: router.push('/request-quote')
  };

  const handleContactUs = () => {
    // Handle contact us
    console.log('Contact Us clicked');
    // You can implement navigation logic here
    // For example: router.push('/contact')
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Consulting Services
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get expert consulting services with actionable insights and tailor-made solutions for your business growth
          </p>
        </div>

        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team to discuss your market research needs 
            and discover how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/services/consulting"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Consulting Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {consultingServices.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-blue-100 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Why Choose Our Consulting Services?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-lg font-semibold mb-2">Tailored Solutions</h4>
              <p className="text-blue-100 text-sm">
                Customized strategies designed specifically for your business needs
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg font-semibold mb-2">Fast Delivery</h4>
              <p className="text-blue-100 text-sm">
                Quick turnaround times without compromising on quality
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="text-lg font-semibold mb-2">Expert Support</h4>
              <p className="text-blue-100 text-sm">
                Dedicated consultants available throughout your project
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team of 500+ expert analysts is ready to help you make informed decisions and drive growth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={handleRequestQuote}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Consultation
              </button>
              <button
                onClick={handleContactUs}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}