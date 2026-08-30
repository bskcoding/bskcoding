import { useState } from "react";
import { Link } from "react-router-dom";
import "./UmlPage.css";
import { umlTopics } from "./umlData";

/**
 * UML Diagrams page (Route: /maang/system-design/uml).
 * Relationships FIRST, then Structural & Behavioural diagram types.
 */
const UML_RELATIONSHIPS = [
  {
    key: "association",
    label: "Association",
    sub: "uses-a (loose connection)",
    symbol: "───────►",
    color: "#1565c0",
    desc: "A general link between two classes. Both classes know about each other but live independently.",
    example: "Teacher ──► Student",
  },
  {
    key: "directed",
    label: "Directed Association",
    sub: "one-way navigation",
    symbol: "───────►",
    color: "#0277bd",
    desc: "Only one class knows about / navigates to the other. The arrow shows the direction.",
    example: "Customer ──► Order",
  },
  {
    key: "aggregation",
    label: "Aggregation",
    sub: "has-a (weak ownership)",
    symbol: "◇───────",
    color: "#ef6c00",
    desc: "Whole-part relationship where the part CAN exist without the whole. Hollow diamond at the whole side.",
    example: "Department ◇── Employee",
  },
  {
    key: "composition",
    label: "Composition",
    sub: "owns-a (strong ownership)",
    symbol: "◆───────",
    color: "#c62828",
    desc: "Whole-part relationship where the part CANNOT exist without the whole. Filled diamond at the whole side.",
    example: "House ◆── Room",
  },
  {
    key: "dependency",
    label: "Dependency",
    sub: "temporary / weak usage",
    symbol: "- - - - ►",
    color: "#6a1b9a",
    desc: "A class uses another only temporarily (method parameter, local variable). Dashed arrow.",
    example: "Controller - - ► Service",
  },
  {
    key: "inheritance",
    label: "Inheritance (Generalization)",
    sub: "is-a (extends / implements)",
    symbol: "────────▷",
    color: "#2e7d32",
    desc: "Child inherits from parent. Hollow triangle arrow. Also used for interface realization.",
    example: "Car ────▷ Vehicle",
  },
  {
    key: "realization",
    label: "Realization",
    sub: "class implements interface",
    symbol: "- - - - -▷",
    color: "#00838f",
    desc: "A class implements an interface. Dashed line with a hollow triangle arrow.",
    example: "ArrayList - - ▷ List",
  },
];

/* ============================================================
   RELATIONSHIP REFERENCE CARDS
   ============================================================ */
function RelationshipCard({ rel }) {
  return (
    <div className="oops-rel-card" style={{ borderTopColor: rel.color }}>
      <div className="oops-rel-head">
        <span className="oops-rel-name" style={{ color: rel.color }}>
          {rel.label}
        </span>
        <code
          className="oops-rel-symbol"
          style={{ background: rel.color + "15", color: rel.color }}
        >
          {rel.symbol}
        </code>
      </div>
      <p className="oops-rel-sub">{rel.sub}</p>
      <p className="oops-rel-desc">{rel.desc}</p>
      <p className="oops-rel-example">
        <i className="fas fa-code" style={{ color: rel.color }} /> {rel.example}
      </p>
    </div>
  );
}

function RelationshipsSection() {
  return (
    <section className="oops-relationships-section">
      <h2 className="oops-category-title" style={{ borderLeftColor: "#e94560" }}>
        <i className="fas fa-link" style={{ color: "#e94560" }} />
        UML Relationships — Quick Reference
      </h2>
      <p className="oops-rel-intro">
        Before reading each diagram, learn the <strong>standard UML
        relationships</strong>. Every arrow in UML has a specific meaning —
        read it before reading the rest of the diagram.
      </p>
      <div className="oops-rel-grid">
        {UML_RELATIONSHIPS.map((rel) => (
          <RelationshipCard key={rel.key} rel={rel} />
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   TOPIC CARD (grid item on the page)
   ============================================================ */
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
        <i className="fas fa-diagram-project" /> UML Diagram
      </span>
      {isActive && (
        <span className="oops-active-indicator">
          <i className="fas fa-check-circle" />
        </span>
      )}
    </div>
  );
}

/* ============================================================
   DETAIL PANEL (popup / modal)
   ============================================================ */
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
            <span className="oops-detail-sub">— {topic.sub}</span>
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
            <strong>Definition: </strong>
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

/* ============================================================
   MAIN PAGE COMPONENT
   ============================================================ */
export default function UmlPage() {
  const [selectedId, setSelectedId] = useState(null);
  const selected = umlTopics.find((t) => t.id === selectedId) || null;

  const structuralTopics = umlTopics.filter((t) => t.category === "structural");
  const behavioralTopics = umlTopics.filter((t) => t.category === "behavioral");

  const renderSection = (title, icon, subtitle, topics) => (
    <div className="oops-relations-section">
      <div className="oops-section-header oops-relations-header">
        <i className={`fas ${icon}`} />
        {title}
        <span className="oops-section-sub">{subtitle}</span>
      </div>
      <div className="oops-topic-grid">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            isActive={selectedId === topic.id}
            onClick={setSelectedId}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="oops-app-wrapper">
      <Link to="/maang/system-design-basics" className="oops-back">
        <i className="fas fa-arrow-left" /> Back to System Design
      </Link>

      <header className="oops-main-header">
        <h1>
          <i className="fas fa-project-diagram" /> UML Diagrams
        </h1>
        <p>
          Unified Modeling Language - the visual language used to design,
          document & communicate software systems. Master the relationships
          first, then the 8 essential diagram types.
        </p>
        <div className="oops-stats-row">
          <div className="oops-stat-box">
            <strong>7</strong>
            <span>Relationships</span>
          </div>
          <div className="oops-stat-box">
            <strong>{umlTopics.length}</strong>
            <span>Diagram Types</span>
          </div>
          <div className="oops-stat-box">
            <strong>8</strong>
            <span>With Examples</span>
          </div>
        </div>
      </header>

      <RelationshipsSection />

      {renderSection(
        "Structural Diagrams",
        "fa-cubes",
        "What the system IS - static building blocks",
        structuralTopics
      )}

      {renderSection(
        "Behavioural Diagrams",
        "fa-play-circle",
        "What the system DOES - dynamic behaviour & interactions",
        behavioralTopics
      )}

      <p className="oops-footer-note">
        <i className="fas fa-lightbulb" /> Learn the 7 relationships first -
        then every diagram becomes easy to read.
      </p>

      <DetailPanel topic={selected} onClose={() => setSelectedId(null)} />
    </div>
  );
}
