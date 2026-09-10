---
sidebar_position: 3
title: 内容如何生产
description: Issue 捕获与 LLM 融入工作流
---

# 内容如何生产

## 工作流

1. **捕获**：想法写入 GitHub Issues（低摩擦收件箱）。
2. **整合**：LLM 阅读全库，把增量融入已有 Markdown（优先改页，少建页）。
3. **数据**：客观序列写入 `static/data/**/*.json`，由看板页渲染。
4. **发布**：推送到 `main` 后由 CI 构建。

```text
捕获（Issue） → LLM 审阅全库 → 融入已有 Markdown → PR 审阅 → 构建发布
```
