import { Injectable, signal, computed } from '@angular/core';
import { en } from '../i18n/en';
import { de } from '../i18n/de';
import { AppTranslations } from '../i18n/translations.model';

export type Lang = 'en' | 'de';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly _lang = signal<Lang>(this.loadSaved());

  /** Read-only signal exposing the active language code */
  readonly currentLang = this._lang.asReadonly();

  /** Computed signal returning the full translation object for the active language */
  readonly t = computed<AppTranslations>(() => (this._lang() === 'de' ? de : en));

  /** Safe category-label lookup with fallback to the raw key */
  catLabel(key: string): string {
    const map = this.t().categories as { [k: string]: string | undefined };
    return map[key] ?? key;
  }

  setLang(lang: Lang): void {
    this._lang.set(lang);
    try { localStorage.setItem('portfolio-lang', lang); } catch { /* SSR / private browsing */ }
  }

  toggle(): void {
    this.setLang(this._lang() === 'de' ? 'en' : 'de');
  }

  private loadSaved(): Lang {
    try {
      const saved = localStorage.getItem('portfolio-lang') as Lang | null;
      if (saved === 'en' || saved === 'de') return saved;
    } catch { /* private browsing / SSR */ }
    return this.detectBrowserLang();
  }

  /** Walks navigator.languages in preference order and returns the first supported lang. */
  private detectBrowserLang(): Lang {
    const candidates: readonly string[] =
      (typeof navigator !== 'undefined' && navigator.languages?.length)
        ? navigator.languages
        : typeof navigator !== 'undefined' ? [navigator.language] : [];

    for (const tag of candidates) {
      const code = tag.split('-')[0].toLowerCase();
      if (code === 'de') return 'de';
      if (code === 'en') return 'en';
    }
    return 'en'; // English as universal fallback for unsupported languages
  }
}
