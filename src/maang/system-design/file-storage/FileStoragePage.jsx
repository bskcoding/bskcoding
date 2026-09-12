import { useState } from "react";
import { Link } from "react-router-dom";
import "../acid/AcidPage.css";

/**
 * File & Large Data Handling page
 * (Route: /maang/system-design/file-storage).
 */

const TOPICS = [
  {
    id: "CHUNK",
    name: "Chunking",
    icon: "🧱",
    tagline: "Split big files into manageable pieces",
    accent: "#1d4ed8",
    meaning:
      "Chunking splits a large file into fixed-size blocks (e.g. 5–8 MB) that are uploaded, stored, and transferred independently. Benefits: parallel transfers, retrying only failed chunks, streaming/processing data without loading the whole file in memory, and resumable uploads. Chunks are reassembled in order at the destination.",
    analogy:
      "Moving a truckload of furniture: you don't shove the entire truck through the door at once — you carry boxes (chunks) in parallel, and if you drop one box you only redo that box, not the whole truck.",
    sql: `# Upload pipeline
file 100MB, chunk = 5MB -> 20 chunks
1. client asks server for upload id
2. upload chunks in parallel (3-5 at a
   time) with index numbers
3. server/object-store stores each chunk
4. on complete: verify all arrived,
   concatenate (or store manifest)

# Why not one big POST?
- one packet glitch = restart 100MB
- no parallelism, memory pressure
- proxies/timeouts kill long uploads`,
  },
  {
    id: "MULTIPART",
    name: "Multipart Upload",
    icon: "📤",
    tagline: "S3's native big-file upload protocol",
    accent: "#c2410c",
    meaning:
      "S3 Multipart Upload lets you upload one object as a set of parts, independently, in parallel, in any order. After all parts are uploaded you send 'complete' and S3 assembles the object. Failed parts are retried individually; unfinished uploads can be aborted to avoid storage costs. Required for objects over ~5 GB; recommended for >100 MB.",
    analogy:
      "IKEA furniture: the flat-pack arrives as numbered boxes (parts). You can assemble in any order with friends in parallel, and if one box is damaged only that box is replaced — then the final 'complete' combines everything into the product.",
    sql: `# S3 multipart flow
1. POST /bucket/key?uploads
   -> UploadId
2. PUT /bucket/key?partNumber=1&uploadId=..
   PUT ...partNumber=2... (parallel)
   each part returns ETag
3. POST ?uploadId=..  (complete)
   body: parts list [ {ETag, partNumber} ]
   -> S3 concatenates -> single object

# Rules
- part size: 5MB..5GB, max 10,000 parts
- retry only failed parts
- abort incomplete uploads (lifecycle
  rule) or you pay for orphaned parts`,
  },
  {
    id: "RESUME",
    name: "Resume / Retry Upload",
    icon: "🔁",
    tagline: "Flaky network? Pick up where you left off",
    accent: "#15803d",
    meaning:
      "Resumable uploads track which chunks have already been stored so an interrupted upload continues from the last acknowledged chunk instead of restarting. The client keeps a manifest (upload ID + completed parts); on reconnect it queries the server for state, retries missing chunks, then finalizes. This is essential for mobile apps and large media.",
    analogy:
      "A checkpoint in a video game: you don't restart the whole game when you fall — you respawn at the last checkpoint. Each uploaded chunk is a checkpoint for the file.",
    sql: `# Client-side state (localStorage / db)
{ uploadId: "u-123", fileHash: "abc",
  done: [1,2,3,4] }   // part numbers

# On resume
GET /upload/u-123/status
  -> server lists parts it actually has
  (server is source of truth!)
retry only missing parts -> complete

# Server-side
- identify file by content hash to
  dedupe (same file = skip already-
  uploaded chunks: "dedup upload")
- expire stale uploads via TTL
# YouTube/Drive/Dropbox all work this way`,
  },
  {
    id: "OBJSTORE",
    name: "Object Storage & S3",
    icon: "☁️",
    tagline: "Infinite, cheap, durable blob storage",
    accent: "#0e7490",
    meaning:
      "Object storage (AWS S3, GCS, Azure Blob) stores files as immutable objects addressed by unique keys inside buckets — no filesystem hierarchy, exposed over HTTP APIs. It offers ~11 nines durability (replication across AZs), near-infinite scale, lifecycle policies, versioning, and direct browser uploads via presigned URLs so files never pass through your app servers.",
    analogy:
      "A valet parking garage: you hand over your car (file) with a ticket (key). You can't open the hood and edit the engine inside — you get the whole car back by ticket. Infinite space, valets handle the parking (durability).",
    sql: `# Key = address, not a path
s3://media-app/uploads/2026/09/
  user991/video.mp4

# Direct upload via presigned URL
1. app server: S3.generatePresignedUrl(
     bucket, key, expiresIn=900)
2. browser PUTs file straight to S3
   (app server never sees the bytes!)
3. S3 event (s3:ObjectCreated) -> Lambda
   -> thumbnail / metadata / index

# Features to mention in interviews
- storage classes (Standard -> Glacier)
- lifecycle rules, versioning,
  encryption at rest, 11 nines durability`,
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

export default function FileStoragePage() {
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
          File & Large Data <span>Handling</span>
        </h1>
        <p className="acid-subtitle">
          Upload, store, and serve huge files reliably — chunking, multipart uploads, resume support, and object storage.
        </p>

        <div className="acid-chip-row">
          <span className="acid-chip">🧱 Chunking</span>
          <span className="acid-chip">☁️ S3 & presigned URLs</span>
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
