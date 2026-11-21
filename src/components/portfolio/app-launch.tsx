"use client";

/**
 * Opens a section like a desktop app: a cursor double-clicks the section icon, then the content launches.
 */
import { cubicBezier, motion, useAnimate, useInView, useReducedMotion } from "motion/react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { CURSOR_HOTSPOTS, DesktopCursor } from "@/components/ui/desktop-cursor";
import { cn } from "@/lib/utils";

const LaunchContext = createContext(true);
const ease = [0.22, 1, 0.36, 1] as const;
const easeFn = cubicBezier(...ease);
const APPROACH_DELAY = 0.35;
const APPROACH_DURATION = 0.6;
const TIP_X = CURSOR_HOTSPOTS.arrow.x;
const TIP_Y = CURSOR_HOTSPOTS.arrow.y;
// Shift the hand so its fingertip lands exactly where the arrow tip was.
const HAND_SHIFT = `translate(${TIP_X - CURSOR_HOTSPOTS.hand.x}px, ${TIP_Y - CURSOR_HOTSPOTS.hand.y}px)`;
const RIPPLE_SIZE = 32;

export function AppLaunch({ children, className }: { children: ReactNode; className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "0px 0px -20% 0px" });
  const [launched, setLaunched] = useState(false);
  const [cursorDone, setCursorDone] = useState(false);
  const [isOverIcon, setIsOverIcon] = useState(false);

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
    const ripple = root.querySelector("[data-launch-ripple]");
    if (!icon || !cursor || !ripple) {
      setLaunched(true);
      return;
    }

    let cancelled = false;
    let hoverTimer: ReturnType<typeof setTimeout> | undefined;
    // Use layout offsets so the heading's own reveal transform doesn't skew the target.
    let offsetX = 0;
    let offsetY = 0;
    for (let el = icon; el && el !== root; el = el.offsetParent) {
      offsetX += el.offsetLeft;
      offsetY += el.offsetTop;
    }
    const side = getComputedStyle(root).direction === "rtl" ? -1 : 1;
    const targetX = offsetX + icon.offsetWidth / 2 - TIP_X;
    const targetY = offsetY + icon.offsetHeight / 2 - TIP_Y;
    const startX = targetX + 110 * side;
    const startY = targetY + 70;

    // Find when the moving tip first crosses into the icon, so the hand appears on hover, not on arrival.
    const isOverIconAt = (fraction: number) => {
      const tipX = startX + (targetX - startX) * fraction + TIP_X;
      const tipY = startY + (targetY - startY) * fraction + TIP_Y;
      return (
        tipX >= offsetX && tipX <= offsetX + icon.offsetWidth && tipY >= offsetY && tipY <= offsetY + icon.offsetHeight
      );
    };
    let entryFraction = 1;
    for (let f = 0; f <= 1; f += 0.01) {
      if (isOverIconAt(f)) {
        entryFraction = f;
        break;
      }
    }
    let entryTime = 1;
    for (let t = 0; t <= 1; t += 0.01) {
      if (easeFn(t) >= entryFraction) {
        entryTime = t;
        break;
      }
    }

    const press = async () => {
      // A ring pulses out from the fingertip on every click.
      animate(ripple, { scale: [0.2, 1.6], opacity: [0.8, 0] }, { duration: 0.45, ease: "easeOut" });
      await Promise.all([
        animate(cursor, { scale: 0.82 }, { duration: 0.08 }),
        animate(icon, { scale: 0.9, boxShadow: "0 0 0 6px rgba(59, 130, 246, 0.35)" }, { duration: 0.08 }),
      ]);
      await Promise.all([
        animate(cursor, { scale: 1 }, { duration: 0.08 }),
        animate(icon, { scale: 1.06 }, { duration: 0.08 }),
      ]);
    };

    const run = async () => {
      animate(cursor, { x: startX, y: startY, opacity: 0 }, { duration: 0 });
      animate(
        ripple,
        { x: targetX + TIP_X - RIPPLE_SIZE / 2, y: targetY + TIP_Y - RIPPLE_SIZE / 2, opacity: 0 },
        { duration: 0 },
      );
      // Like a real OS, the arrow turns into the link hand as soon as it hovers the icon.
      hoverTimer = setTimeout(() => {
        setIsOverIcon(true);
        animate(icon, { scale: 1.06 }, { duration: 0.15 });
      }, (APPROACH_DELAY + entryTime * APPROACH_DURATION) * 1000);
      await animate(
        cursor,
        { x: targetX, y: targetY, opacity: 1 },
        { delay: APPROACH_DELAY, duration: APPROACH_DURATION, ease },
      );
      if (cancelled) return;
      await animate(cursor, { scale: 1 }, { duration: 0.12 });
      if (cancelled) return;
      await press();
      if (cancelled) return;
      await press();
      if (cancelled) return;
      setLaunched(true);
      animate(icon, { scale: 1, boxShadow: "0 0 0 0px rgba(59, 130, 246, 0)" }, { duration: 0.4 });
      await animate(cursor, { opacity: 0, x: targetX + 16 * side, y: targetY + 20 }, { delay: 0.15, duration: 0.35 });
      if (!cancelled) setCursorDone(true);
    };

    run();
    return () => {
      cancelled = true;
      clearTimeout(hoverTimer);
    };
  }, [animate, isInView, scope, shouldReduceMotion]);

  return (
    <LaunchContext.Provider value={launched}>
      <div ref={scope} className={cn("relative", className)}>
        {children}
        {!cursorDone && (
          <>
            <span
              data-launch-ripple
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 z-20 rounded-full border-2 border-secondary"
              style={{ width: RIPPLE_SIZE, height: RIPPLE_SIZE, opacity: 0 }}
            />
            <span
              data-launch-cursor
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 z-20"
              style={{ opacity: 0, transformOrigin: `${TIP_X}px ${TIP_Y}px` }}
            >
              {isOverIcon ? (
                <DesktopCursor variant="hand" className="block" style={{ transform: HAND_SHIFT }} />
              ) : (
                <DesktopCursor variant="arrow" className="block" />
              )}
            </span>
          </>
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
