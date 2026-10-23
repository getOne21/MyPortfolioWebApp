import { Component, signal, inject, computed, HostListener, ChangeDetectionStrategy, ElementRef, viewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { Lang, TranslationService } from '../services/translation.service';
import { ThemeService, Theme } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, MatIconModule, MatButtonModule],
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
  ];

  themes: { value: Theme; label: string; icon: string; c1: string; c2: string }[] = [
    { value: 'dark',       label: 'Dark',          icon: 'dark_mode',     c1: '#3b82f6', c2: '#27272a' },
    { value: 'futuristic', label: 'Futuristic',    icon: 'auto_fix_high', c1: '#00d4ff', c2: '#7c3aed' },
    { value: 'light',      label: 'White Blue',    icon: 'light_mode',    c1: '#2563eb', c2: '#ffffff' },
  ];

  activeThemeEntry = computed(() =>
    this.themes.find(t => t.value === this.currentTheme()) ?? this.themes[0]
  );

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 20); }

  private themeDropdown = viewChild<ElementRef<HTMLElement>>('themeDropdown');

  /** Close dropdown when clicking anywhere outside it */
  @HostListener('document:click', ['$event'])
  onDocumentClick(e: Event) {
    if (!this.themeDropdown()?.nativeElement.contains(e.target as Node)) this.dropdownOpen.set(false);
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
}
