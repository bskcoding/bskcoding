import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VideoPlayerModal from "../../components/VideoPlayerModal";
import { dsaBasicProblems, googleSeriesIntro } from "./dsaBasicProblems";
import "./MaangDSABasic.css";

// Topics derived from data
const topics = [
  "All",
  ...Array.from(new Set(dsaBasicProblems.map((p) => p.topic))),
];
const difficulties = ["All", "Easy", "Medium", "Hard"];

// Assign a consistent color per topic for visual variety
const topicColors = {
  Arrays: "#38bdf8",
  Maths: "#f59e0b",
  "Bit Manipulation": "#a78bfa",
  Searching: "#4ade80",
  Recursion: "#fb7185",
  Backtracking: "#fba74c",
  Sorting: "#60a5fa",
};

function MaangDSABasic() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedWeek, setSelectedWeek] = useState(1);

  const problems = dsaBasicProblems;

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

  // ---- Weekly planning: 12 weeks ----
  const allSorted = [...problems].sort((a, b) => a.id - b.id);

  const weeklyPlan = useMemo(() => {
    const weeks = [];
    let idx = 0;
    for (let w = 1; w <= 12; w++) {
      const week = { week: w, weekdays: [], saturday: null, sunday: null };
      const weekdaysList = [];
      for (let d = 0; d < 5; d++) {
        const dayProblems = [];
        for (let i = 0; i < 5 && idx < allSorted.length; i++) {
          dayProblems.push(allSorted[idx]);
          idx++;
        }
        weekdaysList.push({
          dayName: ["Mon", "Tue", "Wed", "Thu", "Fri"][d],
          problems: dayProblems,
        });
      }
      week.weekdays = weekdaysList;

      const satProblems = [];
      for (let i = 0; i < 2 && idx < allSorted.length; i++) {
        satProblems.push(allSorted[idx]);
        idx++;
      }
      week.saturday = { label: "Sat Exam 1", problems: satProblems };

      const sunProblems = [];
      for (let i = 0; i < 2 && idx < allSorted.length; i++) {
        sunProblems.push(allSorted[idx]);
        idx++;
      }
      week.sunday = { label: "Sun Exam 2", problems: sunProblems };

      weeks.push(week);
    }
    return weeks;
  }, []);

  const openVideo = (problem) => {
    setSelectedProblem(problem);
    setModalOpen(true);
  };
  const closeVideo = () => {
    setSelectedProblem(null);
    setModalOpen(false);
  };

  const currentWeek = weeklyPlan.find((w) => w.week === selectedWeek);

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
              MAANG DSA <span className="mdsa-title-accent">A → Z</span>
            </h1>
            <p className="mdsa-subtitle">
              146 essential DSA problems — structured in 12 weekly plans with
              daily practice + weekend mock exams. Watch video solutions in
              Telugu, solve on LeetCode / GeeksforGeeks.
            </p>
          </div>
          <div className="mdsa-hero-video">
            <a
              className="mdsa-intro-video"
              href={googleSeriesIntro.videoLink}
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

      {/* ===== WEEKLY PLANNER ===== */}
      <section className="mdsa-weekly-section">
        <h2 className="mdsa-section-title">📅 Weekly Preparation Plan</h2>
        <p className="mdsa-section-subtitle">
          12 weeks • 5 problems/day (Mon–Fri) • 2 coding problems (Sat & Sun) ={" "}
          <strong> {problems.length} total problems</strong>
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
            <h3 className="mdsa-week-title">
              Week {currentWeek?.week} Practice Schedule
            </h3>
          </div>

          <div className="mdsa-weekdays">
            {currentWeek?.weekdays.map((wd, i) => (
              <div
                key={wd.dayName + i}
                className="mdsa-day-block"
                style={{
                  "--day-color":
                    topicColors[["Maths", "Arrays", "Searching"][i % 3]],
                }}
              >
                <div className="mdsa-day-header">
                  <span className="mdsa-day-name">{wd.dayName}</span>
                  <span className="mdsa-day-count">
                    {wd.problems.length} problems
                  </span>
                </div>
                <div className="mdsa-day-problems">
                  {wd.problems.map((p) => (
                    <div key={p.id} className="mdsa-mini-problem">
                      <span
                        className={`mdsa-mini-difficulty mdsa-${p.difficulty.toLowerCase()}`}
                      >
                        {p.difficulty}
                      </span>
                      <span className="mdsa-mini-title">{p.title}</span>
                      {p.videoLink && (
                        <span
                          className="mdsa-mini-video"
                          title="Video available"
                          onClick={(e) => {
                            e.stopPropagation();
                            openVideo(p);
                          }}
                        >
                          🎬
                        </span>
                      )}
                      <span className="mdsa-mini-topic">{p.topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
              <div className="mdsa-exam-problems">
                {currentWeek?.saturday?.problems.map((p) => (
                  <div key={"sat-" + p.id} className="mdsa-exam-problem">
                    <span
                      className={`mdsa-mini-difficulty mdsa-${p.difficulty.toLowerCase()}`}
                    >
                      {p.difficulty}
                    </span>
                    <span className="mdsa-mini-title">{p.title}</span>
                  </div>
                ))}
              </div>
              <div className="mdsa-exam-badge">2 Coding Qs</div>
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
              <div className="mdsa-exam-problems">
                {currentWeek?.sunday?.problems.map((p) => (
                  <div key={"sun-" + p.id} className="mdsa-exam-problem">
                    <span
                      className={`mdsa-mini-difficulty mdsa-${p.difficulty.toLowerCase()}`}
                    >
                      {p.difficulty}
                    </span>
                    <span className="mdsa-mini-title">{p.title}</span>
                  </div>
                ))}
              </div>
              <div className="mdsa-exam-badge">2 Coding Qs</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FILTERS ===== */}
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

      {/* ===== PROBLEM GRID ===== */}
      <section className="mdsa-topics-grid">
        {filtered.map((p) => {
          const color = topicColors[p.topic] || "#60a5fa";
          const hasVideo = !!p.videoLink;
          return (
            <div
              key={p.id}
              className="mdsa-problem-card"
              style={{ "--topic-color": color }}
              onClick={() => openVideo(p)}
            >
              <div className="mdsa-problem-top">
                <span
                  className={`mdsa-difficulty-badge mdsa-${p.difficulty.toLowerCase()}`}
                >
                  {p.difficulty}
                </span>
                <span
                  className="mdsa-problem-platform"
                  style={{ "--platform-color": color }}
                  title={`Solve on ${
                    p.platform === "leetcode" ? "LeetCode" : "GeeksforGeeks"
                  }`}
                >
                  {p.platform === "leetcode" ? "LC" : "GFG"}
                </span>
              </div>
              <div className="mdsa-problem-body">
                <span className="mdsa-problem-id">#{p.id}</span>
                <h3 className="mdsa-problem-title">{p.title}</h3>
                <span
                  className="mdsa-problem-topic"
                  style={{ color: color + "cc" }}
                >
                  {p.topic}
                </span>
              </div>
              <div className="mdsa-problem-footer">
                <div
                  className={`mdsa-video-btn ${
                    hasVideo ? "available" : "soon"
                  }`}
                  title={
                    hasVideo ? "Watch video solution" : "Video coming soon"
                  }
                >
                  {hasVideo ? "▶ Watch" : "⏳ Soon"}
                </div>
                <a
                  href={p.link}
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
        })}
        {filtered.length === 0 && (
          <div className="mdsa-empty">
            No problems match your filters. Try changing the topic or
            difficulty.
          </div>
        )}
      </section>

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

export default MaangDSABasic;
