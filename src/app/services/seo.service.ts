import { Injectable, inject, DOCUMENT } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { SITE } from '../site.config';
import type { PageKey } from '../app.routes';
import { LANGS, Lang, TranslationService } from './translation.service';

/** Keeps <title>, meta description, Open Graph/Twitter tags, canonical and hreflang links in sync with the route. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly router = inject(Router);
  private readonly title  = inject(Title);
  private readonly meta   = inject(Meta);
  private readonly doc    = inject(DOCUMENT);
  private readonly ts     = inject(TranslationService);

  constructor() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.update());
  }

  private update(): void {
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) route = route.firstChild;
    const page = route.data['page'] as PageKey | undefined;
    if (!page) return;

    const lang = this.ts.currentLang();
    const seo = this.ts.t().seo;
    const { title, description } = seo.pages[page];
    const fullTitle = page === 'home' ? title : `${title} | ${SITE.name}`;
    const pageUrl = (l: Lang) => `${SITE.url}/${l}/${page}`;
    const image = SITE.url + SITE.ogImage;
    const otherLocales = LANGS.filter(l => l !== lang).map(l => (l === 'de' ? 'de_DE' : 'en_GB'));

    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: description });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE.name });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: pageUrl(lang) });
    this.meta.updateTag({ property: 'og:locale', content: seo.ogLocale });
    this.meta.removeTag('property="og:locale:alternate"');
    otherLocales.forEach(l => this.meta.addTag({ property: 'og:locale:alternate', content: l }));
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:image:width', content: String(SITE.ogImageWidth) });
    this.meta.updateTag({ property: 'og:image:height', content: String(SITE.ogImageHeight) });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setLink('canonical', pageUrl(lang));
    LANGS.forEach(l => this.setLink('alternate', pageUrl(l), l));
    this.setLink('alternate', pageUrl('en'), 'x-default');
  }

  private setLink(rel: string, href: string, hreflang?: string): void {
    const selector = `link[rel="${rel}"]` + (hreflang ? `[hreflang="${hreflang}"]` : '');
    let link = this.doc.head.querySelector<HTMLLinkElement>(selector);
    if (!link) {
      link = this.doc.createElement('link');
      link.rel = rel;
      if (hreflang) link.hreflang = hreflang;
      this.doc.head.appendChild(link);
    }
    link.href = href;
  }
}
