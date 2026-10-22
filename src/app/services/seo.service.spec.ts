import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { routes } from '../app.routes';
import { SITE } from '../site.config';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  const meta = (attr: string) => document.head.querySelector(`meta[${attr}]`)?.getAttribute('content');
  const link = (selector: string) => document.head.querySelector<HTMLLinkElement>(selector)?.href;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    TestBed.inject(SeoService);
  });

  it('sets localized title, description and social tags', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/de/projects');

    expect(document.title).toBe(`Projekte & Downloads | ${SITE.name}`);
    expect(meta('name="description"')).toContain('Alle Apps');
    expect(meta('property="og:url"')).toBe(`${SITE.url}/de/projects`);
    expect(meta('property="og:locale"')).toBe('de_DE');
    expect(meta('property="og:image"')).toBe(SITE.url + SITE.ogImage);
    expect(meta('name="twitter:card"')).toBe('summary_large_image');
  });

  it('sets canonical and hreflang links', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/en/about');

    expect(link('link[rel="canonical"]')).toBe(`${SITE.url}/en/about`);
    expect(link('link[hreflang="en"]')).toBe(`${SITE.url}/en/about`);
    expect(link('link[hreflang="de"]')).toBe(`${SITE.url}/de/about`);
    expect(link('link[hreflang="x-default"]')).toBe(`${SITE.url}/en/about`);
    expect(document.head.querySelectorAll('link[rel="canonical"]').length).toBe(1);
  });
});
