<script setup lang="ts">
/**
 * AppFooter — 页脚
 * - 多列布局（桌面端）
 * - 堆叠布局（移动端）
 */
const currentYear = new Date().getFullYear()

// 根据实际网站修改
const footerLinks = {
  products: [
    { label: '产品名称 A', href: '/products' },
    { label: '产品名称 B', href: '/products' },
    { label: '产品名称 C', href: '/products' },
  ],
  company: [
    { label: '关于我们', href: '/about' },
    { label: '新闻动态', href: '/news' },
    { label: '加入我们', href: '/contact' },
    { label: '联系我们', href: '/contact' },
  ],
  support: [
    { label: '帮助中心', href: '/contact' },
    { label: '隐私政策', href: '/about' },
    { label: '服务条款', href: '/about' },
  ],
}

const socialLinks = [
  { label: '微信', icon: '💬' },
  { label: '微博', icon: '📱' },
  { label: 'LinkedIn', icon: '🔗' },
]
</script>

<template>
  <footer class="bg-[var(--color-bg-dark)] text-gray-400">
    <!-- 主要内容 -->
    <div class="container py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <!-- 公司信息 -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">G</span>
            </div>
            <span class="text-lg font-bold text-white">公司名称</span>
          </div>
          <p class="text-sm leading-relaxed mb-6 max-w-sm">
            这里是公司简介描述文字。请根据实际公司信息替换。
            提供专业的产品和服务，致力于为客户创造价值。
          </p>
          <div class="flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              href="#"
              class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors duration-200"
              :aria-label="social.label"
            >
              {{ social.icon }}
            </a>
          </div>
        </div>

        <!-- 产品 -->
        <div>
          <h4 class="text-white font-semibold mb-4">产品服务</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.products" :key="link.href">
              <NuxtLink :to="link.href" class="text-sm hover:text-white transition-colors duration-200">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 公司 -->
        <div>
          <h4 class="text-white font-semibold mb-4">关于公司</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.company" :key="link.href">
              <NuxtLink :to="link.href" class="text-sm hover:text-white transition-colors duration-200">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 支持 -->
        <div>
          <h4 class="text-white font-semibold mb-4">支持</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.support" :key="link.href">
              <NuxtLink :to="link.href" class="text-sm hover:text-white transition-colors duration-200">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 底部版权 -->
    <div class="border-t border-white/10">
      <div class="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>&copy; {{ currentYear }} 公司名称. 保留所有权利.</p>
        <p>ICP备案号：京ICP备XXXXXXXX号</p>
      </div>
    </div>
  </footer>
</template>
