import { Injectable } from '@angular/core';
import { AppProject } from '../models/app.model';

@Injectable({ providedIn: 'root' })
export class AppDataService {
  private readonly apps: AppProject[] = [
    {
      id: 1,
      name: 'Bridgely',
      tagline: 'Continuity between your Android phone or iPhone and your computer.',
      description:
        'Bridge Android and iPhone with your Mac or PC: send clipboard content, files, and screenshots to one connected device or all connected devices. Check battery status and access 2FA codes — end-to-end encrypted. Android screen mirroring via scrcpy is included.',
      longDescription: `Bridgely brings Continuity-style features to Android and iOS, connected with macOS and Windows. Send clipboard content, files, and screenshots to one selected device or broadcast them to all connected devices. Clipboard sync works both ways, and Android screens can be mirrored with scrcpy. Your phone's battery appears in the menu bar or tray, and one-time login codes land straight in your computer's clipboard. Pairing uses a QR scan with automatic discovery; connections use ephemeral key exchange and AES-256-GCM to keep your data encrypted on your local network. Built entirely in C# with .NET MAUI.`,
      category: 'Productivity',
      version: '1.0',
      releaseDate: '2026-10-22',
      isNew: true,
      isFeatured: true,
      icon: '/apps/bridgely.svg',
      colorAccent: '#14b8a6',
      gradientStart: '#14b8a6',
      gradientEnd: '#0f766e',
      tags: ['Productivity', '.NET MAUI', 'Encryption', 'Cross-Platform'],
      features: [
        'Two-way clipboard sync & history',
        'File & screenshot transfer',
        'Phone battery in menu bar / tray',
        '2FA codes straight to your clipboard',
        'QR pairing with automatic discovery',
        'Screen mirroring via scrcpy',
      ],
      screenshots: [
        { src: '/apps/bridgely/screenshots/windows-pairing.webp', captionKey: 'pairing' },
        { src: '/apps/bridgely/screenshots/windows-more.webp', captionKey: 'more' },
        { src: '/apps/bridgely/screenshots/windows-settings.webp', captionKey: 'settings' },
      ],
      downloads: [
        { platform: 'windows', label: 'Windows App', url: '#' },
        { platform: 'android', label: 'Android APK', url: '#' },
        { platform: 'ios', label: 'iPhone App', url: '#' },
        { platform: 'macos', label: 'macOS App', url: '#' },
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
