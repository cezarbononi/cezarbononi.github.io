import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(__dirname, "..", "src", "assets", "projects");

// Full-page captures are cropped to this many CSS pixels of page height.
const MAX_PAGE_HEIGHT = 5400;

const sites = [
  { slug: "avellen", url: "https://avellen.com.br/pt" },
  { slug: "cabeloliso", url: "https://www.cabeloliso.com/" },
  { slug: "castherm", url: "https://castherm.com.br/" },
  { slug: "anacarolinatrama", url: "https://anacarolinatrama.github.io/" },
];

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  // 1440px layout exported at 1080px wide keeps the tall captures light.
  deviceScaleFactor: 0.75,
  reducedMotion: "reduce",
});

for (const site of sites) {
  const page = await context.newPage();
  try {
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 60000 });
  } catch {
    console.warn(`[${site.slug}] networkidle timeout, continuing`);
  }
  await page.waitForTimeout(2500);

  // Dismiss lead-capture popups / modals that cover the hero.
  const closeButton = page
    .locator(
      '[role="dialog"] button[aria-label*="echar" i], [role="dialog"] button[aria-label*="close" i], button[aria-label*="echar" i], button[aria-label*="close" i]',
    )
    .first();
  if (await closeButton.isVisible().catch(() => false)) {
    await closeButton.click().catch(() => {});
  } else {
    await page.keyboard.press("Escape");
  }
  await page.waitForTimeout(800);

  const info = await page.evaluate(() => ({
    title: document.title,
    description:
      document.querySelector('meta[name="description"]')?.getAttribute("content") ?? "",
    h1: [...document.querySelectorAll("h1,h2")].slice(0, 6).map((n) => n.textContent?.trim()),
  }));
  console.log(JSON.stringify({ slug: site.slug, ...info }));

  // Walk the page so scroll-triggered content is rendered, then go back up.
  const pageHeight = await page.evaluate(async (maxHeight) => {
    const step = window.innerHeight * 0.8;
    for (let y = 0; y < Math.min(document.documentElement.scrollHeight, maxHeight); y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
    window.scrollTo(0, 0);
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Pin fixed/sticky elements to the document so they don't float
    // over the middle of the full-page capture.
    for (const node of document.querySelectorAll("body *")) {
      const position = getComputedStyle(node).position;
      if (position === "fixed") {
        node.style.setProperty("position", "absolute", "important");
      } else if (position === "sticky") {
        node.style.setProperty("position", "relative", "important");
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
    return document.documentElement.scrollHeight;
  }, MAX_PAGE_HEIGHT);

  await page.screenshot({
    path: path.join(outputDir, `${site.slug}.jpg`),
    type: "jpeg",
    quality: 72,
    fullPage: true,
    clip: { x: 0, y: 0, width: 1440, height: Math.min(pageHeight, MAX_PAGE_HEIGHT) },
  });
  await page.close();
}

await browser.close();
