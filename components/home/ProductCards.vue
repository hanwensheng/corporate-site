<script setup lang="ts">
/**
 * ProductCards — 产品/服务卡片展示
 */
interface Product {
  title: string
  description: string
  image?: string
  href: string
}

withDefaults(defineProps<{
  label?: string
  title?: string
  subtitle?: string
  products?: Product[]
}>(), {
  label: '产品服务',
  title: '我们的产品与服务',
  subtitle: '全方位的产品矩阵，满足您的多样化需求',
  products: () => [
    { title: '产品 A', description: '产品 A 的简介描述文字，突出核心卖点', href: '/products' },
    { title: '产品 B', description: '产品 B 的简介描述文字，突出核心卖点', href: '/products' },
    { title: '产品 C', description: '产品 C 的简介描述文字，突出核心卖点', href: '/products' },
  ],
})
</script>

<template>
  <LayoutSectionWrap>
    <UiAppSectionTitle
      :label="label"
      :title="title"
      :subtitle="subtitle"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <NuxtLink
        v-for="(product, index) in products"
        :key="index"
        :to="product.href"
        class="group card-hover overflow-hidden"
      >
        <!-- 图片占位 -->
        <div class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden">
          <div class="w-full h-full bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] font-semibold opacity-50 group-hover:opacity-70 transition-opacity">
            产品图片
          </div>
        </div>
        <h3 class="text-lg font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-200">
          {{ product.title }}
          <span class="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
        </h3>
        <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {{ product.description }}
        </p>
      </NuxtLink>
    </div>

    <!-- 查看全部 -->
    <div class="text-center mt-12">
      <NuxtLink to="/products" class="btn-secondary">
        查看全部产品
      </NuxtLink>
    </div>
  </LayoutSectionWrap>
</template>
