import batman from "@/assets/batman-silhouette.jpg";
import batLogo from "@/assets/bat-logo.png";
import { BatSignal } from "./BatSignal";

export const About = () => {
  const stats = [
    { value: "10+", label: "Projects Shipped" },
    { value: "5+", label: "Tech Stacks" },
    { value: "3rd", label: "CodeQuest Rank" },
    { value: "'26", label: "B.Tech Class" },
  ];

  return (
    <section id="about" className="relative py-32 px-6 smoke-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker="Origin Story" title="The Man Behind The Mask" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16">
          {/* Stylized visual frame */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[3/4] bat-border overflow-hidden group">
              <img
                src={batman}
                alt="Crimson-lit vigilante in a rainy Gotham alley"
                width={896}
                height={1280}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1.5s]"
              />
              {/* Red gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,oklch(0.58_0.22_25/_25%),transparent_60%)]" />
              <div className="absolute inset-0 rain-overlay opacity-40" />

              {/* Bat emblem watermark */}
              <img
                src={batLogo}
                alt=""
                aria-hidden="true"
                className="absolute bottom-6 right-6 w-24 opacity-80 animate-pulse-glow rounded-full"
                style={{ filter: "drop-shadow(0 0 20px oklch(0.58 0.22 25 / 80%))" }}
              />

              {/* Corner accents */}
              <span className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary/70" />
              <span className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/70" />
              <span className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary/70" />
              <span className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary/70" />

              {/* Caption */}
              <div className="absolute bottom-5 left-5 font-display tracking-[0.3em] text-[10px] text-primary/90">
                CASE FILE — P.P. / 2026
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-foreground/90">
              By day, a{" "}
              <span className="text-primary font-semibold">B.Tech Information Technology</span>{" "}
              student at SGSITS Indore. By night, a builder of MERN stacks, data-driven tools, and
              web systems that prowl the digital streets of Gotham.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
              I forge applications across the full stack — from React frontends to Django, FastAPI,
              and Flask backends. My utility belt is loaded with Python, clean architecture, and
              production-ready workflows. Whether it's a chat platform, an expense tracker, or a
              code management system, I treat every project like a mission.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me designing graphics for GS Production House,
              mentoring juniors at CodeFoster, or refining workflows with practical tools. The city
              needs a developer who never sleeps.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((s) => (
                <div key={s.label} className="bat-border p-5 md:p-6 text-center">
                  <div className="font-display text-3xl md:text-4xl text-primary text-glow">
                    {s.value}
                  </div>
                  <div className="text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground mt-2 uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SectionHeader = ({ kicker, title }: { kicker: string; title: string }) => (
  <div className="text-center">
    <div className="flex items-center justify-center gap-4 mb-4">
      <span className="h-px w-12 bg-primary/40" />
      <BatSignal size={24} />
      <span className="h-px w-12 bg-primary/40" />
    </div>
    <p className="font-display tracking-[0.4em] text-primary/70 text-xs md:text-sm uppercase">
      {kicker}
    </p>
    <h2 className="font-display text-3xl sm:text-4xl md:text-6xl mt-3 text-glow">{title}</h2>
  </div>
);
