// file: app/[lang]/industry/[categorySlug]/page.tsx
import Link from 'next/link';
import ComingSoon from '@/components/ui/ComingSoon';
import { ArrowRight, Tag, Calendar, Microscope, Pill, Heart, Brain } from 'lucide-react';

// In the future, this data will come from a database.
// For now, it's our "mock" database.
const MOCK_REPORTS_DB: Array<{
  id: string;
  title: string;
  slug: string;
  categorySlug: string;
  description: string;
  reportCode: string;
  price: string;
  createdAt: string;
}> = [
  {
    id: '1',
    title: 'Global Patient Repositioning System Market',
    slug: 'global-patient-repositioning-system-market',
    categorySlug: 'life-sciences',
    description: 'Global Patient Repositioning System Market, Analysis, Size, Share, Trends, COVID-19 Impact, and Forecast 2024-2032.',
    reportCode: 'RPT-PRS-001',
    price: '4999.00',
    createdAt: '2024-08-01T12:00:00Z',
  },
  {
    id: '2',
    title: 'Global Connected Drug Delivery Devices Market',
    slug: 'global-connected-drug-delivery-devices-market',
    categorySlug: 'technology-media-telecommunications',
    description: 'Global Connected Drug Delivery Devices Market, Analysis, Size, Share, Trends, COVID-19 Impact, and Forecast 2024-2032.',
    reportCode: 'RPT-CDD-002',
    price: '5499.00',
    createdAt: '2024-08-05T12:00:00Z',
  },
  {
    id: '3',
    title: 'Global Patient Monitoring Devices Market',
    slug: 'global-patient-monitoring-devices-market',
    categorySlug: 'life-sciences',
    description: 'Comprehensive analysis of patient monitoring devices including vital signs monitors, cardiac monitors, and respiratory monitors.',
    reportCode: 'RPT-PMD-003',
    price: '5999.00',
    createdAt: '2024-08-10T12:00:00Z',
  },
  {
    id: '4',
    title: 'Global Pharmaceutical Packaging Market',
    slug: 'global-pharmaceutical-packaging-market',
    categorySlug: 'life-sciences',
    description: 'Analysis of pharmaceutical packaging solutions including blister packs, bottles, vials, and sustainable packaging options.',
    reportCode: 'RPT-PPM-004',
    price: '4499.00',
    createdAt: '2024-08-15T12:00:00Z',
  },
  {
    id: '5',
    title: 'Global Medical Device Outsourcing Market',
    slug: 'global-medical-device-outsourcing-market',
    categorySlug: 'life-sciences',
    description: 'Market analysis of medical device outsourcing services including design, manufacturing, and regulatory compliance.',
    reportCode: 'RPT-MDO-005',
    price: '5499.00',
    createdAt: '2024-08-20T12:00:00Z',
  },
  {
    id: '6',
    title: 'Global Precision Medicine Market',
    slug: 'global-precision-medicine-market',
    categorySlug: 'life-sciences',
    description: 'Comprehensive analysis of precision medicine including genomics, targeted therapies, and personalized treatment approaches.',
    reportCode: 'RPT-PMM-006',
    price: '6999.00',
    createdAt: '2024-08-25T12:00:00Z',
  },
  // Add more mock reports here if you want
];

export default function IndustryCategoryPage({ params }: { params: { lang: string, categorySlug: string } }) {
  const { lang, categorySlug } = params;

  // Filter our mock database to find reports for this specific category
  const reports = MOCK_REPORTS_DB.filter(report => report.categorySlug === categorySlug);
  
  const categoryName = categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  // If no reports are found for this category, show the Coming Soon component
  if (reports.length === 0) {
    return <ComingSoon categoryName={categoryName} lang={lang} />;
  }

  // Special handling for life-sciences category
  if (categorySlug === 'life-sciences') {
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Life Sciences & Healthcare
              </h1>
              <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
                Comprehensive market research reports on pharmaceuticals, medical devices, biotechnology, and patient care solutions
              </p>
            </div>
          </div>
        </section>

        {/* Patient Reports Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Patient Care & Medical Device Reports
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover insights into patient positioning systems, monitoring devices, and healthcare technology innovations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reports.map((report) => (
                <div key={report.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">🏥</div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600">
                        New
                      </div>
                      <div className="text-xs text-gray-500">Report</div>
                    </div>
                  </div>

                  <Link href={`/${lang}/reports/${report.slug}`} className="group">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                      {report.title}
                    </h3>
                  </Link>

                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {report.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Tag className="h-4 w-4 mr-1" />
                      {report.reportCode}
                    </div>
                    <div className="text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1 inline" />
                      {new Date(report.createdAt).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-red-600">
                      ${report.price}
                    </div>
                    <Link 
                      href={`/${lang}/reports/${report.slug}`}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200"
                    >
                      View Report
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Life Sciences Market Overview
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Key statistics and insights from the healthcare and life sciences industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Microscope, value: '789+', label: 'Reports Published', color: 'text-red-600' },
                { icon: Pill, value: '50,000+', label: 'Pharmaceutical Studies', color: 'text-blue-600' },
                { icon: Heart, value: '$2.5B+', label: 'Market Value Analyzed', color: 'text-green-600' },
                { icon: Brain, value: '150+', label: 'Countries Covered', color: 'text-purple-600' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={`flex justify-center mb-4 ${stat.color}`}>
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Default layout for other categories
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {categoryName} Industry
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive market research reports and industry analysis
            </p>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {categoryName} Reports
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive collection of market research reports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report) => (
              <div key={report.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                <Link href={`/${lang}/reports/${report.slug}`} className="group">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {report.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                  {report.description}
                </p>
                
                <div className="text-sm text-gray-500 space-y-2 mb-4">
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-2 text-blue-500" /> 
                    Report Code: {report.reportCode}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" /> 
                    Published: {new Date(report.createdAt).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-auto pt-4 border-t">
                  <p className="text-2xl font-bold text-blue-600">${report.price}</p>
                  
                  <Link 
                    href={`/${lang}/reports/${report.slug}`}
                    className="group flex items-center text-blue-600 font-semibold hover:text-blue-700"
                  >
                    View Report
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}