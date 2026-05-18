import batLogo from "@/assets/bat-logo.png";

export const BatSignal = ({ size = 48, className = "", flicker = false }: { size?: number; className?: string; flicker?: boolean }) => (
  <img
    src={batLogo}
    alt="Bat Signal"
    width={size}
    height={size}
    className={`object-contain ${flicker ? "animate-flicker" : ""} ${className}`}
    style={{ filter: "drop-shadow(0 0 12px oklch(0.58 0.22 25 / 75%)) drop-shadow(0 0 28px oklch(0.58 0.22 25 / 35%))" }}
  />
);
