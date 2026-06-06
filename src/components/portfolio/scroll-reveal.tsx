"use client";

/**
 * Reveals content when it enters the viewport.
 */
import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right" | "scale";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
};

const revealVariants: Record<RevealDirection, Variants> = {
  up: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -28 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 28 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96, filter: "blur(4px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -12% 0px" }}
      variants={shouldReduceMotion ? undefined : revealVariants[direction]}
      transition={{
        delay: delay / 1000,
        duration: 0.68,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
