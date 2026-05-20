"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SLIDES } from "@/lib/slides-config";
import { EASE_OUT } from "@/lib/motion";

interface Props {
  current: number;
  goTo: (index: number) => void;
}

const NAV_ITEMS = SLIDES.slice(1);

export default function Navigation({ current, goTo }: Props) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const activeSlide = SLIDES[current];
  const progress = ((current - 1) / (SLIDES.length - 2)) * 100;

  return (
    <>
      {/* Gold progress line — very top of viewport */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-px bg-white/[0.06]">
        <motion.div
          className="h-full"
          style={{ background: "linear-gradient(90deg, #c9a84c, #f0d485)" }}
          animate={{ width: `${Math.max(progress, 0)}%` }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
        />
      </div>

      {/* Nav bar */}
      <motion.nav
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
        className="fixed top-px left-0 right-0 z-50 flex items-center justify-between px-6 h-14"
        style={{
          background: "rgba(8,8,8,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => goTo(1)}
          aria-label="Chapter overview"
          className="flex-none flex flex-col leading-none group"
        >
          <span className="text-[8px] tracking-[0.4em] text-[#c9a84c] uppercase font-semibold group-hover:text-[#f0d485] transition-colors">
            American
          </span>
          <span className="text-[8px] tracking-[0.4em] text-[#c9a84c] uppercase font-semibold group-hover:text-[#f0d485] transition-colors">
            Dream
          </span>
        </button>

        {/* Center: animated chapter name + dot row */}
        <div className="flex flex-col items-center gap-1.5">
          <AnimatePresence mode="wait">
            <motion.span
              key={current}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.22 }}
              className="text-[9px] tracking-[0.28em] uppercase text-white/50 font-medium"
            >
              {activeSlide?.label ?? ""}
            </motion.span>
          </AnimatePresence>

          <div className="flex items-center gap-2.5">
            {NAV_ITEMS.map((slide, i) => {
              const idx = i + 1;
              const isActive = current === idx;
              const isHovered = hoveredIdx === idx;
              return (
                <div key={slide.id} className="relative">
                  <button
                    onClick={() => goTo(idx)}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    aria-label={slide.label}
                    aria-current={isActive ? "page" : undefined}
                    className="flex items-center justify-center w-5 h-5"
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-dot"
                        className="w-2 h-2 rounded-full"
                        style={{ background: "#c9a84c", boxShadow: "0 0 6px rgba(201,168,76,0.6)" }}
                        transition={{ type: "spring", bounce: 0.25, duration: 0.35 }}
                      />
                    ) : (
                      <span
                        className="rounded-full transition-all duration-200"
                        style={{
                          width: isHovered ? "6px" : "4px",
                          height: isHovered ? "6px" : "4px",
                          background: isHovered ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.2)",
                        }}
                      />
                    )}
                  </button>

                  {/* Hover tooltip */}
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded pointer-events-none whitespace-nowrap"
                        style={{
                          background: "rgba(20,20,20,0.95)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          fontSize: "9px",
                          letterSpacing: "0.08em",
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        {slide.shortLabel}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: keyboard hint + counter */}
        <div className="flex-none flex items-center gap-3">
          <span className="hidden lg:flex items-center gap-1 text-[9px] text-white/18">
            <kbd className="px-1 py-0.5 rounded border border-white/10 text-white/25 font-mono text-[8px]">←</kbd>
            <kbd className="px-1 py-0.5 rounded border border-white/10 text-white/25 font-mono text-[8px]">→</kbd>
          </span>
          <span className="text-[10px] tabular-nums text-white/28 font-mono">
            {String(current).padStart(2, "0")}&thinsp;/&thinsp;{String(SLIDES.length - 1).padStart(2, "0")}
          </span>
        </div>
      </motion.nav>
    </>
  );
}
