// app/[lang]/xml/page.tsx

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function XmlPage({ params }: PageProps) {
  // Await the params since they're now a Promise in Next.js 15
  const { lang } = await params;
  
  // Your existing XML page logic here
  return (
    <div>
      {/* Your XML content for language: {lang} */}
    </div>
  );
}