import type { DefaultTheme } from 'vitepress'

type SidebarItem = DefaultTheme.SidebarItem

export const sidebar: DefaultTheme.SidebarMulti = {
  '/guide/': { base: '/guide/', items: guide() }
}

export function guide(): SidebarItem[] {
  return [
    {
      // text: 'Quick Start',
      items: [
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:rocket-launch" style="color:#20c997"></iconify-icon>Quick Start',
          link: 'getting-started'
        }
      ]
    },
    {
      text: '<iconify-icon class="i-mr" icon="heroicons:wrench-screwdriver" style="color:#3498db"></iconify-icon>Configuration',
      items: [
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:puzzle-piece" style="color:#ff9800"></iconify-icon>Import Theme',
          link: 'theme'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:megaphone" style="color:#e74c3c"></iconify-icon>Homepage Notice',
          link: 'notice'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:paint-brush" style="color:#3498db"></iconify-icon>Homepage Underline',
          link: 'underline'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons-outline:template" style="color:#2ecc71"></iconify-icon>Footer Configuration',
          link: 'footer'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:bars-3" style="color:#9b59b6"></iconify-icon>Sidebar Links',
          link: 'aside'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:rectangle-group" style="color:#1abc9c"></iconify-icon>Link Cards',
          link: 'linkcard'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:photo" style="color:#2ecc71"></iconify-icon>Image Description',
          link: 'image-description'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons-outline:chat" style="color:#3498db"></iconify-icon>Integrate Comments',
          link: 'comment'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:chart-bar-square" style="color:#007bff"></iconify-icon>Site Analytics',
          link: 'analytics'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons-outline:clipboard-copy" style="color:#20c997"></iconify-icon>Copy Button',
          link: 'copy-text'
        }
      ]
    }
  ]
}
