import { defineConfig } from 'vite'

export default defineConfig(() => {
  // Use Vite env variable with a default for dev.
  const apiTarget = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE) || 'http://localhost:3001';

  return {
    server: {
      host: '0.0.0.0',
      allowedHosts: ['.kavia.ai'],
      port: 3000,
      strictPort: true,
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      watch: {
        usePolling: true
      },
      proxy: {
        '/api': {
          target: apiTarget,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  };
});
