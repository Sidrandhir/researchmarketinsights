import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Download, Eye, Calendar, FileText, TrendingUp, Users, BarChart3 } from 'lucide-react';
import StickySidebar from '@/components/reports/StickySidebar';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang;
  
  return {
    title: lang === 'en' ? 'Global Connected Drug Delivery Devices Market - Market Research Insights' : 'Global Connected Drug Delivery Devices Market - Market Research Insights',
    description: 'Comprehensive analysis of the global connected drug delivery devices market, including market size, growth trends, key players, and future opportunities.',
  };
}

const ConnectedDrugDeliveryPage: React.FC<{ params: { lang: string } }> = ({ params }) => {
  const lang = params.lang;

  const reportData = {
    title: 'Global Connected Drug Delivery Devices Market',
    reportCode: 'MRR-2024-001',
    price: 2999,
    discount: 2499,
    category: 'LIFE_SCIENCES',
    publishedDate: '2024-01-15',
    pages: 250,
    format: 'PDF + Excel',
    license: 'Single User',
    author: 'Dr. Sarah Johnson',
    description: 'The global connected drug delivery devices market is experiencing rapid growth driven by technological advancements, increasing chronic disease prevalence, and the need for better patient monitoring and adherence.'
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
                  href={`/${lang}/reports/${reportData.reportCode}/enquire`}
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center gap-2"
                >
                  <Eye className="h-4 w-4" />
                  Enquire Before Buying
                </Link>
                <Link
                  href={`/${lang}/reports/${reportData.reportCode}/buy`}
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
                    <span>250+ Pages of Analysis</span>
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
                  href={`/${lang}/reports/${reportData.reportCode}/buy`}
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
                  { title: 'Market Overview', page: 15 },
                  { title: 'Market Dynamics', page: 35 },
                  { title: 'Market Segmentation', page: 65 },
                  { title: 'Regional Analysis', page: 95 },
                  { title: 'Competitive Landscape', page: 125 },
                  { title: 'Key Players Analysis', page: 155 },
                  { title: 'Recent Developments', page: 185 },
                  { title: 'Future Outlook', page: 205 },
                  { title: 'Methodology', page: 225 },
                  { title: 'Appendix', page: 235 }
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
                  The global connected drug delivery devices market is projected to reach USD 2.8 billion by 2030, growing at a CAGR of 12.3% from 2024 to 2030. This growth is primarily driven by the increasing prevalence of chronic diseases, technological advancements in IoT and connectivity, and the growing demand for personalized medicine.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Market Drivers</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Increasing chronic disease prevalence</li>
                      <li>• Technological advancements in IoT</li>
                      <li>• Growing demand for personalized medicine</li>
                      <li>• Government initiatives and funding</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Market Restraints</h4>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• High development costs</li>
                      <li>• Regulatory challenges</li>
                      <li>• Data security concerns</li>
                      <li>• Limited reimbursement policies</li>
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
                  { name: 'Connected Inhalers', share: '35%', growth: '+12.5%' },
                  { name: 'Connected Injectors', share: '28%', growth: '+15.2%' },
                  { name: 'Connected Pumps', share: '22%', growth: '+8.7%' },
                  { name: 'Connected Patches', share: '15%', growth: '+18.3%' }
                ].map((segment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-primary-600" />
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

            {/* Key Players */}
            <section className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Market Players</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Medtronic plc',
                  'Becton, Dickinson and Company',
                  'Novo Nordisk A/S',
                  'Eli Lilly and Company',
                  'Sanofi S.A.',
                  'Johnson & Johnson',
                  'AstraZeneca plc',
                  'Pfizer Inc.'
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
                  <h4 className="font-semibold text-gray-900 mb-2">Medtronic Launches New Connected Insulin Pump</h4>
                  <p className="text-gray-600 text-sm mb-2">January 2024 - Advanced connectivity features and AI-powered dosing recommendations</p>
                  <span className="text-xs text-gray-500">Source: Company Press Release</span>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">FDA Approval for Smart Inhaler Technology</h4>
                  <p className="text-gray-600 text-sm mb-2">December 2023 - Revolutionary connected inhaler with real-time monitoring</p>
                  <span className="text-xs text-gray-500">Source: FDA Database</span>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Partnership Announcement: BD & Microsoft</h4>
                  <p className="text-gray-600 text-sm mb-2">November 2023 - Cloud-based drug delivery management platform</p>
                  <span className="text-xs text-gray-500">Source: Business Wire</span>
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

export default ConnectedDrugDeliveryPage;
