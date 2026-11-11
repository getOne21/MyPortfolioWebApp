import { Component, signal, inject, computed, HostListener, ChangeDetectionStrategy, ElementRef, viewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { Lang, TranslationService } from '../services/translation.service';
import { ThemeService, Theme } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './navbar.scss'
})
export class Navbar {
  private ts     = inject(TranslationService);
  private theme  = inject(ThemeService);
  private router = inject(Router);

  t            = this.ts.t;
  currentLang  = this.ts.currentLang;
  currentTheme = this.theme.currentTheme;
  menuOpen     = signal(false);
  scrolled     = signal(false);
  dropdownOpen = signal(false);

  navLinks = [
    { key: 'home'     as const, path: 'home',     icon: 'home' },
    { key: 'about'    as const, path: 'about',    icon: 'person' },
    { key: 'projects' as const, path: 'projects', icon: 'apps' },
    { key: 'terms'    as const, path: 'terms',    icon: 'gavel' },
    { key: 'privacy'  as const, path: 'privacy',  icon: 'privacy_tip' },
    { key: 'imprint'  as const, path: 'imprint',  icon: 'info' },
  ];

  themes: { value: Theme; icon: string; c1: string; c2: string }[] = [
    { value: 'dark',       icon: 'dark_mode',     c1: '#3b82f6', c2: '#27272a' },
    { value: 'futuristic', icon: 'auto_fix_high', c1: '#00d4ff', c2: '#7c3aed' },
    { value: 'light',      icon: 'light_mode',    c1: '#2563eb', c2: '#ffffff' },
  ];

  activeThemeEntry = computed(() =>
    this.themes.find(t => t.value === this.currentTheme()) ?? this.themes[0]
  );

  themeLabel(value: Theme): string {
    return this.t().nav.themeNames[value];
  }

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 20); }

  private themeDropdown = viewChild<ElementRef<HTMLElement>>('themeDropdown');
  private menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

  /** Close dropdown when clicking anywhere outside it */
  @HostListener('document:click', ['$event'])
  onDocumentClick(e: Event) {
    if (!this.themeDropdown()?.nativeElement.contains(e.target as Node)) this.dropdownOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.dropdownOpen()) {
      this.dropdownOpen.set(false);
      this.themeDropdown()?.nativeElement.querySelector<HTMLButtonElement>('.theme-dropdown-btn')?.focus();
      return;
    }

    if (this.menuOpen()) {
      this.closeMenu();
      this.menuButton()?.nativeElement.focus();
    }
  }

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu()  { this.menuOpen.set(false); }
  /** Switches language by navigating to the same page under the other /en or /de prefix */
  setLang(lang: Lang) {
    const url = this.router.url.replace(/^\/(en|de)(?=[/?#]|$)/, `/${lang}`);
    this.router.navigateByUrl(url.startsWith(`/${lang}`) ? url : `/${lang}/home`);
  }

  openDropdown(e: Event) {
    e.stopPropagation();
    this.dropdownOpen.update(v => !v);
  }

  selectTheme(t: Theme, e: Event) {
    e.stopPropagation();
    this.theme.setTheme(t);
    this.dropdownOpen.set(false);
  }

  selectMobileTheme(e: Event) {
    const selectedValue = (e.target as HTMLSelectElement).value;
    const selectedTheme = this.themes.find(theme => theme.value === selectedValue);
    if (!selectedTheme) return;

    this.selectTheme(selectedTheme.value, e);
    this.closeMenu();
  }

  selectMobileLanguage(e: Event) {
    const selectedLanguage = (e.target as HTMLSelectElement).value;
    if (selectedLanguage !== 'en' && selectedLanguage !== 'de') return;

    this.closeMenu();
    this.setLang(selectedLanguage);
  }
}
