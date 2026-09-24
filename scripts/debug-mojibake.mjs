import { readFileSync } from "node:fs";
const s = readFileSync("src/data/interviewPrepAnswers.js", "utf8");
const idx = s.indexOf("â");
console.log("first â at:", idx);
if (idx >= 0) {
  const seg = s.slice(idx, idx + 8);
  console.log("chars:", [...seg].map((c) => c + "=" + c.codePointAt(0).toString(16)));
}
const arrows = s.match(/â.{0,4}/gu) || [];
const uniq = {};
for (const a of arrows) {
  const key = [...a].map((c) => c.codePointAt(0).toString(16)).join(",");
  uniq[key] = (uniq[key] || 0) + 1;
}
console.log("mojibake seqs (hex->count):", JSON.stringify(uniq, null, 1));
