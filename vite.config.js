import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/DebjitPortfolio/", // Correct the base URL with a leading and trailing slash
  plugins: [react()],
});
