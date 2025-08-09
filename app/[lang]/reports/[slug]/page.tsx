// file: app/[lang]/reports/[slug]/page.tsx
import { prisma } from '@/lib/db';
import Link from 'next/link';
import { PageProps } from '@/types';
import { notFound } from 'next/navigation';
import ReportContent from '@/components/reports/ReportContent';
import StickySidebar from '@/components/reports/StickySidebar';

// This function fetches one specific report based on the URL slug
async function getReport(reportSlug: string) {
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
}

// This function tells Next.js what pages to pre-build
export async function generateStaticParams() {
    const reports = await prisma.report.findMany({
        where: { status: 'PUBLISHED' },
        select: { slug: true },
    });
    return reports.map((report) => ({
        slug: report.slug,
    }));
}

export default async function ReportDetailPage({ params }: PageProps) {
  const { lang, slug } = params;
  const report = await getReport(slug as string);
  // Type assertion to let TypeScript know these fields exist and are JSON
  const content = report.content as any;
  const faqs = report.faqs as any;

  const categoryName = report.category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs and Title Section */}
      <div className="bg-gray-50 py-8 border-b">
        <div className="container-responsive">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href={`/${lang}`} className="hover:text-primary-600">Home</Link>
            {' > '}
            <Link href={`/${lang}/industry`} className="hover:text-primary-600">Industries</Link>
            {' > '}
            <span className="text-gray-800">{categoryName}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{report.title}</h1>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="container-responsive py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Main Content */}
          <div className="lg:col-span-2">
            <ReportContent report={{ ...report, content, faqs }} />
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1">
            <StickySidebar reportCode={report.reportCode} />
          </div>

        </div>
      </div>
    </div>
  );
}