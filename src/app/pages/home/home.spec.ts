import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Home } from './home';
import { MotionPreferenceService } from '../../services/motion-preference.service';

describe('Home carousel', () => {
  function create(reducedMotion: boolean) {
    TestBed.configureTestingModule({
      imports: [Home],
      providers: [
        provideRouter([]),
        { provide: MotionPreferenceService, useValue: { reduced: signal(reducedMotion) } },
      ],
    });
    const fixture = TestBed.createComponent(Home);
    TestBed.tick(); // runs afterNextRender hooks
    return fixture;
  }

  it('wraps around in both directions', () => {
    const home = create(false).componentInstance;
    const count = home.featuredApps.length;

    home.prev();
    expect(home.currentSlide()).toBe(count - 1);
    home.next();
    expect(home.currentSlide()).toBe(0);
  });

  it('autoplays when motion is allowed', () => {
    const fixture = create(false);
    expect(fixture.componentInstance['timer']).not.toBeNull();
    fixture.destroy();
    expect(fixture.componentInstance['timer']).toBeNull();
  });

  it('does not autoplay when reduced motion is preferred', () => {
    const home = create(true).componentInstance;
    expect(home['browserReady']).toBe(true);
    expect(home['timer']).toBeNull();
    home.startAutoPlay();
    expect(home['timer']).toBeNull();
  });
});
