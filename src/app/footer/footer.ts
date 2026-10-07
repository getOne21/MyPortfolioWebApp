import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  private ts = inject(TranslationService);
  t          = this.ts.t;
  year       = new Date().getFullYear();

  socials: { icon: string; urlKey: 'github' | 'linkedin' | 'contact'; url: string }[] = [
    { icon: 'code',  urlKey: 'github',   url: '#' },
    { icon: 'work',  urlKey: 'linkedin', url: '#' },
    { icon: 'email', urlKey: 'contact',  url: 'mailto:contact@example.com' },
  ];
}
