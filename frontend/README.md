# AI-Native QA Portfolio - Frontend

Premium, Apple-inspired portfolio landing page for a Senior QA Automation Lead & AI-Native Testing Strategist.

## 🎨 Design System

- **Visual Style**: Glassmorphism with frosted glass effects
- **Background**: Dynamic mesh gradients (deep blues, purples, indigos)
- **Typography**: San Francisco-style fonts (Apple design language)
- **Layout**: Spacious, centered, card-based
- **Components**: Squircle corners (rounded-2xl/3xl), translucent effects

## 🚀 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 18 + Vite |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Testing | Playwright (E2E) |

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Server will start at `http://localhost:5173/` (or next available port).

## 🏗️ Architecture

Feature-based structure following enterprise patterns:

```
src/
└── features/
    └── landing/
        ├── components/    # UI components
        │   ├── Hero.tsx
        │   ├── SocialDock.tsx
        │   ├── LeadCaptureModal.tsx
        │   └── ContentSections.tsx
        ├── pages/         # Page layouts
        │   └── LandingPage.tsx
        └── types/         # TypeScript interfaces
            └── index.ts
```

## ✨ Key Features

### 1. Hero Section
- Bold AI-Native positioning headline
- Glass-styled CTAs (Download Resume, Get in Touch)
- Responsive glassmorphism card

### 2. Social Dock
- Apple-style floating dock
- Links to X (Twitter), LinkedIn, GitHub
- Smooth hover animations and scale effects

### 3. Lead Capture Modal
- Premium glass effect modal
- Fields: Name, Work Email, Inquiry type
- Success state with confirmation message

### 4. Content Sections
- **AI-Native Shift**: Autonomous testing, intelligent coverage, predictive quality
- **Tech Stack**: Playwright, AI Agents, CI/CD integration
- **Leadership & Impact**: Metrics-driven results (90% faster feedback, 85% fewer incidents)

## 🎯 Design Principles

- **KISS**: Simple, readable code
- **YAGNI**: No over-engineering
- **DRY**: Reusable components and utilities
- **SOLID**: Single responsibility, composable components
- **Mobile-First**: Responsive from 375px to 2xl breakpoints

## ♿ Accessibility

- All interactive elements have `data-testid` attributes
- ARIA labels on icon-only buttons
- Keyboard navigation support
- WCAG AA color contrast standards
- Semantic HTML throughout

## 📱 Responsive Breakpoints

- Mobile: 375px (base)
- Tablet: 768px (md)
- Desktop: 1024px (lg)
- Large: 1440px (xl)
- Extra Large: 1920px (2xl)

## 🧪 Testing

```bash
npm run test:e2e
```

All components include `data-testid` attributes for reliable E2E testing with Playwright.

## 🚢 Build

```bash
npm run build
```

Production-optimized build output in `/dist`.

## 📝 Copy Tone

- Professional, visionary, authoritative
- Focus on "Quality Engineering" not "Testing"
- Benefit-driven language
- Executive-level positioning
- American English

## 🎨 Color Palette

- **Primary**: Blue 500-900 (trust, technology)
- **Secondary**: Purple 500-900 (innovation, premium)
- **Accent**: Indigo 950 (depth, sophistication)
- **Glass**: White with 10-30% opacity
- **Text**: White with 70-100% opacity

## 📄 License

Private portfolio project.
