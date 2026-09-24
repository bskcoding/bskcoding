/**
 * One-off repair script: fixes UTF-8 text that was double-encoded as
 * cp1252 (mojibake like "â†’" instead of "→") in source files.
 *
 * Usage: node scripts/fix-mojibake.mjs
 *
 * Strategy: for every double-quoted string segment, try to reverse the
 * cp1252 mis-decode (chars -> original UTF-8 bytes -> UTF-8 string).
 * Only segments that actually contain mojibake markers AND decode to
 * valid UTF-8 (no replacement chars) are rewritten; everything else is
 * left untouched.
 */
import { readFileSync, writeFileSync } from "node:fs";

// cp1252 0x80-0x9F specials: character -> byte value
const CP = new Map([
  [0x20ac, 0x80], [0x201a, 0x82], [0x0192, 0x83], [0x201e, 0x84],
  [0x2026, 0x85], [0x2020, 0x86], [0x2021, 0x87], [0x02c6, 0x88],
  [0x2030, 0x89], [0x0160, 0x8a], [0x2039, 0x8b], [0x0152, 0x8c],
  [0x017d, 0x8e], [0x2018, 0x91], [0x2019, 0x92], [0x201c, 0x93],
  [0x201d, 0x94], [0x2022, 0x95], [0x2013, 0x96], [0x2014, 0x97],
  [0x02dc, 0x98], [0x2122, 0x99], [0x0161, 0x9a], [0x203a, 0x9b],
  [0x0153, 0x9c], [0x017e, 0x9e], [0x0178, 0x9f],
]);

const MARKER = /â|Ã|Â|ð/; // visible mojibake markers

function reverse(str) {
  const bytes = [];
  for (const ch of str) {
    const c = ch.codePointAt(0);
    if (c < 0x100) { bytes.push(c); continue; }
    if (CP.has(c)) { bytes.push(CP.get(c)); continue; }
    return null; // char can't come from cp1252 -> not mojibake
  }
  const out = Buffer.from(bytes).toString("utf8");
  return out.includes("\uFFFD") ? null : out;
}

function fixFile(path) {
  const src = readFileSync(path, "utf8");
  let changed = 0;
  // Process double-quoted string literals (our data files use " for all strings)
  const out = src.replace(/"(?:[^"\\]|\\.)*"/g, (m) => {
    if (!MARKER.test(m)) return m;
    const r = reverse(m);
    if (r && r !== m) { changed++; return r; }
    return m;
  });
  writeFileSync(path, out, "utf8");
  console.log(`${path} -> fixed segments: ${changed}`);
}

const files = process.argv.slice(2);
for (const f of files) fixFile(f);
