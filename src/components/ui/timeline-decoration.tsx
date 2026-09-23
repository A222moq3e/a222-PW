"use client";

import { Ellipsis } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

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

  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-y-0 start-0 origin-top border-s-2 border-border"
      initial={reducedMotion ? false : { scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -12% 0px" }}
      transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : delay / 1000, ease: "easeOut" }}
    />
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
