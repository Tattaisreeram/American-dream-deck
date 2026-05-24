# American Dream — Interactive Sales Deck

A cinematic, browser-based B2B presentation for **American Dream** — the 3-million square-foot mixed-use destination in East Rutherford, New Jersey. Built for retail leasing, corporate sponsorships, and event venue sales.

**Live:** [americandreamdeck-nu.vercel.app](https://americandreamdeck-nu.vercel.app)

---

## What It Is

Not a website — a **presentation deck**. Eight full-screen chapters, each designed for a specific sales conversation: leasing, luxury, dining, entertainment, or events. A salesperson can screen-share it on a live call or send a direct link to a specific chapter (`/#retail`, `/#events`, etc.) and the recipient lands exactly there.

---

## Tech Stack

| | Version |
| --- | --- |
| **Framework** | Next.js 16.2.6, App Router, Turbopack |
| **Runtime** | React 19.2.4 |
| **Styling** | Tailwind CSS v4 — CSS-native via `@import "tailwindcss"` |
| **Animation** | Framer Motion 12.x |
| **Icons** | Lucide React 1.x |
| **Language** | TypeScript 5 (strict) |
| **Deployment** | Vercel (auto-deploy from `main`) |

---

## Quick Start

```bash
git clone https://github.com/Tattaisreeram/American-dream-deck.git
cd American-dream-deck
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

Node 18+ required.

---

## Navigation

| Input | Action |
| --- | --- |
| `→` or `↓` | Next slide |
| `←` or `↑` | Previous slide |
| `1` – `8` | Jump directly to that chapter |
| Swipe left/right | Next / previous (touch and trackpad) |
| `?` | Toggle keyboard shortcuts overlay |

URL updates on every slide change — browser back/forward works as expected. Deep links (`/#dining`, `/#events`) land directly on the correct chapter.

---

## The 8 Chapters

| # | URL hash | Content |
| --- | --- | --- |
| 0 | `#hero` | Opening — cinematic title with video background and ambient animations |
| 1 | `#hub` | Chapter menu — jump to any section |
| 2 | `#why` | Why American Dream — animated scale stats |
| 3 | `#retail` | Retail leasing — 5 zone cards with detail modal |
| 4 | `#luxury` | The Avenue — luxury wing positioning with atmospheric imagery |
| 5 | `#dining` | Dining & Lifestyle — 150+ F&B concepts with atmospheric background |
| 6 | `#entertainment` | Entertainment — 9 world-class attractions |
| 7 | `#events` | Events & Venues — venue specs, infrastructure, and atmospheric background |

---

## Project Structure

```text
app/
  layout.tsx              Metadata, OG tags, Viewport, Geist font
  page.tsx                Entry point — loads DeckController (client-only)
  globals.css             Design tokens, glass-card, slide-wrapper, animations

lib/
  slides-config.ts        Slide registry (id, label, scrollable flag)
  theme.ts                Shared color constants (SLIDE_COLORS)
  motion.ts               Shared easing constants (EASE_OUT, EASE_IN_OUT)

types/
  slides.ts               SlideProps interface (onEnter, onNext, onPrev, goTo, current)

components/
  DeckController.tsx      Core state machine — transitions, keyboard nav, swipe, URL routing
  Navigation.tsx          Fixed top nav — chapter dots, progress bar, slide label

  slides/
    HeroSlide.tsx         Video background (hero.mp4), poster fallback (hero.jpg)
    HubSlide.tsx
    WhySlide.tsx
    RetailSlide.tsx
    LuxurySlide.tsx       Atmospheric background: luxury.jpg
    DiningSlide.tsx       Atmospheric background: food.jpg
    EntertainmentSlide.tsx
    EventsSlide.tsx       Atmospheric background: event.jpg

  ui/
    AnimatedCounter.tsx   Counts up to a number when it enters the viewport
    CustomCursor.tsx      Gold dot cursor (desktop only) — rAF-throttled
    ErrorBoundary.tsx     Catches slide-level errors without crashing the deck
    ShortcutsOverlay.tsx  Modal listing all keyboard shortcuts (press ?)

public/
  hero.mp4                Hero video background (autoplay, muted, loop)
  hero.jpg                Poster / still fallback for hero video
  luxury.jpg, food.jpg, event.jpg, big-snow.jpg, water-park.jpg,
  nickelodeon.jpg, sea-life.jpg, rink.jpg, mini-golf.jpg
```

---

## Design Decisions

**Single-page deck, not a router.** All eight chapters live in one `DeckController` component that swaps slides in memory. This means zero loading spinners between chapters — a deliberate choice for screen-share contexts where latency is visible to the audience.

**Two layout modes.** `globals.css` defines two layout classes:

- `.slide-wrapper` — full-screen, `overflow: hidden`. Used by all fixed slides.
- `.slide-wrapper-scroll` — starts below the nav bar, scrolls vertically. Used by Dining and Events, which have more content than a single screen.

**SSR disabled on the controller.** `DeckController` reads `window.location.hash` at initialization. `page.tsx` uses `dynamic(() => import(...), { ssr: false })` to avoid a server/client mismatch on that read.

**Scrollable slide guard.** `SLIDES[n].scrollable` tells `DeckController` not to capture `ArrowUp`/`ArrowDown` on slides that scroll (Dining, Events), so the user can scroll content normally without accidentally changing chapters.

**Atmospheric imagery layered under content.** For Dining, Events, and Luxury, real property photography is placed as a full-bleed `background-image` behind a dark gradient overlay (`rgba ~0.88–0.92` opacity). The image provides context and mood; the overlay keeps text fully legible. Opacity was deliberately high — the content is the foreground, not the photo.

**Video with poster fallback.** The Hero slide uses an autoplay, muted, looping video. The `poster="/hero.jpg"` attribute ensures the still image renders instantly on page load before the video decodes, and serves as a complete fallback on browsers that block autoplay.

**Design tokens centralized.** Colors and easing are not hardcoded in components:

- `lib/theme.ts` → `SLIDE_COLORS` (one accent color per chapter)
- `lib/motion.ts` → `EASE_OUT` and `EASE_IN_OUT` tuples for Framer Motion

**Reduced motion.** `DeckController` calls `useReducedMotion()` from Framer Motion. When the OS preference is enabled, slide transitions collapse to a 150ms fade instead of the 600ms directional slide.

**Custom cursor.** Only appears on true pointer devices (`@media (hover: hover) and (pointer: fine)`). The native cursor is hidden via a `body.has-custom-cursor` class that `CustomCursor` adds on mount — so the native cursor stays if JS fails or on touch devices.

**Error boundaries per slide.** Each slide is wrapped in `ErrorBoundary`. A render error in one chapter degrades gracefully without crashing the entire deck.

---

## AI Tools Used

This project was built with [Claude Code](https://claude.ai/code) (Anthropic) as the primary development tool.

### Claude Code (claude-sonnet-4-6)

- Designed and scaffolded the full project architecture — App Router layout, slide registry pattern, DeckController state machine, two-layout CSS system
- Wrote all eight slide components, the navigation system, and all UI utilities
- Implemented keyboard navigation, swipe gestures, URL routing, reduced-motion support, and the custom cursor
- Added atmospheric property photography to Dining, Events, and Luxury slides with dark gradient overlays
- Wired up the Hero video with poster fallback, opacity tuning, and scrim adjustments
- Debugged asset serving (confirmed all images/video return HTTP 200 via Vercel), took Playwright screenshots to visually verify each slide, and diagnosed the Vercel redeploy requirement

The human directed product decisions (which chapters, what content, what the deck is for) and supplied all media assets. Claude handled architecture, implementation, and verification.
