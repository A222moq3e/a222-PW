"use client";

/**
 * Animated hero name heading with reduced-motion support.
 */
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type AnimatedNameProps = {
  name: string;
};

export function AnimatedName({ name }: AnimatedNameProps) {
  const shouldReduceMotion = useReducedMotion();
  const characters = useMemo(() => {
    if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
      const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });

      return Array.from(segmenter.segment(name), (segment) => segment.segment);
    }

    return Array.from(name);
  }, [name]);
  const [visibleCharacters, setVisibleCharacters] = useState(name.length);

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisibleCharacters(characters.length);

      return;
    }

    setVisibleCharacters(0);

    let interval: number | undefined;
    const startDelay = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setVisibleCharacters((current) => {
          if (current >= characters.length) {
            window.clearInterval(interval);

            return current;
          }

          return current + 1;
        });
      }, 58);
    }, 180);

    return () => {
      window.clearTimeout(startDelay);

      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, [characters.length, shouldReduceMotion]);

  const typedName = characters.slice(0, visibleCharacters).join("");

  if (shouldReduceMotion) {
    return (
      <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-foreground md:text-7xl">
        {name}
      </h1>
    );
  }

  return (
    <motion.h1
      className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-foreground md:text-7xl"
      aria-label={name}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.24,
        ease: "easeOut",
      }}
    >
      <span aria-hidden="true">{typedName}</span>
      <motion.span
        aria-hidden="true"
        className="ms-1 inline-block h-[0.8em] w-[0.08em] translate-y-[0.08em] bg-primary"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
      />
    </motion.h1>
  );
}
