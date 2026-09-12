import { useState } from "react";
import { Link } from "react-router-dom";
import "../acid/AcidPage.css";

/**
 * Data Processing page (Route: /maang/system-design/data-processing).
 */

const TOPICS = [
  {
    id: "BATCH",
    name: "Batch Processing",
    icon: "🗄️",
    tagline: "Process big data in scheduled chunks",
    accent: "#1d4ed8",
    meaning:
      "Batch processing runs large jobs over stored data at scheduled times — nightly reports, ETL loads, ML training, billing runs. Optimized for throughput, not latency: read huge datasets, process in bulk, write results. Tools: Hadoop MapReduce, Spark, Airflow (orchestration), data warehouse jobs.",
    analogy:
      "A bank clearing all cheques once a night instead of processing each one the moment it arrives. Nobody waits at midnight for their cheque — but the whole day's volume gets handled efficiently in one big run.",
    sql: `# Nightly aggregation job (Airflow DAG)
1. extract: SELECT ... WHERE date = YESTERDAY
2. transform: Spark job (join, aggregate)
3. load: write to warehouse (Snowflake)

# Characteristics
- high throughput, seconds-hours latency
- simple to retry (idempotent jobs)
- run on schedule or on-demand
- data is bounded (has an end)

# Examples: billing, payroll, nightly
# recommendations, model retraining.`,
  },
  {
    id: "STREAM",
    name: "Stream Processing",
    icon: "🌊",
    tagline: "React to data the moment it arrives",
    accent: "#c2410c",
    meaning:
      "Stream processing handles unbounded, continuous data in (near) real-time: each event is processed as it flows through. Enables fraud detection, live dashboards, alerts, and real-time analytics. Tools: Kafka Streams, Flink, Spark Streaming, ksqlDB. Key challenges: out-of-order events, exactly-once semantics, windowing, state management.",
    analogy:
      "Airport security watching passengers as they walk through continuously — one suspicious bag is flagged in seconds. Batch would be reviewing everyone's luggage at midnight, long after the flight left.",
    sql: `# Fraud check per transaction (ms)
stream: card_transactions
  -> filter(amount > 1000)
  -> join with stream: card_locations
  -> alert if 2 countries in 5 min

# Windowing (core concept)
tumbling : [10:00-10:05), [10:05-10:10)
sliding  : last 5 min, moving every 1min
session  : gap-based (user activity)

# Watermarks: handle late events
"wait 2 min of event-time before
 closing a window"

# Exactly-once: Kafka transactions /
# Flink checkpoints.`,
  },
  {
    id: "MR",
    name: "MapReduce",
    icon: "🗺️",
    tagline: "Divide, process in parallel, merge",
    accent: "#15803d",
    meaning:
      "MapReduce is the classic paradigm for distributed batch computation: a Map phase runs on data splits in parallel producing key-value pairs; a Shuffle groups values by key; a Reduce phase aggregates each key. It scales by just adding machines — fault tolerance via re-running failed tasks. Spark later replaced disk shuffles with in-memory processing.",
    analogy:
      "Counting votes across a huge country: every polling station counts its own ballots (map), each station reports per-candidate totals (shuffle), and a central office sums totals per candidate (reduce).",
    sql: `# Classic word count
map(line):
  for word in split(line):
    emit(word, 1)

shuffle: group by word
  "the" -> [1,1,1,...]

reduce(word, counts):
  emit(word, sum(counts))

# Why it scales
- data is split across machines (map)
- no shared state between tasks
- failed task? re-run it on another
  machine (data is on local disk)
# Spark = same model, in-memory,
# ~10-100x faster for iterative jobs.`,
  },
  {
    id: "ETL",
    name: "ETL & Data Pipelines",
    icon: "🚚",
    tagline: "Move data from sources to insights",
    accent: "#0e7490",
    meaning:
      "ETL (Extract, Transform, Load) pipelines move data from operational sources (databases, events, logs) into analytical stores (warehouses, lakes). Modern ELT loads raw first, transforms inside the warehouse (dbt). Orchestration (Airflow) schedules, retries, and monitors pipeline dependencies. Data quality checks and idempotent, replayable jobs are the core discipline.",
    analogy:
      "A food supply chain: farms (sources) -> trucks (pipeline) -> sorting/cleaning (transform) -> supermarket shelves (warehouse). Each step is scheduled, and a bad batch is rejected before it reaches shelves.",
    sql: `# Pipeline anatomy
sources: Postgres CDC, Kafka, app logs
   |
extract -> land raw in S3 (data lake)
   |
transform: dbt models (clean, join,
  dedupe, business rules)
   |
load -> warehouse (Snowflake/BigQuery)
   |
serve: BI dashboards, ML features

# Principles
- idempotent: re-run same day, same result
- CDC (change data capture) instead of
  heavy nightly full extracts
- data quality tests (dbt tests)
- lineage: know where each number
  came from`,
  },
];

function TopicCard({ topic, index, isActive, onClick }) {
  const shortMeaning = `${topic.meaning.slice(0, 110)}...`;

  return (
    <article
      className={`acid-card ${isActive ? "active" : ""}`}
      style={{ "--acid-accent": topic.accent }}
      onClick={() => onClick(topic.id)}
    >
      <div className="acid-card-head">
        <span className="acid-card-letter">{topic.icon}</span>
        <div>
          <h3 className="acid-card-name">{topic.name}</h3>
          <span className="acid-card-tagline">{topic.tagline}</span>
        </div>
      </div>

      <p className="acid-card-summary">{shortMeaning}</p>

      <div className="acid-card-actions">
        <button
          className="acid-card-btn"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClick(topic.id);
          }}
        >
          View details
        </button>
        <span className="acid-card-badge">Concept</span>
      </div>

      <span className="acid-card-index">
        {index + 1} / {TOPICS.length}
      </span>
      {isActive && (
        <span className="acid-active-indicator">
          <i className="fas fa-check-circle" />
        </span>
      )}
    </article>
  );
}

function DetailPanel({ topic, onClose }) {
  if (!topic) return null;

  return (
    <div className="acid-modal-backdrop" onClick={onClose}>
      <div className="acid-detail-panel" onClick={(e) => e.stopPropagation()}>
        <div className="acid-detail-header">
          <h2>
            <span className="acid-detail-letter">{topic.icon}</span>
            <span className="acid-detail-title">{topic.name}</span>
            <span className="acid-detail-sub">— {topic.tagline}</span>
          </h2>
          <button
            className="acid-close-btn"
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="acid-modal-scroll-content">
          <div className="acid-definition-box">
            <strong>📘 Definition:</strong> {topic.meaning}
          </div>

          <div className="acid-detail-grid">
            <div className="acid-info-box">
              <h3>Real-world analogy</h3>
              <p>{topic.analogy}</p>
            </div>

            <div className="acid-code-box">
              <h3>How it works</h3>
              <pre>
                <code>{topic.sql}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DataProcessingPage() {
  const [activeId, setActiveId] = useState(null);
  const activeTopic = TOPICS.find((t) => t.id === activeId);

  const handleClick = (id) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <div className="acid-page">
      <section className="acid-hero">
        <Link to="/maang/system-design-basics" className="acid-back">
          ← Back to System Design Basics
        </Link>
        <h1 className="acid-title">
          Data <span>Processing</span>
        </h1>
        <p className="acid-subtitle">
          From nightly batch jobs to real-time streams — MapReduce, Kafka Streams, and the pipelines that feed analytics.
        </p>

        <div className="acid-chip-row">
          <span className="acid-chip">🗄️ Batch</span>
          <span className="acid-chip">🌊 Streaming</span>
          <span className="acid-chip">🏗️ HLD staple</span>
        </div>
      </section>

      <section className="acid-props">
        <h2 className="acid-section-title">Core Concepts</h2>
        <p className="acid-section-sub">
          Click any card to open the full explanation with analogy and diagrams.
        </p>
        <div className="acid-grid">
          {TOPICS.map((topic, i) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              index={i}
              isActive={activeId === topic.id}
              onClick={handleClick}
            />
          ))}
        </div>
      </section>

      <DetailPanel topic={activeTopic} onClose={() => setActiveId(null)} />
    </div>
  );
}
