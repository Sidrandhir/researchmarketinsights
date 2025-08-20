import Link from 'next/link';
import { Building2, CreditCard, PiggyBank, TrendingUp, ArrowLeft, Shield } from 'lucide-react';

export default async function BankingFinancialPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Building2 className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Banking and Financial
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Comprehensive market research reports on banking services, fintech innovation, investment management, and financial technology
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
                The banking and financial industry is experiencing unprecedented transformation driven by digital innovation, 
                fintech disruption, and changing consumer expectations. This sector encompasses traditional banking, 
                investment services, insurance, and emerging financial technologies.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With the rise of mobile banking, blockchain technology, and AI-powered financial services, the industry 
                is rapidly evolving to meet the demands of a digital-first economy.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">$22.5T+</div>
                  <div className="text-gray-600">Global Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">7.2%</div>
                  <div className="text-gray-600">Annual Growth Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Market Drivers</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Digital transformation and fintech innovation</li>
                <li>• Mobile banking and digital payments</li>
                <li>• Blockchain and cryptocurrency adoption</li>
                <li>• AI and machine learning in finance</li>
                <li>• Regulatory compliance and security</li>
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
              Explore the diverse segments within the banking and financial industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="h-8 w-8 text-green-600" />,
                title: "Retail Banking",
                description: "Personal banking services and consumer finance",
                features: ["Checking Accounts", "Savings Products", "Personal Loans", "Credit Cards"]
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
                title: "Investment Banking",
                description: "Corporate finance and capital markets",
                features: ["M&A Advisory", "IPO Services", "Debt Financing", "Equity Research"]
              },
              {
                icon: <PiggyBank className="h-8 w-8 text-purple-600" />,
                title: "Wealth Management",
                description: "Private banking and investment advisory",
                features: ["Portfolio Management", "Estate Planning", "Tax Advisory", "Retirement Planning"]
              },
              {
                icon: <CreditCard className="h-8 w-8 text-orange-600" />,
                title: "Fintech & Digital",
                description: "Financial technology and digital banking",
                features: ["Mobile Banking", "Digital Payments", "Blockchain", "AI in Finance"]
              },
              {
                icon: <Shield className="h-8 w-8 text-red-600" />,
                title: "Insurance Services",
                description: "Life, health, and property insurance",
                features: ["Life Insurance", "Health Insurance", "Property Insurance", "Reinsurance"]
              },
              {
                icon: <Building2 className="h-8 w-8 text-indigo-600" />,
                title: "Regulatory & Compliance",
                description: "Financial regulations and compliance services",
                features: ["KYC/AML", "Regulatory Reporting", "Risk Management", "Compliance Technology"]
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Banking & Financial Insights?</h2>
          <p className="text-xl text-green-100 mb-8">
            Get comprehensive market research and strategic insights for the banking and financial industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={`/${lang}/industry`} className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Browse Other Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
