import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'Market Research Insights - Comprehensive Industry Analysis',
    template: '%s | Market Research Insights',
  },
  description: 'Discover comprehensive market research reports, industry analysis, and business insights. Get detailed market intelligence across various sectors.',
  keywords: [
    'market research',
    'industry analysis',
    'business intelligence',
    'market reports',
    'industry trends',
    'market insights',
    'business research',
    'market analysis',
  ],
  authors: [{ name: 'Market Research Insights' }],
  creator: 'Market Research Insights',
  publisher: 'Market Research Insights',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://marketresearchinsights.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'zh-CN': '/zh',
      'ko-KR': '/ko',
      'ar-SA': '/ar',
      'fr-FR': '/fr',
      'es-ES': '/es',
      'de-DE': '/de',
      'ja-JP': '/jp',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marketresearchinsights.com',
    title: 'Market Research Insights - Comprehensive Industry Analysis',
    description: 'Discover comprehensive market research reports, industry analysis, and business insights.',
    siteName: 'Market Research Insights',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Market Research Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Market Research Insights - Comprehensive Industry Analysis',
    description: 'Discover comprehensive market research reports, industry analysis, and business insights.',
    images: ['/og-image.jpg'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  );
} 