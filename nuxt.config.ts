// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',

  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxt/eslint',
  ],

  // SSG 静态生成模式 — 企业官网最佳选择
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  // CSS
  css: [
    '~/assets/css/tokens.css',
    '~/assets/css/global.css',
  ],

  // 全局 SEO 配置
  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      meta: [
        { name: 'description', content: '企业官网 - 描述信息（请替换）' },
        { name: 'keywords', content: '关键词1, 关键词2, 关键词3' },
      ],
    },
  },

  // 开发工具
  devtools: { enabled: true },

  // TypeScript
  typescript: {
    strict: true,
  },
})
