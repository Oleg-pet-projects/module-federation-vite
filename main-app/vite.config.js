import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'main-app',
      remotes: {
        app1: 'http://localhost:7070/assets/remoteEntry.js',
        app2: 'http://localhost:6060/assets/remoteEntry.js',
      },
      shared: ['vue']
    })
  ],
  build: {
    target: 'esnext', // to support shared modules
  },
})
