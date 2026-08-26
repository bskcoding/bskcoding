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

/**
 * Shared problem card — used by the Problem Library grid.
 *
 * Props:
 *   problem : the DSA problem object
 *   onOpen  : opens the video modal for this problem
 *   chip    : optional small label shown in the card top row
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

  const openVideo = useCallback((problem) => {
    setSelectedProblem(problem);
    setModalOpen(true);
  }, []);
  const closeVideo = useCallback(() => {
    setSelectedProblem(null);
    setModalOpen(false);
  }, []);

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
              {problems.length} essential DSA problems. Watch video solutions
              in Telugu, solve on LeetCode / GeeksforGeeks.
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

          <span className="mdsa-filter-count">{filtered.length} problems</span>
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
