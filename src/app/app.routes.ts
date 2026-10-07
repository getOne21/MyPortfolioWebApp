import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.About),
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.Projects),
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms').then(m => m.Terms),
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy').then(m => m.Privacy),
  },
  { path: '**', redirectTo: 'home' },
];
