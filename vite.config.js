import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config — React plugin, dev server port, base-relative build output.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
