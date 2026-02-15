import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MCP",
  description: "Aprende sobre el Model Context Protocol",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '¿Quieres apoyar a tutorialMCP? Invítame a un café ☕', link: 'https://www.buymeacoffee.com/jamesnoitt' }
    ],

    sidebar: [
      {
        text: 'Introducción',
        items: [
          { text: '¿Qué es MCP?', link: '/index' },
          { text: 'Arquitectura', link: '/Teoria/Arquitectura' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
