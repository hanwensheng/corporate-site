<script setup lang="ts">
/**
 * FeatureGrid — 核心优势/特性展示
 * 图标 + 标题 + 描述的网格布局
 */
interface Feature {
  icon: string
  title: string
  description: string
}

withDefaults(defineProps<{
  label?: string
  title?: string
  subtitle?: string
  features?: Feature[]
}>(), {
  label: '核心优势',
  title: '为什么选择我们',
  subtitle: '我们致力于为客户提供最优质的产品和服务',
  features: () => [
    { icon: '🚀', title: '技术领先', description: '拥有行业领先的技术实力，持续创新驱动发展' },
    { icon: '🛡️', title: '安全可靠', description: '严格的安全标准和质量管控体系，保障客户利益' },
    { icon: '⚡', title: '高效服务', description: '快速响应客户需求，提供专业高效的解决方案' },
    { icon: '🌐', title: '全球布局', description: '业务覆盖多个国家和地区，服务全球客户' },
    { icon: '💡', title: '创新驱动', description: '持续投入研发创新，引领行业发展趋势' },
    { icon: '🤝', title: '合作共赢', description: '与合作伙伴建立长期稳定的战略合作关系' },
  ],
})
</script>

<template>
  <LayoutSectionWrap gray>
    <UiAppSectionTitle
      :label="label"
      :title="title"
      :subtitle="subtitle"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="card-hover text-center p-8"
      >
        <div class="text-4xl mb-4">{{ feature.icon }}</div>
        <h3 class="text-lg font-semibold mb-2 text-[var(--color-text)]">
          {{ feature.title }}
        </h3>
        <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {{ feature.description }}
        </p>
      </div>
    </div>
  </LayoutSectionWrap>
</template>
