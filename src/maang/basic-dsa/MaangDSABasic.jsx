import {
  memo,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Link } from "react-router-dom";
import VideoPlayerModal from "../../components/VideoPlayerModal";
import {
  dsaBasicProblems as BASIC_PROBLEMS,
  googleSeriesIntro,
} from "./dsaBasicProblems";
import "./MaangDSABasic.css";
const difficulties = ["All", "Easy", "Medium", "Hard"];

// Weekly rules: exactly 10 questions per week
//   • Mon–Fri : QUESTIONS_PER_DAY questions each day (= 10 new/week)
//   • Saturday: exam over THIS week's topics only
//   • Sunday  : revision exam over ALL previously completed weeks
const WEEKDAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const QUESTIONS_PER_DAY = 2;
const QUESTIONS_PER_WEEK = WEEKDAY_NAMES.length * QUESTIONS_PER_DAY; // 10

/**
 * Deterministic pseudo-random picker (mulberry32-style xorshift).
 * Same seed → same result every render, so the weekend quizzes stay
 * stable for a given week instead of reshuffling on every re-render.
 */
function seededPick(items, count, seed) {
  const arr = [...items];
  let s = seed >>> 0 || 1;
  const rand = () => {
    s ^= s << 13;
    s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5;
    s >>>= 0;
    return s / 4294967296;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

/**
 * Shared problem card — used by BOTH the Weekly Preparation grid and
 * the Problem Library grid so they look identical.
 *
 * Props:
 *   problem : the DSA problem object
 *   onOpen  : opens the video modal for this problem
 *   chip    : optional small label (e.g. "Mon") shown in the card top row
 */
const ProblemCard = memo(function ProblemCard({ problem, onOpen, chip }) {
  const color = topicColors[problem.topic] || "#60a5fa";
  const hasVideo = !!problem.videoLink;
  return (
    <div
      className="mdsa-problem-card"
      style={{ "--topic-color": color }}
      role="button"
      tabIndex={0}
      aria-label={`${problem.title} — ${problem.difficulty} ${problem.topic}`}
      onClick={() => onOpen(problem)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(problem);
        }
      }}
    >
      <div className="mdsa-problem-top">
        <span
          className={`mdsa-difficulty-badge mdsa-${problem.difficulty.toLowerCase()}`}
        >
          {problem.difficulty}
        </span>
        {chip && <span className="mdsa-extra-chip">{chip}</span>}
        {problem.srcWeek && (
          <span
            className="mdsa-extra-chip"
            title={`Asked from Week ${problem.srcWeek}`}
          >
            W{problem.srcWeek}
          </span>
        )}
        <span
          className="mdsa-problem-platform"
          style={{ "--platform-color": color }}
          title={`Solve on ${
            problem.platform === "leetcode" ? "LeetCode" : "GeeksforGeeks"
          }`}
        >
          {problem.platform === "leetcode" ? "LC" : "GFG"}
        </span>
      </div>
      <div className="mdsa-problem-body">
        <span className="mdsa-problem-id">#{problem.id}</span>
        <h3 className="mdsa-problem-title">{problem.title}</h3>
        <span className="mdsa-problem-topic">
          {problem.topic}
        </span>
      </div>
      <div className="mdsa-problem-footer">
        <div
          className={`mdsa-video-btn ${hasVideo ? "available" : "soon"}`}
          title={hasVideo ? "Watch video solution" : "Video coming soon"}
        >
          {hasVideo ? "▶ Watch" : "⏳ Soon"}
        </div>
        <a
          href={problem.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mdsa-solve-btn"
          onClick={(e) => e.stopPropagation()}
          title="Open problem"
        >
          Solve →
        </a>
      </div>
    </div>
  );
});

// Assign a consistent color per topic (full 27-topic master palette)
const topicColors = {
  // Part 1 — Basic (Array & String algorithms)
  Arrays: "#38bdf8",
  Strings: "#34d399",
  "Sliding Window": "#22d3ee",
  "Two Pointers": "#2dd4bf",
  "Prefix Sum": "#14b8a6",
  "Binary Search": "#f472b6",
  Sorting: "#60a5fa",
  Recursion: "#fb7185",
  Backtracking: "#fba74c",
  Greedy: "#eab308",
  "Bit Manipulation": "#a78bfa",
  Math: "#f59e0b",
  // Part 2 — Data Structures
  Stacks: "#f97316",
  Queues: "#fb923c",
  "Linked Lists": "#4ade80",
  Trees: "#84cc16",
  Tries: "#93c5fd",
  Heaps: "#c084fc",
  // Part 3 — Graphs & DP
  "Graph Traversal": "#f87171",
  "Graph Components": "#ef4444",
  "1D DP": "#818cf8",
  "2D DP": "#a855f7",
  "String DP": "#c084fc",
  "Grid DP": "#e879f9",
  "Knapsack DP": "#f472b6",
  "Partition DP": "#facc15",
  "DP on Trees": "#4ade80",
};

function DsaSheetPage({
  sheetTitle = "Basic DSA",
  titleAccent = "A → Z",
  problems = BASIC_PROBLEMS,
  introLink = googleSeriesIntro.videoLink,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [view, setView] = useState("weekly"); // "weekly" | "library"

  const topics = useMemo(
    () => ["All", ...Array.from(new Set(problems.map((p) => p.topic)))],
    [problems],
  );


  // Stats
  const easy = problems.filter((p) => p.difficulty === "Easy").length;
  const medium = problems.filter((p) => p.difficulty === "Medium").length;
  const hard = problems.filter((p) => p.difficulty === "Hard").length;
  const total = problems.length;

  // Filtered list
  const filtered = useMemo(() => {
    return problems.filter((p) => {
      const topicMatch = selectedTopic === "All" || p.topic === selectedTopic;
      const diffMatch =
        selectedDifficulty === "All" || p.difficulty === selectedDifficulty;
      return topicMatch && diffMatch;
    });
  }, [selectedTopic, selectedDifficulty]);

  // Group problems by topic so the library can render separate grids per
  // category (each with its own heading + accent colour) when "All" is chosen.
  const topicOrder = useMemo(() => {
    return Array.from(new Set(problems.map((p) => p.topic)));
  }, [problems]);

  const filteredGroups = useMemo(() => {
    const groups = new Map();
    for (const p of filtered) {
      (groups.get(p.topic) || groups.set(p.topic, []).get(p.topic)).push(p);
    }
    // Keep a stable, predictable topic order (not insertion-from-filter order)
    const ordered = [];
    for (const t of topicOrder) {
      if (groups.has(t)) ordered.push({ topic: t, color: topicColors[t] || "#60a5fa", problems: groups.get(t) });
    }
    return ordered;
  }, [filtered, topicOrder]);

  // ---- Weekly planning --------------------------------------------------
  // Every week teaches 10 NEW questions (2 per day, Mon–Fri).
  //   saturday → THIS week's questions (weekly topic test)
  //   sunday   → every question from all PREVIOUS completed weeks
  const weeklyPlan = useMemo(() => {
    const sorted = [...problems].sort((a, b) => a.id - b.id);
    const weeks = [];
    const allPrev = []; // tagged questions from completed previous weeks
    let idx = 0;

    while (idx < sorted.length) {
      const weekdaysList = [];
      for (let d = 0; d < 5 && idx < sorted.length; d++) {
        const dayProblems = [];
        while (dayProblems.length < QUESTIONS_PER_DAY && idx < sorted.length) {
          dayProblems.push(sorted[idx]);
          idx++;
        }
        weekdaysList.push({
          dayName: WEEKDAY_NAMES[d],
          problems: dayProblems,
        });
      }

      const weekQuestions = weekdaysList.flatMap((d) => d.problems);
      if (weekQuestions.length === 0) break;

      const weekNum = weeks.length + 1;

      // Sunday pool = current week + everything before it (tagged with
      // the week they came from so the card can show a "W{n}" chip)
      const tagged = weekQuestions.map((p) => ({ ...p, srcWeek: weekNum }));
      const revisionPool = [...allPrev, ...tagged];

      weeks.push({
        week: weekNum,
        weekdays: weekdaysList,
        // Saturday: 2 problems picked from THIS week's topics
        saturday: {
          label: "Weekly Topic Test",
          problems: seededPick(weekQuestions, 2, weekNum * 1013904223 + 1),
        },
        // Sunday: 2 random problems from current OR previous weeks
        sunday: {
          label: "Random Revision Quiz",
          problems: seededPick(revisionPool, 2, weekNum * 22695477 + 7),
        },
      });

      allPrev.push(...tagged);
    }
    return weeks;
  }, [problems]);

  const openVideo = useCallback((problem) => {
    setSelectedProblem(problem);
    setModalOpen(true);
  }, []);
  const closeVideo = useCallback(() => {
    setSelectedProblem(null);
    setModalOpen(false);
  }, []);

  const currentWeek = weeklyPlan.find((w) => w.week === selectedWeek);
  const satCount = currentWeek?.saturday?.problems.length ?? 0;
  const sunCount = currentWeek?.sunday?.problems.length ?? 0;

  return (
    <div className="mdsa-page">
      {/* ===== HERO ===== */}
      <section className="mdsa-hero">
        <Link to="/maang" className="mdsa-back">
          ← Back to MAANG Preparation
        </Link>

        <div className="mdsa-hero-inner">
          <div className="mdsa-hero-text">
            <h1 className="mdsa-title">
              {sheetTitle}{" "}
              <span className="mdsa-title-accent">{titleAccent}</span>
            </h1>
            <p className="mdsa-subtitle">
              {problems.length} essential DSA problems — structured into{" "}
              {weeklyPlan.length} weekly plans ({QUESTIONS_PER_DAY} questions a
              day, Mon–Fri). Weekend quizzes: 2 questions on Sat from the
              week&apos;s topics and 2 random on Sun from current &amp; past
              weeks. Watch video solutions in Telugu, solve on LeetCode /
              GeeksforGeeks.
            </p>
          </div>
          <div className="mdsa-hero-video">
            <a
              className="mdsa-intro-video"
              href={introLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Watch Google Crack Coding Series Intro"
            >
              <span className="mdsa-video-play">▶</span>
              <span className="mdsa-video-label">Intro Video</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="mdsa-stats">
        <div className="mdsa-stat-card">
          <span className="mdsa-stat-num">{total}</span>
          <span className="mdsa-stat-label">Total Problems</span>
        </div>
        <div className="mdsa-stat-card easy">
          <span className="mdsa-stat-num">{easy}</span>
          <span className="mdsa-stat-label">Easy</span>
        </div>
        <div className="mdsa-stat-card medium">
          <span className="mdsa-stat-num">{medium}</span>
          <span className="mdsa-stat-label">Medium</span>
        </div>
        <div className="mdsa-stat-card hard">
          <span className="mdsa-stat-num">{hard}</span>
          <span className="mdsa-stat-label">Hard</span>
        </div>
      </section>

      {/* ===== VIEW SWITCHER — only one section visible at a time ===== */}
      <div className="mdsa-week-selector mdsa-view-bar">
        <label htmlFor="mdsa-view-select">Show:</label>
        <select
          id="mdsa-view-select"
          className="mdsa-week-select"
          value={view}
          onChange={(e) => setView(e.target.value)}
          aria-label="Switch between weekly preparation plan and problem library"
        >
          <option value="weekly">📅 Weekly Preparation Plan</option>
          <option value="library">📚 Problem Library</option>
        </select>
      </div>

      {/* ===== WEEKLY PLANNER (Weekly view only) ===== */}
      {view === "weekly" && (
      <section className="mdsa-weekly-section">
        <h2 className="mdsa-section-title">📅 Weekly Preparation Plan</h2>
        <p className="mdsa-section-subtitle">
          {weeklyPlan.length} weeks • {QUESTIONS_PER_DAY} questions/day
          (Mon–Fri) = <strong>{QUESTIONS_PER_WEEK} questions every week</strong>{" "}
          • Sat quiz: 2 from this week • Sun quiz: 2 random (current + past)
        </p>

        <div className="mdsa-week-selector">
          <span>Jump to Week:</span>
          <select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(Number(e.target.value))}
            className="mdsa-week-select"
          >
            {weeklyPlan.map((w) => (
              <option key={w.week} value={w.week}>
                Week {w.week}
              </option>
            ))}
          </select>
        </div>

        <div className="mdsa-week-card">
          <div className="mdsa-week-header">
            <span className="mdsa-week-badge">Week {currentWeek?.week}</span>
            <h3 className="mdsa-week-title">Practice Schedule</h3>
          </div>

          {/* Practice problems rendered as the same cards the library uses */}
          <h4 className="mdsa-grid-heading">This Week&apos;s Practice</h4>
          <div className="mdsa-topics-grid">
            {currentWeek?.weekdays.map((wd) =>
              wd.problems.map((p) => (
                <ProblemCard
                  key={p.id}
                  problem={p}
                  onOpen={openVideo}
                  chip={wd.dayName}
                />
              )),
            )}
          </div>

          {/* Weekend Exams */}
          <div className="mdsa-exam-row">
            <div
              className="mdsa-exam-card"
              style={{ "--exam-color": "#ef4444" }}
            >
              <div className="mdsa-exam-header">
                <span className="mdsa-exam-day">
                  {currentWeek?.saturday?.dayName || "Sat"}
                </span>
                <span className="mdsa-exam-label">
                  {currentWeek?.saturday?.label}
                </span>
              </div>
              <div className="mdsa-rev-note">
                2 questions picked from this week&apos;s topics.
              </div>
              <div className="mdsa-exam-problems">
                {currentWeek?.saturday?.problems.map((p) => (
                  <div
                    key={"sat-" + p.id}
                    className="mdsa-exam-problem mdsa-clickable"
                    role="button"
                    tabIndex={0}
                    onClick={() => openVideo(p)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") openVideo(p);
                    }}
                  >
                    <span
                      className={`mdsa-mini-difficulty mdsa-${p.difficulty.toLowerCase()}`}
                    >
                      {p.difficulty}
                    </span>
                    <span className="mdsa-mini-title">{p.title}</span>
                  </div>
                ))}
              </div>
              <div className="mdsa-exam-badge">{satCount} Qs Quiz</div>
            </div>

            <div
              className="mdsa-exam-card"
              style={{ "--exam-color": "#a78bfa" }}
            >
              <div className="mdsa-exam-header">
                <span className="mdsa-exam-day">Sun</span>
                <span className="mdsa-exam-label">
                  {currentWeek?.sunday?.label}
                </span>
              </div>
              <div className="mdsa-rev-note">
                2 random questions from this week or any previous week.
              </div>
              <div className="mdsa-exam-problems">
                {currentWeek?.sunday?.problems.length ? (
                  currentWeek.sunday.problems.map((p) => (
                    <div
                      key={"sun-" + p.id}
                      className="mdsa-exam-problem mdsa-clickable"
                      role="button"
                      tabIndex={0}
                      onClick={() => openVideo(p)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") openVideo(p);
                      }}
                    >
                      <span
                        className={`mdsa-mini-difficulty mdsa-${p.difficulty.toLowerCase()}`}
                      >
                        {p.difficulty}
                      </span>
                      <span className="mdsa-mini-title">{p.title}</span>
                      {p.srcWeek && (
                        <span
                          className="mdsa-src-week"
                          title={`From Week ${p.srcWeek}`}
                        >
                          W{p.srcWeek}
                        </span>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="mdsa-rev-note">
                    Revision pool builds as weeks complete 💪
                  </div>
                )}
              </div>
              <div className="mdsa-exam-badge">{sunCount} Qs Random</div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ===== PROBLEM LIBRARY (Library view only) ===== */}
      {view === "library" && (
      <>
      <section className="mdsa-filters-section">
        <h2 className="mdsa-section-title">📚 Problem Library</h2>
        <div className="mdsa-filter-bar">
          <div className="mdsa-filter-group">
            <label>Topic:</label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="mdsa-filter-select"
            >
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="mdsa-filter-group">
            <label>Difficulty:</label>
            <div className="mdsa-difficulty-chips">
              {difficulties.map((d) => (
                <button
                  key={d}
                  className={`mdsa-diff-chip ${selectedDifficulty === d ? "active" : ""} ${
                    d.toLowerCase() === "easy"
                      ? "easy"
                      : d.toLowerCase() === "medium"
                        ? "medium"
                        : d.toLowerCase() === "hard"
                          ? "hard"
                          : ""
                  }`}
                  onClick={() => setSelectedDifficulty(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <span className="mdsa-filter-count">{filtered.length} problems</span>
        </div>
      </section>

      {/* ===== PROBLEM GRID (category-grouped when "All" selected) ===== */}
      {filtered.length === 0 ? (
        <section className="mdsa-topics-grid">
          <div className="mdsa-empty">
            No problems match your filters. Try changing the topic or
            difficulty.
          </div>
        </section>
      ) : selectedTopic === "All" ? (
        // Grouped view: one colourful grid per category
        <div className="mdsa-category-groups">
          {filteredGroups.map((grp) => (
            <section key={grp.topic} className="mdsa-category-group">
              <div
                className="mdsa-category-heading"
                style={{ "--cat-color": grp.color }}
              >
                <span
                  className="mdsa-category-dot"
                  style={{ background: grp.color }}
                  aria-hidden="true"
                />
                <h3 className="mdsa-category-title">{grp.topic}</h3>
                <span className="mdsa-category-count">
                  {grp.problems.length} problem
                  {grp.problems.length === 1 ? "" : "s"}
                </span>
              </div>
              <div className="mdsa-topics-grid">
                {grp.problems.map((p) => (
                  <ProblemCard key={p.id} problem={p} onOpen={openVideo} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        // Single category selected → one flat grid
        <section className="mdsa-topics-grid">
          {filtered.map((p) => (
            <ProblemCard key={p.id} problem={p} onOpen={openVideo} />
          ))}
        </section>
      )}
      </>
      )}

      {/* ===== Video Modal ===== */}
      <VideoPlayerModal
        isOpen={modalOpen}
        onClose={closeVideo}
        videoUrl={selectedProblem?.videoLink || ""}
        title={selectedProblem?.title || ""}
        description={selectedProblem?.description || ""}
      />
    </div>
  );
}

/* Page wrappers ---------------------------------------------------- */

function MaangDSABasic() {
  return (
    <DsaSheetPage
      sheetTitle="Basic DSA"
      titleAccent="Part 1"
      problems={BASIC_PROBLEMS}
      introLink={googleSeriesIntro.videoLink}
    />
  );
}

export default MaangDSABasic;
export { DsaSheetPage };
