/**
 * Site-wide constants used for canonical URLs, hreflang links and social previews.
 * Keep public/robots.txt and public/sitemap.xml aligned with this production origin.
 */
export const SITE = {
  url: 'https://tb-builds.com',
  name: 'TB Builds',
  author: 'Tobias Brörmann',
  ogImage: '/og-image.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
} as const;
