import { useState } from "react";
import { Link } from "react-router-dom";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { companies, totalCompanyQuestions } from "../data/companyInterviews";
import HldDiagram from "../components/HldDiagram";
import "./CompanyInterview.css";

// Syntax highlight code using Highlight.js (same pattern as other pages)
const highlightCode = (code, language) => {
  try {
    let lang = language || "java";
    if (lang === "jsx" || lang === "tsx") lang = "javascript";
    const highlighted = hljs.highlight(code, {
      language: lang,
      ignoreIllegals: true,
    }).value;
    return highlighted;
  } catch {
    return code
      .replace(/&/g, "\x26amp;")
      .replace(/</g, "\x26lt;")
      .replace(/>/g, "\x26gt;");
  }
};

// Extract HLD component lines (containing arrow) from answer text.
// Strips leading numbering ("1. ") or bullets ("- ") so the cleaned
// string can be classified by classifyComponent inside HldDiagram.
const extractHldComponents = (text) => {
  if (!text) return [];
  const components = [];
  const arrow = "\u2192";
  text.split("\n").forEach((line) => {
    const trimmed = line.trim();
    // Skip table rows
    if (/^\|/.test(trimmed)) return;
    const arrowIdx = trimmed.indexOf(arrow);
    if (arrowIdx < 0) return;
    // Strip leading numbering (e.g. "1. ") or bullet ("- ")
    const cleaned = trimmed.replace(/^\d+\.\s+/, "").replace(/^-\s+/, "");
    // Skip API endpoint lines (e.g. "POST /auth/register → Register new users")
    if (/^(POST|GET|PUT|DELETE|PATCH|HEAD|OPTIONS)\s+\//i.test(cleaned)) return;
    if (cleaned && cleaned.indexOf(arrow) >= 0) {
      components.push(cleaned);
    }
  });
  return components;
};

// Render a multi-line answer with structure:
//  - "- " lines → bullet points
//  - "N. Title" / "N.N Title" → styled sub-headings
//  - "| ... |" lines → monospace table block
//  - everything else → paragraph
function AnswerContent({ text }) {
  if (!text) return null;
  const lines = text.split("\n");
  const blocks = [];
  let bullets = [];
  let table = [];

  const flushBullets = () => {
    if (bullets.length) {
      blocks.push({ type: "bullets", items: bullets });
      bullets = [];
    }
  };
  const flushTable = () => {
    if (table.length) {
      blocks.push({ type: "table", rows: table });
      table = [];
    }
  };

  for (const line of lines) {
    const l = line.trim();
    if (!l) {
      flushBullets();
      flushTable();
      continue;
    }
    if (/^\|.*\|$/.test(l)) {
      flushBullets();
      if (!/^\|[-\s|]+\|$/.test(l)) table.push(l);
      continue;
    }
    flushTable();
    if (/^-\s+/.test(l)) {
      bullets.push(l.replace(/^-\s+/, ""));
      continue;
    }
    flushBullets();
    if (/^\d+\.\s+\S/.test(l)) {
      blocks.push({ type: "h3", text: l });
      continue;
    }
    if (/^\d+\.\d+\s+\S/.test(l)) {
      blocks.push({ type: "h4", text: l });
      continue;
    }
    blocks.push({ type: "p", text: l });
  }
  flushBullets();
  flushTable();

  return (
    <div className="ci-answer-content">
      {blocks.map((b, i) => {
        if (b.type === "bullets")
          return (
            <ul className="ci-answer-list" key={i}>
              {b.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ul>
          );
        if (b.type === "h3")
          return (
            <h4 className="ci-answer-h3" key={i}>
              {b.text}
            </h4>
          );
        if (b.type === "h4")
          return (
            <h5 className="ci-answer-h4" key={i}>
              {b.text}
            </h5>
          );
        if (b.type === "table")
          return (
            <pre className="ci-answer-table" key={i}>
              {b.rows.join("\n")}
            </pre>
          );
        return (
          <p className="ci-answer-text" key={i}>
            {b.text}
          </p>
        );
      })}
    </div>
  );
}

const COMPANY_COLORS = [
  "#c084fc",
  "#60a5fa",
  "#4ade80",
  "#fbbf24",
  "#f472b6",
  "#38bdf8",
  "#a78bfa",
  "#fb923c",
];

// Detect the round type to color the step badge
function roundBadge(name) {
  const n = name.replace(/\*\*/g, "").toLowerCase();
  if (/(coding|hackerrank|online|aptitude|pen & paper|pen and paper)/.test(n))
    return "coding";
  if (/(hr|human|manager|hiring|offer)/.test(n)) return "hr";
  if (/(system design|design)/.test(n)) return "design";
  if (
    /(l1|l2|l3|technical|tech|profile|client|walk-in|round|interview)/.test(n)
  )
    return "technical";
  return "general";
}

function CompanyInterview() {
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [search, setSearch] = useState("");
  const [filterRound, setFilterRound] = useState("all");

  const selectedCompany = companies.find((c) => c.id === selectedCompanyId);

  const toggleQuestion = (uid) => {
    setExpandedId(expandedId === uid ? null : uid);
  };

  const backToList = () => {
    setSelectedCompanyId(null);
    setExpandedId(null);
    setFilterRound("all");
  };

  // Company list view
  if (!selectedCompany) {
    const filtered = companies.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()),
    );

    return (
      <div className="company-interview-page">
        <section className="ci-hero">
          <Link to="/" className="back-button">
            ← Back to Home
          </Link>
          <h1 className="ci-title">🏢 Company-wise Interviews</h1>
          <p className="ci-subtitle">
            Real interview questions & answers asked at top companies —
            organised exactly as the interviewer asked them, round by round.
            Click a company to walk through its Full Interview Journey.
          </p>
          <div className="ci-stats">
            <span className="ci-stat">{companies.length} Companies</span>
            <span className="ci-stat">{totalCompanyQuestions} Questions</span>
            <span className="ci-stat">Round-by-Round</span>
          </div>
          <input
            type="text"
            className="ci-search"
            placeholder="🔍 Search company…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </section>

        <section className="ci-content">
          <div className="ci-grid">
            {filtered.map((company, idx) => (
              <div
                key={company.id}
                className="ci-company-card"
                style={{
                  "--ci-color": COMPANY_COLORS[idx % COMPANY_COLORS.length],
                }}
                onClick={() => setSelectedCompanyId(company.id)}
              >
                <div className="ci-company-logo" aria-hidden="true">
                  {company.name.charAt(0).toUpperCase()}
                </div>
                <h3 className="ci-company-name">{company.name}</h3>
                <p className="ci-company-meta">
                  {company.interviews.length}{" "}
                  {company.interviews.length === 1 ? "interview" : "interviews"}{" "}
                  · {company.questionCount}{" "}
                  {company.questionCount === 1 ? "question" : "questions"}
                </p>
                <span className="ci-company-cta">View Interview Journey →</span>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="ci-empty">No companies match "{search}"</p>
            )}
          </div>
        </section>
      </div>
    );
  }

  // -------- Interview Journey view (round by round, in order) --------
  // Flatten all rounds across all interviews into one ordered list
  const allRounds = [];
  selectedCompany.interviews.forEach((interview, interviewIdx) => {
    interview.rounds.forEach((round, roundIdx) => {
      allRounds.push({
        roundNumber: allRounds.length + 1,
        interviewName:
          selectedCompany.interviews.length > 1 ? interview.name : null,
        interviewIdx,
        roundIdx,
        round,
      });
    });
  });

  const visibleRounds =
    filterRound === "all"
      ? allRounds
      : allRounds.filter((r) => roundBadge(r.round.name) === filterRound);

  const roundFilters = [
    { value: "all", label: "All Rounds" },
    { value: "technical", label: "Technical" },
    { value: "coding", label: "Coding" },
    { value: "design", label: "System Design" },
    { value: "hr", label: "HR / Manager" },
  ];

  return (
    <div className="company-interview-page">
      <section className="ci-hero">
        <button className="back-button ci-back-btn" onClick={backToList}>
          ← All Companies
        </button>
        <h1 className="ci-title">
          {selectedCompany.name} <span className="ci-flow">Interview Flow</span>
        </h1>
        <p className="ci-subtitle">
          {selectedCompany.name} interview experience — rounds shown in the
          exact order they happened. Click a question to reveal its answer.
        </p>
        <div className="ci-stats">
          <span className="ci-stat">{allRounds.length} Rounds</span>
          <span className="ci-stat">
            {selectedCompany.questionCount} Questions
          </span>
        </div>

        {/* Round filter chips */}
        <div className="ci-round-filters">
          {roundFilters.map((f) => (
            <button
              key={f.value}
              className={`ci-round-filter ${
                filterRound === f.value ? "active" : ""
              }`}
              onClick={() => setFilterRound(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Round timeline — steps in interview order */}
      <section className="ci-timeline">
        {visibleRounds.map((round) => (
          <div
            className="ci-round-block"
            key={`${round.interviewIdx}-${round.roundIdx}`}
          >
            <div className="ci-round-header">
              <span
                className={`ci-round-badge ci-badge-${roundBadge(round.round.name)}`}
              >
                Round {round.roundNumber}
              </span>
              <div className="ci-round-title-wrap">
                {round.interviewName && (
                  <div className="ci-doc-label">📄 {round.interviewName}</div>
                )}
                <h3 className="ci-round-title">{round.round.name}</h3>
              </div>
              <span className="ci-round-qcount">
                {round.round.questions.length}{" "}
                {round.round.questions.length === 1 ? "Q" : "Qs"}
              </span>
            </div>

            <div className="ci-questions">
              {round.round.questions.map((q, qIdx) => {
                const uid = `${round.interviewIdx}-${round.roundIdx}-${qIdx}`;
                const hldComponents = extractHldComponents(q.answer);
                return (
                  <div
                    key={uid}
                    className={`ci-question ${
                      expandedId === uid ? "active" : ""
                    }`}
                  >
                    <div
                      className="ci-question-header"
                      onClick={() => toggleQuestion(uid)}
                    >
                      <span className="ci-q-number">
                        {round.roundNumber}.{qIdx + 1}
                      </span>
                      <p className="ci-q-text">{q.question}</p>
                      <span
                        className={`ci-arrow ${
                          expandedId === uid ? "expanded" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </div>
                    {expandedId === uid && (
                      <div className="ci-answer-wrap">
                        <div className="ci-answer">
                          <h4 className="ci-answer-title">Answer:</h4>
                          <AnswerContent text={q.answer} />
                          {hldComponents.length > 0 && (
                            <HldDiagram
                              title="Architecture Diagram"
                              components={hldComponents}
                            />
                          )}
                          {q.code && (
                            <div className="ci-code-block">
                              <div className="ci-code-header">
                                <span className="ci-code-lang">
                                  {q.code.language || "java"}
                                </span>
                              </div>
                              <pre
                                className={`language-${
                                  q.code.language || "java"
                                }`}
                              >
                                <code
                                  className={`language-${
                                    q.code.language || "java"
                                  }`}
                                  dangerouslySetInnerHTML={{
                                    __html: highlightCode(
                                      q.code.content,
                                      q.code.language,
                                    ),
                                  }}
                                />
                              </pre>
                            </div>
                          )}
                          {!q.answer && !q.code && (
                            <p className="ci-answer-text">
                              <em>
                                (No written answer provided — refer to the
                                question and prepare your own.)
                              </em>
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {visibleRounds.length === 0 && (
          <p className="ci-empty">
            No rounds in this filter. Switch to "All Rounds".
          </p>
        )}
      </section>
    </div>
  );
}

export default CompanyInterview;
