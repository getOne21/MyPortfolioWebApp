import { Component, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-thunder-overlay',
  imports: [],
  templateUrl: './thunder-overlay.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './thunder-overlay.scss'
})
export class ThunderOverlay {
  private theme = inject(ThemeService);
  isThunder = computed(() => this.theme.currentTheme() === 'thunder');
}
