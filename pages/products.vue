<script setup lang="ts">
useSeoMeta({
  title: '产品服务 - 公司名称',
  description: '了解公司的全系列产品与服务解决方案。',
})
</script>

<template>
  <div>
    <LayoutAppHeader />

    <!-- 页面 Banner -->
    <section class="bg-[var(--color-bg-gray)] py-16">
      <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">产品与服务</h1>
        <p class="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          全方位的产品矩阵，满足您的多样化需求
        </p>
      </div>
    </section>

    <!-- 产品列表 -->
    <LayoutSectionWrap>
      <p class="text-center text-[var(--color-text-secondary)]">
        产品列表内容待添加...
      </p>
    </LayoutSectionWrap>

    <LayoutAppFooter />
  </div>
</template>
