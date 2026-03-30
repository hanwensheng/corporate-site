<script setup lang="ts">
/**
 * AppHeader — 顶部导航栏
 * - 桌面端：水平导航
 * - 移动端：汉堡菜单
 */
const mobileMenuOpen = ref(false)

// 导航菜单配置（根据实际网站修改）
const navItems = [
  { label: '首页', href: '/' },
  { label: '关于我们', href: '/about' },
  { label: '产品服务', href: '/products' },
  { label: '新闻动态', href: '/news' },
  { label: '联系我们', href: '/contact' },
]

// 滚动时添加背景
const scrolled = ref(false)
const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// 点击菜单项关闭移动端菜单
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm'
        : 'bg-transparent',
    ]"
  >
    <div class="container flex items-center justify-between h-18">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
        <div class="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-sm">G</span>
        </div>
        <span class="text-lg font-bold text-[var(--color-text)]">
          公司名称
        </span>
      </NuxtLink>

      <!-- 桌面端导航 -->
      <nav class="hidden lg:flex items-center gap-8">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="nav-link"
          active-class="!text-[var(--color-primary)]"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- 桌面端 CTA -->
      <div class="hidden lg:flex items-center gap-4">
        <NuxtLink to="/contact" class="btn-primary btn-sm">
          立即咨询
        </NuxtLink>
      </div>

      <!-- 移动端汉堡按钮 -->
      <button
        class="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
        :class="{ 'open': mobileMenuOpen }"
        aria-label="菜单"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <span
          class="block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300"
          :class="mobileMenuOpen ? 'rotate-45 translate-y-2' : ''"
        />
        <span
          class="block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300"
          :class="mobileMenuOpen ? 'opacity-0' : ''"
        />
        <span
          class="block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300"
          :class="mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''"
        />
      </button>
    </div>

    <!-- 移动端菜单 -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden bg-white border-t border-[var(--color-border-light)] shadow-lg"
      >
        <nav class="container py-4 flex flex-col gap-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.href"
            :to="item.href"
            class="nav-link px-4 py-3 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors"
            active-class="!text-[var(--color-primary)] bg-[var(--color-primary-light)]"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </NuxtLink>
          <div class="mt-4 pt-4 border-t border-[var(--color-border-light)] px-4">
            <NuxtLink to="/contact" class="btn-primary w-full text-center" @click="closeMobileMenu">
              立即咨询
            </NuxtLink>
          </div>
        </nav>
      </div>
    </Transition>
  </header>

  <!-- 占位，防止内容被 fixed header 遮挡 -->
  <div class="h-18" />
</template>
