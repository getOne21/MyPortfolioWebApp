import { Injectable } from '@angular/core';
import { AppProject } from '../models/app.model';

@Injectable({ providedIn: 'root' })
export class AppDataService {
  private readonly apps: AppProject[] = [
    {
      id: 1,
      name: 'TaskFlow Pro',
      tagline: 'Master your productivity — one task at a time.',
      description: 'A powerful task management suite with smart scheduling, team collaboration, and AI-assisted prioritisation.',
      longDescription: `TaskFlow Pro is a full-featured productivity platform designed for individuals and teams. 
        With an intuitive Kanban board, deadline tracking, recurring tasks, and real-time collaboration features, 
        it helps you stay on top of everything that matters. The built-in AI engine analyses your workload and 
        suggests optimal scheduling to keep you in flow state.`,
      category: 'Productivity',
      version: '2.4.1',
      releaseDate: '2025-11-12',
      isNew: false,
      isFeatured: true,
      icon: '⚡',
      colorAccent: '#00d4ff',
      gradientStart: '#00d4ff',
      gradientEnd: '#0072ff',
      tags: ['Productivity', 'AI', 'Team', 'Cross-Platform'],
      features: [
        'Kanban & timeline views',
        'AI-powered smart scheduling',
        'Real-time team collaboration',
        'Recurring tasks & reminders',
        'Dark & light mode',
        'Cloud sync across devices',
      ],
      downloads: [
        { platform: 'windows', label: 'Windows Installer', url: '#', fileSize: '54 MB' },
        { platform: 'android', label: 'Android APK', url: '#', fileSize: '28 MB' },
        { platform: 'macos', label: 'macOS App', url: '#', fileSize: '61 MB' },
        { platform: 'linux', label: 'Linux AppImage', url: '#', fileSize: '57 MB' },
      ],
    },
    {
      id: 2,
      name: 'CryptoDash',
      tagline: 'Your crypto portfolio at a glance.',
      description: 'Real-time cryptocurrency portfolio tracker with live charts, price alerts, and profit/loss analysis.',
      longDescription: `CryptoDash aggregates data from 50+ exchanges to give you a unified view of your digital assets. 
        Track holdings, set intelligent price alerts, analyse historical performance with interactive charts, 
        and export detailed tax reports. Built with privacy-first principles — your keys stay on your device.`,
      category: 'Finance',
      version: '1.8.0',
      releaseDate: '2026-01-20',
      isNew: true,
      isFeatured: true,
      icon: '📈',
      colorAccent: '#f59e0b',
      gradientStart: '#f59e0b',
      gradientEnd: '#ef4444',
      tags: ['Finance', 'Crypto', 'Charts', 'Privacy'],
      features: [
        'Live prices from 50+ exchanges',
        'Interactive profit/loss charts',
        'Price & volume alerts',
        'Tax report export (CSV/PDF)',
        'No account required',
        'Hardware wallet integration',
      ],
      downloads: [
        { platform: 'windows', label: 'Windows Installer', url: '#', fileSize: '42 MB' },
        { platform: 'android', label: 'Android APK', url: '#', fileSize: '22 MB' },
        { platform: 'macos', label: 'macOS App', url: '#', fileSize: '49 MB' },
        { platform: 'linux', label: 'Linux AppImage', url: '#', fileSize: '44 MB' },
      ],
    },
    {
      id: 3,
      name: 'FileVault',
      tagline: 'Military-grade encryption for your files.',
      description: 'AES-256 file encryption tool with drag-and-drop simplicity, secure cloud backup, and biometric unlock.',
      longDescription: `FileVault makes enterprise-grade security accessible to everyone. 
        Drag in any file, choose your encryption strength (AES-128, AES-256, or ChaCha20), 
        and share encrypted packages via a built-in secure link generator. 
        All encryption happens locally — zero knowledge, zero compromise.`,
      category: 'Security',
      version: '3.1.2',
      releaseDate: '2025-08-05',
      isNew: false,
      isFeatured: true,
      icon: '🔐',
      colorAccent: '#10b981',
      gradientStart: '#10b981',
      gradientEnd: '#059669',
      tags: ['Security', 'Encryption', 'Privacy', 'Files'],
      features: [
        'AES-256 & ChaCha20 encryption',
        'Drag-and-drop interface',
        'Secure link sharing',
        'Biometric unlock (Windows Hello / Touch ID)',
        'Zero-knowledge cloud backup',
        'Batch encrypt/decrypt',
      ],
      downloads: [
        { platform: 'windows', label: 'Windows Installer', url: '#', fileSize: '18 MB' },
        { platform: 'android', label: 'Android APK', url: '#', fileSize: '12 MB' },
        { platform: 'macos', label: 'macOS App', url: '#', fileSize: '21 MB' },
        { platform: 'linux', label: 'Linux AppImage', url: '#', fileSize: '19 MB' },
      ],
    },
    {
      id: 4,
      name: 'WeatherLens',
      tagline: 'Beautiful weather, beautifully simple.',
      description: 'Next-generation weather app with hyper-local forecasts, radar animations, and weather story summaries.',
      longDescription: `WeatherLens combines ultra-accurate meteorological data with stunning visuals to deliver the 
        most beautiful weather experience on any platform. Get hourly breakdowns, 14-day outlooks, severe weather 
        alerts, and an interactive radar map — all wrapped in a gorgeous adaptive UI that reflects the current conditions.`,
      category: 'Utilities',
      version: '4.0.3',
      releaseDate: '2026-03-01',
      isNew: true,
      isFeatured: false,
      icon: '🌦️',
      colorAccent: '#3b82f6',
      gradientStart: '#3b82f6',
      gradientEnd: '#8b5cf6',
      tags: ['Weather', 'Utilities', 'Maps', 'Forecasts'],
      features: [
        'Hyper-local hourly forecasts',
        '14-day outlook',
        'Live radar & satellite maps',
        'Severe weather push alerts',
        'Adaptive UI based on conditions',
        'Apple Watch & WearOS widgets',
      ],
      downloads: [
        { platform: 'windows', label: 'Windows App', url: '#', fileSize: '35 MB' },
        { platform: 'android', label: 'Android APK', url: '#', fileSize: '29 MB' },
        { platform: 'macos', label: 'macOS App', url: '#', fileSize: '38 MB' },
        { platform: 'linux', label: 'Linux AppImage', url: '#', fileSize: '33 MB' },
      ],
    },
    {
      id: 5,
      name: 'CodeSnap',
      tagline: 'Turn your code into art.',
      description: 'Developer tool for creating beautiful, shareable code screenshots with syntax highlighting and custom themes.',
      longDescription: `CodeSnap is every developer's secret weapon for stunning code presentations. 
        Paste any code snippet, choose from 40+ syntax themes, pick a window style, 
        tweak padding and shadow, and export to PNG, SVG, or share directly to social media. 
        Perfect for documentation, blog posts, and tech talks.`,
      category: 'Developer Tools',
      version: '1.2.0',
      releaseDate: '2025-06-18',
      isNew: false,
      isFeatured: false,
      icon: '🖼️',
      colorAccent: '#8b5cf6',
      gradientStart: '#8b5cf6',
      gradientEnd: '#ec4899',
      tags: ['Developer', 'Design', 'Productivity', 'Open Source'],
      features: [
        '40+ syntax highlight themes',
        'Custom window chrome styles',
        'Export PNG / SVG / WebP',
        'Direct Twitter / GitHub share',
        'Line number & watermark options',
        'VS Code extension available',
      ],
      downloads: [
        { platform: 'windows', label: 'Windows Installer', url: '#', fileSize: '28 MB' },
        { platform: 'android', label: 'Android APK', url: '#', fileSize: '16 MB' },
        { platform: 'macos', label: 'macOS App', url: '#', fileSize: '31 MB' },
        { platform: 'linux', label: 'Linux AppImage', url: '#', fileSize: '26 MB' },
      ],
    },
    {
      id: 6,
      name: 'SyncBridge',
      tagline: 'Your files, everywhere, instantly.',
      description: 'Lightning-fast cross-platform file synchronisation with end-to-end encryption and conflict resolution.',
      longDescription: `SyncBridge keeps your files perfectly in sync across all your devices — Windows, macOS, Linux, 
        and Android — without ever touching a third-party server. Using a peer-to-peer architecture, 
        your data travels directly between your devices with end-to-end encryption. 
        Smart conflict resolution and selective-sync give you full control over what syncs where.`,
      category: 'Utilities',
      version: '2.0.0',
      releaseDate: '2026-05-10',
      isNew: true,
      isFeatured: false,
      icon: '🔄',
      colorAccent: '#06b6d4',
      gradientStart: '#06b6d4',
      gradientEnd: '#10b981',
      tags: ['Sync', 'P2P', 'Encryption', 'Files'],
      features: [
        'Peer-to-peer, no cloud required',
        'End-to-end encryption',
        'Smart conflict resolution',
        'Selective sync',
        'Real-time progress dashboard',
        'LAN & WAN support',
      ],
      downloads: [
        { platform: 'windows', label: 'Windows Installer', url: '#', fileSize: '31 MB' },
        { platform: 'android', label: 'Android APK', url: '#', fileSize: '19 MB' },
        { platform: 'macos', label: 'macOS App', url: '#', fileSize: '34 MB' },
        { platform: 'linux', label: 'Linux AppImage', url: '#', fileSize: '29 MB' },
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
