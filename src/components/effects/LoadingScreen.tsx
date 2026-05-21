import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BatSignal } from "../BatSignal";
import { GlitchText } from "./GlitchText";

const BOOT_LINES = [
  "> INITIALIZING BATCOMPUTER v4.2...",
  "> LOADING WAYNE ENTERPRISES PROTOCOLS...",
  "> SYNCING GOTHAM DATABASE...",
  "> VERIFYING DEVELOPER CREDENTIALS...",
  "> ACCESS GRANTED — WELCOME, DETECTIVE.",
];

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);
  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const finishedRef = useRef(false);

  useEffect(() => {
    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      setVisible(false);
      onComplete();
    };

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      finish();
      return;
    }

    let lineIndex = 0;
    const lineInterval = setInterval(() => {
      if (lineIndex < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[lineIndex]!]);
        lineIndex++;
      }
    }, 380);

    const timeout = setTimeout(finish, 4200);

    let tl: { kill: () => void } | null = null;

    void (async () => {
      try {
        const { default: gsap } = await import("gsap");
        tl = gsap.timeline({ onComplete: finish });

        if (progressRef.current) {
          tl.to(progressRef.current, {
            width: "100%",
            duration: 2.2,
            ease: "power2.inOut",
          });
        } else {
          tl.to({}, { duration: 2.2 });
        }

        const logo = containerRef.current?.querySelector(".boot-logo");
        if (logo) {
          tl.from(logo, { scale: 0.6, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, 0);
        }
      } catch {
        finish();
      }
    })();

    return () => {
      clearInterval(lineInterval);
      clearTimeout(timeout);
      tl?.kill();
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0A0A0A]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 scanlines opacity-30" aria-hidden="true" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(245,197,24,0.08) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="boot-logo relative z-10 mb-10">
            <BatSignal size={72} flicker />
          </div>

          <p className="max-w-[90vw] px-4 text-center font-hud text-[10px] tracking-[0.3em] sm:tracking-[0.5em] text-[#00C2FF] mb-8 uppercase leading-relaxed">
            <GlitchText text="Wayne Enterprises — Secure Terminal" intensity="low" />
          </p>

          <div className="w-64 h-1 bg-[#1A1A1A] rounded-full overflow-hidden mb-8 border border-[rgba(245,197,24,0.2)]">
            <div
              ref={progressRef}
              className="h-full bg-gradient-to-r from-[#F5C518] to-[#00C2FF]"
              style={{ width: "0%" }}
            />
          </div>

          <div className="font-mono text-xs text-left w-80 max-w-[90vw] space-y-1.5 min-h-[120px]">
            {lines.map((line, i) => (
              <p key={`${line}-${i}`} className="text-[#8a8a8a] tracking-wide">
                <span className="text-[#F5C518]">{line.slice(0, 2)}</span>
                {line.slice(2)}
                {i === lines.length - 1 && (
                  <span className="inline-block w-2 h-3 ml-1 bg-[#F5C518] animate-[boot-blink_1s_step-end_infinite] align-middle" />
                )}
              </p>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
