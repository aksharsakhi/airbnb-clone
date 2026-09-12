# AGENTS.md: Development & AI Workflow Guidelines

## Project Context
This project is a pixel-perfect, accessible clone of the Airbnb listing page (`Romantic Jacuzzi 1BHK Candolim | Mirashya UG10`), including the **Listing Page**, **Photo Tour Modal**, and **Lightbox Modal**.

## AI Agent Directives
- **Zero Plagiarism**: All components are written from clean, original React & TypeScript architecture.
- **Tech Stack**: Next.js 15+ App Router, React 19, Tailwind CSS, Lucide Icons, Framer Motion.
- **Visual Fidelity**: Respect exact Airbnb spacing, typography (`Inter`), colors (`#ff385c`, `#222222`, `#6a6a6a`, `#dddddd`), and transitions.
- **Accessibility**: Include ARIA roles (`dialog`, `region`), keyboard navigation (ArrowLeft, ArrowRight, Escape), and focus trap in modals.
- **Verification**: Ensure `npm run typecheck` (`npx tsc --noEmit`) passes with 0 errors. DO NOT run `npm run build` directly while `next dev` is running, as Next.js overwrites the active `.next/` cache and causes `__webpack_modules__` runtime corruption on the user's running dev server.
