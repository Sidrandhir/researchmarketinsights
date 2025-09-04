import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import ReportPageContent from '@/components/reports/ReportPageContent';

interface ReportPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  // Generate static params for all published reports
  const reports = await prisma.report.findMany({
    where: { status: 'PUBLISHED' },
    select: { slug: true }
  });

  return reports.map((report) => ({
    slug: report.slug,
  }));
}

export async function generateMetadata({ params }: ReportPageProps) {
  const { slug } = await params;
  
  const report = await prisma.report.findUnique({
    where: { slug },
    select: {
      title: true,
      metaTitle: true,
      metaDescription: true,
      description: true,
      keywords: true,
      category: true,
      price: true,
      discount: true,
    }
  });

  if (!report) {
    return {
      title: 'Report Not Found',
    };
  }

  return {
    title: report.metaTitle || report.title,
    description: report.metaDescription || report.description,
    keywords: report.keywords,
    openGraph: {
      title: report.metaTitle || report.title,
      description: report.metaDescription || report.description,
      type: 'article',
    },
  };
}

export default async function ReportPage({ params }: ReportPageProps) {
  const { slug } = await params;
  
  const report = await prisma.report.findUnique({
    where: { slug },
    include: {
      author: {
        select: {
          name: true,
          email: true,
        }
      }
    }
  });

  if (!report || report.status !== 'PUBLISHED') {
    notFound();
  }

  return <ReportPageContent report={report} />;
}



