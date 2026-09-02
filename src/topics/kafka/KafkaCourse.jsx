import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VideoPlayerModal from "../../components/VideoPlayerModal";
import { kafkaCourseVideos } from "../../data/kafka/kafkaCourseVideos";
import "./KafkaCourse.css";

function KafkaCourse() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Build category list preserving the order of appearance
  const categories = useMemo(() => {
    const cats = [];
    for (const v of kafkaCourseVideos) {
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

  // Total runtime in minutes for the hero stats
  const totalMinutes = useMemo(() => {
    let mins = 0;
    for (const v of kafkaCourseVideos) {
      const m = v.duration.match(/(\d+)m/);
      const s = v.duration.match(/(\d+)s/);
      if (m) mins += parseInt(m[1], 10);
      if (s) mins += parseInt(s[1], 10) / 60;
    }
    return Math.round(mins);
  }, []);

  return (
    <div className="kafka-course-page">
      {/* Hero */}
      <section className="course-hero">
        <Link to="/kafka" className="back-button">
          ← Back to Kafka Topics
        </Link>
        <h1 className="course-title">Apache Kafka Full Course</h1>
        <p className="course-subtitle">
          {kafkaCourseVideos.length} day-by-day lessons from beginner to Spring
          Boot integration. Learn event streaming architecture, real-time
          pipelines, producers, consumers, CLI commands, and how to integrate
          Kafka with Spring Boot for production-ready microservices.
        </p>
        <div className="course-stats">
          <span className="stat-pill">
            <span className="stat-value">{kafkaCourseVideos.length}</span>{" "}
            Lessons
          </span>
          <span className="stat-pill">
            <span className="stat-value">{categories.length}</span> Phases
          </span>
          <span className="stat-pill">
            <span className="stat-value">~{totalMinutes}m</span> Total Runtime
          </span>
          <span className="stat-pill">
            <span className="stat-value">Hands-on</span> Project-Based
          </span>
        </div>
      </section>

      {/* Lessons grouped by category */}
      <section className="lessons-section">
        {categories.map((cat) => {
          const lessons = kafkaCourseVideos
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
                      <span className="lesson-number">
                        {video.pdfDay || `Day ${idx + 1}`}
                      </span>
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
                    {video.duration && (
                      <span className="lesson-duration">
                        ⏱ {video.duration}
                      </span>
                    )}
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
        title={selectedVideo?.title || "Kafka Lecture"}
        description={selectedVideo?.description || ""}
      />
    </div>
  );
}

export default KafkaCourse;