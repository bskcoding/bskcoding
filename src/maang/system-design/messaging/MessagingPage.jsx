import "../api-design/ApiDesignPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../acid/AcidPage.css";

/**
 * Messaging & Event-Driven Architecture page
 * (Route: /maang/system-design/messaging).
 *
 * Covers Queues, Pub/Sub, Kafka, RabbitMQ and the Producer/Consumer model —
 * the asynchronous backbone of modern distributed systems.
 * Reuses the ACID page styling (same card grid + modal detail panel).
 */

const TOPICS = [
  {
    id: "KAFKA",
    name: "Kafka",
    icon: "🌊",
    tagline: "Distributed event log at scale",
    accent: "#15803d",
    meaning:
      "Kafka is a distributed, partitioned, append-only log. Producers write events to topics (split into partitions for parallelism); consumers read by offset and can replay history. It offers huge throughput, ordered processing per partition, and long-term retention — used for event sourcing, streams, and pipelines.",
    analogy:
      "Kafka is like an infinite DVR for events: everything that happened is recorded in order (the log). You can watch it live, rewatch last week's episode (replay), or jump to any timestamp. Channels are split (partitions) so many viewers watch in parallel.",
    sql: `# Topics are split into PARTITIONS (ordered logs)
topic: orders
  partition 0: [e1, e4, e7]  (key=customer-A)
  partition 1: [e2, e5, e8]  (key=customer-B)

# Producer picks partition by key hash ->
# same key = same partition = ordered

# Consumers form GROUPS; each partition is
# read by exactly one consumer in the group
group: analytics
  consumer-1 -> partition 0
  consumer-2 -> partition 1

# Offsets: consumers track position, can
# commit & replay any time. Retention: days+`,
  },
  {
    id: "RABBIT",
    name: "RabbitMQ",
    icon: "🐇",
    tagline: "Smart broker, flexible routing",
    accent: "#7c3aed",
    meaning:
      "RabbitMQ is a message broker built on AMQP. Producers send to exchanges, which route messages to queues via bindings (direct, topic, fanout, headers routing). It supports acknowledgements, dead-letter queues, priority queues, and complex routing — ideal for task queues and fine-grained delivery logic.",
    analogy:
      "A smart post office: you hand a letter to the counter (exchange) with an address pattern; the postal worker (binding) decides exactly which mailboxes (queues) get a copy. Kafka records everything; Rabbit delivers and deletes.",
    sql: `# Routing topology
producer -> exchange -> (binding keys) -> queues
                                        -> consumers

# Exchange types
direct  : exact key match  ("error" -> errors-q)
topic   : pattern match    ("order.*" -> o1, o2)
fanout  : broadcast to all bound queues
headers : match message headers

# Reliability features
- acks: message removed only when consumer acks
- dead-letter queue: failed messages parked
  for inspection/retry
- message TTL + priority queues`,
  },
  {
    id: "PC",
    name: "Producer / Consumer",
    icon: "🔄",
    tagline: "The async contract between services",
    accent: "#0e7490",
    meaning:
      "The producer/consumer model: producers emit messages; consumers process them independently — different speeds, scaling, and lifecycles. Key design points: message serialisation (schema), delivery guarantees (at-least/once), idempotent consumers (duplicates happen!), and scaling consumers by partition or queue depth.",
    analogy:
      "A sushi conveyor belt: chefs (producers) put plates on the belt at their own pace; diners (consumers) take plates when hungry. Add more diners when plates pile up — that's consumer scaling based on queue depth.",
    sql: `# Architecture
[Service A] --produce--> [Broker] --consume--> [Service B]

# Rules of the contract:
1. Producer: never blocks on consumer
2. Consumer: must be IDEMPOTENT (dup delivery
   is a fact of life — dedupe by message id)
3. Schema: agree on the message format (Avro /
   JSON Schema) so both sides evolve freely
4. Backpressure: consumer pulls at its own
   pace; scale consumers when lag grows
   (Kafka consumer lag metric)`,
  },
  {
    id: "QUEUE",
    name: "Queue",
    icon: "📬",
    tagline: "First in, first out buffer",
    accent: "#1d4ed8",
    meaning:
      "A queue holds messages between a producer and consumer so they don't need to be online at the same time. It decouples services, absorbs traffic spikes (backpressure), and lets consumers process at their own pace. Messages are typically removed after acknowledgement.",
    analogy:
      "A coffee shop line: customers (messages) join a queue; baristas (consumers) take the next order when free. If a rush of 100 customers arrives, the shop doesn't collapse — they simply wait in line and get served in order.",
    sql: `// Producer
queue.send("order-created", { id: 42 });

// Consumer (worker)
while (true) {
  msg = queue.receive();      // blocking pull
  process(msg);               // do the work
  msg.ack();                  // remove from queue
  // on crash BEFORE ack -> redelivered
}

// Guarantees:
// at-most-once  : may lose messages
// at-least-once : may duplicate (idempotency!)
// exactly-once  : hardest, per-system support`,
  },
  {
    id: "PUBSUB",
    name: "Pub/Sub",
    icon: "📢",
    tagline: "One event, many subscribers",
    accent: "#c2410c",
    meaning:
      "In publish/subscribe, senders (publishers) emit events to a topic without knowing who receives them. Any number of subscribers can listen to a topic and each gets its own copy. This decouples producers from consumers completely — add a new subscriber without touching the publisher.",
    analogy:
      "A YouTube channel: the creator uploads one video (publish), and every subscriber gets it in their feed (fan-out). Subscribers can unsubscribe anytime; the creator never needs to know who's watching.",
    sql: `// Publisher — knows nothing about consumers
publish("order.created", { orderId: 42 });

// Subscribers each get their own copy
subscribe("order.created", sendEmail);
subscribe("order.created", updateAnalytics);
subscribe("order.created", chargePayment);

// Topic vs Queue:
//   queue  = 1 message -> 1 consumer (work split)
//   pubsub = 1 message -> ALL subscribers (fan-out)
// Kafka does pub-sub with consumer groups
// (each group gets the full stream).`,
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
        <span className="acid-card-badge">Messaging</span>
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

function MessagingPage() {
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
          Messaging &amp; <span>Event-Driven Architecture</span>
        </h1>
        <p className="acid-subtitle">
          Services talking asynchronously: events instead of blocking calls.{" "}
          <strong>Queue</strong> · <strong>Pub/Sub</strong> ·{" "}
          <strong>Producer/Consumer</strong> · <strong>Kafka</strong> ·{" "}
          <strong>RabbitMQ</strong>
        </p>

        <div className="acid-chip-row">
          <span className="acid-chip">🧩 5 core concepts</span>
          <span className="acid-chip">⚡ Async &amp; decoupled</span>
          <span className="acid-chip">🔥 Kafka vs RabbitMQ</span>
        </div>
      </section>

      {/* ===== SIMPLE DEFINITION ===== */}
      <section className="acid-define">
        <h2>🤔 What is Event-Driven Architecture in one line?</h2>
        <p>
          Instead of Service A calling Service B and waiting, A simply{" "}
          <b>publishes an event</b> ("order created!") and moves on. Whoever
          cares subscribes and reacts — independently, at their own pace.
          Messages flow through a <b>broker</b> (a queue, pub/sub topic, Kafka
          or RabbitMQ), which buffers, routes, and retries — so a slow or dead
          consumer never brings down the producer.
        </p>
        <div className="acid-one-liner">
          💡 Synchronous = <b>phone call</b> (both must be free). Asynchronous
          messaging = <b>WhatsApp message</b> (send it, deal with it later) —
          that's the entire idea behind event-driven systems.
        </div>
      </section>

      {/* ===== TOPIC CARDS ===== */}
      <section className="acid-props">
        <h2 className="acid-section-title">The 5 Messaging Concepts</h2>
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

export default MessagingPage;