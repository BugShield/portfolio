# Frontend Development Rules (AI-Native)

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React + Vite |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS |
| Icons | Lucide-react only |
| State Management | Redux (selective — see policy below) |
| Testing | Playwright (E2E) |
| Design Source | Figma (pixel-perfect implementation required) |

---

## Architecture: Feature-Based Structure (Mandatory)

All new features must be created inside `frontend/app/src/features/FEATURE_NAME`.

Each feature must follow this exact folder structure:

```
features/
└── FEATURE_NAME/
    ├── services/      # API calls and backend integration
    ├── components/    # Feature-specific UI components
    ├── pages/         # Complete page layouts
    ├── hooks/         # Custom React hooks
    └── types/         # TypeScript interfaces and types
    └── utils/         # For mapping/switching sometimes
```

> **AI Instruction:** When creating a new feature, scaffold this entire structure first before writing any code.

---

## Core Development Principles

### KISS (Keep It Simple, Stupid)
- Write code that is easy to read and understand by other developers.
- Avoid over-engineering. If a simple solution works, use it.
- Prefer clarity over cleverness.
- Break complex logic into smaller, self-explanatory functions.

### YAGNI (You Aren't Gonna Need It)
- Do not implement features, abstractions, or configurations that aren't currently needed.
- Remove unused imports, commented-out code, and dead code immediately.
- No "just in case" code. Build only what is required now.
- Clean up `console.log`, debug statements, and temporary code before committing.

### DRY (Don't Repeat Yourself)
- If you write the same logic twice, extract it into a reusable function or component.
- Create shared utilities in `/utils` or `/lib` for common operations.
- Use custom hooks to encapsulate repeated stateful logic.
- Avoid duplicating type definitions — create shared types in `/types`.

### SOLID Principles (Applied to React/TS)
- **Single Responsibility**: Each component/function should do one thing well.
- **Open/Closed**: Components should be extendable via props, not by modifying their internals.
- **Liskov Substitution**: Child components should be replaceable without breaking parent logic.
- **Interface Segregation**: Don't force components to depend on props they don't use.
- **Dependency Inversion**: Depend on abstractions (interfaces/types), not concrete implementations.

---

## Code Quality & Standards

### TypeScript Rules
- Zero `any` usage. Always define explicit types.
- Use `interface` for object shapes, `type` for unions/intersections.
- Export all types from the feature's `/types` folder.
- Prefer `unknown` over `any` when the type is truly uncertain.

### Component Rules
- **Small and reusable**: Each component should have a single, clear purpose.
- **No inline styles**: Use Tailwind classes exclusively.
- **Semantic HTML**: Use proper tags (`<main>`, `<section>`, `<article>`, `<nav>`, `<button>`, etc.).
- **Composition over inheritance**: Build complex UIs by composing small components.

### Testing & Automation
- Every interactive element must have a `data-testid` attribute for Playwright E2E tests.
- Format: `data-testid="feature-element-action"` (e.g., `data-testid="login-button-submit"`).
- Ensure all buttons, inputs, links, and dynamic content have unique test IDs.

### Accessibility (A11y) — Non-Negotiable
- **ARIA labels**: Add `aria-label` or `aria-labelledby` to all interactive elements without visible text.
- **Keyboard navigation**: Ensure all interactive elements are accessible via `Tab`, `Enter`, and `Space`.
- **Focus states**: Visible focus indicators on all focusable elements (use Tailwind's `focus:` variants).
- **Color contrast**: Follow WCAG AA standards (4.5:1 for normal text).
- **Screen reader support**: Use semantic HTML and ARIA roles where appropriate.
- **Alt text**: All images must have descriptive `alt` attributes.

### Responsive Design (Mobile-First)
- Always write Tailwind classes starting from the mobile breakpoint.
- Scale up using `sm:`, `md:`, `lg:`, `xl:`, `2xl:` modifiers.
- Test all layouts on mobile (375px), tablet (768px), and desktop (1440px) viewports.
- Touch targets must be at least 44x44px for mobile usability.

---

## State Management Policy

### Redux Usage (Selective)

**Use Redux only when:**
- Data already exists in the global store and needs to be reused.
- Multiple unrelated components need access to the same data.

**Do NOT use Redux for:**
- Feature-specific state that doesn't need global access.
- Form state (use `useState` or form libraries like React Hook Form).
- UI state (modals, dropdowns, etc.).

### Preferred Alternatives
| Need | Solution |
|------|----------|
| Simple component state | `useState` |
| Feature-level shared state | `useContext` |
| Server/async state | React Query or SWR (if applicable) |
| Complex stateful logic | Custom hooks in `/hooks` |

---

## UX/UI Standards

### Above the Fold
- Clear Call to Action (CTA) must be visible without scrolling on all devices.
- Primary action buttons should be prominent and easily identifiable.

### Loading & Error States
- Always implement loading states (skeletons, spinners) for async operations.
- Display user-friendly error messages with recovery actions.
- Never leave users in an ambiguous state.

### Design Fidelity
- Follow Figma designs exactly (spacing, colors, typography, layout).
- Use Tailwind's design tokens to match Figma values.
- If design is unclear or missing, ask for clarification before implementing.

---

## AI Behavior Instructions (Cursor-Specific)

### When Creating New Features
1. Scaffold the folder structure first (`services/`, `components/`, `pages/`, `hooks/`, `types/`).
2. Read existing code in similar features to maintain consistency.
3. Check Redux store before creating new state — reuse if data exists.
4. Add `data-testid` attributes to all interactive elements as you build.

### When Modifying Existing Code
1. Do NOT refactor working code unless explicitly requested or strictly necessary.
2. Preserve existing patterns (naming conventions, file structure, coding style).
3. Read the full file context before making changes to avoid breaking dependencies.

### When Writing Components
1. Start with the mobile layout using base Tailwind classes.
2. Add responsive modifiers (`md:`, `lg:`) for larger screens.
3. Include `aria-label` for icon-only buttons and non-text interactive elements.
4. Add `data-testid` to the root element and all interactive children.

### Code Cleanup
1. Remove all `console.log`, debug statements, and commented code before finishing.
2. Delete unused imports and variables.
3. Ensure no `TODO` comments are left without corresponding issues/tickets.

---

## Example Component Template

```tsx
// features/auth/components/LoginButton.tsx

interface LoginButtonProps {
  onLogin: () => void;
  isLoading?: boolean;
}

export const LoginButton = ({ onLogin, isLoading = false }: LoginButtonProps) => {
  return (
    <button
      onClick={onLogin}
      disabled={isLoading}
      data-testid="auth-button-login"
      aria-label="Log in to your account"
      className="
        w-full px-4 py-3
        bg-blue-600 text-white font-semibold rounded-lg
        hover:bg-blue-700
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        md:w-auto md:px-6
      "
    >
      {isLoading ? 'Logging in...' : 'Log In'}
    </button>
  );
};
```

### Vision & Design Fidelity
- Whenever a screenshot is provided, prioritize the visual appearance of the image over any layout assumptions.
- Use the "Visual OCR" technique: identify components (inputs, buttons, cards) and map them to the appropriate folder structure under `features/`.
- If there is any discrepancy between the requirement text and the screenshot, follow the **screenshot for layout** and the **requirement for logic**.

---

## Summary Checklist (AI Self-Review)

Before completing any task, verify:

- [ ] Code follows KISS, YAGNI, DRY, and SOLID principles
- [ ] No `any` types used
- [ ] All interactive elements have `data-testid` attributes
- [ ] Mobile-first Tailwind classes applied
- [ ] Accessibility: ARIA labels, keyboard navigation, focus states
- [ ] No inline styles
- [ ] No unused imports or dead code
- [ ] Redux used only when reusing existing global state
- [ ] Figma design followed precisely
- [ ] Semantic HTML used throughout
- [ ] Loading and error states implemented
