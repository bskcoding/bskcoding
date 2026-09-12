import { useState } from "react";
import { Link } from "react-router-dom";
import "../acid/AcidPage.css";

/**
 * Advanced / Modern System Design page
 * (Route: /maang/system-design/advanced-modern).
 */

const TOPICS = [
  {
    id: "CQRS",
    name: "CQRS",
    icon: "🔀",
    tagline: "Separate the write model from the read model",
    accent: "#1d4ed8",
    meaning:
      "Command Query Responsibility Segregation splits an app into a write model (commands, optimized for correctness/transactions) and a read model (queries, optimized for fast/complex reads — often denormalized views or search indexes). Writes update the write DB, events propagate to rebuild read views. Pairs with Event Sourcing; used when reads and writes scale or shape very differently.",
    analogy:
      "A restaurant kitchen (write side) takes orders and cooks — slow, careful, transactional. The menu board (read side) is a pre-prepared, easy-to-scan view. You never cook from the menu board, and updating it doesn't disturb the kitchen.",
    sql: `# Write side (normalized, transactional)
POST /orders -> orders DB (ACID)
  -> publish OrderPlaced event

# Read side (denormalized, fast)
event handler -> build views:
  - order_history_view (per user)
  - search index (Elasticsearch)
  - analytics rollups

GET /orders?userId=991 -> read view
  (no joins, milliseconds)

# Trade-offs
- read views are eventually consistent
- two models to maintain
- wins when read/write ratio is extreme
  or read shapes are many & complex`,
  },
  {
    id: "ESOURCING",
    name: "Event Sourcing",
    icon: "📜",
    tagline: "Store facts, not state",
    accent: "#c2410c",
    meaning:
      "Event Sourcing persists every state change as an immutable event (OrderPlaced, ItemAdded, OrderPaid) instead of storing just the current state. Current state = replaying events (or maintained via snapshots/projections). You get a full audit trail, time travel, and natural integration with event-driven systems. Costs: complexity, event versioning, replay performance.",
    analogy:
      "A bank account: the bank doesn't just store your balance — it stores every deposit and withdrawal. Your balance is derived by replaying the ledger. Need last year's balance? Replay up to that date.",
    sql: `# Instead of UPDATE balance = 90
events table:
  1 | AccountOpened   | {balance:0}
  2 | MoneyDeposited  | {amount:100}
  3 | MoneyWithdrawn  | {amount:10}

# Current state = fold over events
state = events.reduce(apply, initial)
  -> balance = 100 - 10 = 90

# Benefits
- complete audit log for free
- time travel: state at any point
- events become the integration feed

# Handling
- snapshots every N events (fast replay)
- upcasting: version old events
- usually combined with CQRS`,
  },
  {
    id: "VECDB",
    name: "Vector Database & Embeddings",
    icon: "🧮",
    tagline: "Search by meaning, not keywords",
    accent: "#0e7490",
    meaning:
      "Embeddings convert text/images into high-dimensional vectors where semantic similarity becomes geometric closeness. A vector database (Pinecone, pgvector, Weaviate, Milvus) stores these vectors and finds nearest neighbours fast using ANN indexes (HNSW, IVF). This powers semantic search, recommendations, dedup, and RAG — matching by meaning ('running shoes' ≈ 'sneakers') rather than exact words.",
    analogy:
      "Arranging books in a library by topic on a map: books about similar ideas sit near each other even if they share no words. 'Find me something like this book' = point at the neighbours on the map.",
    sql: `# 1. Embed documents
embedding = model.encode("Best running
  shoes for marathons")   # e.g. 768 dims

# 2. Store + search (pgvector)
CREATE EXTENSION vector;
SELECT title
FROM docs
ORDER BY embedding <-> query_vec
LIMIT 5;   -- cosine nearest neighbours

# ANN indexes for scale
HNSW: graph-based, fast & accurate
IVF : cluster buckets, probe few

# Why not keyword search?
"how to fix flat tyre" matches
"puncture repair guide" only via
meaning — vectors capture that.`,
  },
  {
    id: "RAG",
    name: "RAG (Retrieval-Augmented Generation)",
    icon: "🤖",
    tagline: "Ground LLM answers in your own data",
    accent: "#7c3aed",
    meaning:
      "RAG combines retrieval with LLM generation: instead of relying on the model's memory, relevant documents are retrieved (via embeddings + vector DB) at query time and injected into the prompt as context. This gives current, private, citable answers and reduces hallucination — the standard architecture for LLM apps over enterprise knowledge.",
    analogy:
      "An open-book exam: instead of answering from memory (and risking wrong facts), the student first looks up the relevant pages, then writes the answer citing them. Fresh books = current answers.",
    sql: `# RAG pipeline
1. Ingest: docs -> chunk (300-500 tokens
   w/ overlap) -> embed -> vector DB
2. Query:
   q_vec = embed("What is our refund
                  policy?")
   docs  = vectorDB.topK(q_vec, k=5)
3. Prompt:
   LLM("Answer using ONLY this context:
        {docs}\\n\\nQuestion: ...")
4. Answer with citations

# Key knobs
- chunk size / overlap (relevance vs noise)
- hybrid search: BM25 + vectors
- re-rank top-K before prompting
- guardrails: refuse when context
  doesn't contain the answer`,
  },
  {
    id: "SERVERLESS",
    name: "Serverless & Model Serving",
    icon: "⚡",
    tagline: "Run code & models without managing servers",
    accent: "#b45309",
    meaning:
      "Serverless (AWS Lambda, Cloud Functions) runs code on demand — the provider handles provisioning, scaling to zero, and per-invocation billing. Great for spiky/event-driven work (image resize on upload, webhooks). Model serving extends this to ML: endpoints (SageMaker, Vertex AI, vLLM on GPUs) host models behind autoscaling APIs, handling batching, cold starts, and GPU utilization.",
    analogy:
      "Taking a taxi instead of owning a car: no maintenance, no parking (servers) — you pay per trip (invocation). For daily 100 km commuting, owning may be cheaper; for occasional rides, taxi wins. Same math for serverless vs always-on servers.",
    sql: `# Event-driven serverless
S3 upload event -> Lambda:
  resize image -> store thumbnail
  (pay only for the 200ms of work)

# Cold start caveat
no traffic -> instance discarded ->
next request pays ~100ms-1s startup
(mitigate: provisioned concurrency)

# Model serving
POST /predict {text: "great movie!"}
  -> endpoint: GPU pool + vLLM
  -> continuous batching: group
     concurrent requests per GPU pass
  -> autoscale replicas on QPS/latency
# cost levers: batching, quantization,
# smaller/cached models, GPU sharing`,
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

export default function AdvancedModernPage() {
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
          Advanced & Modern <span>System Design</span>
        </h1>
        <p className="acid-subtitle">
          CQRS, Event Sourcing, Vector Databases, RAG, and Serverless — the patterns behind modern & AI-native systems.
        </p>

        <div className="acid-chip-row">
          <span className="acid-chip">🧮 Vector DB</span>
          <span className="acid-chip">🤖 RAG & LLM</span>
          <span className="acid-chip">⚡ Serverless</span>
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
