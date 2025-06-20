
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(
  {
    plugins: [react()],
    base: '/',
    css: {
      devSourcemap: false
    },
    server: {
      host: true,
      port: 5173,
      strictPort: true,
      allowedHosts: 'all'
    }
})
