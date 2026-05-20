"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const METRICS = [
  { value: "62%", label: "of Avenue shoppers earn $150K+" },
  { value: "$520", label: "average basket size in luxury wing" },
  { value: "2.4×", label: "longer dwell time vs. standard mall" },
  { value: "34%", label: "international visitor share" },
];

const BRANDS = [
  "Hermès",
  "Saks Fifth Avenue",
  "Tiffany & Co.",
  "Porsche Design",
  "Dolce & Gabbana",
  "Versace",
  "Jimmy Choo",
  "Montblanc",
  "Barneys New York",
  "Cartier",
  "TAG Heuer",
  "Hugo Boss",
];

const DIFFERENTIATORS = [
  "Dedicated luxury concierge on every floor",
  "Private shopping suites available by appointment",
  "Valet parking with direct Avenue-level access",
  "On-site personal styling & alterations",
];

export default function LuxurySlide() {
  return (
    <div className="slide-wrapper bg-[#050505] flex flex-col md:flex-row overflow-hidden">
      {/* Left — visual panel */}
      <div className="relative md:w-[45%] flex-none h-56 md:h-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0b0900 0%, #060400 50%, #080808 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_30%_50%,rgba(201,168,76,0.11),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_75%_25%,rgba(180,130,50,0.07),transparent)]" />

        {/* Vertical decorative lines — positions in % from left */}
        {([8, 21, 34, 47, 60, 73, 86] as const).map((left, i) => (
          <motion.div
            key={`deco-${left}`}
            animate={{
              opacity: [0.03, 0.09, 0.03],
              scaleY: [1, 1.08, 1],
            }}
            transition={{
              duration: 4 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
            className="absolute w-px bg-gradient-to-b from-transparent via-[#c9a84c]/25 to-transparent"
            style={{
              left: `${left}%`,
              top: "8%",
              height: "84%",
            }}
          />
        ))}

        {/* The Avenue wordmark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="text-[9px] tracking-[0.65em] text-[#c9a84c]/50 uppercase mb-5">
              Exclusively at
            </div>
            <div
              className="font-black text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              THE
            </div>
            <div
              className="font-black text-gold-gradient leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              AVENUE
            </div>
            <div className="mt-6 w-14 h-px bg-[#c9a84c]/35 mx-auto" />
            <p className="mt-5 text-[11px] text-white/38 tracking-[0.18em] max-w-[200px] mx-auto leading-relaxed">
              Luxury's new North American address
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right — data panel */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-12 py-14 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-[9px] tracking-[0.55em] text-[#c9a84c] uppercase mb-3">
            Luxury Wing
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
            Where Luxury Brands
            <br />
            Find Their Next Flagship
          </h3>
          <p className="text-white/38 text-sm leading-relaxed mb-8 max-w-md">
            The Avenue at American Dream is the most concentrated luxury retail
            environment in the New York metro. Designed to draw the
            ultra-high-net-worth consumer who lives, works, and entertains
            within 30 minutes.
          </p>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + i * 0.09,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-card rounded-xl p-4"
              >
                <div className="text-2xl font-black text-gold-gradient mb-1">
                  {m.value}
                </div>
                <div className="text-[11px] text-white/38 leading-snug">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Differentiators */}
          <div className="mb-8">
            <div className="text-[9px] tracking-[0.45em] text-white/35 uppercase mb-3">
              Avenue Amenities
            </div>
            <div className="flex flex-col gap-2">
              {DIFFERENTIATORS.map((d, i) => (
                <motion.div
                  key={d}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.07 }}
                  className="flex items-center gap-2.5 text-sm text-white/45"
                >
                  <span className="w-1 h-1 rounded-full bg-[#c9a84c]/50 flex-none" />
                  {d}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Current tenants */}
          <div className="mb-8">
            <div className="text-[9px] tracking-[0.45em] text-white/35 uppercase mb-3">
              Current & Pipeline Tenants
            </div>
            <div className="flex flex-wrap gap-1.5">
              {BRANDS.map((brand, i) => (
                <motion.span
                  key={brand}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 + i * 0.04 }}
                  className="px-2.5 py-1 glass-card rounded-full text-[10px] text-white/40 hover:text-white/70 transition-colors cursor-default"
                >
                  {brand}
                </motion.span>
              ))}
            </div>
          </div>

          <button className="inline-flex items-center gap-3 px-8 py-3 border border-[#c9a84c]/35 text-[#c9a84c] text-[11px] tracking-[0.3em] uppercase hover:bg-[#c9a84c]/08 transition-colors rounded-sm">
            View Avenue Availability
            <ArrowRight size={13} />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
