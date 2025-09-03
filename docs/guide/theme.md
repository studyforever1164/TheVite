---
title: Configure Theme
description: Learn how to configure and customize the @theojs/TheVite VitePress theme. This guide includes theme CSS import (full or partial), Iconify icon support configuration, CSS variable override methods, and demonstrates built-in style examples such as containers, badges and light/dark mode images.
---

# Configure Theme

## Theme Style Import

::: code-group

```ts [Full Import]
// .vitepress/theme/index.ts
import '@theojs/TheVite/style'
```

```ts [On-demand Import]
// .vitepress/theme/index.ts
/* Badge styles */
import '@theojs/TheVite/badge'
/* Homepage buttons */
import '@theojs/TheVite/button'
/* Theme colors */
import '@theojs/TheVite/colors'
/* Document base styles */
import '@theojs/TheVite/doc'
/* Container styles (alerts, tip blocks, etc.) */
import '@theojs/TheVite/doc-blocks'
/* Homepage styles */
import '@theojs/TheVite/home'
/* Icon styles */
import '@theojs/TheVite/icon'
/* Image styles */
import '@theojs/TheVite/pic'
```

:::

## Icon Support <Pill :icon="{ icon: 'line-md:iconify2-static', color: '#1769AA' }" name="View Icon Library" link="https://icon-sets.iconify.design/" />

### Example

```vue-html
<iconify-icon icon="simple-icons:fontawesome"></iconify-icon>
<iconify-icon icon="line-md:iconify2-static"></iconify-icon>
<iconify-icon icon="cil:paper-plane" width="36"></iconify-icon>
```

<iconify-icon icon="simple-icons:fontawesome"></iconify-icon>
<iconify-icon icon="line-md:iconify2-static"></iconify-icon>
<iconify-icon icon="cil:paper-plane" width="36"></iconify-icon>

## Custom Component CSS

By default, CSS variables are used to manage styles. You can easily customize theme colors and styles by overriding root-level CSS variables.

### Import Custom Variable File in Theme Entry

```ts
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import '@theojs/thevite/style'
// [!code ++]
import './var.css'

export default DefaultTheme
```

### Override Variables in `var.css`

```css
/* .vitepress/theme/var.css */
:root {
  --lm-Notice-bg: var(--vp-button-alt-bg);
  --lm-Notice-bg-hover: var(--vp-c-brand-soft);
}
```

View <Pill icon="unjs:theme-colors" name="Default Component CSS Variables" link="https://github.com/s-theo/thevite/blob/main/src/style/components-var.css" /> file to see all available variables for targeted overrides.

## Built-in Style Examples

### 1. Containers

Containers are used to display informational tips, warnings, notices, and other content, supporting multiple built-in types:

**Input**

```md
> [This is a link](https://doc.theojs.cn/)
>
> This is some text

::: info
[This is a link](https://doc.theojs.cn/)

This is some text
:::

::: tip
[This is a link](https://doc.theojs.cn/)

This is some text
:::

::: warning
[This is a link](https://doc.theojs.cn/)

This is some text
:::

::: danger
[This is a link](https://doc.theojs.cn/)

This is some text
:::

::: details
[This is a link](https://doc.theojs.cn/)

This is some text
:::
```

**Output**

> [This is a link](https://doc.theojs.cn/)
>
> This is some text

::: info
[This is a link](https://doc.theojs.cn/)

This is some text
:::

::: tip
[This is a link](https://doc.theojs.cn/)

This is some text
:::

::: warning
[This is a link](https://doc.theojs.cn/)

This is some text
:::

::: danger
[This is a link](https://doc.theojs.cn/)

This is some text
:::

::: details
[This is a link](https://doc.theojs.cn/)

This is some text
:::

### 2. Custom Containers

**Input**

````md
::: danger STOP
[This is a link](https://doc.theojs.cn/)
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
````

**Output**
::: danger STOP
[This is a link](https://doc.theojs.cn/)
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::

### 3. GitHub Style Containers

**Input**

```md
> [!NOTE]
>
> [This is a link](https://doc.theojs.cn/)
>
> This is a text paragraph

> [!TIP]
>
> [This is a link](https://doc.theojs.cn/)
>
> This is a text paragraph

> [!IMPORTANT]
>
> [This is a link](https://doc.theojs.cn/)
>
> This is a text paragraph

> [!WARNING]
>
> [This is a link](https://doc.theojs.cn/)
>
> This is a text paragraph

> [!CAUTION]
>
> [This is a link](https://doc.theojs.cn/)
>
> This is a text paragraph
```

**Output**

> [!NOTE]
>
> [This is a link](https://doc.theojs.cn/)
>
> This is a text paragraph

> [!TIP]
>
> [This is a link](https://doc.theojs.cn/)
>
> This is a text paragraph

> [!IMPORTANT]
>
> [This is a link](https://doc.theojs.cn/)
>
> This is a text paragraph

> [!WARNING]
>
> [This is a link](https://doc.theojs.cn/)
>
> This is a text paragraph

> [!CAUTION]
>
> [This is a link](https://doc.theojs.cn/)
>
> This is a text paragraph

### 4. Badge Component

```vue-html
<Badge type="info" text="default" />
<Badge type="tip" text="^1.9.0" />
<Badge type="warning" text="beta" />
<Badge type="danger" text="caution" />
<Badge type="info">custom element</Badge>

<!-- or small-->
<Badge type="info small" text="default" />
<Badge type="tip small" text="^1.9.0" />
<Badge type="warning small" text="beta" />
<Badge type="danger small" text="caution" />
<Badge type="info small">custom element</Badge>
```

<Badge type="info" text="default" />
<Badge type="tip" text="^1.9.0" />
<Badge type="warning" text="beta" />
<Badge type="danger" text="caution" />
<Badge type="info">custom element</Badge>

<Badge type="info small" text="default" />
<Badge type="tip small" text="^1.9.0" />
<Badge type="warning small" text="beta" />
<Badge type="danger small" text="caution" />
<Badge type="info small">custom element</Badge>

### 5. Light and Dark Mode Support for Images

**Input**

```md
![Light Mode](https://i.theojs.cn/logo/github.svg){.light-only}

![Dark Mode](https://i.theojs.cn/logo/github-dark.svg){.dark-only}

![Dark Mode](https://i.theojs.cn/logo/github-dark.svg#dark)

![Light Mode](https://i.theojs.cn/logo/github.svg#light)
```

**Output**

![Light Mode](https://i.theojs.cn/logo/github.svg){.light-only}

![Dark Mode](https://i.theojs.cn/logo/github-dark.svg){.dark-only}

![Dark Mode](https://i.theojs.cn/logo/github-dark.svg#dark)

![Light Mode](https://i.theojs.cn/logo/github.svg#light)

### 6. Adding Images to Homepage Actions

See [Custom Component CSS](#custom-component-css) to replace the content below with your own image links

```css [.vitepress/theme/var.css]
:root {
  --lm-button-author: url('https://i.theojs.cn/logo/avatar-mini.webp');
  --lm-button-logo: url('https://i.theojs.cn/logo/Lumen-logo-mini.svg');
}
```

```yaml [.vitepress/index.md]
---
layout: home

hero:
  actions:
    - theme: brand author
      text: Theo-Docs
      link: https://doc.theojs.cn/

    - theme: alt author
      text: Theo-Docs
      link: https://doc.theojs.cn/

    - theme: brand logo
      text: Lumen
      link: hhttps://Lumen.theojs.cn/

    - theme: alt logo
      text: Lumen
      link: https://Lumen.theojs.cn/

features: ...
---
```

## Solution

### Error when importing theme: `does not provide an export named 'load'`

See [Solution](./comment.md##install-dependencies)

### Error when using `iconify-icon`: `[Vue warn]: Failed to resolve component: iconify-icon`

```ts [.vitepress/config.mts]
import { defineConfig } from 'vitepress'

export default defineConfig({
  // [!code ++]
  vue: {
    // [!code ++]
    template: {
      // [!code ++]
      compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' }
    } // [!code ++]
  } // [!code ++]
})
```

### Excluding images within components when using [vitepress-plugin-image-viewer](https://www.npmjs.com/package/vitepress-plugin-image-viewer)

```ts [.vitepress/theme/index.ts]
// [!code ++]
import { useRoute } from 'vitepress'
// [!code ++]
import imageViewer from 'vitepress-plugin-image-viewer'
import DefaultTheme from 'vitepress/theme'
// [!code ++]
import 'viewerjs/dist/viewer.min.css'

export default {
  // [!code ++]
  setup() {
    const route = useRoute() // [!code ++]
    // [!code ++]
    imageViewer(route, '.vp-doc', {
      filter: (img: HTMLImageElement) => !img.hasAttribute('data-no-viewer') // [!code ++]
    }) // [!code ++]
  } // [!code ++]
}
```

### Component Image Default Loading Behavior

In components, images use `loading="lazy"` by default, meaning images will only start loading when they approach the viewport, to optimize page loading speed and performance.

**If you need to modify the default behavior**

If you want images to load immediately when the page loads, you can explicitly set `loading="eager"` in the component.

```vue-html
<Pill
  :image="{ src: 'https://www.example.com/image.jpg', loading: 'eager' }"
  name="Example Image"
  link="https://www.example.com"
/>
```
