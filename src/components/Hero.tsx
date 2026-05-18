import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gothamHero from "@/assets/gotham-hero.jpg";
import batLogo from "@/assets/bat-logo.png";
import { BatSignal } from "./BatSignal";
import { Download, ChevronDown, Shield } from "lucide-react";
import { Particles } from "./effects/Particles";
import { GothamSkyline } from "./effects/GothamSkyline";
import { TypingText } from "./effects/TypingText";

const subtitle =
  "Full-Stack Developer  ·  Software Craftsman  ·  B.Tech IT, SGSITS Indore '26";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const signalRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  useEffect(() => {
    if (!signalRef.current) return;
    let tween: { kill: () => void } | null = null;
    void import("gsap").then(({ default: gsap }) => {
      if (!signalRef.current) return;
      tween = gsap.to(signalRef.current, {
        opacity: 0.5,
        scale: 1.15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
    return () => tween?.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-[var(--nav-height)] pb-20"
    >
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={gothamHero}
          alt="Gotham City skyline drenched in crimson rain"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.7) 45%, #0A0A0A 100%)",
          }}
        />
        <motion.div className="absolute inset-0 rain-overlay opacity-50" aria-hidden="true" />
        <div
          ref={signalRef}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100vw,800px)] h-[min(60vh,600px)] pointer-events-none"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 0%, transparent 160deg, rgba(245,197,24,0.12) 200deg, transparent 240deg)",
          }}
          aria-hidden="true"
        />
      </motion.div>

      <Particles count={35} />
      <div className="absolute inset-x-0 bottom-0 z-[2]">
        <GothamSkyline opacity={0.35} />
      </div>

      <img
        src={batLogo}
        alt=""
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,600px)] opacity-[0.03] pointer-events-none"
      />

      <BatSignal
        size={36}
        className="absolute top-[28%] left-[6%] animate-bat-fly opacity-40 hidden lg:block [animation-delay:0s]"
      />
      <BatSignal
        size={24}
        className="absolute top-[34%] right-[8%] animate-bat-fly opacity-30 hidden lg:block [animation-delay:4s]"
      />

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center"
        style={{ opacity: contentOpacity }}
      >
        {/* HUD identity badge — clears fixed navbar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center mb-8 md:mb-10"
        >
          <motion.div
            className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2.5 sm:py-3 rounded-sm border border-[#00C2FF]/35 bg-[#0A0A0A]/75 backdrop-blur-md shadow-[0_0_32px_rgba(0,194,255,0.08)]"
            whileHover={{
              borderColor: "rgba(245, 197, 24, 0.5)",
              boxShadow: "0 0 40px rgba(245, 197, 24, 0.12)",
            }}
          >
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F5C518] shrink-0" strokeWidth={1.5} />
            <motion.div className="text-left sm:text-center">
              <span className="block font-mono text-[8px] sm:text-[9px] tracking-[0.45em] text-[#00C2FF]/70 uppercase">
                Secure uplink · Gotham net
              </span>
              <span className="block font-hud text-[11px] sm:text-xs md:text-sm tracking-[0.22em] sm:tracking-[0.32em] text-[#F5C518] uppercase mt-0.5">
                Gotham&apos;s Digital Vigilante
              </span>
            </motion.div>
            <span className="hidden sm:flex w-px h-8 bg-gradient-to-b from-transparent via-[#00C2FF]/40 to-transparent" />
            <span className="hidden sm:block font-mono text-[9px] tracking-widest text-muted-foreground/80 tabular-nums">
              ID: PP-26
            </span>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold leading-[0.95] mb-2"
        >
          <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] text-foreground/95 tracking-wide">
            PRABAL
          </span>
          <motion.span
            className="block text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] text-primary text-glow tracking-wide mt-1"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.45 }}
          >
            PARMAR
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="font-mono text-[10px] sm:text-xs tracking-[0.35em] text-muted-foreground/70 uppercase mt-4 mb-8"
        >
          Building systems the city can trust
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.6 }}
          className="flex items-center justify-center gap-3 sm:gap-5 my-6 sm:my-8"
        >
          <span className="h-px flex-1 max-w-[5rem] sm:max-w-[6rem] bg-gradient-to-r from-transparent to-primary/50" />
          <BatSignal size={32} flicker />
          <span className="h-px flex-1 max-w-[5rem] sm:max-w-[6rem] bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-base sm:text-lg md:text-xl text-foreground/85 font-body tracking-wide leading-relaxed min-h-[3rem] px-2">
            <TypingText text={subtitle} startDelay={850} speed={26} />
          </p>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="mt-8 sm:mt-10 mx-auto max-w-lg px-5 sm:px-6 py-4 sm:py-5 border-l-2 border-[#F5C518]/60 bg-[#111111]/50 backdrop-blur-sm text-left sm:text-center sm:border-l-0 sm:border-t sm:border-[#F5C518]/30 rounded-sm"
        >
          <p className="font-mono text-[9px] tracking-[0.4em] text-[#00C2FF]/50 uppercase mb-2">
            // classified_quote.log
          </p>
          <p className="text-sm sm:text-base text-muted-foreground/90 italic leading-relaxed">
            &ldquo;It&apos;s not who I am underneath, but what I{" "}
            <span className="text-primary font-semibold not-italic">build</span> that defines
            me.&rdquo;
          </p>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.65 }}
          className="mt-12 sm:mt-14 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center w-full max-w-xl mx-auto"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:flex-1 px-8 py-3.5 sm:py-4 btn-primary-glow font-display tracking-[0.2em] text-xs sm:text-sm bat-clip text-center"
          >
            ENTER THE BATCAVE
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 btn-ghost-glow font-display tracking-[0.2em] text-xs sm:text-sm bat-clip"
          >
            <Download className="w-4 h-4 shrink-0" />
            DOSSIER
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:flex-1 px-8 py-3.5 sm:py-4 border border-[rgba(0,194,255,0.4)] text-[#00C2FF] hover:bg-[rgba(0,194,255,0.08)] font-display tracking-[0.2em] text-xs sm:text-sm transition-all bat-clip text-center"
          >
            LIGHT SIGNAL
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35 }}
          className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[9px] sm:text-[10px] tracking-[0.28em] text-muted-foreground/55 uppercase"
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] animate-pulse" />
            Batcomputer online
          </span>
          <span className="hidden sm:inline text-primary/25">|</span>
          <span className="hidden sm:inline">Encryption: AES-256</span>
          <span className="hidden md:inline text-primary/25">|</span>
          <span className="hidden md:inline tabular-nums">v4.2.0-stable</span>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 animate-float"
        aria-label="Scroll to about"
      >
        <div className="flex flex-col items-center gap-1.5 text-primary/45 hover:text-primary transition-colors">
          <span className="font-mono text-[8px] tracking-[0.35em] uppercase">Descend</span>
          <ChevronDown className="w-5 h-5" />
          <div className="w-5 h-9 border-2 border-primary/35 rounded-full flex justify-center pt-1.5">
            <motion.div
              className="w-0.5 h-1.5 bg-primary rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.a>
    </section>
  );
};
