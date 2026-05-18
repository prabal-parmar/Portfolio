#!/usr/bin/env node
/** Frees Vite dev ports so a fresh `npm run dev` does not attach to a stale process. */
import { execSync } from "node:child_process";

const ports = [5173, 5174, 5175];

for (const port of ports) {
  try {
    const pids = execSync(`lsof -ti:${port}`, { encoding: "utf8" }).trim();
    if (!pids) continue;
    for (const pid of pids.split("\n").filter(Boolean)) {
      try {
        process.kill(Number(pid), "SIGTERM");
      } catch {
        /* already gone */
      }
    }
  } catch {
    /* port not in use */
  }
}
