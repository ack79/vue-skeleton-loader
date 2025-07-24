import { App } from 'vue'
import SkeletonLoader from './components/SkeletonLoader.vue'

export { SkeletonLoader }

export default {
  install: (app: App): void => {
    app.component('SkeletonLoader', SkeletonLoader)
  }
} 