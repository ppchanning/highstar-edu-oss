export function validatePath(item) {
  return (
    typeof item.id === "string" &&
    typeof item.title === "string" &&
    typeof item.direction === "string" &&
    typeof item.difficulty === "string" &&
    Array.isArray(item.tags)
  );
}

export function validateResource(item) {
  return (
    typeof item.id === "string" &&
    typeof item.pathId === "string" &&
    typeof item.title === "string" &&
    typeof item.direction === "string" &&
    typeof item.difficulty === "string" &&
    Array.isArray(item.tags) &&
    typeof item.url === "string"
  );
}

export function assertSchema(paths, resources) {
  if (!paths.every(validatePath)) {
    throw new Error("Invalid LearningPath schema");
  }
  if (!resources.every(validateResource)) {
    throw new Error("Invalid ResourceItem schema");
  }

  const pathIds = new Set(paths.map((p) => p.id));
  for (const item of resources) {
    if (!pathIds.has(item.pathId)) {
      throw new Error(`Resource ${item.id} references missing pathId`);
    }
  }
}
