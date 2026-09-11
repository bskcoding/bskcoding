import { useState } from "react";
import { Link } from "react-router-dom";
import "./DatabaseConceptsPage.css";

const CONCEPTS = [
  {
    id: "sql-vs-nosql",
    icon: "fa-database",
    title: "SQL vs NoSQL",
    sub: "Structured vs flexible",
    desc: "SQL is strict and relational; NoSQL is flexible and built for scale.",
    definition:
      "SQL stores data in tables with fixed schema and relationships. NoSQL stores flexible, document-like data and is better for very large, high-velocity apps.",
    points: [
      "SQL has a fixed table structure",
      "NoSQL stores data in flexible documents or key-value forms",
      "Use SQL for transactions and consistency",
      "Use NoSQL for scale and fast-changing data",
    ],
    videoLink: "",
    videoLabel: "Soon",
    diagram: (
      <div className="dbc-diagram-box">
        <div className="dbc-table-wrap">
          <div className="dbc-table-box dbc-sql-box">
            <div className="dbc-table-title">SQL</div>
            <div className="dbc-table-row">
              <span>id</span>
              <span>name</span>
              <span>age</span>
            </div>
            <div className="dbc-table-row">
              <span>1</span>
              <span>Alice</span>
              <span>30</span>
            </div>
          </div>
          <div className="dbc-arrow">⇄</div>
          <div className="dbc-table-box dbc-nosql-box">
            <div className="dbc-table-title">NoSQL</div>
            <pre>{`{\n  "_id": 1,\n  "name": "Alice",\n  "hobbies": ["reading", "hiking"]\n}`}</pre>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "indexing",
    icon: "fa-search",
    title: "Indexing",
    sub: "Faster lookup",
    desc: "An index works like a book index so DB finds rows much faster.",
    definition:
      "Indexing creates a lookup structure so the database does not scan every row. It improves performance for reads, filters, joins, and sorting.",
    points: [
      "Index speeds up WHERE queries",
      "It reduces full table scans",
      "Too many indexes slow writes",
      "Use it on repeated filters and join keys",
    ],
    videoLink: "",
    videoLabel: "Soon",
    diagram: (
      <div className="dbc-diagram-box">
        <div className="dbc-index-flow">
          <div className="dbc-index-group">
            <div className="dbc-index-head">id</div>
            <div>1</div>
            <div className="dbc-index-highlight">2</div>
            <div>3</div>
          </div>
          <div className="dbc-arrow">→</div>
          <div className="dbc-index-group">
            <div className="dbc-index-head">Index</div>
            <div>2 → row</div>
            <div>1 → row</div>
            <div>3 → row</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "joins",
    icon: "fa-link",
    title: "Joins",
    sub: "Connect related data",
    desc: "Joins combine rows from two tables using a shared field like user_id.",
    definition:
      "A join is used when data sits in different tables but belongs to one real-world story. Example: users and orders are separate tables joined by user_id.",
    points: [
      "INNER JOIN gives only matching rows",
      "LEFT JOIN keeps all left rows",
      "RIGHT JOIN keeps all right rows",
      "FULL JOIN includes everything from both sides",
    ],
    videoLink: "",
    videoLabel: "Soon",
    diagram: (
      <div className="dbc-diagram-box">
        <div className="dbc-join-grid">
          <div className="dbc-join-card">
            <div className="dbc-join-name">INNER</div>
            <div className="dbc-venn">
              <span className="dbc-venn-left" />
              <span className="dbc-venn-right" />
            </div>
          </div>
          <div className="dbc-join-card">
            <div className="dbc-join-name">LEFT</div>
            <div className="dbc-venn">
              <span className="dbc-venn-left dbc-venn-left-full" />
              <span className="dbc-venn-right dbc-venn-right-empty" />
            </div>
          </div>
          <div className="dbc-join-card">
            <div className="dbc-join-name">RIGHT</div>
            <div className="dbc-venn">
              <span className="dbc-venn-left dbc-venn-left-empty" />
              <span className="dbc-venn-right dbc-venn-right-full" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "normalization",
    icon: "fa-shield-halved",
    title: "Normalization",
    sub: "Remove duplicate data",
    desc: "Normalization keeps data clean by removing repeated data and splitting facts logically.",
    definition:
      "Normalization reduces duplication and keeps the data consistent. It stores each fact in one place and links related records by keys.",
    points: [
      "Avoids repeated values in many rows",
      "Keeps facts in one source of truth",
      "Better consistency and easier updates",
      "NoSQL often denormalizes for speed",
    ],
    videoLink: "",
    videoLabel: "Soon",
    diagram: (
      <div className="dbc-diagram-box">
        <div className="dbc-flow-line">
          <div className="dbc-flow-box danger">Unnormalized</div>
          <div className="dbc-flow-arrow">→</div>
          <div className="dbc-flow-box">1NF</div>
          <div className="dbc-flow-arrow">→</div>
          <div className="dbc-flow-box">2NF</div>
          <div className="dbc-flow-arrow">→</div>
          <div className="dbc-flow-box">3NF</div>
        </div>
      </div>
    ),
  },
  {
    id: "replication",
    icon: "fa-copy",
    title: "Replication",
    sub: "Backup and availability",
    desc: "Replication copies data to multiple servers for safety and read scaling.",
    definition:
      "Replication duplicates the same dataset across nodes so if one machine fails, others still serve the app and reduce downtime risk.",
    points: [
      "Primary server handles writes",
      "Replica nodes receive copies",
      "Helps with failover and availability",
      "Improves read scalability",
    ],
    videoLink: "",
    videoLabel: "Soon",
    diagram: (
      <div className="dbc-diagram-box">
        <div className="dbc-node-flow">
          <div className="dbc-node primary">Primary</div>
          <div className="dbc-arrow">→</div>
          <div className="dbc-node replica">Replica A</div>
          <div className="dbc-arrow">→</div>
          <div className="dbc-node replica">Replica B</div>
        </div>
      </div>
    ),
  },
  {
    id: "partitioning",
    icon: "fa-border-all",
    title: "Partitioning",
    sub: "Split large tables",
    desc: "Partitioning splits one large dataset into smaller logical parts.",
    definition:
      "When a table becomes huge, it can be divided by date, region, or key range so queries hit only the relevant partitions rather than the whole table.",
    points: [
      "Good for large historical tables",
      "Used by time, region, or category",
      "Improves query speed and maintenance",
      "Simpler than full sharding",
    ],
    videoLink: "",
    videoLabel: "Soon",
    diagram: (
      <div className="dbc-diagram-box">
        <div className="dbc-node-flow wrap">
          <div className="dbc-node part">2023</div>
          <div className="dbc-node part">2024</div>
          <div className="dbc-node part warm">2025</div>
        </div>
      </div>
    ),
  },
  {
    id: "sharding",
    icon: "fa-layer-group",
    title: "Sharding",
    sub: "Distribute across machines",
    desc: "Sharding spreads data across many servers so one machine does not hold everything.",
    definition:
      "Sharding divides the dataset across multiple machines, allowing horizontal scaling for very high traffic and massive data sets.",
    points: [
      "Splits data across nodes",
      "Improves scale and storage capacity",
      "Adds routing and consistency complexity",
      "Common in large distributed systems",
    ],
    videoLink: "",
    videoLabel: "Soon",
    diagram: (
      <div className="dbc-diagram-box">
        <div className="dbc-node-flow wrap">
          <div className="dbc-node shard-a">Shard A</div>
          <div className="dbc-node shard-b">Shard B</div>
          <div className="dbc-node shard-c">Shard C</div>
        </div>
      </div>
    ),
  },
];

function TopicCard({ concept, isActive, onClick }) {
  const hasVideo = Boolean(concept.videoLink && concept.videoLink.trim());

  return (
    <div
      className={`dbc-topic-card ${isActive ? "active" : ""}`}
      onClick={() => onClick(concept.id)}
    >
      <div className="dbc-card-icon">
        <i className={`fas ${concept.icon}`} />
      </div>
      <h3>{concept.title}</h3>
      <span className="dbc-card-sub">{concept.sub}</span>
      <p>{concept.desc}</p>

      <div className="dbc-card-actions">
        {hasVideo ? (
          <a
            className="dbc-video-link"
            href={concept.videoLink}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            title="Watch video"
          >
            <i className="fab fa-youtube" /> Video
          </a>
        ) : (
          <button
            className="dbc-video-link dbc-video-soon"
            type="button"
            onClick={(e) => e.stopPropagation()}
            title="Video coming soon"
          >
            <i className="fas fa-clock" /> {concept.videoLabel || "Soon"}
          </button>
        )}

        <span className="dbc-card-tag">
          <i className="fas fa-diagram-project" /> Diagram
        </span>
      </div>

      {isActive && (
        <span className="dbc-active-indicator">
          <i className="fas fa-check-circle" />
        </span>
      )}
    </div>
  );
}

function DetailPanel({ concept, onClose }) {
  if (!concept) return null;

  return (
    <div className="dbc-modal-backdrop" onClick={onClose}>
      <div className="dbc-detail-panel" onClick={(e) => e.stopPropagation()}>
        <div className="dbc-detail-header">
          <h2>
            <i className={`fas ${concept.icon}`} />
            <span>{concept.title}</span>
            <span className="dbc-detail-sub">— {concept.sub}</span>
          </h2>
          <button className="dbc-close-btn" onClick={onClose} aria-label="Close details">
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="dbc-modal-scroll-content">
          <div className="dbc-definition-box">
            <strong>📘 Definition: </strong>
            {concept.definition}
          </div>

          <div className="dbc-detail-grid">
            <div className="dbc-info-box">
              <h3>Why it matters</h3>
              <ul>
                {concept.points.map((point, index) => (
                  <li key={`${concept.id}-${index}`}>
                    <i className="fas fa-check-circle" /> {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="dbc-diagram-box">
              <h3>Diagram view</h3>
              {concept.diagram}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DatabaseConceptsPage() {
  const [activeId, setActiveId] = useState(null);
  const activeConcept = CONCEPTS.find((concept) => concept.id === activeId);

  const handleClick = (id) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <div className="dbc-app-wrapper">
      <Link to="/maang/system-design-basics" className="dbc-back">
        ← Back to System Design
      </Link>

      <header className="dbc-main-header">
        <h1>
          <i className="fas fa-database" /> Database Concepts
          <span className="dbc-small-badge">Easy + Visual</span>
        </h1>
        <div className="dbc-sub-info">
          <span>
            <i className="fas fa-database" /> 7 core concepts
          </span>
          <span>
            <i className="fas fa-diagram-project" /> Diagram friendly
          </span>
          <span>
            <i className="fas fa-bolt" /> Beginner friendly
          </span>
          <span className="dbc-badge">
            <i className="fas fa-mouse-pointer" /> Click any card
          </span>
        </div>
      </header>

      <section className="dbc-why-box">
        <div className="dbc-why-header">
          <i className="fas fa-lightbulb" /> Why do database concepts matter?
        </div>
        <div className="dbc-why-content">
          <p>
            A database is not just storage. It decides how data is organized,
            searched, connected, protected, and scaled. These ideas matter a lot
            in real system design interviews and architecture decisions.
          </p>
          <ul className="dbc-why-list">
            <li>
              <i className="fas fa-check-circle" />
              <span><b>Faster reads</b> with indexing and partitioning</span>
            </li>
            <li>
              <i className="fas fa-check-circle" />
              <span><b>Cleaner data</b> with normalization</span>
            </li>
            <li>
              <i className="fas fa-check-circle" />
              <span><b>Higher reliability</b> with replication</span>
            </li>
            <li>
              <i className="fas fa-check-circle" />
              <span><b>Better scaling</b> with sharding</span>
            </li>
          </ul>
          <p className="dbc-why-foot">
            👉 In interviews, people often ask: “Which database should we choose?”
            and “How will it scale?” This page builds the foundation for that.
          </p>
        </div>
      </section>

      <div className="dbc-topic-grid">
        {CONCEPTS.map((concept) => (
          <TopicCard
            key={concept.id}
            concept={concept}
            isActive={activeId === concept.id}
            onClick={handleClick}
          />
        ))}
      </div>

      <DetailPanel concept={activeConcept} onClose={() => setActiveId(null)} />
    </div>
  );
}
