import Link from 'next/link';
import { Users, Target, Globe, TrendingUp, BarChart3, Lightbulb, Award } from 'lucide-react';

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Users className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Leading market research and strategic consulting firm helping businesses make informed decisions
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6">
                Research Market Insight is a premier market research and strategic consulting firm dedicated to 
                providing comprehensive insights that drive business growth and innovation across diverse industries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With years of experience and a team of industry experts, we help organizations navigate complex 
                market landscapes and make data-driven strategic decisions.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-gray-600">Reports Published</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600">Industries Covered</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To empower businesses with actionable market intelligence and strategic insights that drive 
                sustainable growth and competitive advantage.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted partner for market research and strategic consulting, recognized for 
                excellence, innovation, and client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 text-purple-600" />,
                title: "Excellence",
                description: "Delivering the highest quality research and insights"
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
                title: "Innovation",
                description: "Embracing new methodologies and technologies"
              },
              {
                icon: <Users className="h-8 w-8 text-green-600" />,
                title: "Integrity",
                description: "Maintaining the highest ethical standards"
              },
              {
                icon: <Globe className="h-8 w-8 text-orange-600" />,
                title: "Global Perspective",
                description: "Providing insights across international markets"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive market research and strategic consulting services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
                title: "Market Research",
                description: "Comprehensive industry analysis and market intelligence"
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
                title: "Strategic Consulting",
                description: "Business strategy and growth planning"
              },
              {
                icon: <Globe className="h-8 w-8 text-green-600" />,
                title: "Industry Reports",
                description: "In-depth reports across multiple sectors"
              },
              {
                icon: <Award className="h-8 w-8 text-orange-600" />,
                title: "Custom Research",
                description: "Tailored research solutions for specific needs"
              },
              {
                icon: <Users className="h-8 w-8 text-red-600" />,
                title: "Expert Analysis",
                description: "Insights from industry specialists"
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-indigo-600" />,
                title: "Innovation Insights",
                description: "Emerging trends and technology analysis"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss how we can help drive your business success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={`/${lang}/services`} className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}