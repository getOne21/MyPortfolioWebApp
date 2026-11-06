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
  tags: string[];
  features: string[];
}

export type ProjectScreenshotKey =
  | 'pairing'
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
}

export interface AppProject {
  id: number;
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
  isNew?: boolean;
  isFeatured?: boolean;
}
