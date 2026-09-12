# AI Subagent & Skill Configuration

This directory contains the autonomous AI subagent specifications and quality assurance skills used throughout the development lifecycle of this Airbnb Clone project.

## Directory Overview

```
subagent-config/
├── AGENTS.md                          # Global repository workflow directives and safety guardrails
├── subagents/
│   └── visual-parity-checker.md       # Visual parity subagent for pixel-matching against reference UI
└── skills/
    ├── airbnb-qa/
    │   └── SKILL.md                   # Accessibility, WCAG 2.1, keyboard navigation, and modal audits
    └── code-review/
        └── SKILL.md                   # TypeScript standards, component modularity, and clean code rules
```

## Subagent Details

### 1. Visual Parity Checker (`subagents/visual-parity-checker.md`)
- **Role**: Validates rendered DOM against the target reference (`https://airbnb-clone-umber-two.vercel.app`).
- **Focus Areas**:
  - Exact typography (`Inter`, weights 400/500/600, line heights).
  - Exact brand colors (`#ff385c`, `#222222`, `#717171`, `#ebebeb`, `#dddddd`).
  - Pixel-perfect spacing, padding, margins, and responsive column ratios.
  - Verification of all 3 required views: Main Listing Page, Photo Tour Modal, and Single-Photo Lightbox.

### 2. Airbnb QA & Accessibility Skill (`skills/airbnb-qa/SKILL.md`)
- **Role**: Ensures accessibility and interactive parity.
- **Focus Areas**:
  - Focus trap inside modals (`focus-trap-react`).
  - Full keyboard control (`ArrowLeft`, `ArrowRight`, `Escape`, `Tab`).
  - ARIA attributes (`role="dialog"`, `aria-modal="true"`, `aria-label`).
  - Sticky header scroll-spy and URL synchronization (`#photos`, `#amenities`, `#reviews`, `#location`).

### 3. Code Review & TypeScript Standard Skill (`skills/code-review/SKILL.md`)
- **Role**: Enforces zero-compromise code health.
- **Focus Areas**:
  - `npx tsc --noEmit` must pass with 0 errors.
  - Explicit typing on all props, data models, and event handlers.
  - Zero lifting or scraping of third-party bundle code (zero plagiarism guarantee).
  - Component decomposition into small, maintainable units.
