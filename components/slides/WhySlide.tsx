"use client";

import { motion } from "framer-motion";
import {
  Users,
  Building2,
  Sparkles,
  MapPin,
  TrendingUp,
  Award,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import type { SlideProps } from "@/types/slides";

const STATS = [
  {
    icon: Users,
    value: 40,
    suffix: "M+",
    label: "Annual Visitors",
    desc: "More than any entertainment destination in the US Northeast",
    color: "#4a90d9",
  },
  {
    icon: Building2,
    value: 3,
    suffix: "M",
    label: "Square Feet",
    desc: "Under one climate-controlled, year-round roof",
    color: "#c9a84c",
  },
  {
    icon: Sparkles,
    value: 450,
    suffix: "+",
    label: "Retailers & Experiences",
    desc: "From luxury flagships to one-of-a-kind concepts",
    color: "#e8c4d0",
  },
  {
    icon: MapPin,
    value: 16,
    suffix: "M",
    label: "People Within 1-Hour Drive",
    desc: "Serving the world's most valuable consumer market",
    color: "#e8904a",
  },
  {
    icon: TrendingUp,
    value: 9,
    suffix: "+",
    label: "Unique Attractions",
    desc: "America's only indoor ski slope, water park, and theme park",
    color: "#9b59b6",
  },
  {
    icon: Award,
    value: 1,
    suffix: "",
    label: "#1 Tourist Destination in NJ",
    desc: "Surpassing every state landmark in annual visit count",
    color: "#2ecc71",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function WhySlide(_props: SlideProps) {
  return (
    <div className="slide-wrapper bg-[#060606] flex flex-col items-center justify-center px-6 md:pl-20 overflow-y-auto">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_110%,rgba(10,18,45,0.55),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-10 relative z-10 pt-14"
      >
        <div className="text-[9px] tracking-[0.55em] text-[#c9a84c] uppercase mb-3">
          The Opportunity
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">
          Why American Dream?
        </h2>
        <p className="text-white/40 text-base max-w-lg mx-auto">
          One address. Incomparable scale. The most valuable consumer audience
          on the planet.
        </p>
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl w-full relative z-10">
        {STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="glass-card rounded-xl p-5 md:p-6"
            >
              <Icon
                size={15}
                className="mb-3 opacity-75"
                style={{ color: stat.color }}
              />
              <div
                className="text-3xl md:text-4xl font-black text-white mb-1"
              >
                <AnimatedCounter
                  to={stat.value}
                  suffix={stat.suffix}
                  duration={2.4}
                />
              </div>
              <div className="text-sm font-semibold text-white/75 mb-1.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-white/30 leading-relaxed">
                {stat.desc}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Location pill */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-7 mb-6 relative z-10"
      >
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-[#c9a84c]/18 rounded-full">
          <MapPin size={11} className="text-[#c9a84c]" />
          <span className="text-sm text-white/50">
            East Rutherford, NJ ·{" "}
            <span className="text-white/75 font-medium">
              10 miles from Midtown Manhattan
            </span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
