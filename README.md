# 个人知识库

基于 Docusaurus 3 的个人活知识库骨架（FEEI.CN 式架构方案的原创实现）。

四大支柱：**健康 · 事业 · 财务 · 人生体验**。内容以 Markdown 存放于 Git，无 CMS / 数据库。

> 本仓库为原创占位内容与工作流脚手架，未复制任何第三方站点的专有文案。

## 本地运行

需要 Node.js 20+。在仓库根目录：

```bash
npm install
npm start
npm run build
npm run serve
```

亦可用 Bun（本环境已验证）：

```bash
bun install
bun run build
```

产物目录为 `build/`。默认 `baseUrl` 为 `/personal-knowledge/`（适合 GitHub Pages 项目站）；若托管在域名根路径，请将 `docusaurus.config.ts` 中的 `baseUrl` 改为 `/`。

## 脚本一览（package.json）

| 脚本 | 说明 |
| --- | --- |
| start | 本地开发服务器 |
| build | 生产构建 |
| serve | 预览构建结果 |
| clear | 清除缓存 |
| typecheck | TypeScript 检查 |

## 内容工作流

1. **捕获**：想法进入 GitHub Issues（低摩擦收件箱）。
2. **整合**：LLM 阅读全库，把增量融入已有文档（避免页面膨胀）。
3. **数据**：客观序列写入 `static/data/**/*.json`，由看板页渲染。
4. **发布**：推送到 `main` 后由 GitHub Actions 自动构建。

## 主要路由

| 路由 | 说明 |
| --- | --- |
| / | 首页（活知识库说明 + 四大支柱入口） |
| /docs/about/overview | 关于本站 |
| /docs/about/content-standards | 内容标准 |
| /docs/about/content-production | 内容如何生产 |
| /docs/about/tech-architecture | 技术架构 |
| /docs/health/* | 健康支柱 |
| /docs/career/* | 事业支柱 |
| /docs/finance/* | 财务支柱 |
| /docs/life/* | 人生体验支柱 |
| /charts/finance | 财务看板（ECharts + JSON 示例） |

## CI

`.github/workflows/build.yml`：在 push / pull_request 到 main 时安装依赖、执行构建，并上传 build artifact。

## 仓库

https://github.com/taywiniwn/personal-knowledge
