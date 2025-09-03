---
title: Footer Component - Footer
description: Learn how to use the Footer component from the @theojs/TheVite plugin to customize your VitePress website footer. This guide includes data configuration (link groups, filing information, author) and component integration steps to help you create a personalized and informative website footer.
head:

---

# Footer Component - Footer


## Create Data (Click to expand)

::: details Create a new `data/FooterData.ts` file in the `.vitepress` directory and add the following content:
<<< ../demo/FooterData.ts[.vitepress/data/FooterData.ts]
:::

::: details Or support `i18n`
<<< ../demo/FooterData_i18n.ts[.vitepress/data/FooterData_i18n.ts]
:::

## Import Component

::: tip
`.. /data/footerData` can be replaced with the path where the data is stored
:::

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
// [!code ++]
import { h } from 'vue'
// [!code ++]
import { Footer } from '@theojs/TheVite'
// [!code ++]
import { Footer_Data } from '../data/footerData'

export default {
  extends: DefaultTheme,
  // [!code ++]
  Layout() {
    // [!code ++]
    return h(DefaultTheme.Layout, null, {
      // [!code ++]
      'layout-bottom': () => h(Footer, { Footer_Data })
    }) // [!code ++]
  } // [!code ++]
}
```

## Data Interface Description

### `FooterData` Interface

`FooterData` is the top-level interface for all components, containing the following fields:

| Field    | Type                                                | Description                                                                                              | Required               |
| -------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------- |
| `i18n`   | `Record<string, Partial<Omit<FooterData, 'i18n'>>>` | Multi-language data configuration                                                                        | <Badge text="Optional" /> |
| `group`  | `Group[]`                                           | Link group array, supports multiple group configurations, each group contains title, icon, links, etc. | <Badge text="Optional" /> |
| `beian`  | `Beian`                                             | ICP filing and public security filing configuration, used to display website filing compliance information. | <Badge text="Optional" /> |
| `author` | `Author`                                            | Author information display, including author name, link and copyright icon, commonly used for footer attribution identification. | <Badge text="Optional" /> |
| `noIcon` | `boolean`                                           | Whether to hide external link icons for all external links                                              | <Badge text="Optional" /> |

### `Group` Interface

The `Group` interface defines a link group, including the group's icon, title, and multiple links beneath it.

| Field    | Type        | Description                                                                                              | Required              |
| -------- | ----------- | -------------------------------------------------------------------------------------------------------- | --------------------- |
| `noIcon` | `boolean`   | Whether to hide external link icons for all external links in this group                                | <Badge text="Optional" /> |
| `icon`   | `IconType`  | Icon configuration, supports string or object, supports light/dark mode and color configuration. Mutually exclusive with `image`. See [IconType](#IconType) for details | <Badge text="Optional" /> |
| `image`  | `ImageType` | Image configuration, supports string or object, supports light/dark mode and cropping configuration. Mutually exclusive with `icon`. See [ImageType](#ImageType) for details | <Badge text="Optional" /> |
| `title`  | `string`    | Group title, displayed as the name of this link group.                                                  | <Badge text="Required" /> |
| `links`  | `Link[]`    | Array of links within the group, see [Link Interface](#link-interface) below.                          | <Badge text="Required" /> |

### `Link` Interface

The `Link` interface is used to describe specific link information, including the link's icon, style, name, address, and opening method.

| Field    | Type         | Description                                                                                                                            | Required              |
| -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `noIcon` | `boolean`    | Whether to hide the external link icon for this link                                                                                  | <Badge text="Optional" /> |
| `icon`   | `IconType`   | Icon configuration, supports string or object, supports light/dark mode and color configuration. Mutually exclusive with `image`. See [IconType](#IconType) for details | <Badge text="Optional" /> |
| `image`  | `ImageType`  | Image configuration, supports string or object, supports light/dark mode and cropping configuration. Mutually exclusive with `icon`. See [ImageType](#ImageType) for details | <Badge text="Optional" /> |
| `name`   | `string`     | The text displayed for the link.                                                                                                      | <Badge text="Required" /> |
| `link`   | `string`     | Link address, can be an external URL or internal path, such as `/docs`.                                                               | <Badge text="Required" /> |
| `rel`    | `RelType`    | Sets the `rel` attribute of the link, commonly used for security or SEO considerations like `noopener noreferrer`.                   | <Badge text="Optional" /> |
| `target` | `TargetType` | Target window for the link. Default behavior is determined by link address: external links default to new tab (`_blank`), internal links have no default (open in current page). This behavior can be customized. | <Badge text="Optional" /> |

### `Beian` Interface

The `Beian` interface is used to represent filing information, including ICP filing number, police filing number, and whether to display filing icons.

| Field      | Type      | Description                                                           | Required              |
| ---------- | --------- | --------------------------------------------------------------------- | --------------------- |
| `icp`      | `Icp`     | ICP filing information configuration.                                | <Badge text="Optional" /> |
| `police`   | `Police`  | Police filing information configuration.                             | <Badge text="Optional" /> |
| `showIcon` | `boolean` | Whether to display ICP and police filing icons, default is `false`, when enabled will render icons/images. | <Badge text="Optional" /> |

#### `Icp` Interface

The `Icp` interface represents ICP filing information.

| Field    | Type                  | Description                                                                                                                                                                                             | Required              |
| -------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `number` | `string`              | ICP filing number text, e.g., `粤ICP备88888888号`, can also be used for other similar custom text purposes.                                                                                            | <Badge text="Optional" /> |
| `link`   | `LinkType`            | Link to MIIT website filing system, default: `https://beian.miit.gov.cn/`, supports customization                                                                                                      | <Badge text="Optional" /> |
| `icon`   | `IconType`            | Icon configuration, supports string or object, supports light/dark mode and color configuration. Mutually exclusive with `image`. Default icon will be displayed when both are unset. See [IconType](#IconType) for details | <Badge text="Optional" /> |
| `image`  | `ImageType`           | Image configuration, supports string or object, supports light/dark mode and cropping configuration. Mutually exclusive with `icon`. Default icon will be displayed when both are unset. See [ImageType](#ImageType) for details | <Badge text="Optional" /> |
| `rel`    | `RelType`\|`nofollow` | Sets the `rel` attribute of the link, commonly used for security or SEO considerations like `noopener noreferrer`. (Since the default link is `https://beian.miit.gov.cn/` but this site has `HTTP 521` errors, it defaults to `nofollow` to avoid potential SEO risks.) | <Badge text="Optional" /> |
| `target` | `TargetType`          | Target window for the link. Default behavior is determined by link address: external links default to new tab (`_blank`), internal links have no default (open in current page). This behavior can be customized. | <Badge text="Optional" /> |

#### `Police` Interface

The `Police` interface represents police filing information.

| Field    | Type         | Description                                                                                                                            | Required              |
| -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `number` | `string`     | Police filing number text, e.g., `粤公网安备 88888888888888 号`, used to display police authority filing information, can also be used for other similar custom text purposes. | <Badge text="Optional" /> |
| `link`   | `LinkType`   | Query link corresponding to the police filing number, default: `https://beian.mps.gov.cn/`, supports customization                   | <Badge text="Optional" /> |
| `icon`   | `IconType`   | Icon configuration, supports string or object, supports light/dark mode and color configuration. Mutually exclusive with `image`. Default icon will be displayed when both are unset. See [IconType](#IconType) for details | <Badge text="Optional" /> |
| `image`  | `ImageType`  | Image configuration, supports string or object, supports light/dark mode and cropping configuration. Mutually exclusive with `icon`. Default icon will be displayed when both are unset. See [ImageType](#ImageType) for details | <Badge text="Optional" /> |
| `rel`    | `RelType`    | Sets the `rel` attribute of the link, commonly used for security or SEO considerations like `noopener noreferrer`.                   | <Badge text="Optional" /> |
| `target` | `TargetType` | Target window for the link. Default behavior is determined by link address: external links default to new tab (`_blank`), internal links have no default (open in current page). This behavior can be customized. | <Badge text="Optional" /> |

### `Author` Interface

The `Author` interface represents author information, including author name and link.

| Field       | Type         | Description                                                                                                                               | Required              |
| ----------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `icon`      | `IconType`   | Copyright icon configuration, supports string or object, supports light/dark mode and color configuration. Mutually exclusive with `image`. Default icon will be displayed when both are unset. See [IconType](#IconType) for details | <Badge text="Optional" /> |
| `image`     | `ImageType`  | Copyright image configuration, supports string or object, supports light/dark mode and cropping configuration. Mutually exclusive with `icon`. Default icon will be displayed when both are unset. See [ImageType](#ImageType) for details | <Badge text="Optional" /> |
| `startYear` | `number`     | Starting year of copyright, represents the year when the author first owned copyright or when copyright began to take effect. If not provided, no year range will be displayed. | <Badge text="Optional" /> |
| `name`      | `string`     | Name of the author or site owner, will be displayed in the footer.                                                                       | <Badge text="Optional" /> |
| `link`      | `LinkType`   | Author link address, if not filled in, defaults to `https://github.com/${name}`.                                                        | <Badge text="Optional" /> |
| `rel`       | `RelType`    | Sets the `rel` attribute of the link, commonly used for security or SEO considerations like `noopener noreferrer`.                      | <Badge text="Optional" /> |
| `target`    | `TargetType` | Target window for the link. Default behavior is determined by link address: external links default to new tab (`_blank`), internal links have no default (open in current page). This behavior can be customized. | <Badge text="Optional" /> |
| `text`      | `string`     | Copyright statement ending text, displayed after the author name. This text can be customized, default value is `All Rights Reserved.`. | <Badge text="Optional" /> |

<!--@include: ../demo/type.md-->
