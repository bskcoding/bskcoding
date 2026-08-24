// Converts company-interview markdown files (from the user's interview kit)
// into clean structured JS data files (src/data/companyInterviews/data-*.js).
//
// Run:  node scripts/convert-company-interviews.cjs
//
// Output structure per company:
//   {
//     id: "zoho-walk-in",
//     name: "ZOHO (walk_in)",
//     interviews: [
//       {
//         name: "zoho",
//         rounds: [
//           {
//             name: "1st Round: Factorial Sum",
//             questions: [
//               {
//                 question: "Given a number, find the sum...",
//                 answer: "Input: 145\nOutput: ...",
//                 code: { language: "java", content: "..." }   // optional
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }

const fs = require("fs");
const path = require("path");

// Output directory for generated structured JS data files
const OUT_DIR = path.join(__dirname, "..", "src", "data", "companyInterviews");
// Source directory: the user's original interview kit with per-company .md files
const KIT_DIR = path.join(
  __dirname,
  "..",
  "java-fullstack-interview-kit-main",
  "java-fullstack-interview-kit-main",
);

/** Remove the smallest common leading indentation from a code block */
function dedent(codeLines) {
  const lines = codeLines.filter((l) => l.trim());
  if (!lines.length) return "";
  const minIndent = Math.min(...lines.map((l) => l.match(/^\s*/)[0].length));
  return codeLines
    .map((l) => l.slice(minIndent))
    .join("\n")
    .trim();
}

/** Strip markdown syntax that we render as plain text */
function cleanText(t) {
  return t
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .trim();
}

const roundHeaderRe =
  /(first|second|third|fourth|fifth|sixth|l1|l2|l3|f2f|hr|tech|system design|online|screen|coding|aptitude|w\/?l\d|virtual|manager|hiring)\s*(round|level|round:)?|round\s*\d|sde\s*\d/i;

function isRoundHeader(level, text) {
  if (level > 2) return false;
  if (!roundHeaderRe.test(text)) return false;
  // Exclude common system design subsections that might match "tech" or "design"
  if (
    /tech\s*stack|system\s*requirements|architecture|components|schema|data model|optimization|security|deployment|devops/i.test(
      text,
    )
  ) {
    return false;
  }
  return true;
}

/**
 * Parse one interview-experience markdown file into:
 * { rounds: [{ name, questions: [{ question, answer, code }] }] }
 *
 * Each question is a clean object:
 *   question: the question text
 *   answer:   the plain-text answer (all text lines joined with newlines)
 *   code:     optional { language, content } for the code solution
 */
function parseInterviewMarkdown(content) {
  const lines = content.split("\n");
  const rounds = [];
  let currentRound = null;
  let currentQuestion = null;
  let inCode = false;
  let codeLang = "";
  let codeLines = [];
  let isSystemDesign = false;

  const getRound = () => {
    if (!currentRound) {
      currentRound = { name: "Interview Questions", questions: [] };
      rounds.push(currentRound);
    }
    return currentRound;
  };

  const lastRound = () => currentRound || getRound();

  const addQuestion = (title, trailingRaw) => {
    const round = lastRound();
    currentQuestion = {
      question: cleanText(title) || "Untitled Question",
      answer: "",
      code: null,
    };
    round.questions.push(currentQuestion);
    if (trailingRaw && trailingRaw.trim()) {
      currentQuestion.answer = cleanText(trailingRaw);
    }
  };

  const addCode = () => {
    if (currentQuestion && codeLines.some((l) => l.trim()) && codeLang) {
      currentQuestion.code = {
        language: codeLang,
        content: dedent(codeLines),
      };
    }
    codeLines = [];
    codeLang = "";
  };

  const appendAnswer = (text) => {
    if (!currentQuestion) return;
    const clean = cleanText(text);
    if (!clean) return;
    currentQuestion.answer = currentQuestion.answer
      ? currentQuestion.answer + "\n" + clean
      : clean;
  };

  // Sub-headings that describe ANSWER content, not new questions/rounds.
  const answerLabelRe =
    /^(example|examples?|input|output|java code|java code solution|optimized java solution|solution|approach|explanation|constraints|time complexity|space complexity|output:?|example input\s*&\s*output|sample)\s*:\s*$/i;

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const t = rawLine.trim();

    // ---- fenced code blocks ----
    if (t.startsWith("```")) {
      if (!inCode) {
        inCode = true;
        codeLang = t.slice(3).trim() || "java";
        codeLines = [];
      } else {
        inCode = false;
        addCode();
      }
      continue;
    }
    if (inCode) {
      codeLines.push(rawLine);
      continue;
    }

    if (!t) continue;
    if (/^[-=*~_\s]{3,}$/.test(t)) continue;

    const h = t.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const level = h[1].length;
      let text = h[2].replace(/\*\*/g, "").trim();

      if (isRoundHeader(level, text)) {
        currentRound = { name: text, questions: [] };
        rounds.push(currentRound);
        currentQuestion = null;
        isSystemDesign = /system\s*design/i.test(text);
        continue;
      }

      // If we are in System Design mode and a question is already active,
      // append everything under it as answer text (including level-2, level-3, or numbered sub-headings)
      if (isSystemDesign && currentQuestion) {
        appendAnswer(text);
        continue;
      }

      // ---- numbered heading = a question (integer number, any level) ----
      const numQ = text.match(/^(\d+)[.)]\s+(.+)$/);
      if (numQ) {
        addQuestion(numQ[2]);
        continue;
      }

      // ---- decimal sub-section heading (e.g. "1.2 Non-Functional") ----
      // Sub-sections WITHIN a round — skip so content flows into current round.
      if (/^\d+\.\d+\s+/.test(text)) {
        continue;
      }

      // ---- "Problem N: text" heading → question ----
      const probQ = text.match(/^problem\s*(\d+)?\s*:\s*(.+)$/i);
      if (probQ) {
        addQuestion(probQ[2]);
        continue;
      }

      // ---- answer sub-heading → keep current question, skip heading line ----
      if (answerLabelRe.test(text)) {
        continue;
      }

      // ---- "Question:" / "Problem:" label heading → text on next lines ----
      if (/^(question|questions|problem|problems)\s*:\s*$/i.test(text)) {
        let j = i + 1;
        const collected = [];
        while (j < lines.length) {
          const nl = lines[j].trim();
          if (!nl) break;
          if (nl.startsWith("#") || /^[-=*~_\s]{3,}$/.test(nl)) break;
          if (nl.startsWith("```")) break;
          if (
            /^(example|input|output|java code|approach|answer|solution|constraints)\s*:/i.test(
              nl.replace(/\*\*/g, "").replace(/`/g, ""),
            )
          )
            break;
          collected.push(nl);
          j++;
        }
        addQuestion(collected.join(" ").trim());
        i = j - 1;
        continue;
      }

      if (level === 1) {
        currentQuestion = null;
        continue;
      }

      // ---- level-4+ unnumbered heading → sub-content, NOT a new round ----
      // e.g. "#### **Users Table**", "#### Example 1:" — these are labels
      // inside a larger answer (DB schema, examples). Skip them so the
      // following code/text flows into the current question.
      if (level >= 4) {
        continue;
      }

      // ---- level-2/3 unnumbered heading → a new question (NOT a round unless it is matched by isRoundHeader) ----
      if (level <= 3) {
        addQuestion(text);
        continue;
      }
    }

    // ---- numbered bold line: "12. **What is X?**" ----
    // Top-level (no leading whitespace) = a new question.
    // Indented (leading whitespace) = a sub-step INSIDE the current answer,
    //   e.g. "  1. **Controller**: The user triggers a notification request."
    const nq = t.match(/^(\d+)[.)]\s+\*\*(.+?)\*\*(.*)$/);
    if (nq) {
      if (isSystemDesign && currentQuestion) {
        appendAnswer(cleanText(nq[1] + ". " + nq[2] + " " + (nq[3] || "")));
      } else if (/^\s/.test(rawLine) && currentQuestion) {
        const sub = cleanText(nq[2] + " " + (nq[3] || "")).replace(/^:\s*/, "");
        appendAnswer(sub);
      } else {
        addQuestion(nq[2], nq[3]);
      }
      continue;
    }

    // ---- "Problem N: text" as a plain line ----
    const probPlain = t.match(/^problem\s*(\d+)?\s*:\s*(.+)$/i);
    if (probPlain) {
      addQuestion(probPlain[2]);
      continue;
    }

    // ---- "Question: text" / "Qn: text" as a plain line ----
    const qnPlain = t.match(/^(?:question|q\d+)\s*:\s*(.+)$/i);
    if (qnPlain) {
      addQuestion(qnPlain[1]);
      continue;
    }

    // ---- bullet line: "- **What is X?**" ----
    // Top-level bullet (no leading whitespace) = a new question.
    // Indented bullet (leading whitespace) under an open question = a
    // sub-point inside the answer, e.g. "  - **@Controller**: Marks a class..."
    const bq = t.match(/^-\s+\*\*(.+?)\*\*(.*)$/);
    if (bq) {
      const boldPart = bq[1].trim().replace(/:\s*$/, "");
      let trailing = (bq[2] || "").trim();
      trailing = trailing.replace(/^:\s*/, "").trim();
      // Join smartly: "Label: text" normally, but "Label → text" when the
      // trailing part already starts with an arrow/dash (no extra colon).
      const joinWith = (trail) =>
        trail && !/^[-→]/.test(trail) ? ": " + trail : trail ? " " + trail : "";
      if (isSystemDesign && currentQuestion) {
        appendAnswer("- " + boldPart + joinWith(trailing));
      } else if (/^\s/.test(rawLine) && currentQuestion) {
        // Indented sub-point inside an answer → append to the current answer
        appendAnswer(boldPart + (trailing ? ": " + trailing : ""));
      } else if (!trailing) {
        addQuestion(boldPart);
      } else {
        addQuestion(boldPart + joinWith(trailing));
      }
      continue;
    }

    // ---- "**Answer**: text" label ----
    const ansMatch = t.match(/^\*\*Answer\*\*:\s*(.*)$/i);
    if (ansMatch) {
      if (currentQuestion && ansMatch[1]) {
        appendAnswer(ansMatch[1]);
      }
      continue;
    }

    // ---- standalone "- Answer: text" / "Answer: text" ----
    if (currentQuestion && /^-?\s*\*\*?Answer\*\*?\s*:\s*(.+)$/i.test(t)) {
      const m =
        t.match(/^-?\s*\*\*Answer\*\*:\s*(.+)$/i) ||
        t.match(/^-?\s*Answer\s*:\s*(.+)$/i);
      if (m) {
        appendAnswer(m[1]);
        continue;
      }
    }

    // ---- everything else is answer content for the current question ----
    if (currentQuestion) {
      if (
        /^(question|example|input|output|java code|approach|answer|solution|constraints)\s*:\s*$/i.test(
          t.replace(/\*\*/g, ""),
        )
      ) {
        continue;
      }
      appendAnswer(t);
    }
  }

  if (inCode) addCode();

  return { rounds: rounds.filter((r) => r.questions.length > 0) };
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ---- Convert all .md files into per-company JS data files ----
if (!fs.existsSync(KIT_DIR)) {
  console.error("Interview kit directory not found:", KIT_DIR);
  process.exit(1);
}
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const companiesMap = new Map();

// Gather all .md files from the kit; use the subfolder name as the company.
const mdFiles = [];
for (const companyFolder of fs.readdirSync(KIT_DIR)) {
  const folderPath = path.join(KIT_DIR, companyFolder);
  if (!fs.statSync(folderPath).isDirectory()) continue;
  for (const f of fs.readdirSync(folderPath)) {
    if (f.toLowerCase().endsWith(".md")) {
      mdFiles.push({
        fileName: `${companyFolder}__${f}`,
        rawPath: path.join(folderPath, f),
      });
    }
  }
}
if (!mdFiles.length) {
  console.log("No .md files found in", KIT_DIR);
  process.exit(0);
}

for (const { fileName, rawPath } of mdFiles) {
  const sep = fileName.indexOf("__");
  const companyName =
    sep > -1 ? fileName.slice(0, sep) : fileName.replace(/\.md$/, "");
  const docName = (sep > -1 ? fileName.slice(sep + 2) : fileName).replace(
    /\.md$/,
    "",
  );
  const raw = fs.readFileSync(rawPath, "utf8");

  if (!companiesMap.has(companyName)) {
    companiesMap.set(companyName, {
      id: slugify(companyName),
      name: companyName,
      interviews: [],
      questionCount: 0,
    });
  }

  const company = companiesMap.get(companyName);
  const parsed = parseInterviewMarkdown(raw);
  const count = parsed.rounds.reduce((sum, r) => sum + r.questions.length, 0);
  company.interviews.push({
    name: docName,
    questionCount: count,
    rounds: parsed.rounds,
  });
  company.questionCount += count;
}

let totalQuestions = 0;
for (const company of companiesMap.values()) {
  totalQuestions += company.questionCount;
  const outFile = path.join(OUT_DIR, `data-${company.id}.js`);
  const json = JSON.stringify(company, null, 2);
  const banner =
    "// AUTO-GENERATED file — company-wise interview data.\n" +
    `// Source: ` +
    company.name +
    ` interview document(s).\n` +
    "// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs\n\n";
  fs.writeFileSync(
    outFile,
    banner + "export const company = " + json + ";\n",
    "utf8",
  );
  console.log(
    `✓ ${path.basename(outFile)}  (${company.questionCount} questions)`,
  );
}

console.log(
  `\nDone: ${companiesMap.size} companies, ${mdFiles.length} docs, ${totalQuestions} questions converted.`,
);
