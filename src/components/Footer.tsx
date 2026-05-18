import { motion } from "framer-motion";
import { BatSignal } from "./BatSignal";
import { GothamSkyline } from "./effects/GothamSkyline";

export const Footer = () => (
  <footer className="relative border-t border-primary/15 pt-16 pb-10 px-6 overflow-hidden">
    <div className="absolute inset-x-0 top-0 opacity-30">
      <GothamSkyline opacity={0.2} />
    </div>

    <motion.div
      className="relative max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="flex items-center justify-center gap-4 mb-4"
        whileHover={{ scale: 1.02 }}
      >
        <BatSignal size={32} />
        <div>
          <span className="font-display tracking-[0.3em] text-primary text-lg block">
            PRABAL PARMAR
          </span>
          <span className="font-mono text-[8px] tracking-[0.5em] text-[#00C2FF]/50 uppercase">
            Wayne Enterprises Dev Division
          </span>
        </div>
      </motion.div>

      <motion.div
        className="h-px w-32 mx-auto my-6 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
      />

      <p className="text-xs text-muted-foreground tracking-[0.25em] font-mono uppercase">
        © {new Date().getFullYear()} — GOTHAM NEEDS NO HERO, IT NEEDS A BUILDER.
      </p>

      <motion.p
        className="mt-4 text-[9px] text-muted-foreground/40 font-mono tracking-widest"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        // easter_egg: why do we fall? so we can learn to deploy again.
      </motion.p>
    </motion.div>
  </footer>
);
