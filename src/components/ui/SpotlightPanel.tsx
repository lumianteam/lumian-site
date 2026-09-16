"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A glass panel that tracks the cursor, publishing its position as the
 * `--mx` / `--my` custom properties the `.spotlight` rule reads. Pointer
 * position is written straight to the node — never through React state —
 * so moving the mouse costs no re-render.
 */
export default function SpotlightPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn("panel spotlight", className)}
    >
      {children}
    </div>
  );
}
