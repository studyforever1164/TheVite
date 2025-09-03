---
title: Homepage Notice Bar Component - Notice
description: Learn how to use the @theojs/TheVite plugin to add an eye-catching notice bar component to your VitePress website homepage. Easily configure and display event information, important notifications or quick installation commands to effectively improve homepage interactivity and information delivery efficiency.
head:
---

# Homepage Notice Bar Component - Notice



## Import Component

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
// [!code ++]
import { h } from 'vue'
// [!code ++]
import { Notice } from '@theojs/TheVite'

export default {
  extends: DefaultTheme,
  // [!code ++]
  Layout() {
    // [!code ++]
    return h(DefaultTheme.Layout, null, {
      // [!code ++]
      'home-hero-info-before': () => h(Notice)
    }) // [!code ++]
  } // [!code ++]
}
```

## Configure Notice Bar

```yaml{4-12} [.vitepress/index.md]
---
layout: home
hero:
  Notice:
    title: '🎉 Endless Activities, QYT 4th Anniversary Christmas & New Year Special'
    desc: | # Support YAML line breaks, maintain multi-line format
      · Monthly/Quarterly/Half-yearly <span class="promo-text">15% off: wuyi85</span>
      · Annual and above <span class="promo-text">36% off: wuyi80</span>
    date: 'January 7, 2025 23:59'
    dateIcon: 'mdi:calendar-star'
    dateText: 'Activity Deadline'
    link: 'https://itheo.top/qyt'
---
```

## Data Interface Description

| Field       | Type         | Description                                                                                                    | Required               |
| ----------- | ------------ | -------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `link`      | `LinkType`   | Link address, target URL to jump to when clicked.                                                             | <Badge text="Optional" /> |
| `rel`       | `RelType`    | The `rel` attribute of the link, used to control link security and behavior, such as preventing security risks when opening new windows (`noopener`) and avoiding search engine tracking (`nofollow`). | <Badge text="Optional" /> |
| `target`    | `TargetType` | Link target window. Default is determined by link address: external links default to open in new tab (`_blank`), internal links have no default value (`open in current page`). Can be customized to override this behavior. | <Badge text="Optional" /> |
| `title`     | `string`     | Title text displayed for the link, the main content to be highlighted.                                        | <Badge text="Required" /> |
| `desc`      | `string`     | Supplementary description content below the link, can be used for detailed explanation or additional information. | <Badge text="Optional" /> |
| `date`      | `string`     | Activity deadline or related time information, usually used to remind of validity period.                      | <Badge text="Optional" /> |
| `dateText`  | `string`     | Text description for activity time, defaults to `Activity Time: From now until`, customizable display text.    | <Badge text="Optional" /> |
| `dateIcon`  | `IconType`   | Icon configuration, supports string or object, supports light/dark mode and color configuration. Mutually exclusive with `dateImage`. If both `dateIcon` and `dateImage` are undefined, the component will display the default icon `'heroicons:calendar-days'`. For details see [IconType](#IconType) | <Badge text="Optional" /> |
| `dateImage` | `ImageType`  | Image configuration, supports string or object, supports light/dark mode and cropping. Mutually exclusive with `dateIcon`. If both `dateIcon` and `dateImage` are undefined, the component will display the default icon `'heroicons:calendar-days'`. For details see [ImageType](#ImageType) | <Badge text="Optional" /> |

<!--@include: ../demo/type.md-->
