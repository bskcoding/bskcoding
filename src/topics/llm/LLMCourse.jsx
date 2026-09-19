import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VideoPlayerModal from "../../components/VideoPlayerModal";
import { llmCourseVideos } from "../../data/llm/llmCourseVideos";
import "./LLMCourse.css";

function LLMCourse({ embedded = false }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Build category list preserving the order of appearance
  const categories = useMemo(() => {
    const cats = [];
    for (const v of llmCourseVideos) {
      if (!cats.includes(v.category)) cats.push(v.category);
    }
    return cats;
  }, []);

  const openVideo = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };
  const closeVideo = () => {
    setSelectedVideo(null);
    setModalOpen(false);
  };

  return (
    <div className={`llm-course-page${embedded ? " llm-course-embedded" : ""}`}>
      {/* Hero is supplied by the parent module when embedded. */}
      {!embedded && <section className="course-hero">
        <Link to="/maang" className="back-button">
          ← Back to MAANG Preparation
        </Link>
        <h1 className="course-title">LLM Fundamentals</h1>
        <p className="course-subtitle">
          {llmCourseVideos.length} lessons covering Transformers, attention, KV
          Cache, MoE, reasoning models, ChatGPT/Claude/Copilot/Cursor, and
          no-code AI tools (Bolt, Lovable, v0, n8n). Click any lesson to read
          the explanation and watch the video.
        </p>
      </section>}

      {/* Lessons grouped by category */}
      <section className="lessons-section">
        {categories.map((cat) => {
          const lessons = llmCourseVideos
            .map((video, idx) => ({ video, idx }))
            .filter(({ video }) => video.category === cat);

          return (
            <div key={cat} className="lesson-category">
              <h2 className="lesson-category-title">
                {cat}
                <span className="lesson-category-count">
                  {lessons.length} lesson{lessons.length > 1 ? "s" : ""}
                </span>
              </h2>
              <div className="lessons-grid">
                {lessons.map(({ video, idx }) => (
                  <button
                    key={idx}
                    type="button"
                    className="lesson-card"
                    onClick={() => openVideo(video)}
                  >
                    <div className="lesson-card-top">
                      <span className="lesson-category-badge">{cat.split(" ")[0]}</span>
                      <span
                        className="lesson-play-btn"
                        aria-hidden="true"
                        title="Open lesson"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="12"
                          height="12"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="lesson-title">{video.title}</h3>
                    <p className="lesson-desc">{video.description}</p>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Global Video Player Modal */}
      <VideoPlayerModal
        isOpen={modalOpen}
        onClose={closeVideo}
        videoUrl={selectedVideo?.videoLink || ""}
        title={selectedVideo?.title || "LLM Lesson"}
        description={selectedVideo?.description || ""}
      />
    </div>
  );
}

export default LLMCourse;
