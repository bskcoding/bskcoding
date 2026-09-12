import "../api-design/ApiDesignPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../acid/AcidPage.css";

/**
 * Distributed Systems page (Route: /maang/system-design/distributed-systems).
 *
 * Covers Replication, Consistency, Distributed Locks, Leader Election and
 * Fault Tolerance — the five distributed-systems pillars interviewers probe.
 * Reuses the ACID page styling (same card grid + modal detail panel).
 */

const TOPICS = [
  {
    id: "LOCK",
    name: "Distributed Locks",
    icon: "🔐",
    tagline: "One worker per critical section",
    accent: "#15803d",
    meaning:
      "A distributed lock ensures only one node runs a critical section across a cluster (e.g. only one worker processes a job). Implemented with Redis (SET NX PX + token, or Redlock), ZooKeeper (ephemeral znodes) or the DB (advisory locks). Must handle lock expiry, renewal and safe release.",
    analogy:
      "A single bathroom key at a petrol station: whoever holds the key can enter; everyone else waits. But what if the key-holder falls asleep? The lock must auto-expire (lease) so the queue is never stuck forever.",
    sql: `# Redis simple lock (SET with NX + TTL)
SET lock:job-42 <token> NX PX 30000
# NX = only if not exists, PX = auto-expire

# Release safely — only delete YOUR lock
if GET lock:job-42 == <token>:
    DEL lock:job-42        # via Lua (atomic)

# Gotchas:
# - lease expires while work is running ->
#   renew it (heartbeat) or use fencing tokens
# - clock skew can break correctness (the
#   Redlock debate) — prefer fencing tokens`,
  },
  {
    id: "LEAD",
    name: "Leader Election",
    icon: "👑",
    tagline: "Pick one coordinator among peers",
    accent: "#7c3aed",
    meaning:
      "Leader election chooses one node to coordinate work (accept writes, assign tasks) while others follow. If the leader dies, followers detect it via heartbeats and elect a new one. Algorithms: Bully, Raft (randomised timeout + majority vote), ZooKeeper / etcd leases.",
    analogy:
      "A class without a teacher picks a class monitor: everyone raises hands, the first to get a majority wins. If the monitor stops showing up, the class holds a new vote. The randomised start-time avoids two students 'winning' simultaneously.",
    sql: `# Raft (used by etcd, Consul, Kafka KRaft)
1. All nodes start as FOLLOWERS
2. No heartbeat from leader -> follower
   becomes CANDIDATE, term++
3. Candidate requests votes from peers
4. Majority of votes -> becomes LEADER
5. Leader sends heartbeats; on failure,
   a new election starts (new term)

# Safety: at most ONE leader per term —
# guaranteed by majority voting`,
  },
  {
    id: "FAULT",
    name: "Fault Tolerance",
    icon: "🛡️",
    tagline: "Fail, but never fall over",
    accent: "#0e7490",
    meaning:
      "Fault tolerance keeps the system working despite component failures using redundancy, replication, failover, retries with backoff, timeouts, circuit breakers, and health checks. Design for failure: assume every network call can fail or hang, and make the failure path fast and safe.",
    analogy:
      "An airplane has two of everything critical — if one engine fails, the plane flies on. Software equivalent: two database replicas, a backup instance that takes over (failover), and a circuit breaker that stops hammering a dead service.",
    sql: `# Common fault-tolerance patterns
Retry with exponential backoff + jitter
  delay = base * 2^attempt + random()

Circuit breaker states:
  CLOSED    -> requests flow normally
  OPEN      -> fail fast, don't call the
               broken service
  HALF-OPEN -> let one probe request
               through; recover if it works

Timeouts: every remote call gets one —
never wait forever.

Health checks + failover: LB stops routing
to a dead node; standby promotes itself.`,
  },
  {
    id: "REPL",
    name: "Replication",
    icon: "🧬",
    tagline: "Same data, many machines",
    accent: "#1d4ed8",
    meaning:
      "Replication keeps copies of the same data on multiple nodes so the system survives failures and stays close to users. Patterns: single-leader (one primary writes, replicas follow), multi-leader (several nodes accept writes), and leaderless (any replica accepts writes, like Cassandra/DynamoDB).",
    analogy:
      "Photocopies of an important document kept in three offices. If one office burns down, the document still exists. The challenge: when someone edits copy #1, the other copies must be updated — that's replication lag.",
    sql: `# Single-leader replication (PostgreSQL / MySQL)
#   primary  -> accepts ALL writes, logs changes
#   replicas -> stream the log (WAL/binlog) & apply

primary:  INSERT INTO orders VALUES (1, 'paid');
replica1: (applies the same change ~ms later)
replica2: (applies the same change ~ms later)

# Sync vs async replication:
#   sync  = writes wait for replicas (safe, slower)
#   async = returns immediately (fast, may lose
#           the latest writes if primary dies)`,
  },
  {
    id: "CONS",
    name: "Consistency",
    icon: "🎯",
    tagline: "What do replicas agree on?",
    accent: "#c2410c",
    meaning:
      "Consistency defines what a read sees after a write. Strong consistency: every read sees the latest write (like a single machine). Eventual consistency: replicas converge eventually, but reads may be stale. In-between models: read-your-writes, monotonic reads, bounded staleness.",
    analogy:
      "Posting a photo: on Instagram you instantly see your own post (read-your-writes), but your friend might need to refresh before it appears (eventual consistency). A bank balance, however, must be strong — never show outdated money.",
    sql: `# Consistency spectrum
strong       : read = latest write (always)
read-your-   : you always see YOUR writes
  writes     :   (session sticky reads)
eventual     : replicas converge "eventually"

# Tunable in Cassandra / DynamoDB:
WRITE: consistency_level = QUORUM
READ : consistency_level = QUORUM
# W + R > N  => strong-ish (read overlaps
#   the latest write quorum)`,
  },  {
    id: "CONSENSUS",
    name: "Consensus",
    icon: "🤝",
    tagline: "Getting replicas to agree on one truth",
    accent: "#b45309",
    meaning:
      "Consensus is the problem of getting multiple nodes to agree on a single value/order even with crashes and network delays — the foundation for leader election, replicated state machines and distributed locks. Algorithms: Raft (understandable, used by etcd/Consul), Paxos (classic, hard), ZAB (ZooKeeper). All need a majority (quorum) to make progress.",
    analogy:
      "A board of directors: a decision passes only when more than half vote yes (quorum). Even if a few directors are unreachable, the company keeps deciding — as long as a majority is in the room.",
    sql: `# Raft, in one minute
1. elect a leader (majority vote)
2. leader accepts commands, appends
   to its log
3. replicates log to followers
4. entry committed once a MAJORITY
   acknowledges
5. leader applies & replies

# Guarantees
- agreed order of operations (log)
- survives (N/2 - 1) failures
- split brain impossible: only the
  majority side elects a leader

# Where: etcd (K8s), Consul,
  ZooKeeper, CockroachDB, Kafka KRaft`,
  },

];

function TopicCard({ topic, index, isActive, onClick, total }) {
  const shortMeaning = `${topic.meaning.slice(0, 110)}...`;

  return (
    <article
      className={`acid-card ${isActive ? "active" : ""}`}
      style={{ "--acid-accent": topic.accent }}
      onClick={() => onClick(topic.id)}
    >
      <div className="acid-card-head">
        <span className="acid-card-letter api-topic-icon">{topic.icon}</span>
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
        <span className="acid-card-badge">Distributed</span>
      </div>

      <span className="acid-card-index">
        {index + 1} / {total}
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
            <span className="acid-detail-letter api-topic-icon">
              {topic.icon}
            </span>
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
              <h3>Example</h3>
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

function DistributedSystemsPage() {
  const [activeId, setActiveId] = useState(null);
  const activeTopic = TOPICS.find((topic) => topic.id === activeId);

  const handleClick = (id) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <div className="acid-page">
      {/* ===== HERO ===== */}
      <section className="acid-hero">
        <Link to="/maang/system-design-basics" className="acid-back">
          ← Back to System Design Basics
        </Link>
        <h1 className="acid-title">
          Distributed <span>Systems</span>
        </h1>
        <p className="acid-subtitle">
          Many machines, one system: keep data copied, coordinated, and alive
          even when nodes fail. <strong>Replication</strong> ·{" "}
          <strong>Consistency</strong> · <strong>Distributed Locks</strong> ·{" "}
          <strong>Leader Election</strong> · <strong>Fault Tolerance</strong>
        </p>

        <div className="acid-chip-row">
          <span className="acid-chip">🧩 5 core concepts</span>
          <span className="acid-chip">🌍 Multi-node coordination</span>
          <span className="acid-chip">🛡️ Survives failures</span>
        </div>
      </section>

      {/* ===== SIMPLE DEFINITION ===== */}
      <section className="acid-define">
        <h2>🤔 What is a Distributed System in one line?</h2>
        <p>
          A distributed system is many machines working together as{" "}
          <b>one logical computer</b> — over an unreliable network. Once your
          data spans multiple nodes, you must answer three hard questions:{" "}
          <b>how do copies stay in sync (replication + consistency)?</b> who
          coordinates (locks + leader election)? and{" "}
          <b>what happens when a machine dies (fault tolerance)?</b> These five
          topics are the heart of every system design interview.
        </p>
        <div className="acid-one-liner">
          💡 In distributed systems, <b>partial failure is normal</b> — design
          every feature assuming some node, somewhere, is currently on fire.
        </div>
      </section>

      {/* ===== TOPIC CARDS ===== */}
      <section className="acid-props">
        <h2 className="acid-section-title">
          The 5 Distributed Systems Concepts
        </h2>
        <p className="acid-section-sub">
          Click any card to open the full explanation with a real-world analogy
          and example.
        </p>
        <div className="acid-grid">
          {TOPICS.map((topic, i) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              index={i}
              total={TOPICS.length}
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

export default DistributedSystemsPage;