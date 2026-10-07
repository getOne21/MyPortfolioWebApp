import { Injectable, signal } from '@angular/core';

export type Theme = 'futuristic' | 'personal' | 'thunder' | 'matrix';

@Injectable({ providedIn: 'root' })
export class ThemeService {
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
    document.body.setAttribute('data-theme', theme);
  }

  private loadSaved(): Theme {
    try {
      const saved = localStorage.getItem('portfolio-theme') as Theme | null;
      return (['futuristic', 'personal', 'thunder', 'matrix'] as const).includes(saved as Theme) ? (saved as Theme) : 'futuristic';
    } catch {
      return 'futuristic';
    }
  }
}
