"use client";

import { Children, isValidElement, useEffect, useId, useState, type ReactNode } from "react";
import { DndContext, KeyboardSensor, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors, type DragEndEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove, rectSortingStrategy, sortableKeyboardCoordinates, useSortable } from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { CSS } from "@dnd-kit/utilities";
import { useReducedMotion } from "motion/react";
import { CURSOR_PATHS } from "@/components/ui/desktop-cursor";

function handCursor(variant: "hand" | "grab") {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#22d3ee"/><stop offset="1" stop-color="#3b82f6"/></linearGradient></defs><path d="${CURSOR_PATHS[variant]}" fill="url(#g)" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 11 2, ${variant === "grab" ? "grabbing" : "grab"}`;
}
const OPEN_HAND = handCursor("hand");
const CLOSED_HAND = handCursor("grab");

/** Independent sortable contexts keep cards inside their section group. */
export function SortableCards({ children, className }: { children: ReactNode; className?: string }) {
  const items = Children.toArray(children).filter(isValidElement);
  const [order, setOrder] = useState(() => items.map((item) => String(item.key)));
  const id = useId();
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 6 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );
  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return;
    setOrder((current) => {
      const from = current.indexOf(String(active.id));
      const to = current.indexOf(String(over.id));
      return from < 0 || to < 0 ? current : arrayMove(current, from, to);
    });
  };
  return (
    <DndContext id={id} sensors={sensors} collisionDetection={closestCenter}
      modifiers={[restrictToParentElement]} onDragEnd={handleDragEnd}>
      <SortableContext items={order} strategy={rectSortingStrategy}>
        <div className={className}>
          {order.map((key) => (
            <SortableCard key={key} id={key}>
              {items.find((item) => String(item.key) === key)}
            </SortableCard>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

function SortableCard({ children, id }: { children: ReactNode; id: string }) {
  const reduced = useReducedMotion();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
    transition: reduced ? null : { duration: 220, easing: "ease" },
  });
  useEffect(() => {
    if (!isDragging) return;
    const root = document.documentElement;
    root.style.setProperty("--card-drag-cursor", CLOSED_HAND);
    root.setAttribute("data-card-dragging", "true");
    return () => {
      root.removeAttribute("data-card-dragging");
      root.style.removeProperty("--card-drag-cursor");
    };
  }, [isDragging]);
  const isControl = (target: EventTarget) => (target as HTMLElement).closest("a, button, input, textarea, select, [contenteditable=true]");
  return (
    <div ref={setNodeRef} data-sort-id={id} {...attributes}
      aria-label="Reorder card"
      className="sortable-card relative min-w-0 rounded-xl focus-visible:outline-2 focus-visible:outline-ring"
      onMouseDown={(event) => { if (!isControl(event.target)) listeners?.onMouseDown?.(event); }}
      onTouchStart={(event) => { if (!isControl(event.target)) listeners?.onTouchStart?.(event); }}
      onKeyDown={(event) => { if (event.target === event.currentTarget) listeners?.onKeyDown?.(event); }}
      style={{ transform: CSS.Translate.toString(transform), transition, zIndex: isDragging ? 40 : undefined, cursor: isDragging ? CLOSED_HAND : OPEN_HAND }}>
      {children}
    </div>
  );
}
