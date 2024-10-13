import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  base: "/", // Set the base path, usually '/' for root but can be a subdirectory if needed
});
