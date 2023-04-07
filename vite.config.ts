import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    devSourcemap: true,
  },
  server: {
    // host:"",
    // port:"",
    proxy: {
      '/api': {
        target: 'http://172.24.160.1:10393/mock/bb831bb1-27db-472f-8e32-00cc2874466d/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
});
