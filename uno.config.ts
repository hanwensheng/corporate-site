import {
  defineConfig,
  presetUno,
  presetAttributify,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],

  transformers: [
    transformerDirectives(),
  ],

  shortcuts: {
    // 官网高频组合 — 直接当原子类使用
    'container': 'max-w-1200px mx-auto px-4',
    'section': 'py-20 md:py-24',
    'section-title': 'text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4',
    'section-subtitle': 'text-gray-500 text-center max-w-2xl mx-auto mb-12 text-base md:text-lg',

    // 按钮
    'btn': 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-out cursor-pointer select-none',
    'btn-primary': 'btn px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] shadow-sm hover:shadow-md',
    'btn-secondary': 'btn px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)] hover:text-white',
    'btn-white': 'btn px-6 py-3 bg-white text-[var(--color-primary)] rounded-lg hover:bg-gray-50 shadow-sm',
    'btn-sm': 'btn px-4 py-2 text-sm rounded-md',
    'btn-lg': 'btn px-8 py-4 text-lg rounded-lg',

    // 卡片
    'card': 'bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)] hover:shadow-md transition-shadow duration-300',
    'card-hover': 'card hover:-translate-y-1 hover:shadow-lg',

    // 导航
    'nav-link': 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium',
  },

  theme: {
    colors: {
      primary: {
        DEFAULT: 'var(--color-primary)',
        hover: 'var(--color-primary-hover)',
        light: 'var(--color-primary-light)',
      },
      secondary: {
        DEFAULT: 'var(--color-secondary)',
        hover: 'var(--color-secondary-hover)',
      },
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1440px',
    },
  },
})
