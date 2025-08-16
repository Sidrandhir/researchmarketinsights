'use client'; // This must be a client component because the sidebar and tabs use state

import Link from 'next/link';
import ReportContent from '@/components/reports/ReportContent';
import StickySidebar from '@/components/reports/StickySidebar';

// This is our MOCK data for this specific report page
const reportData = {
  title: 'Global Patient Repositioning System Market',
  category: 'LIFE_SCIENCES',
  reportCode: 'RPT-PRS-001',
  content: {
    marketOutlook: "Global patient repositioning system market size is poised to reach USD XX. XX Million by 2024...", // Truncated for brevity
    marketDynamics: [
      { heading: "Driver: Aging Population...", body: "The world population is aging and the elderly are increasingly in need of medical assistance and care..." },
      { heading: "Driver: Demand for Customized...", body: "A considerable shift is observed toward patient positioning system solutions that can be customized..." }
    ],
    keyPlayers: ["Stryker Corporation (US)", "Steris Plc. (US)", "Hill-Rom, Inc. (US)"],
    // Add all other JSON content sections here
  },
  faqs: [
    { question: "What are the major factors driving the growth...?", answer: "Increasing government funds for hospitals expansions is expected to rise the market growth." },
    // Add all other FAQs here
  ]
};

// NOTE: This is a simplified version of the reportData. 
// You should copy the full JSON for `content` and `faqs` from my previous response here.

export default async function PatientRepositioningReportPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const categoryName = reportData.category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  // We need to simulate the full report object for our components
  const fullReportObject = {
      ...reportData,
      id: '1',
      slug: 'global-patient-repositioning-system-market',
      description: 'Global Patient Repositioning System Market, Analysis, Size, Share, Trends, COVID-19 Impact, and Forecast 2024-2032.',
      price: 4999.00,
      subcategory: null,
      imageUrl: null,
      toc: null,
      scope: null,
      segments: null,
      metaTitle: null,
      metaDescription: null,
      keywords: null,
      status: 'PUBLISHED' as const, // Type assertion to match Status enum
      featured: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      authorId: 'system',
      discount: null
  } as any; // Type assertion to bypass strict typing

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-8 border-b">
        <div className="container-responsive">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href={`/${lang}`} className="hover:text-primary-600">Home</Link>
            {' > '}
            <Link href={`/${lang}/industry`} className="hover:text-primary-600">Industries</Link>
            {' > '}
            <Link href={`/${lang}/industry/life-sciences`} className="hover:text-primary-600">{categoryName}</Link>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{reportData.title}</h1>
        </div>
      </div>
      <div className="container-responsive py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ReportContent report={fullReportObject} activeTab="summary" />
          </div>
          <div className="lg:col-span-1">
            <StickySidebar reportCode={reportData.reportCode} />
          </div>
        </div>
      </div>
    </div>
  );
}