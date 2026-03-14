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

## 回滚流程

当最新部署异常时，使用最近一个稳定 commit 重新触发部署：

1. 找到最近稳定 commit（示例：`git log --oneline`）。
2. 回滚到该版本并推送：

```bash
git revert <bad_commit_sha>
git push origin main
```

3. 等待 `Deploy GitHub Pages` 自动执行完成。
4. 访问线上地址确认恢复。

## 故障排查

- `Setup Pages` 失败：
  - 检查仓库 `Settings -> Pages` 是否已选择 `GitHub Actions`
  - 检查仓库是否允许 Actions 部署 Pages
- `Upload artifact` 失败：
  - 检查工作流 `path` 是否包含站点文件
  - 检查仓库根目录是否存在 `index.html`
- 部署成功但页面 404：
  - 等待 1-3 分钟 CDN 生效后重试
  - 确认访问 URL 与仓库名匹配：`https://<owner>.github.io/<repo>/`
- 页面资源加载异常：
  - 检查静态资源路径是否使用相对路径
  - 清除浏览器缓存后重试

## 上线前检查

```bash
npm test
npm run check:links
```

通过后即可发布或重部署。
