import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import Link from 'next/link';
import { FileText, ArrowRight, Download, Calendar } from 'lucide-react';

export default async function IndustryCategoryPage({ params }: { params: Promise<{ lang: string, categorySlug: string }> }) {
  const { categorySlug, lang } = await params;

  // Map URL category to database category
  const categoryMap: { [key: string]: string } = {
    'aerospace-defence': 'AEROSPACE_DEFENSE',
    'automotive-transportation': 'AUTOMOTIVE_TRANSPORTATION',
    'banking-financial': 'BANKING_FINANCIAL_SERVICES_INSURANCE',
    'chemicals-materials': 'CHEMICALS_MATERIALS',
    'consumer-goods': 'CONSUMER_GOODS',
    'electronics-semiconductor': 'ELECTRONICS_SEMICONDUCTOR',
    'energy-power': 'ENERGY_POWER',
    'food-beverages': 'FOOD_BEVERAGES',
    'life-sciences': 'LIFE_SCIENCES',
    'technology-media': 'TECHNOLOGY_MEDIA_TELECOMMUNICATIONS'
  };

  const dbCategory = categoryMap[categorySlug];
  if (!dbCategory) {
    notFound();
  }

  // Fetch reports for this category
  const reports = await prisma.report.findMany({
    where: { 
      category: dbCategory as any,
      status: 'PUBLISHED'
    },
    include: {
      author: {
        select: {
          name: true,
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const categoryDisplayName = categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <FileText className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {categoryDisplayName} Reports
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Comprehensive market research and industry analysis for {categoryDisplayName} sector
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href={`/${lang}`} className="hover:text-gray-700">Home</Link>
            <ArrowRight className="h-4 w-4" />
            <Link href={`/${lang}/reports`} className="hover:text-gray-700">Reports</Link>
            <ArrowRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">{categoryDisplayName}</span>
          </nav>
        </div>
      </div>

      {/* Reports Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {reports.length} {categoryDisplayName} Reports Available
            </h2>
            <p className="text-gray-600">
              Discover the latest market research and industry insights for {categoryDisplayName} sector.
            </p>
          </div>

          {reports.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Reports Available</h3>
              <p className="text-gray-600">
                No {categoryDisplayName} reports are currently available. Check back soon for new reports.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reports.map((report) => (
                <div key={report.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {report.reportCode}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(report.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {report.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {report.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(report.createdAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>By {report.author?.name || 'Admin'}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-2xl font-bold text-gray-900">
                        {formatPrice(Number(report.price))}
                      </div>
                      {report.discount && (
                        <div className="text-lg text-green-600 font-medium">
                          {formatPrice(Number(report.discount))}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Link
                        href={`/${lang}/reports/${report.slug}`}
                        className="flex-1 bg-indigo-600 text-white text-center py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                      >
                        View Report
                      </Link>
                      <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}