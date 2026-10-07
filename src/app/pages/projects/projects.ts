import { Component, signal, inject, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AppDataService } from '../../services/app-data';
import { TranslationService } from '../../services/translation.service';
import { AppProject, Platform } from '../../models/app.model';

@Component({
  selector: 'app-projects',
  imports: [MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './projects.html',
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

  expandedId = signal<number | null>(null);

  private readonly platformIcons: Record<Platform, string> = {
    windows: 'computer',
    android: 'phone_android',
    macos:   'laptop_mac',
    linux:   'terminal',
  };

  /** Reactive label map so platform names update on language switch */
  platformLabels = computed(() => this.t().platforms);

  getPlatformIcon(p: Platform):  string { return this.platformIcons[p] ?? 'download'; }
  getPlatformLabel(p: Platform): string { return this.platformLabels()[p]; }

  toggleExpand(id: number) { this.expandedId.update(v => (v === id ? null : id)); }
  filterBy(cat: string)    { this.selectedCategory.set(cat); }

  /** Format a date string with the active locale */
  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString(
      this.currentLang() === 'de' ? 'de-DE' : 'en-GB',
      { year: 'numeric', month: 'long', day: 'numeric' }
    );
  }
}
