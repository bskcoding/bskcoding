import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VideoPlayerModal from "../../components/VideoPlayerModal";
import { springBootCourseVideos } from "../../data/spring-boot/springBootCourseVideos";
import "./SpringBootCourse.css";

function SpringBootCourse() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Build category list preserving the order of appearance
  const categories = useMemo(() => {
    const cats = [];
    for (const v of springBootCourseVideos) {
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
    for (const v of springBootCourseVideos) {
      const m = v.duration.match(/(\d+)m/);
      const s = v.duration.match(/(\d+)s/);
      if (m) mins += parseInt(m[1], 10);
      if (s) mins += parseInt(s[1], 10) / 60;
    }
    return Math.round(mins);
  }, []);

  return (
    <div className="spring-boot-course-page">
      {/* Hero */}
      <section className="course-hero">
        <Link to="/spring-boot" className="back-button">
          ← Back to Spring Boot Topics
        </Link>
        <h1 className="course-title">
          API Development with Spring Boot 2025
        </h1>
        <p className="course-subtitle">
          {springBootCourseVideos.length} day-by-day lessons covering REST API
          development from basics to advanced testing. Includes Spring Boot
          fundamentals, full CRUD with JPA, validation, exception handling,
          Swagger documentation, Actuator, logging, design patterns, and
          complete JUnit + Mockito testing across all layers.
        </p>
        <div className="course-stats">
          <span className="stat-pill">
            <span className="stat-value">{springBootCourseVideos.length}</span>{" "}
            Lessons
          </span>
          <span className="stat-pill">
            <span className="stat-value">{categories.length}</span> Topics
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
          const lessons = springBootCourseVideos
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
        title={selectedVideo?.title || "Spring Boot Lecture"}
        description={selectedVideo?.description || ""}
      />
    </div>
  );
}

export default SpringBootCourse;