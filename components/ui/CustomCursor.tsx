"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { damping: 28, stiffness: 600, mass: 0.4 });
  const y = useSpring(rawY, { damping: 28, stiffness: 600, mass: 0.4 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);

      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractive = !!el?.closest(
        'button, a, [role="button"], input, select, textarea, label'
      );
      setHovered(isInteractive);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [rawX, rawY, visible]);

  return (
    <motion.div
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
      animate={{
        opacity: visible ? 1 : 0,
        scale: hovered ? 2 : 1,
        backgroundColor: hovered
          ? "rgba(201,168,76,0.25)"
          : "rgba(201,168,76,0.55)",
        width: hovered ? 24 : 10,
        height: hovered ? 24 : 10,
      }}
      transition={{ scale: { duration: 0.18 }, opacity: { duration: 0.12 } }}
    />
  );
}
