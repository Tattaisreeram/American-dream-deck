"use client";

import { motion } from "framer-motion";
import { ArrowRight, Snowflake, Waves, Star, Fish, Ticket, Zap } from "lucide-react";
import type { SlideProps } from "@/types/slides";

const ATTRACTIONS = [
  {
    name: "Big Snow",
    sub: "America's First Indoor Ski Slope",
    icon: Snowflake,
    color: "#4a90d9",
    stat: "180,000 sq ft",
    detail: "Year-round skiing, snowboarding & tubing",
  },
  {
    name: "DreamWorks Water Park",
    sub: "World's Largest Indoor Water Park",
    icon: Waves,
    color: "#2ecc71",
    stat: "532,000 sq ft",
    detail: "40+ rides, DreamWorks characters throughout",
  },
  {
    name: "Nickelodeon Universe",
    sub: "America's Largest Indoor Theme Park",
    icon: Star,
    color: "#f39c12",
    stat: "8 acres",
    detail: "35 rides across 8 fully themed lands",
  },
  {
    name: "SEA LIFE Aquarium",
    sub: "Marine Conservation & Wonder",
    icon: Fish,
    color: "#1abc9c",
    stat: "120+ species",
    detail: "Walk-through ocean tunnel and touch pools",
  },
  {
    name: "The Rink",
    sub: "NHL-Grade Ice Skating",
    icon: Ticket,
    color: "#9b59b6",
    stat: "200-seat arena",
    detail: "Public skating, hockey leagues, private events",
  },
  {
    name: "Angry Birds Mini Golf",
    sub: "Adventure Mini Golf Experience",
    icon: Zap,
    color: "#e74c3c",
    stat: "18 holes",
    detail: "Interactive adventure golf with Angry Birds IP",
  },
];

const ACCENT = "#9b59b6";

export default function EntertainmentSlide(_props: SlideProps) {
  return (
    <div className="slide-wrapper bg-[#050510] flex flex-col md:flex-row overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_90%_at_50%_50%,rgba(50,15,90,0.28),transparent)]" />

      {/* Left — pitch panel */}
      <div className="relative md:w-[42%] flex-none flex flex-col justify-center px-8 md:pl-20 py-14 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="text-[9px] tracking-[0.55em] uppercase mb-3 font-medium"
            style={{ color: ACCENT }}
          >
            Entertainment
          </div>
          <h2
            className="font-black text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            9 World-Class
            <br />
            <span className="text-gold-gradient">Attractions.</span>
            <br />
            One Roof.
          </h2>
          <p className="text-white/38 text-sm leading-relaxed mb-7 max-w-sm">
            No other address in America combines skiing, a theme park, a water
            park, an aquarium, and world-class retail under one roof. American
            Dream doesn&apos;t compete with entertainment destinations—it is one.
          </p>

          <div className="flex flex-col gap-2.5 mb-8">
            {[
              "40M+ annual visits driven by entertainment",
              "92% of visitors come specifically for attractions",
              "Average 4.5 hour dwell time",
              "Premium co-branding on every attraction",
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32 + i * 0.09 }}
                className="flex items-start gap-2.5 text-sm text-white/45"
              >
                <span
                  className="mt-[5px] w-1 h-1 rounded-full flex-none"
                  style={{ background: ACCENT }}
                />
                {point}
              </motion.div>
            ))}
          </div>

          <button
            className="inline-flex items-center gap-3 px-8 py-3 text-white text-[11px] font-bold tracking-[0.3em] uppercase rounded-sm transition-all"
            style={{ background: ACCENT }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#8e44ad")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = ACCENT)
            }
          >
            Explore Activation Tiers
            <ArrowRight size={13} />
          </button>
        </motion.div>
      </div>

      {/* Right — attractions grid */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 overflow-y-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-2xl">
          {ATTRACTIONS.map((attr, i) => {
            const Icon = attr.icon;
            return (
              <motion.div
                key={attr.name}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.14 + i * 0.07,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-card rounded-2xl p-5 hover:border-white/18 transition-all duration-300 cursor-default"
                whileHover={{ y: -3 }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: `${attr.color}18` }}
                >
                  <Icon size={15} style={{ color: attr.color }} />
                </div>
                <div className="text-base font-bold text-white mb-0.5 leading-snug">
                  {attr.name}
                </div>
                <div className="text-[10px] text-white/28 mb-2 leading-snug">
                  {attr.sub}
                </div>
                <div
                  className="text-[11px] font-semibold"
                  style={{ color: attr.color }}
                >
                  {attr.stat}
                </div>
                <div className="text-[10px] text-white/22 mt-1 leading-snug">
                  {attr.detail}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
