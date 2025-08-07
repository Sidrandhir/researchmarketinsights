import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://marketresearchinsights.com'
  const languages = ['en', 'zh', 'ko', 'ar', 'fr', 'es', 'de', 'jp']
  
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/industry',
    '/press-release',
    '/privacy',
    '/terms',
    '/refund',
    '/faq',
    '/careers',
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${languages.map(lang => 
    staticPages.map(page => `
  <url>
    <loc>${baseUrl}/${lang}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
    ).join('')
  ).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 