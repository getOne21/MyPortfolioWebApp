<div align="center">

# My Portfolio Web App

### A personal software portfolio, built with care.

A bilingual portfolio showcasing projects, professional experience, and a little personality through four interactive themes.

[![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/Styles-SCSS-CF649A?logo=sass&logoColor=white)](https://sass-lang.com/)

</div>

---

## Overview

`My Portfolio Web` is a responsive portfolio website for presenting software projects and professional background. It is built as a standalone Angular application with lazy-loaded pages, typed English and German translations, and theme preferences saved in the browser. All pages are prerendered to static HTML at build time.

## Highlights

- **Four visual themes:** Futuristic, Personal, Thunder, and Matrix
- **English and German:** language-prefixed URLs (`/en/...`, `/de/...`); `/` redirects using the saved or browser language
- **SEO:** prerendered pages with per-page titles, descriptions, Open Graph/Twitter cards, canonical and `hreflang` links, `sitemap.xml`, and `robots.txt`
- **Project catalogue:** featured carousel, project cards, category filtering, and platform labels
- **Dedicated pages:** Home, About, Projects, Terms, and Privacy
- **Responsive layout:** adapts to desktop and mobile screen sizes
- **Motion overlays:** animated lightning and Matrix-style digital rain, disabled when `prefers-reduced-motion` is set
- **Privacy-friendly:** fonts and icons are self-hosted; no requests to Google Fonts
- **Accessible foundations:** semantic page structure, labelled interactive controls, and template accessibility linting

## Built with

| Area | Technology |
| --- | --- |
| Application | Angular 22, TypeScript 6.0 |
| Rendering | Static site generation (`@angular/ssr`, `outputMode: static`) with client hydration |
| UI | Angular Material, self-hosted Roboto / Inter / Material Icons (`@fontsource`) |
| Styling | SCSS, CSS custom properties |
| State | Angular signals |
| Tests | Vitest (`@angular/build:unit-test`) with jsdom |
| Linting | ESLint with angular-eslint, Prettier |

## Getting started

### Requirements

- Node.js `^22.12.0` or `>=24` and npm
- Git

### Install and run

```bash
git clone https://github.com/getOne21/MyPortfolioWebApp.git
cd MyPortfolioWebApp
npm ci
npm start
```

Open [http://localhost:4200](http://localhost:4200). The development server reloads when source files change.

## Commands

| Command | Description |
| --- | --- |
| `npm start` | Start the local development server (do not run it with `sudo`) |
| `npm run build` | Create an optimized production build and prerender all routes |
| `npm run watch` | Rebuild continuously in development mode |
| `npm test` | Run the unit tests with Vitest in watch mode |
| `npm run test:ci` | Run the unit tests once |
| `npm run lint` | Lint TypeScript and templates with ESLint |
| `npm run format` / `npm run format:check` | Format or check code with Prettier |

## Deployment

Production build output is written to `dist/portfolio/browser/` and can be hosted on any static host:

- `/{en,de}/{home,about,projects,terms,privacy}/index.html` are prerendered pages.
- `index.csr.html` is the client-rendered fallback. Configure your host to serve it for `/` and for any path without a matching file (SPA fallback), so the root language redirect and old unprefixed URLs such as `/projects` work.
  - Netlify: `/*  /index.csr.html  200` in `_redirects`
  - Firebase / Vercel / Cloudflare Pages: rewrite all unmatched routes to `/index.csr.html`
  - GitHub Pages: copy `index.csr.html` to `404.html` after building

Before the first deployment, replace `https://example.com` with the production domain in `src/app/site.config.ts`, `public/robots.txt`, and `public/sitemap.xml`.

## Project layout

```text
src/
├── app/
│   ├── pages/           # Home, About, Projects, Terms, Privacy
│   ├── shared/          # Reusable UI components
│   ├── services/        # Project data, themes, translations
│   ├── i18n/            # English and German copy and types
│   ├── navbar/          # Site navigation and preferences
│   ├── footer/          # Site footer
│   ├── matrix-overlay/  # Matrix theme animation
│   └── thunder-overlay/ # Thunder theme animation
│   ├── app.routes.ts        # Language-prefixed client routes
│   ├── app.routes.server.ts # Prerender configuration
│   └── site.config.ts       # Production URL, site name, social preview image
├── index.html
├── main.ts
├── main.server.ts       # Server entry used for prerendering
└── styles.scss          # Global styles and theme tokens
public/                  # Icons, manifest, social preview image, robots.txt, sitemap.xml
```

## Updating the portfolio

- **Project catalogue:** edit the project entries in `src/app/services/app-data.ts`. Each entry contains its display copy, category, tags, features, and platform download metadata.
- **Translations:** update both `src/app/i18n/en.ts` and `src/app/i18n/de.ts`; the shared shape is defined in `translations.model.ts`. Page titles and meta descriptions live in the `seo` section.
- **New pages:** add the route to `pageRoutes` and `PAGES` in `app.routes.ts`, an entry under `seo.pages` in both translation files, and the URLs to `public/sitemap.xml`.
- **Social preview image:** edit `public/og-image.svg` and regenerate `public/og-image.png` (1200×630).
- **Themes:** change the theme definitions in `src/app/services/theme.service.ts` and the corresponding CSS tokens in `src/styles.scss`.
- **Page content and layout:** edit the matching component files under `src/app/pages/`.

Before publishing, replace sample project content and placeholder download URLs with your own verified information.

## License

No license has been specified for this repository. Contact the repository owner before reusing or redistributing its contents.
