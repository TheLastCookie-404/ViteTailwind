import { resolve } from 'path'
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'src/pages/home.html'),
        main: resolve(__dirname, 'src/assets/main.css'),
      },
    },
  },
})