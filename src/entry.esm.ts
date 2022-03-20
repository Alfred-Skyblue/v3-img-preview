import { App, createApp, Plugin } from 'vue'
import { loadIcon } from './iconfont/iconfont'
// rollup 打包静态js需要es6模块化
loadIcon()

import component from '@/v3-img-preview.vue'
import { IV3ImgPreviewProps } from '@/types'

// Define typescript interfaces for installable component
type InstallableComponent = typeof component & {
  install: Exclude<Plugin['install'], undefined>
}

let v3ImgPreviewConfig: IV3ImgPreviewProps = {} as IV3ImgPreviewProps
const id = 'v3-img-preview-container-id'
let v3ImgPreviewApp: App = {} as App

export function v3ImgPreviewFn(options: string): App
export function v3ImgPreviewFn(options: IV3ImgPreviewProps): App
export function v3ImgPreviewFn(options: any) {
  if (v3ImgPreviewApp._instance) return false
  // If options is a string, it's a global option
  if (typeof options === 'string') {
    options = {
      url: options
    }
  }
  options = { ...v3ImgPreviewConfig, ...options }
  let dom = document.getElementById(id)
  if (!dom) {
    dom = document.createElement('div')
    dom.id = id
    document.body.appendChild(dom)
  }
  v3ImgPreviewApp = createApp(component, {
    ...options,
    on_unmount_v3_ima_preview_app: () => v3ImgPreviewApp.unmount()
  })
  v3ImgPreviewApp.mount(dom)
  return v3ImgPreviewApp
}

export default /*#__PURE__*/ ((): InstallableComponent => {
  // Assign InstallableComponent type
  const installable = component as unknown as InstallableComponent
  // Attach install function executed by Vue.use()
  installable.install = (app: App, options) => {
    v3ImgPreviewConfig = options
    app.config.globalProperties.$v3ImgPreviewFn = v3ImgPreviewFn
  }
  return installable
})()

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
