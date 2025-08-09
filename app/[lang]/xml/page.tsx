import { redirect } from 'next/navigation';

export default function XMLPage({ params }: { params: { lang: string } }) {
  redirect(`/${params.lang}/sitemap.xml`);
}
