# Airbnb Clone - Take-Home Task Submission Instructions

> **Candidate**: Sheela Akshar Sakhi  
> **Reference App**: [https://airbnb-clone-umber-two.vercel.app](https://airbnb-clone-umber-two.vercel.app)  
> **Target Device**: Desktop only (Chrome, Edge, Brave, Safari)

---

## 1. Prerequisites

- **Node.js**: `v18.17.0` or higher (`v20+` recommended)
- **npm**: `v9.0.0` or higher
- **Modern Browser**: Google Chrome, Brave, Edge, or Safari (Desktop view)
- **OS Supported**: macOS, Windows, Linux

---

## 2. Setup & Running the Demo Locally

> **Note**: These commands work identically across macOS, Windows (Command Prompt / PowerShell), and Linux.

### Step 1: Extract & Navigate
Unzip the downloaded submission file. Open your Terminal (Mac/Linux) or Command Prompt / PowerShell (Windows), and navigate into the extracted directory:

```bash
cd "Airbnb-Clone App"
```

*(Alternatively, open the extracted folder directly in VS Code and use the integrated terminal).*

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 3. Running Typecheck & Code Verification

To verify TypeScript correctness across all components:

```bash
npm run typecheck
# or: npx tsc --noEmit
```

**Expected Result**: `0 errors`.

---

## 4. Interactive Demo Walkthrough (3 Required Views)

### View 1: Main Listing Page (Full Property Page)
- **Sticky Header Navigation**:
  - Scroll down 400px to see the sub-header appear with tabs: `[Photos]`, `[Amenities]`, `[Reviews]`, `[Location]` and the quick `Reserve` button.
  - Click `[Amenities]`, `[Reviews]`, or `[Location]` to smoothly scroll to those sections.
  - Click `[Photos]` to smoothly scroll back to the very top of the page.
- **Action Bar**:
  - Click **Share** to open the interactive Share modal with one-click URL copy.
  - Click **Save** to toggle the favorited heart animation and state.
- **5-Photo Hero Collage**:
  - Hover over photos to view subtle brightness dimming and cursor indicators.
  - Click **Show all photos** floating button (or any photo) to open the Photo Tour.
- **Left Column Sections**:
  - Guest Favourite badge with laurel wreaths and rating breakdown.
  - Mirashya Homes host summary.
  - Description with "Show more / Show less" toggle.
  - "Where you'll sleep" cards with clickable room preview.
  - "What this place offers" with "Show all 50 amenities" modal.
  - Dual-month interactive booking calendar with month navigation and date selection.
  - Reviews section with rating category bars, badge tags, and individual review cards.
  - Candolim location map with interactive zoom in/out controls.
  - Host bio and Co-hosts cards.
  - "More stays nearby" 8-card responsive carousel with smooth 1/2 pagination.
- **Right Column**:
  - Sticky reservation widget with 10% discount promo claim button, guest selector dropdown, and dynamic price breakdown.

---

### View 2: Photo Tour Modal
- **Trigger**: Click **Show all photos** on the hero grid, or navigate to:
  ```
  http://localhost:3000/?modal=photo-tour
  ```
- **Features**:
  - Full-screen overlay with room category thumbnail bar (*Living room 1*, *Living room 2*, *Full kitchen*, *Bedroom*, *Full bathroom*, *Gym*, *Exterior*, *Pool*, *Additional photos*).
  - Smooth category scroll-spy navigation.
  - Focus trap and `Escape` key / back chevron (`←`) to close.

---

### View 3: Lightbox Viewer
- **Trigger**: Click any photo within the listing page or photo tour modal, or navigate to:
  ```
  http://localhost:3000/?modal=photo-tour&modalItem=1005
  ```
- **Features**:
  - Full-screen single photo viewer with clean white backdrop.
  - Header showing current room title and counter (`X of 43`).
  - 9-dot grid button in top-left to return directly to Photo Tour.
  - Circular left/right arrow buttons for navigation.
  - **Full Keyboard Navigation**:
    - `ArrowLeft` (`←`): Previous photo
    - `ArrowRight` (`→`): Next photo
    - `Escape` (`ESC`): Close lightbox / return to tour
  - Smooth transition animations using Framer Motion.

---

## 5. Project Structure & Deliverables Directory Map

```
airbnb-clone/
│
├── app/                              # Next.js App Router (page.tsx, layout.tsx, globals.css)
├── components/                       # Reusable React components (Header, HeroGallery, Modals, etc.)
├── data/                             # Strongly-typed listing dataset (listingData.ts)
├── public/                           # Static assets, category icons, and high-res property images
├── package.json                      # Project dependencies and npm scripts
├── README.md                         # Complete architectural & technical documentation
├── instructions.txt                  # Quick setup and evaluation instructions (plaintext)
├── instructions.md                   # Quick setup and evaluation instructions (markdown)
│
├── screenshots/                      # Required desktop UI screenshots (Retina high-res)
│   ├── listing-page.png              # View 1: Main Listing Page (Hero & Gallery)
│   ├── listing-page-host-details.png # Listing Page: Host & Highlights
│   ├── listing-page-sleep-amenities.png # Listing Page: Where you'll sleep & Amenities
│   ├── listing-page-calendar.png     # Listing Page: Availability Calendar & Ratings
│   ├── listing-page-reviews.png      # Listing Page: Reviews & Rating Breakdown
│   ├── listing-page-location.png     # Listing Page: Map & Neighbourhood
│   ├── listing-page-meet-host.png    # Listing Page: Host Card & Co-hosts
│   ├── listing-page-things-to-know.png # Listing Page: House Rules & Nearby Stays
│   ├── photo-tour.png                # View 2: Full-screen Photo Tour Modal
│   └── lightbox.png                  # View 3: Single-photo Lightbox Viewer
│
├── architecture/                     # Production vacation-rental scaling strategy
│   ├── architecture-diagram.png      # High-resolution architecture diagram (Excalidraw export)
│   └── production_scaling_strategy.md # Full strategy (CDN, Sagas, Kafka, Aurora, Karpenter)
│
├── ai-prompts/                       # Chronological AI prompt sequence
│   └── prompts.md                    # Documented prompts from initial planning to completion
│
└── subagent-config/                  # Autonomous AI subagent configs & quality skills
    ├── README.md                     # Subagent role explanations
    ├── AGENTS.md                     # Strict development guardrails and typing rules
    ├── subagents/
    │   └── visual-parity-checker.md  # Visual parity review subagent
    └── skills/
        ├── airbnb-qa/SKILL.md        # WCAG 2.1, keyboard nav, and focus-trap audits
        └── code-review/SKILL.md      # TypeScript & zero-plagiarism modular architecture
```
