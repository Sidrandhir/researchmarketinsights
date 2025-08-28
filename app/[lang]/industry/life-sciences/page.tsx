import Link from 'next/link';
import { Activity, Heart, Pill, ArrowLeft, Microscope, Download } from 'lucide-react';

export default async function LifeSciencesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Activity className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Life Sciences
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Comprehensive market research reports on healthcare, pharmaceuticals, medical devices, and biotechnology innovation
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
                The life sciences industry encompasses healthcare, pharmaceuticals, medical devices, biotechnology, and research services. 
                This sector is at the forefront of innovation, driving breakthroughs in disease treatment, drug development, and medical technology.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With increasing focus on personalized medicine, digital health, and sustainable healthcare solutions, the industry is experiencing 
                rapid transformation in research methodologies, regulatory frameworks, and patient care delivery.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">$2.8T+</div>
                  <div className="text-gray-600">Global Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">8.2%</div>
                  <div className="text-gray-600">Annual Growth Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Market Drivers</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Aging population and chronic disease prevalence</li>
                <li>• Advancements in biotechnology and genomics</li>
                <li>• Digital health and telemedicine adoption</li>
                <li>• Personalized medicine and precision healthcare</li>
                <li>• Regulatory approvals and market access</li>
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
              Explore the diverse segments within the life sciences industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Pill className="h-8 w-8 text-red-600" />,
                title: "Pharmaceuticals",
                description: "Drug development and manufacturing",
                features: ["Drug Discovery", "Clinical Trials", "Manufacturing", "Regulatory Affairs"]
              },
              {
                icon: <Activity className="h-8 w-8 text-blue-600" />,
                title: "Medical Devices",
                description: "Healthcare technology and equipment",
                features: ["Diagnostic Devices", "Surgical Equipment", "Monitoring Systems", "Implantable Devices"]
              },
              {
                icon: <Microscope className="h-8 w-8 text-green-600" />,
                title: "Biotechnology",
                description: "Genetic engineering and biotech solutions",
                features: ["Gene Therapy", "Cell Therapy", "Biologics", "Bioinformatics"]
              },
              {
                icon: <Heart className="h-8 w-8 text-pink-600" />,
                title: "Healthcare Services",
                description: "Patient care and clinical services",
                features: ["Clinical Research", "Patient Care", "Laboratory Services", "Telemedicine"]
              },
              {
                icon: <Activity className="h-8 w-8 text-purple-600" />,
                title: "Digital Health",
                description: "Technology-enabled healthcare solutions",
                features: ["Health IT", "Mobile Health", "Wearables", "AI in Healthcare"]
              },
              {
                icon: <Pill className="h-8 w-8 text-indigo-600" />,
                title: "Research & Development",
                description: "Scientific research and innovation",
                features: ["Basic Research", "Applied Research", "Clinical Research", "Translational Medicine"]
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
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Reports</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our latest market research reports in the Life Sciences industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Global Polymer Encapsulated Brachytherapy Devices Market",
                description: "Comprehensive analysis of polymer encapsulated brachytherapy devices market including market size, trends, and forecast 2024-2032",
                price: "$4,999",
                reportCode: "RMI-2024-005",
                features: ["Market Size & Forecast", "Product Analysis", "Application Insights", "Regional Forecast"],
                image: "🏥"
              },
              {
                title: "Global Patient Repositioning System Market",
                description: "Analysis of patient positioning systems including market size, trends, and forecast 2024-2032",
                price: "$4,999",
                reportCode: "RPT-PRS-001",
                features: ["Market Size & Forecast", "Competitive Analysis", "Regional Insights", "Technology Trends"],
                image: "🛏️"
              },
              {
                title: "Connected Drug Delivery Devices Market",
                description: "Comprehensive analysis of connected drug delivery technologies and market opportunities",
                price: "$5,499",
                reportCode: "RPT-CDD-002",
                features: ["Device Types", "Market Drivers", "Regulatory Landscape", "Future Outlook"],
                image: "💊"
              }
            ].map((report, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{report.image}</div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">Featured</div>
                    <div className="text-xs text-gray-500">Report</div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                    Life Sciences
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {report.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                    {report.description}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  {report.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Code:</span> {report.reportCode}
                  </div>
                  <div className="text-2xl font-bold text-red-600">
                    {report.price}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link 
                    href={report.title === "Global Polymer Encapsulated Brachytherapy Devices Market"
                      ? `/${lang}/reports/polymer-encapsulated-brachytherapy-devices-market`
                      : report.title === "Global Patient Repositioning System Market"
                      ? `/${lang}/reports/global-patient-repositioning-system-market`
                      : `/${lang}/reports/global-connected-drug-delivery-devices-market`
                    }
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200"
                  >
                    View Details
                  </Link>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors duration-200">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Life Sciences Insights?</h2>
          <p className="text-xl text-red-100 mb-8">
            Get comprehensive market research and strategic insights for the life sciences industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={`/${lang}/industry`} className="border border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Browse Other Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
