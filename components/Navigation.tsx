"use client";

import { motion } from "framer-motion";
import { SLIDES } from "./DeckController";

interface Props {
  current: number;
  goTo: (index: number) => void;
}

// Chapters shown in nav (skip hero=0 and hub=1 from the dot list, show hub as "home")
const NAV_ITEMS = SLIDES.slice(1);

export default function Navigation({ current, goTo }: Props) {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-12"
      style={{
        background:
          "linear-gradient(to bottom, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.6) 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Logo — click to return to hub */}
      <button
        onClick={() => goTo(1)}
        className="flex items-center gap-2 group"
        aria-label="Go to overview"
      >
        <div className="flex flex-col leading-none">
          <span className="text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase font-semibold">
            American
          </span>
          <span className="text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase font-semibold">
            Dream
          </span>
        </div>
        <div className="w-px h-5 bg-white/10 ml-1" />
      </button>

      {/* Chapter dots */}
      <div className="flex items-center gap-1">
        {NAV_ITEMS.map((slide, i) => {
          const idx = i + 1;
          const isActive = current === idx;
          return (
            <button
              key={slide.id}
              onClick={() => goTo(idx)}
              title={slide.label}
              aria-label={slide.label}
              aria-current={isActive ? "page" : undefined}
              className="group relative flex items-center gap-1.5 px-2 py-1 rounded-md transition-all duration-300"
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-md"
                  style={{ background: "rgba(201,168,76,0.1)" }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span
                className={`relative w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#c9a84c] scale-125"
                    : "bg-white/20 group-hover:bg-white/50"
                }`}
              />
              <span
                className={`relative text-[10px] tracking-widest uppercase hidden lg:block transition-colors duration-300 ${
                  isActive
                    ? "text-[#c9a84c]"
                    : "text-white/30 group-hover:text-white/60"
                }`}
              >
                {slide.shortLabel}
              </span>
            </button>
          );
        })}
      </div>

      {/* Slide counter */}
      <div className="text-[10px] tracking-[0.3em] text-white/20 tabular-nums">
        {String(current).padStart(2, "0")} /{" "}
        {String(SLIDES.length - 1).padStart(2, "0")}
      </div>
    </motion.nav>
  );
}
