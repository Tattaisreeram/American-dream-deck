"use client";

import { motion } from "framer-motion";
import {
  Users,
  Building2,
  Sparkles,
  MapPin,
  TrendingUp,
  Award,
  ArrowRight,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { SLIDE_COLORS } from "@/lib/theme";
import { EASE_OUT } from "@/lib/motion";
import type { SlideProps } from "@/types/slides";

const STATS = [
  {
    icon: Users,
    value: 40,
    suffix: "M+",
    label: "Annual Visitors",
    desc: "More than any entertainment destination in the US Northeast",
    color: SLIDE_COLORS.why,
  },
  {
    icon: Building2,
    value: 3,
    suffix: "M",
    label: "Square Feet",
    desc: "Under one climate-controlled, year-round roof",
    color: SLIDE_COLORS.gold,
  },
  {
    icon: Sparkles,
    value: 450,
    suffix: "+",
    label: "Retailers & Experiences",
    desc: "From luxury flagships to one-of-a-kind activations",
    color: SLIDE_COLORS.luxury,
  },
  {
    icon: MapPin,
    value: 16,
    suffix: "M",
    label: "People Within 1-Hr Drive",
    desc: "The world's most valuable consumer catchment",
    color: SLIDE_COLORS.dining,
  },
  {
    icon: TrendingUp,
    value: 9,
    suffix: "+",
    label: "Unique Attractions",
    desc: "America's only indoor ski, water park & theme park",
    color: SLIDE_COLORS.entertainment,
  },
  {
    icon: Award,
    value: 1,
    suffix: "",
    label: "#1 Tourist Destination in NJ",
    desc: "Surpassing every state landmark in annual visits",
    color: SLIDE_COLORS.events,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: EASE_OUT },
  }),
};

export default function WhySlide(_: SlideProps) {
  return (
    <div className="slide-wrapper bg-[#060606] flex flex-col md:flex-row overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_0%_100%,rgba(10,18,45,0.5),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Left — narrative anchor */}
      <div className="relative md:w-[38%] flex-none flex flex-col justify-center px-8 md:pl-16 lg:pl-20 py-12">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: EASE_OUT }}
        >
          <div className="text-[9px] tracking-[0.55em] text-[#c9a84c] uppercase mb-4 font-medium">
            The Opportunity
          </div>
          <h2
            className="font-black text-white leading-[0.92] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 4rem)" }}
          >
            Why
            <br />
            American
            <br />
            Dream?
          </h2>
          <p className="text-white/45 text-[13px] leading-relaxed mb-8 max-w-xs">
            One address. Incomparable scale. The most valuable consumer audience
            in the world.
          </p>

          {/* Hero stat */}
          <div className="mb-8 pl-4 border-l border-[#c9a84c]/25">
            <div
              className="font-black tabular-nums leading-none mb-1"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#c9a84c" }}
            >
              40M+
            </div>
            <div className="text-[11px] text-white/45 uppercase tracking-widest">
              Annual visitors
            </div>
          </div>

          {/* Location pill */}
          <div className="flex items-center gap-2 mb-8">
            <MapPin size={11} className="text-[#c9a84c] flex-none" />
            <span className="text-[12px] text-white/45">
              East Rutherford, NJ ·{" "}
              <span className="text-white/65 font-medium">
                10 min from Manhattan
              </span>
            </span>
          </div>

          <a
            href="mailto:partnerships@americandream.com?subject=Market%20Analysis%20Request"
            className="inline-flex items-center gap-3 px-6 py-2.5 border border-[#c9a84c]/30 text-[#c9a84c] text-[10px] tracking-[0.3em] uppercase rounded-sm transition-colors"
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(201,168,76,0.08)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            View Full Market Analysis
            <ArrowRight size={11} />
          </a>
        </motion.div>
      </div>

      {/* Right — stats grid */}
      <div className="flex-1 flex items-center justify-center px-6 py-10 overflow-y-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl w-full">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="glass-card rounded-xl p-4 md:p-5"
              >
                <Icon
                  size={14}
                  className="mb-3 opacity-70"
                  style={{ color: stat.color }}
                />
                <div className="text-2xl md:text-3xl font-black text-white mb-1 tabular-nums">
                  <AnimatedCounter
                    to={stat.value}
                    suffix={stat.suffix}
                    duration={2.2}
                  />
                </div>
                <div className="text-[12px] font-semibold text-white/75 mb-1.5 leading-snug">
                  {stat.label}
                </div>
                <div className="text-[10px] text-white/40 leading-relaxed">
                  {stat.desc}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
