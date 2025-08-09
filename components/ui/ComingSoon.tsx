// file: components/ui/ComingSoon.tsx
import Link from 'next/link';
import { Wrench } from 'lucide-react';

interface ComingSoonProps {
  categoryName: string;
  lang: string;
}

export default function ComingSoon({ categoryName, lang }: ComingSoonProps) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center bg-gray-50">
      <Wrench className="h-16 w-16 text-primary-400 mb-6" />
      <h1 className="text-4xl font-bold text-gray-800">Coming Soon</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        We are currently gathering the latest insights and reports for the <span className="font-semibold text-primary-600">{categoryName}</span> industry. Please check back soon!
      </p>
      <div className="mt-8">
        <Link href={`/${lang}/industry`} className="btn-primary">
          Browse Other Industries
        </Link>
      </div>
    </div>
  );
}