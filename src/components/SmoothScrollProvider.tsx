"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
// (optional but recommended once in your app)
// import "lenis/dist/lenis.css";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,         // ✅ replaces old smoothTouch
      gestureOrientation: "vertical",
      autoResize: true,
      // autoRaf: true,          // Or use this and remove the RAF loop below
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
