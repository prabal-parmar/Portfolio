import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HUDFrameProps = {
  children: ReactNode;
  className?: string;
  label?: string;
};

export const HUDFrame = ({ children, className = "", label }: HUDFrameProps) => (
  <div
    className={cn("relative bat-border glow-border hud-corner overflow-hidden group", className)}
  >
    <motion.div
      className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00C2FF]/40 to-transparent pointer-events-none z-20"
      animate={{ top: ["0%", "100%", "0%"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    />

    <span className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#00C2FF]/50 z-10 pointer-events-none" />
    <span className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#F5C518]/50 z-10 pointer-events-none" />
    <span className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#F5C518]/50 z-10 pointer-events-none" />
    <span className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#00C2FF]/50 z-10 pointer-events-none" />

    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none z-[5]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,194,255,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,194,255,0.5) 1px, transparent 1px)
        `,
        backgroundSize: "24px 24px",
      }}
      aria-hidden="true"
    />

    {label && (
      <motion.div
        className="absolute top-4 left-4 z-20 font-mono text-[9px] tracking-[0.35em] text-[#00C2FF]/80 uppercase"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.div>
    )}

    {children}
  </div>
);
