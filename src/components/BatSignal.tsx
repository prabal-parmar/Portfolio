import { motion } from "framer-motion";
import batLogo from "@/assets/bat-logo.png";
import { cn } from "@/lib/utils";

export const BatSignal = ({
  size = 48,
  className = "",
  flicker = false,
}: {
  size?: number;
  className?: string;
  flicker?: boolean;
}) => (
  <motion.img
    src={batLogo}
    alt="Bat Signal"
    width={size}
    height={size}
    className={cn("object-contain", flicker && "animate-flicker", className)}
    style={{
      filter:
        "drop-shadow(0 0 14px rgba(245, 197, 24, 0.85)) drop-shadow(0 0 32px rgba(245, 197, 24, 0.4))",
    }}
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
  />
);
