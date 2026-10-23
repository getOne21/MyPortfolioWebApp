import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, MatIconModule],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './footer.scss'
})
export class Footer {
  private ts = inject(TranslationService);
  t          = this.ts.t;
  year       = new Date().getFullYear();

  socials: { icon: string; urlKey: 'contact'; url: string }[] = [
    { icon: 'email', urlKey: 'contact', url: 'mailto:support.tbsoftware@gmail.com' },
  ];
}
