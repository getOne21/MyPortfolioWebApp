import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-terms',
  imports: [MatIconModule, MatExpansionModule],
  templateUrl: './terms.html',
  styleUrl: './terms.scss'
})
export class Terms {
  private ts = inject(TranslationService);
  t          = this.ts.t;
  currentLang = this.ts.currentLang;

  readonly lastUpdated = '2026-08-01';

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString(
      this.currentLang() === 'de' ? 'de-DE' : 'en-GB',
      { year: 'numeric', month: 'long', day: 'numeric' }
    );
  }
}
