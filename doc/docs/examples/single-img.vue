<template>
  <div>
    <img src="/images/img1.jpg" alt="" @click.stop="handlePreview" />
  </div>
</template>

<script lang="ts" setup>
import { v3ImgPreviewFn } from 'v3-img-preview'

const handlePreview = (e: MouseEvent) => {
  v3ImgPreviewFn((e.target as HTMLImageElement).src)
}
</script>
