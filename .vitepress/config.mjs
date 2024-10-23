import { defineConfig } from "vitepress";
import { set_sidebar } from "../utils/auto_sidebar.mjs"; // 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Huang的文档网站",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: "文章标题",
    outline: [2, 6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "前端",
        items: [
          { text: "Vue", link: "/front-end/vue/测试.md" },
          { text: "React", link: "/markdown-examples" },
          { text: "面试题大全", link: "/markdown-examples" },
        ],
      },
      {
        text: "教程",
        items: [
          { text: "怎么搭建像我这样的网站?", link: "/markdown-examples" },
        ],
      },
      { text: "后端", link: "/markdown-examples" },
      { text: "Python", link: "/markdown-examples" },

      { text: "其他", link: "/markdown-examples" },
      { text: "数学", link: "/markdown-examples" },
    ],

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],
    // sidebar: { "/front-end/vue": set_sidebar("front-end/vue") },

    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    footer: {
      copyright: "Copyright @2024-present 黄家辉",
      poweredBy: "Powered by VitePress",
    },
  },
});
