import { defineClientAppEnhance } from '@vuepress/client'
import v3ImgPreview from 'v3-img-preview'

export default defineClientAppEnhance(async ({ app }) => {
  app.use(v3ImgPreview)
})
