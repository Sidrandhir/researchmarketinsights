import { redirect } from 'next/navigation';

export default function RSSPage({ params }: { params: { lang: string } }) {
  redirect(`/${params.lang}/rss.xml`);
}
