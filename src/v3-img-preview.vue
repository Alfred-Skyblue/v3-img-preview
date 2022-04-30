<template>
  <transition name="fade">
    <div class="v-images-wrap" ref="vImagesWrap" v-if="visible">
      <!--   loading     -->
      <svg
        class="icon img-loading rotate-animation"
        v-show="imgState === 'loading'"
        aria-hidden="true"
      >
        <use xlink:href="#v3-img-loading"></use>
      </svg>
      <div ref="imgContainer" :style="dragStyle" class="img-container">
        <!--<editor-fold desc="图片加载成功">-->
        <img
          class="img-content"
          v-show="imgState === 'success'"
          @dragstart.prevent
          :src="src"
          :style="`transform: scale(${imgScale}) rotate(${imgRotate}deg);`"
          alt=""
        />
        <!--</editor-fold>-->

        <!--   图片加载失败     -->
        <svg
          class="icon img-content img-error"
          v-show="imgState === 'error'"
          @dragstart.prevent
          aria-hidden="true"
          :style="`transform: scale(${imgScale}) rotate(${imgRotate}deg);`"
        >
          <use xlink:href="#v3-img-img-error"></use>
        </svg>
      </div>

      <!--    关闭按钮    -->
      <svg
        class="icon close-btn"
        aria-hidden="true"
        @click.stop="handleClose"
        v-if="showCloseBtn"
      >
        <use xlink:href="#v3-img-close"></use>
      </svg>

      <!--    左箭头    -->
      <div
        v-if="visibleArrowBtn"
        class="arrow arrow-left"
        @click="toggleImg(false)"
      >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#v3-img-left"></use>
        </svg>
      </div>
      <!--    右箭头    -->
      <div
        v-if="visibleArrowBtn"
        class="arrow arrow-right"
        @click="toggleImg(true)"
      >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#v3-img-right"></use>
        </svg>
      </div>
      <!--    工具栏    -->
      <div class="v3-img-preview-toolbar" v-if="showToolbar">
        <section>
          <svg
            class="icon"
            aria-hidden="true"
            @click="handleScale(-0.1, false)"
          >
            <use xlink:href="#v3-img-zoom-out"></use>
          </svg>
          <svg class="icon" aria-hidden="true" @click="handleScale(0.1, false)">
            <use xlink:href="#v3-img-zoom-big"></use>
          </svg>
          <svg class="icon" aria-hidden="true" @click="initImgSize">
            <use xlink:href="#v3-img-antetype"></use>
          </svg>
          <svg class="icon" aria-hidden="true" @click="handleRotate(false)">
            <use xlink:href="#v3-img-rotate-left"></use>
          </svg>
          <svg class="icon" aria-hidden="true" @click="handleRotate(true)">
            <use xlink:href="#v3-img-rotate-right"></use>
          </svg>
        </section>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  onMounted,
  nextTick,
  PropType,
  computed
} from 'vue'
import {
  onKeyStroke,
  useDebounceFn,
  useDraggable,
  useEventListener
} from '@vueuse/core'
import { loadIcon } from '@/iconfont/iconfont'
type imgState = 'loading' | 'error' | 'success'

const keys = [
  'a',
  's',
  'd',
  'w',
  'q',
  'e',
  'A',
  'S',
  'D',
  'W',
  'Q',
  'E',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'Escape',
  ' '
]

const loadImage = (url: string) => {
  const img = new Image()
  img.src = url
  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(url)
    }
    img.onerror = () => {
      reject(url)
    }
  })
}
export default defineComponent({
  name: 'V3ImgPreview',
  props: {
    showToolbar: {
      type: Boolean,
      default: true
    },
    showArrowBtn: {
      type: Boolean,
      default: true
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    url: {
      type: String,
      default: undefined
    },
    escClose: {
      type: Boolean,
      default: true
    },
    images: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    showCloseBtn: {
      type: Boolean,
      default: true
    },
    index: {
      type: Number,
      default: 0
    },
    on_unmount_v3_ima_preview_app: {
      type: Function
    }
  },
  setup(props, { emit }) {
    const vImagesWrap = ref<HTMLElement | null>(null)
    const imgContainer = ref<HTMLElement | null>(null)
    const { style: dragStyle } = useDraggable(imgContainer)
    const state = reactive({
      visible: true,
      imgState: 'loading' as imgState,
      src: '',
      imgIndex: props.index
    })

    const visibleArrowBtn = computed(() => {
      return props.images?.length > 1 && props.showArrowBtn
    })
    const style = reactive({
      imgScale: 1,
      imgRotate: 0
    })
    const isMultiple = computed(() => props.images?.length > 1)
    /**
     * 键盘事件
     * @type {(e: KeyboardEvent) => void}
     */
    const handleKeyStroke = useDebounceFn((e: KeyboardEvent) => {
      if (!props.keyboard) return false
      e.preventDefault()
      const { key } = e
      if (['s', 'S', 'ArrowDown'].includes(key)) return handleScale(-0.1, false)
      if (['w', 'W', 'ArrowUp'].includes(key)) return handleScale(0.1, false)
      if (key === ' ') return initImgSize()
      if (key === 'Escape' && props.escClose) return handleClose()
      if (['E', 'e'].includes(key)) return handleRotate(true)
      if (['Q', 'q'].includes(key)) return handleRotate(false)
      if (['a', 'A', 'ArrowLeft'].includes(key)) return toggleImg(false)
      if (['d', 'D', 'ArrowRight'].includes(key)) return toggleImg(true)
    }, 200)
    onKeyStroke(keys, handleKeyStroke)

    /**
     * 初始化图片，绑定事件
     */
    function initImg() {
      nextTick(() => {
        // 判断是否多图
        if (props.url !== undefined) return changeUrl(props.url!)
        if (Array.isArray(props.images) && props.images.length > 0) {
          return changeUrl(props.images[state.imgIndex])
        } else {
          return console.error('images is not Array or Array length is 0')
        }
      })
    }
    /**
     * 初始化图片位置及尺寸
     */
    const initImgSize = () => {
      style.imgScale = 1
      style.imgRotate = 0
      imgContainer.value!.style.top = '0'
      imgContainer.value!.style.left = '0'
    }

    /**
     * 图片旋转
     * @param {boolean} flag
     */
    function handleRotate(flag: boolean) {
      style.imgRotate += 90 * (flag ? 1 : -1)
      // if ([360, -360].includes(style.imgRotate)) style.imgRotate = 0
    }
    /**
     * 图片缩放
     * @param {number} num 缩放比例
     * @param {boolean} flag 为true时，固定为num比例，为false时，num为增量
     */
    function handleScale(num: number, flag = false) {
      if (style.imgScale <= 0.2 && num < 0) return
      if (flag) {
        style.imgScale = num
      } else {
        style.imgScale += num
      }
    }

    /**
     * 监听鼠标滚轮事件，触发图片缩放
     * @param {WheelEvent} e
     */
    function handleScroll(e: WheelEvent) {
      e.preventDefault()
      handleScale(e.deltaY < 0 ? 0.05 : -0.05)
    }

    /**
     * 切换图片url
     * @param {string} url 图片地址
     */
    function changeUrl(url: string) {
      state.imgState = 'loading'
      loadImage(url)
        .then(() => {
          state.imgState = 'success'
          state.src = url
          initImgSize()
        })
        .catch(() => {
          state.imgState = 'error'
        })
    }

    /**
     * 初始化
     */
    function init() {
      nextTick(() => {
        useEventListener(vImagesWrap.value, 'mousewheel', handleScroll, false)
        initImgSize()
        initImg()
      })
    }
    onMounted(() => {
      if (!window.__V3__IMG__PREVIEW__LOAD__ICON__SVG__) loadIcon()
      init()
    })

    /**
     * 关闭图片预览
     */
    function handleClose() {
      state.visible = false
      emit('close')
      props.on_unmount_v3_ima_preview_app?.()
    }

    /**
     * 切换图片
     * @param {boolean} flag 为true时，切换到下一张，为false时，切换到上一张
     */
    function toggleImg(flag: boolean) {
      if (!isMultiple.value) return
      if (flag) {
        state.imgIndex++
        if (state.imgIndex > props.images.length - 1) state.imgIndex = 0
      } else {
        state.imgIndex--
        if (state.imgIndex < 0) state.imgIndex = props.images.length - 1
      }
      changeUrl(props.images[state.imgIndex])
    }
    return {
      vImagesWrap,
      imgContainer,
      ...toRefs(state),
      ...toRefs(style),
      handleClose,
      toggleImg,
      initImgSize,
      dragStyle,
      handleScale,
      handleRotate,
      visibleArrowBtn,
      isMultiple
    }
  }
})
</script>
<style lang="less" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.v-images-wrap {
  z-index: 200;
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  color: #fff;
  .img-loading,
  .img-content {
    font-size: 50px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transition: all 0.2s;
  }

  .img-container {
    z-index: 201;
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    text-align: center;
    .img-content {
      max-width: 100%;
      max-height: 100%;
    }
    .img-error {
      font-size: 300px;
      color: #d8d8d8;
    }
  }

  .rotate-animation {
    animation: rotate 1.5s linear infinite;
  }
  .arrow {
    width: 42px;
    height: 42px;
    text-align: center;
    line-height: 42px;
    position: absolute;
    top: 50%;
    border-radius: 50%;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    font-size: 24px;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 280;
    background: rgba(0, 0, 0, 0.3);
    &:hover {
      opacity: 0.8;
      transform: translateY(-50%) scale(1.2);
    }
  }
  .arrow-left {
    left: 50px;
  }
  .arrow-right {
    right: 50px;
  }
  .close-btn {
    z-index: 205;
    position: absolute;
    right: 50px;
    top: 50px;
    width: 36px;
    height: 36px;
    font-size: 22px;
    line-height: 36px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s;
    color: #e7e5e5;
    background: rgba(0, 0, 0, 0.3);
    &:hover {
      opacity: 0.8;
      transform: scale(1.2);
    }
  }
  .v3-img-preview-toolbar {
    z-index: 205;
    position: absolute;
    bottom: 10%;
    font-size: 26px;
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    section {
      height: 44px;
      bottom: 10%;
      padding: 0 22px;
      display: flex;
      align-items: center;
      border-radius: 22px;
      background: rgba(0, 0, 0, 0.3);
      color: #c3c3c3;
      svg {
        box-sizing: content-box;
        padding: 0 10px;
        transition: all 0.2s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
