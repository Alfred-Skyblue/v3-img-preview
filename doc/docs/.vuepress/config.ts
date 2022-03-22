import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { resolve } from 'path'

// @ts-ignore
export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: 'v3-img-preview',
  description: '基于vue3的图片预览插件',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/images/logo.svg'
      }
    ]
  ],
  themeConfig: {
    logo: '/images/title.svg',
    sidebarDepth: 4,
    navbar: [
      {
        text: '其他项目',
        children: [
          {
            text: 'v-form-antd',
            link: 'https://v-form-antd.web.cloudendpoint.cn/'
          }
        ]
      },
      {
        text: 'Github',
        link: 'https://github.com/Alfred-Skyblue/v3-img-preview'
      }
    ],
    sidebar: [
      {
        text: '快速上手',
        collapsible: false,
        link: '/guide/'
      }
    ]
  },
  markdown: {
    extractHeaders: {
      level: [1, 2, 3]
    }
  },
  extendsMarkdownOptions: opt => {},
  plugins: [
    [
      'vuepress-plugin-demo-block-vue3',
      {
        componentsDir: resolve(__dirname, './../examples')
      }
    ]
  ]
})
