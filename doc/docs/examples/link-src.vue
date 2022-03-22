<template>
  <img :src="url" alt="" @click="handlePreview" />
</template>

<script lang="ts" setup>
import { v3ImgPreviewFn } from 'v3-img-preview'

const url =
  'https://img0.baidu.com/it/u=3155150237,2943070590&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'

const handlePreview = () => {
  v3ImgPreviewFn(url)
}
</script>
