/// <reference types="vite/client" />
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import * as lm from '@theojs/Lumen'
import '@theojs/Lumen/style'
import './style/home-image.css'
import { Aside_Data, Footer_Data, Waline_Data } from '../data'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(lm.Notice),
      'aside-ads-before': () => h(lm.Aside, { Aside_Data })
    })
  },
  enhanceApp: ({ app }) => {
    lm.umamiAnalytics({
      id: import.meta.env.VITE_UMAMI_ID,
      src: import.meta.env.VITE_UMAMI_SRC,
      domains: 'Lumen.theojs.cn'
    })
    app.component('Pill', lm.Pill)
    app.component('Links', lm.Links)
    app.component('Card', lm.Card)
    app.component('Copy', lm.CopyText)
    app.component('BoxCube', lm.BoxCube)
    app.component('Home', lm.Underline)
    app.component('Waline', lm.Waline)
  }
}
