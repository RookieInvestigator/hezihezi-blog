import type { UIStrings } from "../types";

export default {
  nav: {
    home: "首页",
    posts: "文章",
    tags: "标签",
    works: "作品",
    stats: "统计",
    about: "关于",
    archives: "归档",
    search: "搜索",
  },
  post: {
    publishedAt: "发布于",
    updatedAt: "更新于",
    sharePostIntro: "分享这篇文章：",
    sharePostOn: "分享到 {{platform}}",
    sharePostViaEmail: "通过邮件分享",
    tagLabel: "标签",
    backToTop: "回到顶部",
    goBack: "返回",
    editPage: "编辑本页",
    previousPost: "上一篇",
    nextPost: "下一篇",
  },
  pagination: {
    prev: "上一页",
    next: "下一页",
    page: "页",
  },
  home: {
    socialLinks: "社交链接",
    featured: "精选",
    recentPosts: "最新文章",
    allPosts: "全部文章",
  },
  footer: {
    copyright: "版权所有",
    allRightsReserved: "保留所有权利。",
  },
  pages: {
    tagTitle: "标签",
    tagDesc: "该标签下的全部文章",

    tagsTitle: "标签",
    tagsDesc: "全部文章使用过的标签。",

    postsTitle: "文章",
    postsDesc: "我发布过的全部文章。",

    archivesTitle: "归档",
    archivesDesc: "按时间归档的全部文章。",

    searchTitle: "搜索",
    searchDesc: "搜索任意文章……",

    statsTitle: "统计",
    statsDesc: "这个博客的数据一览。",

    worksTitle: "作品",
    worksDesc: "做过的东西，挑能看的放这里。",
    worksStack: "技术栈",
    worksViewDemo: "在线演示",
    worksViewRepo: "源代码",
  },
  stats: {
    posts: "文章",
    words: "总字数",
    tags: "标签",
    days: "写作天数",
    byMonth: "近一年发文",
    tagCloud: "标签云",
  },
  a11y: {
    skipToContent: "跳到正文",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    toggleTheme: "切换主题",
    searchPlaceholder: "搜索文章……",
    noResults: "没有找到结果",
    goToPreviousPage: "去上一页",
    goToNextPage: "去下一页",
  },
  notFound: {
    title: "404 未找到",
    message: "页面不存在",
    goHome: "回首页",
  },
} satisfies UIStrings;
