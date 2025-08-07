import { Suspense } from 'react';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import IndustryCategories from '@/components/home/IndustryCategories';
import FeaturedReports from '@/components/home/FeaturedReports';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <IndustryCategories />
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturedReports />
      </Suspense>
      <TestimonialsSection />
      <CTASection />
    </div>
  );
} 