---
sidebar_position: 4
title: 技术架构
description: Docusaurus 静态站 + Markdown/Git + CI
---

# 技术架构

基于 **Docusaurus 3** 的静态站点：内容为 Markdown（Git），无 CMS / 数据库。

| 路径 | 作用 |
| --- | --- |
| docs/ | 知识库正文（四大支柱 + 关于本站） |
| src/pages/ | 首页与自定义页面（如数据看板） |
| src/components/ | React 组件 |
| static/data/ | 结构化 JSON 数据 |
| .github/workflows/ | 推送构建流水线 |

本地命令见仓库根目录 README。源码：https://github.com/taywiniwn/personal-knowledge
