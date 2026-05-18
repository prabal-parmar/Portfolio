import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { ScrollReveal } from "./effects/ScrollReveal";
import { TiltCard } from "./effects/TiltCard";
import { Github, ExternalLink } from "lucide-react";
import batSignal from "@/assets/bat-signal.jpg";

const projects = [
  {
    title: "CodeVault",
    tag: "Code Platform",
    date: "Aug 2025",
    desc: "A code management platform on the MERN stack. Save snippets, practice coding problems, and review your workflow with personalized scoring.",
    tech: ["MERN", "React", "Node", "Tailwind"],
  },
  {
    title: "Chatzz",
    tag: "Realtime Chat App",
    date: "Apr 2024",
    desc: "Realtime chat application with Firebase auth and storage for fast, secure messaging.",
    tech: ["React", "Firebase", "Python"],
  },
  {
    title: "WhatsApp Chat Analyzer",
    tag: "Data Analysis Tool",
    date: "May 2025",
    desc: "Python tool that parses WhatsApp exports and surfaces insights — active users, message counts, top words, emojis, and chat patterns over time.",
    tech: ["Python", "Pandas", "Data"],
  },
  {
    title: "IPL Player Analyzer",
    tag: "Streamlit Dashboard",
    date: "May 2025",
    desc: "Interactive Streamlit dashboard analyzing IPL stats from 2008–2024. Compare players, rank by custom metrics, visualize trends across seasons.",
    tech: ["Python", "Streamlit", "Pandas", "Data"],
  },
  {
    title: "$-Tracker",
    tag: "Expense Manager",
    date: "Jul 2025",
    desc: "Django + SQLite personal expense tracker with secure auth, full CRUD, category filters, and spending insights to keep finances under control.",
    tech: ["Django", "Python", "SQLite"],
  },
  {
    title: "Pustakaalay",
    tag: "In Development",
    date: "2026",
    desc: "Currently in the Batcave — a library / book management system being built with a modern web stack. Stay tuned for the reveal.",
    tech: ["React", "FastAPI", "Python"],
  },
];

const ALL = "All";

export const Projects = () => {
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
                <TiltCard>
                  <article className="bat-border glow-border p-6 lg:p-7 flex flex-col h-full group relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(245,197,24,0.08) 0%, transparent 50%)",
                      }}
                      aria-hidden="true"
                    />

                    <div className="flex items-start justify-between gap-2 mb-4 relative z-10">
                      <span className="text-[10px] tracking-[0.25em] text-[#00C2FF]/80 uppercase font-mono">
                        {p.tag}
                      </span>
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
