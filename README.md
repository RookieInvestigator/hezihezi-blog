# 阳里禾子的博客

基于 [AstroPaper](https://github.com/satnaing/astro-paper) 主题的个人博客，部署在 Cloudflare Pages：https://blog.hezihezi.com

## 写文章

`src/content/posts/` 下新建 Markdown 文件：

```yaml
---
author: 阳里禾子
pubDatetime: 2026-09-09T00:00:00+08:00
title: 标题
slug: my-post
featured: false
draft: false
tags:
  - 标签
description: "一句话摘要。"
---
```

## 加作品

改 `src/data/works.ts`，照着注释模板复制一块。

## 本地开发

```bash
pnpm install
pnpm dev      # 预览
pnpm build    # 构建（顺带生成搜索索引）
```

## 上线

Cloudflare Pages 连本仓库（Git 集成，`main` 分支）：构建命令 `pnpm build`，输出目录 `dist`，环境变量 `NODE_VERSION=22`，自定义域名 `blog.hezihezi.com`。
