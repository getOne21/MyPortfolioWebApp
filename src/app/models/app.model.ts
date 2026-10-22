export type Platform = 'windows' | 'android' | 'macos' | 'linux';

export interface AppDownload {
  platform: Platform;
  label: string;
  url: string;
  fileSize?: string;
}

export interface AppProject {
  id: number;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: string;
  version: string;
  releaseDate: string;
  downloads: AppDownload[];
  features: string[];
  colorAccent: string;
  gradientStart: string;
  gradientEnd: string;
  /** App icon image path (under public/), drawn on top of the gradient tile */
  icon: string;
  tags: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}
