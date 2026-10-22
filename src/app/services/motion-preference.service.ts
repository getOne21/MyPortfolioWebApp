import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/** Tracks the OS-level `prefers-reduced-motion` setting as a signal. */
@Injectable({ providedIn: 'root' })
export class MotionPreferenceService {
  private readonly query =
    isPlatformBrowser(inject(PLATFORM_ID)) && typeof matchMedia === 'function'
      ? matchMedia('(prefers-reduced-motion: reduce)')
      : null;

  private readonly _reduced = signal(this.query?.matches ?? false);

  /** True when the user asked the OS to minimise non-essential motion */
  readonly reduced = this._reduced.asReadonly();

  constructor() {
    this.query?.addEventListener('change', e => this._reduced.set(e.matches));
  }
}
