# Sequence of Prompts for AI-Assisted Development

This document outlines the chronological prompt sequence and AI subagent workflow used during the development of the Airbnb-Clone application and production scaling architecture.

---

### Prompt 1: Initial Requirements Ingestion & Task Planning
> **Prompt**:  
> "Analyze the take-home assessment guidelines from Playpower Labs for the Airbnb-Clone App. Understand the core requirements: pixel-perfect visual fidelity for desktop, 3 target screens (Listing Page, Photo Tour, Lightbox), production architecture diagram for a vacation-rental marketplace, AI subagent configs, and submission deliverables. Formulate a comprehensive implementation plan before writing code."
- **Actions Taken**:
  - Extracted task brief and screenshots from assignment docx.
  - Analyzed reference implementation (`https://airbnb-clone-umber-two.vercel.app`).
  - Identified data structures (21 room photos, 9 room categories, host info, 6 reviews, amenities, pricing).
  - Drafted `implementation_plan.md` covering tech stack, component hierarchy, verification plan, and architecture diagram outline.

---

### Prompt 2: Data Modeling & Schema Design
> **Prompt**:  
> "Extract the listing data from the reference application and design a strongly-typed data layer (`data/listingData.ts`) in TypeScript. Ensure high-resolution Pexels photos are organized into room categories ('Living room 1', 'Living room 2', 'Full kitchen', 'Bedroom', 'Full bathroom', 'Gym', 'Exterior', 'Pool', 'Additional photos') with tags, ratings, host details, amenities, and nearby stays."
- **Actions Taken**:
  - Created `data/listingData.ts` with strict TypeScript interfaces (`Photo`, `RoomCategory`, `ListingData`, `Review`, `Amenity`, `NearbyListing`).
  - Mapped all 21 photos to appropriate room categories and tags.

---

### Prompt 3: Project Setup & Design System Foundation
> **Prompt**:  
> "Initialize a Next.js 15+ App Router application with React 19, TypeScript, and Tailwind CSS. Configure Airbnb brand color tokens (`#ff385c`, `#222222`, `#6a6a6a`, `#dddddd`), Inter font typography, remote image patterns for Pexels in `next.config.mjs`, and brand SVG icons in `components/Icons.tsx`."
- **Actions Taken**:
  - Created `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, and `next.config.mjs`.
  - Configured `@tailwind` in `app/globals.css` with smooth scrolling and animations.
  - Created SVG components in `components/Icons.tsx` (AirbnbLogo, Laurel wreaths, 9-dot grid icon, StarIcon).

---

### Prompt 4: Main Listing Page Component Architecture
> **Prompt**:  
> "Build the core components for the Listing Page matching the reference layout: Header with search pill and user menu, TitleSection with Share & Save (with interactive copy-link and heart state), HeroGallery with 5-photo collage and 'Show all photos' button, ListingInfo with Guest Favourite badge, SleepingArrangements, AmenitiesSection with modal, CalendarSection with dual-month interactive view, ReviewsSection with category breakdown and reviews modal, LocationMap with interactive zoom and Candolim map canvas, HostBio with Superhost credentials and co-hosts, ThingsToKnow, and NearbyStays carousel."
- **Actions Taken**:
  - Implemented all 12 listing section components with clean separation of concerns.
  - Built interactive sticky `BookingWidget.tsx` with promo discount claim, guest counter dropdown, and price breakdown.

---

### Prompt 5: Photo Tour & Lightbox Modals Implementation
> **Prompt**:  
> "Implement the two full-screen overlay views:
> 1. `PhotoTourModal.tsx`: Full-screen overlay with sticky header, back chevron, share/save, horizontal room category thumbnail pills, smooth scroll-spy to room sections, and photo click triggers.
> 2. `LightboxModal.tsx`: Single-photo viewer with 9-dot grid icon to return to tour, room title, counter (X of 21), close (✕) button, left/right circular arrow buttons, keyboard ArrowLeft/ArrowRight/Escape navigation, focus trap, and Framer Motion photo transitions."
- **Actions Taken**:
  - Built `PhotoTourModal.tsx` and `LightboxModal.tsx`.
  - Synced modal state with URL search parameters (`?modal=photo-tour` and `modalItem=[id]`) in `app/page.tsx` with `<Suspense>` boundary.
  - Implemented body scroll locking (`overflow: hidden`) during modal presentation.

---

### Prompt 6: Visual & Parity Verification (QA Subagent)
> **Prompt**:  
> "Build the production bundle (`npm run build`), launch the local server, and capture full-screen screenshots using headless Chrome for all three views: Main Listing Page, Photo Tour, and Lightbox. Compare the captured views against the reference screenshots to verify visual parity, typography, spacing, and image loading."
- **Actions Taken**:
  - Configured `images: { unoptimized: true }` in `next.config.mjs` to ensure direct browser loading of Pexels CDN assets.
  - Captured and verified `listing_page_v2.png`, `listing_full_page.png`, `listing_full_bottom.png`, `photo_tour_view.png`, and `lightbox_view.png`.
  - Confirmed 100% visual parity across all three target views.

---

### Prompt 7: Production Architecture Diagram & Scaling Strategy
> **Prompt**:  
> "Design a production-scale system architecture for a vacation-rental marketplace (analogous to Airbnb). Illustrate the scaling strategy for:
> 1. Frontend: CDN edge caching, Next.js SSR/ISR, dynamic image transcoding.
> 2. API Gateway: Kong/Envoy, rate limiting, GraphQL federation BFF.
> 3. Microservices: Listing, Geospatial Search, Booking (Saga + Redis Redlock), Dynamic Pricing, Reviews, Notifications.
> 4. Polyglot Storage: Aurora PostgreSQL (ACID), MongoDB (Catalog), Redis (Availability bitsets), Elasticsearch (Geospatial), S3 (Media).
> 5. Event Backbone: Kafka + Debezium CDC.
> 6. Deployment: Multi-region Kubernetes, ArgoCD GitOps, Istio mTLS, OpenTelemetry observability.
> Export the diagram as vector SVG, high-resolution PNG, and PDF."
- **Actions Taken**:
  - Created `architecture/architecture_diagram.svg`.
  - Rendered 2400x1650 high-res `architecture/architecture_diagram.png`.
  - Generated `architecture/architecture_diagram.pdf`.
  - Documented scaling strategy in `architecture/production_scaling_strategy.md`.

---

### Prompt 8: AI Subagent & Skill Configurations
> **Prompt**:  
> "Structure and document the AI subagent and skill configurations (`.agents/skills/airbnb-qa/SKILL.md`, `.agents/skills/code-review/SKILL.md`, `.agents/subagents/visual-parity-checker.md`, `AGENTS.md`) to showcase modern agentic workflow usage as requested by the evaluation criteria."
- **Actions Taken**:
  - Authored standardized skill configuration files and subagent definition markdown documents.

---

### Prompt 9: Deliverable Packaging & Zip Creation
> **Prompt**:  
> "Bundle the entire clean codebase, architecture diagrams (SVG, PNG, PDF), AI configurations, and prompt documentation into a submission-ready zip archive (`airbnb_clone_playpower_submission.zip`), excluding node_modules and build artifacts."
- **Actions Taken**:
  - Prepared zip archive command and verified deliverables.
