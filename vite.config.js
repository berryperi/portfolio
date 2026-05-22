import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: '/' → repo 이름이 seungwon.github.io 일 때
// base: '/portfolio/' → repo 이름이 portfolio 일 때
export default defineConfig({
  plugins: [react()],
  base: '/',
})
