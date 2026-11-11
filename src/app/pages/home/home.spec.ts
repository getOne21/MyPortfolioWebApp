import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Home } from './home';
import { MotionPreferenceService } from '../../services/motion-preference.service';
import { AppDataService } from '../../services/app-data';

describe('Home carousel', () => {
  function create(reducedMotion: boolean, multipleSlides = false) {
    const data = new AppDataService();
    const featured = data.getFeatured();
    TestBed.configureTestingModule({
      imports: [Home],
      providers: [
        provideRouter([]),
        {
          provide: AppDataService,
          useValue: {
            getFeatured: () => multipleSlides ? [...featured, data.getById(2)!] : featured,
            getAll: () => data.getAll(),
          },
        },
        { provide: MotionPreferenceService, useValue: { reduced: signal(reducedMotion) } },
      ],
    });
    const fixture = TestBed.createComponent(Home);
    TestBed.tick(); // runs afterNextRender hooks
    return fixture;
  }

  it('wraps around in both directions', () => {
    const home = create(false, true).componentInstance;
    const count = home.featuredApps.length;

    home.prev();
    expect(home.currentSlide()).toBe(count - 1);
    home.next();
    expect(home.currentSlide()).toBe(0);
  });

  it('does not autoplay a single featured project', () => {
    const fixture = create(false);
    expect(fixture.componentInstance['timer']).toBeNull();
    fixture.destroy();
    expect(fixture.componentInstance['timer']).toBeNull();
  });

  it('autoplays multiple projects and provides pause/resume controls', () => {
    const fixture = create(false, true);
    const home = fixture.componentInstance;
    home.startAutoPlay();
    expect(home['timer']).not.toBeNull();

    home.toggleAutoPlay();
    expect(home.autoPlayPaused()).toBe(true);
    expect(home['timer']).toBeNull();

    home.toggleAutoPlay();
    expect(home.autoPlayPaused()).toBe(false);
    expect(home['timer']).not.toBeNull();
    fixture.destroy();
  });

  it('pauses rotation while keyboard focus is inside the carousel', () => {
    const fixture = create(false, true);
    const home = fixture.componentInstance;
    home.startAutoPlay();

    home.onCarouselFocusIn();
    expect(home['timer']).toBeNull();

    home.onCarouselFocusOut({
      currentTarget: document.createElement('div'),
      relatedTarget: null,
    } as unknown as FocusEvent);
    expect(home['timer']).not.toBeNull();
    fixture.destroy();
  });

  it('does not autoplay when reduced motion is preferred', () => {
    const home = create(true, true).componentInstance;
    expect(home['browserReady']).toBe(true);
    expect(home['timer']).toBeNull();
    home.startAutoPlay();
    expect(home['timer']).toBeNull();
  });

  it('hides inactive slides from keyboard and screen-reader navigation', () => {
    const fixture = create(false, true);

    const region = fixture.nativeElement.querySelector('.carousel-wrapper') as HTMLElement;
    const slides = Array.from(
      fixture.nativeElement.querySelectorAll('.carousel-slide') as NodeListOf<HTMLElement>
    );

    expect(region.getAttribute('aria-roledescription')).toBe('carousel');
    expect(region.getAttribute('aria-label')).toBe('Featured projects carousel');
    expect(slides).toHaveLength(2);
    expect(slides[0].getAttribute('aria-hidden')).toBeNull();
    expect(slides[1].getAttribute('aria-hidden')).toBe('true');
    expect(slides[1].hasAttribute('inert')).toBe(true);
    expect(fixture.nativeElement.querySelector('.carousel-rotation-toggle')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('.dot[aria-current="true"]')).not.toBeNull();
    fixture.destroy();
  });
});
