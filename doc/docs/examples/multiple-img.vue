<template>
  <div>
    <img
      width="200"
      height="130"
      v-for="(img, index) of images"
      :src="img"
      alt=""
      @click.stop="handlePreview(index)"
    />
  </div>
</template>

<script lang="ts" setup>
import { v3ImgPreviewFn } from 'v3-img-preview'

const images = [1, 2, 3, 4, 5].map(i => `/v3-img-preview/images/img${i}.jpg`)
const handlePreview = (index: number) => {
  console.log('-> index', index)
  v3ImgPreviewFn({ images, index })
}
</script>
