import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // This is the default for Vite; ensure it's pointing to 'dist'
  },
});
