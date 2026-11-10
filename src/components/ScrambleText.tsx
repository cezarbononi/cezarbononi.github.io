import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

const GLYPHS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#/_<>";
const FRAME_MS = 40;

type ScrambleTextProps = {
  text: string;
};

/**
 * Decodes the text from random glyphs when it scrolls into view
 * (and again whenever the text changes, e.g. on language switch).
 */
export default function ScrambleText({ text }: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(text);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setDisplay(text);

    const node = ref.current;
    if (!node || reducedMotion || typeof IntersectionObserver === "undefined") {
      return;
    }

    let frame = 0;
    let lastTick = 0;
    const duration = Math.min(1100, 420 + text.length * 22);

    const run = (start: number) => {
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);

        if (now - lastTick >= FRAME_MS || progress === 1) {
          lastTick = now;
          const revealed = Math.floor(progress * text.length);
          let next = text.slice(0, revealed);

          for (let i = revealed; i < text.length; i += 1) {
            const char = text[i];
            next += /\s/.test(char)
              ? char
              : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }

          setDisplay(next);
        }

        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          run(performance.now());
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [text, reducedMotion]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
