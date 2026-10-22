import { Component, signal, computed, inject, OnDestroy, ChangeDetectionStrategy, afterNextRender } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppDataService } from '../../services/app-data';
import { TranslationService } from '../../services/translation.service';
import { MotionPreferenceService } from '../../services/motion-preference.service';
import { AppProject } from '../../models/app.model';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './home.scss'
})
export class Home implements OnDestroy {
  private svc    = inject(AppDataService);
  private ts     = inject(TranslationService);
  private motion = inject(MotionPreferenceService);
  private browserReady = false;

  t        = this.ts.t;
  catLabel = (key: string) => this.ts.catLabel(key);

  featuredApps: AppProject[] = this.svc.getFeatured();
  allApps:      AppProject[] = this.svc.getAll();

  currentSlide = signal(0);
  private timer: ReturnType<typeof setInterval> | null = null;

  constructor() {
    /* Browser-only: a running interval would block prerendering */
    afterNextRender(() => {
      this.browserReady = true;
      this.startAutoPlay();
    });
  }

  ngOnDestroy() { this.stopAutoPlay(); }

  startAutoPlay() {
    if (!this.browserReady || this.motion.reduced() || this.timer) return;
    this.timer = setInterval(() => this.next(), 5000);
  }

  stopAutoPlay() {
    if (this.timer) { clearInterval(this.timer); this.timer = null; }
  }

  next() { this.currentSlide.update(i => (i + 1) % this.featuredApps.length); }
  prev() { this.currentSlide.update(i => (i - 1 + this.featuredApps.length) % this.featuredApps.length); }

  goTo(index: number) {
    this.currentSlide.set(index);
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  get currentApp(): AppProject { return this.featuredApps[this.currentSlide()]; }

  /** Reactive stat labels — rebuild whenever the language switches */
  stats = computed(() => [
    { value: this.svc.getAll().length + '+', label: this.t().stats.appsReleased },
    { value: '50k+',                         label: this.t().stats.downloads },
    { value: '4.8★',                         label: this.t().stats.avgRating },
    { value: '3',                             label: this.t().stats.platforms },
  ]);
}
