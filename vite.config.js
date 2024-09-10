import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
//Para utilizar GitHub para hostear un proyecto
export default defineConfig({
  plugins: [react()],
  base: "https://njperez1994.github.io/react-basics-curse",
})
