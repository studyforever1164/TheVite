---
title: Homepage Underline Component - Underline
description: Learn how to use the Underline component from @theojs/TheVite plugin to add beautiful dynamic underline effects to the hero area title text on your VitePress website homepage. This guide includes component import, property configuration, and detailed steps for use in homepage layout to enhance homepage visual appeal and user experience.
head:

---

# Homepage Underline Component - Underline


## Import Component

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
// [!code ++]
import { Underline } from '@theojs/TheVite'

export default {
  // [!code ++]
  enhanceApp: ({ app }) => {
    // [!code ++]
    app.component('Home', Underline)
  } // [!code ++]
}
```

## Usage Example

In the homepage Markdown file (such as `.vitepress/index.md`), use the homepage layout by setting `layout: home`, configure the title text in the `hero` area, and insert the `<Home />` component in the page content to render the title with dynamic underline effects.

```yaml [.vitepress/index.md]
---
layout: home

hero:
  name: TheVite
  text: Enhanced # [!code ++] First part of subtitle text, underline will apply here
  textsuffix: Theme # [!code ++] Second part of subtitle text
  tagline: ✨ A theme enhancement and Vue component library crafted for VitePress
---
<Home /> # [!code ++]
```

## Interface Data Description

| Property Name | Description                                               |
| ------------- | --------------------------------------------------------- |
| `text`        | First part of subtitle text (**with underline**)         |
| `textsuffix`  | Second part of subtitle text                              |
