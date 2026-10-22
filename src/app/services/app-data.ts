import { Injectable } from '@angular/core';
import { AppProject } from '../models/app.model';

@Injectable({ providedIn: 'root' })
export class AppDataService {
  private readonly apps: AppProject[] = [
    {
      id: 1,
      name: 'Bridgely',
      tagline: 'Continuity between your Android phone and your computer.',
      description: 'Copy on your phone, paste on your Mac or PC — plus file transfer, battery status, and 2FA codes, end-to-end encrypted.',
      longDescription: `Bridgely brings Continuity-style features to Android, macOS, and Windows. 
        Clipboard sync works both ways, files and screenshots travel in either direction, your phone's battery 
        shows up in the menu bar or tray, and one-time login codes from your phone land straight in your 
        computer's clipboard. Pairing is a single QR scan; every connection uses ephemeral key exchange and 
        AES-256-GCM, so your data never leaves your local network unencrypted. Built entirely in C# with .NET MAUI.`,
      category: 'Productivity',
      version: '0.1',
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
      downloads: [
        { platform: 'windows', label: 'Windows App', url: '#' },
        { platform: 'android', label: 'Android APK', url: '#' },
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
