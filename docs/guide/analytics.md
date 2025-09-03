---
title: Site Analytics Component - Analytics
description: Explore how to use the @theojs/thevite plugin to seamlessly integrate Google Analytics, Baidu Analytics, and Umami Analytics into your VitePress site. This guide will help you quickly configure and manage site analytics to effectively track and analyze website data.
---

# Site Analytics Component

This plugin integrates three common site analytics tools: **Google Analytics**, **Baidu Analytics**, and **Umami Analytics**, allowing you to easily integrate and manage these analytics tools in your VitePress website. Whether it's the powerful features of Google Analytics, Baidu Analytics' adaptation to the Chinese market, or Umami's privacy-friendly solution, they can all be quickly integrated and used through this plugin.

## Google Analytics - googleAnalytics

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
// [!code ++]
import { googleAnalytics } from '@theojs/TheVite'

export default {
  // [!code ++]
  enhanceApp: ({ app }) => {
    googleAnalytics({ id: 'G-******' }) // [!code ++]
  }
}
```

### Get Google Analytics ID

1. Visit <Pill icon="logos:google-analytics" name="Google Analytics" link="https://analytics.google.com/" /> website.
2. Log in to your Google Analytics account.
3. Create a new Google Analytics account, or select an existing account.
4. Click `Admin` in the bottom left corner.
5. Under the `Account` column, select your account.
6. Under the `Property` column, select your site, or create a new site.
7. In `Property Settings`, find `Tracking Info`.
8. Click `Tracking Code`, and you will see an ID similar to `G-XXXXXXX`.

**For detailed operations, see the official documentation:** <Pill icon="logos:google-analytics" name="Google Analytics Help" link="https://support.google.com/analytics/answer/9304153?hl=en" />

## Baidu Analytics - baiduAnalytics

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
// [!code ++]
import { baiduAnalytics, trackPageview } from '@theojs/thevite'

export default {
  // [!code ++]
  enhanceApp: ({ app }) => {
    baiduAnalytics({ baiduId: '******' }) // [!code ++]
    // [!code ++]
    if (typeof window !== 'undefined') {
      trackPageview('******', window.location.href) // [!code ++]
    } // [!code ++]
  }
}
```

### Get Baidu Analytics ID

1. Visit <Pill :icon="{ icon: 'ri:baidu-fill', color: '#2932E1' }" name="Baidu Analytics" link="https://tongji.baidu.com/" /> website.
2. Log in with your Baidu account or register a new account.
3. After logging in, click `My Reports` - `Settings` - `Website List` at the top of the page.
4. Add your website, select a category and save.
5. Get the tracking code and copy the ID part from `hm.js?******` in the link.

**For detailed operations, see the official documentation:** <Pill :icon="{ icon: 'ri:baidu-fill', color: '#2932E1' }" name="Baidu Analytics Official Documentation" link="https://tongji.baidu.com/web/help/article?id=175&type=0" />

## Umami - umamiAnalytics

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
// [!code ++]
import { umamiAnalytics } from '@theojs/TheVite'

export default {
  // [!code ++]
  enhanceApp: ({ app }) => {
    // [!code ++]
    umamiAnalytics({
      id: '***-***-***-***', // [!code ++]
      src: 'https://*******', // [!code ++]
      domains: 'your.domain.com' // [!code ++] Optional, refer to official configuration https://umami.is/docs/tracker-configuration#data-domains
    }) // [!code ++]
  }
}
```

### Get Umami Analytics ID

#### Self-hosted Umami

1. Refer to <Pill :icon="{ icon: 'simple-icons:umami', color: { light: '#000000', dark: '#ffffff' } }" name="Umami Documentation" link="https://umami.is/docs/guides/hosting" /> to set up an Umami server.
2. Log in to the Umami dashboard and create a new site.
3. Copy the site ID for configuration.

#### Using Public Umami Service

1. Use a third-party Umami public instance.
2. Get the site ID assigned by the public instance.

> Your Umami ID should look like: `123abc456def`

**Official Documentation and Resources:** <Pill :icon="{ icon: 'simple-icons:umami', color: { light: '#000000', dark: '#ffffff' } }" name="Umami Documentation" link="https://umami.is/docs/guides/hosting" /> <Pill :icon="{ icon: 'simple-icons:umami', color: { light: '#000000', dark: '#ffffff' } }" name="Umami Public Service" link="https://umami.is/" />
