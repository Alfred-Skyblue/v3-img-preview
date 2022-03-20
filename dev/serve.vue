<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import { v3ImgPreviewFn } from '@/entry.esm'
console.log('-> v3ImgPreview', v3ImgPreviewFn)
const img1 = require('./images/img1.jpg')
const img2 = require('./images/img2.jpg')
const img3 = require('./images/img3.jpg')
const img4 = require('./images/img4.jpg')
const img5 = require('./images/img5.jpg')
export default defineComponent({
  name: 'ServeDev',
  components: {},
  setup() {
    const instance = getCurrentInstance()

    const handleClick = () => {
      instance?.proxy?.$v3ImgPreviewFn([img1, img2, img3, img4, img5])
    }
    return { handleClick }
  }
})
</script>

<template>
  <div class="box">
    <button @click="handleClick">按钮</button>
  </div>
</template>
