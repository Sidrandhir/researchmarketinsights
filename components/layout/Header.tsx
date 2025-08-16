"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

interface DropdownItem {
  name: string;
  href: string;
}

interface NavigationItem {
  name: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [clickedDropdown, setClickedDropdown] = useState<string | null>(null);
  const router = useRouter();

  const navigationItems: NavigationItem[] = [
    { name: 'HOME', href: '/', hasDropdown: false },
    {
      name: 'INDUSTRIES',
      href: '/industry',
      hasDropdown: true,
      dropdownItems: [
        { name: '🚀 Aerospace and Defence', href: '/industry/aerospace-defence' },
        { name: '🚗 Automotive and Transportation', href: '/industry/automotive-transportation' },
        { name: '🏦 Banking and Financial', href: '/industry/banking-financial' },
        { name: '🧪 Chemicals and Materials', href: '/industry/chemicals-materials' },
        { name: '🛍️ Consumer Goods', href: '/industry/consumer-goods' },
        { name: '💻 Electronics and Semiconductor', href: '/industry/electronics-semiconductor' },
        { name: '⚡ Energy and Power', href: '/industry/energy-power' },
        { name: '🍔 Food and Beverages', href: '/industry/food-beverages' },
        { name: '🧬 Life Sciences', href: '/industry/life-sciences' },
        { name: '📱 Technology and Media', href: '/industry/technology-media' }
      ]
    },
    {
      name: 'SERVICES',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: '💼 Consulting Services', href: '/services/consulting' },
        { name: '📊 Syndicated Market Research', href: '/services/syndicated-research' },
        { name: '🔍 Market Intelligence', href: '/services/market-intelligence' },
        { name: '📈 Growth Strategy', href: '/services/growth-strategy' },
        { name: '🎯 Go to Market Strategy', href: '/services/go-to-market' },
        { name: '🌱 ESG Analysis', href: '/services/esg-analysis' },
        { name: '🤖 AI (Artificial Intelligence) Overview', href: '/services/ai-overview' },
        { name: '🇺🇸 US Tariff', href: '/services/us-tariff' }
      ]
    },
    {
      name: 'INSIGHTS',
      href: '/insights',
      hasDropdown: true,
      dropdownItems: [
        { name: '📰 Press Release', href: '/insights/press-release' },
        { name: '✍️ Blogs', href: '/insights/blogs' }
      ]
    },
    {
      name: 'ABOUT',
      href: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'ℹ️ About us', href: '/about' },
        { name: '💬 Client Testimonials', href: '/about/testimonials' },
        { name: '🤝 Our Clients', href: '/about/clients' }
      ]
    },
    { name: 'CONTACT', href: '/contact', hasDropdown: false }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to search results page with the query
      const encodedQuery = encodeURIComponent(searchQuery.trim());
      router.push(`/search?q=${encodedQuery}`);
    }
  };

  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (name: string) => {
    if (clickedDropdown === name) {
      setClickedDropdown(null);
    } else {
      setClickedDropdown(name);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
      if (clickedDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setClickedDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown, clickedDropdown]);

  // Check if dropdown should be visible (either hover or click)
  const isDropdownVisible = (name: string) => {
    return activeDropdown === name || clickedDropdown === name;
  };

  return (
    <>
      <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-[9999] border-b border-gray-200 w-full overflow-x-hidden">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 w-full">
            
            {/* Logo - Left Side */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="text-2xl font-bold text-blue-600">
                  <span className="text-blue-800">RESEARCH</span>
                  <br />
                  <span className="text-blue-600">MARKET INSIGHTS</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1">
              <div className="flex items-center space-x-6">
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative dropdown-container">
                    {item.hasDropdown ? (
                      <div 
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="flex items-center space-x-1">
                          <Link
                            href={item.href}
                            className="nav-link text-gray-700 hover:text-blue-600 font-medium py-3 px-3 rounded-md transition-all duration-200 text-sm relative group"
                          >
                            <span>{item.name}</span>
                            {/* Hover indicator */}
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
                          </Link>
                          <button
                            className="p-1 text-gray-600 hover:text-blue-600 transition-all duration-200"
                            onClick={() => handleDropdownToggle(item.name)}
                          >
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownVisible(item.name) ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="nav-link flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-3 px-3 rounded-md transition-all duration-200 text-sm relative group"
                      >
                        <span>{item.name}</span>
                        {/* Hover indicator */}
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Search Bar - Right Side */}
            <div className="hidden lg:block">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search Reports..."
                    className="w-72 px-4 py-2 pl-10 pr-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </form>
            </div>

            {/* Mobile Menu Button - Only Hamburger Menu */}
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 w-full">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white w-full">
                {/* Mobile Search */}
                <div className="px-3 py-2 mb-4 w-full">
                  <form onSubmit={handleSearch} className="flex w-full">
                    <input
                      type="search"
                      placeholder="Search Reports..."
                      className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white text-sm rounded-r-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Search className="h-4 w-4" />
                    </button>
                  </form>
                </div>

                {/* Mobile Navigation */}
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 flex-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.hasDropdown && (
                        <button
                          className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                          onClick={() => handleDropdownToggle(item.name)}
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${clickedDropdown === item.name ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    {item.hasDropdown && clickedDropdown === item.name && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.dropdownItems?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Dropdown Menu Below Header */}
      {isDropdownVisible('INDUSTRIES') && (
        <div 
          className="hidden lg:block fixed top-20 left-0 right-0 bg-gradient-to-r from-blue-50 via-white to-indigo-50 border-b border-blue-200 shadow-xl z-50 backdrop-blur-sm"
          onMouseEnter={() => setActiveDropdown('INDUSTRIES')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-5xl mx-auto px-6 py-4">
            <div className="grid grid-cols-2 gap-6">
              {/* Column 1 - First 5 Industries */}
              <div className="space-y-3">
                <Link href="/industry/aerospace-defence" className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-blue-200 hover:shadow-md transform hover:scale-105">
                  🚀 Aerospace and Defence
                </Link>
                <Link href="/industry/automotive-transportation" className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-blue-200 hover:shadow-md transform hover:scale-105">
                  🚗 Automotive and Transportation
                </Link>
                <Link href="/industry/banking-financial" className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-blue-200 hover:shadow-md transform hover:scale-105">
                  🏦 Banking and Financial
                </Link>
                <Link href="/industry/chemicals-materials" className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-blue-200 hover:shadow-md transform hover:scale-105">
                  🧪 Chemicals and Materials
                </Link>
                <Link href="/industry/consumer-goods" className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-blue-200 hover:shadow-md transform hover:scale-105">
                  🛍️ Consumer Goods
                </Link>
              </div>
              
              {/* Column 2 - Last 5 Industries */}
              <div className="space-y-3">
                <Link href="/industry/electronics-semiconductor" className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-blue-200 hover:shadow-md transform hover:scale-105">
                  💻 Electronics and Semiconductor
                </Link>
                <Link href="/industry/energy-power" className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-blue-200 hover:shadow-md transform hover:scale-105">
                  ⚡ Energy and Power
                </Link>
                <Link href="/industry/food-beverages" className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-blue-200 hover:shadow-md transform hover:scale-105">
                  🍔 Food and Beverages
                </Link>
                <Link href="/industry/life-sciences" className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-blue-200 hover:shadow-md transform hover:scale-105">
                  🧬 Life Sciences
                </Link>
                <Link href="/industry/technology-media" className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-blue-200 hover:shadow-md transform hover:scale-105">
                  📱 Technology and Media
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {isDropdownVisible('SERVICES') && (
        <div 
          className="hidden lg:block fixed top-20 left-0 right-0 bg-gradient-to-r from-purple-50 via-white to-pink-50 border-b border-purple-200 shadow-xl z-50 backdrop-blur-sm"
          onMouseEnter={() => setActiveDropdown('SERVICES')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-5xl mx-auto px-6 py-4">
            <div className="grid grid-cols-2 gap-6">
              {/* Column 1 - First 4 Services */}
              <div className="space-y-3">
                <Link href="/services/consulting" className="block px-4 py-3 text-gray-700 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-purple-200 hover:shadow-md transform hover:scale-105 text-center">
                  💼 Consulting Services
                </Link>
                <Link href="/services/syndicated-research" className="block px-4 py-3 text-gray-700 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-purple-200 hover:shadow-md transform hover:scale-105 text-center">
                  📊 Syndicated Market Research
                </Link>
                <Link href="/services/market-intelligence" className="block px-4 py-3 text-gray-700 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-purple-200 hover:shadow-md transform hover:scale-105 text-center">
                  🔍 Market Intelligence
                </Link>
                <Link href="/services/growth-strategy" className="block px-4 py-3 text-gray-700 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-purple-200 hover:shadow-md transform hover:scale-105 text-center">
                  📈 Growth Strategy
                </Link>
              </div>
              
              {/* Column 2 - Last 4 Services */}
              <div className="space-y-3">
                <Link href="/services/go-to-market" className="block px-4 py-3 text-gray-700 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-purple-200 hover:shadow-md transform hover:scale-105 text-center">
                  🎯 Go to Market Strategy
                </Link>
                <Link href="/services/esg-analysis" className="block px-4 py-3 text-gray-700 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-purple-200 hover:shadow-md transform hover:scale-105 text-center">
                  🌱 ESG Analysis
                </Link>
                <Link href="/services/ai-overview" className="block px-4 py-3 text-gray-700 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-purple-200 hover:shadow-md transform hover:scale-105 text-center">
                  🤖 AI (Artificial Intelligence) Overview
                </Link>
                <Link href="/services/us-tariff" className="block px-4 py-3 text-gray-700 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-purple-200 hover:shadow-md transform hover:scale-105 text-center">
                  🇺🇸 US Tariff
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {isDropdownVisible('INSIGHTS') && (
        <div 
          className="hidden lg:block fixed top-20 left-0 right-0 bg-gradient-to-r from-green-50 via-white to-emerald-50 border-b border-green-200 shadow-xl z-50 backdrop-blur-sm"
          onMouseEnter={() => setActiveDropdown('INSIGHTS')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="grid grid-cols-2 gap-3">
              {/* Column 1 */}
              <div className="space-y-3">
                <Link href="/insights/press-release" className="block px-4 py-3 text-gray-700 hover:text-green-700 hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-green-200 hover:shadow-md transform hover:scale-105 text-center">
                  📰 Press Release
                </Link>
              </div>
              
              {/* Column 2 */}
              <div className="space-y-3">
                <Link href="/insights/blogs" className="block px-4 py-3 text-gray-700 hover:text-green-700 hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-green-200 hover:shadow-md transform hover:scale-105 text-center">
                  ✍️ Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {isDropdownVisible('ABOUT') && (
        <div 
          className="hidden lg:block fixed top-20 left-0 right-0 bg-gradient-to-r from-orange-50 via-white to-amber-50 border-b border-orange-200 shadow-xl z-50 backdrop-blur-sm"
          onMouseEnter={() => setActiveDropdown('ABOUT')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-3xl mx-auto px-6 py-4">
            <div className="grid grid-cols-3 gap-3">
              {/* Column 1 */}
              <div className="space-y-3">
                <Link href="/about" className="block px-4 py-3 text-gray-700 hover:text-orange-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-orange-200 hover:shadow-md transform hover:scale-105 text-center">
                  ℹ️ About us
                </Link>
              </div>
              
              {/* Column 2 */}
              <div className="space-y-3">
                <Link href="/about/testimonials" className="block px-4 py-3 text-gray-700 hover:text-orange-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-orange-200 hover:shadow-md transform hover:scale-105 text-center">
                  💬 Client Testimonials
                </Link>
              </div>
              
              {/* Column 3 */}
              <div className="space-y-3">
                <Link href="/about/clients" className="block px-4 py-3 text-gray-700 hover:text-orange-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 transition-all duration-300 text-sm font-medium rounded-lg border border-transparent hover:border-orange-200 hover:shadow-md transform hover:scale-105 text-center">
                  🤝 Our Clients
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
