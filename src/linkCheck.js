import fs from "node:fs/promises";

export async function collectLinksFromHtml(filePath) {
  const html = await fs.readFile(filePath, "utf8");
  const pattern = /href=\"([^\"]+)\"/g;
  const links = [];
  let match = pattern.exec(html);

  while (match) {
    links.push(match[1]);
    match = pattern.exec(html);
  }

  return links;
}

export async function checkUrlWithRetry(url, options = {}) {
  const retries = options.retries ?? 2;
  const timeoutMs = options.timeoutMs ?? 8000;
  const sleepMs = options.sleepMs ?? 300;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
      let response = await fetch(url, {
        method: "HEAD",
        redirect: "follow",
        signal: controller.signal
      });
      if (response.status === 405 || response.status === 403) {
        response = await fetch(url, {
          method: "GET",
          redirect: "follow",
          signal: controller.signal
        });
      }
      clearTimeout(timeout);
      if (response.ok) {
        return { ok: true, status: response.status, attempts: attempt + 1 };
      }
      if (attempt === retries) {
        return { ok: false, status: response.status, attempts: attempt + 1 };
      }
    } catch (error) {
      clearTimeout(timeout);
      if (attempt === retries) {
        return { ok: false, error: String(error), attempts: attempt + 1 };
      }
    }

    await new Promise((resolve) => setTimeout(resolve, sleepMs));
  }

  return { ok: false, status: null, attempts: retries + 1 };
}
