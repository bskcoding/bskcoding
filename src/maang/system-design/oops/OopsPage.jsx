import { useState } from "react";
import { Link } from "react-router-dom";
import "./OopsPage.css";
import { oopsTopics } from "./oopsData";

/**
 * OOP System Design page (Route: /maang/system-design/oops).
 * Renders a grid of OOP concept cards (Class & Object, Encapsulation, ...).
 * Clicking a card opens a detail panel with a Java example + UML diagram.
 * Each card also has a YouTube video link that plays in-app (the global
 * YouTubeLinkHandler intercepts the anchor and opens VideoPlayerModal).
 */
function TopicCard({ topic, isActive, onClick }) {
  return (
    <div
      className={`oops-topic-card ${isActive ? "active" : ""}`}
      onClick={() => onClick(topic.id)}
    >
      <div className="oops-card-icon">
        <i className={`fas ${topic.icon}`} />
      </div>
      <h3>{topic.title}</h3>
      <span className="oops-card-sub">{topic.sub}</span>
      <p>{topic.desc}</p>
      <a
        className="oops-video-link"
        href={topic.videoLink}
        onClick={(e) => e.stopPropagation()}
        title="Watch video"
      >
        <i className="fas fa-play-circle" /> Video
      </a>
      <span className="oops-card-tag">
        <i className="fas fa-code" /> Java + UML
      </span>
      {isActive && (
        <span className="oops-active-indicator">
          <i className="fas fa-check-circle" />
        </span>
      )}
    </div>
  );
}

function DetailPanel({ topic, onClose }) {
  if (!topic) return null;
  const svgString = topic.diagram();

  return (
    <div className="oops-modal-backdrop" onClick={onClose}>
      <div className="oops-detail-panel modal-visible" onClick={(e) => e.stopPropagation()}>
        <div className="oops-detail-header">
          <h2>
            <i className={`fas ${topic.icon}`} />
            <span className="oops-title-text">{topic.title}</span>
            <span className="oops-detail-sub">— {topic.sub}</span>
            <a
              className="oops-detail-video"
              href={topic.videoLink}
              onClick={(e) => e.stopPropagation()}
              title="Watch video"
            >
              <i className="fas fa-play-circle" /> Watch Video
            </a>
          </h2>
          <button className="oops-close-btn" onClick={onClose} aria-label="Close details">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="oops-modal-scroll-content">
          <div className="oops-definition-box">
            <strong>📘 Definition: </strong>
            {topic.definition}
          </div>

          <div className="oops-detail-grid">
            <div>
              <div className="oops-code-section">
                <div className="oops-code-header">
                  <span>
                    <i className="fab fa-java" /> Java Code
                  </span>
                  <span className="oops-lang-badge">Java 17+</span>
                </div>
                <pre>{topic.code}</pre>
              </div>
            </div>

            <div className="oops-diagram-section">
              <div className="oops-diagram-title">
                <i className="fas fa-diagram-project" /> UML Class Diagram
              </div>
              <div dangerouslySetInnerHTML={{ __html: svgString }} />
              <div className="oops-diagram-caption">
                <i className="fas fa-info-circle" />
                <span className="oops-rel-tag">{topic.relation}</span>
                <span>
                  <i className="fas fa-arrow-right" /> {topic.points.join(" • ")}
                </span>
              </div>
            </div>
          </div>

          <div className="oops-key-points">
            {topic.points.map((p, idx) => (
              <span key={idx}>
                <i className="fas fa-check-circle" /> {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Renders our own header, then simply embeds the standalone-looking page
 * content. We do not import ReactDOM here — the page is part of the app.
 */
export default function OopsPage() {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const handleClose = () => setActiveId(null);
  const activeTopic = oopsTopics.find((t) => t.id === activeId);

  return (
    <div className="oops-app-wrapper">
      <Link to="/maang/system-design-basics" className="oops-back">
        ← Back to System Design
      </Link>
      <header className="oops-main-header">
        <h1>
          <i className="fas fa-cubes" /> OOP System Design
          <span className="oops-java-badge">
            <i className="fab fa-java" /> Java + UML
          </span>
        </h1>
        <div className="oops-sub-info">
          <span>
            <i className="fas fa-diagram-project" /> 7 Core OOP Concepts
          </span>
          <span>
            <i className="fas fa-code" /> Real Java Examples
          </span>
          <span>
            <i className="fas fa-eye" /> Visual Class Diagrams
          </span>
          <span className="oops-badge">
            <i className="fas fa-mouse-pointer" /> Click any card
          </span>
        </div>
      </header>

      <div className="oops-topic-grid">
        {oopsTopics.map((t) => (
          <TopicCard
            key={t.id}
            topic={t}
            isActive={t.id === activeId}
            onClick={handleClick}
          />
        ))}
      </div>

      <DetailPanel topic={activeTopic} onClose={handleClose} />

      <div className="oops-footer-note">
        <i className="fas fa-graduation-cap" /> Master OOP for System Design —
        Each concept includes Java code + visual diagram
      </div>
    </div>
  );
}

export { TopicCard, DetailPanel };