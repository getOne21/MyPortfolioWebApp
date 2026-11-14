export type Platform = 'windows' | 'android' | 'ios' | 'macos' | 'linux';

export interface AppDownload {
  platform: Platform;
  url?: string;
  fileSize?: string;
  comingSoon?: boolean;
}

export interface AppProjectCopy {
  tagline: string;
  description: string;
  longDescription: string;
  socialImageAlt: string;
  tags: string[];
  features: string[];
  requirements: string[];
  releases: AppReleaseNote[];
}

export interface AppReleaseNote {
  platform: Platform;
  version: string;
  date?: string;
  highlights: string[];
}

export type ProjectScreenshotKey =
  | 'bridgelyHome'
  | 'bridgelyClipboardHistory'
  | 'bridgelyMore'
  | 'bridgelyDevices'
  | 'bridgelyTransfers'
  | 'bridgelyDiagnostics'
  | 'bridgelySettings'
  | 'bridgelySyncSettings'
  | 'bridgelyDeviceSettings'
  | 'bridgelyAboutSecurity'
  | 'more'
  | 'settings'
  | 'scientific'
  | 'graphing'
  | 'programmer'
  | 'xconnectConnection'
  | 'xconnectProfiles'
  | 'xconnectSettings';

export interface ProjectScreenshot {
  src: string;
  captionKey: ProjectScreenshotKey;
  width: number;
  height: number;
}

export interface AppProject {
  id: number;
  slug: string;
  name: string;
  category: string;
  versions: Partial<Record<Platform, string>>;
  releaseDate?: string;
  downloads: AppDownload[];
  screenshots?: ProjectScreenshot[];
  colorAccent: string;
  gradientStart: string;
  gradientEnd: string;
  /** App icon image path (under public/), drawn on top of the gradient tile */
  icon: string;
  socialImage: string;
  isNew?: boolean;
  isFeatured?: boolean;
}
