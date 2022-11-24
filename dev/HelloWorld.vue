<template>
  <div>
    <ImgView src="http://baidu.com/xxx/xxx.png"></ImgView>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, h } from 'vue'

console.log('start web')
// 图片组件
const ImgView = defineComponent({
  props: {
    src: {
      type: String,
      required: true
    }
  },
  setup(props, { attrs }) {
    const height = ref(0)
    const loadImg = () => {
      const img = new Image()
      img.src = props.src
      img.onload = () => {
        height.value = img.height
      }
    }
    onMounted(() => {
      loadImg()
    })

    return () =>
      h('VanImage', {
        attrs: {
          ...attrs,
          height: height.value,
          src: props.src
        }
      })
  }
})
export default defineComponent({
  components: {
    ImgView
  }
})
</script>
