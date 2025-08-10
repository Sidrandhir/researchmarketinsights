import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Download, Eye, Calendar, FileText, TrendingUp, Users, Bed } from 'lucide-react';
import StickySidebar from '@/components/reports/StickySidebar';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  return {
    title: lang === 'en' ? 'Global Patient Repositioning System Market - Market Research Insights' : 'Global Patient Repositioning System Market - Market Research Insights',
    description: 'Comprehensive analysis of the global patient repositioning system market, including market size, growth trends, key players, and future opportunities.',
  };
}

const PatientRepositioningPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;

  const reportData = {
    title: 'Global Patient Repositioning System Market',
    reportCode: 'MRR-2024-002',
    price: 2499,
    discount: 1999,
    category: 'LIFE_SCIENCES',
    publishedDate: '2024-01-20',
    pages: 200,
    format: 'PDF + Excel',
    license: 'Single User',
    author: 'Dr. Michael Chen',
    description: 'The global patient repositioning system market is witnessing significant growth due to increasing healthcare expenditure, rising geriatric population, and growing awareness about patient safety and comfort in healthcare facilities.'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-responsive py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href={`/${lang}`} className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href={`/${lang}/reports`} className="hover:text-primary-600">Reports</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{reportData.title}</span>
          </nav>
        </div>
      </div>

      {/* Report Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-responsive py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Report Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                  {reportData.category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Featured
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {reportData.title}
              </h1>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {reportData.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Published: {new Date(reportData.publishedDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{reportData.pages} Pages</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{reportData.format}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{reportData.license}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href={`/${lang}/contact`}
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center gap-2"
                >
                  <Eye className="h-4 w-4" />
                  Enquire Before Buying
                </Link>
                <Link
                  href={`/${lang}/buy-now`}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Buy Now
                </Link>
              </div>
            </div>

            {/* Right Column: Pricing */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Report Pricing</h3>
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">${reportData.discount}</span>
                    <span className="text-lg text-gray-500 line-through">${reportData.price}</span>
                    <span className="text-sm text-green-600 font-medium">
                      {Math.round(((reportData.price - reportData.discount) / reportData.price) * 100)}% OFF
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Limited time offer</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>PDF + Excel Format</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>200+ Pages of Analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Market Forecasts 2024-2030</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Competitive Analysis</span>
                  </div>
                </div>

                <Link
                  href={`/${lang}/buy-now`}
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors text-center block"
                >
                  Get Full Report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-responsive py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Main Content */}
          <div className="lg:col-span-2">
            
            {/* Table of Contents */}
            <section className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Executive Summary', page: 1 },
                  { title: 'Market Overview', page: 12 },
                  { title: 'Market Dynamics', page: 28 },
                  { title: 'Market Segmentation', page: 52 },
                  { title: 'Regional Analysis', page: 78 },
                  { title: 'Competitive Landscape', page: 102 },
                  { title: 'Key Players Analysis', page: 128 },
                  { title: 'Recent Developments', page: 152 },
                  { title: 'Future Outlook', page: 168 },
                  { title: 'Methodology', page: 182 },
                  { title: 'Appendix', page: 190 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700 font-medium">{item.title}</span>
                    <span className="text-sm text-gray-500">Page {item.page}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Market Overview */}
            <section className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Overview</h2>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 mb-4">
                  The global patient repositioning system market is expected to reach USD 1.2 billion by 2030, growing at a CAGR of 8.7% from 2024 to 2030. The market growth is primarily attributed to the increasing geriatric population, rising healthcare expenditure, and growing awareness about patient safety and comfort in healthcare facilities.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Market Drivers</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Increasing geriatric population</li>
                      <li>• Rising healthcare expenditure</li>
                      <li>• Growing awareness about patient safety</li>
                      <li>• Technological advancements in healthcare</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Market Restraints</h4>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• High cost of advanced systems</li>
                      <li>• Limited reimbursement policies</li>
                      <li>• Lack of skilled healthcare professionals</li>
                      <li>• Stringent regulatory requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Market Segmentation */}
            <section className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Segmentation</h2>
              
              <div className="space-y-4">
                {[
                  { name: 'Mechanical Systems', share: '45%', growth: '+9.2%' },
                  { name: 'Electrical Systems', share: '32%', growth: '+12.8%' },
                  { name: 'Hybrid Systems', share: '18%', growth: '+15.5%' },
                  { name: 'Others', share: '5%', growth: '+6.3%' }
                ].map((segment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Bed className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{segment.name}</h4>
                        <p className="text-sm text-gray-600">Market Share: {segment.share}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{segment.growth}</div>
                      <div className="text-sm text-gray-500">YoY Growth</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Application Areas */}
            <section className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Areas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Hospitals</h4>
                  <p className="text-blue-800 text-sm mb-3">Primary application area with highest adoption rate</p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-blue-700">Market Share: 65%</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-3">Long-term Care Facilities</h4>
                  <p className="text-green-800 text-sm mb-3">Growing segment with increasing elderly population</p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-700">Market Share: 20%</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-3">Home Healthcare</h4>
                  <p className="text-purple-800 text-sm mb-3">Emerging segment with high growth potential</p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-purple-700">Market Share: 10%</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-3">Others</h4>
                  <p className="text-orange-800 text-sm mb-3">Includes rehabilitation centers and clinics</p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-orange-700">Market Share: 5%</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Players */}
            <section className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Market Players</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Hill-Rom Holdings, Inc.',
                  'Stryker Corporation',
                  'Getinge AB',
                  'ArjoHuntleigh AB',
                  'Joerns Healthcare LLC',
                  'Liko AB',
                  'Guldmann A/S',
                  'Handicare Group AB'
                ].map((player, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary-600">{index + 1}</span>
                    </div>
                    <span className="font-medium text-gray-900">{player}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Developments */}
            <section className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Market Developments</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Hill-Rom Launches New Patient Repositioning System</h4>
                  <p className="text-gray-600 text-sm mb-2">January 2024 - Advanced ergonomic design with improved patient comfort features</p>
                  <span className="text-xs text-gray-500">Source: Company Press Release</span>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">FDA Approval for Stryker&apos;s Smart Repositioning Technology</h4>
                  <p className="text-gray-600 text-sm mb-2">December 2023 - AI-powered patient positioning with safety sensors</p>
                  <span className="text-xs text-gray-500">Source: FDA Database</span>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Strategic Partnership: Getinge & Siemens Healthineers</h4>
                  <p className="text-gray-600 text-sm mb-2">November 2023 - Integrated patient care solutions for critical care units</p>
                  <span className="text-xs text-gray-500">Source: Business Wire</span>
                </div>
              </div>
            </section>

            {/* Regional Analysis */}
            <section className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Regional Analysis</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">NA</div>
                    <div>
                      <h4 className="font-semibold text-blue-900">North America</h4>
                      <p className="text-sm text-blue-700">Largest market with advanced healthcare infrastructure</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">42%</div>
                    <div className="text-sm text-blue-500">Market Share</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">EU</div>
                    <div>
                      <h4 className="font-semibold text-green-900">Europe</h4>
                      <p className="text-sm text-green-700">Strong healthcare regulations and aging population</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">28%</div>
                    <div className="text-sm text-green-500">Market Share</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">AP</div>
                    <div>
                      <h4 className="font-semibold text-purple-900">Asia Pacific</h4>
                      <p className="text-sm text-purple-700">Fastest growing region with increasing healthcare spending</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-purple-600">25%</div>
                    <div className="text-sm text-purple-500">Market Share</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">ROW</div>
                    <div>
                      <h4 className="font-semibold text-orange-900">Rest of World</h4>
                      <p className="text-sm text-orange-700">Emerging markets with growth potential</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">5%</div>
                    <div className="text-sm text-orange-500">Market Share</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1">
            <StickySidebar reportCode={reportData.reportCode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRepositioningPage;
