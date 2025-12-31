import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/js-portfolio/',
  
  build: {
    target: 'esnext',
    minify: 'esbuild', 
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'icons': ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
})
