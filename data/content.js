export const learningPaths = [
  {
    id: "path-js-web",
    title: "Web 前端工程路径",
    direction: "前端",
    difficulty: "初级",
    tags: ["JavaScript", "项目实战"],
    overview: "从语言基础到页面构建，再到工程化交付。"
  },
  {
    id: "path-python-ai",
    title: "Python + AI 入门路径",
    direction: "AI",
    difficulty: "中级",
    tags: ["Python", "机器学习"],
    overview: "聚焦 Python 基础、数据处理与经典模型。"
  },
  {
    id: "path-interview",
    title: "校招面试冲刺路径",
    direction: "求职",
    difficulty: "进阶",
    tags: ["算法", "面试"],
    overview: "覆盖算法、项目表述与行为面试准备。"
  }
];

export const resourceItems = [
  {
    id: "res-mdn-js",
    pathId: "path-js-web",
    title: "MDN JavaScript 指南",
    direction: "前端",
    difficulty: "初级",
    tags: ["JavaScript", "文档"],
    type: "文档",
    url: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide",
    summary: "覆盖语法、函数、对象和模块，适合系统学习。"
  },
  {
    id: "res-freecodecamp",
    pathId: "path-js-web",
    title: "freeCodeCamp 响应式网页课程",
    direction: "前端",
    difficulty: "初级",
    tags: ["HTML", "CSS", "项目实战"],
    type: "课程",
    url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
    summary: "通过任务制完成页面开发，快速建立实践闭环。"
  },
  {
    id: "res-kaggle-python",
    pathId: "path-python-ai",
    title: "Python 官方教程",
    direction: "AI",
    difficulty: "中级",
    tags: ["Python", "数据处理"],
    type: "课程",
    url: "https://docs.python.org/3/tutorial/",
    summary: "覆盖 Python 语法、数据结构与模块组织，适合作为入门主线。"
  },
  {
    id: "res-ml-crash",
    pathId: "path-python-ai",
    title: "Google ML Crash Course",
    direction: "AI",
    difficulty: "中级",
    tags: ["机器学习", "实践"],
    type: "教程",
    url: "https://developers.google.com/machine-learning/crash-course",
    summary: "包含模型基础、特征工程和实操练习。"
  },
  {
    id: "res-leetcode",
    pathId: "path-interview",
    title: "LeetCode 热题 100",
    direction: "求职",
    difficulty: "进阶",
    tags: ["算法", "面试"],
    type: "题单",
    url: "https://leetcode.cn/studyplan/top-100-liked/",
    summary: "面试高频题型集合，适合结构化刷题。"
  },
  {
    id: "res-star-method",
    pathId: "path-interview",
    title: "STAR 行为面试模板",
    direction: "求职",
    difficulty: "进阶",
    tags: ["面试", "软技能"],
    type: "模板",
    url: "https://www.themuse.com/advice/star-interview-method",
    summary: "帮助候选人结构化表达项目经历与影响。"
  }
];
