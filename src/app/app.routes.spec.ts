import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { routes } from './app.routes';
import { TranslationService } from './services/translation.service';

describe('app routes', () => {
  let harness: RouterTestingHarness;

  async function setup(savedLang?: 'en' | 'de') {
    localStorage.clear();
    if (savedLang) localStorage.setItem('portfolio-lang', savedLang);
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    harness = await RouterTestingHarness.create();
  }

  const url = () => TestBed.inject(Router).url;

  it('activates the language from the URL prefix', async () => {
    await setup('en');
    await harness.navigateByUrl('/de/about');
    expect(url()).toBe('/de/about');
    expect(TestBed.inject(TranslationService).currentLang()).toBe('de');
    expect(document.documentElement.lang).toBe('de');
  });

  it('redirects the root to the preferred language', async () => {
    await setup('de');
    await harness.navigateByUrl('/');
    expect(url()).toBe('/de/home');
  });

  it('redirects legacy unprefixed URLs to the preferred language', async () => {
    await setup('de');
    await harness.navigateByUrl('/projects');
    expect(url()).toBe('/de/projects');
  });

  it('redirects unknown URLs to home', async () => {
    await setup('en');
    await harness.navigateByUrl('/does-not-exist');
    expect(url()).toBe('/en/home');
    await harness.navigateByUrl('/de/does-not-exist');
    expect(url()).toBe('/de/home');
  });
});
