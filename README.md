# 企业官网重构项目

> Vue3 + Nuxt3 + UnoCSS + Pinia

## 技术栈

| 技术 | 用途 |
|------|------|
| Nuxt 4 | SSG 框架（SEO 优化） |
| Vue 3 | 前端框架 |
| UnoCSS | 原子化 CSS（Tailwind 兼容语法） |
| Pinia | 状态管理 |
| TypeScript | 类型安全 |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本（SSG 静态生成）
npm run generate

# 预览构建结果
npm run preview
```

## 项目结构

```
├── assets/
│   ├── css/
│   │   ├── tokens.css      # 设计 Token（CSS 变量，需从线上逆向填入）
│   │   └── global.css      # 全局基础样式
│   └── images/             # 图片资源
├── components/
│   ├── layout/             # 布局组件
│   │   ├── AppHeader.vue   # 导航栏（响应式）
│   │   ├── AppFooter.vue   # 页脚
│   │   └── SectionWrap.vue # 通用区块容器
│   ├── ui/                 # 通用 UI 组件
│   │   └── AppSectionTitle.vue  # 区块标题
│   ├── home/               # 首页区块组件
│   │   ├── HeroBanner.vue  # 主 Banner
│   │   ├── FeatureGrid.vue # 核心优势
│   │   ├── ProductCards.vue# 产品卡片
│   │   ├── StatsSection.vue# 数据统计
│   │   ├── NewsList.vue    # 新闻列表
│   │   └── CtaSection.vue  # CTA 行动号召
│   └── business/           # 业务组件（待添加）
├── composables/            # 可复用组合函数
│   └── useSeo.ts          # SEO 工具
├── layouts/                # 页面布局
│   └── default.vue
├── mock/                   # Mock 数据（前后端对接前使用）
├── pages/                  # 页面路由
│   ├── index.vue           # 首页
│   ├── about.vue           # 关于我们
│   ├── products.vue        # 产品服务
│   ├── news.vue            # 新闻动态
│   └── contact.vue         # 联系我们
├── plugins/                # 插件
├── public/                 # 静态资源
│   ├── images/
│   └── fonts/
├── server/                 # BFF 层（对接 Java 后端）
│   └── api/
├── stores/                 # Pinia 状态
├── utils/                  # 工具函数
├── nuxt.config.ts          # Nuxt 配置
├── uno.config.ts           # UnoCSS 配置
└── tsconfig.json
```

## 开发指南

### 1. 填入设计 Token

从线上网站 F12 提取样式，填入 `assets/css/tokens.css` 中的 CSS 变量：
- 品牌色、文字色、背景色
- 字体、字号层级
- 间距节奏

### 2. 添加页面

在 `pages/` 目录下创建 `.vue` 文件，Nuxt 自动生成路由。

### 3. 使用组件

```vue
<!-- 区块容器 -->
<SectionWrap gray>
  <AppSectionTitle title="标题" subtitle="副标题" />
  <!-- 内容 -->
</SectionWrap>
```

### 4. UnoCSS Shortcuts

在 `uno.config.ts` 中定义了快捷类，可以直接使用：
- `btn-primary` / `btn-secondary` / `btn-white`
- `card` / `card-hover`
- `container` / `section`
- `section-title` / `section-subtitle`

### 5. 对接后端

在 `server/api/` 下创建 BFF 接口，代理 Java 后端 API。
开发阶段可在 `mock/` 中创建 JSON 数据文件。
