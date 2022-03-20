<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import { v3ImgPreviewFn } from '@/entry.esm'
console.log('-> v3ImgPreview', v3ImgPreviewFn)
const img = require('./img.png')
export default defineComponent({
  name: 'ServeDev',
  components: {},
  setup() {
    const instance = getCurrentInstance()

    const handleClick = () => {
      instance?.proxy?.$v3ImgPreviewFn(img)
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
