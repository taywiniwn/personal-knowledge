---
sidebar_position: 4
title: 技术架构
description: Docusaurus 静态站 + Markdown/Git + GitHub Actions。
---

# 技术架构

本站是基于 **Docusaurus 3** 的静态站点：没有管理后台、没有数据库、没有服务端动态语言。所有内容以 Markdown / MDX 存放在 Git 仓库，构建后产出纯静态文件。

## 为什么这样选

核心原因是 **AI 友好**：

- 内容是纯文本 Markdown，AI 可直接读取、撰写和重构
- 不需要穿过编辑器、数据库或后台接口
- Git 与 Pull Request 让每次改动可审阅、可回滚

## 内容与发布流程

1. 编辑 Markdown / 源码
2. 提交 Pull Request 或推送到 main
3. GitHub Actions 执行依赖安装与生产构建
4. 产出 build/ 静态文件，可部署到任意静态托管

## 仓库结构（要点）

| 路径 | 作用 |
| --- | --- |
| docs/ | 知识库正文（四大支柱 + 关于本站） |
| src/pages/ | 首页与自定义页面（如数据看板） |
| src/components/ | React 组件（图表等） |
| static/data/ | 结构化 JSON 数据 |
| .github/workflows/ | 推送构建流水线 |

## 本地命令

请参阅仓库根目录 README 中的脚本说明（install / start / build / serve）。

## 访问链路（典型）

用户经 HTTPS 访问静态托管（如 GitHub Pages / Nginx），直接获取静态文件。

源码仓库：https://github.com/taywiniwn/personal-knowledge
