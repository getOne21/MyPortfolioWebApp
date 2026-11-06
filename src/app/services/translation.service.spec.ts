import { TestBed } from '@angular/core/testing';
import { TranslationService } from './translation.service';

describe('TranslationService', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.restoreAllMocks());

  it('restores a saved language', () => {
    localStorage.setItem('portfolio-lang', 'de');
    const svc = TestBed.inject(TranslationService);
    expect(svc.currentLang()).toBe('de');
    expect(svc.t().nav.home).toBe('Startseite');
  });

  it('falls back to the first supported browser language', () => {
    vi.spyOn(navigator, 'languages', 'get').mockReturnValue(['fr-FR', 'de-AT', 'en']);
    expect(TestBed.inject(TranslationService).currentLang()).toBe('de');
  });

  it('defaults to English for unsupported browser languages', () => {
    vi.spyOn(navigator, 'languages', 'get').mockReturnValue(['fr-FR', 'es']);
    expect(TestBed.inject(TranslationService).currentLang()).toBe('en');
  });

  it('setLang updates translations, <html lang> and localStorage', () => {
    const svc = TestBed.inject(TranslationService);
    svc.setLang('de');
    expect(svc.t().lang).toBe('de');
    expect(document.documentElement.lang).toBe('de');
    expect(localStorage.getItem('portfolio-lang')).toBe('de');

    svc.setLang('en');
    expect(document.documentElement.lang).toBe('en');
  });

  it('catLabel translates known categories and falls back to the key', () => {
    const svc = TestBed.inject(TranslationService);
    svc.setLang('de');
    expect(svc.catLabel('Security')).toBe('Sicherheit');
    expect(svc.catLabel('Unknown Category')).toBe('Unknown Category');
  });

  it('localizes app descriptions and features', () => {
    const svc = TestBed.inject(TranslationService);
    expect(svc.t().appProjects[1].description).toContain('Android adds notification-code forwarding');

    svc.setLang('de');
    expect(svc.t().appProjects[1].description).toContain('Android bietet Code-Weiterleitung');
    expect(svc.t().appProjects[2].features).toContain('Windows-Version verfügbar; Android-Unterstützung in Entwicklung');
  });

  it('describes xConnect SFTP support and planned Android release in both languages', () => {
    const svc = TestBed.inject(TranslationService);
    expect(svc.t().appProjects[2].description).toContain('SFTP');
    expect(svc.t().appProjects[2].longDescription).toContain('Android support is in development');

    svc.setLang('de');
    expect(svc.t().appProjects[2].description).toContain('SFTP');
    expect(svc.t().appProjects[2].longDescription).toContain('Android-Unterstützung ist in Entwicklung');
  });

  it('localizes Calctron and notes its planned Android release', () => {
    const svc = TestBed.inject(TranslationService);
    expect(svc.t().appProjects[3].description).toContain('native Windows app');
    expect(svc.t().appProjects[3].longDescription).toContain('An Android release is planned');

    svc.setLang('de');
    expect(svc.t().appProjects[3].description).toContain('Windows-App');
    expect(svc.t().appProjects[3].longDescription).toContain('Eine Android-Version ist geplant');
  });
});
