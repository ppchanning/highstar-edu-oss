import assert from "node:assert/strict";
import { learningPaths, resourceItems } from "../data/content.js";
import { assertSchema } from "../src/schema.js";
import { applyFilters } from "../src/filter.js";

function run(name, fn) {
  try {
    fn();
    console.log(`PASS ${name}`);
  } catch (error) {
    console.error(`FAIL ${name}: ${error.message}`);
    process.exitCode = 1;
  }
}

run("schema validation", () => {
  assert.doesNotThrow(() => assertSchema(learningPaths, resourceItems));
});

run("direction filter", () => {
  const result = applyFilters(resourceItems, { direction: "AI", difficulty: "", tag: "" });
  assert.equal(result.length, 2);
  assert.ok(result.every((item) => item.direction === "AI"));
});

run("difficulty + tag filter", () => {
  const result = applyFilters(resourceItems, { direction: "", difficulty: "进阶", tag: "面试" });
  assert.equal(result.length, 2);
  assert.ok(result.every((item) => item.difficulty === "进阶"));
  assert.ok(result.every((item) => item.tags.includes("面试")));
});

run("no match filter", () => {
  const result = applyFilters(resourceItems, { direction: "前端", difficulty: "进阶", tag: "机器学习" });
  assert.equal(result.length, 0);
});
