import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/bookings': 'http://localhost:5000',
      '/users': 'http://localhost:5000',
      '/events': 'http://localhost:5000',
      '/dashboard': 'http://localhost:5000',
      '/health': 'http://localhost:5000',
    },
  },
})
