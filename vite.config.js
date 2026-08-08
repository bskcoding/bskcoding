import { defineConfig, loadEnv } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), "");
  const basePath = env.VITE_BASE_PATH || "/";

  return {
    base: basePath,
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],

    server: {
      watch: {
        // Polling avoids Windows EBUSY file watch errors on locked files
        usePolling: true,
        interval: 1000,
      },
    },

    build: {
      chunkSizeWarningLimit: 1000,
    },
  };
});
