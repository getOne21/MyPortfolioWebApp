import { Component, inject, computed } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-thunder-overlay',
  imports: [],
  templateUrl: './thunder-overlay.html',
  styleUrl: './thunder-overlay.scss'
})
export class ThunderOverlay {
  private theme = inject(ThemeService);
  isThunder = computed(() => this.theme.currentTheme() === 'thunder');
}
