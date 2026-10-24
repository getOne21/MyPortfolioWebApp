import { Injectable } from '@angular/core';
import { AppProject } from '../models/app.model';

@Injectable({ providedIn: 'root' })
export class AppDataService {
  private readonly apps: AppProject[] = [
    {
      id: 1,
      name: 'Bridgely',
      category: 'Productivity',
      version: '1.0',
      releaseDate: '2026-10-22',
      isNew: true,
      isFeatured: true,
      icon: '/apps/bridgely.svg',
      colorAccent: '#14b8a6',
      gradientStart: '#14b8a6',
      gradientEnd: '#0f766e',
      screenshots: [
        { src: '/apps/bridgely/screenshots/windows-pairing.webp', captionKey: 'pairing' },
        { src: '/apps/bridgely/screenshots/windows-more.webp', captionKey: 'more' },
        { src: '/apps/bridgely/screenshots/windows-settings.webp', captionKey: 'settings' },
      ],
      downloads: [
        { platform: 'windows', url: '#' },
        { platform: 'android', url: '#' },
        { platform: 'ios', url: '#' },
        { platform: 'macos', url: '#' },
      ],
    },
    {
      id: 2,
      name: 'xConnect File Manager',
      category: 'Utilities',
      version: '1.0',
      icon: '/apps/xconnect.svg',
      colorAccent: '#1565c0',
      gradientStart: '#0d1b2a',
      gradientEnd: '#1565c0',
      downloads: [
        { platform: 'windows', url: '#' },
        { platform: 'android', url: '#' },
      ],
    },
  ];

  getAll(): AppProject[] {
    return this.apps;
  }

  getFeatured(): AppProject[] {
    return this.apps.filter(a => a.isFeatured);
  }

  getById(id: number): AppProject | undefined {
    return this.apps.find(a => a.id === id);
  }
}
