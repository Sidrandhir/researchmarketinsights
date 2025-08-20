import Link from 'next/link';
import { Leaf, TrendingUp, Shield, Users, ArrowLeft, BarChart3, Globe, Target } from 'lucide-react';

export default async function ESGAnalysisPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Leaf className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ESG Analysis
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Comprehensive Environmental, Social, and Governance analysis to drive sustainable business decisions
            </p>
          </div>
        </div>
      </section>

      {/* Back to Services Link */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href={`/${lang}/services`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ESG Analysis Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our ESG analysis services provide comprehensive insights into environmental, social, and governance 
                factors that impact business performance and stakeholder value. We help organizations understand 
                their ESG risks and opportunities while developing strategies for sustainable growth.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With increasing regulatory requirements and stakeholder expectations, ESG analysis has become 
                essential for risk management, compliance, and long-term value creation across all industries.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                  <div className="text-gray-600">ESG Reports Delivered</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Enhanced risk management and compliance</li>
                <li>• Improved stakeholder relationships</li>
                <li>• Access to sustainable finance</li>
                <li>• Competitive advantage in ESG</li>
                <li>• Long-term value creation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our ESG Framework</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to ESG analysis and reporting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="h-12 w-12 text-green-600" />,
                title: "Environmental",
                description: "Climate impact, resource management, and sustainability practices",
                features: ["Carbon Footprint", "Energy Efficiency", "Waste Management", "Biodiversity Impact"]
              },
              {
                icon: <Users className="h-12 w-12 text-blue-600" />,
                title: "Social",
                description: "Human rights, labor practices, and community relations",
                features: ["Labor Standards", "Human Rights", "Community Impact", "Diversity & Inclusion"]
              },
              {
                icon: <Shield className="h-12 w-12 text-purple-600" />,
                title: "Governance",
                description: "Corporate ethics, transparency, and board oversight",
                features: ["Board Structure", "Ethics & Compliance", "Transparency", "Risk Management"]
              }
            ].map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{pillar.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our ESG Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive ESG analysis and consulting services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-green-600" />,
                title: "ESG Assessment & Reporting",
                description: "Comprehensive ESG evaluation and sustainability reporting",
                deliverables: ["ESG Scorecard", "Sustainability Report", "GRI Standards Compliance", "Stakeholder Mapping"]
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
                title: "ESG Strategy Development",
                description: "Strategic planning for ESG integration and improvement",
                deliverables: ["ESG Roadmap", "Action Plan", "KPI Framework", "Implementation Guide"]
              },
              {
                icon: <Globe className="h-8 w-8 text-purple-600" />,
                title: "ESG Risk Management",
                description: "Identification and mitigation of ESG-related risks",
                deliverables: ["Risk Assessment", "Mitigation Strategies", "Monitoring Framework", "Crisis Response Plan"]
              },
              {
                icon: <Target className="h-8 w-8 text-orange-600" />,
                title: "ESG Performance Monitoring",
                description: "Ongoing tracking and optimization of ESG performance",
                deliverables: ["Performance Dashboard", "Progress Reports", "Benchmarking Analysis", "Improvement Recommendations"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.deliverables.map((deliverable, deliverableIndex) => (
                    <li key={deliverableIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your ESG Performance?</h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us to discuss how our ESG analysis services can help your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={`/${lang}/services`} className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
