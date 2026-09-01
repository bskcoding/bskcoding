// Rebuild the Cognizant interview data file from the structured
// JSON source (cognizant.json).
//
// Run:  node scripts/rebuild-cognizant.mjs
//
// Reads:  src/data/companyInterviews/cognizant/cognizant.json  (inert to
//         the app loader — it only globs *.js — so the JSON acts purely
//         as a source-of-truth input to this script).
// Writes: src/data/companyInterviews/cognizant/cognizant.js
//
// Same shape and code-normalization as the other rebuild-*.mjs scripts.
// Cognizant is a single-round interview — all source sections are
// flattened into one "Cognizant Interview" round.

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
  "cognizant",
);
const SOURCE = path.join(COMPANY_DIR, "cognizant.json");
const OUT = path.join(COMPANY_DIR, "cognizant.js");

const raw = JSON.parse(fs.readFileSync(SOURCE, "utf8"));

// Cognizant is a multi-round interview — keep the 6 source sections
// (Coding Assessment, React R1, Java R2, Final Round, Ford Motor, HR)
// as separate rounds with their own round-name headlines.
const rounds = raw.rounds.map((round) => ({
  name: round.name,
  questions: round.questions.map((q) => {
    // The source JSON sometimes stores `code` as a plain string (just the
    // raw code body) and sometimes as { language, content }. Normalize to
    // the shape CompanyInterview.jsx expects: { language, content }.
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
  }),
}));

const questionCount = rounds.reduce(
  (sum, round) => sum + round.questions.length,
  0,
);

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
  "// Regenerate with:  node scripts/rebuild-cognizant.mjs\n\n";
const body =
  "export const company = " + JSON.stringify(company, null, 2) + ";\n";
fs.writeFileSync(OUT, banner + body, "utf8");

console.log(
  `✓ wrote ${path.relative(path.join(__dirname, ".."), OUT)}  (${rounds.length} rounds, ${questionCount} questions)`,
);
