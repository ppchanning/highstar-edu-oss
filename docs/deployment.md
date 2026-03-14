# 部署说明

## 本地可复现部署

```bash
npm run start
```

默认监听：`http://localhost:4173`

## GitHub Pages（正式发布）

- 线上地址：<https://ppchanning.github.io/highstar-edu-oss/>
- 工作流文件：`.github/workflows/pages.yml`
- 触发方式：
  - 自动：push 到 `main`
  - 手动：Actions 页面执行 `Deploy GitHub Pages`

## 可复现发布步骤

1. 本地验证：

```bash
npm test
npm run check:links
```

2. 提交并推送到 `main`：

```bash
git add .
git commit -m "chore: enable github pages deployment"
git push origin main
```

3. 在 GitHub Actions 确认 `Deploy GitHub Pages` 成功。
4. 访问线上地址，确认首页可达。

## 重新部署（不改代码）

1. 打开仓库 Actions 页面。
2. 选择 `Deploy GitHub Pages`。
3. 点击 `Run workflow`，分支选择 `main`。
4. 等待执行完成后刷新线上地址验证。

## 上线前检查

```bash
npm test
npm run check:links
```

通过后即可发布或重部署。
