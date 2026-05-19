"use client";

import { motion } from "framer-motion";
import { Calendar, Music, Building2, Users, Mic, ArrowRight, CheckCircle } from "lucide-react";
import type { SlideProps } from "@/types/slides";

const VENUES = [
  {
    name: "Grand Atrium",
    type: "Flagship Event Space",
    capacity: "10,000 standing",
    sqft: "35,000 sq ft",
    best: "Concerts, product launches, press events",
  },
  {
    name: "Performing Arts Center",
    type: "World-Class Theater",
    capacity: "2,500 seats",
    sqft: "45,000 sq ft",
    best: "Broadway tours, award shows, corporate galas",
  },
  {
    name: "Exposition Center",
    type: "Convention & Trade Show",
    capacity: "Unlimited config",
    sqft: "150,000 sq ft",
    best: "Trade shows, conventions, multi-day expos",
  },
  {
    name: "East Rutherford Terrace",
    type: "Outdoor Activation",
    capacity: "5,000 outdoor",
    sqft: "25,000 sq ft",
    best: "Outdoor concerts, food festivals, activations",
  },
];

const EVENT_TYPES = [
  {
    icon: Music,
    title: "Concerts & Live Music",
    desc: "Full production capabilities, backstage facilities, premium artist hospitality",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    desc: "End-to-end planning support, A/V infrastructure, catering partnerships",
  },
  {
    icon: Mic,
    title: "Brand Activations",
    desc: "High-traffic atrium spaces, custom buildout support, experiential design",
  },
  {
    icon: Users,
    title: "Trade Shows & Expos",
    desc: "Expo-grade flooring, loading docks, multi-room breakout configurations",
  },
];

const CAPABILITIES = [
  "In-house A/V production team",
  "Green room & artist hospitality",
  "4K LED screens & rigging",
  "On-site catering commissary",
  "Dedicated loading docks",
  "RFID & mobile ticketing",
  "Broadcast-ready uplink",
  "Climate-controlled throughout",
  "Free parking, 26,000 spaces",
];

const ACCENT = "#2ecc71";

export default function EventsSlide(_props: SlideProps) {
  return (
    <div className="slide-wrapper-scroll bg-[#050505] flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_0%,rgba(46,204,113,0.04),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_0%_100%,rgba(201,168,76,0.03),transparent)]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 px-8 md:pl-20 pt-16 pb-4 flex-none"
      >
        <div
          className="text-[9px] tracking-[0.55em] uppercase mb-3 font-medium"
          style={{ color: ACCENT }}
        >
          Events & Venues
        </div>
        <div className="flex items-end justify-between mb-2">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Your Stage.
            <br />
            Global Scale.
          </h2>
          <div className="hidden md:block text-right mr-4">
            <div
              className="text-3xl font-black counter-num"
              style={{ color: ACCENT }}
            >
              200+
            </div>
            <div className="text-[10px] text-white/25 tracking-widest uppercase">
              Events / Year
            </div>
          </div>
        </div>
        <p className="text-white/38 text-sm max-w-lg">
          From intimate product launches to arena-scale concerts — every
          infrastructure you need, built into one address.
        </p>
      </motion.div>

      {/* Venue specs table */}
      <div className="relative z-10 px-8 md:pl-20 mb-5 flex-none overflow-x-auto scrollbar-hidden">
        <div className="text-[9px] tracking-[0.45em] text-white/22 uppercase mb-3">
          Venue Specifications
        </div>
        <table className="w-full text-sm min-w-[600px]">
          <thead>
            <tr className="border-b border-white/[0.05]">
              {["Venue", "Capacity", "Square Footage", "Best For"].map((h) => (
                <th
                  key={h}
                  className="text-left text-[10px] tracking-[0.3em] text-white/25 uppercase pb-2.5 pr-6 font-medium"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {VENUES.map((v, i) => (
              <motion.tr
                key={v.name}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.07 }}
                className="border-b border-white/[0.04] hover:bg-white/[0.015] transition-colors"
              >
                <td className="py-3.5 pr-6">
                  <div className="font-semibold text-white text-sm">
                    {v.name}
                  </div>
                  <div className="text-[10px] text-white/28">{v.type}</div>
                </td>
                <td className="py-3.5 pr-6 text-white/55 text-sm whitespace-nowrap">
                  {v.capacity}
                </td>
                <td
                  className="py-3.5 pr-6 text-sm whitespace-nowrap font-semibold"
                  style={{ color: ACCENT }}
                >
                  {v.sqft}
                </td>
                <td className="py-3.5 text-white/38 text-[12px]">{v.best}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Event types */}
      <div className="relative z-10 px-8 md:pl-20 grid grid-cols-2 md:grid-cols-4 gap-3 mb-5 flex-none">
        {EVENT_TYPES.map((et, i) => {
          const Icon = et.icon;
          return (
            <motion.div
              key={et.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 + i * 0.08 }}
              className="glass-card rounded-xl p-4"
            >
              <Icon size={14} className="mb-2.5" style={{ color: ACCENT }} />
              <div className="text-sm font-bold text-white mb-1.5">
                {et.title}
              </div>
              <div className="text-[11px] text-white/28 leading-snug">
                {et.desc}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Capabilities checklist */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="relative z-10 px-8 md:pl-20 mb-5 flex-none"
      >
        <div className="text-[9px] tracking-[0.45em] text-white/22 uppercase mb-3">
          Included Infrastructure
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-1.5 gap-x-4">
          {CAPABILITIES.map((cap) => (
            <div key={cap} className="flex items-center gap-2 text-[11px] text-white/38">
              <CheckCircle size={10} style={{ color: ACCENT, flexShrink: 0 }} />
              {cap}
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="relative z-10 px-8 md:pl-20 pb-8 flex gap-3 flex-none flex-wrap"
      >
        <button
          className="inline-flex items-center gap-3 px-8 py-3 text-black text-[11px] font-bold tracking-[0.3em] uppercase rounded-sm transition-all"
          style={{ background: ACCENT }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "#27ae60")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = ACCENT)
          }
        >
          Book a Venue
          <ArrowRight size={13} />
        </button>
        <button className="inline-flex items-center gap-3 px-8 py-3 border border-white/15 text-white/50 text-[11px] tracking-[0.3em] uppercase hover:border-white/30 hover:text-white/75 transition-all rounded-sm">
          <Calendar size={13} />
          Download Event Guide
        </button>
      </motion.div>
    </div>
  );
}
