---
title: Quick Start
description: Quickly learn how to install and start using the @theojs/thevite plugin. This guide provides pnpm, npm and yarn installation commands, and outlines the entry points for core functional modules such as theme import, homepage customization, content components like notice bars, videos, comments, etc.
---

# Quick Start

## Installation

You can install the `@theojs/thevite` plugin through the following three package managers, choose the method you are familiar with

::: code-group

```sh [pnpm]
pnpm add @theojs/thevite
```

```sh [npm]
npm install @theojs/thevite
```

```sh [yarn]
yarn add @theojs/thevite
```

:::

## Main Feature Modules Navigation

The following are the core feature module entry points of the `@theojs/thevite` plugin, click to view detailed configuration and usage

<BoxCube
  :items="[
    { icon: { icon: 'heroicons:puzzle-piece', color: '#ff9800' }, name: 'Import Theme', link: 'theme' },
    { icon: { icon: 'heroicons:megaphone', color: '#e74c3c' }, name: 'Homepage Notice', link: 'notice' },
    { icon: { icon: 'heroicons:paint-brush', color: '#3498db' }, name: 'Homepage Underline', link: 'underline' },
    { icon: { icon: 'heroicons-outline:template', color: '#2ecc71' }, name: 'Footer Config', link: 'footer' },
    { icon: { icon: 'heroicons:bars-3', color: '#9b59b6' }, name: 'Sidebar Links', link: 'aside' },
    { icon: { icon: 'heroicons:rectangle-group', color: '#1abc9c' }, name: 'Link Cards', link: 'linkcard' },
    { icon: { icon: 'heroicons:photo', color: '#2ecc71' }, name: 'Image Description', link: 'image-description' },
    { icon: { icon: 'heroicons-outline:chat', color: '#3498db' }, name: 'Integrate Comments', link: 'comment' },
    { icon: { icon: 'heroicons:chart-bar-square', color: '#007bff' }, name: 'Site Analytics', link: 'analytics' },
    { icon: { icon: 'heroicons-outline:clipboard-copy', color: '#20c997' }, name: 'Copy Button', link: 'copy-text' }
  ]"
/>
