<template>
  <div
    :class="[
      'skeleton-loader',
      `skeleton-loader--${type}`,
      { 'skeleton-loader--animated': animated }
    ]"
    :style="computedStyles"
  >
    <slot v-if="!loading">
      {{ content }}
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'

type SkeletonType = 'text' | 'circle' | 'rect' | 'heading'

export default defineComponent({
  name: 'SkeletonLoader',
  props: {
    type: {
      type: String as PropType<SkeletonType>,
      default: 'text',
      validator: (value: string) => ['text', 'circle', 'rect', 'heading'].includes(value)
    },
    width: {
      type: [String, Number],
      default: '100%'
    },
    height: {
      type: [String, Number],
      default: null
    },
    animated: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: '#E3E5E8'
    },
    highlightColor: {
      type: String,
      default: '#F0F2F5'
    },
    animationType: {
      type: String,
      default: 'shimmer',
      validator: (value: string) => ['shimmer', 'pulse', 'wave'].includes(value)
    }
  },
  setup(props) {
    const computedStyles = computed(() => {
      const styles: Record<string, string> = {
        '--skeleton-background-color': props.backgroundColor,
        '--skeleton-highlight-color': props.highlightColor
      }

      if (props.width) {
        styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width
      }

      if (props.height) {
        styles.height = typeof props.height === 'number' ? `${props.height}px` : props.height
      }

      return styles
    })

    return {
      computedStyles
    }
  }
})
</script>

<style>
.skeleton-loader {
  display: inline-block;
  position: relative;
  overflow: hidden;
  background-color: var(--skeleton-background-color);
  border-radius: 4px;
  animation: var(--skeleton-animation, none);
}

.skeleton-loader--text {
  height: 1em;
  width: 100%;
}

.skeleton-loader--heading {
  height: 1.6em;
  width: 100%;
}

.skeleton-loader--circle {
  border-radius: 50%;
  height: 48px;
  width: 48px;
}

.skeleton-loader--rect {
  height: 100px;
}

.skeleton-loader--animated::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    var(--skeleton-highlight-color),
    transparent
  );
  animation: shimmer 1.5s ease-in-out infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
}

@keyframes wave {
  0% { transform: translateX(-100%) }
  50% { transform: translateX(100%) }
  100% { transform: translateX(100%) }
}
</style> 