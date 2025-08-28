import Link from 'next/link';
import { Utensils, Coffee, Wine, ArrowLeft, Leaf, Package, Download } from 'lucide-react';

export default async function FoodBeveragesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Utensils className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Food and Beverages
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Comprehensive market research reports on food processing, beverage production, packaging, and food technology innovation
            </p>
          </div>
        </div>
      </section>

      {/* Back to Industries Link */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href={`/${lang}/industry`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Industries
          </Link>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                The food and beverages industry is a dynamic sector that directly impacts global health and nutrition. 
                This industry encompasses food processing, beverage production, packaging, and food technology innovation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With increasing focus on health, sustainability, and convenience, the industry is experiencing significant 
                transformation in product development, packaging, and distribution.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">$12.4T+</div>
                  <div className="text-gray-600">Global Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">5.7%</div>
                  <div className="text-gray-600">Annual Growth Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">🍔</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Market Drivers</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Health and wellness trends</li>
                <li>• Plant-based and alternative proteins</li>
                <li>• Convenience and on-the-go consumption</li>
                <li>• Sustainability and packaging innovation</li>
                <li>• Digital transformation and e-commerce</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Segments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Segments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the diverse segments within the food and beverages industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Utensils className="h-8 w-8 text-orange-600" />,
                title: "Processed Foods",
                description: "Ready-to-eat and convenience foods",
                features: ["Frozen Foods", "Canned Goods", "Snack Foods", "Ready Meals"]
              },
              {
                icon: <Coffee className="h-8 w-8 text-brown-600" />,
                title: "Beverages",
                description: "Non-alcoholic and alcoholic drinks",
                features: ["Soft Drinks", "Coffee & Tea", "Juices", "Energy Drinks"]
              },
              {
                icon: <Wine className="h-8 w-8 text-purple-600" />,
                title: "Alcoholic Beverages",
                description: "Beer, wine, and spirits production",
                features: ["Beer", "Wine", "Spirits", "Craft Beverages"]
              },
              {
                icon: <Leaf className="h-8 w-8 text-green-600" />,
                title: "Organic & Natural",
                description: "Health-focused food products",
                features: ["Organic Foods", "Natural Ingredients", "Clean Label", "Functional Foods"]
              },
              {
                icon: <Package className="h-8 w-8 text-blue-600" />,
                title: "Food Packaging",
                description: "Innovative packaging solutions",
                features: ["Sustainable Packaging", "Smart Packaging", "Active Packaging", "Biodegradable"]
              },
              {
                icon: <Utensils className="h-8 w-8 text-red-600" />,
                title: "Food Technology",
                description: "Innovation in food production",
                features: ["Food Processing", "Food Safety", "Nutrition Technology", "Alternative Proteins"]
              }
            ].map((segment, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {segment.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{segment.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{segment.description}</p>
                <ul className="space-y-2">
                  {segment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Reports</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our latest market research reports in the Food & Beverages industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Global Plant Based Meat Alternatives Market",
                description: "Comprehensive analysis of plant-based meat alternatives market including market size, trends, and forecast 2024-2032",
                price: "$4,999",
                reportCode: "RMI-2024-004",
                features: ["Market Size & Forecast", "Source Analysis", "Product Segmentation", "Regional Insights"],
                image: "🥬"
              }
            ].map((report, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{report.image}</div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">Featured</div>
                    <div className="text-xs text-gray-500">Report</div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                    Food & Beverages
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {report.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                    {report.description}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  {report.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Code:</span> {report.reportCode}
                  </div>
                  <div className="text-2xl font-bold text-orange-600">
                    {report.price}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link 
                    href={`/${lang}/reports/global-plant-based-meat-alternatives-market`}
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200"
                  >
                    View Details
                  </Link>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors duration-200">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Food & Beverages Insights?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Get comprehensive market research and strategic insights for the food and beverages industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={`/${lang}/industry`} className="border border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Browse Other Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
