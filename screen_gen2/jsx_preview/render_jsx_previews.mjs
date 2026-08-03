#!/usr/bin/env node
/**
 * render_jsx_previews.mjs
 *
 * Renders the .jsx screens produced by main.py (--format jsx) so you can
 * visually check them, without needing a full React project or a CDN.
 *
 * Architecture: React runs server-side in Node (react-dom/server), producing
 * plain static HTML for each screen. The headless browser's only job is to
 * load that finished HTML + the generated Tailwind CSS and take a
 * screenshot -- no client-side JS execution, no React-mount timing to
 * worry about.
 *
 * Usage:
 *   node render_jsx_previews.mjs <input_dir> <output_dir>
 *
 * <input_dir>  - a folder containing .jsx files (searched recursively,
 *                e.g. the unzipped output of main.py --format jsx)
 * <output_dir> - where to write rendered .html pages and .png screenshots
 *
 * For each ExampleCompany/screen_type.jsx it writes:
 *   <output_dir>/ExampleCompany__screen_type.html   (open this in any browser)
 *   <output_dir>/ExampleCompany__screen_type.png    (screenshot)
 *
 * Requires (already installed via `npm install` in this folder):
 *   react, react-dom, @babel/core, @babel/preset-react, tailwindcss, playwright
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import * as babel from "@babel/core";
import { chromium } from "playwright";
import React from "react";
import ReactDOMServer from "react-dom/server";

const CHROMIUM_EXECUTABLE =
  process.env.CHROMIUM_PATH ||
  "/opt/pw-browsers/chromium-1194/chrome-linux/chrome"; // adjust/remove if playwright's own browser works on your machine

const [, , inputDirArg, outputDirArg] = process.argv;
if (!inputDirArg || !outputDirArg) {
  console.error("Usage: node render_jsx_previews.mjs <input_dir> <output_dir>");
  process.exit(1);
}

const inputDir = path.resolve(inputDirArg);
const outputDir = path.resolve(outputDirArg);
const tmpDir = path.join(outputDir, "_build");
fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(tmpDir, { recursive: true });

// -----------------------------------------------------------------------
// 1. Find all .jsx files
// -----------------------------------------------------------------------
function findJsxFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findJsxFiles(full));
    } else if (entry.name.endsWith(".jsx")) {
      results.push(full);
    }
  }
  return results;
}

const jsxFiles = findJsxFiles(inputDir);
if (jsxFiles.length === 0) {
  console.error(`No .jsx files found under ${inputDir}`);
  process.exit(1);
}
console.log(`Found ${jsxFiles.length} .jsx file(s) under ${inputDir}`);

// -----------------------------------------------------------------------
// 2. Build one shared Tailwind CSS file that covers every screen
//    (Tailwind's JIT scans the raw source text for class names, including
//    arbitrary values like bg-[#4A90D9], so this works without a build step
//    per file.)
// -----------------------------------------------------------------------
const tailwindConfigPath = path.join(tmpDir, "tailwind.config.cjs");
fs.writeFileSync(
  tailwindConfigPath,
  `module.exports = {
    content: [${JSON.stringify(path.join(inputDir, "**/*.jsx"))}],
    theme: { extend: {} },
    plugins: [],
  };`
);

const tailwindInputCss = path.join(tmpDir, "input.css");
fs.writeFileSync(tailwindInputCss, "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n");

const tailwindOutputCss = path.join(tmpDir, "tailwind.css");
console.log("Building Tailwind CSS for all screens...");
execSync(
  `npx tailwindcss -c "${tailwindConfigPath}" -i "${tailwindInputCss}" -o "${tailwindOutputCss}" --minify`,
  { stdio: "inherit", cwd: path.join(path.dirname(new URL(import.meta.url).pathname)) }
);

// Sanity check: verify Tailwind actually picked up classes from our .jsx
// files, rather than silently emitting only the base reset (which produces
// blank/unstyled screenshots with no error). Tailwind escapes special
// characters like [ ] # % in the generated selectors (e.g. `w-[390px]` ->
// `.w-\[390px\]`), so strip backslashes before substring-matching.
const generatedCss = fs.readFileSync(tailwindOutputCss, "utf-8");
const cssFlat = generatedCss.replace(/\\/g, "");

const expectedClasses = new Set();
for (const file of jsxFiles) {
  const src = fs.readFileSync(file, "utf-8");
  const classNameMatches = src.matchAll(/className=["']([^"']+)["']/g);
  for (const m of classNameMatches) {
    for (const cls of m[1].split(/\s+/)) {
      if (cls) expectedClasses.add(cls);
    }
  }
}

const missingClasses = [...expectedClasses].filter((cls) => !cssFlat.includes(cls));
if (expectedClasses.size > 0 && missingClasses.length / expectedClasses.size > 0.1) {
  console.warn(
    `\n⚠️  WARNING: Tailwind did not generate CSS for ${missingClasses.length}/${expectedClasses.size} ` +
      `classes found in your .jsx files (e.g. ${missingClasses.slice(0, 5).join(", ")}). ` +
      `Screens will likely render unstyled/blank. This usually means the "content" glob in ` +
      `${tailwindConfigPath} isn't matching your files -- check for symlinks, unusual path characters, ` +
      `or a mismatched Tailwind version. Generated CSS size: ${generatedCss.length} bytes.\n`
  );
} else {
  console.log(`Tailwind CSS looks good: ${expectedClasses.size - missingClasses.length}/${expectedClasses.size} classes matched.`);
}

// -----------------------------------------------------------------------
// 3. Tailwind CSS is the only browser-side asset needed now (React runs
//    server-side in Node -- see step 4).
// -----------------------------------------------------------------------
const scriptDir = path.dirname(new URL(import.meta.url).pathname);
fs.copyFileSync(tailwindOutputCss, path.join(outputDir, "tailwind.css"));

// -----------------------------------------------------------------------
// 4. Transpile + wrap each screen, write HTML, screenshot with Chromium
// -----------------------------------------------------------------------
function extractComponentName(source) {
  const match =
    source.match(/export\s+default\s+function\s+([A-Za-z0-9_]+)/) ||
    source.match(/function\s+([A-Za-z0-9_]+)\s*\(/);
  return match ? match[1] : "Screen";
}

function buildHtml(markup, label) {
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>${label}</title>
<link rel="stylesheet" href="tailwind.css" />
<style>body { margin: 0; background: #ddd; display: flex; align-items: flex-start; justify-content: center; padding: 24px; font-family: sans-serif; }</style>
</head>
<body>
<div id="root">${markup}</div>
</body>
</html>`;
}

const results = [];

for (const file of jsxFiles) {
  const rel = path.relative(inputDir, file);
  const label = rel.replace(/[\\/]/g, "__").replace(/\.jsx$/, "");
  const source = fs.readFileSync(file, "utf-8");

  let transpiled;
  try {
    const out = babel.transformSync(source, {
      presets: ["@babel/preset-react"],
      plugins: ["@babel/plugin-transform-modules-commonjs"],
      filename: file,
    });
    transpiled = out.code;
  } catch (err) {
    console.error(`  FAILED to transpile ${rel}: ${err.message}`);
    results.push({ file: rel, ok: false, error: err.message });
    continue;
  }

  // Execute the transpiled component in Node (not the browser) and render
  // it to a plain HTML string with react-dom/server. The commonjs plugin
  // above turns `import { useState } from 'react'` into `require('react')`
  // and `export default function X(){}` into `exports.default = X`, so we
  // give the executed code a minimal `require` that only knows about
  // 'react' (matching the system prompt's "no imports beyond React" rule)
  // and read the component back off `module.exports.default`.
  let markup;
  try {
    const moduleShim = { exports: {} };
    const requireShim = (name) => {
      if (name === "react") return React;
      throw new Error(`Generated component tried to import "${name}", but only "react" is supported.`);
    };
    const runner = new Function("require", "module", "exports", "React", transpiled);
    runner(requireShim, moduleShim, moduleShim.exports, React);
    const Component = moduleShim.exports.default || moduleShim.exports[extractComponentName(source)];
    if (typeof Component !== "function") {
      throw new Error("Could not find a default-exported component function after transpiling.");
    }
    markup = ReactDOMServer.renderToStaticMarkup(React.createElement(Component));
  } catch (err) {
    console.error(`  FAILED to server-render ${rel}: ${err.message}`);
    results.push({ file: rel, ok: false, error: err.message });
    continue;
  }

  const html = buildHtml(markup, label);
  const htmlPath = path.join(outputDir, `${label}.html`);
  fs.writeFileSync(htmlPath, html);
  results.push({ file: rel, ok: true, htmlPath, label });
}

// -----------------------------------------------------------------------
// 5. Screenshot every successfully-built HTML page with headless Chromium
// -----------------------------------------------------------------------
const launchOpts = fs.existsSync(CHROMIUM_EXECUTABLE)
  ? { executablePath: CHROMIUM_EXECUTABLE }
  : {}; // fall back to playwright's own managed browser if the hardcoded path doesn't exist

const browser = await chromium.launch(launchOpts);
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });

const pageErrors = [];
page.on("pageerror", (err) => pageErrors.push(err.message));
page.on("console", (msg) => {
  if (msg.type() === "error") pageErrors.push(msg.text());
});

for (const r of results) {
  if (!r.ok) continue;
  pageErrors.length = 0;
  const pngPath = path.join(outputDir, `${r.label}.png`);
  await page.goto(`file://${r.htmlPath}`, { waitUntil: "load" });
  await page.waitForTimeout(100); // let the stylesheet paint settle

  const rootInfo = await page.evaluate(() => {
    const el = document.querySelector("#root > *");
    if (!el) return null;
    const cs = getComputedStyle(el);
    return { width: cs.width, height: cs.height };
  });

  if (!rootInfo) {
    console.warn(`  ⚠️  ${r.file}: #root is empty -- server-side render produced no markup. Skipping screenshot.`);
    if (pageErrors.length) console.warn(`      Browser errors: ${pageErrors.join(" | ")}`);
    r.ok = false;
    r.error = pageErrors.join(" | ") || "Server-rendered markup was empty";
    continue;
  }
  if (rootInfo.width === "0px" || rootInfo.height === "0px") {
    console.warn(
      `  ⚠️  ${r.file}: rendered element has zero size (width=${rootInfo.width}, height=${rootInfo.height}). ` +
        `Tailwind classes likely weren't applied -- screenshot will probably look blank.`
    );
  }

  await page.screenshot({ path: pngPath, fullPage: true });
  r.pngPath = pngPath;
  console.log(`Rendered ${r.file} -> ${path.basename(pngPath)}`);
}

await browser.close();

// -----------------------------------------------------------------------
// 6. Summary
// -----------------------------------------------------------------------
const succeeded = results.filter((r) => r.ok).length;
console.log(`\nDone. ${succeeded}/${results.length} screen(s) rendered into ${outputDir}`);
const failed = results.filter((r) => !r.ok);
if (failed.length) {
  console.log("Failed:");
  for (const f of failed) console.log(`  - ${f.file}: ${f.error}`);
}
