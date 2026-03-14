import path from "node:path";
import { fileURLToPath } from "node:url";
import { collectLinksFromHtml, checkUrlWithRetry } from "../src/linkCheck.js";
import { resourceItems } from "../data/content.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");

const htmlLinks = await collectLinksFromHtml(indexPath);
const dataLinks = resourceItems.map((item) => item.url).filter(Boolean);
const externalLinks = [...new Set([...htmlLinks, ...dataLinks])].filter((link) => link.startsWith("http"));

let failed = 0;
for (const link of externalLinks) {
  const result = await checkUrlWithRetry(link, { retries: 2, timeoutMs: 10000, sleepMs: 500 });
  if (!result.ok) {
    failed += 1;
    console.error(`FAIL ${link} (${JSON.stringify(result)})`);
  } else {
    console.log(`OK   ${link} (status=${result.status}, attempts=${result.attempts})`);
  }
}

if (failed > 0) {
  console.error(`Link check failed: ${failed} urls`);
  process.exit(1);
}

console.log(`Link check passed: ${externalLinks.length} urls`);
