import Link from 'next/link';
import { Shield, Globe, BarChart3, ArrowLeft, TrendingUp, AlertTriangle, FileText, Target } from 'lucide-react';

export default async function USTariffPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              US Tariff Analysis
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Comprehensive analysis of US trade policies, tariff impacts, and supply chain optimization strategies
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">US Tariff Analysis Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our US tariff analysis services help businesses navigate complex trade policies and optimize 
                their supply chains in response to changing tariff structures. We provide comprehensive 
                analysis of tariff impacts, cost implications, and strategic alternatives.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With expertise in international trade regulations and supply chain optimization, we help 
                organizations minimize tariff costs while maintaining competitive advantage in global markets.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">25%</div>
                  <div className="text-gray-600">Average Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
                  <div className="text-gray-600">Trade Policy Reports</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Reduced tariff costs</li>
                <li>• Optimized supply chains</li>
                <li>• Compliance with trade regulations</li>
                <li>• Competitive pricing advantage</li>
                <li>• Risk mitigation strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Tariff Analysis Framework</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to understanding and optimizing tariff impacts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <FileText className="h-10 w-10 text-red-600" />,
                title: "Policy Analysis",
                description: "Comprehensive review of current and proposed trade policies",
                steps: ["Tariff Schedule Review", "Policy Impact Assessment", "Regulatory Changes", "Compliance Requirements"]
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
                title: "Cost Impact Analysis",
                description: "Detailed analysis of tariff costs and financial implications",
                steps: ["Cost Calculation", "Impact Assessment", "Financial Modeling", "Scenario Analysis"]
              },
              {
                icon: <Globe className="h-10 w-10 text-green-600" />,
                title: "Supply Chain Optimization",
                description: "Strategic optimization of supply chains to minimize tariff impacts",
                steps: ["Supplier Evaluation", "Route Optimization", "Alternative Sourcing", "Cost-Benefit Analysis"]
              },
              {
                icon: <Target className="h-10 w-10 text-purple-600" />,
                title: "Strategic Recommendations",
                description: "Actionable strategies for tariff optimization and compliance",
                steps: ["Strategy Development", "Implementation Plan", "Risk Mitigation", "Performance Monitoring"]
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {phase.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{phase.title}</h3>
                <p className="text-gray-600 mb-4 text-center text-sm">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-center text-xs text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      {step}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Tariff Analysis Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive services to help you navigate US trade policies and optimize costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-red-600" />,
                title: "Tariff Impact Assessment",
                description: "Comprehensive analysis of tariff impacts on your business",
                deliverables: ["Impact Analysis Report", "Cost Calculations", "Risk Assessment", "Mitigation Strategies"]
              },
              {
                icon: <Globe className="h-8 w-8 text-blue-600" />,
                title: "Supply Chain Optimization",
                description: "Strategic optimization of supply chains to minimize tariff costs",
                deliverables: ["Supply Chain Analysis", "Alternative Sourcing", "Route Optimization", "Cost-Benefit Analysis"]
              },
              {
                icon: <AlertTriangle className="h-8 w-8 text-orange-600" />,
                title: "Compliance & Risk Management",
                description: "Ensuring compliance with trade regulations and managing risks",
                deliverables: ["Compliance Assessment", "Risk Analysis", "Regulatory Updates", "Training Programs"]
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-green-600" />,
                title: "Strategic Planning",
                description: "Long-term strategic planning for tariff optimization",
                deliverables: ["Strategic Roadmap", "Implementation Plan", "Performance Metrics", "Continuous Optimization"]
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
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
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
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Tariff Strategy?</h2>
          <p className="text-xl text-red-100 mb-8">
            Contact us to discuss how our tariff analysis services can reduce your costs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={`/${lang}/services`} className="border border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
