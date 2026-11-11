import { TestBed } from '@angular/core/testing';
import { AppDataService } from './app-data';

describe('AppDataService', () => {
  let svc: AppDataService;

  beforeEach(() => (svc = TestBed.inject(AppDataService)));

  it('returns only featured apps from getFeatured', () => {
    const featured = svc.getFeatured();
    expect(featured.length).toBeGreaterThan(0);
    expect(featured.every(a => a.isFeatured)).toBe(true);
  });

  it('uses unique ids', () => {
    const ids = svc.getAll().map(a => a.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('finds apps by id', () => {
    const first = svc.getAll()[0];
    expect(svc.getById(first.id)).toBe(first);
    expect(svc.getById(-1)).toBeUndefined();
  });

  it('provides stable slugs for app detail pages', () => {
    expect(svc.getBySlug('bridgely')?.id).toBe(1);
    expect(svc.getBySlug('xconnect-file-manager')?.id).toBe(2);
    expect(svc.getBySlug('calctron')?.id).toBe(3);
    expect(svc.getBySlug('unknown')).toBeUndefined();
  });

  it('assigns a project-specific social preview image to each app', () => {
    expect(svc.getById(1)?.socialImage).toBe('/apps/og/bridgely.png');
    expect(svc.getById(2)?.socialImage).toBe('/apps/og/xconnect-file-manager.png');
    expect(svc.getById(3)?.socialImage).toBe('/apps/og/calctron.png');
  });

  it('includes an iPhone download for Bridgely', () => {
    expect(svc.getById(1)?.downloads).toContainEqual(
      expect.objectContaining({ platform: 'ios' }),
    );
    expect(svc.getById(1)?.versions).toEqual({ windows: '1.2', android: '1.2' });
  });

  it('links Bridgely for Windows to its Microsoft Store listing', () => {
    expect(svc.getById(1)?.downloads).toContainEqual(
      expect.objectContaining({
        platform: 'windows',
        url: 'https://apps.microsoft.com/detail/9NP0LBQ9G14T?hl=en-us&gl=DE&ocid=pdpshare',
      }),
    );
  });

  it('marks Bridgely Android, iPhone, and macOS downloads as coming soon', () => {
    const comingSoon = svc.getById(1)?.downloads.filter(download => download.comingSoon);
    expect(comingSoon?.map(download => download.platform)).toEqual(['android', 'ios', 'macos']);
    expect(comingSoon?.every(download => download.url === undefined)).toBe(true);
  });

  it('includes the Windows screenshot gallery for Bridgely', () => {
    expect(svc.getById(1)?.screenshots).toHaveLength(3);
  });

  it('includes xConnect screenshots and marks Android as coming soon', () => {
    const xConnect = svc.getById(2);
    expect(xConnect?.name).toBe('xConnect File Manager');
    expect(xConnect?.icon).toBe('/apps/xconnect.svg');
    expect(xConnect?.versions).toEqual({ windows: '1.1' });
    expect(xConnect?.screenshots).toHaveLength(3);
    expect(xConnect?.downloads).toEqual([
      { platform: 'windows', url: 'https://apps.microsoft.com/store/detail/9P4JCWZFNPHT' },
      { platform: 'android', comingSoon: true },
    ]);
  });

  it('adds Calctron for Windows with Android marked as coming soon', () => {
    const calctron = svc.getById(3);
    expect(calctron?.name).toBe('Calctron');
    expect(calctron?.versions).toEqual({ windows: '1.0.0' });
    expect(calctron?.icon).toBe('/apps/calctron.png');
    expect(calctron?.downloads).toEqual([
      {
        platform: 'windows',
        url: 'https://apps.microsoft.com/detail/9NBCXLJ789W2?hl=en-us&gl=DE&ocid=pdpshare',
      },
      { platform: 'android', comingSoon: true },
    ]);
    expect(calctron?.screenshots).toHaveLength(3);
  });
});
