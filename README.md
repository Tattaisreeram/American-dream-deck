# American Dream — Interactive B2B Sales Deck

A fully interactive, browser-based B2B sales presentation for **American Dream** — the 3-million square-foot mixed-use mega-destination in East Rutherford, New Jersey. Built as a cinematic, non-linear presentation tool for retail tenants, corporate sponsors, and event promoters.

**Live Demo:** _[Deploy to Vercel and add URL here]_

---

## What This Is

This is not a scrolling website. It's a **presentation deck** — eight full-screen chapters that a salesperson can screen-share on a live call or send as a standalone link. Navigation is non-linear; prospects jump directly to what matters to them.

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16 (App Router) | Turbopack speed, Server Components, dynamic imports |
| Styling | Tailwind CSS v4 | CSS-native config, no config file, fast rebuilds |
| Animation | Framer Motion v12 | `AnimatePresence` slide transitions, `useInView` counters |
| Icons | Lucide React | Consistent, minimal stroke icons |
| Hosting | Vercel | Zero-config CI/CD from GitHub |

---

## Setup

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve production build
```

---

## Architecture

```
app/
  layout.tsx              Root layout — metadata + global fonts
  page.tsx                Entry point — renders DeckLoader (server-safe)
  globals.css             CSS variables, glass-card, text-gold-gradient

components/
  DeckLoader.tsx          Client boundary — wraps DeckController with ssr:false
  DeckController.tsx      Slide state machine — AnimatePresence transitions, keyboard nav
  Navigation.tsx          Fixed top nav bar — chapter dots with layoutId animation

  slides/
    HeroSlide.tsx         Chapter 0 — cinematic opening with ambient orbs
    HubSlide.tsx          Chapter 1 — non-linear chapter picker
    WhySlide.tsx          Chapter 2 — animated stat counters, scale data
    RetailSlide.tsx       Chapter 3 — horizontal gallery + side-panel modal
    LuxurySlide.tsx       Chapter 4 — The Avenue split-screen
    DiningSlide.tsx       Chapter 5 — F&B categories + featured tenants
    EntertainmentSlide.tsx Chapter 6 — 9 attractions grid + brand activation pitch
    EventsSlide.tsx       Chapter 7 — venue specs table + infrastructure checklist

  ui/
    AnimatedCounter.tsx   useInView-triggered number animation (Framer Motion animate())

types/
  slides.ts               Shared SlideProps interface
```

### Key Design Decisions

**Hub-and-Spoke navigation:** Chapter 1 (`HubSlide`) is a full-screen menu. Every slide is also reachable from the persistent top nav bar — exactly like Digideck.

**SSR bypass via DeckLoader:** `DeckController` imports Framer Motion and uses browser APIs. Next.js 16 requires the `ssr: false` dynamic import to live inside a Client Component — `DeckLoader.tsx` is that boundary. The page itself stays a Server Component for metadata export.

**Framer Motion v12 easing types:** Cubic-bezier arrays must be typed as `[number, number, number, number]` tuples — plain `number[]` fails TypeScript in v12.

**Tailwind v4 CSS layering:** Custom utility classes (`.glass-card`, `.slide-wrapper`) live in unlayered CSS, which sits above the Tailwind `utilities` layer in specificity. Slides needing vertical scroll use `.slide-wrapper-scroll` (defined in globals.css) rather than fighting Tailwind's override order.

---

## Chapter Map

| # | Slide | Business Goal |
|---|---|---|
| 0 | Hero | First impression — scale + energy |
| 1 | Hub | Non-linear navigation menu |
| 2 | Why Us | Data-driven credibility |
| 3 | Retail Leasing | Drive leasing inquiries |
| 4 | The Avenue | Luxury positioning |
| 5 | Dining & Lifestyle | F&B leasing |
| 6 | Entertainment | Sponsorship/activation pitch |
| 7 | Events & Venues | Venue bookings |

**Keyboard navigation:** `→` / `↓` to advance, `←` / `↑` to go back.

---

## Phase 2 Expansion Points

The codebase is modular and ready for expansion without rewrites:

- **Sponsorship Module** — Add `SponsorshipSlide.tsx` with tier cards and audience data
- **Leasing Sub-Paths** — Segment RetailSlide into luxury/F&B/pop-up sub-modules
- **Venue Deep-Dives** — Dedicated slides for the Performing Arts Center and Exposition Center
- **Lead Capture** — Replace CTA buttons with `react-hook-form` + Next.js API route
- **Video Backgrounds** — Swap gradient animations for `<video autoPlay muted loop playsInline>` with lazy loading

---

## AI Tools Used

- **Claude Sonnet 4.6** — Full architecture design, all component code, TypeScript debugging, and README
- **Midjourney / DALL-E** — Would be used for AI-generated activation mockups and venue renderings in Phase 2
- The cinematic gradient backgrounds are CSS-only — no image assets to load, keeping Lighthouse performance high by design

---

## Performance Notes

- `ssr: false` + `next/dynamic` removes unused server bundle weight and prevents hydration mismatch
- All animations are GPU-accelerated (`transform`, `opacity`) via Framer Motion
- No images in Phase 1 — pure CSS gradients and SVG icons, zero LCP asset requests
- Horizontal galleries use `overflow-x: auto` with `scrollbar-hidden` for clean UX
- `useInView({ once: true })` on counters triggers exactly once per session, no re-render waste
