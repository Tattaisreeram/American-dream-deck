"use client";

import { motion } from "framer-motion";
import {
  BarChart2,
  ShoppingBag,
  Gem,
  Utensils,
  Zap,
  Calendar,
} from "lucide-react";
import type { SlideProps } from "@/types/slides";

const CHAPTERS = [
  {
    idx: 2,
    icon: BarChart2,
    num: "01",
    title: "Why American Dream",
    sub: "Scale. Location. Momentum.",
    color: "#4a90d9",
    bg: "rgba(74,144,217,0.07)",
  },
  {
    idx: 3,
    icon: ShoppingBag,
    num: "02",
    title: "Retail Leasing",
    sub: "Prime spaces. Premium traffic.",
    color: "#c9a84c",
    bg: "rgba(201,168,76,0.07)",
  },
  {
    idx: 4,
    icon: Gem,
    num: "03",
    title: "The Avenue",
    sub: "Luxury's new frontier.",
    color: "#e8c4d0",
    bg: "rgba(232,196,208,0.06)",
  },
  {
    idx: 5,
    icon: Utensils,
    num: "04",
    title: "Dining & Lifestyle",
    sub: "150+ culinary experiences.",
    color: "#e8904a",
    bg: "rgba(232,144,74,0.07)",
  },
  {
    idx: 6,
    icon: Zap,
    num: "05",
    title: "Entertainment",
    sub: "9 world-class attractions.",
    color: "#9b59b6",
    bg: "rgba(155,89,182,0.07)",
  },
  {
    idx: 7,
    icon: Calendar,
    num: "06",
    title: "Events & Venues",
    sub: "Your stage. Global scale.",
    color: "#2ecc71",
    bg: "rgba(46,204,113,0.07)",
  },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export default function HubSlide({ goTo }: SlideProps) {
  return (
    <div className="slide-wrapper bg-[#080808] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-5%,rgba(201,168,76,0.05),transparent)]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-10 relative z-10"
      >
        <div className="text-[9px] tracking-[0.55em] text-[#c9a84c] uppercase mb-3">
          Sales Presentation
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
          Select a Chapter
        </h2>
        <p className="text-white/30 text-sm mt-2 tracking-wide">
          Navigate non-linearly — jump to any section
        </p>
      </motion.div>

      {/* Chapter grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl w-full relative z-10"
      >
        {CHAPTERS.map((ch) => {
          const Icon = ch.icon;
          return (
            <motion.button
              key={ch.idx}
              variants={item}
              onClick={() => goTo?.(ch.idx)}
              className="group relative glass-card rounded-2xl p-5 text-left hover:border-white/15 transition-all duration-400 overflow-hidden"
              whileHover={{ scale: 1.025, y: -3 }}
              whileTap={{ scale: 0.99 }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 25% 25%, ${ch.color}15, transparent 65%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: ch.bg }}
                  >
                    <Icon size={16} style={{ color: ch.color }} />
                  </div>
                  <span
                    className="text-[10px] tracking-[0.3em] font-mono"
                    style={{ color: `${ch.color}60` }}
                  >
                    {ch.num}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-1 leading-snug">
                  {ch.title}
                </h3>
                <p className="text-[11px] text-white/35">{ch.sub}</p>
              </div>

              {/* Arrow reveal */}
              <div className="absolute bottom-4 right-4 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <span style={{ color: ch.color }} className="text-sm">
                  →
                </span>
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
