<script setup lang="ts">
/**
 * SectionWrap — 通用区块容器
 * 统一 padding/max-width，官网高频复用
 */
withDefaults(defineProps<{
  tag?: string
  gray?: boolean
  dark?: boolean
  noPadding?: boolean
}>(), {
  tag: 'section',
  gray: false,
  dark: false,
  noPadding: false,
})
</script>

<template>
  <component
    :is="tag"
    class="relative"
    :class="[
      !noPadding && 'section',
      gray && 'bg-[var(--color-bg-gray)]',
      dark && 'section--dark',
    ]"
  >
    <div class="container">
      <slot />
    </div>
  </component>
</template>
