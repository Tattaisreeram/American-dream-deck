"use client";

import { SLIDE_COLORS } from "@/lib/theme";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle,
  Mic,
  Music,
  Users,
} from "lucide-react";


const VENUES = [
  {
    name: "Grand Atrium",
    type: "Flagship Event Space",
    capacity: "10,000",
    unit: "standing",
    sqft: "35,000 sq ft",
    best: "Concerts · product launches · press events",
  },
  {
    name: "Performing Arts Center",
    type: "World-Class Theater",
    capacity: "2,500",
    unit: "seats",
    sqft: "45,000 sq ft",
    best: "Broadway tours · award shows · galas",
  },
  {
    name: "Exposition Center",
    type: "Convention & Trade Show",
    capacity: "Flex",
    unit: "layout",
    sqft: "150,000 sq ft",
    best: "Trade shows · conventions · expos",
  },
  {
    name: "East Rutherford Terrace",
    type: "Outdoor Activation",
    capacity: "5,000",
    unit: "outdoor",
    sqft: "25,000 sq ft",
    best: "Outdoor concerts · festivals · pop-ups",
  },
];

const EVENT_TYPES = [
  { icon: Music, label: "Concerts & Live Music" },
  { icon: Building2, label: "Corporate Events" },
  { icon: Mic, label: "Brand Activations" },
  { icon: Users, label: "Trade Shows & Expos" },
];
 
const CAPABILITIES = [
  "In-house A/V production",
  "4K LED screens & rigging",
  "Green room & artist hospitality",
  "Broadcast-ready uplink",
  "Dedicated loading docks",
  "26,000 free parking spaces",
];

const ACCENT = SLIDE_COLORS.events;

export default function EventsSlide() {
  return (
    <div className="slide-wrapper-scroll bg-[#050505] flex flex-col">
      {/* Photo background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/event.jpg')" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(6,6,2,0.88) 0%, rgba(8,8,8,0.92) 100%)" }}
      />
      {/* Subtle background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_0%,rgba(46,204,113,0.04),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_100%,rgba(201,168,76,0.03),transparent)] pointer-events-none" />

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 px-10 md:px-16 pt-10 pb-8"
      >
        <p
          className="text-[9px] tracking-[0.6em] uppercase mb-4 font-medium"
          style={{ color: ACCENT }}
        >
          Events &amp; Venues
        </p>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tight">
              Your Stage.
            </h2>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tight mb-4">
              Global Scale.
            </h2>
            <p className="text-white/40 text-sm max-w-md leading-relaxed">
              From intimate product launches to arena-scale concerts — every
              infrastructure you need, under one roof.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end gap-1 pb-1">
            <span
              className="text-5xl font-black counter-num"
              style={{ color: ACCENT }}
            >
              200+
            </span>
            <span className="text-[10px] text-white/40 tracking-[0.3em] uppercase">
              Events / Year
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── Two-column body ── */}
      <div className="relative z-10 px-10 md:px-16 flex flex-col lg:flex-row gap-10 pb-10">

        {/* Left col — venue table */}
        <div className="flex-1 min-w-0">
          <p className="text-[9px] tracking-[0.5em] text-white/25 uppercase mb-5">
            Venue Specifications
          </p>
          <div className="flex flex-col gap-3">
            {VENUES.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.55 }}
                className="glass-card rounded-xl p-5 flex items-start justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-white text-base leading-snug">
                    {v.name}
                  </p>
                  <p className="text-[11px] text-white/30 mt-0.5">{v.type}</p>
                  <p className="text-[11px] text-white/35 mt-2 leading-snug">
                    {v.best}
                  </p>
                </div>
                <div className="flex-none flex flex-col items-end gap-1 text-right">
                  <span
                    className="text-lg font-black counter-num"
                    style={{ color: ACCENT }}
                  >
                    {v.sqft}
                  </span>
                  <span className="text-[11px] text-white/40">
                    {v.capacity}{" "}
                    <span className="text-white/35">{v.unit}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right col — event types + capabilities + CTAs */}
        <div className="lg:w-72 flex-none flex flex-col gap-7">

          {/* Event types */}
          <div>
            <p className="text-[9px] tracking-[0.5em] text-white/25 uppercase mb-4">
              Event Types
            </p>
            <div className="flex flex-col gap-2.5">
              {EVENT_TYPES.map((et, i) => {
                const Icon = et.icon;
                return (
                  <motion.div
                    key={et.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.07 }}
                    className="flex items-center gap-3 glass-card rounded-lg px-4 py-3"
                  >
                    <Icon size={13} style={{ color: ACCENT, flexShrink: 0 }} />
                    <span className="text-sm text-white/65">{et.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Infrastructure */}
          <div>
            <p className="text-[9px] tracking-[0.5em] text-white/25 uppercase mb-4">
              Included Infrastructure
            </p>
            <div className="flex flex-col gap-2">
              {CAPABILITIES.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 + i * 0.06 }}
                  className="flex items-center gap-2.5 text-[12px] text-white/40"
                >
                  <CheckCircle
                    size={11}
                    style={{ color: ACCENT, flexShrink: 0 }}
                  />
                  {cap}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col gap-3 pt-2"
          >
            <a
              href="mailto:events@americandream.com?subject=Venue%20Booking%20Inquiry"
              className="flex items-center justify-center gap-2.5 py-3.5 text-black text-[11px] font-bold tracking-[0.25em] uppercase rounded-sm transition-all"
              style={{ background: ACCENT }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#27ae60")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = ACCENT)
              }
            >
              Book a Venue
              <ArrowRight size={12} />
            </a>
            <a
              href="/event-guide?print=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-3 border border-white/12 text-white/40 text-[11px] tracking-[0.25em] uppercase hover:border-white/25 hover:text-white/65 transition-all rounded-sm"
            >
              <Calendar size={12} />
              Download Event Guide
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
