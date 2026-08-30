import { useState } from "react";
import { Link } from "react-router-dom";
import "./UmlPage.css";
import { umlTopics } from "./umlData";

/**
 * Clickable card showing a UML diagram topic summary.
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
        target="_blank"
        rel="noopener noreferrer"
        title="Watch video"
      >
        <i className="fas fa-play-circle" /> Video
      </a>
      <span className="oops-card-tag">
        <i className="fas fa-project-diagram" /> UML
      </span>
      {isActive && (
        <span className="oops-active-indicator">
          <i className="fas fa-check-circle" />
        </span>
      )}
    </div>
  );
}

/**
 * Modal popup showing full details for a selected UML topic.
 */
function DetailPanel({ topic, onClose }) {
  if (!topic) return null;
  const svgString = topic.diagram();

  return (
    <div className="oops-modal-backdrop" onClick={onClose}>
      <div
        className="oops-detail-panel modal-visible"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="oops-detail-header">
          <h2>
            <i className={`fas ${topic.icon}`} />
            <span className="oops-title-text">{topic.title}</span>
            <span className="oops-detail-sub">� {topic.sub}</span>
          </h2>
          <button
            className="oops-close-btn"
            onClick={onClose}
            aria-label="Close details"
          >
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
            <strong>?? Definition: </strong>
            {topic.definition}
          </div>

          <div className="oops-detail-grid">
            <div>
              <div className="oops-code-section">
                <div className="oops-code-header">
                  <span>
                    <i className="fas fa-code" /> Example
                  </span>
                  <span className="oops-lang-badge">UML 2.5</span>
                </div>
                <pre>{topic.code}</pre>
              </div>
            </div>

            <div className="oops-diagram-section">
              <div className="oops-diagram-title">
                <i className="fas fa-project-diagram" />{" "}
                {topic.diagramTitle || "UML Diagram"}
              </div>
              <div dangerouslySetInnerHTML={{ __html: svgString }} />

              <div className="oops-relation-line">
                <i className="fas fa-link" /> {topic.relation}
              </div>
            </div>
          </div>

          {topic.points && topic.points.length > 0 && (
            <div className="oops-why-box">
              <h3>
                <i className="fas fa-lightbulb" /> Key Takeaways
              </h3>
              <ul className="oops-why-list">
                {topic.points.map((p, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Main UML Diagrams page component (default export).
 * Renders a grid of UML diagram concept cards grouped by category,
 * plus a modal popup for full details.
 */
export default function UmlPage() {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const handleClose = () => setActiveId(null);
  const activeTopic = umlTopics.find((t) => t.id === activeId);

  // Group topics into the standard UML categories
  const categories = [
    { key: "structural", label: "Structural Diagrams", icon: "fa-cubes", color: "#1565c0",
      ids: ["class-diagram"] },
    { key: "behavioral", label: "Behavioural Diagrams", icon: "fa-sitemap", color: "#6a1b9a",
      ids: ["use-case-diagram", "activity-diagram", "state-machine-diagram"] },
    { key: "interaction", label: "Interaction Diagrams", icon: "fa-exchange-alt", color: "#2e7d32",
      ids: ["sequence-diagram"] },
    { key: "extra", label: "Other UML Diagrams", icon: "fa-shapes", color: "#e65100",
      ids: ["component-diagram", "deployment-diagram", "package-diagram", "object-diagram"] },
  ];

  return (
    <div className="oops-app-wrapper">
      <Link to="/maang/system-design-basics" className="oops-back">
        ? Back to System Design
      </Link>

      <header className="oops-main-header">
        <h1>
          <i className="fas fa-project-diagram" /> UML Diagrams
          <span className="oops-java-badge">
            <i className="fas fa-pen-nib" /> Visual Modeling
          </span>
        </h1>
        <div className="oops-sub-info">
          <span>
            <i className="fas fa-shapes" /> 8 UML Diagrams
          </span>
          <span>
            <i className="fas fa-eye" /> Visual Models
          </span>
          <span>
            <i className="fas fa-code" /> Real Examples
          </span>
          <span className="oops-badge">
            <i className="fas fa-mouse-pointer" /> Click any card
          </span>
        </div>
      </header>

      {/* Why UML? intro section */}
      <div className="oops-why-box" style={{ marginBottom: "28px" }}>
        <h3>
          <i className="fas fa-lightbulb" /> Why UML Diagrams?
        </h3>
        <ul className="oops-why-list">
          <li>
            <i className="fas fa-check-circle" />
            <span><strong>Visualize</strong> software structure and behaviour before writing code.</span>
          </li>
          <li>
            <i className="fas fa-check-circle" />
            <span><strong>Communicate</strong> design ideas clearly with developers, architects, and stakeholders.</span>
          </li>
          <li>
            <i className="fas fa-check-circle" />
            <span><strong>Document</strong> complex systems so new team members can onboard quickly.</span>
          </li>
          <li>
            <i className="fas fa-check-circle" />
            <span><strong>Identify</strong> design problems early, before they become costly code changes.</span>
          </li>
        </ul>
      </div>

      {categories.map((cat) => {
        const catTopics = umlTopics.filter((t) => cat.ids.includes(t.id));
        if (catTopics.length === 0) return null;
        return (
          <section key={cat.key} className="oops-category-section">
            <h2 className="oops-category-title" style={{ borderLeftColor: cat.color }}>
              <i className={`fas ${cat.icon}`} style={{ color: cat.color }} />
              {cat.label}
            </h2>
            <div className="oops-topic-grid">
              {catTopics.map((t) => (
                <TopicCard
                  key={t.id}
                  topic={t}
                  isActive={t.id === activeId}
                  onClick={handleClick}
                />
              ))}
            </div>
          </section>
        );
      })}

      {activeTopic && <DetailPanel topic={activeTopic} onClose={handleClose} />}
    </div>
  );
}
