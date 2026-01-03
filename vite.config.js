import { defineConfig } from 'vite'

export default defineConfig({
  // Use relative asset paths so the built site works when hosted under a subpath
  // like GitHub Pages: https://<user>.github.io/<repo>/
  base: './',
  server: {
    port: 5173,
    strictPort: true,
    allowedHosts: true
  }
})
