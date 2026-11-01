import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-imprint',
  imports: [MatIconModule],
  templateUrl: './imprint.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './imprint.scss',
})
export class Imprint {
  private readonly ts = inject(TranslationService);
  readonly t = this.ts.t;
}
