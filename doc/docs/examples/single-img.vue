<template>
  <div>
    <img
      src="/images/img1.jpg"
      alt=""
      @click.stop="handlePreview('/images/img1.jpg')"
    />
  </div>
</template>

<script lang="ts" setup>
import { v3ImgPreviewFn } from 'v3-img-preview'
const handlePreview = (src: string) => v3ImgPreviewFn(src)
</script>
