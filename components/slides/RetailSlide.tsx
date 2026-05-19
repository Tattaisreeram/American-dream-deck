"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, MapPin, Users, TrendingUp } from "lucide-react";
import type { SlideProps } from "@/types/slides";

interface SpaceDemo {
  medianIncome: string;
  avgSpend: string;
  ageRange: string;
  dailyTraffic: string;
}

interface RetailSpace {
  id: number;
  name: string;
  size: string;
  type: string;
  level: string;
  color: string;
  demo: SpaceDemo;
  desc: string;
}

const SPACES: RetailSpace[] = [
  {
    id: 1,
    name: "Avenue Flagship Position",
    size: "2,000 – 8,000 sq ft",
    type: "Luxury Flagship",
    level: "Level 2 – The Avenue",
    color: "#c9a84c",
    demo: {
      medianIncome: "$145K",
      avgSpend: "$380 / visit",
      ageRange: "25 – 54",
      dailyTraffic: "18K / day",
    },
    desc: "Prime frontage on American Dream's luxury corridor. Adjacent to Hermès, Saks Fifth Avenue, and premium international flagships.",
  },
  {
    id: 2,
    name: "Entertainment Retail Pod",
    size: "500 – 2,000 sq ft",
    type: "Experiential / Pop-up",
    level: "Level 1 – Entertainment Zone",
    color: "#9b59b6",
    demo: {
      medianIncome: "$110K",
      avgSpend: "$220 / visit",
      ageRange: "18 – 45",
      dailyTraffic: "25K / day",
    },
    desc: "High-energy retail adjacent to Nickelodeon Universe and DreamWorks Water Park. Ideal for licensing, experiential launches, and limited-run activations.",
  },
  {
    id: 3,
    name: "Dining Terrace Inline",
    size: "1,200 – 5,000 sq ft",
    type: "F&B / Restaurant",
    level: "Level 3 – Dining Terrace",
    color: "#e8904a",
    demo: {
      medianIncome: "$125K",
      avgSpend: "$95 / visit",
      ageRange: "22 – 60",
      dailyTraffic: "12K / day",
    },
    desc: "Elevated dining terrace with skylight atrium views. Positioned for full-service restaurants, premium fast-casual, and flagship F&B concepts.",
  },
  {
    id: 4,
    name: "Grand Atrium Kiosk",
    size: "100 – 400 sq ft",
    type: "Kiosk / Cart",
    level: "Level 1 – Grand Atrium",
    color: "#2ecc71",
    demo: {
      medianIncome: "$115K",
      avgSpend: "$60 / visit",
      ageRange: "All Ages",
      dailyTraffic: "40K / day",
    },
    desc: "Maximum foot traffic. The Grand Atrium anchors the property and serves as the primary arrival point for all visitors.",
  },
  {
    id: 5,
    name: "Big Snow Retail",
    size: "800 – 3,000 sq ft",
    type: "Action Sports / Outdoor",
    level: "Level 4 – Big Snow",
    color: "#4a90d9",
    demo: {
      medianIncome: "$130K",
      avgSpend: "$280 / visit",
      ageRange: "18 – 50",
      dailyTraffic: "8K / day",
    },
    desc: "Capture active lifestyle shoppers at America's only indoor ski slope. Ideal for outdoor apparel, equipment, and adventure lifestyle brands.",
  },
];

const demoFields = [
  { key: "medianIncome" as const, label: "Median HHI", icon: TrendingUp },
  { key: "avgSpend" as const, label: "Avg Spend/Visit", icon: Users },
  { key: "ageRange" as const, label: "Prime Age Range", icon: Users },
  { key: "dailyTraffic" as const, label: "Daily Traffic", icon: Users },
];

export default function RetailSlide(_props: SlideProps) {
  const [selected, setSelected] = useState<RetailSpace | null>(null);

  return (
    <div className="slide-wrapper bg-[#060606] flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_0%_50%,rgba(201,168,76,0.04),transparent)]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 px-8 md:pl-20 pt-16 pb-6 flex-none"
      >
        <div className="text-[9px] tracking-[0.55em] text-[#c9a84c] uppercase mb-3">
          Commercial Real Estate
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-2">
              Retail Leasing
            </h2>
            <p className="text-white/35 text-sm">
              Click any space to view demographics and inquire about
              availability.
            </p>
          </div>
          <div className="hidden md:block text-right mr-4">
            <div className="text-3xl font-black text-[#c9a84c]">450+</div>
            <div className="text-[10px] text-white/25 tracking-widest uppercase">
              Active Tenants
            </div>
          </div>
        </div>
      </motion.div>

      {/* Horizontal gallery */}
      <div className="relative z-10 flex-1 flex items-center px-8 md:pl-20 min-h-0">
        <div className="flex gap-4 overflow-x-auto scrollbar-hidden pb-4 w-full">
          {SPACES.map((space, i) => (
            <motion.button
              key={space.id}
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.09, duration: 0.6 }}
              onClick={() => setSelected(space)}
              className="group relative flex-none w-60 md:w-68 glass-card rounded-2xl overflow-hidden hover:border-white/18 transition-all duration-400 text-left"
              whileHover={{ y: -4 }}
            >
              <div
                className="h-0.5 w-full"
                style={{ background: space.color }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${space.color}10, transparent 60%)`,
                }}
              />
              <div className="p-5 relative z-10">
                <div
                  className="text-[9px] tracking-[0.35em] uppercase mb-3 font-medium"
                  style={{ color: space.color }}
                >
                  {space.type}
                </div>
                <h3 className="text-base font-bold text-white mb-1 leading-snug">
                  {space.name}
                </h3>
                <div className="text-[11px] text-white/35 mb-4 flex items-center gap-1">
                  <MapPin size={9} />
                  {space.level}
                </div>
                <div className="border-t border-white/[0.05] pt-3">
                  <div className="text-[10px] text-white/22 uppercase tracking-widest mb-0.5">
                    Size Range
                  </div>
                  <div className="text-sm font-semibold text-white/65">
                    {space.size}
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] text-white/25 group-hover:text-white/55 transition-colors">
                  <span>View Details</span>
                  <ArrowRight size={9} />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* CTA bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="relative z-10 px-8 md:pl-20 pb-8 flex-none"
      >
        <button className="inline-flex items-center gap-3 px-8 py-3 bg-[#c9a84c] text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#f0d485] transition-colors rounded-sm">
          Inquire About Flagship Availability
          <ArrowRight size={13} />
        </button>
      </motion.div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/55 z-20 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-[#0c0c0c] border-l border-white/[0.07] z-30 overflow-y-auto"
            >
              <div className="p-7">
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="mb-7 p-2 glass-card rounded-lg hover:border-white/20 transition-colors"
                >
                  <X size={14} className="text-white/50" />
                </button>

                <div
                  className="text-[9px] tracking-[0.45em] uppercase mb-2 font-medium"
                  style={{ color: selected.color }}
                >
                  {selected.type}
                </div>
                <h3 className="text-xl font-black text-white mb-1">
                  {selected.name}
                </h3>
                <div className="text-[11px] text-white/35 mb-5 flex items-center gap-1.5">
                  <MapPin size={9} />
                  {selected.level}
                </div>
                <p className="text-sm text-white/45 leading-relaxed mb-7">
                  {selected.desc}
                </p>

                {/* Demographics */}
                <div className="mb-7">
                  <div className="text-[9px] tracking-[0.45em] text-white/25 uppercase mb-3">
                    Shopper Demographics
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {demoFields.map((f) => (
                      <div key={f.key} className="glass-card rounded-lg p-3.5">
                        <div className="text-[10px] text-white/25 mb-1">
                          {f.label}
                        </div>
                        <div className="text-lg font-bold text-white">
                          {selected.demo[f.key]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Size */}
                <div className="glass-card rounded-lg p-4 mb-7">
                  <div className="text-[10px] text-white/25 uppercase tracking-widest mb-1">
                    Available Size
                  </div>
                  <div className="text-xl font-bold text-white">
                    {selected.size}
                  </div>
                </div>

                <button
                  style={{ background: selected.color }}
                  className="w-full py-3.5 text-black text-[11px] font-bold tracking-[0.3em] uppercase rounded-sm hover:opacity-88 transition-opacity"
                >
                  Request Leasing Information
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
