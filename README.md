# 高星教育开源项目 MVP

轻量中文教育资源整合型开源项目，提供学习路径与资源导航能力，支持方向/难度/标签筛选。

线上访问（GitHub Pages）：<https://ppchanning.github.io/highstar-edu-oss/>

## 项目定位

- 面向用户：希望快速建立学习路线的中文学习者
- 产品形态：静态网页 + 结构化内容数据
- MVP 目标：在低维护成本下实现可读、可筛选、可协作的学习资源入口

## 功能列表

- `LearningPath / ResourceItem` 数据 schema（`src/schema.js`）
- 学习路径展示与资源详情卡片
- 方向/难度/标签筛选（`src/filter.js`）
- 运营协作文档：贡献指南、审核模板、更新日志

## 快速开始

```bash
npm run start
```

启动后访问：`http://localhost:4173`

## 线上部署

- 自动部署：推送到 `main` 分支触发 `.github/workflows/pages.yml`
- 手动重部署：GitHub Actions -> `Deploy GitHub Pages` -> `Run workflow`
- 线上地址：<https://ppchanning.github.io/highstar-edu-oss/>

## 测试与质量验证

```bash
npm test
npm run check:links
```

- `npm test`：schema 与筛选关键路径验证
- `npm run check:links`：外链可达性检测（含重试机制）

## 贡献

查看 [CONTRIBUTING.md](./CONTRIBUTING.md)
