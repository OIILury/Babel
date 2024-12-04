import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Babel/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: '/index.html',
        onePiece: '/onePiece/onePiece.html'
      }
    }
  }
}) 