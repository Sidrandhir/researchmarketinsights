// file: app/[lang]/reports/[slug]/page.tsx
import { prisma } from '@/lib/db';
import { notFound } from 'next/navigation';
import ReportContent from '@/components/reports/ReportContent';
import StickySidebar from '@/components/reports/StickySidebar';

// This function fetches one specific report based on the URL slug
async function getReport(reportSlug: string) {
  try {
    const report = await prisma.report.findUnique({
      where: {
        slug: reportSlug,
        status: 'PUBLISHED',
      },
    });

    if (!report) {
      notFound(); // Shows a 404 page if the report doesn't exist
    }
    return report;
  } catch (error) {
    console.error('Failed to fetch report:', error);
    notFound();
  }
}

// This function tells Next.js what pages to pre-build
export async function generateStaticParams() {
    try {
        const reports = await prisma.report.findMany({
            where: { status: 'PUBLISHED' },
            select: { slug: true },
        });
        
        const languages = ['en', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ko', 'ar', 'hi'];
        
        const params = [];
        for (const lang of languages) {
            for (const report of reports) {
                params.push({
                    lang: lang,
                    slug: report.slug,
                });
            }
        }
        
        return params;
    } catch (error) {
        console.warn('Prisma not available during build, skipping static generation:', error);
        // Return empty array to prevent build failure
        return [];
    }
}

export default async function ReportPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { slug } = await params;
  
  try {
    const report = await getReport(slug as string);
    
    if (!report) {
      notFound();
    }

    // We need to simulate the full report object for our components
    const fullReport = {
      id: report.id,
      title: report.title,
      category: report.category,
      content: report.content as Record<string, string>,
      faqs: report.faqs || [],
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ReportContent report={fullReport} activeTab="summary" />
            </div>
            <div className="lg:col-span-1">
              <StickySidebar reportCode={report.reportCode || slug} />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Failed to render report page:', error);
    notFound();
  }
}