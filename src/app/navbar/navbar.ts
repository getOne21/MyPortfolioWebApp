import { Component, signal, inject, computed, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { ThemeService, Theme } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  private ts    = inject(TranslationService);
  private theme = inject(ThemeService);

  t            = this.ts.t;
  currentLang  = this.ts.currentLang;
  currentTheme = this.theme.currentTheme;

  menuOpen     = signal(false);
  scrolled     = signal(false);
  dropdownOpen = signal(false);

  navLinks = [
    { key: 'home'     as const, path: '/home',     icon: 'home' },
    { key: 'about'    as const, path: '/about',    icon: 'person' },
    { key: 'projects' as const, path: '/projects', icon: 'apps' },
    { key: 'terms'    as const, path: '/terms',    icon: 'gavel' },
  ];

  themes: { value: Theme; label: string; icon: string; c1: string; c2: string }[] = [
    { value: 'futuristic', label: 'Futuristic',    icon: 'auto_fix_high', c1: '#00d4ff', c2: '#7c3aed' },
    { value: 'personal',   label: 'Personal',      icon: 'palette',       c1: '#f59e0b', c2: '#ec4899' },
    { value: 'thunder',    label: 'Thunder Storm', icon: 'thunderstorm',  c1: '#f5e642', c2: '#4fc3f7' },
    { value: 'matrix',     label: 'Matrix',        icon: 'terminal',      c1: '#00ff41', c2: '#005c14' },
  ];

  activeThemeEntry = computed(() =>
    this.themes.find(t => t.value === this.currentTheme()) ?? this.themes[0]
  );

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 20); }

  /** Close dropdown when clicking anywhere outside it (stopPropagation used on container) */
  @HostListener('document:click')
  onDocumentClick() { this.dropdownOpen.set(false); }

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu()  { this.menuOpen.set(false); }
  setLang(lang: 'en' | 'de') { this.ts.setLang(lang); }

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
