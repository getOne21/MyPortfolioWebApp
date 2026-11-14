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
    const english = svc.t().appProjects[1];
    expect(english.description).toContain('per-device controls');
    expect(english.tagline).toContain('Mac and iPhone next');
    expect(english.longDescription).toContain('macOS and iOS planned next');
    expect(english.longDescription).toContain('optional launch-at-sign-in controls');
    expect(english.longDescription).toContain('Android 8.0 (API 26)');
    expect(english.features).toContain('Windows: tray access, drag-and-drop sending, desktop quick actions, and network diagnostics');
    expect(english.features).toContain('Efficient binary file chunks when supported by both peers, with a fallback for older versions');

    svc.setLang('de');
    const german = svc.t().appProjects[1];
    expect(german.description).toContain('gezielter Gerätesteuerung');
    expect(german.tagline).toContain('danach Mac und iPhone');
    expect(german.longDescription).toContain('macOS und iOS sind als Nächstes geplant');
    expect(german.longDescription).toContain('optionale Autostart-Einstellung');
    expect(german.longDescription).toContain('Android 8.0 (API 26)');
    expect(german.features).toContain('Windows: System-Tray, Drag-and-drop, Schnellaktionen und Netzwerkdiagnose');
    expect(german.features).toContain('Effiziente binäre Dateiblöcke bei Unterstützung beider Geräte, mit Fallback für ältere Versionen');
    expect(svc.t().appProjects[2].features).toContain('Windows-Version verfügbar; Android-Unterstützung in Entwicklung');
  });

  it('provides localized release notes and requirements for every app', () => {
    const svc = TestBed.inject(TranslationService);
    for (const project of Object.values(svc.t().appProjects)) {
      expect(project.requirements.length).toBeGreaterThan(0);
      expect(project.releases.length).toBeGreaterThan(0);
    }
    expect(svc.t().appProjects[2].releases[0].version).toBe('1.1');
    expect(svc.t().appProjects[1].releases.map(release => release.version)).toEqual(['1.4', '1.4']);
    expect(svc.t().appProjects[1].releases[0].highlights[0]).toContain('network diagnostics');
    expect(svc.t().appProjects[1].releases[1].highlights[0]).toContain('clipboard-image sharing');

    svc.setLang('de');
    expect(svc.t().appProjects[2].releases[0].highlights[0]).toContain('Windows-Anmeldung');
    expect(svc.t().appProjects[2].requirements[0]).toContain('Windows 10');
    expect(svc.t().appProjects[1].releases.map(release => release.version)).toEqual(['1.4', '1.4']);
    expect(svc.t().appProjects[1].releases[0].highlights[0]).toContain('Netzwerkdiagnose');
    expect(svc.t().appProjects[1].releases[1].highlights[0]).toContain('Zwischenablagebildern');
  });

  it('describes xConnect SFTP support and planned Android release in both languages', () => {
    const svc = TestBed.inject(TranslationService);
    expect(svc.t().appProjects[2].description).toContain('SFTP');
    expect(svc.t().appProjects[2].longDescription).toContain('Android support is in development');
    expect(svc.t().appProjects[2].longDescription).toContain('organization policy');
    expect(svc.t().appProjects[2].features).toContain('Microsoft Store packages for x64 and ARM64');

    svc.setLang('de');
    expect(svc.t().appProjects[2].description).toContain('SFTP');
    expect(svc.t().appProjects[2].longDescription).toContain('Android-Unterstützung ist in Entwicklung');
    expect(svc.t().appProjects[2].longDescription).toContain('Unternehmensrichtlinien');
    expect(svc.t().appProjects[2].features).toContain('Microsoft-Store-Pakete für x64 und ARM64');
  });

  it('localizes Calctron and notes its planned Android release', () => {
    const svc = TestBed.inject(TranslationService);
    expect(svc.t().appProjects[3].description).toContain('native Windows calculator');
    expect(svc.t().appProjects[3].longDescription).toContain('An Android release is planned');

    svc.setLang('de');
    expect(svc.t().appProjects[3].description).toContain('Windows-Rechner');
    expect(svc.t().appProjects[3].longDescription).toContain('Eine Android-Version ist geplant');
  });
});
