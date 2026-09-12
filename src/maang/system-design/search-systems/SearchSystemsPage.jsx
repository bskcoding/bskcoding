import { useState } from "react";
import { Link } from "react-router-dom";
import "../acid/AcidPage.css";

/**
 * Search Systems page (Route: /maang/system-design/search-systems).
 */

const TOPICS = [
  {
    id: "ES",
    name: "Elasticsearch",
    icon: "🔎",
    tagline: "Distributed search & analytics engine",
    accent: "#1d4ed8",
    meaning:
      "Elasticsearch is a distributed, RESTful search engine built on Apache Lucene. Data is stored as JSON documents in indices, indexed for full-text search and aggregated analytics. It's the default answer for 'add search to your app' — used for product search, log analytics (ELK stack), autocomplete, and geospatial queries.",
    analogy:
      "A book's index at the back: instead of reading every page to find 'photosynthesis', you look up the term and jump straight to pages. Elasticsearch builds such indexes over millions of documents and can search them in milliseconds.",
    sql: `# Index a document
PUT /products/_doc/42
{ "name": "Wireless Mouse",
  "brand": "Logi", "price": 25 }

# Search (full-text, scored)
GET /products/_search
{ "query": {
    "match": { "name": "wireless mouse" }
  }
}

# Cluster basics
Node   : one ES server
Index  : like a database table
Shard  : a Lucene index (unit of scaling)
Replica: copy of a shard (HA + read scale)

# Also used as: ELK log store, metrics,
# autocomplete, geo search, aggregations.`,
  },
  {
    id: "INVIDX",
    name: "Inverted Index",
    icon: "🗂️",
    tagline: "The data structure that powers search",
    accent: "#c2410c",
    meaning:
      "A normal index maps documents to their words. An inverted index flips it: it maps each term to the list of documents containing it (a posting list), often with positions and frequencies. Looking up a query term is O(1)-ish; intersecting posting lists finds documents matching all terms — this is why full-text search is fast at scale.",
    analogy:
      "Instead of asking 'which words are in book #42?' you ask 'which books mention the word dragon?' — the librarian keeps a card per word listing every book that contains it. Look up 'dragon', get the list instantly.",
    sql: `Documents:
  D1: "the quick brown fox"
  D2: "the lazy dog"
  D3: "quick dog park"

Inverted index:
  the   -> [D1, D2]
  quick -> [D1, D3]
  brown -> [D1]
  fox   -> [D1]
  lazy  -> [D2]
  dog   -> [D2, D3]
  park  -> [D3]

Query "quick dog":
  [D1,D3] ∩ [D2,D3] = D3  ✓`,
  },
  {
    id: "FTS",
    name: "Full-Text Search & Relevance",
    icon: "🎯",
    tagline: "Not just matching — ranking what matters",
    accent: "#15803d",
    meaning:
      "Full-text search finds documents containing query terms even with partial/fuzzy matches, then ranks results by relevance. Scoring uses TF-IDF/BM25: terms that appear often in a document (TF) but are rare across all documents (IDF) score higher. Boosts (title > description), freshness, and popularity signals refine the ranking.",
    analogy:
      "A good librarian doesn't just find every book mentioning 'java' — she puts the famous Java programming books first, not a travel guide mentioning Java island. Rare, central terms rank higher.",
    sql: `# BM25 score ≈ TF * IDF
TF  : how often the term is in this doc
IDF : log(total docs / docs with term)

"the"  -> IDF ~0 (in every doc, useless)
"kafka"-> IDF high (rare, meaningful)

# Practical ranking boosts
{
  "query": { "multi_match": {
    "query": "wireless mouse",
    "fields": [
      "name^3",        // title matters 3x
      "description" ] } }
}

# Beyond text: popularity, recency,
# business rules, personalization.`,
  },
  {
    id: "TOK",
    name: "Tokenization & Analysis",
    icon: "✂️",
    tagline: "How text becomes searchable terms",
    accent: "#0e7490",
    meaning:
      "The analyzer pipeline converts raw text into indexed terms: character filters -> tokenizer (split into tokens) -> token filters (lowercase, stemming, stop-word removal, synonyms). This decides what queries match: 'Running' matches 'run' via stemming; 'wifi' matches 'Wi-Fi' via synonyms and tokenization rules.",
    analogy:
      "A translator preparing notes for filing: splits sentences into keywords, converts everything to one case, reduces words to their root ('running'->'run'), and notes that 'wifi' and 'wireless internet' mean the same thing.",
    sql: `"The Quick Brown Foxes are RUNNING!"
  | char filter: (none)
  v
tokenizer: [The, Quick, Brown, Foxes,
            are, RUNNING]
  | lowercase + stopwords(are, the)
  | stem: Foxes->fox, RUNNING->run
  v
terms: [quick, brown, fox, run]

# Query "running fast" -> terms
# [run, fast] -> matches the doc!

# Choose analyzers per field:
# standard, english (stemming),
# keyword (no analysis, exact match).`,
  },
  {
    id: "SHARD",
    name: "Shards & Replicas",
    icon: "🧱",
    tagline: "How Elasticsearch scales horizontally",
    accent: "#7c3aed",
    meaning:
      "An Elasticsearch index is split into primary shards (each a full Lucene index) distributed across nodes — that's horizontal scaling and parallel query execution. Each primary has replica shards (copies) for high availability and extra read throughput. Shard count is fixed at index creation; replicas can change anytime.",
    analogy:
      "A library splits its catalogue across 3 rooms (shards) so searches run in parallel, and photocopies each room's catalogue in another room (replicas). If a room floods, the copy still serves readers.",
    sql: `index "products": 3 primaries, 1 replica

node1: P0  P2        node2: P1  R0
node3: R1  R2        (spread for HA)

# Write: request -> primary -> replicate
# Read:  request -> any copy (primary or
#         replica) -> merge results

# Sizing rules of thumb
- shard ~ 10-50 GB, not >50M docs
- too many shards = overhead; too few
  = can't scale after creation
- replicas: >=1 for HA in production
- rebalancing is automatic when
  nodes join/leave`,
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

export default function SearchSystemsPage() {
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
          Search Systems & <span>Elasticsearch</span>
        </h1>
        <p className="acid-subtitle">
          How modern full-text search works — inverted indexes, BM25 ranking, analyzers, and how Elasticsearch scales horizontally.
        </p>

        <div className="acid-chip-row">
          <span className="acid-chip">🔎 Full-text search</span>
          <span className="acid-chip">📊 BM25 ranking</span>
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
