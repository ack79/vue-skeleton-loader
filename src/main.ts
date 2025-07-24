import { createApp } from 'vue'
import App from './App.vue'
import SkeletonLoader from './index'

const app = createApp(App)
app.use(SkeletonLoader)
app.mount('#app') 