import { BatSignal } from "./BatSignal";

export const Footer = () => (
  <footer className="border-t border-primary/20 py-10 px-6 text-center">
    <div className="flex items-center justify-center gap-3 mb-3">
      <BatSignal size={28} />
      <span className="font-display tracking-[0.3em] text-primary">PRABAL PARMAR</span>
    </div>
    <p className="text-xs text-muted-foreground tracking-widest">
      © {new Date().getFullYear()} — GOTHAM NEEDS NO HERO, IT NEEDS A BUILDER.
    </p>
  </footer>
);
