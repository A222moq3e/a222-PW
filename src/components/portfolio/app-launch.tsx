"use client";

/**
 * Opens a section like a desktop app: a cursor double-clicks the section icon, then the content launches.
 */
import { MousePointer2 } from "lucide-react";
import { motion, useAnimate, useInView, useReducedMotion } from "motion/react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const LaunchContext = createContext(true);
const ease = [0.22, 1, 0.36, 1] as const;

export function AppLaunch({ children, className }: { children: ReactNode; className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "0px 0px -20% 0px" });
  const [launched, setLaunched] = useState(false);
  const [cursorDone, setCursorDone] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setLaunched(true);
      setCursorDone(true);
      return;
    }
    if (!isInView) return;

    const root = scope.current;
    const icon = root.querySelector("[data-launch-icon]");
    const cursor = root.querySelector("[data-launch-cursor]");
    if (!icon || !cursor) {
      setLaunched(true);
      return;
    }

    let cancelled = false;
    // Use layout offsets so the heading's own reveal transform doesn't skew the target.
    let offsetX = 0;
    let offsetY = 0;
    for (let el = icon; el && el !== root; el = el.offsetParent) {
      offsetX += el.offsetLeft;
      offsetY += el.offsetTop;
    }
    const side = getComputedStyle(root).direction === "rtl" ? -1 : 1;
    // The pointer tip sits about 4px into the icon's box.
    const targetX = offsetX + icon.offsetWidth / 2 - 4;
    const targetY = offsetY + icon.offsetHeight / 2 - 4;

    const press = async () => {
      await Promise.all([
        animate(cursor, { scale: 0.82 }, { duration: 0.08 }),
        animate(icon, { scale: 0.9, boxShadow: "0 0 0 6px rgba(59, 130, 246, 0.35)" }, { duration: 0.08 }),
      ]);
      await Promise.all([
        animate(cursor, { scale: 1 }, { duration: 0.08 }),
        animate(icon, { scale: 1 }, { duration: 0.08 }),
      ]);
    };

    const run = async () => {
      animate(cursor, { x: targetX + 110 * side, y: targetY + 70, opacity: 0 }, { duration: 0 });
      await animate(cursor, { x: targetX, y: targetY, opacity: 1 }, { delay: 0.35, duration: 0.5, ease });
      if (cancelled) return;
      await press();
      if (cancelled) return;
      await press();
      if (cancelled) return;
      setLaunched(true);
      animate(icon, { boxShadow: "0 0 0 0px rgba(59, 130, 246, 0)" }, { duration: 0.4 });
      await animate(cursor, { opacity: 0, x: targetX + 16 * side, y: targetY + 20 }, { delay: 0.15, duration: 0.35 });
      if (!cancelled) setCursorDone(true);
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [animate, isInView, scope, shouldReduceMotion]);

  return (
    <LaunchContext.Provider value={launched}>
      <div ref={scope} className={cn("relative", className)}>
        {children}
        {!cursorDone && (
          <span
            data-launch-cursor
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-20"
            style={{ opacity: 0 }}
          >
            <MousePointer2 className="size-6 fill-white text-slate-900 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]" />
          </span>
        )}
      </div>
    </LaunchContext.Provider>
  );
}

export function AppLaunchContent({ children, className }: { children: ReactNode; className?: string }) {
  const launched = useContext(LaunchContext);

  return (
    <motion.div
      className={cn("origin-top-left rtl:origin-top-right", className)}
      initial={false}
      animate={launched ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: -12 }}
      transition={{ duration: 0.45, ease }}
    >
      {children}
    </motion.div>
  );
}
