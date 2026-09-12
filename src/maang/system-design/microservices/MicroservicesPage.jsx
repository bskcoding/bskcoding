import "../api-design/ApiDesignPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../acid/AcidPage.css";

/**
 * Microservices page (Route: /maang/system-design/microservices).
 *
 * Covers API Gateway, Service Discovery, Circuit Breaker, Retry, Saga and
 * Event-driven communication — the microservices interview staples.
 * Reuses the ACID page styling (same card grid + modal detail panel).
 */

const TOPICS = [
  {
    id: "GW",
    name: "API Gateway",
    icon: "🚪",
    tagline: "Single entry point for all services",
    accent: "#1d4ed8",
    meaning:
      "An API Gateway is the front door of a microservices system: clients hit one endpoint and the gateway routes requests to the right service. It centralises cross-cutting concerns — authentication, rate limiting, SSL termination, logging, response caching and request transformation.",
    analogy:
      "A hotel reception desk: you don't walk into each department yourself — you tell reception what you need, they verify your identity, route your request, and hand back the answer. Guests (clients) only ever talk to the desk.",
    sql: `# Client -> Gateway -> Services
Client: GET /orders/42
  1. Gateway authenticates JWT
  2. Rate limit check (429 if exceeded)
  3. Route to order-service /orders/42
  4. Log, cache, return response

# Common tools: Kong, Nginx, AWS API
# Gateway, Spring Cloud Gateway

# Without a gateway the client must know
# every service address + re-implement
# auth/rate-limiting in each service.`,
  },
  {
    id: "DISC",
    name: "Service Discovery",
    icon: "🧭",
    tagline: "Services find each other dynamically",
    accent: "#c2410c",
    meaning:
      "In dynamic environments (Kubernetes, auto-scaling), service IPs change constantly. Service discovery lets services locate each other by name instead of hard-coded addresses. Client-side discovery: caller queries a registry (Eureka/Consul) and picks an instance. Server-side: a load balancer/router does the lookup (Kubernetes DNS).",
    analogy:
      "A phone directory that updates itself: instead of memorising your friend's number, you look up their name. When they change phones, the directory updates — you never notice.",
    sql: `# How it works
1. Service starts -> registers itself:
   name: payment-service
   ip:   10.0.4.12, port: 8080
   health: /health (heartbeat)

2. Caller asks the registry:
   lookup("payment-service")
   -> [10.0.4.12, 10.0.4.13, 10.0.4.14]

3. Caller picks one (load balancing) and calls.

# Tools: Kubernetes DNS, Consul, Eureka, etcd
# Dead instances are removed via health checks.`,
  },
  {
    id: "CB",
    name: "Circuit Breaker",
    icon: "🔌",
    tagline: "Fail fast instead of piling up",
    accent: "#15803d",
    meaning:
      "A circuit breaker wraps calls to another service. After failures cross a threshold it 'trips' open and fails immediately — no waiting on a dead service. This stops cascading failures, gives the struggling service time to recover, and can serve a fallback (cached/default response).",
    analogy:
      "Your home's electrical breaker: too much current -> it trips, cutting power to protect the house. You reset it later and see if the problem is gone. Same idea — protect the system from a continuously failing dependency.",
    sql: `# Three states
CLOSED    -> calls flow; failures counted
OPEN      -> fail fast immediately
             (serve fallback / cache)
HALF-OPEN -> after a cool-down, let one
             trial request through

payment.breaker.call(() => charge(order),
  fallback = () => markPending(order));

# Tools: Resilience4j (Java), Polly (.NET),
# Hystrix (legacy), opossum (Node)

# Why: without it, one slow dependency
# exhausts thread pools across the cluster.`,
  },
  {
    id: "RETRY",
    name: "Retry",
    icon: "🔁",
    tagline: "Try again — but politely",
    accent: "#7c3aed",
    meaning:
      "Retry re-attempts failed calls — safe only for idempotent operations. Best practice: exponential backoff with jitter (2^attempt × random) to avoid thundering herds, a retry budget/limit, and only retrying transient errors (timeouts, 503) — never 4xx client errors like 400/401.",
    analogy:
      "Redialling a busy phone number: you wait a bit longer between each attempt (backoff) and randomise your timing so everyone doesn't redial at exactly the same second (jitter). Redialling a wrong number repeatedly (400) is pointless.",
    sql: `# What to retry
retryable: timeout, 503, 429 (after Retry-After)
no-retry : 400, 401, 403, 404 (client errors)

# Exponential backoff + jitter
delay = base * 2^attempt + random(0, base)
attempt 1 -> ~100ms
attempt 2 -> ~200ms
attempt 3 -> ~400ms  (max 3 attempts)

# Dangers without care:
# - thundering herd (everyone retries at once)
# - retry storms amplify an outage 10x
# - non-idempotent POST retried = double charge
#   (pair with idempotency keys!)

# Tools: Resilience4j, Polly, opossum`,
  },
  {
    id: "SAGA",
    name: "Saga",
    icon: "🧩",
    tagline: "Distributed transactions without 2PC",
    accent: "#0e7490",
    meaning:
      "A Saga splits a distributed transaction into a sequence of local transactions, each with a compensating action for rollback. Choreography: services react to each other's events (no coordinator). Orchestration: a central saga orchestrator calls each step. Used for order flows spanning order, payment, inventory and shipping services.",
    analogy:
      "Booking a trip: flight booked ✓, hotel booked ✓, car rental fails ✗. The agent calls back and cancels the hotel and flight — those cancellations are compensating transactions. You never 'un-book' globally with one big undo button.",
    sql: `# Order saga (orchestration)
1. create order        (order-svc)      OK
2. reserve inventory   (inventory-svc)  OK
3. charge payment      (payment-svc)    FAIL
   -> compensation:
4. release inventory   (reverse of 2)
5. cancel order        (reverse of 1)

# Choreography alternative: each service
# subscribes to events:
OrderCreated -> InventoryReserved
             -> PaymentFailed -> OrderCancelled

# Rules: every step needs a compensating
# action; design for retries + idempotency;
# accept temporary inconsistency.`,
  },
  {
    id: "EDAC",
    name: "Event-Driven Communication",
    icon: "📡",
    tagline: "Notify, don't block",
    accent: "#b45309",
    meaning:
      "Instead of services calling each other synchronously, a service publishes domain events (OrderCreated, PaymentCompleted) to a broker; interested services subscribe and react independently. Benefits: loose coupling, independent scaling, resilience. Trade-offs: eventual consistency, harder debugging, need idempotent consumers and event schema versioning.",
    analogy:
      "A company announcement email: HR sends 'new hire joined' once, and IT, facilities and payroll each do their own follow-up — nobody stands at HR's desk blocking them. If payroll is on holiday, the email waits in their inbox.",
    sql: `# Sync (chatty, coupled, fragile)
orders-svc -> inventory-svc -> payment-svc
  (one slow service stalls everything)

# Async (event-driven)
orders-svc --publish--> broker("order.created")
                   |---> inventory-svc (reserves)
                   |---> email-svc     (sends mail)
                   |---> analytics-svc (updates)

# Design rules:
- events are facts: past tense, immutable
- consumers must be idempotent (duplicates!)
- version event schemas (add fields, don't
  rename) — producers/consumers deploy
  independently`,
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
        <span className="acid-card-badge">Microservices</span>
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

export default function MicroservicesPage() {
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
          🧩 Microservices <span>Architecture</span>
        </h1>
        <p className="acid-subtitle">
          Breaking a monolith into services: gateways, resilience patterns and
          communication.
        </p>

        <div className="acid-chip-row">
          <span className="acid-chip">🧩 6 core concepts</span>
          <span className="acid-chip">🚪 Gateway & routing</span>
          <span className="acid-chip">🛡️ Resilience patterns</span>
        </div>
      </section>

      {/* ===== TOPIC CARDS ===== */}
      <section className="acid-props">
        <h2 className="acid-section-title">The 6 Microservices Concepts</h2>
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
