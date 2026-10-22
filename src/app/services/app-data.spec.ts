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
});
