"use client";

import { Ellipsis } from "lucide-react";
import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { DesktopCursor, CURSOR_HOTSPOTS } from "@/components/ui/desktop-cursor";

export function TimelineIcon({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="absolute start-px top-0 -translate-x-1/2 rtl:translate-x-1/2">
      <motion.div
        className="flex h-9 w-9 items-center justify-center rounded-full bg-background"
        initial={reducedMotion ? false : { opacity: 0, y: 10, scale: 0.8, rotate: -15 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.5, margin: "0px 0px -12% 0px" }}
        transition={{ type: "spring", duration: reducedMotion ? 0 : 0.55, bounce: 0, delay: reducedMotion ? 0 : delay / 1000 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function TimelineLine({ delay = 0 }: { delay?: number }) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.18, margin: "0px 0px -12% 0px" });
  const entranceDelay = delay / 1000;
  const timing = { duration: 1.25, delay: entranceDelay + 0.75, ease: "linear" as const };

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-y-0 start-0 w-0.5">
      <motion.div
        className="absolute inset-0 origin-top bg-border"
        initial={reducedMotion ? false : { scaleY: 0 }}
        animate={{ scaleY: reducedMotion || visible ? 1 : 0 }}
        transition={reducedMotion ? { duration: 0 } : timing}
      />
      {!reducedMotion && (
        <motion.span
          className="absolute left-px z-20 text-primary drop-shadow-md [--pencil-entry:90px] rtl:[--pencil-entry:-90px]"
          initial={{ top: "0%", x: "var(--pencil-entry)", y: -30, opacity: 0 }}
          animate={visible ? { top: "100%", x: 0, y: 0, opacity: [0, 1, 1, 0] } : { top: "0%", opacity: 0 }}
          transition={{
            top: timing,
            x: { delay: entranceDelay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            y: { delay: entranceDelay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            opacity: { delay: entranceDelay, duration: 2.15, times: [0, 0.06, 0.94, 1] },
          }}
        >
          <motion.span
            className="absolute"
            style={{ left: -CURSOR_HOTSPOTS.arrow.x, top: -CURSOR_HOTSPOTS.arrow.y }}
            initial={{ opacity: 1, scale: 1 }}
            animate={visible ? { opacity: 0, scale: 0.65 } : { opacity: 1, scale: 1 }}
            transition={{ delay: entranceDelay + 0.55, duration: 0.2 }}
          >
            <DesktopCursor />
          </motion.span>
          <motion.span
            className="absolute"
            initial={{ opacity: 0, scale: 0.65 }}
            animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.65 }}
            transition={{ delay: entranceDelay + 0.55, duration: 0.2 }}
          >
          {/* The nib at (4, 20) stays exactly on the growing line's endpoint. */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", left: -32 / 6, top: -80 / 3 }}>
            <path d="m4 20 1-5L17 3a2.12 2.12 0 0 1 3 3L8 18l-4 2Z" className="fill-background" />
            <path d="m15 5 3 3M5 15l3 3M4 20l1-1" />
          </svg>
          </motion.span>
        </motion.span>
      )}
    </div>
  );
}

export function TimelineEnd() {
  const reducedMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="relative ms-5 h-9">
      <motion.div
        className="absolute start-px top-0 -translate-x-1/2 rtl:translate-x-1/2"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: reducedMotion ? 0 : 0.4, ease: "easeOut" }}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground">
          <Ellipsis className="h-5 w-5" />
        </div>
      </motion.div>
    </div>
  );
}
