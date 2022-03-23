# v3-img-preview

<a target="_blank" href="https://github.com/Alfred-Skyblue" style="margin-right: 5px;">![github](https://img.shields.io/badge/Author-Alfred_Skyblue-blue.svg)</a>
<a target="_blank" href="https://github.com/Alfred-Skyblue/v3-img-preview/blob/master/LICENSE" style="margin-right: 5px;">![MIT](https://img.shields.io/badge/License-MIT-green.svg)</a>
<a style="margin-right: 5px;">![vue2.x](https://img.shields.io/badge/VUE-3.0-green.svg)</a>
<a target="_blank" href="https://github.com/Alfred-Skyblue/v3-img-preview" style="margin-right: 5px;">![GitHub Repo stars](https://img.shields.io/github/stars/Alfred-Skyblue/v3-img-preview?style=social)
</a>

## 简介
> 基于vue3编写的图片预览插件，支持单图和多图预览，支持图片旋转，缩放，移动等功能

+ [github](https://github.com/Alfred-Skyblue/v3-img-preview)
+ [码云](https://gitee.com/yuan_fangY/v3-img-preview)
+ [Document](https://alfred-skyblue.github.io/v3-img-preview/)
+ [国内文档地址](https://yuan_fangy.gitee.io/v3-img-preview/)


## 安装

```shell
npm install v3-img-preview --save
# or
yarn add v3-img-preview
```

在main.js中引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import v3ImgPreview from 'v3-img-preview'
const app = createApp(App)
app.mount('#app')
app.use(v3ImgPreview, {/* 全局配置 */})
```

在组件中使用

> 组件支持两种调用方式：经过app.use注册后，全局属性上会绑定$v3ImgPreviewFn方法，可以直接调用，您也可以通过直接导入v3ImgPreviewFn方法使用，使用方式如下：
```vue

<template>
  <div class="box">
    <button @click="handleClick">导出方法调用</button>
    <button @click="handleImgPreview">实例调用</button>
  </div>
</template>

<script>
import { defineComponent} from 'vue'
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
    const  handleImgPreview = () => {
      // 全局方法调用
      instance.proxy.$v3ImgPreviewFn('https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF')
    }
    return { handleClick,handleImgPreview }
  }
})
</script>

```

本地预览
```js
import { v3ImgPreviewFn } from 'v3-img-preview'
const imgU

rl1 = require('./images/1.jpg')
const imgUrl2 = require('./images/2.jpg')
// 单张图片
v3ImgPreviewFn(imgUrl1)

// 多张图片
v3ImgPreviewFn({images : [imgUrl1, imgUrl2]})
// or
v3ImgPreviewFn([imgUrl1, imgUrl2])
```



### API

> 以下属性适用于传递对象时使用，若只传递url，您也可以直接调用方法传递 v3ImgPreviewFn("http://www.xxxxxx.png")

| 属性         | 说明                                                     | 类型      | 默认值 |
| ------------ | -------------------------------------------------------- | --------- | ------ |
| url          | 图片url                                                  | `string`  | -      |
| keyboard     | 是否使用键盘快捷键                                       | `boolean` | `true` |
| images       | 图片数组，用于展示多个图片时，可以使用该属性传递多张图片 | `Array`   | -      |
| escClose     | 是否支持esc关闭，注意：`keyboard`禁用时此功能也将禁用    | `boolean` | `true` |
| showCloseBtn | 是否显示关闭按钮                                         | `boolean` | `true` |
| showToolbar  | 是否显示工具栏                                           | `boolean` | `true` |
| showArrowBtn | 是否显示左右箭头                                         | `boolean` | `true` |



### 全局配置方式

我们所有的API都支持全局配置，您可以在注册插件的时候配置全局属性

```js
import { createApp } from 'vue'
import App from './App.vue'
import VImagesPreview from 'v3-img-preview'
const app = createApp(App)
app.mount('#app')
// 全局配置属性
app.use(VImagesPreview, { keyboard: false,escClose: false,showToolbar: false })

```



配置优先级

> 配置项的优先级为 **组件内传入配置 > 全局配置 > 默认值**



### 快捷键



| 快捷键  | 说明      |
| ------- | --------- |
| A    ←  | 上一张    |
| D    →  | 下一长    |
| S     ↓ | 缩小      |
| W    ↑  | 放大      |
| Q       | 左旋转90° |
| E       | 右旋转90° |
| Space   | 复位      |

