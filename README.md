# v3-img-preview

> 基于vue3编写的图片预览组件，支持单图和多图预览

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
v3ImgPreviewFn(require('./images/1.jpg'))
```





