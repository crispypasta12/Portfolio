"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button, Media, Row, Text } from "@once-ui-system/core";
import { useRouter } from "next/navigation";
import styles from "./signature-carousel.module.scss";

export type Highlight = {
  title: string;
  blurb: string;
  src: string;
  alt: string;
  href?: string;
};

export default function SignatureCarousel({ items }: { items: Highlight[] }) {
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const allowNav = items.length > 1;

  const go = (dir: number) => allowNav && setIndex((i) => (i + dir + items.length) % items.length);
  const prev = (index - 1 + items.length) % items.length;
  const next = (index + 1) % items.length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const active = items[index];
  const stop: React.MouseEventHandler<HTMLElement> = (e) => e.stopPropagation();

  return (
    <div className={styles.stage}>
      {/* left/right peeks */}
      {allowNav && (
        <>
          <article className={`${styles.peek} ${styles.left}`} onClick={() => go(-1)}>
            <div className={styles.media}>
              <Media src={items[prev].src} alt={items[prev].alt} radius="l" />
            </div>
            <div className={styles.peekOverlay} />
          </article>
          <article className={`${styles.peek} ${styles.right}`} onClick={() => go(1)}>
            <div className={styles.media}>
              <Media src={items[next].src} alt={items[next].alt} radius="l" />
            </div>
            <div className={styles.peekOverlay} />
          </article>
        </>
      )}

      {/* focused card */}
      <AnimatePresence mode="wait">
        <motion.article
          key={active.title}
          className={styles.card}
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.28 }}
          onClick={() => active.href && router.push(active.href)}
          role={active.href ? "link" : undefined}
        >
          <div className={styles.media}>
            <Media alt={active.alt} src={active.src} radius="l" />
          </div>
          <div className={styles.content}>
            <Text variant="heading-strong-l">{active.title}</Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {active.blurb}
            </Text>
            {active.href && (
              <Row paddingTop="8">
                <Button
                  href={active.href}
                  variant="secondary"
                  size="s"
                  arrowIcon
                  data-border="rounded"
                  label="View details"
                  onClick={stop}
                />
              </Row>
            )}
          </div>
        </motion.article>
      </AnimatePresence>

      {/* arrows */}
      {allowNav && (
        <>
          <button aria-label="Previous" className={`${styles.nav} ${styles.leftNav}`} onClick={() => go(-1)}>‹</button>
          <button aria-label="Next" className={`${styles.nav} ${styles.rightNav}`} onClick={() => go(1)}>›</button>
        </>
      )}

      {/* dots */}
      {allowNav && (
        <div className={styles.dots} role="tablist" aria-label="Slides">
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              className={`${styles.dot} ${i === index ? styles.active : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
