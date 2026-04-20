"use client";

import * as React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function HoverGlow({ className, children, ...rest }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  return (
    <div ref={ref} className={className} onPointerMove={onMove} {...rest}>
      {children}
    </div>
  );
}
