import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SkeletonLoader from '../components/SkeletonLoader.vue'

describe('SkeletonLoader', () => {
  it('renders properly with default props', () => {
    const wrapper = mount(SkeletonLoader)
    expect(wrapper.classes()).toContain('skeleton-loader')
    expect(wrapper.classes()).toContain('skeleton-loader--text')
    expect(wrapper.classes()).toContain('skeleton-loader--animated')
  })

  it('applies custom width and height', () => {
    const wrapper = mount(SkeletonLoader, {
      props: {
        width: '200px',
        height: '100px'
      }
    })
    expect(wrapper.attributes('style')).toContain('width: 200px')
    expect(wrapper.attributes('style')).toContain('height: 100px')
  })

  it('shows content when not loading', () => {
    const wrapper = mount(SkeletonLoader, {
      props: {
        loading: false,
        content: 'Test Content'
      }
    })
    expect(wrapper.text()).toContain('Test Content')
  })

  it('applies different types correctly', () => {
    const types = ['text', 'circle', 'rect', 'heading']
    types.forEach(type => {
      const wrapper = mount(SkeletonLoader, {
        props: { type }
      })
      expect(wrapper.classes()).toContain(`skeleton-loader--${type}`)
    })
  })

  it('disables animation when animated is false', () => {
    const wrapper = mount(SkeletonLoader, {
      props: {
        animated: false
      }
    })
    expect(wrapper.classes()).not.toContain('skeleton-loader--animated')
  })

  it('applies custom background and highlight colors', () => {
    const wrapper = mount(SkeletonLoader, {
      props: {
        backgroundColor: '#ff0000',
        highlightColor: '#00ff00'
      }
    })
    const style = wrapper.attributes('style')
    expect(style).toContain('--skeleton-background-color: #ff0000')
    expect(style).toContain('--skeleton-highlight-color: #00ff00')
  })
}) 