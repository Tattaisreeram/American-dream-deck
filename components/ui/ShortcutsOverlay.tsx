"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { EASE_OUT } from "@/lib/motion";

interface Props {
  readonly open: boolean;
  readonly onClose: () => void;
}

const SHORTCUTS = [
  { keys: ["→", "↓"], desc: "Next slide" },
  { keys: ["←", "↑"], desc: "Previous slide" },
  { keys: ["1 – 8"], desc: "Jump to chapter" },
  { keys: ["?"], desc: "Toggle this panel" },
  { keys: ["Esc"], desc: "Close this panel" },
];

export default function ShortcutsOverlay({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "?") onClose();
    };
    globalThis.addEventListener("keydown", onKey);
    return () => globalThis.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            role="dialog"
            aria-label="Keyboard shortcuts"
            className="fixed inset-0 z-[91] flex items-center justify-center p-6 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-sm rounded-2xl p-7"
              style={{
                background: "rgba(12,12,12,0.97)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(24px)",
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] font-medium">
                  Keyboard Shortcuts
                </span>
                <button
                  onClick={onClose}
                  aria-label="Close shortcuts"
                  className="p-1.5 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/[0.05] transition-colors"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="flex flex-col gap-3.5">
                {SHORTCUTS.map(({ keys, desc }) => (
                  <div
                    key={desc}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="text-[13px] text-white/50">{desc}</span>
                    <div className="flex items-center gap-1 flex-none">
                      {keys.map((k) => (
                        <kbd
                          key={k}
                          className="px-2 py-1 rounded text-[10px] font-mono text-white/45"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          {k}
                        </kbd>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[10px] text-white/25 text-center">
                Press <kbd className="font-mono">?</kbd> anytime to toggle
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
