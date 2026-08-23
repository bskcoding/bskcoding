import { useState } from "react";
import { Link } from "react-router-dom";
import VideoPlayerModal from "../components/VideoPlayerModal";
import { dsaLeetcodeProblems } from "../data/dsa/dsaLeetcodeProblems";
import "./DSALeetcode.css";

// Build category list preserving order of appearance
const categories = [];
for (const p of dsaLeetcodeProblems) {
  if (!categories.includes(p.category)) categories.push(p.category);
}

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
          organized by category and difficulty. Click any problem to watch the
          video explanation in-app.
        </p>
        <div className="lc-stats">
          <span className="lc-stat">{easy} Easy</span>
          <span className="lc-stat">{medium} Medium</span>
          <span className="lc-stat">{hard} Hard</span>
        </div>
      </section>

      <section className="lc-content">
        {categories.map((cat) => (
          <div key={cat} className="lc-category">
            <h2 className="lc-category-title">{cat}</h2>
            <div className="lc-problems">
              {dsaLeetcodeProblems
                .filter((p) => p.category === cat)
                .map((p) => (
                  <div
                    key={p.id}
                    className="lc-problem"
                    onClick={() => openVideo(p)}
                  >
                    <span className="lc-problem-id">#{p.id}</span>
                    <span className="lc-problem-name">{p.title}</span>
                    <span
                      className={`lc-difficulty lc-${p.difficulty.toLowerCase()}`}
                    >
                      {p.difficulty}
                    </span>
                    <button className="lc-play-btn" aria-label="Play video">
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
                        LeetCode
                      </a>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>

      {/* Global Video Player Modal */}
      <VideoPlayerModal
        isOpen={modalOpen}
        onClose={closeVideo}
        videoUrl={selectedProblem?.videoLink || ""}
        title={selectedProblem?.title || "LeetCode Problem"}
      />
    </div>
  );
}

export default DSALeetcode;
