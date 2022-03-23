    import { defineAsyncComponent } from 'vue'
    
    export default ({ app }) => {    
      app.component("DemoBlock", defineAsyncComponent(() => import("/Volumes/office/code/Plugins/v3-img-preview/doc/node_modules/vuepress-plugin-demo-block-vue3/src/DemoBlock.vue")))
    }
    