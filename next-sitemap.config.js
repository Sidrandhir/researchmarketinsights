/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://marketresearchinsights.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*', '/_next/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://marketresearchinsights.com/sitemap-static.xml',
      'https://marketresearchinsights.com/sitemap-reports.xml',
      'https://marketresearchinsights.com/sitemap-press-releases.xml',
      'https://marketresearchinsights.com/sitemap-industries.xml',
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => {
    const result = [];

    // Add static pages for all languages
    const languages = ['en', 'zh', 'ko', 'ar', 'fr', 'es', 'de', 'jp'];
    const staticPages = [
      '',
      '/about',
      '/privacy',
      '/terms',
      '/refund',
      '/faq',
      '/contact',
      '/career',
    ];

    for (const lang of languages) {
      for (const page of staticPages) {
        result.push({
          loc: `/${lang}${page}`,
          changefreq: 'weekly',
          priority: page === '' ? 1.0 : 0.8,
          lastmod: new Date().toISOString(),
        });
      }
    }

    return result;
  },
}; 