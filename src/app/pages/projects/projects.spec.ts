import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Projects } from './projects';

describe('Projects page overview', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ imports: [Projects], providers: [provideRouter([])] });
  });

  it('shows Bridgely versions separately for Windows and Android', () => {
    localStorage.setItem('portfolio-lang', 'en');
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const bridgelyCard = Array.from(
      fixture.nativeElement.querySelectorAll('.project-card') as NodeListOf<HTMLElement>
    ).find(card => card.querySelector('h2')?.textContent?.trim() === 'Bridgely');
    const versionText = bridgelyCard?.querySelector('.card-category')?.textContent;

    expect(versionText).toContain('Windows 1.2');
    expect(versionText).toContain('Android 1.2');
  });

  it('exposes the selected category through pressed state', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const chips = Array.from(
      fixture.nativeElement.querySelectorAll('.filter-chip') as NodeListOf<HTMLButtonElement>
    );
    expect(chips[0].getAttribute('aria-pressed')).toBe('true');

    const utilities = chips.find(chip => chip.textContent?.trim() === 'Utilities');
    utilities?.click();
    fixture.detectChanges();

    expect(utilities?.getAttribute('aria-pressed')).toBe('true');
    expect(fixture.nativeElement.querySelectorAll('.project-card')).toHaveLength(2);
  });

  it('keeps full project content on the detail pages', () => {
    localStorage.setItem('portfolio-lang', 'en');
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();
    const cards = Array.from(
      fixture.nativeElement.querySelectorAll('.project-card') as NodeListOf<HTMLElement>
    );
    for (const card of cards) {
      expect(card.querySelector('.card-desc')?.textContent?.trim().length).toBeLessThan(240);
      expect(card.querySelector('.card-tags')).toBeNull();
      expect(card.querySelector('.screenshot-gallery')).toBeNull();
      expect(card.querySelector('.download-section')).toBeNull();
      expect(card.querySelector('.expanded-content')).toBeNull();
      expect(card.querySelector('.expand-btn')).toBeNull();
    }
  });

  it('shows a visible details link for every project card', () => {
    localStorage.setItem('portfolio-lang', 'en');
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const cards = Array.from(
      fixture.nativeElement.querySelectorAll('.project-card') as NodeListOf<HTMLElement>
    );
    expect(cards).toHaveLength(3);
    for (const card of cards) {
      const link = card.querySelector('.card-details-button') as HTMLAnchorElement;
      expect(link.textContent).toContain('Project details');
      expect(link.getAttribute('href')).toContain('/en/projects/');
    }
  });

});
