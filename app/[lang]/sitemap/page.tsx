import { redirect } from 'next/navigation';

export default function SitemapPage({ params }: { params: { lang: string } }) {
  redirect(`/${params.lang}/sitemap.xml`);
}
