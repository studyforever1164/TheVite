---
title: Image Description - Markdown Image Title
description: Learn how to add descriptions or figcaptions to images in VitePress. This guide will walk you through installing and configuring the @mdit/plugin-figure plugin and applying @theojs/TheVite styles to support image titles and display different images in light and dark modes.
---

# Image Description - Markdown Image Title


## Install `@mdit/plugin-figure` Plugin

::: code-group

```sh [pnpm]
pnpm add -D @mdit/plugin-figure
```

```sh [npm]
npm install -D @mdit/plugin-figure

```

```sh [yarn]
yarn add -D @mdit/plugin-figure
```

:::

## Configure Plugin Options

```ts [.vitepress/config.mts]
import { defineConfig } from 'vitepress'
// [!code ++]
import { figure } from '@mdit/plugin-figure'

export default defineConfig({
  // [!code ++]
  markdown: {
    // [!code ++]
    config: (md) => {
      // [!code ++]
      md.use(figure)
    } // [!code ++]
  } // [!code ++]
})
```

## Import Theme

::: code-group

```ts [Full Import]
// theme/index.ts
import '@theojs/TheVite/style'
```

```ts [Separate Import]
// theme/index.ts
import '@theojs/TheVite/pic'
```

:::

### You can also add styles separately

<<< @/../src/style/picture.css

## Usage Example

```md
![Effect Image](https://i.theojs.cn/logo/Lumen-logo-mini.svg)

![Light Mode](https://i.theojs.cn/logo/github.svg){.light-only}

![Dark Mode](https://i.theojs.cn/logo/github-dark.svg){.dark-only}

![Dark Mode](https://i.theojs.cn/logo/github-dark.svg#dark)

![Light Mode](https://i.theojs.cn/logo/github.svg#light)
```

![Effect Image](https://i.theojs.cn/logo/Lumen-logo-mini.svg)

![Light Mode](https://i.theojs.cn/logo/github.svg){.light-only}

![Dark Mode](https://i.theojs.cn/logo/github-dark.svg){.dark-only}

![Dark Mode](https://i.theojs.cn/logo/github-dark.svg#dark)

![Light Mode](https://i.theojs.cn/logo/github.svg#light)
