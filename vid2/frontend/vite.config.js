import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
     port: 5173, 
    proxy: {               //proxy is basically used for any perticular origin like here /api..whenever an url includes api it act likes it comes from this url which default port 3000
      '/api': 'http://localhost:3000'

    }
  }
})
