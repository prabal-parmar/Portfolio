import { type ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  /** Attraction factor — fraction of cursor offset applied as translation. Default: 0.3 */
  factor?: number;
  /** Maximum displacement per axis in px. Default: 40 */
  maxDisplacement?: number;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export const MagneticButton = ({
  children,
  className,
  factor = 0.3,
  maxDisplacement = 40,
}: MagneticButtonProps) => {
  const reducedMotion = useReducedMotion();
  const isPointerFine = useRef(
    typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches,
  );

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  if (reducedMotion || !isPointerFine.current) {
    return <div className={className}>{children}</div>;
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(clamp(offsetX * factor, -maxDisplacement, maxDisplacement));
    y.set(clamp(offsetY * factor, -maxDisplacement, maxDisplacement));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};
