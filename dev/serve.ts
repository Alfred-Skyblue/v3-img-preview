import { createApp } from 'vue'
import Dev from './serve.vue'
import V3ImgPreview from '@/entry.esm'
const app = createApp(Dev)
app.mount('#app')
app.use(V3ImgPreview, {})
app.config.globalProperties.$imagesPreview = V3ImgPreview
