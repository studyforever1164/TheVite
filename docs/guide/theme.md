---
title: Configure Theme
description: Learn how to configure and customize the @theojs/Lumen VitePress theme. This guide includes theme CSS import (full or partial), Iconify icon support configuration, CSS variable override methods, and demonstrates built-in style examples such as containers, badges and light/dark mode images.
---

# Configure Theme

## Theme Style Import

::: code-group

```ts [Full Import]
// .vitepress/theme/index.ts
import '@theojs/Lumen/style'
```

```ts [On-demand Import]
// .vitepress/theme/index.ts
/* Badge styles */
import '@theojs/Lumen/badge'
/* Homepage buttons */
import '@theojs/Lumen/button'
/* Theme colors */
import '@theojs/Lumen/colors'
/* Document base styles */
import '@theojs/Lumen/doc'
/* Container styles (alerts, tip blocks, etc.) */
import '@theojs/Lumen/doc-blocks'
/* Homepage styles */
import '@theojs/Lumen/home'
/* Icon styles */
import '@theojs/Lumen/icon'
/* Image styles */
import '@theojs/Lumen/pic'
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

## 自定义组件 CSS

默认使用 CSS 变量来管理样式。你可以通过覆盖根级 CSS 变量，轻松实现主题颜色及样式的个性化定制。

### 在主题入口导入自定义变量文件

```ts
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import '@theojs/Lumen/style'
// [!code ++]
import './var.css'

export default DefaultTheme
```

### 在 `var.css` 中覆盖变量

```css
/* .vitepress/theme/var.css */
:root {
  --lm-Notice-bg: var(--vp-button-alt-bg);
  --lm-Notice-bg-hover: var(--vp-c-brand-soft);
}
```

查看<Pill icon="unjs:theme-colors" name="默认组件 CSS 变量" link="https://github.com/s-theo/Lumen/blob/main/src/style/components-var.css" /> 文件中查看所有可用变量，方便针对性覆盖。

## 内置样式示例

### 1. 容器

容器用于显示信息提示、警告、注意事项等内容，支持多种内置类型：

**输入**

```md
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

::: info
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: tip
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: warning
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: danger
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: details
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::
```

**输出**

> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

::: info
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: tip
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: warning
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: danger
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: details
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

### 2. 自定义容器

**输入**

````md
::: danger STOP
[这是一个链接](https://doc.theojs.cn/)
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
````

**输出**
::: danger STOP
[这是一个链接](https://doc.theojs.cn/)
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::

### 3. GitHub 风格容器

**输入**

```md
> [!NOTE]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!TIP]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!IMPORTANT]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!WARNING]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!CAUTION]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字
```

**输出**

> [!NOTE]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!TIP]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!IMPORTANT]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!WARNING]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!CAUTION]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

### 4. Badge 组件

```vue-html
<Badge type="info" text="default" />
<Badge type="tip" text="^1.9.0" />
<Badge type="warning" text="beta" />
<Badge type="danger" text="caution" />
<Badge type="info">custom element</Badge>

<!-- 或者是 small-->
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

### 5. 图片的浅色和深色模式支持

**输入**

```md
![浅色模式](https://i.theojs.cn/logo/github.svg){.light-only}

![深色模式](https://i.theojs.cn/logo/github-dark.svg){.dark-only}

![深色模式](https://i.theojs.cn/logo/github-dark.svg#dark)

![浅色模式](https://i.theojs.cn/logo/github.svg#light)
```

**输出**

![浅色模式](https://i.theojs.cn/logo/github.svg){.light-only}

![深色模式](https://i.theojs.cn/logo/github-dark.svg){.dark-only}

![深色模式](https://i.theojs.cn/logo/github-dark.svg#dark)

![浅色模式](https://i.theojs.cn/logo/github.svg#light)

### 6. 首页 actions 添加图片

查看 [自定义组件 css](#自定义组件-css) 将下方的内容更换为自己的图片链接

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

## 解决方案

### 导入主题时报错: `does not provide an export named 'load'`

查看 [解决方式](./comment.md##安装依赖)

### 使用 `iconify-icon` 时报错: `[Vue warn]: Failed to resolve component: iconify-icon`

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

### 使用 [vitepress-plugin-image-viewer](https://www.npmjs.com/package/vitepress-plugin-image-viewer) 时排除组件内的图像

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

### 组件图像默认加载行为

在组件中，图像默认使用 `loading="lazy"`，即图片会在接近视口时才开始加载，以优化页面加载速度和性能。

**如果需要修改默认行为**

如果你希望图像在页面加载时立即加载，你可以显式地在组件中设置 `loading="eager"`。

```vue-html
<Pill
  :image="{ src: 'https://www.example.com/image.jpg', loading: 'eager' }"
  name="示例图片"
  link="https://www.example.com"
/>
```
