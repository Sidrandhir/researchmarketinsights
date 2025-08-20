import Link from 'next/link';
import { FlaskConical, Atom, Leaf, ArrowLeft, Factory, TestTube } from 'lucide-react';

export default async function ChemicalsMaterialsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <FlaskConical className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Chemicals and Materials
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Comprehensive market research reports on specialty chemicals, advanced materials, polymers, and sustainable materials innovation
            </p>
          </div>
        </div>
      </section>

      {/* Back to Industries Link */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href={`/${lang}/industry`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Industries
          </Link>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                The chemicals and materials industry is a fundamental pillar of modern manufacturing, providing essential 
                components for virtually every sector. This industry encompasses specialty chemicals, advanced materials, 
                polymers, and sustainable materials innovation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With increasing focus on sustainability, circular economy principles, and advanced manufacturing technologies, 
                the industry is evolving to meet environmental and performance requirements.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">$5.2T+</div>
                  <div className="text-gray-600">Global Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">4.8%</div>
                  <div className="text-gray-600">Annual Growth Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">🧪</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Market Drivers</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Sustainable materials development</li>
                <li>• Advanced manufacturing technologies</li>
                <li>• Circular economy initiatives</li>
                <li>• Digital transformation and Industry 4.0</li>
                <li>• Regulatory compliance and safety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Segments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Segments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the diverse segments within the chemicals and materials industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FlaskConical className="h-8 w-8 text-purple-600" />,
                title: "Specialty Chemicals",
                description: "High-performance chemicals for specific applications",
                features: ["Agrochemicals", "Coatings", "Adhesives", "Catalysts"]
              },
              {
                icon: <Atom className="h-8 w-8 text-blue-600" />,
                title: "Advanced Materials",
                description: "Next-generation materials with enhanced properties",
                features: ["Nanomaterials", "Composites", "Ceramics", "Metals"]
              },
              {
                icon: <TestTube className="h-8 w-8 text-green-600" />,
                title: "Polymers & Plastics",
                description: "Synthetic materials and biopolymers",
                features: ["Engineering Plastics", "Biodegradable Polymers", "Elastomers", "Thermoplastics"]
              },
              {
                icon: <Leaf className="h-8 w-8 text-emerald-600" />,
                title: "Sustainable Materials",
                description: "Eco-friendly and renewable materials",
                features: ["Bio-based Materials", "Recycled Materials", "Green Chemistry", "Circular Solutions"]
              },
              {
                icon: <Factory className="h-8 w-8 text-orange-600" />,
                title: "Industrial Chemicals",
                description: "Bulk chemicals for manufacturing processes",
                features: ["Basic Chemicals", "Petrochemicals", "Inorganic Chemicals", "Industrial Gases"]
              },
              {
                icon: <TestTube className="h-8 w-8 text-red-600" />,
                title: "Performance Materials",
                description: "Materials engineered for specific performance requirements",
                features: ["High-Temperature Materials", "Lightweight Materials", "Smart Materials", "Functional Coatings"]
              }
            ].map((segment, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {segment.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{segment.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{segment.description}</p>
                <ul className="space-y-2">
                  {segment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Chemicals & Materials Insights?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Get comprehensive market research and strategic insights for the chemicals and materials industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={`/${lang}/industry`} className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Browse Other Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
