/**
 * Site-wide constants used for canonical URLs, hreflang links and social previews.
 * TODO: replace `url` with the production domain before deploying
 * (also update public/robots.txt and public/sitemap.xml).
 */
export const SITE = {
  url: 'https://example.com',
  name: 'tb.dev',
  author: 'Tobias Brörmann',
  ogImage: '/og-image.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
} as const;
