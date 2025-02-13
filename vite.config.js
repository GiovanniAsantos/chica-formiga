import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        // Configuração adicional de CSS pode ser feita aqui, se necessário
      }
    }
  },
  base: "/chica-formiga/",  // Substitua pelo nome do repositório
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['antd/dist/antd.css'] // Adiciona o CSS do Ant Design como dependência externa
    }
  }
});
