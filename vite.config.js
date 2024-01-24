import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://leopoldogurgel.github.io/pseudocoders/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'https://pseudocoders-server-5222d68eaaf3.herokuapp.com',
        changeOrigin: true,
        secure: false,
      },
    },
    build: {
      rollupOptions: {
        external: ['bootstrap/dist/css/bootstrap.css'], 
      },
    },
  }
})
