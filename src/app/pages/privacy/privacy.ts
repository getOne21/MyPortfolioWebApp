import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-privacy',
  imports: [MatIconModule, MatExpansionModule],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class Privacy {
  private ts   = inject(TranslationService);
  t            = this.ts.t;
  currentLang  = this.ts.currentLang;

  readonly lastUpdated = '2026-08-20';

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString(
      this.currentLang() === 'de' ? 'de-DE' : 'en-GB',
      { year: 'numeric', month: 'long', day: 'numeric' },
    );
  }
}
