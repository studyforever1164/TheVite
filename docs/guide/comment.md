---
title: Comment Component - Waline
description: Learn how to integrate the Waline comment system into your VitePress website through the @theojs/TheVite plugin. This guide includes data configuration, component introduction, and steps to enable comment functionality on document pages and homepage, helping you easily add interactive comment areas to your site.
---

# Comment Component - Waline

## Waline Comment

<Links
  :grid="2"
  :items="[
    {
      image: 'https://waline.js.org/logo.png',
      name: 'How to deploy, please check waline documentation',
      desc: 'A simple, secure comment system.',
      link: 'https://waline.js.org/guide/get-started/'
    }
  ]"
/>

## Install Dependencies

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
Then add the following content in `.vitepress/config.mts`

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

### Create Data

Create comment configuration in the `.vitepress/data/Waline.ts` file:

```ts [.vitepress/data/Waline.ts]
import type { WalineData } from '@theojs/TheVite'

export const Waline_Data: WalineData = {
  serverURL: 'https://xxxxxx', // Replace with your waline service address     [!code ++]
  lang: 'zh-CN'
  //other options...
}
```

### Interface Description <Pill image="https://waline.js.org/logo.png" name="View waline interface documentation" link="https://waline.js.org/reference/client/props.html" />

::: tip
The `path` property is automatically obtained through **VitePress**'s `useRoute()`, generally no manual setting is required; **you can override it if you have special needs**.
:::

### Import Comment Component

#### Use in Document Pages

Register the component in `.vitepress/theme/index.ts` and insert the comment area

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
// [!code ++]
import { h } from 'vue'
// [!code ++]
import { Waline } from '@theojs/TheVite'
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

#### Use on Homepage

You can also mount the `Waline` component directly on the homepage:

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
// [!code ++]
import { h } from 'vue'
// [!code ++]
import { Waline } from '@theojs/TheVite'

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
  name: TheVite
  text: 'Enhanced '
  textsuffix: 'Theme'
  tagline: ✨ A theme enhancement and Vue component library crafted for VitePress
---

# Change to your deployed Waline address  [!code ++]
<Waline :Waline_Data="{  serverURL: 'https://xxxxxx', ...other options  }" />

```

### CSS Variables

Pre-configured <Pill icon="unjs:theme-colors" name="Partial CSS Variables" link="https://github.com/studyforever1164/TheVite/blob/main/src/style/components-var.css" />. For further customization, refer to <Pill image="https://waline.js.org/logo.png" name="Official Waline Documentation" link="https://waline.js.org/reference/client/style.html" /> to implement personalized adjustments by overriding styles.
