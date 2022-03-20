import { createApp } from 'vue'
import Dev from './serve.vue'
import VImagesPreview from '@/entry.esm'
const app = createApp(Dev)
app.mount('#app')
app.use(VImagesPreview, {})
app.config.globalProperties.$imagesPreview = VImagesPreview
