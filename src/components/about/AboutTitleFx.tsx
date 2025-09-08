"use client";

import { useRef, useState } from "react";
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
    offset: ["start 0.8", "end 0.2"],
  });

  const [dir, setDir] = useState<"down" | "up">("down");
  const last = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setDir(v > last.current ? "down" : "up");
    last.current = v;
    ref.current?.style.setProperty("--reveal", String(v));
  });

  return (
    <div ref={ref} className={styles.titleFxWrap} data-dir={dir}>
      <h2 className={styles.titleFx}>{title}</h2>
      {subtitle ? <p className={styles.subtle}>{subtitle}</p> : null}
    </div>
  );
}
