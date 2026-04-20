"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button, Media, Row, Text, IconButton } from "@once-ui-system/core";
import { useRouter } from "next/navigation";
import styles from "./signature-carousel.module.scss";

export type Highlight = {
  title: string;
  blurb: string;
  src: string;
  alt: string;
  href?: string;
};

export default function SignatureCarousel({
  items,
  autoShuffleMs = 0,        // 0 = off; e.g. 8000 to auto-shuffle every 8s
}: {
  items: Highlight[];
  autoShuffleMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [shuffling, setShuffling] = useState(false);
  const router = useRouter();
  const allowNav = items.length > 1;

  const go = useCallback(
    (dir: number) => {
      if (!allowNav) return;
      setIndex((i) => (i + dir + items.length) % items.length);
    },
    [allowNav, items.length]
  );

  // “Shuffle” picks a non-current index and plays a more playful exit/enter
  const shuffle = useCallback(() => {
    if (!allowNav) return;
    setShuffling(true);
    const choices = items.map((_, i) => i).filter((i) => i !== index);
    const next = choices[Math.floor(Math.random() * choices.length)];
    // small delay so exit anim plays before we switch
    setTimeout(() => {
      setIndex(next);
      setShuffling(false);
    }, 160);
  }, [allowNav, items, index]);

  useEffect(() => {
    setIndex((i) => (items.length ? i % items.length : 0));
  }, [items.length]);

  useEffect(() => {
    if (!autoShuffleMs) return;
    const id = setInterval(shuffle, autoShuffleMs);
    return () => clearInterval(id);
  }, [autoShuffleMs, shuffle]);

  const prev = (index - 1 + items.length) % items.length;
  const next = (index + 1) % items.length;
  const active = items[index];
  const stop: React.MouseEventHandler<HTMLElement> = (e) => e.stopPropagation();

  return (
    <div className={styles.stage}>
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

      {/* Shuffle button (desktop & mobile accessible) */}
      {allowNav && (
        <div style={{ position: "absolute", top: 8, right: 8, zIndex: 2 }}>
          <IconButton
            aria-label="Shuffle highlights"
            onClick={shuffle}
            variant="secondary"
            size="s"
            data-border="rounded"
            icon="shuffle"
            disabled={shuffling}
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.article
          key={active.title}
          className={styles.card}
          initial={{ opacity: 0, y: 18, scale: 0.98, rotate: -1 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          exit={{
            opacity: 0,
            y: -20,
            scale: 0.98,
            rotate: 6,                 // small “card riffle”
            filter: "blur(1px)",
          }}
          transition={{
            duration: 0.28,
            // removing bounce keeps it crisp; see Motion guidance
            x: { type: "spring", bounce: 0 },
          }}
          onClick={() => active.href && router.push(active.href)}
          role={active.href ? "link" : undefined}
          layout                         // enables smooth layout animation
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
