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

    const links = Array.from(navbar.nativeElement.querySelectorAll('.nav-link') as NodeListOf<HTMLAnchorElement>);
    const hrefs = links.map(a => a.getAttribute('href'));
    expect(hrefs).toEqual(['/de/home', '/de/about', '/de/projects', '/de/terms', '/de/privacy', '/de/imprint']);
    expect(navbar.nativeElement.querySelector('.lang-btn[aria-pressed="true"]')?.textContent?.trim()).toBe('DE');
  });

  it('exposes the mobile menu state and closes it with Escape', async () => {
    await RouterTestingHarness.create('/en/home');
    const navbar = TestBed.createComponent(Navbar);
    navbar.detectChanges();

    const menuButton = navbar.nativeElement.querySelector('.burger') as HTMLButtonElement;
    const focusMenuButton = vi.spyOn(menuButton, 'focus');
    expect(menuButton.getAttribute('aria-expanded')).toBe('false');
    expect(menuButton.getAttribute('aria-label')).toBe('Open menu');

    menuButton.click();
    navbar.detectChanges();
    expect(menuButton.getAttribute('aria-expanded')).toBe('true');
    expect(navbar.nativeElement.querySelector('#mobile-menu')).not.toBeNull();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    navbar.detectChanges();
    expect(navbar.componentInstance.menuOpen()).toBe(false);
    expect(focusMenuButton).toHaveBeenCalled();
  });

  it('exposes the desktop theme disclosure state and returns focus on Escape', async () => {
    await RouterTestingHarness.create('/en/home');
    const navbar = TestBed.createComponent(Navbar);
    navbar.detectChanges();

    const themeButton = navbar.nativeElement.querySelector('.theme-dropdown-btn') as HTMLButtonElement;
    const focusThemeButton = vi.spyOn(themeButton, 'focus');
    expect(themeButton.getAttribute('aria-expanded')).toBe('false');
    expect(themeButton.getAttribute('aria-controls')).toBe('theme-panel');

    themeButton.click();
    navbar.detectChanges();
    expect(themeButton.getAttribute('aria-expanded')).toBe('true');
    expect(navbar.nativeElement.querySelector('#theme-panel[hidden]')).toBeNull();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    navbar.detectChanges();
    expect(themeButton.getAttribute('aria-expanded')).toBe('false');
    expect(focusThemeButton).toHaveBeenCalled();
  });

  it('shows style and language dropdowns in the mobile menu', async () => {
    await RouterTestingHarness.create('/en/home');
    const navbar = TestBed.createComponent(Navbar);
    navbar.componentInstance.menuOpen.set(true);
    navbar.detectChanges();

    const selects = Array.from(
      navbar.nativeElement.querySelectorAll('.mobile-settings select') as NodeListOf<HTMLSelectElement>
    );
    expect(selects).toHaveLength(2);
    expect(selects.map(select => select.getAttribute('aria-label'))).toEqual(['Style', 'Language']);
  });

  it('applies the selected style and closes the mobile menu', async () => {
    await RouterTestingHarness.create('/en/home');
    const navbar = TestBed.createComponent(Navbar);
    navbar.componentInstance.menuOpen.set(true);
    navbar.detectChanges();

    const styleSelect = navbar.nativeElement.querySelector('.mobile-settings select') as HTMLSelectElement;
    styleSelect.value = 'futuristic';
    styleSelect.dispatchEvent(new Event('change', { bubbles: true }));
    navbar.detectChanges();

    expect(navbar.componentInstance.currentTheme()).toBe('futuristic');
    expect(navbar.componentInstance.menuOpen()).toBe(false);

    navbar.componentInstance.menuOpen.set(true);
    navbar.detectChanges();
    const reopenedStyleSelect = navbar.nativeElement.querySelector(
      '.mobile-settings select'
    ) as HTMLSelectElement;
    expect(navbar.componentInstance.currentTheme()).toBe('futuristic');
    expect(reopenedStyleSelect.value).toBe('futuristic');
  });

  it('switches language from the mobile dropdown and closes the menu', async () => {
    const harness = await RouterTestingHarness.create('/en/projects');
    const navbar = TestBed.createComponent(Navbar);
    navbar.componentInstance.menuOpen.set(true);
    navbar.detectChanges();

    const languageSelect = navbar.nativeElement.querySelectorAll(
      '.mobile-settings select'
    )[1] as HTMLSelectElement;
    languageSelect.value = 'de';
    languageSelect.dispatchEvent(new Event('change', { bubbles: true }));
    await harness.fixture.whenStable();

    expect(TestBed.inject(Router).url).toBe('/de/projects');
    expect(navbar.componentInstance.menuOpen()).toBe(false);
  });
});
