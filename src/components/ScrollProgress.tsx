"use client";

import { motion, useScroll } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        transformOrigin: "0% 50%",
        scaleX: scrollYProgress,
        background:
          "linear-gradient(90deg, var(--brand-background-strong), var(--accent-background-strong))",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
