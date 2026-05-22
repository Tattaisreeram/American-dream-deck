"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { SlideProps } from "@/types/slides";
import { EASE_OUT } from "@/lib/motion";

export default function HeroSlide({ onEnter }: SlideProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="slide-wrapper relative bg-[#050505] flex items-center justify-center overflow-hidden">
      {/*
        VIDEO BACKGROUND — drop hero.mp4 into /public/ to activate.
        Ideal: 15–30s aerial or interior shot of American Dream, no audio needed.
        The dark overlay below keeps text readable at any video brightness.
      */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.42 }}
        autoPlay
        muted
        loop
        playsInline
        poster="/hero.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
        {/* Fallback: gradients render if no video file is present */}
      </video>

      {/* Dark scrim — ensures text contrast regardless of video brightness */}
      <div className="absolute inset-0 bg-[#050505]/50" />

      {/* Layered radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-10%,rgba(201,168,76,0.07),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_15%_90%,rgba(201,168,76,0.04),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_85%_60%,rgba(20,8,0,0.7),transparent)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Floating ambient orbs */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.11) 0%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          filter: "blur(64px)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 16 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="inline-flex items-center gap-2 mb-10 px-4 py-1.5 border border-[#c9a84c]/20 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
          <span className="text-[10px] tracking-[0.45em] text-[#c9a84c]/80 uppercase">
            East Rutherford, New Jersey
          </span>
        </motion.div>

        {/* Hero headline */}
        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 48 }}
          transition={{ delay: 0.42, duration: 1, ease: EASE_OUT }}
          className="font-black leading-none tracking-[-0.03em] text-white mb-5"
          style={{ fontSize: "clamp(4.5rem, 13vw, 11rem)" }}
        >
          AMERICAN
          <br />
          <span className="text-gold-gradient">DREAM</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 20 }}
          transition={{ delay: 0.78, duration: 0.8 }}
          className="text-xl md:text-2xl font-light tracking-[0.04em] text-white/55 mb-14 max-w-xl mx-auto"
        >
          More Than a Destination.{" "}
          <span className="font-semibold text-white/85">A Global Stage.</span>
        </motion.p>

        {/* Enter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 20 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <button
            onClick={onEnter}
            className="group relative inline-flex items-center gap-4 px-10 py-4 border border-[#c9a84c]/35 text-[#c9a84c] text-[11px] tracking-[0.4em] uppercase transition-all duration-500"
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <span>Enter Presentation</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#c9a84c]/50" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#c9a84c]/50" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#c9a84c]/50" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#c9a84c]/50" />
          </button>
        </motion.div>

        {/* Teaser stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ delay: 1.7, duration: 1.2 }}
          className="mt-20 flex items-center justify-center gap-10 md:gap-16"
        >
          {[
            { num: "40M+", label: "Annual Visitors" },
            { num: "3M", label: "Square Feet" },
            { num: "9", label: "World-Class Attractions" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-black text-white counter-num">
                {s.num}
              </div>
              <div className="text-[9px] tracking-[0.25em] uppercase text-white/30 mt-0.5">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom pulse cue */}
      <motion.div
        animate={{ y: [0, 7, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.8, repeat: Infinity }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[9px] tracking-[0.4em] text-white/25 uppercase">
          Press → to begin
        </span>
        <div className="w-px h-7 bg-gradient-to-b from-[#c9a84c]/40 to-transparent" />
      </motion.div>
    </div>
  );
}
