// @ts-ignore
import { App } from 'vue'
export interface IV3ImgPreviewProps {
  // 图片地址
  url?: string
  // 键盘快捷键
  keyboard?: boolean
  // 图片列表
  images?: string[]
  // esc关闭
  escClose?: boolean
  // 显示关闭按钮
  showCloseBtn?: boolean
  // 显示工具栏
  showToolbar?: boolean
  // 显示左右箭头
  showArrowBtn?: boolean
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $v3ImgPreviewFn: (options: IV3ImgPreviewProps | string | string[]) => App
  }
}
