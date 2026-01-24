import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/vitaliy-smyrnov/" : "/",
  logLevel: 'error', // Suppress warnings, only show errors
  server: {
    open: true, // Automatically open the browser when the dev server starts
    port: 5173, // Default Vite port (optional, can be changed)
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
  ]
}));