import { useMemo, useState } from "react";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { ScrollReveal } from "./effects/ScrollReveal";
import { TiltCard } from "./effects/TiltCard";
import type { SpotlightCardProps } from "./effects/SpotlightCard";
import { Github, ExternalLink, RadioTower } from "lucide-react";
import batSignal from "@/assets/bat-signal.jpg";

const projects = [
  {
    title: "CodeVault",
    tag: "Code Platform",
    status: "Flagship",
    date: "Aug 2025",
    desc: "A code management platform on the MERN stack. Save snippets, practice coding problems, and review your workflow with personalized scoring.",
    signal: "Developer workflow, scoring, snippet library",
    tech: ["MERN", "React", "Node", "Tailwind"],
  },
  {
    title: "Chatzz",
    tag: "Realtime Chat App",
    status: "Shipped",
    date: "Apr 2024",
    desc: "Realtime chat application with Firebase auth and storage for fast, secure messaging.",
    signal: "Auth, realtime sync, media storage",
    tech: ["React", "Firebase", "Python"],
  },
  {
    title: "WhatsApp Chat Analyzer",
    tag: "Data Analysis Tool",
    status: "Analysis",
    date: "May 2025",
    desc: "Python tool that parses WhatsApp exports and surfaces insights — active users, message counts, top words, emojis, and chat patterns over time.",
    signal: "Parsing, insights, data visualization",
    tech: ["Python", "Pandas", "Data"],
  },
  {
    title: "IPL Player Analyzer",
    tag: "Streamlit Dashboard",
    status: "Dashboard",
    date: "May 2025",
    desc: "Interactive Streamlit dashboard analyzing IPL stats from 2008–2024. Compare players, rank by custom metrics, visualize trends across seasons.",
    signal: "Custom metrics, filters, trend analysis",
    tech: ["Python", "Streamlit", "Pandas", "Data"],
  },
  {
    title: "$-Tracker",
    tag: "Expense Manager",
    status: "Full Stack",
    date: "Jul 2025",
    desc: "Django + SQLite personal expense tracker with secure auth, full CRUD, category filters, and spending insights to keep finances under control.",
    signal: "Secure auth, CRUD, spending insights",
    tech: ["Django", "Python", "SQLite"],
  },
  {
    title: "Pustakaalay",
    tag: "In Development",
    status: "In Build",
    date: "2026",
    desc: "Currently in the Batcave — a library / book management system being built with a modern web stack. Stay tuned for the reveal.",
    signal: "Library workflows, modern API stack",
    tech: ["React", "FastAPI", "Python"],
  },
];

const projectMetrics = [
  { value: "6", label: "Featured builds" },
  { value: "3", label: "Product categories" },
  { value: "2024-26", label: "Active timeline" },
];

const ALL = "All";

type ProjectsProps = {
  SpotlightCardComponent: ComponentType<SpotlightCardProps>;
};

export const Projects = ({ SpotlightCardComponent }: ProjectsProps) => {
  const allTech = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return [ALL, ...Array.from(set).sort()];
  }, []);

  const [filter, setFilter] = useState<string>(ALL);

  const filtered = useMemo(
    () => (filter === ALL ? projects : projects.filter((p) => p.tech.includes(filter))),
    [filter],
  );

  return (
    <section id="projects" className="relative py-32 px-6 smoke-bg overflow-hidden section-glow">
      <motion.img
        src={batSignal}
        alt=""
        aria-hidden="true"
        width={1280}
        height={1280}
        loading="lazy"
        className="absolute -right-40 top-20 w-[600px] opacity-[0.06] pointer-events-none"
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,197,24,0.03) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader kicker="Case Files" title="Confidential Missions" />
        </ScrollReveal>

        <ScrollReveal delay={0.08} direction="scale">
          <div className="mx-auto mt-12 grid max-w-4xl gap-px overflow-hidden border border-primary/15 bg-primary/10 sm:grid-cols-3">
            {projectMetrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-[#0A0A0A]/85 px-6 py-5 text-center backdrop-blur-sm"
              >
                <div className="font-display text-2xl text-primary text-glow">{metric.value}</div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.28em] text-[#00C2FF]/60">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-14 flex flex-col items-center gap-4">
            <p className="font-mono tracking-[0.3em] text-[10px] text-[#00C2FF]/60 uppercase">
              Filter by Tech
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
              {allTech.map((t) => {
                const active = filter === t;
                return (
                  <motion.button
                    key={t}
                    type="button"
                    onClick={() => setFilter(t)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className={`px-4 py-2 text-[11px] font-display tracking-[0.2em] uppercase border transition-all bat-clip ${
                      active
                        ? "bg-primary text-primary-foreground border-primary shadow-[0_0_24px_rgba(245,197,24,0.4)]"
                        : "border-primary/25 text-muted-foreground hover:text-primary hover:border-primary/60 glass-panel"
                    }`}
                  >
                    {t}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {filtered.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.06}>
              <SpotlightCardComponent className="h-full">
                <TiltCard>
                  <article className="bat-border glow-border p-6 lg:p-7 flex flex-col h-full group relative overflow-hidden">
                    <div className="flex items-start justify-between gap-2 mb-4 relative z-10">
                      <div className="min-w-0">
                        <span className="block text-[10px] tracking-[0.25em] text-[#00C2FF]/80 uppercase font-mono">
                          {p.tag}
                        </span>
                        <span className="mt-1 inline-flex items-center gap-1.5 border border-primary/20 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-primary/80">
                          <RadioTower className="h-3 w-3" />
                          {p.status}
                        </span>
                      </div>
                      <span className="text-[10px] tracking-widest text-muted-foreground whitespace-nowrap font-mono">
                        {p.date}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors relative z-10">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 relative z-10">
                      {p.desc}
                    </p>

                    <p className="relative z-10 mt-4 border-l border-[#00C2FF]/25 pl-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#00C2FF]/65">
                      {p.signal}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5 relative z-10">
                      {p.tech.map((t) => (
                        <motion.button
                          key={t}
                          type="button"
                          onClick={() => setFilter(t)}
                          whileHover={{ scale: 1.05 }}
                          className="text-[10px] px-2.5 py-1 border border-primary/25 text-primary/80 tracking-wider hover:border-primary hover:text-primary hover:shadow-[0_0_12px_rgba(245,197,24,0.2)] transition-all font-mono"
                        >
                          {t}
                        </motion.button>
                      ))}
                    </div>

                    <motion.a
                      href="https://github.com/prabal-parmar"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-xs font-display tracking-widest text-primary hover:text-[#00C2FF] transition-colors relative z-10 group/link"
                      whileHover={{ x: 4 }}
                    >
                      VIEW CASE FILE
                      <ExternalLink className="w-3 h-3 group-hover/link:rotate-12 transition-transform" />
                    </motion.a>

                    <motion.div
                      className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#F5C518] via-[#00C2FF] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                      aria-hidden="true"
                    />
                  </article>
                </TiltCard>
              </SpotlightCardComponent>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground mt-12 font-display tracking-widest text-sm"
          >
            NO CASE FILES MATCH THIS FILTER.
          </motion.p>
        )}

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-20">
            <motion.a
              href="https://github.com/prabal-parmar"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(245,197,24,0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-4 btn-ghost-glow font-display tracking-widest text-sm bat-clip"
            >
              <Github className="w-4 h-4" />
              ALL FILES ON GITHUB
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
