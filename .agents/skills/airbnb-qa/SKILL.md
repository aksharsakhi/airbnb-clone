---
name: airbnb-qa
description: Specialized QA and Accessibility audit skill for Airbnb clone components
---

# Airbnb QA & Accessibility Audit Skill

## Overview
This skill defines automated verification procedures to ensure that cloned Airbnb components achieve strict pixel fidelity, keyboard accessibility, and state synchronization.

## Verification Checklist

### 1. View Integrity & Modal Behavior
- **Listing Page**:
  - Hero collage displays 5 photos with proper rounded corners.
  - "Show all photos" button with 9-dot grid icon anchored bottom-right.
  - Sticky reservation card remains pinned during scrolling.
- **Photo Tour Overlay**:
  - Modal mounts with `role="dialog"`, `aria-modal="true"`, `aria-label="Photo tour"`.
  - Body scrolling is locked (`overflow: hidden`).
  - Top category thumbnails smoothly scroll into corresponding `#tour-[room]` anchor IDs.
  - Escape key or back chevron returns to the main page and unlocks scroll.
- **Lightbox Single-Photo Viewer**:
  - Displays single active photo with `object-contain` aspect ratio preservation.
  - Displays room category label and photo counter (`X of 21`).
  - Left/right arrow navigation triggers smooth fade transitions.
  - Keyboard navigation:
    - `ArrowLeft`: Navigate to previous photo.
    - `ArrowRight`: Navigate to next photo.
    - `Escape`: Close viewer.
  - Focus trap: cycles tab focus strictly inside modal buttons and restores focus to the trigger on exit.

### 2. URL State Synchronization
- Opening Photo Tour updates URL query params to `?modal=photo-tour`.
- Opening Lightbox updates URL query params to `?modal=photo-tour&modalItem=[photoId]`.
- Closing returns URL to clean pathname without page reload.

### 3. Contrast & Accessibility
- WCAG AA compliant text contrast for `#222222` on white and `#6a6a6a` on gray.
- All interactive buttons have descriptive `aria-label` tags.
- Visible focus rings (`focus-visible:outline-[#ff385c]`).
