import { Component, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-thunder-overlay',
  imports: [],
  templateUrl: './thunder-overlay.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './thunder-overlay.scss',
  host: { ngSkipHydration: 'true' },
})
export class ThunderOverlay {
  private theme = inject(ThemeService);
  isThunder = computed(() => this.theme.currentTheme() === 'thunder');
}
