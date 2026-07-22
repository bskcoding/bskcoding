import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  server: {
    watch: {
      // Polling avoids Windows EBUSY file watch errors on locked files
      usePolling: true,
      interval: 1000,
      // Ignore the public image that is causing EBUSY
      ignored: ["**/public/bskcoding.png", "public/bskcoding.png"],
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
