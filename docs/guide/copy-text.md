---
title: Copy Button Component - CopyText
description: Learn how to use the CopyText component from @theojs/TheVite to implement click-to-copy text functionality. This component supports custom icons, prompt messages, and positioning, suitable for various scenarios such as code snippets, links, etc.
---

# Copy Button Component - CopyText

## Import Component

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
// [!code ++]
import { CopyText } from '@theojs/TheVite'

export default {
  // [!code ++]
  enhanceApp: ({ app }) => {
    app.component('Copy', CopyText) // [!code ++]
  } // [!code ++]
}
```

## Usage Example

**Input**

<<< ../demo/CopyText.vue{vue-html}

**Output**

<!--@include: ../demo/CopyText.vue-->

## Data Interface Description

|    Field     | Type                                       | Description                                                                                                  | Required               |
| :----------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ---------------------- |
|    `type`    | `auto \| info \| tip \| warning \| danger` | Button color type, default: `auto`                                                                          | <Badge text="Optional" /> |
|   `label`    | `string`                                   | Text displayed on the button, defaults to `text` when not set                                               | <Badge text="Optional" /> |
|    `text`    | `string`                                   | Text content to be copied                                                                                    | <Badge text="Required" /> |
|  `toolTip`   | `string`                                   | Prompt text displayed after successful copy, default: `Copied`                                              | <Badge text="Optional" /> |
|   `noIcon`   | `boolean`                                  | Whether to hide the icon, default: `false`                                                                  | <Badge text="Optional" /> |
|    `icon`    | `IconType`                                 | Button icon, default: `heroicons-outline:clipboard-copy`. For details see [IconType](#IconType)            | <Badge text="Optional" /> |
|   `image`    | `ImageType`                                | Button image. For details see [ImageType](#ImageType)                                                       | <Badge text="Optional" /> |
| `toolTipPos` | `top \| bottom \| left \| right`           | Position where the tooltip is displayed, default: `top`                                                     | <Badge text="Optional" /> |
|    `bold`    | `boolean`                                  | Whether to enable bold style, when enabled text becomes bold `font-weight: 600`, default: `false`          | <Badge text="Optional" /> |

<!--@include: ../demo/type.md-->
