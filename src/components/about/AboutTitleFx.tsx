"use client";

import { useRef } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import styles from "./about.module.scss";

export default function AboutTitleFx({
  title,
  subtitle,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.15"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const mid = 0.5;
    const spread = 0.35; 
    const a = Math.abs(p - mid) / spread;
    const shaped = Math.max(0, 1 - a);
    ref.current?.style.setProperty("--reveal", String(Math.min(1, shaped)));
  });

  return (
    <div ref={ref} className={styles.titleFxWrap}>
      <h2 className={styles.titleFx}>{title}</h2>
      {subtitle ? <p className={styles.subtle}>{subtitle}</p> : null}
    </div>
  );
}
