"use client";

import { motion } from "framer-motion";
import { Utensils, Coffee, Wine, ChefHat, ArrowRight } from "lucide-react";
import { SLIDE_COLORS } from "@/lib/theme";

const CATEGORIES = [
  {
    icon: ChefHat,
    title: "Fine Dining",
    count: "24",
    sub: "Full-service restaurants",
  },
  {
    icon: Utensils,
    title: "Fast Casual",
    count: "85+",
    sub: "Premium quick service",
  },
  {
    icon: Coffee,
    title: "Café & Bakery",
    count: "30+",
    sub: "Specialty coffee & pastry",
  },
  {
    icon: Wine,
    title: "Nightlife & Bars",
    count: "12",
    sub: "Cocktail bars & lounges",
  },
];

const FEATURED = [
  {
    name: "Don Coqui",
    cuisine: "Latin American",
    desc: "Landmark Mexican-Caribbean cuisine spanning 3 spectacular levels",
  },
  {
    name: "Catch Steak",
    cuisine: "Prime Steakhouse",
    desc: "Elevated meat-centric menu from the celebrated Catch Restaurant Group",
  },
  {
    name: "Benihana",
    cuisine: "Japanese Teppanyaki",
    desc: "America's iconic tableside dining experience, reimagined",
  },
  {
    name: "Margaritaville",
    cuisine: "American Tropics",
    desc: "Beach-inspired bar and grill with coastal energy and bold flavors",
  },
];

const ACCENT = SLIDE_COLORS.dining;

export default function DiningSlide() {
  return (
    <div className="slide-wrapper-scroll bg-[#060602] flex flex-col">
      {/* Photo background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/food.jpg')" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(6,6,2,0.88) 0%, rgba(8,8,8,0.92) 100%)" }}
      />
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_50%,rgba(232,144,74,0.05),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_0%_100%,rgba(201,168,76,0.04),transparent)]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 px-8 md:pl-20 pt-8 pb-4 flex-none"
      >
        <div
          className="text-[9px] tracking-[0.55em] uppercase mb-3 font-medium"
          style={{ color: ACCENT }}
        >
          Dining & Lifestyle
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-2 leading-tight">
          Food as the Fifth Anchor
        </h2>
        <p className="text-white/38 text-sm max-w-lg">
          150+ dining concepts across 6 categories. Not a food court — a
          culinary destination that drives destination visits on its own.
        </p>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18 }}
        className="relative z-10 px-8 md:pl-20 flex gap-8 md:gap-12 mb-6 flex-none"
      >
        {[
          { n: "150+", l: "Dining Concepts" },
          { n: "30+", l: "Countries Represented" },
          { n: "$2.4B", l: "Est. Annual F&B Revenue" },
        ].map((s) => (
          <div key={s.l}>
            <div
              className="text-2xl md:text-3xl font-black counter-num"
              style={{ color: ACCENT }}
            >
              {s.n}
            </div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">
              {s.l}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Categories */}
      <div className="relative z-10 px-8 md:pl-20 grid grid-cols-2 md:grid-cols-4 gap-3 mb-5 flex-none">
        {CATEGORIES.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.55 }}
              className="glass-card rounded-xl p-5"
            >
              <Icon size={16} className="mb-3" style={{ color: ACCENT }} />
              <div className="text-2xl font-black text-white mb-0.5 counter-num">
                {cat.count}
              </div>
              <div className="text-sm font-semibold text-white/70">
                {cat.title}
              </div>
              <div className="text-[11px] text-white/40">{cat.sub}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Featured tenants */}
      <div className="relative z-10 px-8 md:pl-20 flex-1 min-h-0">
        <div className="text-[9px] tracking-[0.45em] text-white/35 uppercase mb-3">
          Featured Tenants
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {FEATURED.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 + i * 0.07 }}
              className="glass-card rounded-xl p-4"
            >
              <div
                className="text-[9px] uppercase tracking-widest mb-2 font-medium"
                style={{ color: ACCENT }}
              >
                {r.cuisine}
              </div>
              <div className="text-base font-bold text-white mb-1">
                {r.name}
              </div>
              <div className="text-[11px] text-white/28 leading-snug">
                {r.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        className="relative z-10 px-8 md:pl-20 pb-8 pt-4 flex-none"
      >
        <a
          href="mailto:leasing@americandream.com?subject=F%26B%20Leasing%20Inquiry"
          className="inline-flex items-center gap-3 px-8 py-3 text-[11px] tracking-[0.3em] uppercase transition-colors rounded-sm"
          style={{
            border: `1px solid ${ACCENT}35`,
            color: ACCENT,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = `${ACCENT}10`)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          F&B Leasing Inquiries
          <ArrowRight size={13} />
        </a>
      </motion.div>
    </div>
  );
}
