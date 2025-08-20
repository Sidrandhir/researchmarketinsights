import { notFound } from 'next/navigation';

export default async function IndustryCategoryPage({ params }: { params: Promise<{ lang: string, categorySlug: string }> }) {
  const { categorySlug } = await params;

  // Define valid industry categories
  const validCategories = [
    'aerospace-defence',
    'automotive-transportation', 
    'banking-financial',
    'chemicals-materials',
    'consumer-goods',
    'electronics-semiconductor',
    'energy-power',
    'food-beverages',
    'life-sciences',
    'technology-media'
  ];

  // Check if the category is valid
  if (!validCategories.includes(categorySlug)) {
    notFound();
  }

  // For now, show a simple page since individual pages exist
  // In the future, this could show industry-specific content
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Industry Category: {categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </h1>
        <p className="text-gray-600">
          This category page is under development. Please use the navigation menu to access specific industry pages.
        </p>
      </div>
    </div>
  );
}