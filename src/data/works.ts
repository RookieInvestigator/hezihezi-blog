export interface Work {
  title: string;
  description: string;
  /** 封面图（站内路径或完整 URL），缺省时显示渐变占位 */
  cover?: string;
  demo?: string;
  repo?: string;
  tech: string[];
  period?: string;
}

export const works: Work[] = [
  {
    title: "中文兔子洞冰山图",
    description:
      "社区共建的中文互联网怪谈、都市传说档案：1432 个词条的冰山图目录，含 3D 冰山、古籍线装书、术语表多视角浏览，收藏 / 评论 / 全文搜索一应俱全。",
    cover: "https://iceberg.hezihezi.com/og-cover.png",
    demo: "https://iceberg.hezihezi.com",
    repo: "https://github.com/RookieInvestigator/iceberg_reforged",
    tech: ["Vue 3", "Three.js", "Tailwind CSS", "Supabase"],
    period: "2025 — 至今",
  },
  // 加新作品照着下面复制一块：
  // {
  //   title: "作品名",
  //   description: "一句话介绍。",
  //   demo: "https://example.com",
  //   repo: "https://github.com/RookieInvestigator/xxx",
  //   tech: ["Astro", "TypeScript"],
  //   period: "2026",
  // },
];
