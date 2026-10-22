import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => localStorage.clear());

  it('defaults to the dark theme', () => {
    const svc = TestBed.inject(ThemeService);
    expect(svc.currentTheme()).toBe('dark');
    expect(document.body.getAttribute('data-theme')).toBe('dark');
  });

  it('restores a saved theme and ignores invalid values', () => {
    localStorage.setItem('portfolio-theme', 'futuristic');
    expect(TestBed.inject(ThemeService).currentTheme()).toBe('futuristic');

    TestBed.resetTestingModule();
    localStorage.setItem('portfolio-theme', 'normal');
    expect(TestBed.inject(ThemeService).currentTheme()).toBe('dark');

    TestBed.resetTestingModule();
    localStorage.setItem('portfolio-theme', 'light');
    expect(TestBed.inject(ThemeService).currentTheme()).toBe('light');

    TestBed.resetTestingModule();
    localStorage.setItem('portfolio-theme', 'matrix');
    expect(TestBed.inject(ThemeService).currentTheme()).toBe('dark');
  });

  it('setTheme updates the body attribute and persists the choice', () => {
    const svc = TestBed.inject(ThemeService);
    svc.setTheme('light');
    expect(svc.currentTheme()).toBe('light');
    expect(document.body.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('portfolio-theme')).toBe('light');
  });
});
