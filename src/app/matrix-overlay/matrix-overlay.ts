import {
  Component, ElementRef, ViewChild,
  AfterViewInit, OnDestroy,
  inject, computed, effect, NgZone,
} from '@angular/core';
import { ThemeService } from '../services/theme.service';

interface Col { y: number; speed: number; glitch: boolean; }

@Component({
  selector: 'app-matrix-overlay',
  imports: [],
  templateUrl: './matrix-overlay.html',
  styleUrl:    './matrix-overlay.scss',
})
export class MatrixOverlay implements AfterViewInit, OnDestroy {

  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private theme = inject(ThemeService);
  private zone  = inject(NgZone);

  isMatrix = computed(() => this.theme.currentTheme() === 'matrix');

  private viewReady  = false;
  private animFrame: number | null = null;
  private cols: Col[] = [];

  private readonly FS = 15;   // font-size / column width in px

  /** Katakana block + ASCII symbols — authentic Matrix character set */
  private readonly CHARS =
    'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン' +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' +
    '@#$%^&*<>[]{}|\\/_+=-~';

  private resizeHandler = () => this.resize();

  constructor() {
    /* React to theme changes that happen AFTER the view is initialised */
    effect(() => {
      const active = this.isMatrix();
      if (!this.viewReady) return;
      if (active) this.start(); else this.stop();
    });
  }

  ngAfterViewInit(): void {
    this.viewReady = true;
    window.addEventListener('resize', this.resizeHandler);
    if (this.isMatrix()) this.start();
  }

  ngOnDestroy(): void {
    this.viewReady = false;
    window.removeEventListener('resize', this.resizeHandler);
    this.stop();
  }

  /* ── Animation control ─────────────────────── */

  private start(): void {
    if (this.animFrame !== null) return;       // already running
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    this.resize();

    /* Run outside Angular zone — zero CD overhead per frame */
    this.zone.runOutsideAngular(() => {
      const ctx = canvas.getContext('2d')!;
      const fs  = this.FS;

      const draw = (): void => {
        if (!this.isMatrix()) { this.stop(); return; }

        /* Fade the previous frame slightly — creates the trail */
        ctx.fillStyle = 'rgba(0, 0, 0, 0.055)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < this.cols.length; i++) {
          const col  = this.cols[i];
          const x    = i * fs;
          const y    = col.y;

          if (y < 0) { col.y += col.speed * fs; continue; }

          const char = this.CHARS[Math.floor(Math.random() * this.CHARS.length)];

          if (col.glitch) {
            /* Bright glitch column: white head with strong glow */
            ctx.shadowBlur  = 18;
            ctx.shadowColor = '#00ff41';
            ctx.fillStyle   = '#ffffff';
            ctx.font        = `bold ${fs}px 'Courier New', monospace`;
          } else {
            /* Normal column: bright-green head */
            ctx.shadowBlur  = 8;
            ctx.shadowColor = '#00ff41';
            ctx.fillStyle   = '#00ff41';
            ctx.font        = `${fs}px 'Courier New', monospace`;
          }

          ctx.fillText(char, x, y);
          ctx.shadowBlur = 0;

          col.y += col.speed * fs;

          /* Reset column once it scrolls off-screen */
          if (col.y > canvas.height + fs * 8 && Math.random() > 0.97) {
            col.y      = -(Math.random() * canvas.height * 0.6);
            col.speed  = 0.12 + Math.random() * 0.38;
            col.glitch = Math.random() < 0.08; // ~8% chance of a glitch column
          }
        }

        this.animFrame = requestAnimationFrame(draw);
      };

      this.animFrame = requestAnimationFrame(draw);
    });
  }

  private stop(): void {
    if (this.animFrame !== null) {
      cancelAnimationFrame(this.animFrame);
      this.animFrame = null;
    }
    const canvas = this.canvasRef?.nativeElement;
    if (canvas) {
      canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  private resize(): void {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    const numCols = Math.floor(canvas.width / this.FS);
    this.cols = Array.from({ length: numCols }, () => ({
      y:      -(Math.random() * canvas.height),  // staggered start
      speed:  0.12 + Math.random() * 0.38,
      glitch: Math.random() < 0.08,
    }));
  }
}
