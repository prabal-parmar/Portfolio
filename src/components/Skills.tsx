import { SectionHeader } from "./About";
import { Code2, Database, Brain, Globe, Wrench, Users } from "lucide-react";

const skills = [
  { icon: Code2, title: "Languages", items: ["Python", "C / C++", "Java", "JavaScript"] },
  {
    icon: Globe,
    title: "Web Development",
    items: ["React.js", "HTML / CSS", "Tailwind", "Bootstrap"],
  },
  {
    icon: Wrench,
    title: "Backend Arsenal",
    items: ["Django", "FastAPI", "Flask", "Node / Express"],
  },
  { icon: Database, title: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"] },
  { icon: Brain, title: "Data Tools", items: ["Pandas", "NumPy", "Scikit-learn", "SQL"] },
  {
    icon: Users,
    title: "Soft Skills",
    items: ["Leadership", "Communication", "Graphic Design", "Mentorship"],
  },
];

export const Skills = () => (
  <section id="skills" className="relative py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionHeader kicker="Utility Belt" title="The Arsenal" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {skills.map((s) => (
          <div key={s.title} className="bat-border p-8 group">
            <s.icon
              className="w-10 h-10 text-primary mb-4 group-hover:animate-pulse-glow rounded-full"
              strokeWidth={1.5}
            />
            <h3 className="font-display text-2xl text-foreground mb-4">{s.title}</h3>
            <ul className="space-y-2">
              {s.items.map((i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <span className="w-1 h-1 bg-primary rounded-full" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
