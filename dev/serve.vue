<script lang="ts">
import { defineComponent } from 'vue'
import { v3ImgPreviewFn } from '@/entry.esm'

const images = [...'1'].map(i => require(`./images/img${i}.jpg`))
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
