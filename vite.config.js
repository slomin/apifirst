import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/' for custom domain, or '/repo-name/' for github.io subdomain
  base: process.env.VITE_BASE_PATH || '/',
})