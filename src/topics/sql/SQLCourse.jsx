import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VideoPlayerModal from "../../components/VideoPlayerModal";
import { sqlCourseVideos } from "../../data/sql/sqlCourseVideos";
import "./SQLCourse.css";

function SQLCourse() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Build category list preserving the order of appearance
  const categories = useMemo(() => {
    const cats = [];
    for (const v of sqlCourseVideos) {
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
    <div className="sql-course-page">
      {/* Hero */}
      <section className="course-hero">
        <Link to="/sql" className="back-button">
          ← Back to SQL Topics
        </Link>
        <h1 className="course-title">SQL Full Course</h1>
        <p className="course-subtitle">
          {sqlCourseVideos.length} day-by-day lessons covering SQL from basics
          to advanced. Click any lesson to read the simple explanation and
          watch the video — perfect for beginners and interview prep.
        </p>
      </section>

      {/* Lessons grouped by category */}
      <section className="lessons-section">
        {categories.map((cat) => {
          const lessons = sqlCourseVideos
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
                      <span className="lesson-number">Day {idx + 1}</span>
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

      {/* Global Video Player Modal — shows the YouTube video + description */}
      <VideoPlayerModal
        isOpen={modalOpen}
        onClose={closeVideo}
        videoUrl={selectedVideo?.videoLink || ""}
        title={selectedVideo?.title || "SQL Lecture"}
        description={selectedVideo?.description || ""}
      />
    </div>
  );
}

export default SQLCourse;