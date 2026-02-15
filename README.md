# AI-Native QA Portfolio

Premium portfolio website for a Senior QA Automation Lead & AI-Native Testing Strategist.

## 🎯 Vision

Showcasing the future of quality engineering through an Apple-inspired, AI-Native portfolio that demonstrates:
- Autonomous testing ecosystems
- Self-healing automation frameworks
- AI-driven quality gates
- Leadership in QA transformation

## 📁 Project Structure

```
portfolio/
├── frontend/           # React + Vite + TypeScript + Tailwind
│   ├── src/
│   │   └── features/   # Feature-based architecture
│   └── README.md       # Frontend documentation
├── doc/
│   ├── dev/           # Development rules
│   │   ├── frontend-rules.md
│   │   ├── copy-rules.md
│   │   └── testing-rules.md
│   ├── qa/            # QA automation prompts
│   └── requirements/  # Product requirements & screenshots
└── .cursorrules       # AI orchestration rules
```

## 🚀 Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The landing page will be available at `http://localhost:5173/`

## 🎨 Design Language

### Apple-Inspired Glassmorphism
- Frosted glass effects (`backdrop-blur`)
- Translucent backgrounds (`bg-white/10`)
- Soft borders (`border-white/20`)
- Squircle corners (`rounded-2xl`, `rounded-3xl`)
- Dynamic mesh gradients

### Color Palette
- **Deep Blues**: Trust, technology
- **Dark Purples**: Innovation, premium
- **Indigo**: Depth, sophistication

## 🏗️ Architecture

### Frontend
- **Framework**: React 18 with Vite for lightning-fast HMR
- **Language**: TypeScript in strict mode
- **Styling**: Tailwind CSS v4 with custom Apple-style utilities
- **Icons**: Lucide React (consistent, premium icons)
- **Structure**: Feature-based architecture for scalability

### Design Principles
- **KISS**: Keep It Simple, Stupid
- **YAGNI**: You Aren't Gonna Need It
- **DRY**: Don't Repeat Yourself
- **SOLID**: Single responsibility, composable components
- **Mobile-First**: Responsive from 375px to 2xl

## 🧪 Testing Strategy

### AI-Native Testing (Playwright)
- Self-healing selectors using `data-testid`
- Visual regression testing
- Cross-browser automation
- Parallel execution for speed

### Test Coverage
- Page loads without errors
- Main CTAs are visible and functional
- Lead capture form submission
- Success state displays correctly

## 📝 Copywriting

### Tone & Voice
- **Professional**: Executive-level positioning
- **Visionary**: Forward-thinking, AI-Native focus
- **Authoritative**: Senior leadership expertise
- **Benefit-Driven**: Focus on ROI, scalability, risk mitigation

### Key Messages
- "AI-Native Quality. Zero Bottlenecks."
- "Autonomous Testing" not "Automated Testing"
- "Quality Engineering" not "Testing"
- Focus on business impact: 90% faster feedback, 85% fewer incidents

## 🎯 Key Features

### 1. Hero Section
Premium glass card with:
- Bold AI-Native positioning
- Download Resume CTA (PDF with icon)
- Get in Touch CTA (opens lead modal)

### 2. Social Connectivity
Apple-style dock with:
- X (formerly Twitter)
- LinkedIn
- GitHub

### 3. Lead Capture
Glassmorphism modal featuring:
- Name input
- Work Email input
- "How can I help?" dropdown
- Success confirmation state

### 4. Content Showcase
- **AI-Native Shift**: Autonomous, intelligent, predictive testing
- **Tech Stack**: Playwright, AI Agents, CI/CD integration
- **Leadership Impact**: Metrics-driven results

## 🔧 Development Rules

### Frontend
See `doc/dev/frontend-rules.md` for comprehensive guidelines:
- Feature-based structure (mandatory)
- Zero `any` types
- Mobile-first responsive design
- Accessibility (WCAG AA)
- `data-testid` on all interactive elements

### Testing
See `doc/qa/testing-rules.md` for test automation standards:
- Real user behavior simulation
- Avoid implementation details
- Prefer `data-testid` selectors

### Copywriting
See `doc/dev/copy-rules.md` for brand voice guidelines:
- Minimalist, confident tone
- AI-Native focus
- Senior-level language

## 📱 Responsive Design

- **Mobile**: 375px+ (base Tailwind classes)
- **Tablet**: 768px+ (`md:` modifier)
- **Desktop**: 1024px+ (`lg:` modifier)
- **Large**: 1440px+ (`xl:` modifier)
- **Extra Large**: 1920px+ (`2xl:` modifier)

## ♿ Accessibility

- Semantic HTML (`<main>`, `<section>`, `<button>`)
- ARIA labels on icon-only buttons
- Keyboard navigation (Tab, Enter, Space)
- Visible focus states
- WCAG AA color contrast (4.5:1)
- Alt text on all images

## 🚢 Deployment

```bash
cd frontend
npm run build
```

Production build outputs to `/dist`.

## 📊 Performance

- Vite for instant HMR
- Lazy loading for routes (when applicable)
- Optimized images and assets
- Tree-shaking and code splitting
- Lighthouse score target: 90+

## 🤝 Contributing

This is a personal portfolio project. Development follows the rules in:
- `.cursorrules` (AI orchestration)
- `doc/dev/*` (frontend, copy, testing)

## 📄 License

Private portfolio project. All rights reserved.

---

**Built with**: React + TypeScript + Tailwind CSS + Vite + Lucide Icons  
**Tested with**: Playwright  
**Designed in**: Apple Design Language + Glassmorphism  
**Positioned as**: AI-Native Quality Engineering Leadership
