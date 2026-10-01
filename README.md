<div align="center">
  <img src="public/images/footer/logo.svg" alt="ByteSpace" width="44" height="44" />
  <h1>ByteSpace</h1>
  <p>A modern learning platform and creator ecosystem built for modern web learners and course authors.</p>
</div>

<br />

<p align="center">
  <img src="public/images/poster/poster.png" alt="ByteSpace Preview" width="100%" />
</p>

---

## Overview

ByteSpace is a high-performance educational platform designed to connect technical instructors and learners. Built with Next.js 16 (App Router) and React 19, the interface combines responsive design, accessible component primitives, and hardware-accelerated scroll animations via GSAP and Lenis.

The project follows a feature-first architecture, keeping domain logic, state, and UI components isolated within dedicated feature modules for straightforward maintainability.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI & Runtime:** React 19, TypeScript
- **Styling:** Tailwind CSS v4, Base UI primitives
- **Motion & Scrolling:** GSAP 3 (ScrollTrigger), Lenis Smooth Scroll
- **Icons:** Lucide Icons, Custom SVGs
- **SEO & Performance:** JSON-LD structured schemas, Dynamic OpenGraph metadata, Dynamic Sitemap & Robots.txt

---

## Project Structure

```text
bytespace_frontend/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx               # Sign in interface & auth states
│   │   └── register/page.tsx            # User onboarding & registration flow
│   ├── (public)/
│   │   ├── courses/
│   │   │   ├── page.tsx                 # Course catalog with filtering
│   │   │   └── [id]/page.tsx            # Dynamic course detail & curriculum
│   │   └── creators/
│   │       ├── page.tsx                 # Creator community directory
│   │       └── [id]/page.tsx            # Creator profile & authored courses
│   ├── error.tsx                        # Global runtime error boundary
│   ├── layout.tsx                       # Root layout with providers & fonts
│   ├── loading.tsx                      # Top-level route transition loader
│   ├── not-found.tsx                    # Custom branded 404 page
│   ├── page.tsx                         # Landing / homepage entry
│   ├── robots.ts                        # Crawler directives
│   └── sitemap.ts                       # Dynamic XML sitemap generator
├── components/
│   ├── icons/                           # Custom vector icons
│   ├── layout/                          # Global navigation & footer
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── reusable/                        # Shared design system components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Logo.tsx
│   │   └── SearchBar.tsx
│   └── ui/                              # Base primitives & badges
├── features/                            # Feature-driven domain modules
│   ├── auth/                            # Form validation, session mock & cards
│   ├── course-details/                  # Syllabus, instructors, pricing CTA
│   ├── courses/                         # Course list views & category tabs
│   ├── creators/                        # Creator cards & showcase grids
│   └── home/                            # Landing page sections
│       ├── branding/                    # Partner logo marquee
│       ├── community/                   # Testimonials & social proof
│       ├── courses-section/             # Featured course grid
│       ├── explore-section/             # Category navigation cards
│       ├── hero-secion/                 # Hero visual & 3D ambient floating
│       ├── potential-creator/           # Creator onboarding CTA
│       └── professional-growth/         # Platform statistics & growth path
├── hooks/
│   ├── useDebounce.ts                   # Search input optimization
│   └── useIntersectionObserver.ts      # Viewport detection utility
├── lib/
│   ├── siteConfig.ts                    # Metadata, URLs & social constants
│   ├── SmoothScroll.tsx                 # Lenis + GSAP ticker synchronization
│   └── utils.ts                         # Class merging (clsx + twMerge)
├── public/
│   └── images/                          # Static illustrations, assets & 3D shapes
│       ├── 404/
│       ├── auth/
│       ├── community/
│       ├── course-details/
│       ├── courses/
│       ├── footer/
│       ├── hero-images/
│       ├── poster/
│       ├── potential-creator/
│       └── professional-growth/
├── proxy.ts                             # Local mock request & route proxy
└── next.config.ts                       # Next.js build configuration
```

---

## Getting Started

### Prerequisites

- Node.js 18.18+ or later
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abedinalways/bytespace_web_frontend.git
   cd bytespace_web_frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build & Quality

```bash
# Generate optimized production build
npm run build

# Start production server
npm run start

# Run ESLint validation
npm run lint
```
