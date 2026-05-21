import { lazy, Suspense, useState, useCallback } from "react";
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

const GothamRain = lazy(() =>
  import("@/components/effects/GothamRain").then((module) => ({ default: module.GothamRain })),
);
const SectionDivider = lazy(() =>
  import("@/components/effects/SectionDivider").then((module) => ({
    default: module.SectionDivider,
  })),
);
const BatTimeline = lazy(() =>
  import("@/components/effects/BatTimeline").then((module) => ({ default: module.BatTimeline })),
);
const CountUp = lazy(() =>
  import("@/components/effects/CountUp").then((module) => ({ default: module.CountUp })),
);
const SpotlightCard = lazy(() =>
  import("@/components/effects/SpotlightCard").then((module) => ({
    default: module.SpotlightCard,
  })),
);

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
        <Suspense fallback={<></>}>
          <GothamRain visible={!booting} />
        </Suspense>

        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<></>}>
            <SectionDivider />
          </Suspense>
          <Suspense fallback={<></>}>
            <About CountUpComponent={CountUp} BatTimelineComponent={BatTimeline} />
          </Suspense>
          <Suspense fallback={<></>}>
            <SectionDivider />
          </Suspense>
          <Suspense fallback={<></>}>
            <Skills SpotlightCardComponent={SpotlightCard} />
          </Suspense>
          <Suspense fallback={<></>}>
            <SectionDivider />
          </Suspense>
          <Suspense fallback={<></>}>
            <Projects SpotlightCardComponent={SpotlightCard} />
          </Suspense>
          <Suspense fallback={<></>}>
            <SectionDivider />
          </Suspense>
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
};
