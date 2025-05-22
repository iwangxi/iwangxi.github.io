---
home: true
modules:
  - BannerBrand
  - Blog
  - MdContent
  - Footer
bannerBrand:
  bgImage: '/bg.svg'
  title: "程序猿的笔记" # Changed
  description: "一个记录技术学习、问题解决和项目经验的个人博客。" # Changed
  tagline: "分享知识，记录成长。" # Changed
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

欢迎来到程序猿的笔记，一个基于 VuePress 和 vuepress-theme-reco 构建的博客。

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
