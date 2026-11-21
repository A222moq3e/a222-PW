"use client";

import NumberFlow from "@number-flow/react";
import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useAppLaunched, useLaunchHistory } from "@/components/portfolio/app-launch";

/** Keeps the original ranking text accessible while its digits roll into view. */
export function AchievementNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const launched = useAppLaunched();
  const history = useLaunchHistory();
  const [ready, setReady] = useState(() => history?.has(value) ?? false);
  const reduceMotion = useReducedMotion();
  const match = value.match(/^(.*?)(\d+)([^\d]*)$/);

  useEffect(() => {
    if (ready || !launched || !isInView) return;
    // Wait until the app-launch and card reveals have exposed the digits.
    const timer = setTimeout(() => {
      history?.add(value);
      setReady(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [launched, isInView, ready, history, value]);

  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref} dir="ltr" className="inline-block tabular-nums">
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        <NumberFlow
          value={ready || reduceMotion ? Number(match[2]) : 0}
          prefix={match[1]}
          suffix={match[3]}
          locales="en"
          format={{ useGrouping: false }}
          animated={!reduceMotion}
          transformTiming={{ duration: 900, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        />
      </span>
    </span>
  );
}
