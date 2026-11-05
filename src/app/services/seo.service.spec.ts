import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { routes } from '../app.routes';
import { SITE } from '../site.config';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  const meta = (attr: string) => document.head.querySelector(`meta[${attr}]`)?.getAttribute('content');
  const link = (selector: string) => document.head.querySelector<HTMLLinkElement>(selector)?.href;

  it('uses TB-Builds.com as the canonical production origin', () => {
    expect(SITE.url).toBe('https://tb-builds.com');
  });

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    TestBed.inject(SeoService);
  });

  it('sets localized title, description and social tags', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/de/projects');

    expect(document.title).toBe(`Softwareprojekte & Apps | ${SITE.name}`);
    expect(meta('name="description"')).toContain('Windows und Android');
    expect(meta('property="og:url"')).toBe(`${SITE.url}/de/projects`);
    expect(meta('property="og:locale"')).toBe('de_DE');
    expect(meta('property="og:image"')).toBe(SITE.url + SITE.ogImage);
    expect(meta('property="og:image:type"')).toBe('image/png');
    expect(meta('property="og:image:alt"')).toBe('TB Builds, praktische Software von Tobias Brörmann');
    expect(meta('name="twitter:card"')).toBe('summary_large_image');
    expect(meta('name="twitter:image:alt"')).toBe('TB Builds, praktische Software von Tobias Brörmann');
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
