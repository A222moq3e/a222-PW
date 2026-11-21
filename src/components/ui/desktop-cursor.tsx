/**
 * Desktop-theme cursor shapes shared by the animated pointers.
 * The visitor's real cursor in app/globals.css uses the same paths and default colors; keep them in sync.
 */
import { useId, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

export const CURSOR_PATHS = {
  arrow: "M4.5 2.5 L4.5 20 L9 15.8 L12 22.2 L15 20.9 L12.1 14.6 L18.3 14.6 Z",
  hand: "M8 13 V3.5 a1.5 1.5 0 0 1 3 0 V10.2 a1.5 1.5 0 0 1 3 0.3 V11 a1.5 1.5 0 0 1 3 0.3 V12 a1.5 1.5 0 0 1 3 0.4 V17 c0 3 -2.5 5 -5.5 5 H12.5 c-2 0 -3.3 -0.7 -4.5 -2 L4.2 16 a1.5 1.5 0 0 1 2.2 -2.1 L8 15.5 Z",
  grab: "M8 12V8a1.5 1.5 0 0 1 3 0v3V6.5a1.5 1.5 0 0 1 3 0V11V8a1.5 1.5 0 0 1 3 0v4V10a1.5 1.5 0 0 1 3 0v6c0 4-2.5 6-6 6h-2c-2 0-3-1-4-2l-4-5a1.5 1.5 0 0 1 2-2l2 2Z",
} as const;

/** Where each shape "points", in the 24×24 viewBox. */
export const CURSOR_HOTSPOTS = {
  arrow: { x: 4.5, y: 2.5 },
  hand: { x: 9.5, y: 2 },
} as const;

type DesktopCursorProps = {
  variant?: keyof typeof CURSOR_PATHS;
  from?: string;
  to?: string;
  className?: string;
  style?: CSSProperties;
};

export function DesktopCursor({ variant = "arrow", from = "#22d3ee", to = "#3b82f6", className, style }: DesktopCursorProps) {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]", className)}
      style={style}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <path
        d={CURSOR_PATHS[variant]}
        fill={`url(#${gradientId})`}
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
