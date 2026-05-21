import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface BatTimelineProps {
  entries: TimelineEntry[];
  className?: string;
}

export const BatTimeline = ({ entries, className }: BatTimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reducedMotion = useReducedMotion();
  const shouldShow = inView || reducedMotion;

  return (
    <div ref={ref} className={`relative ${className ?? ""}`}>
      {/* Spine */}
      <motion.div
        className="bat-timeline-spine absolute left-4 sm:left-1/2 top-0 bottom-0 w-px"
        style={{
          background: "linear-gradient(to bottom, var(--bat-yellow), var(--bat-blue))",
          transformOrigin: "top",
        }}
        initial={reducedMotion ? { scaleY: 1 } : { scaleY: 0 }}
        animate={shouldShow ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.4, ease: "easeOut" }}
        aria-hidden="true"
      />

      {/* Entries */}
      <div className="relative space-y-10 pl-12 sm:pl-0">
        {entries.map((entry, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={i}
              className={`relative flex items-start gap-6 sm:gap-0 ${
                isEven ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
              initial={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
              animate={shouldShow ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
              transition={{
                duration: reducedMotion ? 0 : 0.5,
                delay: reducedMotion ? 0 : 0.2 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Content */}
              <div
                className={`sm:w-[calc(50%-2rem)] ${
                  isEven ? "sm:pr-8 sm:text-right" : "sm:pl-8 sm:text-left"
                }`}
              >
                <span className="font-mono text-xs text-[var(--bat-blue)] tracking-widest opacity-70">
                  {entry.year}
                </span>
                <h4 className="font-display text-base md:text-lg text-primary mt-1 tracking-wide">
                  {entry.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">
                  {entry.description.slice(0, 160)}
                </p>
              </div>

              {/* Node marker */}
              <div
                className="absolute left-[-2.25rem] sm:left-1/2 sm:-translate-x-1/2 top-1 flex-shrink-0"
                aria-hidden="true"
              >
                <div
                  className="w-4 h-4 rounded-full border-2 border-[var(--bat-yellow)]"
                  style={{
                    boxShadow: "0 0 8px var(--bat-glow), inset 0 0 4px var(--bat-glow)",
                    background: "var(--background)",
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
