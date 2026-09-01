// Rebuild the Zensar interview data file. The Zensar company includes BOTH
// interviews because the "American Express" questions came from a Zensar
// client interview.
//
// Run:  node scripts/rebuild-zensar-amex.mjs
//
// Writes:
//   src/data/companyInterviews/zensar/zensar.js
//     - Zensar Technical Interview: 1 round "Technical Interview" (23 questions)
//     - American Express Interview: rounds "Technical L1" (36) + "Technical L2" (7)
//       (data source: zensar/amex.json)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COMPANY_DIR = path.join(__dirname, "..", "src", "data", "companyInterviews");

// Helper: write a company data file with one or more interviews.
function writeFile(outDir, outFile, companyName, interviews) {
  fs.mkdirSync(path.join(COMPANY_DIR, outDir), { recursive: true });
  const questionCount = interviews.reduce((s, i) => s + i.questionCount, 0);
  const company = {
    id: outDir,
    name: companyName,
    interviews,
    questionCount,
  };
  const banner =
    "// AUTO-GENERATED file — company-wise interview data.\n" +
    `// Source: ${companyName} interview document(s).\n` +
    "// Do not edit manually — regenerate with: node scripts/rebuild-zensar-amex.mjs\n\n" +
    "export const company = " +
    JSON.stringify(company, null, 2) +
    ";\n";
  fs.writeFileSync(path.join(COMPANY_DIR, outDir, outFile), banner, "utf8");
  console.log(
    `✓ ${outDir}/${outFile}  (${interviews.length} interviews, ${questionCount} questions)`,
  );
}

// ---------------------------------------------------------------------------
// Transform a SOURCE dataset (from *_source.json) into company-shape rounds.
// Source questions look like: { id, question, answer, code, complexity }
//   - `code` may be a string (raw code) or null.
// Output questions (app shape):   { question, answer, code }
//   - `code` becomes { language: "java", content } or null.
// Drops `id` and `complexity` (not rendered by the app).
const toAppQuestion = (q) => ({
  question: q.question,
  answer: q.answer,
  code: q.code ? { language: "java", content: q.code } : null,
});
const toAppRounds = (source) =>
  (source.rounds || []).map((r) => ({
    name: r.name,
    questions: (r.questions || []).map(toAppQuestion),
  }));

// Build each interview object from a SOURCE dataset.
const makeInterview = (source) => ({
  name: (source && source.interview) || "Interview",
  questionCount: (source.rounds || []).reduce((s, r) => s + r.questions.length, 0),
  rounds: toAppRounds(source),
});

// ---- Zensar company with TWO interviews ----
// 1) Zensar Technical Interview            (source: zensar/zensar.json)
// 2) American Express (Zensar client)      (source: zensar/amex.json)
const zensarSrc = JSON.parse(
  fs.readFileSync(path.join(COMPANY_DIR, "zensar", "zensar.json"), "utf8"),
);
const amexSrc = JSON.parse(
  fs.readFileSync(path.join(COMPANY_DIR, "zensar", "amex.json"), "utf8"),
);

const interviews = [
  makeInterview(zensarSrc),
  makeInterview(amexSrc),
];

writeFile("zensar", "zensar.js", "Zensar", interviews);

