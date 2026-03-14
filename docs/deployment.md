# 部署说明

## 本地可复现部署

```bash
npm run start
```

默认监听：`http://localhost:4173`

## 生产部署建议（静态托管）

可将以下文件直接发布到任意静态托管平台（GitHub Pages / Netlify / Vercel Static）：

- `index.html`
- `src/`
- `data/`
- `README.md`
- `CONTRIBUTING.md`
- `CHANGELOG.md`

## 上线前检查

```bash
npm test
npm run check:links
```

通过后即可发布。
