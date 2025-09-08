"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "./section-title-fx.module.scss";

export default function SectionTitleFx({
  title,
  subtitle,
  align = "center",
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const right = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const clip = useTransform(right, (r) => `inset(0 ${r} 0 0)`);

  return (
    <div
      ref={ref}
      className={`${styles.wrap} ${align === "left" ? styles.left : ""}`}
    >
      <h2
        className={styles.title}
        aria-label={typeof title === "string" ? title : undefined}
      >
        <span className={styles.base}>{title}</span>

        <motion.span
          aria-hidden
          className={styles.reveal}
          style={{ clipPath: clip }}
        >
          {title}
        </motion.span>
      </h2>

      {subtitle ? (
        <p className={`${styles.sub} ${align === "left" ? styles.subLeft : ""}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
