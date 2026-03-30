<script setup lang="ts">
/**
 * StatsSection — 数据统计展示
 * 企业官网常见：客户数、项目数、年限等
 */
interface Stat {
  value: string
  label: string
}

withDefaults(defineProps<{
  stats?: Stat[]
}>(), {
  stats: () => [
    { value: '500+', label: '服务客户' },
    { value: '1000+', label: '成功项目' },
    { value: '15+', label: '年行业经验' },
    { value: '50+', label: '覆盖城市' },
  ],
})
</script>

<template>
  <LayoutSectionWrap dark>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div v-for="(stat, index) in stats" :key="index">
        <div class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
          {{ stat.value }}
        </div>
        <div class="text-sm md:text-base text-gray-400">
          {{ stat.label }}
        </div>
      </div>
    </div>
  </LayoutSectionWrap>
</template>
