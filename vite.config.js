import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change 'protorobo' to your GitHub repo name when deploying
export default defineConfig({
  plugins: [react()],
  base: '/protorobo/',
})
