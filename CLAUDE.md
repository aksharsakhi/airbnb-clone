# CLAUDE.md: Claude Code & AI Workflow Guidelines

This project is a pixel-perfect, accessible clone of the Airbnb listing page (`Romantic Jacuzzi 1BHK Candolim | Mirashya UG10`), including the **Listing Page**, **Photo Tour Modal**, and **Lightbox Modal**.

## Development Commands
- `npm run dev`: Start Next.js local development server (runs on `http://localhost:3000`)
- `npm run typecheck`: Run TypeScript compiler check (`tsc --noEmit`) - must pass with 0 errors
- `npm run build`: Production Next.js build
- `npm run start`: Start production server

## Architecture & Code Standards
- **Tech Stack**: Next.js 15+ (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons.
- **Zero Plagiarism**: All components are written from clean, original React & TypeScript architecture.
- **Visual Fidelity**: Exact match for Airbnb typography (`Inter`), colors (`#FF385C`, `#222222`, `#6A6A6A`, `#DDDDDD`), responsive spacing, and micro-interactions.
- **Accessibility (WCAG 2.1)**: Full ARIA dialog roles, focus traps, and keyboard navigation (`ArrowLeft`/`ArrowRight` for lightbox navigation, `Escape` to close modals).
- **URL-Driven State**: Modal views sync with URL search params (`?modal=photo-tour`, `?modalItem=[id]`) for deep-linking and browser history support.
