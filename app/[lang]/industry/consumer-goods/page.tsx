import Link from 'next/link';
import { ShoppingBag, Home, Heart, ArrowLeft, Star, Package } from 'lucide-react';

export default async function ConsumerGoodsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <ShoppingBag className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Consumer Goods
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
              Comprehensive market research reports on retail, e-commerce, consumer electronics, and lifestyle products
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
                The consumer goods industry is a dynamic and rapidly evolving sector that directly impacts everyday life. 
                This industry encompasses retail, e-commerce, consumer electronics, apparel, and lifestyle products.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With the rise of digital commerce, changing consumer preferences, and sustainability demands, the industry 
                is experiencing significant transformation and innovation.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">$15.8T+</div>
                  <div className="text-gray-600">Global Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">5.9%</div>
                  <div className="text-gray-600">Annual Growth Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">🛍️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Market Drivers</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• E-commerce and digital transformation</li>
                <li>• Sustainability and ethical consumption</li>
                <li>• Personalization and customization</li>
                <li>• Mobile commerce and social shopping</li>
                <li>• Supply chain innovation</li>
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
              Explore the diverse segments within the consumer goods industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShoppingBag className="h-8 w-8 text-pink-600" />,
                title: "Retail & E-commerce",
                description: "Online and offline retail channels",
                features: ["E-commerce Platforms", "Brick & Mortar", "Omnichannel Retail", "Marketplaces"]
              },
              {
                icon: <Home className="h-8 w-8 text-blue-600" />,
                title: "Home & Lifestyle",
                description: "Home goods and lifestyle products",
                features: ["Furniture", "Home Decor", "Kitchen Appliances", "Garden Products"]
              },
              {
                icon: <Heart className="h-8 w-8 text-red-600" />,
                title: "Apparel & Fashion",
                description: "Clothing, footwear, and accessories",
                features: ["Fast Fashion", "Luxury Brands", "Athletic Wear", "Sustainable Fashion"]
              },
              {
                icon: <Star className="h-8 w-8 text-yellow-600" />,
                title: "Beauty & Personal Care",
                description: "Cosmetics, skincare, and wellness",
                features: ["Skincare", "Makeup", "Hair Care", "Fragrances"]
              },
              {
                icon: <Package className="h-8 w-8 text-green-600" />,
                title: "Food & Beverages",
                description: "Packaged food and beverage products",
                features: ["Snack Foods", "Beverages", "Frozen Foods", "Organic Products"]
              },
              {
                icon: <ShoppingBag className="h-8 w-8 text-purple-600" />,
                title: "Consumer Electronics",
                description: "Technology and electronic devices",
                features: ["Smartphones", "Laptops", "Wearables", "Smart Home"]
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
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Consumer Goods Insights?</h2>
          <p className="text-xl text-pink-100 mb-8">
            Get comprehensive market research and strategic insights for the consumer goods industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={`/${lang}/industry`} className="border border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Browse Other Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
