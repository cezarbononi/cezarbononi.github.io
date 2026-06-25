import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outputDir = path.join(root, "public", "cv");
const host = "127.0.0.1";
const port = "4173";
const baseUrl = `http://${host}:${port}`;
const viteBin = path.join(root, "node_modules", "vite", "bin", "vite.js");

function runServer() {
  const server = spawn(
    process.execPath,
    [viteBin, "--host", host, "--port", port, "--strictPort"],
    {
      cwd: root,
      env: {
        ...process.env,
        BROWSER: "none",
      },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );

  const ready = new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error("Timed out waiting for Vite dev server."));
    }, 30000);

    const onData = (chunk) => {
      const text = chunk.toString();

      if (text.includes(`http://${host}:${port}/`)) {
        clearTimeout(timeout);
        resolve();
      }
    };

    server.stdout.on("data", onData);
    server.stderr.on("data", onData);
    server.once("error", (error) => {
      clearTimeout(timeout);
      reject(error);
    });
    server.once("exit", (code) => {
      if (code !== null && code !== 0) {
        clearTimeout(timeout);
        reject(new Error(`Vite dev server exited with code ${code}.`));
      }
    });
  });

  return { server, ready };
}

async function exportCV(page, lang, fileName) {
  await page.goto(`${baseUrl}/cv?lang=${lang}`, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print", reducedMotion: "reduce" });
  await page.pdf({
    path: path.join(outputDir, fileName),
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      top: "0mm",
      right: "0mm",
      bottom: "0mm",
      left: "0mm",
    },
  });
}

const { server, ready } = runServer();

try {
  await mkdir(outputDir, { recursive: true });
  await ready;

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 794, height: 1123 },
    deviceScaleFactor: 1,
  });

  await exportCV(page, "pt", "cezar-bononi-cv-pt-br.pdf");
  await exportCV(page, "en", "cezar-bononi-cv-en-us.pdf");

  await browser.close();
  console.log("CV PDFs generated in public/cv.");
} finally {
  server.kill();
}
