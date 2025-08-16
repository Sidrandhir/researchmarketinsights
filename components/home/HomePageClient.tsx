// file: components/home/HomePageClient.tsx
'use client'; // This makes the entire file a Client Component

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Use dynamic import with ssr: false for all major sections
const HeroSection = dynamic(() => import('@/components/home/HeroSection'), { ssr: false });
const StatsSection = dynamic(() => import('@/components/home/StatsSection'), { ssr: false });
const IndustryCategories = dynamic(() => import('@/components/home/IndustryCategories'), { ssr: false });
const LatestReports = dynamic(() => import('@/components/home/LatestReports'), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'), { ssr: false });
const CTASection = dynamic(() => import('@/components/home/CTASection'), { ssr: false });

export default function HomePageClient() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HeroSection />
      <StatsSection />
      <IndustryCategories />
      <LatestReports />
      <TestimonialsSection />
      <CTASection />
    </Suspense>
  );
}