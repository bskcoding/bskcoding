import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), "");
  const basePath = env.VITE_BASE_PATH || "/";

  return {
    base: basePath,
    plugins: [react()],

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
