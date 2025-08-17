import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import IndustryCategories from '@/components/home/IndustryCategories';
import LatestReports from '@/components/home/LatestReports';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

// Required for static export
export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
    { lang: 'fr' },
    { lang: 'de' },
    { lang: 'it' },
    { lang: 'pt' },
    { lang: 'ru' },
    { lang: 'zh' },
    { lang: 'ja' },
    { lang: 'ko' },
    { lang: 'ar' },
    { lang: 'hi' },
  ];
}

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden pt-20">
      <HeroSection />
      <StatsSection />
      <div className="industry-categories-section">
        <IndustryCategories />
      </div>
      <LatestReports />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}