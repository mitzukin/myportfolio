import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fonts from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
  base:"/myportfolio/",
  plugins: [react()],
  
})


