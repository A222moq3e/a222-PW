"use client";

import { createContext, Fragment, useContext, useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const PROMPT = "cv@a222.dev>";
const COMMAND = "boot";

const BootContext = createContext({ length: COMMAND.length, ready: true });

/** Keep the original layout while the command boots the rest of the page. */
export function BootProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const [length, setLength] = useState(0);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (ready) return;
    const x = window.scrollX;
    const y = window.scrollY;
    const preventScroll = (event: Event) => event.preventDefault();
    const preventScrollKey = (event: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) {
        event.preventDefault();
      }
    };
    // Keep the real scrollbar visible, including its track and thumb.
    const restorePosition = () => {
      if (window.scrollX !== x || window.scrollY !== y) {
        window.scrollTo({ left: x, top: y, behavior: "instant" });
      }
    };
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventScrollKey);
    window.addEventListener("scroll", restorePosition);
    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventScrollKey);
      window.removeEventListener("scroll", restorePosition);
    };
  }, [ready]);
  useEffect(() => {
    if (reduced) {
      setLength(COMMAND.length);
      setReady(true);
      return;
    }
    let count = 0;
    let finish: ReturnType<typeof setTimeout>;
    const timer = setInterval(() => {
      count += 1;
      setLength(count);
      if (count === COMMAND.length) {
        clearInterval(timer);
        finish = setTimeout(() => setReady(true), 300);
      }
    }, 75);
    return () => {
      clearInterval(timer);
      clearTimeout(finish);
    };
  }, [reduced]);
  return (
    <BootContext.Provider value={{ length, ready }}>
      {!ready && <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 bg-black" />}
      {children}
    </BootContext.Provider>
  );
}

export function BootReveal({ children }: { children: ReactNode }) {
  const { ready } = useContext(BootContext);
  return (
    <div className="contents" style={{ visibility: ready ? undefined : "hidden" }} inert={!ready}>
      <Fragment key={ready ? "started" : "waiting"}>{children}</Fragment>
    </div>
  );
}

/** The command stays at its original inline position above the name. */
export function BootSequence() {
  const reduced = useReducedMotion();
  const { length, ready } = useContext(BootContext);

  return (
    <div dir="ltr" className={`mb-3 flex w-fit items-center gap-2 font-mono text-sm ${ready ? "" : "relative z-[60]"}`}>
      <code aria-label={`${PROMPT} ${COMMAND}`} className="whitespace-pre text-muted-foreground">
        <span aria-hidden="true">
          <span className="font-semibold text-primary">{PROMPT}</span>{" "}
          <span className="text-foreground">{COMMAND.slice(0, length)}</span>
          {length < COMMAND.length && !reduced && (
            <motion.span className="ms-1 inline-block h-[0.9em] w-[0.45em] translate-y-[0.12em] bg-primary"
              animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} />
          )}
        </span>
      </code>
    </div>
  );
}
