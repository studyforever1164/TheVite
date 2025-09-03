import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '<iconify-icon class="i-mr" icon="heroicons:rocket-launch" style="color:#20c997"></iconify-icon>Quick Start',
    link: '/guide/getting-started'
  },
  {
    text: '<iconify-icon class="i-mr" icon="heroicons:wrench-screwdriver" style="color:#3498db"></iconify-icon>Configuration',
    link: '/guide/theme'
  },
  {
    text: '<iconify-icon class="i-mr" icon="heroicons:chat-bubble-left-right" style="color:#e74c3c"></iconify-icon>Submit Feedback',
    link: 'https://github.com/s-theo/thevite/issues'
  },
  {
    text: '<iconify-icon class="i-mr" icon="heroicons:document-magnifying-glass" style="color:#f39c12"></iconify-icon>Changelog',
    link: 'https://github.com/s-theo/thevite/releases'
  }
]
