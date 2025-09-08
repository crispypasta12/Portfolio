"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "./section-title-fx.module.scss";

export default function SectionTitleFx({
  title,
  subtitle,
}: { title: React.ReactNode; subtitle?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  // Full viewport journey: when the block enters from below until it fully leaves above
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 0..1 -> inset(0 <right> 0 0)  (right = 100%..0%)
  const right = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const clip = useTransform(right, (r) => `inset(0 ${r} 0 0)`);

  return (
    <div ref={ref} className={styles.wrap}>
      <h2 className={styles.title} aria-label={typeof title === "string" ? title : undefined}>
        {/* base (dark) text: always visible */}
        <span className={styles.base}>{title}</span>

        {/* revealed (white) text: clipped by scroll */}
        <motion.span
          aria-hidden
          className={styles.reveal}
          style={{ clipPath: clip }}
        >
          {title}
        </motion.span>
      </h2>

      {subtitle ? <p className={styles.sub}>{subtitle}</p> : null}
    </div>
  );
}
