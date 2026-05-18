import { useState, useEffect } from "react";
import { BatSignal } from "./BatSignal";
import { Download } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Arsenal" },
  { href: "#projects", label: "Cases" },
  { href: "#contact", label: "Signal" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/85 border-b border-primary/20 py-3"
          : "py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 group shrink-0">
          <BatSignal size={36} className="group-hover:scale-110 transition-transform" />
          <span className="font-display text-lg tracking-[0.3em] text-primary hidden sm:inline">
            PRABAL
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-display tracking-widest text-xs lg:text-sm text-muted-foreground hover:text-primary transition-colors relative group px-2 py-1"
              >
                {l.label.toUpperCase()}
                <span className="absolute inset-x-2 -bottom-1 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2 border border-primary/50 text-primary font-display tracking-widest text-[10px] md:text-xs hover:bg-primary/10 hover:border-primary transition-all bat-clip shrink-0"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">RESUME</span>
        </a>
      </nav>
    </header>
  );
};
