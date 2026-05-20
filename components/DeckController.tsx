"use client";

import { EASE_IN_OUT } from "@/lib/motion";
import { SLIDES } from "@/lib/slides-config";
import type { SlideProps } from "@/types/slides";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";
import DiningSlide from "./slides/DiningSlide";
import EntertainmentSlide from "./slides/EntertainmentSlide";
import EventsSlide from "./slides/EventsSlide";
import HeroSlide from "./slides/HeroSlide";
import HubSlide from "./slides/HubSlide";
import LuxurySlide from "./slides/LuxurySlide";
import RetailSlide from "./slides/RetailSlide";
import WhySlide from "./slides/WhySlide";
import CustomCursor from "./ui/CustomCursor";
import ErrorBoundary from "./ui/ErrorBoundary";
import ShortcutsOverlay from "./ui/ShortcutsOverlay";

export type { SlideConfig } from "@/lib/slides-config";
export { SLIDES };

type SlideComponent = React.ComponentType<SlideProps>;

const COMPONENTS: SlideComponent[] = [
  HeroSlide,
  HubSlide,
  WhySlide,
  RetailSlide,
  LuxurySlide,
  DiningSlide,
  EntertainmentSlide,
  EventsSlide,
];

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 60 : -60,
    scale: 0.985,
  }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? 60 : -60,
    scale: 0.985,
  }),
};

function indexFromHash(): number {
  if (globalThis.window === undefined) return 0;
  const hash = globalThis.location.hash.slice(1);
  const idx = SLIDES.findIndex((s) => s.id === hash);
  return Math.max(0, idx);
}

export default function DeckController() {
  const [current, setCurrent] = useState(indexFromHash);
  const [direction, setDirection] = useState(0);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  const swipeStartX = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const goTo = useCallback(
    (index: number) => {
      if (index === current || index < 0 || index >= SLIDES.length) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Sync URL hash on slide change
  useEffect(() => {
    const id = SLIDES[current]?.id;
    if (id) globalThis.history.replaceState(null, "", `#${id}`);
  }, [current]);

  // Handle hash changes (browser back/forward)
  useEffect(() => {
    const onHashChange = () => {
      const idx = indexFromHash();
      if (idx !== current) {
        setDirection(idx > current ? 1 : -1);
        setCurrent(idx);
      }
    };
    globalThis.addEventListener("hashchange", onHashChange);
    return () => globalThis.removeEventListener("hashchange", onHashChange);
  }, [current]);

  // Keyboard navigation — guard vertical arrows on scrollable slides
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (document.activeElement as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      const isScrollable = SLIDES[current]?.scrollable ?? false;

      if (e.key === "?") {
        setShowShortcuts((v) => !v);
        return;
      }
      if (showShortcuts) {
        if (e.key === "Escape") setShowShortcuts(false);
        return;
      }

      if (e.key === "ArrowRight") { goNext(); return; }
      if (e.key === "ArrowLeft") { goPrev(); return; }
      // Vertical arrows only when slide isn't scrollable
      if (!isScrollable) {
        if (e.key === "ArrowDown") { goNext(); return; }
        if (e.key === "ArrowUp") { goPrev(); return; }
      }
      // Number keys 1–8 jump to chapter (key "1" → index 1, "8" → index 7)
      if (e.key >= "1" && e.key <= "8") {
        goTo(Number.parseInt(e.key));
      }
    };
    globalThis.addEventListener("keydown", onKey);
    return () => globalThis.removeEventListener("keydown", onKey);
  }, [current, goNext, goPrev, goTo, showShortcuts]);

  // Move focus to slide container on navigation (screen reader UX)
  useEffect(() => {
    if (slideRef.current) slideRef.current.focus({ preventScroll: true });
  }, [current]);

  // Swipe handling
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    swipeStartX.current = e.clientX;
  }, []);

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (swipeStartX.current === null) return;
      const delta = swipeStartX.current - e.clientX;
      swipeStartX.current = null;
      if (Math.abs(delta) > 55) {
        if (delta > 0) goNext(); else goPrev();
      }
    },
    [goNext, goPrev]
  );

  const onPointerCancel = useCallback(() => {
    swipeStartX.current = null;
  }, []);

  const SlideComponent = COMPONENTS[current];

  // Reduced-motion: collapse animation to a quick fade
  const transitionDuration = prefersReducedMotion ? 0.15 : 0.6;
  const animVariants = prefersReducedMotion
    ? {
        enter: { opacity: 0, x: 0, scale: 1 },
        center: { opacity: 1, x: 0, scale: 1 },
        exit: { opacity: 0, x: 0, scale: 1 },
      }
    : slideVariants;

  return (
    <>
      {/* Custom cursor — desktop only */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* ARIA live region for screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {SLIDES[current]?.label}
      </div>

      <div
        id="deck-root"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            ref={slideRef}
            custom={direction}
            variants={animVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: transitionDuration, ease: EASE_IN_OUT }}
            className="absolute inset-0 outline-none"
            tabIndex={-1}
          >
            <ErrorBoundary>
              <SlideComponent
                onEnter={() => goTo(1)}
                onNext={goNext}
                onPrev={goPrev}
                goTo={goTo}
                current={current}
              />
            </ErrorBoundary>
          </motion.div>
        </AnimatePresence>

        {current > 0 && <Navigation current={current} goTo={goTo} />}

        {/* Arrow controls */}
        {current > 0 && (
          <div className="fixed bottom-6 right-6 flex gap-2 z-50">
            <button
              onClick={goPrev}
              disabled={current <= 1}
              aria-label="Previous slide"
              className="w-9 h-9 glass-card rounded-full flex items-center justify-center text-white/40 hover:text-white/80 hover:border-white/20 transition-all disabled:opacity-20"
            >
              <ChevronLeft size={15} aria-hidden="true" />
            </button>
            <button
              onClick={goNext}
              disabled={current >= SLIDES.length - 1}
              aria-label="Next slide"
              className="w-9 h-9 glass-card rounded-full flex items-center justify-center text-white/40 hover:text-white/80 hover:border-white/20 transition-all disabled:opacity-20"
            >
              <ChevronRight size={15} aria-hidden="true" />
            </button>
          </div>
        )}

        {/* Shortcuts hint — bottom left */}
        {current > 0 && (
          <button
            onClick={() => setShowShortcuts(true)}
            aria-label="Show keyboard shortcuts"
            className="fixed bottom-6 left-6 z-50 flex items-center gap-1.5 text-[9px] text-white/20 hover:text-white/45 transition-colors"
          >
            <kbd
              className="px-1.5 py-0.5 rounded text-[8px] font-mono"
              style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.03)" }}
            >
              ?
            </kbd>
            <span className="hidden sm:inline tracking-widest uppercase">shortcuts</span>
          </button>
        )}
      </div>

      <ShortcutsOverlay
        open={showShortcuts}
        onClose={() => setShowShortcuts(false)}
      />
    </>
  );
}
