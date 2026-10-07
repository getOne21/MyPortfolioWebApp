import { AppTranslations } from './translations.model';

export const en: AppTranslations = {
  lang: 'en',

  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    terms: 'Terms & Conditions',
    downloadApps: 'Download Apps',
  },

  hero: {
    badge: 'Available for new projects',
    title1: 'Building Software',
    title2: 'That Just Works',
    subtitle:
      'Indie developer crafting high-quality desktop & mobile applications for Windows, macOS, Linux, and Android.',
    exploreProjects: 'Explore Projects',
    termsConditions: 'Terms & Conditions',
  },

  stats: {
    appsReleased: 'Apps Released',
    downloads: 'Downloads',
    avgRating: 'Avg Rating',
    platforms: 'Platforms',
  },

  carousel: {
    tag: 'Featured',
    title: 'Spotlight Apps',
    subtitle: 'Hand-picked highlights from my portfolio',
    download: 'Download',
    new: 'New',
  },

  allApps: {
    tag: 'All Projects',
    title: 'The Full Collection',
    subtitle: 'Every app I\'ve shipped — download for your platform',
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
    subtitle: 'All applications I\'ve built — pick your platform and download in seconds.',
    filterAll: 'All',
    downloadLabel: 'Download',
    aboutLabel: 'About',
    featuresLabel: 'Key Features',
    releasedLabel: 'Released',
    noResults: 'No projects found in this category.',
    new: 'New',
    version: 'Version',
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
      subtitle: 'Full-stack engineer · 9 years enterprise · .NET, Java, Angular, React, Terraform',
    },
    bio: 'I build systems end-to-end — .NET and Spring Boot APIs on the backend, Angular and React SPAs on the frontend, and cloud infrastructure provisioned as code with Terraform and Bicep. Nine years of enterprise experience across multiple companies, always with a focus on clean architecture and maintainable code.',
    stats: {
      years: '9+',
      yearsLabel: 'Years Experience',
      companies: 'Several',
      companiesLabel: 'Companies',
    },
    stack: {
      tag: 'Tech Stack',
      title: 'What I Work With',
      backendTitle: 'Backend',
      frontendTitle: 'Frontend',
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
    subtitle: 'xConnect File Manager does not collect or transmit any personal data. Here is exactly what the app touches — and what it does not.',
    lastUpdated: 'Last updated',
    summaryBold: 'Short version:',
    summaryText: 'No data is sent to the developer. Everything stays on your device and the servers you configure.',
    sections: [
      {
        icon: 'cloud_off',
        title: 'No Data Collected by the Developer',
        content: 'xConnect File Manager does not transmit any information to the developer or to any third-party service. There is no analytics, no telemetry, no crash reporting, and no usage tracking of any kind.',
      },
      {
        icon: 'wifi',
        title: 'Network Connections',
        content: 'The app connects exclusively to servers you configure yourself — your NAS, WebDAV endpoint, FTP, or FTPS server. These are direct connections between your device and your own infrastructure. The developer has zero visibility into these connections or the data they carry.',
      },
      {
        icon: 'person',
        title: 'Windows Account Information',
        content: 'On Windows, the app reads your display name and profile picture from local system data to show a personalised avatar in the interface. This information is read from the local device only and is never stored by the app or transmitted anywhere.',
      },
      {
        icon: 'storage',
        title: 'Local Data Storage',
        content: 'The following data is stored locally on your device only: saved connection profiles (server URL and username), UI preferences such as theme and sort order, and a thumbnail cache to speed up folder browsing. None of this data leaves your device.',
      },
      {
        icon: 'lock',
        title: 'Passwords and Credentials',
        content: 'Passwords you choose to save are stored using the platform\'s secure credential manager. On Windows this is the Windows Credential Manager. Passwords are never stored in plain text and are never transmitted to the developer.',
      },
      {
        icon: 'gavel',
        title: 'Your Rights',
        content: 'Because the developer holds no personal data about you, there is nothing to access, correct, or request deletion of from our side. To remove all locally stored data, clear the app\'s data through your Windows app settings or uninstall the application.',
      },
      {
        icon: 'update',
        title: 'Changes to This Policy',
        content: 'If the privacy policy changes, the updated version will be published at this URL with a revised "last updated" date. Continued use of the app after a change constitutes acceptance of the updated policy. Material changes will be noted in the app\'s release notes.',
      },
    ],
  },

  footer: {
    tagline: 'Crafting quality software — one release at a time.',
    navTitle: 'Navigation',
    connectTitle: 'Connect',
    copyright: 'All rights reserved.',
    builtWith: 'Built with ♥ using Angular & Angular Material',
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    terms: 'Terms & Conditions',
    privacy: 'Privacy Policy',
    github: 'GitHub',
    linkedin: 'LinkedIn',
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
    macos: 'macOS',
    linux: 'Linux',
  },
};
