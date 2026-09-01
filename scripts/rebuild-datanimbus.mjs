// Rebuild the Datanimbus interview data file from the structured
// JSON source (datanimbus.json).
//
// Run:  node scripts/rebuild-datanimbus.mjs
//
// Reads:  src/data/companyInterviews/datanimbus/datanimbus.json  (inert to the
//         app loader — it only globs *.js — so the JSON acts purely as a
//         source-of-truth input to this script).
// Writes: src/data/companyInterviews/datanimbus/datanimbus.js
//
// Datanimbus has one interview with three technical rounds (L1, L2, L3);
// rounds with no questions are dropped so the page never renders an
// empty round. Same code-normalization as rebuild-axis.mjs so the page
// never crashes on malformed data.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COMPANY_DIR = path.join(
  __dirname,
  "..",
  "src",
  "data",
  "companyInterviews",
  "datanimbus",
);
const SOURCE = path.join(COMPANY_DIR, "datanimbus.json");
const OUT = path.join(COMPANY_DIR, "datanimbus.js");

const raw = JSON.parse(fs.readFileSync(SOURCE, "utf8"));

// Normalize each question's `code` to the shape CompanyInterview.jsx
// expects: { language, content } (the source JSON sometimes stores it as
// a plain string).
const normalizeQuestion = (q) => {
  let code = null;
  if (typeof q.code === "string" && q.code.trim().length > 0) {
    code = { language: "java", content: q.code };
  } else if (
    q.code &&
    typeof q.code === "object" &&
    typeof q.code.content === "string"
  ) {
    code = {
      language: q.code.language || "java",
      content: q.code.content,
    };
  }
  return {
    question: q.question,
    answer: q.answer || "",
    code,
  };
};

// Keep L1 / L2 / L3 as separate rounds; drop empty rounds (e.g. HR Round).
const rounds = raw.rounds
  .map((round) => ({
    name: round.name,
    questions: (round.questions || []).map(normalizeQuestion),
  }))
  .filter((round) => round.questions.length > 0);

const questionCount = rounds.reduce((sum, r) => sum + r.questions.length, 0);

const company = {
  id: raw.id,
  name: raw.name,
  interviews: [
    {
      name: `${raw.name} Interview`,
      questionCount,
      rounds,
    },
  ],
  questionCount,
};

const banner =
  "// AUTO-GENERATED file — company-wise interview data.\n" +
  `// Source: ${raw.name} interview document(s).\n` +
  "// Regenerate with:  node scripts/rebuild-datanimbus.mjs\n\n";
const body =
  "export const company = " + JSON.stringify(company, null, 2) + ";\n";
fs.writeFileSync(OUT, banner + body, "utf8");

console.log(
  `✓ datanimbus.js  (${rounds.length} rounds, ${questionCount} questions)`,
);
