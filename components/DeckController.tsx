"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./Navigation";
import HeroSlide from "./slides/HeroSlide";
import HubSlide from "./slides/HubSlide";
import WhySlide from "./slides/WhySlide";
import RetailSlide from "./slides/RetailSlide";
import LuxurySlide from "./slides/LuxurySlide";
import DiningSlide from "./slides/DiningSlide";
import EntertainmentSlide from "./slides/EntertainmentSlide";
import EventsSlide from "./slides/EventsSlide";
import type { SlideProps } from "@/types/slides";

export interface SlideConfig {
  id: string;
  label: string;
  shortLabel: string;
}

export const SLIDES: SlideConfig[] = [
  { id: "hero", label: "Opening", shortLabel: "Opening" },
  { id: "hub", label: "Overview", shortLabel: "Overview" },
  { id: "why", label: "Why American Dream", shortLabel: "Why Us" },
  { id: "retail", label: "Retail Leasing", shortLabel: "Retail" },
  { id: "luxury", label: "The Avenue", shortLabel: "Luxury" },
  { id: "dining", label: "Dining & Lifestyle", shortLabel: "Dining" },
  { id: "entertainment", label: "Entertainment", shortLabel: "Entertainment" },
  { id: "events", label: "Events & Venues", shortLabel: "Events" },
];

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
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? 60 : -60,
    scale: 0.985,
  }),
};

export default function DeckController() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (index === current) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const goNext = useCallback(() => {
    if (current < SLIDES.length - 1) goTo(current + 1);
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const SlideComponent = COMPONENTS[current];

  return (
    <div id="deck-root">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0"
        >
          <SlideComponent
            onEnter={() => goTo(1)}
            onNext={goNext}
            onPrev={goPrev}
            goTo={goTo}
            current={current}
          />
        </motion.div>
      </AnimatePresence>

      {current > 0 && (
        <Navigation current={current} goTo={goTo} />
      )}

      {/* Arrow controls — bottom-right */}
      {current > 0 && (
        <div className="fixed bottom-6 right-6 flex gap-2 z-50">
          <button
            onClick={goPrev}
            disabled={current === 0}
            aria-label="Previous slide"
            className="w-9 h-9 glass-card rounded-full flex items-center justify-center text-white/40 hover:text-white/80 hover:border-white/20 transition-all disabled:opacity-20"
          >
            ←
          </button>
          <button
            onClick={goNext}
            disabled={current === SLIDES.length - 1}
            aria-label="Next slide"
            className="w-9 h-9 glass-card rounded-full flex items-center justify-center text-white/40 hover:text-white/80 hover:border-white/20 transition-all disabled:opacity-20"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
