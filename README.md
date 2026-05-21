# American Dream — Interactive Sales Deck

A cinematic, browser-based B2B presentation for **American Dream** — the 3-million square-foot mixed-use destination in East Rutherford, New Jersey. Built for retail leasing, corporate sponsorships, and event venue sales.

**Live:** _[Deploy to Vercel and add URL here]_

---

## What It Is

Not a website — a **presentation deck**. Eight full-screen chapters, each designed for a specific sales conversation: leasing, luxury, dining, entertainment, or events. A salesperson can screen-share it on a live call or send a direct link to a specific chapter (`/#retail`, `/#events`, etc.) and the recipient lands exactly there.

---

## Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

---

## Navigation

| Input | Action |
|---|---|
| `→` or `↓` | Next slide |
| `←` or `↑` | Previous slide |
| `1` – `8` | Jump directly to that chapter |
| Swipe left/right | Next / previous (touch and trackpad) |
| `?` | Toggle keyboard shortcuts overlay |

URL updates on every slide change — browser back/forward works as expected.

---

## The 8 Chapters

| # | URL hash | Content |
|---|---|---|
| 0 | `#hero` | Opening — cinematic title with ambient animations |
| 1 | `#hub` | Chapter menu — jump to any section |
| 2 | `#why` | Why American Dream — animated scale stats |
| 3 | `#retail` | Retail leasing — 5 zone cards with detail modal |
| 4 | `#luxury` | The Avenue — luxury wing positioning |
| 5 | `#dining` | Dining & Lifestyle — 150+ F&B concepts |
| 6 | `#entertainment` | Entertainment — 9 world-class attractions |
| 7 | `#events` | Events & Venues — venue specs and infrastructure |

---

## Project Structure

```
app/
  layout.tsx              Metadata, OG tags, Viewport, Geist font
  page.tsx                Entry point — loads DeckController (client-only)
  globals.css             Design tokens, glass-card, slide-wrapper, animations

lib/
  slides-config.ts        Slide registry (id, label, scrollable flag)
  theme.ts                Shared color constants (SLIDE_COLORS)
  motion.ts               Shared easing constants (EASE_OUT, EASE_IN_OUT)

types/
  slides.ts               SlideProps interface (required: onEnter, onNext, onPrev, goTo, current)

components/
  DeckController.tsx      Core state machine — slide transitions, keyboard nav, swipe, URL routing
  Navigation.tsx          Fixed top nav — chapter dots, progress bar, slide label

  slides/
    HeroSlide.tsx
    HubSlide.tsx
    WhySlide.tsx
    RetailSlide.tsx
    LuxurySlide.tsx
    DiningSlide.tsx
    EntertainmentSlide.tsx
    EventsSlide.tsx

  ui/
    AnimatedCounter.tsx   Counts up to a number when it scrolls into view
    CustomCursor.tsx      Gold dot cursor (desktop only) — rAF-throttled hit detection
    ErrorBoundary.tsx     Catches slide-level errors without crashing the whole deck
    ShortcutsOverlay.tsx  Modal listing all keyboard shortcuts (press ?)
```

---

## Tech Stack

| | |
|---|---|
| **Framework** | Next.js 16, App Router, Turbopack |
| **Styling** | Tailwind CSS v4 — CSS-native via `@import "tailwindcss"` |
| **Animation** | Framer Motion v12 |
| **Icons** | Lucide React |
| **Language** | TypeScript (strict) |

---

## Key Things to Know

**Slide layout classes** — Two layout modes live in `globals.css`:
- `.slide-wrapper` — full-screen, overflow hidden. Used by all non-scrolling slides.
- `.slide-wrapper-scroll` — starts below the nav bar, scrolls vertically. Used by DiningSlide and EventsSlide.

**Design tokens** — Colors and easing are centralized:
- `lib/theme.ts` → `SLIDE_COLORS` (one color per chapter + gold/goldLight)
- `lib/motion.ts` → `EASE_OUT` and `EASE_IN_OUT` tuples for Framer Motion

**SSR is disabled** — `DeckController` reads `window.location.hash` at initialization. `page.tsx` uses `dynamic(() => import(...), { ssr: false })` to prevent a server/client hydration mismatch.

**Scrollable slide guard** — `SLIDES[n].scrollable` tells `DeckController` not to capture `ArrowUp`/`ArrowDown` on slides that scroll (Dining, Events), so the user can scroll normally.

**Custom cursor** — Only appears on desktop (`@media (hover: hover) and (pointer: fine)`). The native cursor is hidden via `body.has-custom-cursor` — a class `CustomCursor` adds on mount, so the native cursor remains if JS fails.

**Reduced motion** — `DeckController` calls `useReducedMotion()` from Framer Motion. When the OS preference is set, slide transitions collapse to a 150ms fade instead of the 600ms directional slide.
