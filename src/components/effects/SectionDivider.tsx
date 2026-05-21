import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { BatSignal } from "@/components/BatSignal";

export interface SectionDividerProps {
  className?: string;
}

export const SectionDivider = ({ className = "" }: SectionDividerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasGradient = useRef(true);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    hasGradient.current =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-gradient-cinematic")
        .trim().length > 0;
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`relative flex h-16 items-center justify-center overflow-hidden ${className}`}
    >
      {hasGradient.current && (
        <motion.div
          className="h-px w-full origin-center"
          style={{ background: "var(--color-gradient-cinematic)" }}
          initial={reducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
          animate={inView || reducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
      {!reducedMotion && (
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4"
          initial={{ scale: 1, opacity: 0 }}
          animate={inView ? { scale: [1, 1.3, 1], opacity: 1 } : { scale: 1, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <BatSignal size={26} flicker />
        </motion.div>
      )}
    </div>
  );
};
