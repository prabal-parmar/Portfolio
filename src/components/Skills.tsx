import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { ScrollReveal } from "./effects/ScrollReveal";
import { Code2, Database, Brain, Globe, Wrench, Users } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "C / C++", "Java", "JavaScript"],
    level: 92,
  },
  {
    icon: Globe,
    title: "Web Development",
    items: ["React.js", "HTML / CSS", "Tailwind", "Bootstrap"],
    level: 88,
  },
  {
    icon: Wrench,
    title: "Backend Arsenal",
    items: ["Django", "FastAPI", "Flask", "Node / Express"],
    level: 85,
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
    level: 82,
  },
  {
    icon: Brain,
    title: "Data Tools",
    items: ["Pandas", "NumPy", "Scikit-learn", "SQL"],
    level: 80,
  },
  {
    icon: Users,
    title: "Soft Skills",
    items: ["Leadership", "Communication", "Graphic Design", "Mentorship"],
    level: 90,
  },
];

export const Skills = () => (
  <section id="skills" className="relative py-32 px-6 overflow-hidden">
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.04]"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,194,255,0.8) 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }}
      aria-hidden="true"
    />

    <div className="max-w-7xl mx-auto relative">
      <ScrollReveal>
        <SectionHeader kicker="Utility Belt" title="The Arsenal" />
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {skills.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.08}>
            <motion.div
              className="bat-border glow-border p-8 group h-full relative overflow-hidden"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              <motion.div className="flex items-start justify-between mb-5" initial={false}>
                <motion.div
                  className="p-3 rounded-sm border border-[rgba(0,194,255,0.25)] bg-[rgba(0,194,255,0.05)]"
                  whileHover={{
                    boxShadow: "0 0 24px rgba(0,194,255,0.25)",
                    borderColor: "rgba(245,197,24,0.5)",
                  }}
                >
                  <s.icon
                    className="w-8 h-8 text-primary group-hover:text-[#00C2FF] transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </motion.div>
                <span className="font-mono text-[9px] tracking-widest text-[#00C2FF]/50 uppercase">
                  MOD-{String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>

              <h3 className="font-display text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">
                {s.title}
              </h3>

              <motion.div className="mb-5">
                <motion.div className="flex justify-between font-mono text-[9px] text-muted-foreground mb-1.5 tracking-wider">
                  <span>COMPETENCY</span>
                  <span className="text-primary">{s.level}%</span>
                </motion.div>
                <div className="skill-bar rounded-full overflow-hidden">
                  <motion.div
                    className="skill-bar-fill rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>

              <ul className="space-y-2.5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-muted-foreground text-sm group/item"
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-40 group-hover/item:animate-ping" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                    </span>
                    <span className="group-hover/item:text-foreground transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(245,197,24,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
