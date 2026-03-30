<script setup lang="ts">
useSeoMeta({
  title: '联系我们 - 公司名称',
  description: '联系方式、在线留言，我们期待与您取得联系。',
})
</script>

<template>
  <div>
    <LayoutAppHeader />

    <!-- 页面 Banner -->
    <section class="bg-[var(--color-bg-gray)] py-16">
      <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
        <p class="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          我们期待与您取得联系
        </p>
      </div>
    </section>

    <!-- 联系信息 -->
    <LayoutSectionWrap>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- 联系方式 -->
        <div>
          <h2 class="text-2xl font-bold mb-8">联系方式</h2>
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-[var(--color-primary-light)] flex items-center justify-center shrink-0 text-[var(--color-primary)]">
                📍
              </div>
              <div>
                <h3 class="font-semibold mb-1">公司地址</h3>
                <p class="text-sm text-[var(--color-text-secondary)]">请替换为公司实际地址</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-[var(--color-primary-light)] flex items-center justify-center shrink-0 text-[var(--color-primary)]">
                📞
              </div>
              <div>
                <h3 class="font-semibold mb-1">联系电话</h3>
                <p class="text-sm text-[var(--color-text-secondary)]">400-XXX-XXXX</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-[var(--color-primary-light)] flex items-center justify-center shrink-0 text-[var(--color-primary)]">
                ✉️
              </div>
              <div>
                <h3 class="font-semibold mb-1">电子邮箱</h3>
                <p class="text-sm text-[var(--color-text-secondary)]">contact@example.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 留言表单 -->
        <div>
          <h2 class="text-2xl font-bold mb-8">在线留言</h2>
          <form class="space-y-4" @submit.prevent="() => {}">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="您的姓名"
                class="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-sm"
              >
              <input
                type="tel"
                placeholder="联系电话"
                class="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-sm"
              >
            </div>
            <input
              type="email"
              placeholder="电子邮箱"
              class="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-sm"
            >
            <textarea
              rows="5"
              placeholder="请输入您的留言内容..."
              class="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-sm resize-none"
            />
            <button type="submit" class="btn-primary w-full">
              提交留言
            </button>
          </form>
        </div>
      </div>
    </LayoutSectionWrap>

    <LayoutAppFooter />
  </div>
</template>
