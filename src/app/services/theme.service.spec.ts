import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => localStorage.clear());

  it('defaults to the futuristic theme', () => {
    const svc = TestBed.inject(ThemeService);
    expect(svc.currentTheme()).toBe('futuristic');
    expect(document.body.getAttribute('data-theme')).toBe('futuristic');
  });

  it('restores a saved theme and ignores invalid values', () => {
    localStorage.setItem('portfolio-theme', 'matrix');
    expect(TestBed.inject(ThemeService).currentTheme()).toBe('matrix');

    TestBed.resetTestingModule();
    localStorage.setItem('portfolio-theme', 'not-a-theme');
    expect(TestBed.inject(ThemeService).currentTheme()).toBe('futuristic');
  });

  it('setTheme updates the body attribute and persists the choice', () => {
    const svc = TestBed.inject(ThemeService);
    svc.setTheme('thunder');
    expect(svc.currentTheme()).toBe('thunder');
    expect(document.body.getAttribute('data-theme')).toBe('thunder');
    expect(localStorage.getItem('portfolio-theme')).toBe('thunder');
  });
});
