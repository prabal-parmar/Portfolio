import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@/components/effects/ClientOnly";
import { PortfolioApp } from "@/components/PortfolioApp";
import { PortfolioFallback } from "@/components/PortfolioFallback";

export const Route = createFileRoute("/")({
  ssr: false,
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
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ClientOnly fallback={<PortfolioFallback />}>
      <PortfolioApp />
    </ClientOnly>
  );
}
