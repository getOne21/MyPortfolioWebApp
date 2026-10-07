export interface TermsSection {
  title: string;
  icon: string;
  content: string;
}

export interface AppTranslations {
  lang: 'en' | 'de';

  nav: {
    home: string;
    about: string;
    projects: string;
    terms: string;
    downloadApps: string;
  };

  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    exploreProjects: string;
    termsConditions: string;
  };

  stats: {
    appsReleased: string;
    downloads: string;
    avgRating: string;
    platforms: string;
  };

  carousel: {
    tag: string;
    title: string;
    subtitle: string;
    download: string;
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
    sections: TermsSection[];
  };

  footer: {
    tagline: string;
    navTitle: string;
    connectTitle: string;
    copyright: string;
    builtWith: string;
    home: string;
    about: string;
    projects: string;
    terms: string;
    privacy: string;
    github: string;
    linkedin: string;
    contact: string;
  };

  about: {
    hero: { tag: string; title: string; subtitle: string };
    bio: string;
    stats: { years: string; yearsLabel: string; companies: string; companiesLabel: string };
    stack: { tag: string; title: string; backendTitle: string; frontendTitle: string; toolsTitle: string };
    cta: { title: string; body: string; btn: string };
  };

  /** Maps English category keys from app data to localised display labels */
  categories: Record<string, string>;

  /** Maps platform keys to localised display labels */
  platforms: {
    windows: string;
    android: string;
    macos: string;
    linux: string;
  };
}
