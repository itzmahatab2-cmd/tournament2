import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],

    // 🔥 VERY IMPORTANT for Vercel
    base: "/",

    server: {
      port: 3000,
      host: true,
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },

    // ❌ REMOVE process.env usage
    // Vite does NOT support process.env in browser
  };
});

