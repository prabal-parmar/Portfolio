import { type ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export const TiltCard = ({ children, className = "" }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -8, ry: px * 8 });
    setGlarePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleLeave = () => {
    setTilt({ rx: 0, ry: 0 });
    setGlarePos({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={ref}
      className={cn("relative group", className)}
      style={{
        rotateX: tilt.rx,
        rotateY: tilt.ry,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(245,197,24,0.14) 0%, transparent 55%)`,
        }}
        aria-hidden="true"
      />
      {children}
    </motion.div>
  );
};
