import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { routes } from '../../app.routes';

describe('ProjectDetail', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
  });

  it('renders project screenshots, requirements, downloads, and release notes', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/en/projects/bridgely');

    expect(document.querySelector('app-project-detail h1')?.textContent?.trim()).toBe('Bridgely');
    expect(document.querySelector('.detail-hero')?.firstElementChild?.classList.contains('detail-identity')).toBe(true);
    expect(document.querySelectorAll('.detail-gallery figure')).toHaveLength(3);
    expect(document.querySelector('.requirements-card')?.textContent).toContain('Windows 10 version 1809');
    expect(document.querySelector('.detail-downloads')?.textContent).toContain('v1.2');
    expect(document.querySelectorAll('.release-entry')).toHaveLength(2);
    expect(document.querySelector('.release-list')?.textContent).toContain('Android 8.0 (API 26)');
  });

  it('renders the German detail page with localized release notes', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/de/projects/calctron');

    expect(document.querySelector('app-project-detail h1')?.textContent?.trim()).toBe('Calctron');
    expect(document.querySelector('.section-heading h2')?.textContent).toContain('Screenshots');
    expect(document.querySelector('.release-list')?.textContent).toContain('Microsoft-Store-Pakete');
    expect(document.querySelector('.requirements-card')?.textContent).toContain('Windows 10, Version 1809');
  });

  it('keeps screenshot zoom on the detail page', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/en/projects/bridgely');

    const trigger = document.querySelector('.detail-screenshot') as HTMLButtonElement;
    trigger.click();
    harness.fixture.detectChanges();

    const dialog = document.querySelector('.screenshot-lightbox') as HTMLDialogElement;
    expect(dialog.open).toBe(true);
    expect(dialog.querySelector('.lightbox-content img')).not.toBeNull();

    (dialog.querySelector('.lightbox-close') as HTMLButtonElement).click();
    harness.fixture.detectChanges();
    expect(dialog.open).toBe(false);
  });
});
