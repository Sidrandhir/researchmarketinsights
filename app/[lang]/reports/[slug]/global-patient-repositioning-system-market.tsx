'use client'; // This must be a client component because the sidebar and tabs use state

import Link from 'next/link';
import ReportContent from '@/components/reports/ReportContent';
import StickySidebar from '@/components/reports/StickySidebar';
import React from 'react'; // Added missing import for React

// This is our MOCK data for this specific report page
const reportData = {
  title: 'Global Patient Repositioning System Market',
  category: 'LIFE_SCIENCES',
  reportCode: 'RPT-PRS-001',
  content: {
    summary: "Global patient repositioning system market size is poised to reach USD XX. XX Million by 2024, growing at a CAGR of X.X% during the forecast period. The market is driven by increasing demand for patient safety, rising healthcare expenditure, and technological advancements in medical devices.",
    overview: "The global patient repositioning system market encompasses various devices and systems designed to safely move and reposition patients in healthcare settings. These systems help reduce the risk of injury to both patients and healthcare workers while improving patient comfort and care quality.",
    methodology: "Our research methodology involves extensive primary and secondary research, including interviews with industry experts, analysis of company reports, and review of regulatory documents. We also analyze market trends, competitive landscape, and technological developments.",
    toc: "1. Executive Summary\n2. Market Overview\n3. Market Dynamics\n4. Competitive Landscape\n5. Regional Analysis\n6. Market Forecast\n7. Appendix",
    scope: "This report covers the global patient repositioning system market segmented by product type, end-user, and region. The analysis includes market size, growth trends, competitive landscape, and future outlook from 2024 to 2032.",
    segments: "The market is segmented by product type (manual systems, powered systems, integrated systems), end-user (hospitals, long-term care facilities, home care), and region (North America, Europe, Asia-Pacific, Latin America, Middle East & Africa)."
  },
  faqs: [
    { question: "What are the major factors driving the growth of the patient repositioning system market?", answer: "Increasing government funds for hospitals expansions is expected to rise the market growth." },
    { question: "Which region is expected to dominate the market?", answer: "North America is expected to dominate the market due to high healthcare expenditure and advanced healthcare infrastructure." },
    { question: "What are the key challenges in the market?", answer: "High cost of advanced systems and lack of skilled healthcare professionals are key challenges." }
  ]
};

// NOTE: This is a simplified version of the reportData. 
// You should copy the full JSON for `content` and `faqs` from my previous response here.

export default function PatientRepositioningReportPage({ params }: { params: Promise<{ lang: string }> }) {
  // Since this is a client component, we need to handle the async params differently
  const [lang, setLang] = React.useState<string>('');
  
  React.useEffect(() => {
    params.then(({ lang: resolvedLang }) => setLang(resolvedLang));
  }, [params]);

  const categoryName = reportData.category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  // We need to simulate the full report object for our components
  const fullReportObject = {
      id: '1',
      title: reportData.title,
      category: reportData.category,
      content: reportData.content
  };

  if (!lang) {
    return <div>Loading...</div>;
  }

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