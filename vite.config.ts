import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/inn-web/' : '/',
  plugins: [react()],
  optimizeDeps: {
    noDiscovery: true,
    include: [],
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: { vendor: ['react', 'react-dom'] },
      },
    },
  },
});
