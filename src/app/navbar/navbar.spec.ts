import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { Navbar } from './navbar';
import { routes } from '../app.routes';

describe('Navbar language switch', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ imports: [Navbar], providers: [provideRouter(routes)] });
  });

  it('keeps the current page when switching language', async () => {
    const harness = await RouterTestingHarness.create('/en/projects');
    const navbar = TestBed.createComponent(Navbar);
    navbar.detectChanges();

    navbar.componentInstance.setLang('de');
    await harness.fixture.whenStable();

    expect(TestBed.inject(Router).url).toBe('/de/projects');
  });

  it('renders nav links with the active language prefix', async () => {
    await RouterTestingHarness.create('/de/home');
    const navbar = TestBed.createComponent(Navbar);
    navbar.detectChanges();

    const hrefs = Array.from(navbar.nativeElement.querySelectorAll('.nav-link') as NodeListOf<HTMLAnchorElement>)
      .map(a => a.getAttribute('href'));
    expect(hrefs).toEqual(['/de/home', '/de/about', '/de/projects', '/de/terms']);
  });
});
