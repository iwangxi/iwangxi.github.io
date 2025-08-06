import { defineUserConfig } from "vuepress";
// import type { DefaultThemeOptions } from "vuepress"; // This line seems unused, consider removing if not needed for custom theme options
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "程序猿的VLOG", // Changed from "iwangxi Blog"
  description: "Just to study", // Keeping this as is, can be changed later if needed
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/pixel-logo.svg",
    author: "程序猿", // 像素游戏风格作者名
    authorAvatar: "/pixel-avatar.svg", // 像素风格头像
    docsRepo: "https://github.com/iwangxi", // Keeping this as is
    docsBranch: "main", // Keeping this as is
    docsDir: "example", // Keeping this as is, likely refers to a directory for documentation content
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      // Existing series, keeping them for now
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
      // Adding new series for the blog categories
      // It's assumed that the theme will pick up posts from these directories.
      // Empty arrays for children are fine for now.
      "/blogs/technical-tutorials/": [],
      "/blogs/problem-solving/": [],
      "/blogs/tool-sharing/": [],
      "/blogs/project-showcases/": [],
      "/blogs/algorithm-learning/": [],
    },
    navbar: [
      { text: "Home", link: "/" },
      // New blog categories
      { text: "技术教程", link: "/blogs/technical-tutorials/" },
      { text: "问题解决", link: "/blogs/problem-solving/" },
      { text: "工具分享", link: "/blogs/tool-sharing/" },
      { text: "项目实战", link: "/blogs/project-showcases/" },
      { text: "算法学习", link: "/blogs/algorithm-learning/" },
      // Keeping Tags link
      { text: "Tags", link: "/tags/tag1/1/" }, // This link might need adjustment later depending on how tags are handled with new content
      // Removing the old "Categories" link
      // Keeping the "Docs" link structure for now, but the links might need to be updated
      // to point to actual relevant documentation if it exists or is created.
      // If not, this "Docs" menu can be removed or simplified.
      {
        text: "Docs",
        children: [
          { text: "vuepress-reco", link: "/docs/theme-reco/theme" }, // Example, might be old
          // { text: "vuepress-theme-reco", link: "/blogs/other/guide" }, // Example, might be old or to be removed
        ],
      },
    ],
    // bulletin and valineConfig are commented out, keeping them as is.
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
});
