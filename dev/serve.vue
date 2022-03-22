<script lang="ts">
import { defineComponent } from 'vue'
import { v3ImgPreviewFn } from '@/entry.esm'
console.log('-> v3ImgPreview', v3ImgPreviewFn)

const images = [...'12345'].map(i => require(`./images/img${i}.jpg`))
export default defineComponent({
  name: 'ServeDev',
  components: {},
  setup() {
    const handleClick = (index: number) => {
      v3ImgPreviewFn({ images, index })
    }
    return { handleClick, images }
  }
})
</script>

<template>
  <div class="box">
    <img
      width="100"
      v-for="(img, index) of images"
      :src="img"
      alt=""
      @click.stop="handleClick(index)"
    />
  </div>
</template>
