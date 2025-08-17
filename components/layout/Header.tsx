"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        { name: '📰 PRESS RELEASE', href: '/insights/press-release' },
        { name: '✍️ BLOGS', href: '/insights/blogs' }
      ]
    },
    {
      name: 'ABOUT',
      href: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'ABOUT US', href: '/about' },
        { name: 'CLIENT TESTIMONIALS', href: '/about/testimonials' },
        { name: 'OUR CLIENTS', href: '/about/clients' }
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
                <div className="w-48 h-16 flex items-center justify-center">
                  <Image 
                    src="/logo.svg" 
                    alt="Research Market Insight Logo" 
                    width={192}
                    height={64}
                    priority
                    onError={(e) => {
                      console.error('Logo failed to load:', e);
                    }}
                  />
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
                {/* Mobile Logo */}
                <div className="px-3 py-2 mb-4 w-full flex justify-center">
                  <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-40 h-12 flex items-center justify-center">
                      <Image 
                        src="/logo.svg" 
                        alt="Research Market Insight Logo" 
                        width={160}
                        height={48}
                        priority
                      />
                    </div>
                  </Link>
                </div>
                
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
          className="hidden lg:block fixed top-20 z-50"
          style={{ left: 'calc(50% - 200px)' }}
          onMouseEnter={() => setActiveDropdown('INDUSTRIES')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 min-w-[250px] py-2">
            <div className="space-y-1">
              <Link href="/industry/aerospace-defence" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                🚀 AEROSPACE AND DEFENCE
              </Link>
              <Link href="/industry/automotive-transportation" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                🚗 AUTOMOTIVE AND TRANSPORTATION
              </Link>
              <Link href="/industry/banking-financial" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                🏦 BANKING AND FINANCIAL
              </Link>
              <Link href="/industry/chemicals-materials" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                🧪 CHEMICALS AND MATERIALS
              </Link>
              <Link href="/industry/consumer-goods" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                🛍️ CONSUMER GOODS
              </Link>
              <Link href="/industry/electronics-semiconductor" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                💻 ELECTRONICS AND SEMICONDUCTOR
              </Link>
              <Link href="/industry/energy-power" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                ⚡ ENERGY AND POWER
              </Link>
              <Link href="/industry/food-beverages" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                🍔 FOOD AND BEVERAGES
              </Link>
              <Link href="/industry/life-sciences" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                🧬 LIFE SCIENCES
              </Link>
              <Link href="/industry/technology-media" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                📱 TECHNOLOGY AND MEDIA
              </Link>
            </div>
          </div>
        </div>
      )}

      {isDropdownVisible('SERVICES') && (
        <div 
          className="hidden lg:block fixed top-20 z-50"
          style={{ left: 'calc(50% - 150px)' }}
          onMouseEnter={() => setActiveDropdown('SERVICES')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 min-w-[280px] py-2">
            <div className="space-y-1">
              <Link href="/services/consulting" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                💼 CONSULTING SERVICES
              </Link>
              <Link href="/services/syndicated-research" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                📊 SYNDICATED MARKET RESEARCH
              </Link>
              <Link href="/services/market-intelligence" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                🔍 MARKET INTELLIGENCE
              </Link>
              <Link href="/services/growth-strategy" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                📈 GROWTH STRATEGY
              </Link>
              <Link href="/services/go-to-market" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                🎯 GO TO MARKET STRATEGY
              </Link>
              <Link href="/services/esg-analysis" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                🌱 ESG ANALYSIS
              </Link>
              <Link href="/services/ai-overview" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                🤖 AI (ARTIFICIAL INTELLIGENCE) OVERVIEW
              </Link>
              <Link href="/services/us-tariff" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                🇺🇸 US TARIFF
              </Link>
            </div>
          </div>
        </div>
      )}

      {isDropdownVisible('INSIGHTS') && (
        <div 
          className="hidden lg:block fixed top-20 z-50"
          style={{ left: 'calc(50% - 50px)' }}
          onMouseEnter={() => setActiveDropdown('INSIGHTS')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 min-w-[200px] py-2">
            <div className="space-y-1">
              <Link href="/insights/press-release" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                📰 PRESS RELEASE
              </Link>
              <Link href="/insights/blogs" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                ✍️ BLOGS
              </Link>
            </div>
          </div>
        </div>
      )}

      {isDropdownVisible('ABOUT') && (
        <div 
          className="hidden lg:block fixed top-20 z-50"
          style={{ left: 'calc(50% + 100px)' }}
          onMouseEnter={() => setActiveDropdown('ABOUT')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 min-w-[200px] py-2">
            <div className="space-y-1">
              <Link href="/about" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                ℹ️ ABOUT US
              </Link>
              <Link href="/about/testimonials" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                💬 CLIENT TESTIMONIALS
              </Link>
              <Link href="/about/clients" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium">
                🤝 OUR CLIENTS
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
