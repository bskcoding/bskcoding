import { Link } from "react-router-dom";
import "./SystemDesignBasics.css";

/**
 * SystemDesignBasics — landing page for the "System Design - Basics" track
 * on the MAANG preparation path. Shows the core foundation areas as
 * colourful grids styled like the MAANG subtopic cards (dark inside,
 * coloured accent border + left bar, rotating rainbow border, and glow on hover).
 */

// Dark-variant accents (same hues as the MAANG letter palette, deep tones).
const CARDS = [
  {
    emoji: "🧱",
    name: "OOPS",
    accent: "#c2410c", // dark coral (M)
    desc: "Classes & Objects · Inheritance · Polymorphism · Abstraction · Encapsulation",
  },
  {
    emoji: "📐",
    name: "SOLID Principles",
    accent: "#b45309", // dark amber (A)
    desc: "S · O · L · I · D — five principles for maintainable, scalable design",
  },
  {
    emoji: "🧩",
    name: "Design Patterns",
    accent: "#15803d", // dark green (A)
    desc: "Creational · Structural · Behavioural patterns asked in LLD rounds",
  },
  {
    emoji: "📊",
    name: "UML Diagrams",
    accent: "#1d4ed8", // dark royal blue (N)
    desc: "Class · Sequence · Use-case · Activity diagrams for system modelling",
  },
  {
    emoji: "🗃️",
    name: "ACID Properties",
    accent: "#0e7490", // dark teal
    desc: "Atomicity · Consistency · Isolation · Durability — database reliability made simple",
  },
  {
    emoji: "⚖️",
    name: "CAP Theorem",
    accent: "#7c3aed", // violet
    desc: "Consistency · Availability · Partition Tolerance — pick any 2 of 3, with diagrams",
  },
  {
    emoji: "📈",
    name: "Scalability",
    accent: "#0d9488", // dark teal
    desc: "Vertical vs Horizontal scaling, load distribution",
  },
  {
    emoji: "⚖️",
    name: "Load Balancing",
    accent: "#7c3aed", // violet
    desc: "Load balancer, round robin, least connections",
  },
  {
    emoji: "⚡",
    name: "Caching",
    accent: "#b45309", // dark amber
    desc: "Redis, cache-aside, write-through, write-back, eviction",
  },
  {
    emoji: "🗄️",
    name: "Database Concepts",
    accent: "#4f46e5", // deep indigo
    desc: "SQL vs NoSQL · Indexing · Joins · Normalization · Replication · Partitioning · Sharding",
  },
  {
    emoji: "🌐",
    name: "API Design",
    accent: "#b45309", // dark amber
    desc: "REST · HTTP Methods · Idempotency · Pagination · API Versioning · Rate Limiting",
  },
  {
    emoji: "🌍",
    name: "Distributed Systems",
    accent: "#0e7490", // dark teal
    desc: "Replication · Consistency · Distributed Locks · Leader Election · Fault Tolerance",
  },
  {
    emoji: "📨",
    name: "Messaging & Event-Driven",
    accent: "#15803d", // dark green
    desc: "Queue · Pub/Sub · Producer/Consumer · Kafka · RabbitMQ",
  },
  {
    emoji: "🧩",
    name: "Microservices",
    accent: "#1d4ed8", // dark royal blue
    desc: "API Gateway · Service Discovery · Circuit Breaker · Retry · Saga · Event-Driven Communication",
  },
  {
    emoji: "🛡️",
    name: "High Availability & Reliability",
    accent: "#0e7490", // dark teal
    desc: "Failover · Redundancy · Health Checks · Disaster Recovery · Backup",
  },
  {
    emoji: "🔭",
    name: "Observability",
    accent: "#7c3aed", // violet
    desc: "Logging · Metrics · Monitoring · Distributed Tracing",
  },
  {
    emoji: "🔐",
    name: "Security",
    accent: "#b45309", // dark amber
    desc: "Authentication · Authorization · OAuth2 · JWT · Encryption",
  },
];

function SystemDesignBasics() {
  return (
    <div className="sdb-page">
      {/* ===== HERO (same panel colouring as the MAANG page hero) ===== */}
      <section className="sdb-hero">
        <Link to="/maang" className="sdb-back">
          ← Back to MAANG Preparation
        </Link>
        <h1 className="sdb-title">
          System Design <span className="sdb-title-accent">Basics</span>
        </h1>
        <p className="sdb-subtitle">
          Build the core foundation of System Design — the essential concepts
          every MAANG interviewer expects before HLD, scalability discussions,
          and machine-coding rounds.
        </p>
      </section>

      {/* ===== 4 GRIDS — styled like the MAANG subtopic cards ===== */}
      <section className="sdb-section">
        <h2 className="sdb-section-title">What You'll Explore</h2>
        <p className="sdb-section-subtitle">
          Seventeen core foundation areas — explore them one by one and build the
          base for real interview-level system design thinking.
        </p>
        <div className="sdb-grids">
          {CARDS.map((card, i) => {
            const inner = (
              <div
                key={card.name}
                className="sdb-card"
                style={{ "--sd-accent": card.accent, "--ml-idx": i }}
              >
                <span className="sdb-card-shine" aria-hidden="true" />
                <div className="sdb-card-top">
                  <span className="sdb-card-emoji" aria-hidden="true">
                    {card.emoji}
                  </span>
                  <span className="sdb-card-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="sdb-card-name">{card.name}</span>
                <span className="sdb-card-desc">{card.desc}</span>
              </div>
            );

            // The OOPS pillar has its full page built out — link it.
            if (card.name === "OOPS") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/oops"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            // The SOLID pillar has its full page built out — link it.
            if (card.name === "SOLID Principles") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/solid"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            // The Design Patterns pillar has its full page built out — link it.
            if (card.name === "Design Patterns") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/patterns"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            // The UML Diagrams card has its full page built out — link it.
            if (card.name === "UML Diagrams") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/uml"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            // The ACID Properties card has its full page built out — link it.
            if (card.name === "ACID Properties") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/acid"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            // The CAP Theorem card has its full page built out — link it.
            if (card.name === "CAP Theorem") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/cap"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            // The Scalability pillar has its full page built out — link it.
            if (card.name === "Scalability") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/scalability"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            // The Load Balancing pillar has its full page built out — link it.
            if (card.name === "Load Balancing") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/load-balancing"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            // The Caching pillar has its full page built out — link it.
            if (card.name === "Caching") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/caching"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            if (card.name === "Database Concepts") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/database-concepts"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            // The API Design pillar has its full page built out — link it.
            if (card.name === "API Design") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/api-design"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            // The Distributed Systems pillar has its full page built out.
            if (card.name === "Distributed Systems") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/distributed-systems"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            // The Messaging / Event-Driven pillar has its full page built out.
            if (card.name === "Messaging & Event-Driven") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/messaging"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            // The Microservices pillar has its full page built out.
            if (card.name === "Microservices") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/microservices"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            // The High Availability & Reliability pillar has its full page built out.
            if (card.name === "High Availability & Reliability") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/high-availability"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            // The Observability pillar has its full page built out.
            if (card.name === "Observability") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/observability"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            // The Security pillar has its full page built out.
            if (card.name === "Security") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/security"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            return inner;
          })}
        </div>
      </section>
    </div>
  );
}

export default SystemDesignBasics;
