<script setup lang="ts">
useSeoMeta({
  title: '新闻动态 - 公司名称',
  description: '了解公司的最新动态、行业资讯和深度洞察。',
})
</script>

<template>
  <div>
    <LayoutAppHeader />

    <!-- 页面 Banner -->
    <section class="bg-[var(--color-bg-gray)] py-16">
      <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">新闻动态</h1>
        <p class="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          了解我们的最新动态和行业洞察
        </p>
      </div>
    </section>

    <!-- 新闻列表 -->
    <LayoutSectionWrap>
      <p class="text-center text-[var(--color-text-secondary)]">
        新闻列表内容待添加...
      </p>
    </LayoutSectionWrap>

    <LayoutAppFooter />
  </div>
</template>
