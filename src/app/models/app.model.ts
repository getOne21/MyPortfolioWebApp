export type Platform = 'windows' | 'android' | 'ios' | 'macos' | 'linux';

export interface AppDownload {
  platform: Platform;
  url: string;
  fileSize?: string;
}

export interface AppProjectCopy {
  tagline: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
}

export type ProjectScreenshotKey = 'pairing' | 'more' | 'settings';

export interface ProjectScreenshot {
  src: string;
  captionKey: ProjectScreenshotKey;
}

export interface AppProject {
  id: number;
  name: string;
  category: string;
  version: string;
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
