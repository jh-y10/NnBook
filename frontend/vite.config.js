import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/image-proxy": {
        target: "http://localhost:5050",
        changeOrigin: true,
      },
      "/api": {
        target: "https://www.aladin.co.kr",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/ttb/api"),
      },
    },
  },
});
