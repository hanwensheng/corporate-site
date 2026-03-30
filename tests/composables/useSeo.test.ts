import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

/**
 * 基础 Vitest 配置验证测试
 * 后续可扩展为 composable / 组件测试
 */
describe('Vitest 配置', () => {
  it('基本断言可用', () => {
    expect(1 + 1).toBe(2)
  })

  it('可渲染 Vue 组件', () => {
    const wrapper = mount({
      template: '<div class="test">Hello</div>',
    })
    expect(wrapper.find('.test').text()).toBe('Hello')
  })
})
