import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: "/chica-formiga/",  // Substitua pelo nome do repositório
  plugins: [react()],
});
