# 贡献指南

## 提交规范

- 每次变更请附带目的、影响范围与验证结果
- 修改内容数据时，必须通过 `npm test`
- 新增外链后，必须通过 `npm run check:links`

## 内容提交流程

1. 在 `data/content.js` 新增或更新 `LearningPath` / `ResourceItem`
2. 自查 schema 字段完整性
3. 在 `CHANGELOG.md` 记录新增/调整
4. 按审核清单完成检查

## PR 审核清单

- [ ] 字段完整且与 schema 一致
- [ ] 筛选行为符合预期
- [ ] 外链通过可达性校验
- [ ] 移动端（<= 390px）可读性正常
