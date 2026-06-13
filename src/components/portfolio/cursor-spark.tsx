"use client";

/**
 * Background gradient spotlight that follows desktop pointer movement.
 */
import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

export function CursorSpark() {
  const prefersReducedMotion = useReducedMotion();
  const [isEnabled, setIsEnabled] = useState(false);
  const pointerX = useMotionValue(-240);
  const pointerY = useMotionValue(-240);
  const springX = useSpring(pointerX, { stiffness: 190, damping: 34, mass: 0.42 });
  const springY = useSpring(pointerY, { stiffness: 190, damping: 34, mass: 0.42 });

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const hasPrecisePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!hasPrecisePointer) {
      return;
    }

    setIsEnabled(true);

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [pointerX, pointerY, prefersReducedMotion]);

  if (!isEnabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18)_0%,rgba(34,211,238,0.11)_34%,transparent_68%)] blur-2xl lg:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}
