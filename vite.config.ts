import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    tanstackStart({ server: { entry: "server" } }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    cloudflare(),
  ],
  optimizeDeps: {
    noDiscovery: true,
    include: [],
    exclude: [
      "@tanstack/react-start",
      "@tanstack/react-router",
      "@tanstack/react-router-devtools",
      "@tanstack/start-server-core",
      "@tanstack/start-client-core",
      "@tanstack/start-plugin-core",
      "@tanstack/start-static-server-functions",
    ],
    esbuildOptions: {
      external: [
        '#tanstack-router-entry',
        '#tanstack-start-entry',
        '#tanstack-start-plugin-adapters',
        'tanstack-start-manifest:v',
        'tanstack-start-injected-head-scripts:v',
      ],
    },
  },
});

