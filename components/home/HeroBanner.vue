<script setup lang="ts">
/**
 * HeroBanner — 首页主 Banner 区块
 * 企业官网第一屏，最关键的视觉区域
 */
withDefaults(defineProps<{
  title?: string
  subtitle?: string
  showCTA?: boolean
  background?: string
}>(), {
  title: '企业官网标语',
  subtitle: '这里是副标题描述，简洁有力地传达公司核心价值主张。请替换为实际文案。',
  showCTA: true,
  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
})
</script>

<template>
  <section
    class="relative min-h-[80vh] flex items-center overflow-hidden"
    :style="{ background }"
  >
    <!-- 背景装饰（可选增强） -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
    </div>

    <div class="container relative z-10 py-20">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
          {{ title }}
        </h1>
        <p class="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
          {{ subtitle }}
        </p>
        <div v-if="showCTA" class="flex flex-wrap gap-4">
          <NuxtLink to="/contact" class="btn-white btn-lg">
            立即咨询
            <span class="ml-1">→</span>
          </NuxtLink>
          <NuxtLink to="/about" class="btn px-8 py-4 text-lg rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors duration-300">
            了解更多
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
