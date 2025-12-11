import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        // Treat all .js files as .jsx (necessary for React components)
        '.js': 'jsx' 
      },
    },
  },
});
