import { useState } from "react";
import { Link } from "react-router-dom";
import VideoPlayerModal from "../components/VideoPlayerModal";
import { dsaLeetcodeProblems } from "../data/dsa/dsaLeetcodeProblems";
import "./DSALeetcode.css";

// Sort problems by question number for sequential display
const sortedProblems = [...dsaLeetcodeProblems].sort((a, b) => a.id - b.id);

// Unique topic list derived from data (keeps filter in sync automatically)
const topics = ["All", ...new Set(sortedProblems.map((p) => p.category))];

function DSALeetcode() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("All");

  const openVideo = (problem) => {
    setSelectedProblem(problem);
    setModalOpen(true);
  };
  const closeVideo = () => {
    setSelectedProblem(null);
    setModalOpen(false);
  };

  const easy = dsaLeetcodeProblems.filter(
    (p) => p.difficulty === "Easy",
  ).length;
  const medium = dsaLeetcodeProblems.filter(
    (p) => p.difficulty === "Medium",
  ).length;
  const hard = dsaLeetcodeProblems.filter(
    (p) => p.difficulty === "Hard",
  ).length;

  // Default ("All") shows every question in question-number order;
  // selecting a topic shows only that topic's questions.
  const visibleProblems =
    selectedTopic === "All"
      ? sortedProblems
      : sortedProblems.filter((p) => p.category === selectedTopic);

  return (
    <div className="dsa-leetcode-page">
      <section className="lc-hero">
        <Link to="/dsa" className="back-button">
          ← Back to DSA Topics
        </Link>
        <h1 className="lc-title">75 LeetCode Problems</h1>
        <p className="lc-subtitle">
          The most frequently asked LeetCode problems for technical interviews,
          in question-number order with topic labels. Click any problem to watch
          the video explanation in-app.
        </p>
        <div className="lc-stats">
          <span className="lc-stat">{easy} Easy</span>
          <span className="lc-stat">{medium} Medium</span>
          <span className="lc-stat">{hard} Hard</span>
        </div>

        {/* Topic-wise filter */}
        <div className="lc-filter-bar">
          <label htmlFor="lc-topic-filter" className="lc-filter-label">
            Filter by Topic:
          </label>
          <select
            id="lc-topic-filter"
            className="lc-filter-select"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic === "All" ? "All Topics (Question Order)" : topic}
              </option>
            ))}
          </select>
          <span className="lc-filter-count">
            {visibleProblems.length}{" "}
            {visibleProblems.length === 1 ? "question" : "questions"}
          </span>
        </div>
      </section>

      {/* Problems in sequential question-number order (or filtered by topic) */}
      <section className="lc-content">
        <div className="lc-problems">
          {visibleProblems.map((p) => (
            <div key={p.id} className="lc-problem" onClick={() => openVideo(p)}>
              <div className="lc-problem-top">
                <span className="lc-problem-id">#{p.id}</span>
                <span
                  className={`lc-difficulty lc-${p.difficulty.toLowerCase()}`}
                >
                  {p.difficulty}
                </span>
              </div>
              <span className="lc-problem-name">{p.title}</span>
              <span className="lc-problem-topic">{p.category}</span>
              <div className="lc-problem-actions">
                <button
                  className="lc-play-btn"
                  aria-label="Play video"
                  title="Watch video explanation"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="12"
                    height="12"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                {p.leetcodeUrl && (
                  <a
                    href={p.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lc-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    LeetCode ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Video Player Modal */}
      <VideoPlayerModal
        isOpen={modalOpen}
        onClose={closeVideo}
        videoUrl={selectedProblem?.videoLink || ""}
        title={selectedProblem?.title || "LeetCode Problem"}
        description={selectedProblem?.description || ""}
        example={selectedProblem?.example || ""}
        explanation={selectedProblem?.explanation || ""}
      />
    </div>
  );
}

export default DSALeetcode;
