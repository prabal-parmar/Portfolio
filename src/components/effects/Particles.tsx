import { useMemo } from "react";
import { motion } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
};

/** Deterministic pseudo-random — same on server and client (avoids hydration mismatch). */
function seededRandom(index: number, salt: number) {
  const x = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export const Particles = ({
  count = 40,
  className = "",
}: {
  count?: number;
  className?: string;
}) => {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: seededRandom(i, 1) * 100,
        y: seededRandom(i, 2) * 100,
        size: seededRandom(i, 3) * 2.5 + 0.5,
        duration: seededRandom(i, 4) * 20 + 15,
        delay: seededRandom(i, 5) * 5,
      })),
    [count],
  );

  return (
    <motion.div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background:
              p.id % 3 === 0
                ? "rgba(245, 197, 24, 0.4)"
                : p.id % 3 === 1
                  ? "rgba(0, 194, 255, 0.35)"
                  : "rgba(255, 255, 255, 0.15)",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};
