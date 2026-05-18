import { useMemo, useState } from "react";
import { SectionHeader } from "./About";
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
    <section id="projects" className="relative py-32 px-6 smoke-bg overflow-hidden">
      <img
        src={batSignal}
        alt=""
        aria-hidden="true"
        width={1280}
        height={1280}
        loading="lazy"
        className="absolute -right-40 top-20 w-[600px] opacity-[0.07] pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader kicker="Case Files" title="Confidential Missions" />

        {/* Tech filter */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="font-display tracking-[0.3em] text-[10px] text-muted-foreground uppercase">
            Filter by Tech
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
            {allTech.map((t) => {
              const active = filter === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setFilter(t)}
                  className={`px-4 py-1.5 text-[11px] font-display tracking-[0.2em] uppercase border transition-all bat-clip ${
                    active
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_oklch(0.58_0.22_25/_50%)]"
                      : "border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/70"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filtered.map((p) => (
            <article key={p.title} className="bat-border p-6 lg:p-7 flex flex-col group">
              <div className="flex items-start justify-between gap-2 mb-4">
                <span className="text-[10px] tracking-[0.25em] text-primary/80 uppercase">
                  {p.tag}
                </span>
                <span className="text-[10px] tracking-widest text-muted-foreground whitespace-nowrap">
                  {p.date}
                </span>
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {p.tech.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFilter(t)}
                    className="text-[10px] px-2 py-1 border border-primary/30 text-primary/80 tracking-wider hover:border-primary hover:text-primary transition-colors"
                  >
                    {t}
                  </button>
                ))}
              </div>
              <a
                href="https://github.com/prabal-parmar"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs font-display tracking-widest text-primary hover:text-primary/80 transition-colors"
              >
                VIEW CASE FILE <ExternalLink className="w-3 h-3" />
              </a>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-12 font-display tracking-widest text-sm">
            NO CASE FILES MATCH THIS FILTER.
          </p>
        )}

        <div className="text-center mt-16">
          <a
            href="https://github.com/prabal-parmar"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-primary/50 text-primary font-display tracking-widest text-sm hover:bg-primary/10 transition-all bat-clip"
          >
            <Github className="w-4 h-4" />
            ALL FILES ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
};
