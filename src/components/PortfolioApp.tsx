import { useState, useCallback } from "react";
import { MotionConfig } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { MouseGlow } from "@/components/effects/MouseGlow";

export const PortfolioApp = () => {
  const [booting, setBooting] = useState(true);
  const handleLoadComplete = useCallback(() => setBooting(false), []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground relative">
        {booting && <LoadingScreen onComplete={handleLoadComplete} />}
        <CustomCursor />
        <MouseGlow />

        <div
          className="fixed inset-0 pointer-events-none z-[1] scanlines opacity-[0.03]"
          aria-hidden="true"
        />

        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
};
