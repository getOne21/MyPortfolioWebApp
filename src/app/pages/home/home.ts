import { Component, signal, computed, inject, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AppDataService } from '../../services/app-data';
import { TranslationService } from '../../services/translation.service';
import { AppProject } from '../../models/app.model';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit, OnDestroy {
  private svc = inject(AppDataService);
  private ts  = inject(TranslationService);

  t        = this.ts.t;
  catLabel = (key: string) => this.ts.catLabel(key);

  featuredApps: AppProject[] = this.svc.getFeatured();
  allApps:      AppProject[] = this.svc.getAll();

  currentSlide = signal(0);
  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnInit()    { this.startAutoPlay(); }
  ngOnDestroy() { this.stopAutoPlay(); }

  startAutoPlay() {
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
