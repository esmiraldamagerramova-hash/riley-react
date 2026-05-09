import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Netlify-friendly: keep all static assets inside `riley-react/public`.
  plugins: [tailwindcss(), react()],
});

