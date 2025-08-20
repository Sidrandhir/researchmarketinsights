import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Research Market Insights - Global Market Research Reports',
  description: 'Discover comprehensive market research reports, industry analysis, and business insights across 25+ industry sectors. Get expert analysis from 500+ analysts covering 150+ countries.',
  keywords: 'market research, industry reports, business intelligence, market analysis, consulting services, global markets',
  authors: [{ name: 'Research Market Insights' }],
  creator: 'Research Market Insights',
  publisher: 'Research Market Insights',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://researchmarketinsights.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Research Market Insights - Global Market Research Reports',
    description: 'Discover comprehensive market research reports, industry analysis, and business insights across 25+ industry sectors.',
    url: 'https://researchmarketinsights.com',
    siteName: 'Research Market Insights',
    images: [
      {
        url: '/assets/hero-placeholder.svg',
        width: 1200,
        height: 630,
        alt: 'Research Market Insights',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research Market Insights - Global Market Research Reports',
    description: 'Discover comprehensive market research reports, industry analysis, and business insights across 25+ industry sectors.',
    images: ['/assets/hero-placeholder.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Research Market Insights" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.svg" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Research Market Insights",
              "url": "/",
              "logo": "/assets/logo.svg",
              "description": "Global market research and business intelligence company",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office No. 208, Vision Mall",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411057",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "customer service",
                "email": "sales@researchmarketinsights.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/research-market-insights",
                "https://www.facebook.com/researchmarketinsights",
                "https://twitter.com/rmi_insights",
                "https://www.instagram.com/researchmarketinsights"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 