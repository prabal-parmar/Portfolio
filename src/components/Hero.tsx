import gothamHero from "@/assets/gotham-hero.jpg";
import { BatSignal } from "./BatSignal";
import { Download } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={gothamHero}
          alt="Gotham City skyline drenched in crimson rain"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background" />
        <div className="absolute inset-0 rain-overlay opacity-60" />
      </div>

      {/* Flying bats */}
      <BatSignal size={40} className="absolute top-1/4 animate-bat-fly opacity-50" />
      <BatSignal size={28} className="absolute top-1/3 animate-bat-fly opacity-40" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="font-display tracking-[0.5em] text-primary/80 text-xs md:text-base mb-6 animate-fade-up">
          GOTHAM'S DIGITAL VIGILANTE
        </p>
        <h1
          className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-glow animate-fade-up"
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          PRABAL
          <span className="block text-primary">PARMAR</span>
        </h1>
        <div
          className="flex items-center justify-center gap-4 my-8 animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          <span className="h-px w-12 sm:w-16 bg-primary/50" />
          <BatSignal size={32} flicker />
          <span className="h-px w-12 sm:w-16 bg-primary/50" />
        </div>
        <p
          className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-body tracking-wide animate-fade-up"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          Full-Stack Developer • Software Craftsman • B.Tech IT, SGSITS Indore '26
        </p>
        <p
          className="mt-4 text-sm md:text-base text-muted-foreground/80 italic max-w-xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          "It's not who I am underneath, but what I <span className="text-primary">build</span> that
          defines me."
        </p>

        <div
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: "0.5s", animationFillMode: "both" }}
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-display tracking-widest text-sm hover:bg-primary/90 transition-all hover:shadow-[0_0_40px_oklch(0.58_0.22_25_/_60%)] bat-clip"
          >
            ENTER THE BATCAVE
          </a>
          <a
            href="/resume.pdf"
            download
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary/60 text-primary font-display tracking-widest text-sm hover:bg-primary/10 hover:border-primary transition-all bat-clip"
          >
            <Download className="w-4 h-4" />
            DOWNLOAD DOSSIER
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 border border-primary/30 text-muted-foreground hover:text-primary font-display tracking-widest text-sm hover:bg-primary/5 hover:border-primary/60 transition-all bat-clip"
          >
            LIGHT THE SIGNAL
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
