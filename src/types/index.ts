// @ts-ignore
import { App } from 'vue'
export interface IV3ImgPreviewProps {
  url?: string
  keyboard?: boolean
  images?: string[]
  escClose?: boolean
  showCloseBtn?: boolean
  showToolbar?: boolean
  showArrowBtn?: boolean
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $v3ImgPreviewFn: (options: IV3ImgPreviewProps | string) => App
  }
}
