import { defineConfig } from 'vitepress'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import llmstxt from 'vitepress-plugin-llms'
import Lumenpkg from '@theojs/lumen/package.json' with { type: 'json' }
import { head, markdown, nav, search, sidebar, socialLinks, transformPageData } from './configs'

const Lumenversion = `v` + Lumenpkg.version
const baseUrl = 'https://thevite.theojs.cn'

export default defineConfig({
  // Site name
  title: 'TheVite',

  // Site description
  description: '✨ Theme beautification and Vue extension component library designed for VitePress',

  // Site language
  lang: 'en',

  // Clean URLs (no '.html' suffix)
  cleanUrls: true,

  // Last updated timestamp
  lastUpdated: true,

  // Extract meta info as separate chunk
  metaChunk: true,

  // Sitemap
  sitemap: { hostname: baseUrl },

  // Website head
  head,

  // Markdown configuration
  markdown,

  // Dynamically generate meta tags and JSON-LD data
  transformPageData,

  // Vue configuration
  vue: {
    template: {
      compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' }
    }
  },

  // Vite configuration
  vite: {
    plugins: [
      // @ts-ignore: 使用 rolldown-vite 时类型不兼容 vite，但运行正常
      groupIconVitePlugin({
        customIcon: {
          按需导入: 'logos:typescript-icon',
          全量导入: 'logos:typescript-icon',
          单独导入: 'logos:typescript-icon',
          svg: 'logos:svg',
          image: 'vscode-icons:file-type-image',
          '.vitepress': 'https://vitepress.dev/vitepress-logo-mini.svg',
          iconify: 'https://i.theojs.cn/logo/iconify.svg'
        }
      }), // @ts-ignore
      llmstxt({})
    ]
  },

  themeConfig: {
    // Site title
    siteTitle: `TheVite <code class="VPBadge tip">${Lumenversion}</code>`,

    // Logo
    logo: {
      src: 'https://i.theojs.cn/logo/thevite-logo-mini.svg',
      width: 24,
      height: 24,
      alt: 'TheVite',
      fetchpriority: 'high'
    },

    // Edit link
    editLink: { pattern: 'https://github.com/s-theo/thevite/edit/main/docs/:path', text: 'Suggest changes to this page' },

    // Table of contents settings
    outline: 'deep', // Index level
    outlineTitle: 'On This Page', // TOC text

    // Last updated
    lastUpdatedText: 'Last updated',

    // Article pagination
    docFooter: { prev: 'Previous', next: 'Next' },

    // Mobile - back to top
    returnToTopLabel: 'Back to top',

    // Mobile - menu
    sidebarMenuLabel: 'Articles',

    // Theme mode toggle
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme',
    darkModeSwitchLabel: 'Theme mode',

    // Markdown external link icon
    externalLinkIcon: true,

    // Language toggle
    langMenuLabel: 'Change language',

    // Navigation bar
    nav,

    // Sidebar
    sidebar,

    // Social links
    socialLinks,
    // Search configuration
    search: { provider: 'algolia', options: search },

    // 404 configuration
    notFound: {
      title: 'Page not found',
      quote: 'The page has disappeared, perhaps it went looking for new adventures!',
      linkLabel: 'Go to homepage to explore again',
      linkText: 'Go to homepage',
      code: '404'
    }
  }
})
