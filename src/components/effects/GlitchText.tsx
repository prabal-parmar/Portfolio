import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export type GlitchIntensity = "low" | "medium" | "high";

export interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: GlitchIntensity;
}

interface GlitchConfig {
  maxOffset: number;
  shadowRedOffset: number;
  shadowCyanOffset: number;
  duration: number;
  useClipPath: boolean;
}

const INTENSITY_CONFIG: Record<GlitchIntensity, GlitchConfig> = {
  low: {
    maxOffset: 2,
    shadowRedOffset: 1,
    shadowCyanOffset: -1,
    duration: 200,
    useClipPath: false,
  },
  medium: {
    maxOffset: 4,
    shadowRedOffset: 2,
    shadowCyanOffset: -2,
    duration: 400,
    useClipPath: false,
  },
  high: {
    maxOffset: 4,
    shadowRedOffset: 2,
    shadowCyanOffset: -2,
    duration: 400,
    useClipPath: true,
  },
};

export const GlitchText = ({ text, className, intensity = "medium" }: GlitchTextProps) => {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const config = INTENSITY_CONFIG[intensity];

    const triggerGlitch = () => {
      if (!ref.current) return;

      const el = ref.current;
      const offset = (Math.random() * 2 - 1) * config.maxOffset;
      const redOff = config.shadowRedOffset;
      const cyanOff = config.shadowCyanOffset;

      el.style.transform = `translateX(${offset}px)`;
      el.style.textShadow = `${redOff}px 0 rgba(255,0,0,0.8), ${cyanOff}px 0 rgba(0,255,255,0.8)`;

      if (config.useClipPath) {
        el.classList.add("glitch-active-high");
      }

      setTimeout(() => {
        if (!ref.current) return;
        ref.current.style.transform = "";
        ref.current.style.textShadow = "";
        if (config.useClipPath) {
          ref.current.classList.remove("glitch-active-high");
        }
        // Schedule next glitch
        timerRef.current = setTimeout(triggerGlitch, 3000 + Math.random() * 5000);
      }, config.duration);
    };

    // Initial schedule
    timerRef.current = setTimeout(triggerGlitch, 3000 + Math.random() * 5000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [reducedMotion, intensity]);

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span ref={ref} data-text={text} className={`glitch-text${className ? ` ${className}` : ""}`}>
      {text}
    </span>
  );
};
