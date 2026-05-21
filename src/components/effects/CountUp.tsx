import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

interface CountUpParsed {
  prefix: string;
  numeric: number;
  suffix: string;
}

function parseValue(value: string): CountUpParsed {
  const match = value.match(/^([^0-9]*)([0-9]+)([^0-9]*)$/);
  if (!match) {
    return { prefix: "", numeric: 0, suffix: value };
  }
  return {
    prefix: match[1],
    numeric: parseInt(match[2], 10),
    suffix: match[3],
  };
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export const CountUp = ({ value, duration = 1.8, className }: CountUpProps) => {
  const reducedMotion = useReducedMotion();
  const spanRef = useRef<HTMLSpanElement>(null);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const hasAnimated = useRef(false);
  const rafRef = useRef<number | null>(null);

  const parsed = parseValue(value);
  const hasNumericValue = parsed.suffix !== value || parsed.numeric > 0;
  const initialValue =
    reducedMotion || !hasNumericValue ? value : `${parsed.prefix}0${parsed.suffix}`;

  useEffect(() => {
    if (!inView || hasAnimated.current || reducedMotion) return;
    if (!hasNumericValue) return;

    hasAnimated.current = true;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / durationMs, 1);
      const easedT = easeOutExpo(t);
      const current = Math.round(easedT * parsed.numeric);

      if (spanRef.current) {
        spanRef.current.textContent = parsed.prefix + current + parsed.suffix;
      }

      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        if (spanRef.current) {
          spanRef.current.textContent = value;
        }
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [
    inView,
    reducedMotion,
    hasNumericValue,
    parsed.numeric,
    parsed.prefix,
    parsed.suffix,
    duration,
    value,
  ]);

  return (
    <span ref={ref}>
      <span ref={spanRef} className={className}>
        {initialValue}
      </span>
    </span>
  );
};
