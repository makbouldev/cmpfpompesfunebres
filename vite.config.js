import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_PUBLIC_BASE_PATH || '/',
  plugins: [
    react(),
    // Keep build stable for Vercel; prerender plugin was breaking ESM builds.
  ],
})
