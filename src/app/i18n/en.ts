import { AppTranslations } from './translations.model';

export const en: AppTranslations = {
  lang: 'en',
  appProjects: {
    1: {
      tagline: 'Keep your Android phone or iPhone connected to your Mac or Windows PC.',
      description:
        'Share clipboard content, files, and screenshots between your phone and computer. Android adds one-time-code forwarding and screen mirroring; iPhone sync works while the app is open.',
      longDescription:
        'Bridgely connects Android and iPhone with Mac and Windows. Both desktop apps share clipboard history, file transfer, phone status, and Android screen mirroring via scrcpy. Desktop settings add optional launch-at-sign-in controls on macOS 13+ and the installed Windows Store version. Send clipboard items, files, and screenshots to one selected computer or all connected computers. Android adds a foreground service, notification-based one-time-code forwarding, a Quick Settings tile, and a home-screen widget, with support starting at Android 8.0 (API 26). iPhone clipboard and network access work while the app is active, as iOS restricts background activity. Interrupted transfers resume after a network reconnect while both apps stay open. Pair devices by QR code; local-network sessions use ephemeral P-256 ECDH and AES-256-GCM. Clipboard history is opt-in and encrypted on-device, with retention controls. Built with C# and .NET MAUI.',
      tags: ['Productivity', '.NET MAUI', 'End-to-end encryption', 'Cross-platform'],
      features: [
        'Two-way clipboard sync with optional, encrypted on-device history',
        'Send clipboard items, files, and screenshots to one or all connected computers',
        'Android one-time-code forwarding and phone battery sharing',
        'Android Quick Settings tile and home-screen widget',
        'Mirror an Android screen on Mac or Windows with scrcpy',
        'Resume interrupted transfers after reconnecting while both apps remain open',
        'Optional desktop auto-start on macOS 13+ and the Windows Store version',
        'Android 8.0 (API 26) or later',
        'QR-code pairing with encrypted local-network connections',
      ],
      requirements: [
        'Windows 10 version 1809 (build 17763) or later.',
        'Android 8.0 (API 26) or later for the Android release.',
      ],
      releases: [
        {
          platform: 'windows',
          version: '1.2',
          highlights: [
            'Added optional sign-in launch controls for the macOS and Windows Store desktop apps.',
            'Windows startup status now reflects user and organization policy.',
          ],
        },
        {
          platform: 'android',
          version: '1.2',
          highlights: [
            'Expanded Android support to Android 8.0 (API 26) and later.',
            'Added the storage permission flow needed to save received files on Android 8 and 9.',
          ],
        },
      ],
    },
    2: {
      tagline: 'Windows-first NAS file management with multi-tab sessions and a capable transfer queue.',
      description:
        'Connect to WebDAV, FTP, FTPS, or SFTP; discover NAS devices, work across server tabs, and queue transfers. Preview media or edit remote text files.',
      longDescription:
        'xConnect File Manager is a Windows-first NAS client built with .NET MAUI. Connect to WebDAV, FTP, FTPS, and SFTP servers; discover compatible devices on the local network; and keep independent connections open in tabs. Browse list or grid views with search, filters, sorting, pinned folders, paging, latency, and storage information. Batch file operations include undo for recent renames and moves. The transfer queue supports progress, speed, pause/resume, retry, time estimates, and conflict handling. Preview images, stream audio and video, and edit text files in place. Windows adds tray integration, drag-and-drop uploads, completion notifications, and an optional startup setting that reflects Windows startup status, including user and organization policy. Microsoft Store packages target x64 and ARM64. Android support is in development.',
      tags: ['Windows', 'NAS', 'WebDAV', 'FTP', 'FTPS', 'SFTP', 'Multi-tab', 'Transfers', '.NET MAUI'],
      features: [
        'Windows release available; Android support is in development',
        'WebDAV, FTP, FTPS, and SFTP connections',
        'Local NAS discovery and encrypted saved profiles',
        'Independent tabs, list/grid views, search, filters, paging, and pinned folders',
        'Batch file operations with undo for recent renames and moves',
        'Queued transfers with progress, speed, pause/resume, retry, and conflict handling',
        'Image slideshow, audio/video streaming, and in-place text editor',
        'Windows tray, drag-and-drop uploads, and transfer notifications',
        'Optional Windows startup setting that reflects user and organization policy',
        'Microsoft Store packages for x64 and ARM64',
      ],
      requirements: ['Windows 10 version 1903 (build 18362) or later.'],
      releases: [
        {
          platform: 'windows',
          version: '1.1',
          date: '2026-11-10',
          highlights: [
            'Added an optional setting to start xConnect when you sign in to Windows.',
            'Startup status reflects Windows settings, Task Manager, and organization policy.',
            'Microsoft Store packages now target x64 and ARM64.',
          ],
        },
      ],
    },
    3: {
      tagline: 'A scientific calculator with graphing, programmer tools, and a vintage instrument look.',
      description:
        'A native Windows calculator for scientific math, graphing, programmer tools, matrices, and unit conversion—with an offline calculation tape.',
      longDescription:
        'Calctron is a native Windows scientific calculator styled like a precision instrument. Work with editable expressions, complex numbers, variables, and memory; plot up to four functions and inspect numerical roots and intersections; use programmer tools across four number bases; calculate matrices up to 8 × 8; and convert units across eight categories. Its offline tape keeps the latest 100 calculations, and recalled expressions are never run automatically. No account, cloud sync, analytics, or AI service is required. An Android release is planned.',
      tags: ['Windows', 'Scientific calculator', 'Graphing', 'Programmer tools', 'Matrices', '.NET MAUI', 'Offline'],
      features: [
        'Scientific expressions with complex numbers, variables, and memory',
        'Plot and trace up to four functions, with zooming and numerical roots/intersections',
        'Programmer workbench with BIN/OCT/DEC/HEX and 8–64-bit words',
        'Matrix operations and linear systems up to 8 × 8',
        'Unit conversion for length, mass, temperature, area, volume, speed, time, and data',
        'Offline tape of the latest 100 calculations, with copy and recall',
        'No account, cloud sync, analytics, or AI service',
      ],
      requirements: ['Windows 10 version 1809 (build 17763) or later.'],
      releases: [
        {
          platform: 'windows',
          version: '1.0.0',
          highlights: [
            'Windows release with scientific, graphing, programmer, matrix, and unit-conversion tools.',
            'Native Microsoft Store packages for x64 and ARM64.',
          ],
        },
      ],
    },
  },

  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    terms: 'Terms & Conditions',
    privacy: 'Privacy Policy',
    imprint: 'Legal Notice',
    downloadApps: 'Download Apps',
    style: 'Style',
    language: 'Language',
  },

  hero: {
    title1: 'Built for everyday life.',
    title2: 'Including mine.',
    subtitle:
      'I build practical software for everyday life—and use what I create myself.',
    exploreProjects: 'Explore Projects',
    aboutMe: 'About Me',
  },

  carousel: {
    tag: 'Featured',
    title: 'Spotlight Apps',
    subtitle: 'Hand-picked highlights from my portfolio',
    viewProject: 'View project',
    new: 'New',
  },

  allApps: {
    tag: 'All Projects',
    title: 'The Full Collection',
    subtitle: 'Explore the apps I\'ve built and check platform availability.',
    viewAll: 'View All Projects & Downloads',
  },

  cta: {
    title: 'Ready to get started?',
    subtitle: 'Browse the projects page, pick your platform, and download in seconds.',
    button: 'Go to Projects',
  },

  projects: {
    pageTag: 'My Work',
    title: 'Projects & Downloads',
    subtitle: 'Browse the software I\'ve built and check which platforms are supported.',
    filterAll: 'All',
    downloadLabel: 'Download',
    comingSoon: 'Coming soon',
    aboutLabel: 'About',
    featuresLabel: 'Key Features',
    releasedLabel: 'Released',
    noResults: 'No projects found in this category.',
    new: 'New',
    version: 'Version',
    screenshotsTitle: 'Screenshots',
    viewDetails: 'Project details',
    backToProjects: 'All projects',
    requirementsTitle: 'System requirements',
    releasesTitle: 'Version history',
    releaseDateLabel: 'Released',
    available: 'Available',
    notFoundTitle: 'Project not found',
    notFoundBody: 'This project page is not available.',
    viewScreenshot: 'View full-size screenshot',
    closeScreenshot: 'Close screenshot',
    screenshotCaptions: {
      pairing: 'Pairing screen — QR code redacted',
      more: 'More menu',
      settings: 'Settings and device features',
      scientific: 'Scientific calculator with an editable expression and calculation tape',
      graphing: 'Function graphing with tracing, zooming, and a persistent calculation tape',
      programmer: 'Programmer tools with number-base conversion and an interactive bit field',
      xconnectConnection: 'Connect to WebDAV, FTP, FTPS, or SFTP servers',
      xconnectProfiles: 'Manage saved server profiles and discover NAS devices',
      xconnectSettings: 'Configure appearance, language, workspace, and app lock',
    },
  },

  terms: {
    pageTag: 'Legal',
    title: 'Terms & Conditions',
    subtitle: 'Please read these terms carefully before downloading or using any of our software.',
    lastUpdated: 'Last updated',
    summaryBold: 'Plain-language summary:',
    summaryText:
      'You may use the software for personal, non-commercial use. Don\'t redistribute, reverse-engineer, or use it for unlawful purposes. The software is provided as-is with no warranty.',
    contactTitle: 'Questions about these Terms?',
    contactSubtitle:
      'If you have any questions, concerns, or requests regarding these Terms and Conditions, please contact us at:',
    sections: [
      {
        title: '1. Acceptance of Terms',
        icon: 'handshake',
        content:
          'By downloading, installing, or using any application provided through this portfolio website ("the Software"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not download or use the Software. These terms apply to all visitors, users, and others who access or use the Software.',
      },
      {
        title: '2. License Grant',
        icon: 'verified_user',
        content:
          'Subject to your compliance with these Terms, you are granted a limited, non-exclusive, non-transferable, revocable licence to download and use the Software strictly for your personal, non-commercial purposes. You may not sublicense, sell, resell, transfer, assign, or otherwise commercially exploit the Software. All rights not expressly granted herein are reserved.',
      },
      {
        title: '3. Intellectual Property',
        icon: 'copyright',
        content:
          'All intellectual property rights in the Software — including but not limited to source code, object code, design, graphics, algorithms, documentation, and trade secrets — are and remain the exclusive property of the developer. You agree not to copy, modify, create derivative works, reverse engineer, disassemble, or decompile any part of the Software without prior written consent.',
      },
      {
        title: '4. Prohibited Uses',
        icon: 'block',
        content:
          'You agree not to: (a) use the Software for any unlawful purpose or in violation of any regulation; (b) use the Software to transmit, distribute, or store material that infringes any third-party intellectual property rights; (c) distribute, sell, or transfer the Software to any third party without authorisation; (d) attempt to gain unauthorised access to any system or network connected to the Software; (e) use the Software to engage in any form of automated data collection, scraping, or crawling without express written consent.',
      },
      {
        title: '5. Disclaimer of Warranties',
        icon: 'warning_amber',
        content:
          'THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE DEVELOPER DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. THE DEVELOPER DOES NOT WARRANT THAT THE SOFTWARE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.',
      },
      {
        title: '6. Limitation of Liability',
        icon: 'gavel',
        content:
          'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE DEVELOPER BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE, OR SYSTEM FAILURE — ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SOFTWARE, EVEN IF THE DEVELOPER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.',
      },
      {
        title: '7. Updates & Modifications',
        icon: 'update',
        content:
          'The developer reserves the right to modify, suspend, or discontinue the Software or any part thereof at any time without notice. The developer also reserves the right to update these Terms at any time. Your continued use of the Software following the posting of updated Terms constitutes acceptance of those changes. It is your responsibility to review these Terms periodically.',
      },
      {
        title: '8. Privacy & Data',
        icon: 'privacy_tip',
        content:
          'Some applications may collect anonymised usage data to improve functionality and user experience. No personally identifiable information is collected without explicit user consent. Data collected is processed in accordance with applicable data protection legislation including, where applicable, the General Data Protection Regulation (GDPR). You may opt out of any data collection within the application settings.',
      },
      {
        title: '9. Third-Party Services',
        icon: 'link',
        content:
          'The Software may integrate with or contain links to third-party services, websites, or APIs. The developer is not responsible for the availability, accuracy, or content of any third-party service. Your use of any third-party service is subject to that service\'s own terms and conditions and privacy policy. The inclusion of any third-party link does not imply endorsement by the developer.',
      },
      {
        title: '10. Governing Law',
        icon: 'balance',
        content:
          'These Terms shall be governed by and construed in accordance with the laws of the European Union and the jurisdiction in which the developer is resident, without regard to conflict-of-law principles. Any dispute arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the courts of that jurisdiction. If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.',
      },
    ],
  },

  about: {
    hero: {
      tag: 'About Me',
      title: 'Tobias Brörmann',
      subtitle: 'Full Stack Developer · 9+ years of enterprise experience',
    },
    bio: [
      'I build software across the delivery lifecycle, from system design and implementation to deployment and ongoing maintenance. With 9+ years of enterprise experience, I focus on reliable systems, clear architecture, and maintainable code.',
      'My backend work includes APIs and services with C#/.NET, Java/Spring Boot, Node.js/Fastify, and Python. I work with relational and NoSQL databases including PostgreSQL, MongoDB, and Azure Cosmos DB.',
      'For web and mobile applications, I use JavaScript/TypeScript, Angular, React, Vue, .NET MAUI, and Swift. I provision cloud infrastructure on Azure and AWS with Terraform, Kubernetes, and Bicep.',
    ],
    stack: {
      tag: 'Tech Stack',
      title: 'Technologies & Tools',
      logoStripLabel: 'Technology logos',
      backendTitle: 'Backend',
      frontendTitle: 'Frontend & Mobile',
      toolsTitle: 'Tools & Practices',
    },
    cta: {
      title: 'Want to see what I\'ve built?',
      body: 'Browse all my apps and download them for your platform.',
      btn: 'View All Apps',
    },
  },

  privacy: {
    pageTag: 'Privacy Policy',
    title: 'Your Privacy Matters',
    subtitle: 'This policy applies to all apps published by TB Builds. Data handling varies by app and by the features you use.',
    lastUpdated: 'Last updated',
    summaryBold: 'Short version:',
    summaryText: 'Each app handles data according to its features. Check its listing and permission prompts to understand what it accesses, stores, or shares.',
    appliesTitle: 'Applies to',
    appliesText: 'This policy applies to all apps and software published by TB Builds. App-specific details are described in the relevant app listing and permission prompts. Third-party services and websites are covered by their own privacy policies.',
    sections: [
      {
        icon: 'apps',
        title: 'Scope and App-Specific Details',
        content: 'This policy covers software published by TB Builds. Apps have different functions and may process different types of information. The relevant app listing and permission prompts describe the data needed for its features; this general policy does not mean that every app accesses every type of data mentioned here.',
      },
      {
        icon: 'data_usage',
        title: 'Information an App May Process',
        content: 'Depending on its features, an app may process information you enter or select, such as files, clipboard content, settings, device information, or credentials. The app should use the information needed to provide the feature you choose. Review the app-specific details before use, especially before granting permissions.',
      },
      {
        icon: 'devices',
        title: 'Device and Network Sharing',
        content: 'Features that connect devices or services may send the information required to carry out your request to the destination you select or configure. Check the app description and connection settings to understand which devices or services are involved. Information sent to a destination is subject to that destination’s security and privacy practices.',
      },
      {
        icon: 'cloud',
        title: 'Third-Party Services',
        content: 'Some app features may rely on operating-system services, app stores, or services and servers you choose to use. Those providers handle information under their own privacy policies. TB Builds does not control their data practices.',
      },
      {
        icon: 'storage',
        title: 'Storage and Retention',
        content: 'Storage depends on the app and feature. Information may be kept on your device, on a connected device, or by a service you use. You can usually remove local information by clearing the app’s data or uninstalling it. Removing the app may not delete information already stored by a third-party service.',
      },
      {
        icon: 'security',
        title: 'Security',
        content: 'Security features vary between apps. Keep your device and apps up to date, use device security controls, and review where information is sent before sharing it. No method of storage or transmission can be guaranteed to be completely secure.',
      },
      {
        icon: 'contact_support',
        title: 'Questions',
        content: 'For questions about privacy or how a TB Builds app handles information, contact support.tbsoftware@gmail.com.',
      },
      {
        icon: 'update',
        title: 'Changes to This Policy',
        content: 'This policy may be updated as TB Builds apps or their data practices change. The latest version and its revision date will be published on this page. App-specific changes may also be described in the relevant app’s release notes.',
      },
    ],
  },

  imprint: {
    pageTag: 'Legal',
    title: 'Legal Notice',
    subtitle: 'Provider information pursuant to Section 5 of the German Digital Services Act (DDG).',
    providerLabel: 'Website operator',
    providerName: 'Tobias Brörmann',
    brandLabel: 'Brand',
    brandName: 'TB Builds',
    addressLabel: 'Address',
    street: 'Mercedesstraße 11A',
    postalCity: '70372 Stuttgart',
    country: 'Germany',
    contactLabel: 'Contact',
    email: 'support.tbsoftware@gmail.com',
  },

  footer: {
    navTitle: 'Navigation',
    connectTitle: 'Connect',
    tagline: 'Crafting quality software — one release at a time.',
    copyright: 'All rights reserved.',
    builtWith: 'Built with ♥ using Angular & Angular Material',
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    terms: 'Terms & Conditions',
    privacy: 'Privacy Policy',
    imprint: 'Legal Notice',
    contact: 'Contact',
  },

  categories: {
    All: 'All',
    Productivity: 'Productivity',
    Finance: 'Finance',
    Security: 'Security',
    Utilities: 'Utilities',
    'Developer Tools': 'Developer Tools',
  },

  platforms: {
    windows: 'Windows',
    android: 'Android',
    ios: 'iOS (iPhone)',
    macos: 'macOS',
    linux: 'Linux',
  },

  seo: {
    ogLocale: 'en_GB',
    imageAlt: 'TB Builds, practical software by Tobias Brörmann',
    pages: {
      home: {
        title: 'TB Builds — Software by Tobias Brörmann',
        description:
          'Practical software for desktop and mobile by Tobias Brörmann, built for everyday life and used by its creator.',
      },
      about: {
        title: 'About Tobias Brörmann',
        description:
          'Full Stack Developer with 9+ years of enterprise experience across .NET, Java, Python, JavaScript, TypeScript, mobile apps, cloud, and databases.',
      },
      projects: {
        title: 'Software Projects & Apps',
        description:
          'Explore Calctron, Bridgely, and xConnect File Manager by Tobias Brörmann. xConnect supports WebDAV, FTP, FTPS, and SFTP; Android releases are in development.',
      },
      terms: {
        title: 'Terms & Conditions',
        description: 'Terms and conditions for downloading and using software from TB Builds.',
      },
      privacy: {
        title: 'Privacy Policy',
        description: 'General privacy policy for apps published by TB Builds; data handling details vary by app and feature.',
      },
      imprint: {
        title: 'Legal Notice',
        description: 'Provider information and contact details for TB Builds.',
      },
    },
  },
};
