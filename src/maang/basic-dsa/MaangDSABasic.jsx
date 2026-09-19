import { memo, useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import VideoPlayerModal from "../../components/VideoPlayerModal";
import {
  dsaBasicProblems as BASIC_PROBLEMS,
  googleSeriesIntro,
} from "./dsaBasicProblems";
import {
  buildWeeklyPlan,
  saturdayAssessment,
  sundayAssessment,
} from "./weeklyPlan";
import leetcodeLogo from "../../assets/leetcode-logo.png";
import gfgLogo from "../../assets/gfg-logo.png";
import youtubeLogo from "../../assets/youtube-logo.svg";
import "./MaangDSABasic.css";
const difficulties = ["All", "Easy", "Medium", "Hard"];

// Default hidden state for each assessment day (Sat / Sun) in a week's plan.
// Kept at module scope so it stays a stable reference for the reveal logic.
const HIDDEN_DAY = { shown: false, nonce: 0 };

/**
 * Shared problem card — used by the Problem Library grid.
 *
 * Props:
 *   problem : the DSA problem object
 *   onOpen  : opens the video modal for this problem
 *   chip    : optional small label shown in the card top row
 */
const ProblemCard = memo(function ProblemCard({ problem, onOpen }) {
  const hasVideo = !!problem.videoLink;
  const description =
    problem.description ||
    "Practice this problem and build stronger algorithmic thinking with a focused DSA approach.";

  const difficultyLong = problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1);
  const difficultyLabel = difficultyLong === "Hard" ? "HARD" : difficultyLong;
  const platformColors =
    problem.platform === "leetcode"
      ? { bg: "linear-gradient(135deg,#f59e0b,#d97706)", text: "#ffffff" }
      : problem.platform === "gfg"
      ? { bg: "linear-gradient(135deg,#22c55e,#16a34a)", text: "#ffffff" }
      : { bg: "linear-gradient(135deg,#ef4444,#dc2626)", text: "#ffffff" };
  const platformLabel =
    problem.platform === "leetcode"
      ? "LeetCode"
      : problem.platform === "gfg"
      ? "GFG"
      : "YouTube";
  const platformLogo =
    problem.platform === "leetcode"
      ? leetcodeLogo
      : problem.platform === "gfg"
      ? gfgLogo
      : youtubeLogo;

  return (
    <div
      className="mdsa-problem-card"
      style={{
        "--topic-color": topicColors[problem.topic] || "#60a5fa",
        "--platform-bg": platformColors.bg,
        "--platform-text": platformColors.text,
      }}
      role="button"
      tabIndex={0}
      aria-label={`${problem.title} - ${problem.difficulty} ${problem.topic}`}
      onClick={() => onOpen(problem)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(problem);
        }
      }}
    >
      <div className="mdsa-problem-top">
        <span className="mdsa-problem-id">#{problem.id}</span>
      </div>

      <div className="mdsa-problem-body">
        <h3 className="mdsa-problem-title">{problem.title}</h3>
        <p className="mdsa-problem-description">{description}</p>
        <span
          className={`mdsa-difficulty-badge mdsa-${problem.difficulty.toLowerCase()}`}
        >
          {difficultyLabel}
        </span>
      </div>

      <div className="mdsa-problem-footer">
        <div
          className={`mdsa-video-btn ${hasVideo ? "available" : "soon"}`}
          title={hasVideo ? "Watch video solution" : "Video coming soon"}
        >
          <img
            className="mdsa-video-logo"
            src={youtubeLogo}
            alt="YouTube"
          />
          <span className="mdsa-solve-text">
            {hasVideo ? "YouTube" : "Soon"}
          </span>
        </div>
        <a
          href={problem.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mdsa-solve-btn"
          onClick={(e) => e.stopPropagation()}
          title="Solve this problem"
          data-platform={problem.platform}
          style={{ background: platformColors.bg, color: platformColors.text }}
        >
          <img
            className="mdsa-solve-logo"
            src={platformLogo}
            alt={platformLabel}
          />
          <span className="mdsa-solve-text">{platformLabel}</span>
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
  showWeeklyPlan = false,
  pageTheme = "basic",
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [weekOffset, setWeekOffset] = useState(0);

  // Saturday/Sunday assessment questions are HIDDEN by default and only shown
  // when the learner taps the reveal button. Each reveal/"get new questions"
  // tap rolls a fresh random seed (nonce) so the exact questions change, while
  // the RULES (Sat → this week's 10, Sun → last week + this week) stay fixed.
  //
  // The state is keyed by 0-based week index, so switching weeks automatically
  // starts that week hidden again — nobody can memorise a week's assessment
  // from a previously-opened pane.
  const [assessmentReveal, setAssessmentReveal] = useState({});

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
  }, [selectedTopic, selectedDifficulty, problems]);

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
      if (groups.has(t))
        ordered.push({
          topic: t,
          color: topicColors[t] || "#60a5fa",
          problems: groups.get(t),
        });
    }
    return ordered;
  }, [filtered, topicOrder]);

  const openVideo = useCallback((problem) => {
    setSelectedProblem(problem);
    setModalOpen(true);
  }, []);
  const closeVideo = useCallback(() => {
    setSelectedProblem(null);
    setModalOpen(false);
  }, []);

  // Weekly preparation schedule (Mon–Fri learn · Sat/Sun assessments).
  // Only rendered on pages that opt in via showWeeklyPlan.
  const weeklyPlan = useMemo(
    () => (showWeeklyPlan ? buildWeeklyPlan(problems, weekOffset) : null),
    [showWeeklyPlan, problems, weekOffset],
  );

  // Reveal state for the week currently on screen (fresh week → both hidden).
  const currentReveal = weeklyPlan
    ? (assessmentReveal[weeklyPlan.weekIdx] || {
        sat: HIDDEN_DAY,
        sun: HIDDEN_DAY,
      })
    : null;

  const rollAssessment = useCallback(
    (key) => {
      // Guard for the (non-weekly) pages where weeklyPlan is null.
      if (!weeklyPlan) return;
      // Fresh random nonce → different questions on every tap, same rules.
      const nonce = Math.floor(Math.random() * 1_000_000_000) + 1;
      const weekIdx = weeklyPlan.weekIdx;
      setAssessmentReveal((prev) => {
        const weekAll = prev?.[weekIdx] || {
          sat: HIDDEN_DAY,
          sun: HIDDEN_DAY,
        };
        return {
          ...prev,
          [weekIdx]: { ...weekAll, [key]: { shown: true, nonce } },
        };
      });
    },
    [weeklyPlan],
  );

  return (
    <div
      className={`mdsa-page mdsa-page-${pageTheme}${
        showWeeklyPlan ? " mdsa-page-weekly" : ""
      }`}
    >
      {/* ===== HERO ===== */}
      <section className="mdsa-hero">
        <Link to="/maang" className="mdsa-back">
          ← Back to MAANG Preparation
        </Link>

        {/* Small stat boxes, top-right of the header */}
        <section className="mdsa-stats">
          <div className="mdsa-stat-card total">
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

        <div className="mdsa-hero-inner">
          <div className="mdsa-hero-text">
            <h1 className="mdsa-title">
              {sheetTitle}{" "}
              <span className="mdsa-title-accent">{titleAccent}</span>
            </h1>
            <p className="mdsa-subtitle">
              {problems.length} essential DSA problems. Watch video solutions in
              Telugu, solve on LeetCode / GeeksforGeeks.
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
              <img
                className="mdsa-intro-logo"
                src={youtubeLogo}
                alt="YouTube"
              />
              <span className="mdsa-video-text">
                <span className="mdsa-video-label">Watch Intro</span>
                <span className="mdsa-video-sub">Start here · 2 min</span>
              </span>
              <span className="mdsa-video-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== WEEKLY PREPARATION (Mon–Fri learn · Sat/Sun assess) ===== */}
      {weeklyPlan && (
        <section className="mdsa-wp">
          <div className="mdsa-wp-header">
            <h2 className="mdsa-section-title">Week {weeklyPlan.weekNo}</h2>
            <div className="mdsa-wp-nav">
              <button
                className="mdsa-wp-nav-btn"
                onClick={() => setWeekOffset((w) => w - 1)}
                disabled={!weeklyPlan.canGoPrev}
                aria-label="Previous week"
              >
                ← Prev
              </button>
              <button
                className={`mdsa-wp-nav-btn mdsa-wp-now${weekOffset === 0 ? " active" : ""}`}
                onClick={() => setWeekOffset(0)}
                disabled={weekOffset === 0}
              >
                This Week
              </button>
              <button
                className="mdsa-wp-nav-btn"
                onClick={() => setWeekOffset((w) => w + 1)}
                aria-label="Next week"
              >
                Next →
              </button>
            </div>
          </div>

          {/* One full-width section per day, top to bottom: Mon → Sun */}
          <div className="mdsa-wp-days">
            {weeklyPlan.days.map((day, i) => {
              const isToday =
                weekOffset === 0 && day.jsDay === new Date().getDay();
              // Weekend days are assessments — hidden until revealed.
              const isAssessment =
                day.type === "test-week" || day.type === "test-mixed";
              const revealInfo = isAssessment
                ? currentReveal?.[day.key]
                : null;
              const shown = revealInfo ? revealInfo.shown : true;

              // Randomized assessment problems — generated fresh on every
              // reveal / "get new questions" click. The RULES stay identical:
              // Sat → this week's 10, Sun → last week + this week (never
              // duplicates). Practice days (Mon–Fri) stay in track order.
              let dayProblems;
              if (!isAssessment) {
                dayProblems = day.problems;
              } else if (!shown) {
                dayProblems = [];
              } else if (day.key === "sat") {
                dayProblems = saturdayAssessment(
                  problems,
                  weeklyPlan.weekIdx,
                  revealInfo.nonce,
                );
              } else {
                dayProblems = sundayAssessment(
                  problems,
                  weeklyPlan.weekIdx,
                  revealInfo.nonce,
                ).problems;
              }

              return (
                <article
                  key={day.key}
                  className={`mdsa-wp-day ${day.type}${isToday ? " today" : ""}${
                    isAssessment ? " mdsa-wp-day-assess" : ""
                  }`}
                >
                  <header className="mdsa-wp-day-head">
                    <span className="mdsa-wp-day-no">{i + 1}</span>
                    <h3 className="mdsa-wp-day-name">{day.name}</h3>
                    <span className={`mdsa-wp-tag ${day.type}`}>
                      {day.type === "practice"
                        ? "Learn · 2 new"
                        : day.type === "test-week"
                          ? "Assessment · this week"
                          : "Assessment · prev + this"}
                    </span>
                    {isToday && (
                      <span className="mdsa-wp-today-chip">Today</span>
                    )}
                  </header>

                  <div className="mdsa-wp-day-problems">
                    {isAssessment && !shown && (
                      <p className="mdsa-wp-random-note">
                        Questions are chosen at random — your set appears below
                        when you tap reveal.
                      </p>
                    )}

                    {isAssessment && !shown ? (
                      <button
                        type="button"
                        className={`mdsa-wp-reveal-btn ${day.type}`}
                        onClick={() => rollAssessment(day.key)}
                      >
                        🔒 Reveal assessment questions
                      </button>
                    ) : (
                      <>
                        {dayProblems.filter(Boolean).map((p) => (
                          <ProblemCard
                            key={p.uid}
                            problem={p}
                            onOpen={openVideo}
                            chip={
                              p.sourceSheet === "Basic DSA"
                                ? "Basic"
                                : p.sourceSheet === "Advanced DSA"
                                  ? "Advanced"
                                  : p.sourceSheet === "Dynamic Programming"
                                    ? "DP"
                                    : "Graphs"
                            }
                          />
                        ))}
                        {isAssessment && shown && (
                          <button
                            type="button"
                            className={`mdsa-wp-reveal-btn ${day.type}`}
                            onClick={() => rollAssessment(day.key)}
                          >
                            🔀 Get new questions
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {weekOffset !== 0 && (
            <p className="mdsa-wp-note">
              You're viewing a different week — click “This Week” to jump back
              to today.
            </p>
          )}
        </section>
      )}

      {/* Library + filter bar only make sense on the regular sheet pages.
          On the Weekly Preparation page the schedule already curates every
          problem day-by-day, so the whole browse UI below stays hidden. */}
      {!showWeeklyPlan && (
        <>
          {/* ===== PROBLEM LIBRARY ===== */}
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

              <span className="mdsa-filter-count">
                {filtered.length} problems
              </span>
            </div>
          </section>

          {/* ===== PROBLEM GRID (category-grouped when "All" selected) ===== */}
          {filtered.length === 0 ? (
            <section
              className="mdsa-topics-grid"
              style={{
                "--topic-color": topicColors[selectedTopic] || "#60a5fa",
              }}
            >
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
                      className="mdsa-category-tile"
                      style={{
                        background: `linear-gradient(135deg, ${grp.color}, color-mix(in srgb, ${grp.color} 60%, #000000))`,
                        boxShadow: `0 6px 18px color-mix(in srgb, ${grp.color} 50%, transparent), inset 0 1px 0 rgba(255,255,255,0.35)`,
                      }}
                      aria-hidden="true"
                    >
                      {grp.topic.charAt(0).toUpperCase()}
                    </span>
                    <h3 className="mdsa-category-title">{grp.topic}</h3>
                    <span className="mdsa-category-count">
                      {grp.problems.length} problem
                      {grp.problems.length === 1 ? "" : "s"}
                    </span>
                  </div>
                  <div
                    className="mdsa-topics-grid"
                    style={{ "--topic-color": grp.color }}
                  >
                    {grp.problems.map((p) => (
                      <ProblemCard key={p.id} problem={p} onOpen={openVideo} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            // Single category selected → one flat grid
            <section
              className="mdsa-topics-grid"
              style={{
                "--topic-color": topicColors[selectedTopic] || "#60a5fa",
              }}
            >
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
      pageTheme="basic"
    />
  );
}

export default MaangDSABasic;
export { DsaSheetPage };
