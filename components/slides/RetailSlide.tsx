"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, MapPin, Gem, Zap, Utensils, Users, Snowflake } from "lucide-react";

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
  icon: React.ElementType;
  sqft: string;
  occupancy: string;
  traffic: string;
  demo: SpaceDemo;
  desc: string;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const SPACES: RetailSpace[] = [
  {
    id: 1,
    name: "Avenue Flagship",
    size: "2,000 – 8,000 sq ft",
    type: "Luxury Flagship",
    level: "Level 2 – The Avenue",
    color: "#c9a84c",
    icon: Gem,
    sqft: "560K sq ft",
    occupancy: "96% leased",
    traffic: "18K / day",
    demo: { medianIncome: "$145K", avgSpend: "$380 / visit", ageRange: "25 – 54", dailyTraffic: "18K / day" },
    desc: "Prime frontage on American Dream's luxury corridor. Adjacent to Hermès, Saks Fifth Avenue, and premium international flagships.",
  },
  {
    id: 2,
    name: "Entertainment Pod",
    size: "500 – 2,000 sq ft",
    type: "Experiential / Pop-up",
    level: "Level 1 – Entertainment Zone",
    color: "#9b59b6",
    icon: Zap,
    sqft: "320K sq ft",
    occupancy: "88% leased",
    traffic: "25K / day",
    demo: { medianIncome: "$110K", avgSpend: "$220 / visit", ageRange: "18 – 45", dailyTraffic: "25K / day" },
    desc: "High-energy retail adjacent to Nickelodeon Universe and DreamWorks Water Park. Ideal for licensing and experiential launches.",
  },
  {
    id: 3,
    name: "Dining Terrace",
    size: "1,200 – 5,000 sq ft",
    type: "F&B / Restaurant",
    level: "Level 3 – Dining Terrace",
    color: "#e8904a",
    icon: Utensils,
    sqft: "410K sq ft",
    occupancy: "92% leased",
    traffic: "12K / day",
    demo: { medianIncome: "$125K", avgSpend: "$95 / visit", ageRange: "22 – 60", dailyTraffic: "12K / day" },
    desc: "Elevated dining terrace with skylight atrium views. Positioned for full-service and premium fast-casual concepts.",
  },
  {
    id: 4,
    name: "Grand Atrium",
    size: "100 – 400 sq ft",
    type: "Kiosk / Cart",
    level: "Level 1 – Grand Atrium",
    color: "#2ecc71",
    icon: Users,
    sqft: "35K sq ft",
    occupancy: "100% leased",
    traffic: "40K / day",
    demo: { medianIncome: "$115K", avgSpend: "$60 / visit", ageRange: "All Ages", dailyTraffic: "40K / day" },
    desc: "Maximum foot traffic. The Grand Atrium anchors the property as the primary arrival and dwell point for all visitors.",
  },
  {
    id: 5,
    name: "Big Snow Retail",
    size: "800 – 3,000 sq ft",
    type: "Action Sports",
    level: "Level 4 – Big Snow",
    color: "#4a90d9",
    icon: Snowflake,
    sqft: "180K sq ft",
    occupancy: "84% leased",
    traffic: "8K / day",
    demo: { medianIncome: "$130K", avgSpend: "$280 / visit", ageRange: "18 – 50", dailyTraffic: "8K / day" },
    desc: "Capture active lifestyle shoppers at America's only indoor ski slope. Ideal for outdoor apparel and adventure lifestyle brands.",
  },
];

const demoFields = [
  { key: "medianIncome" as const, label: "Median HHI" },
  { key: "avgSpend" as const, label: "Avg Spend" },
  { key: "ageRange" as const, label: "Age Range" },
  { key: "dailyTraffic" as const, label: "Daily Traffic" },
];

export default function RetailSlide() {
  const [selected, setSelected] = useState<RetailSpace | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeModal = () => setSelected(null);

  // Escape to close + focus the close button when modal opens
  useEffect(() => {
    if (!selected) return;
    closeButtonRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    globalThis.addEventListener("keydown", onKey);
    return () => globalThis.removeEventListener("keydown", onKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div className="slide-wrapper bg-[#050505] flex flex-col md:flex-row overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(25,15,5,0.5),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_50%,rgba(201,168,76,0.06),transparent)]" />

      {/* Left — pitch panel */}
      <div className="relative md:w-[42%] flex-none flex flex-col justify-center px-8 md:pl-20 py-14 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="text-[9px] tracking-[0.55em] text-[#c9a84c] uppercase mb-3 font-medium">
            Commercial Real Estate
          </div>
          <h2
            className="font-black text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            5 Retail Zones.
            <br />
            <span className="text-gold-gradient">One Premium</span>
            <br />
            Address.
          </h2>
          <p className="text-white/45 text-sm leading-relaxed mb-7 max-w-sm">
            3.5M sq ft of leasable space across five distinct retail environments,
            each with its own shopper profile, dwell pattern, and brand adjacency.
          </p>

          <div className="flex flex-col gap-2.5 mb-8">
            {[
              "450+ active tenants across all five zones",
              "40M+ annual visitors — top East Coast destination",
              "Average $280 spend per household visit",
              "Year-round, climate-controlled foot traffic",
            ].map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32 + i * 0.09, ease: EASE }}
                className="flex items-start gap-2.5 text-sm text-white/50"
              >
                <span className="mt-[5px] w-1 h-1 rounded-full flex-none bg-[#c9a84c]/60" />
                {point}
              </motion.div>
            ))}
          </div>

          <button
            className="inline-flex items-center gap-3 px-8 py-3 text-black text-[11px] font-bold tracking-[0.3em] uppercase rounded-sm transition-colors"
            style={{ background: "#c9a84c" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f0d485")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a84c")}
          >
            Explore Leasing Opportunities
            <ArrowRight size={13} />
          </button>
        </motion.div>
      </div>

      {/* Right — zone card grid */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 overflow-y-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-2xl">
          {SPACES.map((space, i) => {
            const Icon = space.icon;
            return (
              <motion.button
                key={space.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.14 + i * 0.07, duration: 0.5, ease: EASE }}
                onClick={() => setSelected(space)}
                className="group glass-card rounded-2xl p-5 text-left hover:border-white/18 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -3 }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: `${space.color}18` }}
                >
                  <Icon size={15} style={{ color: space.color }} />
                </div>
                <div className="text-base font-bold text-white mb-0.5 leading-snug">
                  {space.name}
                </div>
                <div
                  className="text-[9px] uppercase tracking-widest mb-3 font-medium"
                  style={{ color: space.color }}
                >
                  {space.type}
                </div>
                <div
                  className="text-[11px] font-semibold mb-1"
                  style={{ color: space.color }}
                >
                  {space.traffic}
                </div>
                <div className="text-[10px] text-white/40 leading-snug">
                  {space.occupancy}
                </div>
                <div className="mt-3 flex items-center gap-1 text-[9px] text-white/25 group-hover:text-white/55 transition-colors">
                  View details <ArrowRight size={9} className="mt-px" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Detail panel */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
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
                  ref={closeButtonRef}
                  onClick={closeModal}
                  aria-label="Close"
                  className="mb-6 p-2 glass-card rounded-lg hover:border-white/20 transition-colors"
                >
                  <X size={14} className="text-white/50" />
                </button>

                <div
                  className="text-[9px] tracking-[0.45em] uppercase mb-2 font-medium"
                  style={{ color: selected.color }}
                >
                  {selected.type}
                </div>
                <h3 className="text-xl font-black text-white mb-1">{selected.name}</h3>
                <div className="text-[11px] text-white/40 mb-5 flex items-center gap-1.5">
                  <MapPin size={9} />
                  {selected.level}
                </div>
                <p className="text-sm text-white/50 leading-relaxed mb-7">{selected.desc}</p>

                <div className="mb-6">
                  <div className="text-[9px] tracking-[0.45em] text-white/35 uppercase mb-3">
                    Shopper Demographics
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {demoFields.map((f) => (
                      <div key={f.key} className="glass-card rounded-lg p-3.5">
                        <div className="text-[10px] text-white/35 mb-1">{f.label}</div>
                        <div className="text-lg font-bold text-white">{selected.demo[f.key]}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card rounded-lg p-4 mb-7">
                  <div className="text-[10px] text-white/35 uppercase tracking-widest mb-1">
                    Available Size Range
                  </div>
                  <div className="text-xl font-bold text-white">{selected.size}</div>
                </div>

                <button
                  style={{ background: selected.color }}
                  className="w-full py-3.5 text-black text-[11px] font-bold tracking-[0.3em] uppercase rounded-sm hover:opacity-88 transition-opacity"
                >
                  Request Leasing Info
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
