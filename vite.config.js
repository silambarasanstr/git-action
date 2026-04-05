import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/devops-beginners/", // 👈 இது change பண்ணு
  server: {
    port: 3000,
    open: true,
  },
});
