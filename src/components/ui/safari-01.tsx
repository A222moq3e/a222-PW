"use client";

import { Info, Minus, Square, X } from "lucide-react";
import type { PointerEventHandler, ReactNode } from "react";

import { cn } from "@/lib/utils";

type WindowFrameProps = {
  children: ReactNode;
  title: string;
  className?: string;
  onTitlePointerDown?: PointerEventHandler<HTMLDivElement>;
};

/** Windows-style adaptation of the supplied browser frame. */
export default function Safari_01({ children, title, className, onTitlePointerDown }: WindowFrameProps) {
  return (
    <div className={cn("w-full min-w-0 overflow-hidden rounded-lg border border-border bg-card shadow-[0_16px_48px_rgba(0,0,0,0.3)]", className)}>
      <div
        className="flex min-h-11 touch-none select-none items-center justify-between border-b border-border bg-muted cursor-grab active:cursor-grabbing"
        onPointerDown={onTitlePointerDown}
      >
        <div className="flex min-w-0 items-center gap-2 px-4 py-3">
          <Info aria-hidden="true" className="h-4 w-4 shrink-0 text-muted-foreground" />
          <h2 className="truncate text-sm font-medium">{title}</h2>
        </div>
        <div aria-hidden="true" dir="ltr" className="flex shrink-0 items-center self-stretch text-muted-foreground">
          <span className="flex w-9 items-center justify-center"><Minus className="h-3.5 w-3.5" /></span>
          <span className="flex w-9 items-center justify-center"><Square className="h-3 w-3" /></span>
          <span className="flex w-9 items-center justify-center"><X className="h-4 w-4" /></span>
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
