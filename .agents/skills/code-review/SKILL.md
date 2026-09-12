---
name: code-review
description: Code quality, modularity, and TypeScript standards for Airbnb clone project
---

# Code Review & Architecture Quality Skill

## Core Principles
1. **Component Modularity**:
   - Keep components single-purpose: `Header`, `HeroGallery`, `ListingInfo`, `BookingWidget`, `ReviewsSection`, `LocationMap`, `HostBio`, `PhotoTourModal`, `LightboxModal`.
   - Separate static listing data models into `data/listingData.ts` with strict TypeScript interfaces.
2. **Next.js & React 19 Best Practices**:
   - Wrap client-side search parameter consumers in `<Suspense>` boundaries to allow seamless static prerendering.
   - Use `Image` component with remote optimization rules in `next.config.mjs`.
   - Prevent hydration mismatches by ensuring consistent client-server date formatting.
3. **Styling Standards**:
   - Consistent brand color palette: Airbnb Red `#ff385c`, charcoal `#222222`, gray `#6a6a6a`, borders `#dddddd`.
   - Responsive flex and grid structures (desktop 65%/35% split, tablet 1-col, mobile collapses cleanly).
