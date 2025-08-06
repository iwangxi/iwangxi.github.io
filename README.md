---
home: true
modules:
  - BannerBrand
  - Blog
  - MdContent
  - Footer
bannerBrand:
  bgImage: '/pixel-bg.svg'
  title: "程序猿的VLOG" # 像素游戏风格
  description: "🎮 一个像素风格的技术博客，记录编程冒险和代码探索！" # 像素游戏风格描述
  tagline: ">>> PRESS START TO CODE <<<" # 像素游戏风格标语
  buttons:
    - { text: Guide, link: '/docs/guide/introduce' } # Kept as is, may need review later
    - { text: Default Style, link: '/docs/style-default-api/introduce', type: 'plain' } # Kept as is, may need review later
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/iwangxi' } # Updated
blog:
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/iwangxi' } # Updated
isShowTitleInHome: true
actionText: About # Kept as is, may need review later
actionLink: /views/other/about # Kept as is, may need review later
---

🎮 欢迎来到程序猿的VLOG，一个像素风格的技术博客！

## 🕹️ 游戏开始

这是一个充满复古魅力的像素风格技术博客，就像经典的8位游戏一样，每一篇文章都是一次新的冒险！

### 🎯 特色功能

- 🎨 **像素艺术风格**：完全的8位游戏视觉体验
- 🎮 **复古交互**：像素化的按钮和动画效果
- 🌈 **经典配色**：经典游戏调色板
- ⚡ **现代技术**：基于 VuePress 2.x 构建

## 快速开始

**npx**

```bash
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
```

**npm**

```bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
```

**yarn**

```bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
```
