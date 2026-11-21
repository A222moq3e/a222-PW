"use client";

/**
 * Opens a section like a desktop app: a cursor double-clicks the section icon, then the content launches.
 */
import { cubicBezier, motion, useAnimate, useInView, useReducedMotion } from "motion/react";
import { HandGrab } from "lucide-react";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

import { CURSOR_HOTSPOTS, DesktopCursor } from "@/components/ui/desktop-cursor";
import { cn } from "@/lib/utils";

const LaunchContext = createContext(true);
const LaunchHistoryContext = createContext<Set<string> | null>(null);
export function useLaunchHistory() {
  return useContext(LaunchHistoryContext);
}
export function useAppLaunched() {
  return useContext(LaunchContext);
}
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
  const host = useRef<HTMLDivElement>(null);
  const [revision, setRevision] = useState(0);
  const history = useRef(new Set<string>());

  useEffect(() => {
    const replay = (event: Event) => {
      if (host.current?.closest("[data-nav-id]")?.getAttribute("data-nav-id") === (event as CustomEvent<string>).detail) {
        setRevision((current) => current + 1);
      }
    };
    window.addEventListener("portfolio:launch-section", replay);
    return () => window.removeEventListener("portfolio:launch-section", replay);
  }, []);

  return (
    <div ref={host} className={className} onClick={(event) => {
      if ((event.target as HTMLElement).closest("[data-launch-icon]")) setRevision((current) => current + 1);
    }}>
      <LaunchHistoryContext.Provider value={history.current}>
        <AppLaunchAnimation key={revision}>{children}</AppLaunchAnimation>
      </LaunchHistoryContext.Provider>
    </div>
  );
}

function AppLaunchAnimation({ children }: { children: ReactNode }) {
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
    const container = root.querySelector("[data-launch-container]");
    if (!icon || !cursor || !ripple || !container) {
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
      await animate(cursor, { opacity: 0, x: targetX + 16 * side, y: targetY + 20 }, { duration: 0.35 });
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
      <div ref={scope} className="relative">
        <div data-launch-container className="relative rounded-xl" style={{ transformOrigin: "42% 16px" }}>
          {children}
        </div>
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
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={false}
      animate={{ opacity: launched ? 1 : 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.35, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Each card has its own grab point, cursor, and placement animation. */
export function AppLaunchItem({ children, index = 0, className }: { children: ReactNode; index?: number; className?: string }) {
  const launched = useAppLaunched();
  const reduced = useReducedMotion();
  const [scope, animate] = useAnimate();
  const visible = useInView(scope, { once: true, amount: 0.2 });
  const [grabbing, setGrabbing] = useState(false);

  useEffect(() => {
    if (!launched || !visible || reduced) return;
    let cancelled = false;
    const card = scope.current.querySelector("[data-item-card]");
    const cursor = scope.current.querySelector("[data-item-cursor]");
    const side = getComputedStyle(scope.current).direction === "rtl" ? -1 : 1;
    const offset = Math.min(180, window.innerWidth * 0.22) * side;
    const run = async () => {
      // The card is absent until the cursor picks it up at its entry position.
      animate(card, { opacity: 0, x: offset, y: 64 }, { duration: 0 });
      animate(cursor, { x: offset + 32 * side, y: 96, opacity: 0 }, { duration: 0 });
      await animate(cursor, { opacity: 1, x: offset, y: 64 }, { delay: 0.45 + index * 0.45, duration: 0.35, ease });
      if (cancelled) return;
      setGrabbing(true);
      await Promise.all([
        animate(card, { opacity: 1, boxShadow: "0 24px 48px -12px rgba(0,0,0,0.45)" }, { duration: 0.18 }),
        animate(cursor, { scale: 0.88 }, { duration: 0.18 }),
      ]);
      if (cancelled) return;
      await Promise.all([
        animate(card, { x: 0, y: 0 }, { duration: 1.05, ease }),
        animate(cursor, { x: 0, y: 0 }, { duration: 1.05, ease }),
      ]);
      if (cancelled) return;
      setGrabbing(false);
      animate(card, { boxShadow: "0 0 0 0 rgba(0,0,0,0)" }, { duration: 0.3 });
      await animate(cursor, { opacity: 0, x: 16 * side, y: 18, scale: 1 }, { duration: 0.3 });
    };
    run();
    return () => { cancelled = true; };
  }, [animate, index, launched, reduced, scope, visible]);

  return (
    <div ref={scope} className={cn("relative min-w-0", className)}>
      <div data-item-card className="relative h-full rounded-xl" style={{ opacity: reduced ? 1 : 0 }}>{children}</div>
      {!reduced && <span data-item-cursor aria-hidden="true" className="pointer-events-none absolute left-[42%] top-4 z-30" style={{ opacity: 0, marginLeft: -TIP_X, marginTop: -TIP_Y, transformOrigin: `${TIP_X}px ${TIP_Y}px` }}>
        {grabbing
          ? <HandGrab className="size-7 fill-white text-slate-900 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]" style={{ transform: HAND_SHIFT }} />
          : <DesktopCursor variant="hand" style={{ transform: HAND_SHIFT }} />}
      </span>}
    </div>
  );
}
