---
sidebarDepth: 4
---

### 介绍

<a target="_blank" href="https://github.com/Alfred-Skyblue" style="margin-right: 5px;">![github](https://img.shields.io/badge/Author-Alfred_Skyblue-blue.svg)</a>
<a target="_blank" href="https://github.com/Alfred-Skyblue/v3-img-preview/blob/master/LICENSE" style="margin-right: 5px;">![MIT](https://img.shields.io/badge/License-MIT-green.svg)</a>
<a style="margin-right: 5px;">![vue2.x](https://img.shields.io/badge/VUE-3.0-green.svg)</a>
<a target="_blank" href="https://github.com/Alfred-Skyblue/v3-img-preview" style="margin-right: 5px;">![GitHub Repo stars](https://img.shields.io/github/stars/Alfred-Skyblue/v3-img-preview?style=social)
</a>

::: tip 介绍
本组件是一个基于 `vue3` 编写的图片预览插件，支持单图和多图预览，支持图片旋转，缩放，移动等功能
:::

### 安装

```shell
npm install v3-img-preview --save
# or
yarn add v3-img-preview
```

### 使用

1. 在 `main.js` 中引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import v3ImgPreview from 'v3-img-preview'
const app = createApp(App)
app.mount('#app')
app.use(v3ImgPreview, {
  /* 全局配置 */
})
```

2. 在组件中使用

> 组件支持两种调用方式：经过 `app.use` 注册后，全局属性上会绑定 `$v3ImgPreviewFn` 方法，可以直接调用，您也可以通过直接导入 `v3ImgPreviewFn` 方法使用，使用方式如下：

```vue
<template>
  <div class="box">
    <button @click="handleClick">导出方法调用</button>
    <button @click="handleImgPreview">实例调用</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { v3ImgPreviewFn } from 'v3-img-preview'
export default defineComponent({
  name: 'ServeDev',
  components: {},
  setup() {
    const instance = getCurrentInstance()
    const handleClick = () => {
      // 导出方法调用
      v3ImgPreviewFn(
        'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF'
      )
    }
    // or
    const handleImgPreview = () => {
      // 全局方法调用
      instance.proxy.$v3ImgPreviewFn(
        'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF'
      )
    }
    return { handleClick, handleImgPreview }
  }
})
</script>
```

### 本地图片预览

> 注：本地图片不能使用相对路径方式传递属性只能通过 `require` 方式引入图片进行预览，若您的图片放在项目 `public` 目录下，则可以通过`/images/xxx.png` 的方式访问

> 原因：在 `webpack` or `vite` 中会将图片图片来当做模块来用，因为是动态加载的，所以 `url-loader` 将无法解析图片地址，然后 `npm run serve` 之后导致路径没有被加工，故而无法使用相对路径引入经过打包构建过的图片资源

```js
import { v3ImgPreviewFn } from 'v3-img-preview'
const imgUrl1 = require('./images/1.jpg')
const imgUrl2 = require('./images/2.jpg')

v3ImgPreviewFn('./images/2.jpg') // ❌ 错误的引用方式

// 单张图片
v3ImgPreviewFn(imgUrl1) // ✅ 正确方式

// 多张图片
v3ImgPreviewFn({ images: [imgUrl1, imgUrl2] }) // ✅ 正确方式
// or
v3ImgPreviewFn([imgUrl1, imgUrl2]) // ✅ 正确方式
```

### 示例

#### 单张图片

1. 本地图片

:::demo
single-img
:::

2. 网络图片

:::demo
link-src
:::

#### 多图预览

:::demo
multiple-img
:::

### API

> 以下属性适用于传递对象时使用，若只传递 url，您也可以直接调用方法传递 v3ImgPreviewFn("http://www.xxxxxx.png")

| 属性         | 说明                                                     | 类型      | 默认值 |
| ------------ | -------------------------------------------------------- | --------- | ------ |
| url          | 图片 url                                                 | `string`  | -      |
| keyboard     | 是否使用键盘快捷键                                       | `boolean` | `true` |
| images       | 图片数组，用于展示多个图片时，可以使用该属性传递多张图片 | `Array`   | -      |
| escClose     | 是否支持 esc 关闭，注意：`keyboard`禁用时此功能也将禁用  | `boolean` | `true` |
| showCloseBtn | 是否显示关闭按钮                                         | `boolean` | `true` |
| showToolbar  | 是否显示工具栏                                           | `boolean` | `true` |
| showArrowBtn | 是否显示左右箭头                                         | `boolean` | `true` |
| index        | 多图展示时，显示图片的索引，默认从第一张开始             | `number`  | 0      |

### 全局配置方式

我们所有的 API 都支持全局配置，您可以在注册插件的时候配置全局属性

```js
import { createApp } from 'vue'
import App from './App.vue'
import VImagesPreview from 'v3-img-preview'
const app = createApp(App)
app.mount('#app')
// 全局配置属性
app.use(VImagesPreview, {
  keyboard: false,
  escClose: false,
  showToolbar: false
})
```

#### 配置优先级

> 配置项的优先级为 **组件内传入配置 > 全局配置 > 默认值**

### 快捷键

| 快捷键 | 说明       |
| ------ | ---------- |
| A ←    | 上一张     |
| D →    | 下一长     |
| S ↓    | 缩小       |
| W ↑    | 放大       |
| Q      | 左旋转 90° |
| E      | 右旋转 90° |
| Space  | 复位       |
