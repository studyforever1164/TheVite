---
title: Sidebar Links Component - Aside
description: Learn how to use the Aside component from @theojs/TheVite plugin to add custom links, promotional information, or brand logos to the sidebar of your VitePress site. This guide will walk you through configuring data and integrating the component to enrich sidebar content and enhance user experience.
head:

---

# Sidebar Links Component - Aside



## Create Data (Click to Open and View)

::: details Create a new `data/AsideData.ts` file in the `.vitepress` directory and add the following content:
<<< ../demo/AsideData.ts[.vitepress/data/AsideData.ts]
:::

::: details Or support `i18n`
<<< ../demo/AsideData_i18n.ts[.vitepress/data/AsideData_i18n.ts]
:::

## Import Component

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
// [!code ++]
import { h } from 'vue'
// [!code ++]
import { Aside } from '@theojs/TheVite'
// [!code ++]
import { Aside_Data } from '../data/AsideData'

export default {
  extends: DefaultTheme,
  Layout() {
    // [!code ++]
    return h(DefaultTheme.Layout, null, {
      // [!code ++]
      'aside-ads-before': () => h(Aside, { Aside_Data })
    }) // [!code ++]
  } // [!code ++]
}
```

## Data Interface Description

### Promo

| Field    | Type         | Description                                                                                                                                             | Required               |
| -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `promo`  | `string`     | Promotional title, e.g., `"Limited Time Discount"`.                                                                                                   | <Badge text="Required" /> |
| `link`   | `LinkType`   | Jump link, supports external or internal addresses.                                                                                                    | <Badge text="Optional" /> |
| `rel`    | `RelType`    | The `rel` attribute of the link, recommended to set to `noopener noreferrer` for enhanced security.                                                   | <Badge text="Optional" /> |
| `target` | `TargetType` | Link target window. Default is determined by link address: external links default to open in new tab (`_blank`), internal links have no default value (`open in current page`). Can be customized to override this behavior. | <Badge text="Optional" /> |
| `icon`   | `IconType`   | Icon configuration, supports string or object, supports light/dark mode and color configuration. For details see [IconType](#IconType)              | <Badge text="Optional" /> |
| `image`  | `ImageType`  | Image configuration, supports string or object, supports light/dark mode and cropping. For details see [ImageType](#ImageType)                       | <Badge text="Optional" /> |
| `size`   | `SizeType`   | Controls the `width` and `height` of image or icon. Default value is `32`                                                                              | <Badge text="Optional" /> |
| `info1`  | `string`     | Additional information 1, e.g., `"New users get 5 yuan off"`.                                                                                         | <Badge text="Optional" /> |
| `info2`  | `string`     | Additional information 2, e.g., `"Offer expires June 30"`.                                                                                            | <Badge text="Optional" /> |

### Normal

| Field    | Type         | Description                                                                                                                                             | Required               |
| -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `name`   | `string`     | Display name, e.g., `"Bilibili"`.                                                                                                                     | <Badge text="Required" /> |
| `link`   | `LinkType`   | Jump link, supports external or internal addresses.                                                                                                    | <Badge text="Optional" /> |
| `rel`    | `RelType`    | The `rel` attribute of the link, recommended to set to `noopener noreferrer` for enhanced security.                                                   | <Badge text="Optional" /> |
| `target` | `TargetType` | Link target window. Default is determined by link address: external links default to open in new tab (`_blank`), internal links have no default value (`open in current page`). Can be customized to override this behavior. | <Badge text="Optional" /> |
| `icon`   | `IconType`   | Icon configuration, supports string or object, supports light/dark mode and color configuration. For details see [IconType](#IconType)              | <Badge text="Optional" /> |
| `image`  | `ImageType`  | Image configuration, supports string or object, supports light/dark mode and cropping. For details see [ImageType](#ImageType)                       | <Badge text="Optional" /> |
| `size`   | `SizeType`   | Controls the `width` and `height` of image or icon. Default value is `32`                                                                              | <Badge text="Optional" /> |
| `hide1`  | `string`     | Hidden information 1, displayed on hover. E.g., `"For Mainland China users only"`.                                                                   | <Badge text="Optional" /> |
| `hide2`  | `string`     | Hidden information 2, for additional tips. E.g., `"Limited to 500 users daily"`.                                                                     | <Badge text="Optional" /> |

### AsidePromo

| Field  | Type                                                | Description                                                                                                         | Required               |
| ------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| ...    | Same as `Promo` interface                           | Same as above, fields are not repeated here.                                                                       | -                      |
| `i18n` | `Partial<Record<string, Omit<AsidePromo, 'i18n'>>>` | Optional multilingual translation field (key is language code like `zh`, `en`), excluding self-recursive structure. | <Badge text="Optional" /> |

### AsideNormal

| Field  | Type                                                 | Description                                                                                                         | Required               |
| ------ | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| ...    | Same as `Normal` interface                           | Same as above, fields are not repeated here.                                                                       | -                      |
| `i18n` | `Partial<Record<string, Omit<AsideNormal, 'i18n'>>>` | Optional multilingual translation field (key is language code like `zh`, `en`), excluding self-recursive structure. | <Badge text="Optional" /> |

### AsideAll

| Type          | Description                                                                |
| ------------- | -------------------------------------------------------------------------- |
| `AsidePromo`  | Represents promotional activity type, containing `promo`, `info1` fields. |
| `AsideNormal` | Represents normal display item, only has basic information fields like `name`, `link`. |

### AsideItem

| Structure Form    | Type                                   | Description                                                                                                        |
| ----------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Single language   | `AsideAll[]`                           | Directly use an array composed of `AsidePromo` or `AsideNormal`.                                                  |
| Multilingual      | `{ i18n: Record<string, AsideAll[]> }` | Object wrapped with `i18n`, different languages correspond to different arrays, like `{ i18n: { root: [], en: [] } }`. |

<!--@include: ../demo/type.md-->
