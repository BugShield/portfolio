# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `frontend/`:

```bash
npm run dev          # Vite dev server at http://localhost:5173
npm run build        # TypeScript check + Vite production build → /dist
npm run type-check   # TypeScript (no emit)
npm run lint         # ESLint
npm run lint:fix     # ESLint with auto-fix
npm run preview      # Preview production build locally
```

## Architecture

Single-page React 19 + TypeScript 5.9 + Vite 7 portfolio site. No routing — one landing page.

**Source layout** (`frontend/src/`):

- `features/landing/` — the entire application lives here
  - `components/` — Hero, Header, SocialDock, ContentSections, LeadCaptureModal
  - `pages/LandingPage.tsx` — root page component, owns modal open/close state
  - `types/index.ts` — shared TypeScript interfaces
- `App.tsx` / `main.tsx` — thin wrappers that mount `<LandingPage />`

**State**: React `useState` only. `isLeadModalOpen` lives in `LandingPage` and is passed down as props to `Header`, `Hero` (to open), and `LeadCaptureModal` (to close). No Redux or context.

## Conventions

**Styling**: Tailwind CSS only — no CSS files (except `index.css` for global imports and custom animation delays), no inline styles. Mobile-first: base classes for mobile, `sm:` / `md:` / `lg:` / `xl:` / `2xl:` for larger breakpoints. Design language is Apple-inspired glassmorphism: `backdrop-blur-*`, `bg-white/95`, `rounded-2xl` / `rounded-3xl`, subtle scale/glow hover effects.

**TypeScript**: strict mode, zero `any` (use `unknown`), `noUnusedLocals`, `noUnusedParameters` all enforced.

**Naming**:
- Components: PascalCase files with a matching `ComponentNameProps` interface
- Event handlers: `handleEventName` pattern
- `data-testid` attributes: `kebab-case` with feature prefix (e.g., `lead-modal-input-name`, `hero-button-download-resume`) — all interactive elements must have one

**Copywriting tone**: "Quality Engineering" not "Testing", "Autonomous Testing" not "Automated Testing". Executive/ROI framing throughout.

## Key Docs

- `doc/dev/frontend-rules.md` — detailed coding standards (SOLID, DRY, YAGNI, feature-based arch)
- `doc/dev/copy-rules.md` — copywriting guidelines and tone rules
- `doc/qa/testing-rules.md` — Playwright E2E strategy and test ID conventions
- `.cursorrules` — AI orchestration workflow rules
- `DEPLOYMENT.md` — hosting options, performance targets (Lighthouse 90+, FCP < 1.5s)
