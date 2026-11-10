import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { AppDataService } from '../../services/app-data';
import { TranslationService } from '../../services/translation.service';
import { AppProject, Platform, ProjectScreenshot } from '../../models/app.model';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, MatIconModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly apps = inject(AppDataService);
  private readonly ts = inject(TranslationService);

  readonly t = this.ts.t;
  readonly currentLang = this.ts.currentLang;
  readonly catLabel = (key: string) => this.ts.catLabel(key);
  readonly app = this.apps.getBySlug(this.route.snapshot.data['projectSlug'] as string);
  readonly activeScreenshot = signal<ProjectScreenshot | null>(null);
  private readonly screenshotDialog = viewChild<ElementRef<HTMLDialogElement>>('screenshotDialog');
  readonly platformLabels = computed(() => this.t().platforms);

  private readonly platformIcons: Record<Platform, string> = {
    windows: 'computer',
    android: 'phone_android',
    ios: 'phone_iphone',
    macos: 'laptop_mac',
    linux: 'terminal',
  };

  getPlatformIcon(platform: Platform): string {
    return this.platformIcons[platform] ?? 'download';
  }

  getPlatformLabel(platform: Platform): string {
    return this.platformLabels()[platform];
  }

  versionEntries(app: AppProject): { platform: Platform; version: string }[] {
    return (Object.entries(app.versions) as [Platform, string][]).map(([platform, version]) => ({
      platform,
      version,
    }));
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString(
      this.currentLang() === 'de' ? 'de-DE' : 'en-GB',
      { year: 'numeric', month: 'long', day: 'numeric' },
    );
  }

  openScreenshot(screenshot: ProjectScreenshot): void {
    this.activeScreenshot.set(screenshot);
    const dialog = this.screenshotDialog()?.nativeElement;
    if (!dialog || dialog.open) return;

    try {
      if (typeof dialog.showModal === 'function') dialog.showModal();
    } catch {
      // Fall back for environments without native dialog support.
    }
    if (!dialog.open) dialog.setAttribute('open', '');
  }

  closeScreenshot(): void {
    const dialog = this.screenshotDialog()?.nativeElement;
    if (!dialog?.open) return;

    if (typeof dialog.close === 'function') {
      try {
        dialog.close();
        if (!dialog.open) return;
      } catch {
        // Fall back for environments without native dialog support.
      }
    }

    dialog.removeAttribute('open');
    this.activeScreenshot.set(null);
  }

  clearActiveScreenshot(): void {
    this.activeScreenshot.set(null);
  }
}
