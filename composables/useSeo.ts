/**
 * useSeo — 页面级 SEO 配置
 * 在各页面组件的 setup 中调用
 *
 * 用法：
 * useSeo({ title: '关于我们', description: '...' })
 */
export function usePageSeo(options: {
  title: string
  description: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'book' | 'profile'
  canonical?: string
}) {
  const siteName = '公司名称' // 替换为实际公司名

  useSeoMeta({
    title: () => `${options.title} - ${siteName}`,
    description: options.description,
    ogTitle: () => `${options.title} - ${siteName}`,
    ogDescription: options.description,
    ogImage: options.ogImage || '/images/og-default.jpg',
    ogType: options.ogType || 'website',
    ...(options.canonical && {
      link: [{ rel: 'canonical', href: options.canonical }],
    }),
  })
}
