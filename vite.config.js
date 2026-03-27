import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/Y25_Final_Sem2_Project/',   // ⭐ VERY IMPORTANT
})