"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const visibleRef = useRef(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { damping: 28, stiffness: 600, mass: 0.4 });
  const y = useSpring(rawY, { damping: 28, stiffness: 600, mass: 0.4 });

  // Add/remove class on body so globals.css can scope cursor:none safely
  useEffect(() => {
    document.body.classList.add("has-custom-cursor");
    return () => document.body.classList.remove("has-custom-cursor");
  }, []);

  useEffect(() => {
    let rafId = 0;
    let pendingX = -100;
    let pendingY = -100;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }

      pendingX = e.clientX;
      pendingY = e.clientY;

      // Throttle the expensive hit-test to once per animation frame
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const el = document.elementFromPoint(pendingX, pendingY);
        setHovered(
          !!el?.closest('button, a, [role="button"], input, select, textarea, label')
        );
      });
    };

    const onLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };
    const onEnter = () => {
      visibleRef.current = true;
      setVisible(true);
    };

    globalThis.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    return () => {
      globalThis.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId);
    };
  }, [rawX, rawY]);

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
