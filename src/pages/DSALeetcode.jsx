import { useState } from "react";
import { Link } from "react-router-dom";
import VideoPlayerModal from "../components/VideoPlayerModal";
import { dsaLeetcodeProblems } from "../data/dsa/dsaLeetcodeProblems";
import "./DSALeetcode.css";

// Sort problems by question number for sequential display
const sortedProblems = [...dsaLeetcodeProblems].sort((a, b) => a.id - b.id);

function DSALeetcode() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);

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
      </section>

      {/* All problems in sequential question-number order */}
      <section className="lc-content">
        <div className="lc-problems">
          {sortedProblems.map((p) => (
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
                  ▶
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
