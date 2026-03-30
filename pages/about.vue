<script setup lang="ts">
useSeoMeta({
  title: '关于我们 - 公司名称',
  description: '了解公司的发展历程、企业文化与核心团队。',
})
</script>

<template>
  <div>
    <LayoutAppHeader />

    <!-- 页面 Banner -->
    <section class="bg-[var(--color-bg-gray)] py-16">
      <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
        <p class="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          了解公司的发展历程、企业文化与核心团队
        </p>
      </div>
    </section>

    <!-- 公司介绍 -->
    <LayoutSectionWrap>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <UiAppSectionTitle align="left" title="公司简介" subtitle="" />
          <p class="text-[var(--color-text-secondary)] leading-relaxed mb-6">
            这里是公司简介的占位文字。请根据实际内容替换。
            我们是一家专注于 XXX 领域的企业，致力于为客户提供专业的产品和服务。
          </p>
          <p class="text-[var(--color-text-secondary)] leading-relaxed">
            自成立以来，我们始终坚持创新驱动、品质为先的理念，赢得了广大客户的信赖与支持。
          </p>
        </div>
        <div class="aspect-video bg-[var(--color-bg-gray)] rounded-xl flex items-center justify-center text-[var(--color-text-light)]">
          公司图片占位
        </div>
      </div>
    </LayoutSectionWrap>

    <!-- 更多内容区块... -->
    <LayoutSectionWrap gray>
      <div class="text-center text-[var(--color-text-secondary)]">
        <p>更多内容待添加：发展历程、企业文化、核心团队...</p>
      </div>
    </LayoutSectionWrap>

    <LayoutAppFooter />
  </div>
</template>
