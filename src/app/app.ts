import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { SeoService } from './services/seo.service';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    <a class="skip-link" href="#main-content">{{ t().nav.skipToContent }}</a>
    <app-navbar />
    <main id="main-content" tabindex="-1">
      <router-outlet />
    </main>
    <app-footer />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.scss'
})
export class App {
  readonly t = inject(TranslationService).t;

  constructor() {
    inject(SeoService);
  }
}
