import { TestBed } from '@angular/core/testing';

import { Projects } from './projects';

describe('Projects page screenshots', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ imports: [Projects] });
  });

  it('shows Bridgely versions separately for Windows and Android', () => {
    localStorage.setItem('portfolio-lang', 'en');
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const bridgelyCard = Array.from(
      fixture.nativeElement.querySelectorAll('.project-card') as NodeListOf<HTMLElement>
    ).find(card => card.querySelector('h2')?.textContent?.trim() === 'Bridgely');
    const versionText = bridgelyCard?.querySelector('.card-category')?.textContent;

    expect(versionText).toContain('Windows 1.0');
    expect(versionText).toContain('Android 1.2');
  });

  it('shows the matching version on each downloadable platform button', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();
    const cards = Array.from(
      fixture.nativeElement.querySelectorAll('.project-card') as NodeListOf<HTMLElement>
    );
    const bridgelyCard = cards.find(card => card.querySelector('h2')?.textContent?.trim() === 'Bridgely');
    const calctronCard = cards.find(card => card.querySelector('h2')?.textContent?.trim() === 'Calctron');

    expect(
      bridgelyCard?.querySelector('.download-btn.windows .dl-version')?.textContent?.trim()
    ).toBe('v1.0');
    expect(bridgelyCard?.querySelector('.download-btn.android .dl-version')).toBeNull();
    expect(
      calctronCard?.querySelector('.download-btn.windows .dl-version')?.textContent?.trim()
    ).toBe('v1.0.0');
  });

  it('shows Calctron screenshots before the project details are expanded', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const calctronCard = Array.from(
      fixture.nativeElement.querySelectorAll('.project-card') as NodeListOf<HTMLElement>
    ).find(card => card.querySelector('h2')?.textContent?.trim() === 'Calctron');

    expect(calctronCard?.querySelectorAll('.screenshot-card img')).toHaveLength(3);
    expect(calctronCard?.querySelector('.expanded-content')).toBeNull();
  });

  it('opens a screenshot in a zoom dialog and closes it with the dialog control', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const trigger = fixture.nativeElement.querySelector('.screenshot-trigger') as HTMLButtonElement;
    trigger.click();
    fixture.detectChanges();

    const dialog = fixture.nativeElement.querySelector('.screenshot-lightbox') as HTMLDialogElement;
    expect(dialog.open).toBe(true);
    expect(dialog.querySelector('.screenshot-lightbox-image')).not.toBeNull();

    const closeButton = dialog.querySelector('.screenshot-lightbox-close') as HTMLButtonElement;
    closeButton.click();
    fixture.detectChanges();

    expect(dialog.open).toBe(false);
    expect(fixture.componentInstance.activeScreenshot()).toBeNull();
  });
});
