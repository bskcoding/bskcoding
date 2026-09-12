import { useState } from "react";
import { Link } from "react-router-dom";
import "../acid/AcidPage.css";

/**
 * CDN & Content Delivery page (Route: /maang/system-design/cdn).
 */

const TOPICS = [
  {
    id: "CDN",
    name: "CDN",
    icon: "🌍",
    tagline: "Serve content from locations near users",
    accent: "#1d4ed8",
    meaning:
      "A Content Delivery Network is a geographically distributed set of servers that caches content close to users. Instead of every user hitting your origin server (possibly on another continent), they fetch static assets from the nearest edge location — cutting latency, offloading origin traffic, and absorbing traffic spikes and DDoS attacks.",
    analogy:
      "A global restaurant chain: instead of flying every meal from one central kitchen in Paris, each city has its own branch kitchen serving the same menu locally. Same food (content), delivered fresh and fast wherever you are.",
    sql: `# Without CDN
User (India) ---- Origin (USA)     RTT ~250ms+

# With CDN
User (India) --> Edge (Mumbai)     RTT ~10ms
                   | cache HIT  -> serve (fast)
                   | cache MISS -> fetch from
                   |              origin once,
                   |              cache, serve

# Providers: CloudFront, Cloudflare,
# Akamai, Fastly, Google Cloud CDN

# What to serve via CDN:
static assets (js/css/images/video),
downloads, streamed media, API edge caching`,
  },
  {
    id: "EDGE",
    name: "Edge & Origin Servers",
    icon: "🛰️",
    tagline: "Many copies near users, one source of truth",
    accent: "#c2410c",
    meaning:
      "The origin server is the source of truth holding the original content. Edge servers (PoPs — Points of Presence) are distributed caches that store copies of that content near users. On a cache miss, the edge fetches from origin (origin pull), caches it per its TTL, and serves subsequent requests itself — dramatically reducing origin load.",
    analogy:
      "A book publisher (origin) and city bookshops (edges). The publisher ships one copy to each city; readers buy locally. Only when a book sells out does the shop reorder from the publisher.",
    sql: `# Request flow
edge(Mumbai) receives request
  HIT  -> serve immediately        (~95% goal)
  MISS -> origin pull:
          edge -> origin -> cache -> serve

# Origin protection
- long TTLs for immutable assets
- origin shield: one middle-tier cache
  collapses many edge misses into one
  origin fetch
- stale-while-revalidate: serve stale
  copy while refreshing in background`,
  },
  {
    id: "CACHECTRL",
    name: "Cache-Control & Headers",
    icon: "🎛️",
    tagline: "Telling caches exactly what to do",
    accent: "#15803d",
    meaning:
      "HTTP caching headers control how long and how aggressively content is cached: Cache-Control (max-age, no-cache, no-store, private/public), ETag/Last-Modified for validation (If-None-Match -> 304 Not Modified), and Vary for per-header cache keys. Correct headers are the difference between a fast site and an origin on fire.",
    analogy:
      "Milk carton expiry date: shops know exactly how long they can display it (max-age), and can check with the supplier whether the batch changed (ETag) instead of shipping new milk every day.",
    sql: `# Immutable hashed assets — cache hard
Cache-Control: public, max-age=31536000,
               immutable
app.9f8e7d.js   (hash changes -> new URL)

# HTML — revalidate every time
Cache-Control: no-cache
  (store, but revalidate with ETag)

ETag: "abc123"
-> If-None-Match: "abc123"
<- 304 Not Modified   (no body! cheap)

# Never cache personal data
Cache-Control: private, no-store

# Purging: CDNs allow purge-by-URL /
# purge-by-tag when content changes.`,
  },
  {
    id: "STATIC",
    name: "Static vs Dynamic Delivery",
    icon: "📦",
    tagline: "Cache the repeatable, personalize the rest",
    accent: "#0e7490",
    meaning:
      "Static content (images, JS, CSS, video) is identical for every user — perfect for full edge caching. Dynamic content (personalized APIs) varies per user, but modern CDNs still help: TLS termination, connection reuse, route optimization, and micro-caching or edge-compute (Lambda@Edge, Cloudflare Workers) for short-TTL personalization.",
    analogy:
      "Newspapers (static) are printed in bulk and identical for everyone — stock them everywhere. A tailor-made suit (dynamic) is produced per customer, but you can still keep measuring tape and fabric in every city to speed it up.",
    sql: `# Strategy per content type
images/js/css/video -> CDN cache, long TTL
HTML                -> no-cache + ETag
API GET (public)    -> short TTL micro-cache
API (personalized)  -> no cache, but use
   CDN's optimized backbone routes +
   edge compute for auth/token checks

# Result: most bytes come from the edge,
# origin only sees misses & dynamic calls.

# Interview angle: "Design a video
# streaming service" -> CDN for segments,
# adaptive bitrate, origin stores masters.`,
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

      <span className="acid-card-index">{index + 1} / {TOPICS.length}</span>
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

export default function CdnPage() {
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
          CDN &amp; Content <span>Delivery</span>
        </h1>
        <p className="acid-subtitle">
          Serve content from locations physically close to your users — lower
          latency, less origin load, and resilience against traffic spikes.
        </p>

        <div className="acid-chip-row">
          <span className="acid-chip">🌍 {TOPICS.length} concepts</span>
          <span className="acid-chip">⚡ Edge caching</span>
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