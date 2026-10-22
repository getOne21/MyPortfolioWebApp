import { Injectable, inject, signal, DOCUMENT } from '@angular/core';

export type Theme = 'futuristic' | 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly _theme = signal<Theme>(this.loadSaved());

  readonly currentTheme = this._theme.asReadonly();

  constructor() {
    // Apply initial theme attribute to body on service creation
    this.applyToBody(this._theme());
  }

  setTheme(theme: Theme): void {
    this._theme.set(theme);
    this.applyToBody(theme);
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* private browsing */ }
  }

  private applyToBody(theme: Theme): void {
    this.doc.body.setAttribute('data-theme', theme);
  }

  private loadSaved(): Theme {
    try {
      const raw = localStorage.getItem('portfolio-theme');
      const saved = raw === 'normal' ? 'dark' : raw;
      return (['futuristic', 'dark', 'light'] as const).includes(saved as Theme) ? (saved as Theme) : 'dark';
    } catch {
      return 'dark';
    }
  }
}
