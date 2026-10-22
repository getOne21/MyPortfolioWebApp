import { TestBed } from '@angular/core/testing';
import { MotionPreferenceService } from './motion-preference.service';

describe('MotionPreferenceService', () => {
  const original = window.matchMedia;
  afterEach(() => (window.matchMedia = original));

  function mockMatchMedia(matches: boolean) {
    let listener: ((e: { matches: boolean }) => void) | undefined;
    window.matchMedia = vi.fn().mockReturnValue({
      matches,
      addEventListener: (_: string, cb: typeof listener) => (listener = cb),
    });
    return (next: boolean) => listener?.({ matches: next });
  }

  it('reflects the initial OS setting', () => {
    mockMatchMedia(true);
    expect(TestBed.inject(MotionPreferenceService).reduced()).toBe(true);
  });

  it('updates when the OS setting changes', () => {
    const change = mockMatchMedia(false);
    const svc = TestBed.inject(MotionPreferenceService);
    expect(svc.reduced()).toBe(false);
    change(true);
    expect(svc.reduced()).toBe(true);
  });
});
