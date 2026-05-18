/** Static shell for SSR / pre-hydration — no framer-motion or random values. */
export const PortfolioFallback = () => (
  <div className="min-h-screen bg-[#0A0A0A] text-[#f0f0f0]">
    <div className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="mx-auto max-w-7xl h-14 rounded-md border border-[rgba(245,197,24,0.12)] bg-[#111111]/80 animate-pulse" />
    </div>
    <div className="pt-[var(--nav-height)] min-h-[100dvh] flex flex-col items-center justify-center px-6 text-center">
      <div className="h-10 w-64 max-w-full rounded-sm bg-[#1A1A1A] animate-pulse mb-8" />
      <div className="h-16 w-80 max-w-full bg-[#1A1A1A] animate-pulse mb-4" />
      <div className="h-16 w-72 max-w-full bg-[#1A1A1A] animate-pulse mb-10" />
      <div className="h-4 w-96 max-w-full bg-[#141414] animate-pulse" />
    </div>
  </div>
);
