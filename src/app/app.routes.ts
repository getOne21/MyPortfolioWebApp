import { inject } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { Lang, LANGS, TranslationService } from './services/translation.service';

export type PageKey = 'home' | 'about' | 'projects' | 'terms' | 'privacy';

export const PAGES: readonly PageKey[] = ['home', 'about', 'projects', 'terms', 'privacy'];

const pageRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    data: { page: 'home' },
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'about',
    data: { page: 'about' },
    loadComponent: () => import('./pages/about/about').then(m => m.About),
  },
  {
    path: 'projects',
    data: { page: 'projects' },
    loadComponent: () => import('./pages/projects/projects').then(m => m.Projects),
  },
  {
    path: 'terms',
    data: { page: 'terms' },
    loadComponent: () => import('./pages/terms/terms').then(m => m.Terms),
  },
  {
    path: 'privacy',
    data: { page: 'privacy' },
    loadComponent: () => import('./pages/privacy/privacy').then(m => m.Privacy),
  },
  { path: '**', redirectTo: 'home' },
];

/** One route subtree per language: /en/... and /de/... */
const localized = (lang: Lang): Route => ({
  path: lang,
  canActivate: [() => {
    inject(TranslationService).setLang(lang);
    return true;
  }],
  children: pageRoutes,
});

/** Preferred language from localStorage / browser settings */
const preferredLang = () => inject(TranslationService).currentLang();

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: () => `/${preferredLang()}/home` },
  ...LANGS.map(localized),
  {
    // Keeps old unprefixed URLs (e.g. /projects) working
    path: '**',
    redirectTo: ({ url }) => {
      const page = url[0]?.path as PageKey | undefined;
      return `/${preferredLang()}/${page && PAGES.includes(page) ? page : 'home'}`;
    },
  },
];
