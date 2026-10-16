import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as icons from "lucide-react";
const require = createRequire(import.meta.url);
const dir = "src/app/apps/nospoti/";
let html = readFileSync(`${dir}landing.source.html`, "utf8");
html = html.replace(
  /<i\s+([^>]*data-lucide="([^"]+)"[^>]*)><\/i>/g,
  (_, attrs, name) => {
    const iconName = name
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("");
    const Icon = icons[iconName];
    if (!Icon) throw new Error(`Unknown icon: ${name}`);
    const className = attrs.match(/class="([^"]+)"/)?.[1];
    const id = attrs.match(/id="([^"]+)"/)?.[1];
    return renderToStaticMarkup(
      createElement(Icon, { className, id, "aria-hidden": true }),
    );
  },
);
if (/<script|onclick=|oninput=|<iframe/i.test(html))
  throw new Error("Unexpected executable HTML");
writeFileSync(`${dir}landing.generated.json`, JSON.stringify(html));
execFileSync(
  process.execPath,
  [
    require.resolve("tailwindcss/lib/cli.js"),
    "-c",
    `${dir}tailwind.landing.cjs`,
    "-i",
    `${dir}landing.input.css`,
    "-o",
    `${dir}landing.utilities.css`,
    "--minify",
  ],
  { stdio: "inherit" },
);
