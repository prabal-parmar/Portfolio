import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TypingText = ({
  text,
  speed = 35,
  className = "",
  startDelay = 800,
}: {
  text: string;
  speed?: number;
  className?: string;
  startDelay?: number;
}) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplayed(text);
      return;
    }

    const startTimer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(startTimer);
  }, [text, startDelay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [started, displayed, text, speed]);

  return (
    <motion.span className={className}>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="inline-block w-0.5 h-[1em] ml-0.5 bg-[#F5C518] animate-pulse align-middle" />
      )}
    </motion.span>
  );
};
