"use client";

/**
 * Draggable contact info card, introduced by a cursor that drags it into place.
 */
import { motion, useAnimate, useDragControls, useReducedMotion } from "motion/react";
import { Globe, Hand, HandGrab, Mail, Phone, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import Safari_01 from "@/components/ui/safari-01";

const ease = [0.22, 1, 0.36, 1] as const;

export function DraggableInfoCard({ dictionary, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const dragControls = useDragControls();
  const [scope, animate] = useAnimate();
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const windowEl = scope.current;
    const cursorEl = windowEl.querySelector("[data-intro-cursor]");

    if (shouldReduceMotion) {
      animate(windowEl, { opacity: 1, x: 0, y: 0, rotate: 0 }, { duration: 0 });
      setIntroDone(true);
      return;
    }

    let cancelled = false;
    // Start the window toward the outer edge of the page so it gets dragged inward.
    const side = getComputedStyle(windowEl).direction === "rtl" ? -1 : 1;
    const offsetX = (window.innerWidth < 768 ? 48 : 140) * side;

    const run = async () => {
      await animate(windowEl, { opacity: 1 }, { delay: delay / 1000, duration: 0.35 });
      if (cancelled) return;
      await animate(cursorEl, { opacity: 1, x: 0, y: 0 }, { duration: 0.55, ease });
      if (cancelled) return;
      setIsGrabbing(true);
      await animate(cursorEl, { scale: 0.88 }, { duration: 0.12 });
      if (cancelled) return;
      await animate(windowEl, { x: 0, y: 0, rotate: 0 }, { duration: 0.9, ease: [0.65, 0, 0.35, 1] });
      if (cancelled) return;
      setIsGrabbing(false);
      await animate(cursorEl, { scale: 1 }, { duration: 0.12 });
      if (cancelled) return;
      await animate(cursorEl, { opacity: 0, x: 18 * side, y: 22 }, { duration: 0.4, ease });
      if (!cancelled) setIntroDone(true);
    };

    animate(windowEl, { x: offsetX, y: 56, rotate: 2 * side }, { duration: 0 });
    animate(cursorEl, { x: 70 * side, y: 90 }, { duration: 0 });
    run();
    return () => {
      cancelled = true;
    };
  }, [animate, delay, scope, shouldReduceMotion]);

  return (
    <motion.div
      className="relative min-w-0"
      drag={!shouldReduceMotion}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      whileDrag={{ scale: 1.02, zIndex: 30 }}
    >
      <div ref={scope} className="relative" style={{ opacity: 0 }}>
        <Safari_01
          title={dictionary.sections.info}
          onTitlePointerDown={(event) => {
            if (!shouldReduceMotion && introDone) dragControls.start(event);
          }}
        >
          <div className="grid gap-1">
            {[
              [Mail, dictionary.contact.email, "mailto:moq3e2000@gmail.com"],
              [Phone, dictionary.contact.phone, "tel:+966507485316"],
              [Globe, dictionary.contact.website, "https://a222ghoul.com"],
              [LinkedinIcon, dictionary.contact.linkedin, "https://linkedin.com/in/a222web"],
              [GithubIcon, dictionary.contact.github, "https://github.com/A222moq3e"],
              [ShieldCheck, dictionary.contact.cyberhub, "https://cyberhub.sa/profile/a222_a222"],
            ].map(([Icon, label, href]) => (
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex min-h-11 min-w-0 items-center gap-3 rounded-sm text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
                key={label}
              >
                <Icon className="h-4 w-4 shrink-0 text-secondary" />
                <span dir="ltr" className="truncate">{label}</span>
              </a>
            ))}
          </div>
        </Safari_01>

        {!introDone && (
          <span
            data-intro-cursor
            aria-hidden="true"
            className="pointer-events-none absolute start-[42%] top-3 z-10"
            style={{ opacity: 0 }}
          >
            {isGrabbing ? (
              <HandGrab className="size-7 fill-white text-slate-900 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]" />
            ) : (
              <Hand className="size-7 fill-white text-slate-900 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]" />
            )}
          </span>
        )}
      </div>
    </motion.div>
  );
}
