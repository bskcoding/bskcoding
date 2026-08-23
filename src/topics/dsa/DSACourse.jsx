import { useState } from "react";
import { Link } from "react-router-dom";
import VideoPlayerModal from "../../components/VideoPlayerModal";
import { dsaCourseVideos } from "../../data/dsa/dsaCourseVideos";
import "./DSACourse.css";

// Build category list preserving order of appearance
const categories = [];
for (const v of dsaCourseVideos) {
  if (!categories.includes(v.category)) categories.push(v.category);
}

function DSACourse() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };
  const closeVideo = () => {
    setSelectedVideo(null);
    setModalOpen(false);
  };

  return (
    <div className="dsa-course-page">
      {/* Hero */}
      <section className="course-hero">
        <Link to="/dsa" className="back-button">
          ← Back to DSA Topics
        </Link>
        <h1 className="course-title">DSA Full Course</h1>
        <p className="course-subtitle">
          {dsaCourseVideos.length} day-by-day video lessons — Data Structures &
          Algorithms from basic to advanced. Click any lesson to watch in-app.
        </p>
      </section>

      {/* Lessons Grid - grouped by topic, sequential order within each */}
      <section className="lessons-section">
        {categories.map((cat) => (
          <div key={cat} className="lesson-category">
            <h2 className="lesson-category-title">{cat}</h2>
            <div className="lessons-grid">
              {dsaCourseVideos
                .map((video, idx) => ({ video, idx }))
                .filter(({ video }) => video.category === cat)
                .map(({ video, idx }) => (
                  <div
                    key={idx}
                    className="lesson-card"
                    onClick={() => openVideo(video)}
                  >
                    <div className="lesson-card-top">
                      <span className="lesson-number">Day {idx + 1}</span>
                      <button className="lesson-play-btn" aria-label="Play">
                        ▶
                      </button>
                    </div>
                    <h3 className="lesson-title">{video.title}</h3>
                    <p className="lesson-desc">{video.description}</p>
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
        videoUrl={selectedVideo?.videoLink || ""}
        title={selectedVideo?.title || "DSA Lecture"}
        description={selectedVideo?.description || ""}
      />
    </div>
  );
}

export default DSACourse;
