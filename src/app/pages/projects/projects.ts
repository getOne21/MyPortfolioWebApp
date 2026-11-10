import {
  Component,
  signal,
  inject,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { AppDataService } from '../../services/app-data';
import { TranslationService } from '../../services/translation.service';
import { AppProject, Platform } from '../../models/app.model';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, MatIconModule],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './projects.scss'
})
export class Projects {
  private svc = inject(AppDataService);
  private ts  = inject(TranslationService);

  t           = this.ts.t;
  currentLang = this.ts.currentLang;
  catLabel    = (key: string) => this.ts.catLabel(key);

  allApps: AppProject[] = this.svc.getAll();

  /** Unique English category keys from data */
  private rawCategories = ['All', ...new Set(this.allApps.map(a => a.category))];

  selectedCategory = signal('All');

  /** Localised filter label list — reactive computed so it updates on language switch */
  filterChips = computed(() =>
    this.rawCategories.map(k => ({ key: k, label: this.ts.catLabel(k) }))
  );

  filteredApps = computed(() => {
    const cat = this.selectedCategory();
    return cat === 'All' ? this.allApps : this.allApps.filter(a => a.category === cat);
  });

  versionSummary(app: AppProject): string {
    return (Object.entries(app.versions) as [Platform, string][])
      .map(([platform, version]) => `${this.t().platforms[platform]} ${version}`)
      .join(' · ');
  }

  filterBy(cat: string)    { this.selectedCategory.set(cat); }
}
