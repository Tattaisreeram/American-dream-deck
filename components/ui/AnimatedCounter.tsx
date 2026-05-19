"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface Props {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2.2,
  suffix = "",
  prefix = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return controls.stop;
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className="counter-num">
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
