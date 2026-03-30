<script setup lang="ts">
/**
 * CtaSection — 呼吁行动区块
 * 首页底部常见：引导用户联系/注册
 */
withDefaults(defineProps<{
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: string
}>(), {
  title: '准备好开始了吗？',
  subtitle: '立即联系我们，获取专属解决方案',
  buttonText: '立即咨询',
  buttonHref: '/contact',
})
</script>

<template>
  <section class="relative py-20 overflow-hidden bg-[var(--color-primary)]">
    <!-- 装饰 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
    </div>

    <div class="container relative z-10 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
        {{ title }}
      </h2>
      <p class="text-lg text-white/80 mb-8 max-w-xl mx-auto">
        {{ subtitle }}
      </p>
      <NuxtLink :to="buttonHref" class="btn-white btn-lg">
        {{ buttonText }}
        <span class="ml-1">→</span>
      </NuxtLink>
    </div>
  </section>
</template>
