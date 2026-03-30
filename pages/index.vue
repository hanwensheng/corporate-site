<script setup lang="ts">
/**
 * 首页
 * 组合各区块组件，构成完整首页
 */
useSeoMeta({
  title: '公司名称 - 首页',
  description: '公司名称官网 — 专业提供XXX产品与服务，致力于为客户创造价值。',
  ogTitle: '公司名称',
  ogDescription: '公司名称官网 — 专业提供XXX产品与服务',
  ogType: 'website',
})
</script>

<template>
  <div>
    <LayoutAppHeader />

    <!-- Hero Banner -->
    <HomeHeroBanner />

    <!-- 核心优势 -->
    <HomeFeatureGrid />

    <!-- 产品服务 -->
    <HomeProductCards />

    <!-- 数据统计 -->
    <HomeStatsSection />

    <!-- 新闻动态 -->
    <HomeNewsList />

    <!-- CTA -->
    <HomeCtaSection />

    <LayoutAppFooter />
  </div>
</template>
