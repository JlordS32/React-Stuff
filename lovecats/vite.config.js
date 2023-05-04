import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createProxy } from 'vite-plugin-http-proxy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createProxy({
      prefix: '/api', // The prefix for the API requests
      target: 'https://api.thecatapi.com/v1', // The target URL to redirect requests to
      changeOrigin: true, // Change the origin of the host header to the target URL
      rewrite: (path) => path.replace(/^\/api/, ''), // Remove the '/api' prefix before forwarding the request
    }),
  ],
})
