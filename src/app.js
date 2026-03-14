import { learningPaths, resourceItems } from "../data/content.js";
import { assertSchema } from "./schema.js";
import { applyFilters, uniqueTags, uniqueValues } from "./filter.js";

assertSchema(learningPaths, resourceItems);

const filters = {
  direction: "",
  difficulty: "",
  tag: ""
};

const directionFilter = document.getElementById("directionFilter");
const difficultyFilter = document.getElementById("difficultyFilter");
const tagFilter = document.getElementById("tagFilter");
const resetButton = document.getElementById("resetFilters");
const pathList = document.getElementById("pathList");
const resourceList = document.getElementById("resourceList");

function fillOptions(select, values) {
  select.innerHTML = "";
  const all = document.createElement("option");
  all.value = "";
  all.textContent = "全部";
  select.appendChild(all);

  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function renderPaths() {
  pathList.innerHTML = "";
  learningPaths.forEach((path) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${path.title}</h3>
      <div class="meta">${path.direction} · ${path.difficulty}</div>
      <p>${path.overview}</p>
      <div class="tags">${path.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
    `;
    pathList.appendChild(card);
  });
}

function renderResources() {
  resourceList.innerHTML = "";
  const filtered = applyFilters(resourceItems, filters);
  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "没有符合筛选条件的资源。";
    resourceList.appendChild(empty);
    return;
  }

  filtered.forEach((item) => {
    const path = learningPaths.find((p) => p.id === item.pathId);
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <div class="meta">路径：${path ? path.title : "未知路径"} · ${item.type}</div>
      <div class="meta">${item.direction} · ${item.difficulty}</div>
      <p>${item.summary}</p>
      <div class="tags">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <p><a href="${item.url}" target="_blank" rel="noopener noreferrer">查看资源</a></p>
    `;
    resourceList.appendChild(card);
  });
}

function bindEvents() {
  directionFilter.addEventListener("change", (event) => {
    filters.direction = event.target.value;
    renderResources();
  });

  difficultyFilter.addEventListener("change", (event) => {
    filters.difficulty = event.target.value;
    renderResources();
  });

  tagFilter.addEventListener("change", (event) => {
    filters.tag = event.target.value;
    renderResources();
  });

  resetButton.addEventListener("click", () => {
    filters.direction = "";
    filters.difficulty = "";
    filters.tag = "";
    directionFilter.value = "";
    difficultyFilter.value = "";
    tagFilter.value = "";
    renderResources();
  });
}

fillOptions(directionFilter, uniqueValues(resourceItems, "direction"));
fillOptions(difficultyFilter, uniqueValues(resourceItems, "difficulty"));
fillOptions(tagFilter, uniqueTags(resourceItems));
renderPaths();
renderResources();
bindEvents();
