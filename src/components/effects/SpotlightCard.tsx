import { type ReactNode, useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Spotlight radius in px. Default: 200 */
  radius?: number;
  /** Center color of the spotlight. Default: rgba(245, 197, 24, 0.07) */
  color?: string;
}

export const SpotlightCard = ({
  children,
  className,
  radius = 200,
  color = "rgba(245, 197, 24, 0.07)",
}: SpotlightCardProps) => {
  const reducedMotion = useReducedMotion();
  const isCoarse = useRef(
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches,
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const stillTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (stillTimer.current) clearTimeout(stillTimer.current);
    };
  }, []);

  if (reducedMotion || isCoarse.current) {
    return <div className={className}>{children}</div>;
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !overlayRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    overlayRef.current.style.background = `radial-gradient(circle ${radius}px at ${x}px ${y}px, ${color}, transparent)`;
    overlayRef.current.style.opacity = "1";
    overlayRef.current.style.transition = "opacity 150ms ease";

    // Reset still timer
    if (stillTimer.current) clearTimeout(stillTimer.current);
    stillTimer.current = setTimeout(() => {
      if (overlayRef.current) {
        overlayRef.current.style.transition = "opacity 200ms ease";
        overlayRef.current.style.opacity = "0";
      }
    }, 200);
  };

  const handleMouseLeave = () => {
    if (stillTimer.current) clearTimeout(stillTimer.current);
    if (overlayRef.current) {
      overlayRef.current.style.transition = "opacity 300ms ease";
      overlayRef.current.style.opacity = "0";
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative${className ? ` ${className}` : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={overlayRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0,
          borderRadius: "inherit",
          zIndex: 1,
        }}
      />
      {children}
    </div>
  );
};
