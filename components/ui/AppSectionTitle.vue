<script setup lang="ts">
/**
 * AppSectionTitle — 区块标题组件
 * 官网大量复用：标题 + 副标题 + 可选标签
 */
withDefaults(defineProps<{
  tag?: string
  label?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  dark?: boolean
}>(), {
  tag: 'h2',
  label: undefined,
  subtitle: undefined,
  align: 'center',
  dark: false,
})
</script>

<template>
  <div class="section-header" :class="{ 'text-left': align === 'left' }">
    <!-- 可选小标签 -->
    <span
      v-if="label"
      class="inline-block text-sm font-medium text-[var(--color-primary)] mb-2"
    >
      {{ label }}
    </span>
    <!-- 标题 -->
    <component
      :is="tag"
      class="section-header__title text-balance"
      :class="dark ? 'text-white' : ''"
    >
      {{ title }}
    </component>
    <!-- 副标题 -->
    <p
      v-if="subtitle"
      class="section-header__subtitle"
      :class="dark ? '!text-gray-400' : ''"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
