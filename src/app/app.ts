import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { ThunderOverlay } from './thunder-overlay/thunder-overlay';
import { MatrixOverlay } from './matrix-overlay/matrix-overlay';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ThunderOverlay, MatrixOverlay],
  template: `
    <app-thunder-overlay />
    <app-matrix-overlay />
    <app-navbar />
    <main>
      <router-outlet />
    </main>
    <app-footer />
  `,
  styleUrl: './app.scss'
})
export class App {}
