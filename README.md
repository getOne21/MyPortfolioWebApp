<div align="center">

# My Portfolio Web

### A personal software portfolio, built with care.

A bilingual portfolio showcasing projects, professional experience, and a little personality through four interactive themes.

[![Angular](https://img.shields.io/badge/Angular-20-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/Styles-SCSS-CF649A?logo=sass&logoColor=white)](https://sass-lang.com/)

</div>

---

## Overview

`My Portfolio Web` is a responsive portfolio website for presenting software projects and professional background. It is built as a standalone Angular application with lazy-loaded pages, typed English and German translations, and theme preferences saved in the browser.

## Highlights

- **Four visual themes:** Futuristic, Personal, Thunder, and Matrix
- **English and German:** language selection with browser-language detection
- **Project catalogue:** featured carousel, project cards, category filtering, and platform labels
- **Dedicated pages:** Home, About, Projects, Terms, and Privacy
- **Responsive layout:** adapts to desktop and mobile screen sizes
- **Motion overlays:** animated lightning and Matrix-style digital rain
- **Accessible foundations:** semantic page structure and labelled interactive controls

## Built with

| Area | Technology |
| --- | --- |
| Application | Angular 20, TypeScript 5.9 |
| UI | Angular Material |
| Styling | SCSS, CSS custom properties |
| State | Angular signals |
| Tests | Karma and Jasmine |

## Getting started

### Requirements

- Node.js and npm compatible with Angular 20
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
| `npm start` | Start the local development server |
| `npm run build` | Create an optimized production build |
| `npm run watch` | Rebuild continuously in development mode |
| `npm test` | Run the unit tests with Karma |

Production build output is written to `dist/portfolio/browser/` and can be hosted as a static site.

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
├── index.html
├── main.ts
└── styles.scss          # Global styles and theme tokens
```

## Updating the portfolio

- **Project catalogue:** edit the project entries in `src/app/services/app-data.ts`. Each entry contains its display copy, category, tags, features, and platform download metadata.
- **Translations:** update both `src/app/i18n/en.ts` and `src/app/i18n/de.ts`; the shared shape is defined in `translations.model.ts`.
- **Themes:** change the theme definitions in `src/app/services/theme.service.ts` and the corresponding CSS tokens in `src/styles.scss`.
- **Page content and layout:** edit the matching component files under `src/app/pages/`.

Before publishing, replace sample project content and placeholder download URLs with your own verified information.

## License

No license has been specified for this repository. Contact the repository owner before reusing or redistributing its contents.
