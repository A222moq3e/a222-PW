"use client";

/**
 * Decorative "visitor" pointers that occasionally peek in from the screen edges in a burst,
 * without text labels.
 */
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { DesktopCursor } from "@/components/ui/desktop-cursor";

type PeekCursor = {
  id: number;
  colors: readonly [string, string];
  delay: number;
  duration: number;
  xs: number[];
  ys: number[];
};

const PALETTES = [
  ["#22d3ee", "#3b82f6"],
  ["#f472b6", "#a78bfa"],
  ["#fbbf24", "#f97316"],
  ["#34d399", "#14b8a6"],
  ["#a78bfa", "#6366f1"],
  ["#fb7185", "#f43f5e"],
] as const;
// Wait past the intro animations, then show a burst of pointers every so often.
const FIRST_DELAY_MS = 12_000;
const MIN_GAP_MS = 40_000;
const MAX_GAP_MS = 70_000;
const MIN_BURST = 6;
const MAX_BURST = 10;
const BURST_SPREAD_S = 0.9;

const random = (min: number, max: number) => min + Math.random() * (max - min);

const CURSOR_ROOM = 32;

function createCursor(id: number): PeekCursor {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const fromLeft = Math.random() < 0.5;
  const outside = fromLeft ? -CURSOR_ROOM : width + 24;
  const reach = (random(50, Math.min(220, width * 0.28)) + (fromLeft ? CURSOR_ROOM : 0)) * (fromLeft ? 1 : -1);
  const y = random(height * 0.15, height * 0.85);
  const drift = random(-60, 60);

  return {
    id,
    colors: PALETTES[Math.floor(Math.random() * PALETTES.length)],
    delay: random(0, BURST_SPREAD_S),
    duration: random(2, 3),
    xs: [outside, outside + reach, outside + reach * random(0.7, 1.1), outside],
    ys: [y, y + drift * 0.4, y + drift, y + drift * 1.4],
  };
}

export function PeekCursors() {
  const shouldReduceMotion = useReducedMotion();
  const [cursors, setCursors] = useState<PeekCursor[]>([]);
  const nextId = useRef(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    let timer: ReturnType<typeof setTimeout>;
    const schedule = (delay: number) => {
      timer = setTimeout(() => {
        // Skip while the tab is in the background or a burst is still on screen.
        if (document.visibilityState === "visible") {
          const size = Math.round(random(MIN_BURST, MAX_BURST));
          setCursors((current) =>
            current.length > 0 ? current : Array.from({ length: size }, () => createCursor(nextId.current++)),
          );
        }
        schedule(random(MIN_GAP_MS, MAX_GAP_MS));
      }, delay);
    };

    schedule(FIRST_DELAY_MS);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {cursors.map((cursor) => (
        <motion.span
          key={cursor.id}
          className="absolute left-0 top-0"
          initial={{ x: cursor.xs[0], y: cursor.ys[0] }}
          animate={{ x: cursor.xs, y: cursor.ys }}
          transition={{ delay: cursor.delay, duration: cursor.duration, times: [0, 0.35, 0.65, 1], ease: "easeInOut" }}
          onAnimationComplete={() =>
            setCursors((current) => current.filter((item) => item.id !== cursor.id))
          }
        >
          <DesktopCursor from={cursor.colors[0]} to={cursor.colors[1]} className="block" />
        </motion.span>
      ))}
    </div>
  );
}
