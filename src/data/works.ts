export interface Work {
  title: string;
  description: string;
  /** 封面图（站内路径或完整 URL），缺省时只显示文字 */
  cover?: string;
  demo?: string;
  repo?: string;
  /** 这个作品的关键词，例如「亚文化爱好」「氛围编程」 */
  tags: string[];
  period?: string;
  /** 担任的角色，例如「内容贡献 · 网站制作」 */
  role?: string;
}

export const works: Work[] = [
  {
    title: "中文兔子洞冰山图（重制版）",
    description: "社区共建的中文怪谈、都市传说、未解之谜与冷知识档案。",
    demo: "https://iceberg.hezihezi.com",
    repo: "https://github.com/RookieInvestigator/iceberg_reforged",
    tags: ["亚文化爱好", "氛围编程"],
    period: "2026 — 至今",
    role: "内容贡献 · 网站制作",
  },
  // 加新作品照着下面复制一块：
  // {
  //   title: "作品名",
  //   description: "一句话介绍。",
  //   demo: "https://example.com",
  //   repo: "https://github.com/RookieInvestigator/xxx",
  //   tags: ["关键词"],
  //   period: "2026",
  //   role: "",
  // },
];
