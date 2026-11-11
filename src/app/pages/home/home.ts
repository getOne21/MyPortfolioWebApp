import { Component, signal, inject, OnDestroy, ChangeDetectionStrategy, afterNextRender, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  siAngular,
  siDotnet,
  siJavascript,
  siKubernetes,
  siMongodb,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siSwift,
  siTerraform,
  siTypescript,
} from 'simple-icons';

import { AppDataService } from '../../services/app-data';
import { TranslationService } from '../../services/translation.service';
import { MotionPreferenceService } from '../../services/motion-preference.service';
import { AppProject, Platform } from '../../models/app.model';

interface OrbitTechDefinition {
  name: string;
  icon?: { hex: string; path: string };
  mark?: string;
  color?: string;
}

interface OrbitTechLogo extends OrbitTechDefinition {
  angle: string;
  counterAngle: string;
}

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
  reducedMotion = this.motion.reduced;

  featuredApps: AppProject[] = this.svc.getFeatured();
  allApps:      AppProject[] = this.svc.getAll();

  currentSlide = signal(0);
  autoPlayPaused = signal(false);
  rotationRunning = signal(false);
  private timer: ReturnType<typeof setInterval> | null = null;
  private focusWithinCarousel = false;
  private readonly motionEffect = effect(() => {
    if (this.reducedMotion()) this.stopAutoPlay();
    else this.startAutoPlay();
  });

  private readonly orbitTechDefinitions: OrbitTechDefinition[] = [
    { name: 'JavaScript', icon: siJavascript },
    { name: 'TypeScript', icon: siTypescript },
    { name: 'Angular', icon: siAngular },
    { name: 'React', icon: siReact },
    { name: 'Node.js', icon: siNodedotjs },
    { name: 'Python', icon: siPython },
    { name: '.NET', icon: siDotnet },
    { name: 'PostgreSQL', icon: siPostgresql },
    { name: 'MongoDB', icon: siMongodb },
    { name: 'Swift', icon: siSwift },
    { name: 'Terraform', icon: siTerraform },
    { name: 'Kubernetes', icon: siKubernetes },
    { name: 'Azure', mark: 'AZ', color: '#0078d4' },
    { name: 'AWS', mark: 'AWS', color: '#ff9900' },
  ];

  readonly orbitTechLogos: OrbitTechLogo[] = this.orbitTechDefinitions.map((tech, index) => {
    const angle = (360 * index) / this.orbitTechDefinitions.length;
    return { ...tech, angle: `${angle}deg`, counterAngle: `${-angle}deg` };
  });

  logoColor(tech: OrbitTechDefinition): string {
    if (tech.color) return tech.color;
    const hex = tech.icon?.hex ?? 'FFFFFF';
    return hex === '000000' || hex === '0F0F11' ? 'var(--text-primary)' : `#${hex}`;
  }

  versionSummary(app: AppProject): string {
    return (Object.entries(app.versions) as [Platform, string][])
      .map(([platform, version]) => `${this.ts.t().platforms[platform]} ${version}`)
      .join(' · ');
  }

  constructor() {
    /* Browser-only: a running interval would block prerendering */
    afterNextRender(() => {
      this.browserReady = true;
      this.startAutoPlay();
    });
  }

  ngOnDestroy() { this.stopAutoPlay(); }

  startAutoPlay(force = false) {
    if (
      !this.browserReady
      || this.reducedMotion()
      || this.autoPlayPaused()
      || this.featuredApps.length < 2
      || this.timer
      || (this.focusWithinCarousel && !force)
    ) return;

    this.timer = setInterval(() => this.next(), 5000);
    this.rotationRunning.set(true);
  }

  stopAutoPlay() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    this.rotationRunning.set(false);
  }

  next() { this.currentSlide.update(i => (i + 1) % this.featuredApps.length); }
  prev() { this.currentSlide.update(i => (i - 1 + this.featuredApps.length) % this.featuredApps.length); }

  toggleAutoPlay() {
    this.autoPlayPaused.update(paused => !paused);
    if (this.autoPlayPaused()) this.stopAutoPlay();
    else this.startAutoPlay(true);
  }

  goTo(index: number) {
    this.currentSlide.set(index);
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  onCarouselFocusIn() {
    this.focusWithinCarousel = true;
    this.stopAutoPlay();
  }

  onCarouselFocusOut(event: FocusEvent) {
    const wrapper = event.currentTarget as HTMLElement;
    if (event.relatedTarget instanceof Node && wrapper.contains(event.relatedTarget)) return;

    this.focusWithinCarousel = false;
    this.startAutoPlay();
  }

  slideLabel(index: number): string {
    return this.t().carousel.slideLabel
      .replace('{index}', String(index))
      .replace('{total}', String(this.featuredApps.length));
  }

  currentSlideAnnouncement(): string {
    return this.t().carousel.slideAnnouncement
      .replace('{project}', this.currentApp.name)
      .replace('{index}', String(this.currentSlide() + 1))
      .replace('{total}', String(this.featuredApps.length));
  }

  get currentApp(): AppProject { return this.featuredApps[this.currentSlide()]; }

}
