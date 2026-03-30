<script setup lang="ts">
/**
 * NewsList — 新闻/动态列表
 */
interface NewsItem {
  title: string
  date: string
  summary: string
  href: string
  tag?: string
}

withDefaults(defineProps<{
  label?: string
  title?: string
  subtitle?: string
  news?: NewsItem[]
}>(), {
  label: '新闻动态',
  title: '最新资讯',
  subtitle: '了解我们的最新动态和行业洞察',
  news: () => [
    {
      title: '公司荣获行业年度创新奖',
      date: '2026-03-20',
      summary: '在2026年度行业峰会上，公司凭借卓越的技术创新能力荣获年度创新大奖...',
      href: '/news',
      tag: '公司新闻',
    },
    {
      title: '新产品发布会即将举行',
      date: '2026-03-15',
      summary: '我们将于近期举行新一代产品发布会，届时将展示多项突破性技术创新...',
      href: '/news',
      tag: '产品动态',
    },
    {
      title: '与知名企业达成战略合作',
      date: '2026-03-10',
      summary: '公司与行业领先企业签署战略合作协议，双方将在多个领域展开深度合作...',
      href: '/news',
      tag: '公司新闻',
    },
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
      <NuxtLink
        v-for="(item, index) in news"
        :key="index"
        :to="item.href"
        class="group bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)] hover:shadow-md transition-all duration-300 hover:-translate-y-1"
      >
        <!-- 标签 + 日期 -->
        <div class="flex items-center gap-3 mb-4">
          <span
            v-if="item.tag"
            class="inline-block px-3 py-1 text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-full"
          >
            {{ item.tag }}
          </span>
          <span class="text-xs text-[var(--color-text-light)]">
            {{ item.date }}
          </span>
        </div>
        <!-- 标题 -->
        <h3 class="text-lg font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-200 line-clamp-2">
          {{ item.title }}
        </h3>
        <!-- 摘要 -->
        <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">
          {{ item.summary }}
        </p>
        <!-- 阅读更多 -->
        <div class="mt-4 text-sm font-medium text-[var(--color-primary)] group-hover:underline">
          阅读更多 →
        </div>
      </NuxtLink>
    </div>

    <div class="text-center mt-12">
      <NuxtLink to="/news" class="btn-secondary">
        查看全部新闻
      </NuxtLink>
    </div>
  </LayoutSectionWrap>
</template>
