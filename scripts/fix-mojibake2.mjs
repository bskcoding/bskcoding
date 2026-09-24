import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

// Direct mojibake sequence replacements (UTF-8 bytes mis-decoded as cp1252):
// â†’ => bytes E2 86 92 => "→";  â‚¬” => bytes E2 80 94 => "—"
const FIXES = [
  ["â†’", "\u2192"],
  ["â†'", "\u2192"],
  ["â‚¬”", "\u2014"],
  ["â‚¬'", "\u2014"],
  ["â‚¬,", "\u2014"],
  ["â‚¬\u009c", "\u201c"],
  ["â‚¬", "\u20ac"],
  ["â€™", "\u2019"],
  ["â€˜", "\u2018"],
  ["â€œ", "\u201c"],
  ["â€\u009d", "\u201d"],
  ["â€¦", "\u2026"],
  ["â€\u0093", "\u2013"],
  ["â€“", "\u2013"],
  ["â€”", "\u2014"],
  ["â„¢", "\u2122"],
  ["âœ…", "\u2705"],
  ["Ã¢â‚¬Å¡", ""],
  ["Â\u00a0", " "],
];

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) yield* walk(p);
    else if (/\.(js|jsx|css|mjs)$/.test(name)) yield p;
  }
}

let totalFixed = 0;
for (const file of walk("src")) {
  let s = readFileSync(file, "utf8");
  if (!s.includes("\u00e2") && !s.includes("\u00c3")) continue;
  const before = s;
  for (const [bad, good] of FIXES) s = s.split(bad).join(good);
  if (s !== before) {
    writeFileSync(file, s, "utf8");
    totalFixed++;
    console.log("fixed:", file);
  }
}

for (const file of walk("src")) {
  const s = readFileSync(file, "utf8");
  const left = (s.match(/\u00e2[^\s"']{0,4}/gu) || []).filter(
    (m) => m !== "\u2192",
  );
  if (left.length)
    console.log(
      "LEFTOVER " + file + ":",
      JSON.stringify([...new Set(left)].slice(0, 10)),
    );
}
console.log("files fixed:", totalFixed);
