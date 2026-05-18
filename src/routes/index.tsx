import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prabal Parmar — Gotham's Digital Vigilante | Developer Portfolio" },
      {
        name: "description",
        content:
          "Full-stack developer. B.Tech IT '26 from SGSITS Indore. Building MERN, Django, FastAPI, and production-grade web projects with a Batman-grade work ethic.",
      },
      { property: "og:title", content: "Prabal Parmar — Developer Portfolio" },
      {
        property: "og:description",
        content: "Batman-themed portfolio of Prabal Parmar — full-stack developer.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
  );
}
