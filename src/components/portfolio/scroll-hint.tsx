"use client";

/**
 * Prompts visitors to scroll toward the experience section and hides once they scroll.
 */
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type ScrollHintProps = {
  label: string;
};

const SCROLL_THRESHOLD = 40;

export function ScrollHint({ label }: ScrollHintProps) {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (window.scrollY > SCROLL_THRESHOLD) return;
    setVisible(true);

    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setVisible(false);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#experience"
          className="fixed inset-x-0 bottom-6 z-40 mx-auto flex w-fit flex-col items-center gap-1 rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12, transition: { duration: 0.3 } }}
          transition={{ delay: 2.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>{label}</span>
          <motion.span
            aria-hidden="true"
            animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="size-5" />
          </motion.span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
