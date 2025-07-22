import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '../assets/css/tailwind.css'
  ],
  vite: {
    plugins: [
      viteTsconfigPaths()
    ]
  }
})
