import { motion } from "framer-motion";
import batman from "@/assets/batman-silhouette.jpg";
import batLogo from "@/assets/bat-logo.png";
import { BatSignal } from "./BatSignal";
import { ScrollReveal } from "./effects/ScrollReveal";
import { HUDFrame } from "./effects/HUDFrame";

export const About = () => {
  const stats = [
    { value: "10+", label: "Projects Shipped" },
    { value: "5+", label: "Tech Stacks" },
    { value: "3rd", label: "CodeQuest Rank" },
    { value: "'26", label: "B.Tech Class" },
  ];

  return (
    <section id="about" className="relative py-32 px-6 smoke-bg section-glow overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,194,255,0.3) 2px, rgba(0,194,255,0.3) 3px)`,
        }}
        aria-hidden="true"
      />

      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <ScrollReveal>
          <SectionHeader kicker="Origin Story" title="The Man Behind The Mask" />
        </ScrollReveal>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-20"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <ScrollReveal direction="left" className="relative mx-auto w-full max-w-md lg:max-w-none">
            <HUDFrame label="DOSSIER // CLASSIFIED" className="aspect-[3/4]">
              <div className="relative w-full h-full min-h-[400px] group">
                <img
                  src={batman}
                  alt="Crimson-lit vigilante in a rainy Gotham alley"
                  width={896}
                  height={1280}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1.8s] ease-out"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"
                  aria-hidden="true"
                />
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 35%, rgba(245,197,24,0.15) 0%, transparent 55%)",
                  }}
                  aria-hidden="true"
                />
                <motion.div
                  className="absolute inset-0 rain-overlay opacity-30"
                  aria-hidden="true"
                />

                <motion.img
                  src={batLogo}
                  alt=""
                  aria-hidden="true"
                  className="absolute bottom-8 right-8 w-20 md:w-24 opacity-90"
                  animate={{
                    filter: [
                      "drop-shadow(0 0 16px rgba(245,197,24,0.6))",
                      "drop-shadow(0 0 28px rgba(245,197,24,0.9))",
                      "drop-shadow(0 0 16px rgba(245,197,24,0.6))",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="absolute top-14 left-5 right-5 flex justify-between font-mono text-[8px] text-[#00C2FF]/60 tracking-widest">
                  <span>SCAN: ACTIVE</span>
                  <span className="text-primary/70">ID: PP-2026</span>
                </div>

                <motion.div className="absolute bottom-5 left-5 font-display tracking-[0.3em] text-[10px] text-primary/90 z-10">
                  CASE FILE — P.P. / 2026
                </motion.div>
              </div>
            </HUDFrame>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1} className="space-y-6">
            <motion.div
              className="glass-panel p-6 border-l-2 border-l-[#F5C518]"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                By day, a{" "}
                <span className="text-primary font-semibold">B.Tech Information Technology</span>{" "}
                student at SGSITS Indore. By night, a builder of MERN stacks, data-driven tools, and
                web systems that prowl the digital streets of Gotham.
              </p>
            </motion.div>

            <p className="text-sm md:text-base leading-relaxed text-muted-foreground pl-4 border-l border-[rgba(0,194,255,0.2)]">
              I forge applications across the full stack — from React frontends to Django, FastAPI,
              and Flask backends. My utility belt is loaded with Python, clean architecture, and
              production-ready workflows. Whether it's a chat platform, an expense tracker, or a
              code management system, I treat every project like a mission.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground pl-4 border-l border-[rgba(0,194,255,0.2)]">
              When I'm not coding, you'll find me designing graphics for GS Production House,
              mentoring juniors at CodeFoster, or refining workflows with practical tools. The city
              needs a developer who never sleeps.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((s, i) => (
                <ScrollReveal key={s.label} delay={i * 0.08}>
                  <motion.div
                    className="bat-border glow-border p-5 md:p-6 text-center relative overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div
                      className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00C2FF]/40 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="font-display text-3xl md:text-4xl text-primary text-glow">
                      {s.value}
                    </div>
                    <motion.div className="text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground mt-2 uppercase font-mono">
                      {s.label}
                    </motion.div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </motion.div>
      </motion.div>
    </section>
  );
};

export const SectionHeader = ({ kicker, title }: { kicker: string; title: string }) => (
  <div className="text-center relative">
    <motion.div
      className="flex items-center justify-center gap-4 mb-4"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
      <BatSignal size={28} />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
    </motion.div>
    <motion.p
      className="font-hud tracking-[0.4em] text-[#00C2FF]/70 text-[10px] md:text-xs uppercase"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
    >
      {kicker}
    </motion.p>
    <motion.h2
      className="font-display text-3xl sm:text-4xl md:text-6xl mt-4 text-glow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.7 }}
    >
      {title}
    </motion.h2>
    <motion.div
      className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-[#F5C518] via-[#00C2FF] to-[#F5C518]"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.35, duration: 0.6 }}
    />
  </div>
);
