import Link from 'next/link';
import { Users, Lightbulb, ArrowLeft, BarChart3, Globe, TrendingUp, Target, Zap, Briefcase, Clock, Award } from 'lucide-react';

export default async function ConsultingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Users className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Consulting Services
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Expert strategic consulting to drive your business growth and market success
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Consulting Services Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our consulting services provide expert guidance and strategic support to help organizations 
                navigate complex business challenges and capitalize on market opportunities. We combine 
                deep industry expertise with proven methodologies to deliver actionable solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From strategic planning to operational optimization, our consultants work closely with 
                your team to implement sustainable solutions that drive measurable business results.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">200+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Expert strategic guidance</li>
                <li>• Proven methodologies</li>
                <li>• Industry best practices</li>
                <li>• Measurable results</li>
                <li>• Long-term partnership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Consulting Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology for delivering strategic consulting solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Lightbulb className="h-10 w-10 text-orange-600" />,
                title: "Discovery & Analysis",
                description: "Comprehensive understanding of your business and challenges",
                steps: ["Business Assessment", "Challenge Identification", "Opportunity Analysis", "Stakeholder Interviews"]
              },
              {
                icon: <Target className="h-10 w-10 text-blue-600" />,
                title: "Strategy Development",
                description: "Strategic planning and solution design",
                steps: ["Strategy Formulation", "Solution Design", "Implementation Planning", "Success Metrics"]
              },
              {
                icon: <Zap className="h-10 w-10 text-green-600" />,
                title: "Implementation Support",
                description: "Hands-on support for strategy execution",
                steps: ["Project Management", "Change Management", "Training & Support", "Performance Monitoring"]
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-purple-600" />,
                title: "Results & Optimization",
                description: "Measuring success and continuous improvement",
                steps: ["Results Measurement", "Performance Analysis", "Optimization", "Long-term Support"]
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
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Consulting Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting solutions to address your strategic business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
                title: "Strategic Planning",
                description: "Comprehensive strategic planning and business development",
                deliverables: ["Strategic Roadmap", "Business Plan", "Market Analysis", "Implementation Strategy"]
              },
              {
                icon: <Globe className="h-8 w-8 text-blue-600" />,
                title: "Market Entry Strategy",
                description: "Strategic planning for entering new markets and segments",
                deliverables: ["Market Assessment", "Entry Strategy", "Risk Analysis", "Launch Plan"]
              },
              {
                icon: <Briefcase className="h-8 w-8 text-green-600" />,
                title: "Operational Excellence",
                description: "Process optimization and operational improvement",
                deliverables: ["Process Analysis", "Optimization Plan", "Implementation Guide", "Performance Metrics"]
              },
              {
                icon: <Users className="h-8 w-8 text-purple-600" />,
                title: "Change Management",
                description: "Strategic change management and organizational transformation",
                deliverables: ["Change Strategy", "Communication Plan", "Training Program", "Success Metrics"]
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
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
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
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Contact us to discuss how our consulting services can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={`/${lang}/services`} className="border border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
