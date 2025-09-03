---
title: Link Card Component
description: Learn how to use the various link card components (BoxCube, Card, Links, Pill) provided by @theojs/TheVite plugin to create beautiful and informative link displays in VitePress sites. This guide includes component import, usage examples, and parameter descriptions, supporting Iconify icons and light/dark modes.
---

# Link Card Component

## Import Component

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
// [!code ++]
import { BoxCube, Card, Links, Pill } from '@theojs/TheVite'

export default {
  // [!code ++]
  enhanceApp: ({ app }) => {
    app.component('Pill', Pill) // [!code ++]
    app.component('Links', Links) // [!code ++]
    app.component('Card', Card) // [!code ++]
    app.component('BoxCube', BoxCube) // [!code ++]
  } // [!code ++]
}
```

## Pill

**Input**
::: code-group
<<< ../demo/Pill.vue#iconify{vue-html}[Iconify]
<<< ../demo/Pill.vue#svg{vue-html}[svg]
<<< ../demo/Pill.vue#image{vue-html}[image]
:::
**Output**

<!--@include: ../demo/Pill.vue#iconify-->

<!--@include: ../demo/Pill.vue#svg-->

<!--@include: ../demo/Pill.vue#image-->

### Parameter Description

| Field    | Type         | Description                                                                                                                           | Required               |
| -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `name`   | `string`     | Name, used as display text.                                                                                                          | <Badge text="Required" /> |
| `link`   | `LinkType`   | Link address, can be external URL or internal path.                                                                                  | <Badge text="Optional" /> |
| `rel`    | `RelType`    | The `rel` attribute of the link, recommended to set to `noopener noreferrer` for enhanced security.                                 | <Badge text="Optional" /> |
| `target` | `TargetType` | Link target window. Default is determined by link address: external links default to open in new tab (`_blank`), internal links have no default value (`open in current page`). Can be customized to override this behavior. | <Badge text="Optional" /> |
| `icon`   | `IconType`   | Icon configuration, supports string or object, supports light/dark mode and color configuration. For details see [IconType](#IconType) | <Badge text="Optional" /> |
| `image`  | `ImageType`  | Image configuration, supports string or object, supports light/dark mode and cropping. For details see [ImageType](#ImageType)      | <Badge text="Optional" /> |
| `size`   | `SizeType`   | Controls the `width` and `height` of image or icon. Default value is `14`                                                            | <Badge text="Optional" /> |

## Links

**Input**
::: code-group
<<< ../demo/Links.vue#iconify{vue-html}[Iconify]
<<< ../demo/Links.vue#svg{vue-html}[svg]
<<< ../demo/Links.vue#image{vue-html}[image]
:::

**Output**

<!--@include: ../demo/Links.vue#iconify-->
<!--@include: ../demo/Links.vue#svg-->
<!--@include: ../demo/Links.vue#image-->

### Parameter Description

| Field      | Type         | Description                                                                                                                           | Required               |
| ---------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `grid`     | `number`     | Number of grid columns. Default is single column, passing numbers like `3`, `4` can specify multiple columns.                       | <Badge text="Optional" /> |
| `name`     | `string`     | Name, used as display text.                                                                                                          | <Badge text="Required" /> |
| `desc`     | `string`     | Description text, used for supplementary information.                                                                                | <Badge text="Optional" /> |
| `link`     | `LinkType`   | Link address, supports internal paths or external URLs.                                                                              | <Badge text="Optional" /> |
| `linkText` | `string`     | Description text for the link address                                                                                                | <Badge text="Optional" /> |
| `rel`      | `RelType`    | The `rel` attribute of the link, recommended to set to `noopener noreferrer` for enhanced security.                                 | <Badge text="Optional" /> |
| `target`   | `TargetType` | Link target window. Default is determined by link address: external links default to open in new tab (`_blank`), internal links have no default value (`open in current page`). Can be customized to override this behavior. | <Badge text="Optional" /> |
| `icon`     | `IconType`   | Icon configuration, supports string or object, supports light/dark mode and color configuration. For details see [IconType](#IconType) | <Badge text="Optional" /> |
| `image`    | `ImageType`  | Image configuration, supports string or object, supports light/dark mode and cropping. For details see [ImageType](#ImageType)      | <Badge text="Optional" /> |
| `size`     | `SizeType`   | Controls the `width` and `height` of image or icon. Default value is `32`                                                            | <Badge text="Optional" /> |

## BoxCube

**Input**
::: code-group
<<< ../demo/BoxCube.vue#iconify{vue-html}[Iconify]
<<< ../demo/BoxCube.vue#svg{vue-html}[svg]
<<< ../demo/BoxCube.vue#image{vue-html}[image]
:::

**Output**

<!--@include: ../demo/BoxCube.vue#iconify-->
<!--@include: ../demo/BoxCube.vue#svg-->
<!--@include: ../demo/BoxCube.vue#image-->

### Parameter Description

| Field    | Type         | Description                                                                                                                           | Required               |
| -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `grid`   | `number`     | Number of grid columns. Default is `6` columns, passing numbers like `3`, `4` can specify multiple columns.                         | <Badge text="Optional" /> |
| `name`   | `string`     | Name, used as display text.                                                                                                          | <Badge text="Required" /> |
| `link`   | `LinkType`   | Link address, supports internal paths or external URLs.                                                                              | <Badge text="Optional" /> |
| `rel`    | `RelType`    | The `rel` attribute of the link, recommended to set to `noopener noreferrer` for enhanced security.                                 | <Badge text="Optional" /> |
| `target` | `TargetType` | Link target window. Default is determined by link address: external links default to open in new tab (`_blank`), internal links have no default value (`open in current page`). Can be customized to override this behavior. | <Badge text="Optional" /> |
| `icon`   | `IconType`   | Icon configuration, supports string or object, supports light/dark mode and color configuration. For details see [IconType](#IconType) | <Badge text="Optional" /> |
| `image`  | `ImageType`  | Image configuration, supports string or object, supports light/dark mode and cropping. For details see [ImageType](#ImageType)      | <Badge text="Optional" /> |
| `size`   | `SizeType`   | Controls the `width` and `height` of image or icon. Default value is `32`                                                            | <Badge text="Optional" /> |

## Card

**Input**

::: code-group
<<< ../demo/Card.vue#iconify{vue-html}[Iconify]
<<< ../demo/Card.vue#svg{vue-html}[svg]
<<< ../demo/Card.vue#image{vue-html}[image]
:::
**Output**

<!--@include: ../demo/Card.vue#iconify-->
<!--@include: ../demo/Card.vue#svg-->
<!--@include: ../demo/Card.vue#image-->

### Parameter Description

| Field    | Type         | Description                                                                                                                           | Required               |
| -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `grid`   | `number`     | Number of grid columns. Default is `4` columns, passing numbers like `2`, `3` can specify multiple columns.                         | <Badge text="Optional" /> |
| `name`   | `string`     | Name, used as display text.                                                                                                          | <Badge text="Optional" /> |
| `desc`   | `string`     | Description text, used for supplementary information.                                                                                | <Badge text="Optional" /> |
| `link`   | `LinkType`   | Link address, supports internal paths or external URLs.                                                                              | <Badge text="Optional" /> |
| `rel`    | `RelType`    | The `rel` attribute of the link, recommended to set to `noopener noreferrer` for enhanced security.                                 | <Badge text="Optional" /> |
| `target` | `TargetType` | Link target window. Default is determined by link address: external links default to open in new tab (`_blank`), internal links have no default value (`open in current page`). Can be customized to override this behavior. | <Badge text="Optional" /> |
| `icon`   | `IconType`   | Icon configuration, supports string or object, supports light/dark mode and color configuration. For details see [IconType](#IconType) | <Badge text="Optional" /> |
| `image`  | `ImageType`  | Image configuration, supports string or object, supports light/dark mode and cropping. For details see [ImageType](#ImageType)      | <Badge text="Optional" /> |
| `size`   | `SizeType`   | Controls the `width` and `height` of image or icon. Default value is `48`                                                            | <Badge text="Optional" /> |

<!--@include: ../demo/type.md-->
