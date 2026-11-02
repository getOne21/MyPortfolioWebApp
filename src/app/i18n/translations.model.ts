import type { AppProjectCopy } from '../models/app.model';

export interface TermsSection {
  title: string;
  icon: string;
  content: string;
}

export interface AppTranslations {
  lang: 'en' | 'de';
  appProjects: Record<number, AppProjectCopy>;

  nav: {
    home: string;
    about: string;
    projects: string;
    terms: string;
    privacy: string;
    imprint: string;
    downloadApps: string;
    style: string;
    language: string;
  };

  hero: {
    title1: string;
    title2: string;
    subtitle: string;
    exploreProjects: string;
    aboutMe: string;
  };

  carousel: {
    tag: string;
    title: string;
    subtitle: string;
    viewProject: string;
    new: string;
  };

  allApps: {
    tag: string;
    title: string;
    subtitle: string;
    viewAll: string;
  };

  cta: {
    title: string;
    subtitle: string;
    button: string;
  };

  projects: {
    pageTag: string;
    title: string;
    subtitle: string;
    filterAll: string;
    downloadLabel: string;
    aboutLabel: string;
    featuresLabel: string;
    releasedLabel: string;
    noResults: string;
    new: string;
    version: string;
    screenshotsTitle: string;
    screenshotCaptions: {
      pairing: string;
      more: string;
      settings: string;
    };
  };

  terms: {
    pageTag: string;
    title: string;
    subtitle: string;
    lastUpdated: string;
    summaryBold: string;
    summaryText: string;
    contactTitle: string;
    contactSubtitle: string;
    sections: TermsSection[];
  };

  privacy: {
    pageTag: string;
    title: string;
    subtitle: string;
    lastUpdated: string;
    summaryBold: string;
    summaryText: string;
    appliesTitle: string;
    appliesText: string;
    sections: TermsSection[];
  };

  imprint: {
    pageTag: string;
    title: string;
    subtitle: string;
    providerLabel: string;
    providerName: string;
    brandLabel: string;
    brandName: string;
    addressLabel: string;
    street: string;
    postalCity: string;
    country: string;
    contactLabel: string;
    email: string;
  };

  footer: {
    navTitle: string;
    connectTitle: string;
    tagline: string;
    copyright: string;
    builtWith: string;
    home: string;
    about: string;
    projects: string;
    terms: string;
    privacy: string;
    imprint: string;
    contact: string;
  };

  about: {
    hero: { tag: string; title: string; subtitle: string };
    bio: string[];
    stack: { tag: string; title: string; logoStripLabel: string; backendTitle: string; frontendTitle: string; toolsTitle: string };
    cta: { title: string; body: string; btn: string };
  };

  /** Maps English category keys from app data to localised display labels */
  categories: Record<string, string>;

  /** Maps platform keys to localised display labels */
  platforms: {
    windows: string;
    android: string;
    ios: string;
    macos: string;
    linux: string;
  };

  /** Per-page document title / meta description and Open Graph locale */
  seo: {
    ogLocale: string;
    pages: Record<'home' | 'about' | 'projects' | 'terms' | 'privacy' | 'imprint', SeoEntry>;
  };
}

export interface SeoEntry {
  title: string;
  description: string;
}
