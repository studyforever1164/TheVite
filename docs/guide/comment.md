---
title: Comment Component - Waline
description: Learn how to integrate the Waline comment system into your VitePress website through the @theojs/Lumen plugin. This guide includes data configuration, component introduction, and steps to enable comment functionality on document pages and homepage, helping you easily add interactive comment areas to your site.
---

# Comment Component - Waline

## Waline Comments

<Links
  :grid="2"
  :items="[
    {
      image: 'https://waline.js.org/logo.png',
      name: 'How to deploy, please check waline documentation',
      desc: '一款简洁、安全的评论系统。',
      link: 'https://waline.js.org/guide/get-started/'
    }
  ]"
/>

## 安装依赖

::: code-group

```sh [pnpm]
pnpm add recaptcha-v3
```

```sh [npm]
npm install recaptcha-v3
```

```sh [yarn]
yarn add recaptcha-v3
```

:::
然后在 `.vitepress/config.mts`中添加以下内容

```ts [.vitepress/config.mts]
import { defineConfig } from 'vitepress'

export default defineConfig({
  // [!code ++]
  vite: {
    // [!code ++]
    optimizeDeps: {
      // [!code ++]
      include: ['recaptcha-v3']
    } // [!code ++]
  } // [!code ++]
})
```

### 创建数据

在 `.vitepress/data/Waline.ts` 文件中创建评论配置：

```ts [.vitepress/data/Waline.ts]
import type { WalineData } from '@theojs/Lumen'

export const Waline_Data: WalineData = {
  serverURL: 'https://xxxxxx', // 替换为你的 waline 服务地址     [!code ++]
  lang: 'zh-CN'
  //其他选项...
}
```

### 接口说明 <Pill image="https://waline.js.org/logo.png" name="查看 waline 接口说明文档" link="https://waline.js.org/reference/client/props.html" />

::: tip
`path` 属性已通过 **VitePress** 提供的 `useRoute()` 自动获取，一般无需手动设置；**如有特殊需求，也可以自行覆盖**。
:::

### 引入评论组件

#### 在文档页使用

在 `.vitepress/theme/index.ts` 中注册组件并插入评论区域

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
// [!code ++]
import { h } from 'vue'
// [!code ++]
import { Waline } from '@theojs/Lumen'
// [!code ++]
import { Waline_Data } from '../data'

export default {
  extends: DefaultTheme,
  // [!code ++]
  Layout() {
    // [!code ++]
    return h(DefaultTheme.Layout, null, {
      // [!code ++]
      'doc-after': () => h(Waline, { Waline_Data }) // [!code ++]
    }) // [!code ++]
  } // [!code ++]
}
```

#### 在首页使用

你也可以在首页直接挂载 `Waline` 组件：

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
// [!code ++]
import { h } from 'vue'
// [!code ++]
import { Waline } from '@theojs/Lumen'

export default {
  // [!code ++]
  enhanceApp: ({ app }) => {
    // [!code ++]
    app.component('Waline', Waline)
    // [!code ++]
  }
}
```

```yaml [.vitepress/index.md]
---
layout: home

hero:
  name: Lumen
  text: 'Enhanced '
  textsuffix: 'Theme'
  tagline: ✨ 专为 VitePress 打造的主题美化与 Vue 扩展组件库
---

# 修改成部署的 Waline 地址  [!code ++]
<Waline :Waline_Data="{  serverURL: 'https://xxxxxx', ...其他选项  }" />

```

### CSS 变量

已预设 <Pill icon="unjs:theme-colors" name="部分 CSS 变量" link="https://github.com/s-theo/Lumen/blob/main/src/style/components-var.css" />，如需进一步自定义，可参考 <Pill image="https://waline.js.org/logo.png" name="Waline 官方文档" link="https://waline.js.org/reference/client/style.html" /> 通过覆盖样式实现个性化调整。
