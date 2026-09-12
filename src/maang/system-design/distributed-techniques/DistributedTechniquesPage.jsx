import { useState } from "react";
import { Link } from "react-router-dom";
import "../acid/AcidPage.css";

/**
 * Distributed Techniques page
 * (Route: /maang/system-design/distributed-techniques).
 */

const TOPICS = [
  {
    id: "CHASH",
    name: "Consistent Hashing",
    icon: "🔄",
    tagline: "Scaling out without reshuffling everything",
    accent: "#1d4ed8",
    meaning:
      "Consistent hashing maps both keys and servers onto a hash ring. A key belongs to the first server clockwise from its hash. When a node joins or leaves, only ~K/N keys move (instead of nearly all with modulo hashing). Virtual nodes spread load evenly. Used by DynamoDB, Cassandra, Memcached clients, CDNs, and sharded systems.",
    analogy:
      "A circular running track with water stations. Runners (keys) stop at the next station clockwise. If you add a station, only runners in its small segment change their stop — everyone else keeps running to the same place.",
    sql: `# Naive (bad)
server = hash(key) % N
# N changes -> almost ALL keys remap!

# Consistent hashing
place nodes on ring: pos = hash(node)
key -> walk clockwise -> first node

# Add node X: only keys between
# X and next node move to X (~1/N)

# Virtual nodes (vnodes)
each physical node = 100-200 ring
points -> load balances evenly,
hot spots disappear.

# Users: Cassandra/Dynamo partitions,
# Discord (millions of guilds/LSB),
# load balancing memcache farms.`,
  },
  {
    id: "BLOOM",
    name: "Bloom Filter",
    icon: "🌼",
    tagline: "Fast 'definitely NOT present' answers",
    accent: "#c2410c",
    meaning:
      "A Bloom filter is a space-efficient probabilistic set. It can say 'definitely not present' (100% sure) or 'maybe present' (with false-positive rate ~1%). It uses a bit array + multiple hash functions; no storage of actual items. Used to avoid useless disk lookups (Cassandra/HBase), check username availability cheaply, and in CDN cache-hit prediction.",
    analogy:
      "A club bouncer with a photographic memory for banned people. If he says 'not banned' — trust it. If he says 'maybe banned' — do a full ID check (database lookup) to be sure. Occasionally flags an innocent person, never misses a banned one.",
    sql: `# Structure: m bits, k hash functions
add(x):  h1(x), h2(x), h3(x) -> set bits
has(x):  all k bits set? maybe (or FP)
         any bit clear? DEFINITELY absent

# Math: FP rate ≈ (1 - e^(-kn/m))^k
10 items w/ 1% FP -> ~120 bits total
(vs storing full keys: KBs)

# Classic use: read path
query for key ->
  bloom says "no" -> skip disk read ✓
  bloom says "yes" -> do disk read,
                      filter may FP

# No deletes (bits are shared) — use
# counting bloom filter or rebuild.`,
  },
  {
    id: "MERKLE",
    name: "Merkle Tree",
    icon: "🌳",
    tagline: "Detect any data difference cheaply",
    accent: "#15803d",
    meaning:
      "A Merkle tree hashes data blocks into leaves, then hashes pairs upward until one root hash remains. Two replicas just compare root hashes: equal = data identical; different = descend the tree to pinpoint exactly which blocks diverge. Used in Cassandra/Dynamo anti-entropy repair, Git, and Bitcoin block verification.",
    analogy:
      "Checking two copies of a huge book: compare the table of contents (root). One chapter differs? Compare its sections — you find the changed paragraph without re-reading every page.",
    sql: `          Root = H(H01, H23)
          /             \\
      H01 = H(H0,H1)   H23 = H(H2,H3)
      /      \\          /      \\
   H(D0)   H(D1)    H(D2)   H(D3)

# Replica sync
1. exchange root hashes
2. equal -> done (nothing to fix)
3. differ -> recurse into differing
   subtree -> transfer ONLY the
   divergent blocks

# Why: sync N GB by comparing
# O(log N) hashes + re-sending only
# the few bad blocks.`,
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

export default function DistributedTechniquesPage() {
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
          Distributed <span>Techniques</span>
        </h1>
        <p className="acid-subtitle">
          The clever algorithms behind big systems — consistent hashing, Bloom filters, Merkle trees, Snowflake IDs, gossip and quorum.
        </p>

        <div className="acid-chip-row">
          <span className="acid-chip">🔄 Consistent Hashing</span>
          <span className="acid-chip">🌼 Bloom Filter</span>
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
