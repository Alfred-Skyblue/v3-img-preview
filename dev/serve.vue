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
      instance?.proxy?.$v3ImgPreviewFn([
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F911%2F052116133443%2F160521133443-5.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650366879&t=aa13eaeff88751073d79f61b565b3a26',
        img,
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F911%2F0R415123342%2F150R4123342-6-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650366879&t=5ac8e805762ae5a94dd44e4e9a977c73'
      ])
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
