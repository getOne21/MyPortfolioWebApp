import { Injectable } from '@angular/core';
import { AppProject } from '../models/app.model';

@Injectable({ providedIn: 'root' })
export class AppDataService {
  private readonly apps: AppProject[] = [
    {
      id: 1,
      slug: 'bridgely',
      name: 'Bridgely',
      category: 'Productivity',
      versions: { windows: '1.2', android: '1.2' },
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
        { platform: 'windows', url: 'https://apps.microsoft.com/detail/9NP0LBQ9G14T?hl=en-us&gl=DE&ocid=pdpshare' },
        { platform: 'android', comingSoon: true },
        { platform: 'ios', comingSoon: true },
        { platform: 'macos', comingSoon: true },
      ],
    },
    {
      id: 2,
      slug: 'xconnect-file-manager',
      name: 'xConnect File Manager',
      category: 'Utilities',
      versions: { windows: '1.1' },
      icon: '/apps/xconnect.svg',
      colorAccent: '#1565c0',
      gradientStart: '#0d1b2a',
      gradientEnd: '#1565c0',
      screenshots: [
        { src: '/apps/xconnect/screenshots/connection.webp', captionKey: 'xconnectConnection' },
        { src: '/apps/xconnect/screenshots/profiles.webp', captionKey: 'xconnectProfiles' },
        { src: '/apps/xconnect/screenshots/settings.webp', captionKey: 'xconnectSettings' },
      ],
      downloads: [
        { platform: 'windows', url: 'https://apps.microsoft.com/store/detail/9P4JCWZFNPHT' },
        { platform: 'android', comingSoon: true },
      ],
    },
    {
      id: 3,
      slug: 'calctron',
      name: 'Calctron',
      category: 'Utilities',
      versions: { windows: '1.0.0' },
      icon: '/apps/calctron.png',
      colorAccent: '#BA4B2F',
      gradientStart: '#20372D',
      gradientEnd: '#425D4B',
      screenshots: [
        { src: '/apps/calctron/screenshots/scientific.webp', captionKey: 'scientific' },
        { src: '/apps/calctron/screenshots/graphing.webp', captionKey: 'graphing' },
        { src: '/apps/calctron/screenshots/programmer.webp', captionKey: 'programmer' },
      ],
      downloads: [
        { platform: 'windows', url: 'https://apps.microsoft.com/detail/9NBCXLJ789W2?hl=en-us&gl=DE&ocid=pdpshare' },
        { platform: 'android', comingSoon: true },
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

  getBySlug(slug: string): AppProject | undefined {
    return this.apps.find(app => app.slug === slug);
  }
}
