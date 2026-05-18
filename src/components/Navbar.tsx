import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BatSignal } from "./BatSignal";
import { Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Arsenal" },
  { href: "#projects", label: "Cases" },
  { href: "#contact", label: "Signal" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s!));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
    >
      <motion.div
        className={cn(
          "pointer-events-auto mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500",
          scrolled ? "pt-3" : "pt-4 md:pt-5",
        )}
      >
        <nav
          className={cn(
            "flex w-full items-center justify-between gap-3 sm:gap-4 transition-all duration-500",
            scrolled
              ? "glass-panel rounded-md border border-[rgba(245,197,24,0.18)] px-4 sm:px-6 py-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.55)]"
              : "px-1 py-1",
          )}
        >
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0">
            <BatSignal size={34} className="shrink-0 group-hover:scale-110 transition-transform" />
            <div className="hidden sm:block min-w-0">
              <span className="font-display text-base lg:text-lg tracking-[0.28em] text-primary block leading-none truncate">
                PRABAL
              </span>
              <span className="font-mono text-[7px] lg:text-[8px] tracking-[0.38em] text-[#00C2FF]/75 uppercase">
                Wayne R&amp;D
              </span>
            </div>
          </a>

          <ul className="hidden md:flex items-center justify-center flex-1 gap-0.5 lg:gap-1">
            {links.map((l) => {
              const active = activeSection === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={cn(
                      "relative font-display tracking-[0.18em] text-[11px] lg:text-xs px-3 lg:px-4 py-2 transition-colors duration-300 whitespace-nowrap",
                      active ? "text-primary" : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    {l.label.toUpperCase()}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#F5C518] to-[#00C2FF] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 shrink-0">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:inline-flex items-center gap-2 px-3.5 lg:px-4 py-2 btn-ghost-glow font-display tracking-[0.2em] text-[10px] lg:text-xs bat-clip"
            >
              <Download className="w-3.5 h-3.5" />
              RESUME
            </motion.a>

            <button
              type="button"
              className="md:hidden p-2 text-primary border border-primary/30 bat-clip"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden mt-2 glass-panel rounded-md border border-[rgba(245,197,24,0.15)] overflow-hidden pointer-events-auto"
            >
              <ul className="py-3 px-2 space-y-0.5">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block font-display tracking-[0.2em] text-sm px-4 py-3 rounded-sm transition-colors",
                        activeSection === l.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5",
                      )}
                    >
                      {l.label.toUpperCase()}
                    </a>
                  </li>
                ))}
                <li className="pt-2 px-2">
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 btn-ghost-glow font-display tracking-[0.2em] text-xs bat-clip"
                  >
                    <Download className="w-3.5 h-3.5" />
                    RESUME
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
};
