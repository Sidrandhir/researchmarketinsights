import Link from 'next/link';
import { TrendingUp, Target, Users, BarChart3, ArrowLeft, Globe, Zap, Lightbulb, Rocket, PieChart } from 'lucide-react';

export default async function GrowthStrategyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <TrendingUp className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Growth Strategy
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Strategic planning and execution to accelerate your business growth and market expansion
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Growth Strategy Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our growth strategy services help businesses identify and capitalize on growth opportunities 
                through comprehensive market analysis, strategic planning, and execution support. We work 
                with organizations to develop sustainable growth strategies that align with their vision.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From market expansion to product development, we provide data-driven insights and strategic 
                frameworks to accelerate your business growth while managing risks and optimizing resources.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                  <div className="text-gray-600">Average Growth Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">300+</div>
                  <div className="text-gray-600">Growth Strategies Delivered</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Accelerated revenue growth</li>
                <li>• Market share expansion</li>
                <li>• Operational efficiency gains</li>
                <li>• Competitive advantage</li>
                <li>• Sustainable growth model</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Growth Strategy Framework</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to identifying and executing growth opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Target className="h-10 w-10 text-blue-600" />,
                title: "Growth Assessment",
                description: "Comprehensive analysis of current state and growth potential",
                steps: ["Performance Analysis", "Market Opportunity Scan", "Competitive Assessment", "Growth Gap Analysis"]
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-green-600" />,
                title: "Strategy Development",
                description: "Strategic planning and growth roadmap creation",
                steps: ["Growth Strategy Formulation", "Resource Planning", "Risk Assessment", "Success Metrics Definition"]
              },
              {
                icon: <Rocket className="h-10 w-10 text-purple-600" />,
                title: "Implementation Planning",
                description: "Detailed execution planning and resource allocation",
                steps: ["Implementation Roadmap", "Resource Allocation", "Timeline Planning", "Stakeholder Alignment"]
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-orange-600" />,
                title: "Execution & Optimization",
                description: "Strategy execution and performance optimization",
                steps: ["Strategy Execution", "Performance Monitoring", "Continuous Optimization", "Scale Planning"]
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
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Growth Strategy Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive services to accelerate your business growth and market expansion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
                title: "Market Expansion Strategy",
                description: "Strategic planning for entering new markets and segments",
                deliverables: ["Market Opportunity Analysis", "Entry Strategy", "Resource Requirements", "Risk Mitigation Plan"]
              },
              {
                icon: <Globe className="h-8 w-8 text-green-600" />,
                title: "Product Development Strategy",
                description: "Strategic planning for new product development and innovation",
                deliverables: ["Product Roadmap", "Market Validation", "Development Strategy", "Launch Plan"]
              },
              {
                icon: <Users className="h-8 w-8 text-purple-600" />,
                title: "Customer Growth Strategy",
                description: "Strategic planning for customer acquisition and retention",
                deliverables: ["Customer Segmentation", "Acquisition Strategy", "Retention Plan", "LTV Optimization"]
              },
              {
                icon: <Zap className="h-8 w-8 text-orange-600" />,
                title: "Operational Growth Strategy",
                description: "Strategic planning for operational efficiency and scale",
                deliverables: ["Process Optimization", "Technology Strategy", "Resource Planning", "Performance Metrics"]
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
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us to discuss how our growth strategy services can drive your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={`/${lang}/services`} className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
