export function uniqueValues(items, key) {
  return [...new Set(items.map((item) => item[key]).filter(Boolean))];
}

export function uniqueTags(items) {
  return [...new Set(items.flatMap((item) => item.tags || []))];
}

export function applyFilters(items, filters) {
  return items.filter((item) => {
    const matchesDirection = !filters.direction || item.direction === filters.direction;
    const matchesDifficulty = !filters.difficulty || item.difficulty === filters.difficulty;
    const matchesTag = !filters.tag || (item.tags || []).includes(filters.tag);

    return matchesDirection && matchesDifficulty && matchesTag;
  });
}
