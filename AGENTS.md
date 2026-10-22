# AGENTS.md

## Verification

Run before considering a change done:

- `npm run lint` — ESLint (angular-eslint, template accessibility rules)
- `npm run test:ci` — Vitest unit tests (jsdom)
- `npm run build` — production build; also prerenders all `/en/*` and `/de/*` routes (fails if a route crashes during SSR)

## Conventions

- Angular 22, standalone components, signals, `ChangeDetectionStrategy.OnPush`.
- Routes are language-prefixed (`/en/...`, `/de/...`); always build links as `['/', lang, 'page']`.
- Code runs during prerendering: guard browser-only APIs (`window`, timers, `matchMedia`) with `afterNextRender` or `isPlatformBrowser`, and use `inject(DOCUMENT)` instead of the global `document`.
- Every user-facing string goes into both `src/app/i18n/en.ts` and `de.ts`.
- Pin exact dependency versions, published at least 7 days ago; run `npm audit` after changes.
- Never run `npm` or `ng serve` with `sudo` (it leaves root-owned files in `node_modules`/`.angular`).
