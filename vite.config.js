import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"./",
  build:{
    outDir:"dist",
    emptyOutDir:true,
  },
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src")
    }
  }
})
