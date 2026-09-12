import "../api-design/ApiDesignPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../acid/AcidPage.css";

/**
 * Observability page (Route: /maang/system-design/observability).
 *
 * Covers Logging, Metrics, Monitoring and Distributed Tracing — the three
 * pillars that let you answer "what is happening inside my system?".
 * Reuses the ACID page styling (same card grid + modal detail panel).
 */

const TOPICS = [
  {
    id: "LOG",
    name: "Logging",
    icon: "📝",
    tagline: "The system's diary",
    accent: "#1d4ed8",
    meaning:
      "Logs are timestamped, discrete event records of what happened (errors, warnings, decisions). Best practice: structured (JSON) logging with correlation IDs, shipped centrally (ELK, Loki, CloudWatch) instead of sitting on individual machines. Levels: DEBUG, INFO, WARN, ERROR — never log secrets (passwords, tokens, PII).",
    analogy:
      "A plane's black box + the pilot's logbook: every decision and anomaly is recorded. After an incident, you replay the logs to reconstruct exactly what happened and when.",
    sql: `// Structured logging (JSON), not plain text
log.info("order.processed", {
  orderId: 42,
  userId: 991,
  amount: 250.00,
  traceId: "abc-123",   // links to the trace
  latencyMs: 87,
});

// Centralised pipeline
app -> stdout -> fluentd/otel collector
   -> Loki / Elasticsearch -> dashboards

// Rules:
// - one line per event, machine-parseable
// - correlation ID in every entry
// - ERROR pages a human, INFO explains flow`,
  },
  {
    id: "METRICS",
    name: "Metrics",
    icon: "📊",
    tagline: "Numbers over time",
    accent: "#c2410c",
    meaning:
      "Metrics are numeric aggregates sampled over time: request rate, error rate, latency percentiles (p50/p95/p99), CPU, memory, queue depth. Cheap to store and perfect for alerting and dashboards. The golden signals: latency, traffic, errors, saturation. Always alert on percentiles, not averages — averages hide suffering outliers.",
    analogy:
      "A car dashboard: speed, RPM, fuel, engine temperature — tiny numbers, continuously updated. You don't read the engine's diary while driving; you watch the needles and react when one goes red.",
    sql: `# Prometheus: counters, gauges, histograms
http_requests_total{service="orders"} 124822
http_request_duration_seconds (histogram)

# p99 = 99% of requests are faster than this
p50 = 50ms   (typical user)
p99 = 900ms  (the suffering 1 in 100)
avg = 60ms   <- hides the problem!

# USE / RED method
Rate    - requests/sec
Errors  - error rate
Duration- latency distribution

# Storage: Prometheus scrapes & stores;
# Grafana visualises; Alertmanager pages.`,
  },
  {
    id: "MON",
    name: "Monitoring",
    icon: "🚨",
    tagline: "Watching metrics & waking humans",
    accent: "#15803d",
    meaning:
      "Monitoring is the practice of watching metrics/logs against thresholds and SLOs, alerting humans when user experience degrades. Good alerts are actionable (symptom-based, e.g. 'p99 > 1s for 5 min'), not noisy ('CPU > 80%'). Modern practice: SLOs + error budgets (burn the budget -> pause features, fix reliability).",
    analogy:
      "A smoke detector, not a heat sensor on every wire: it goes off when there's an actual fire (user-facing symptom), not when the oven is warm. Ten alarms for a burnt toast trains everyone to ignore alarms.",
    sql: `# Alert on symptoms users feel
ALERT HighErrorRate
  IF sum(rate(http_errors_total[5m]))
   / sum(rate(http_requests_total[5m])) > 0.02
  FOR 5m   # sustained, not a blip

# SLO & error budget
SLO : 99.9% of requests < 300ms
budget: 0.1% may fail = 43 min/month
burning budget fast -> page someone
budget intact     -> ship features

# Alert hygiene
- every alert must be actionable
- runbook link in every page
- if nobody acted on it in 3 months,
  delete the alert`,
  },
  {
    id: "TRACE",
    name: "Distributed Tracing",
    icon: "🔍",
    tagline: "Follow one request across services",
    accent: "#0e7490",
    meaning:
      "Distributed tracing follows a single request as it travels through many services. Each request gets a trace ID; every hop is a span (service, duration, tags) with parent-child relationships. Reveals which service added the latency or threw the error. Standard: OpenTelemetry; backends: Jaeger, Zipkin, Tempo, Datadog.",
    analogy:
      "A parcel tracking number: one code, but you see every scan along the way — warehouse, hub, customs, delivery van. When a parcel is late, tracing shows exactly which leg of the journey stalled.",
    sql: `# One request, four spans (one trace)
traceId: abc-123
├─ api-gateway        (2ms)
  └─ order-service    (220ms)  ← culprit
     ├─ auth-service   (3ms)
     ├─ db.query       (180ms)  ← slow query!
     └─ payment-svc    (30ms)

# How it propagates
headers: traceparent: 00-abc-xyz-01
(W3C trace context) — each service
extracts, adds a span, re-injects.

# Rules:
- sample smartly (100% errors, ~1-10%
  normal traffic)
- always log the traceId so logs and
  traces link together`,
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
        <span className="acid-card-badge">Observability</span>
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

export default function ObservabilityPage() {
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
          🔭 Observability &amp; <span>Monitoring</span>
        </h1>
        <p className="acid-subtitle">
          Understanding what your system is doing inside: logs, metrics,
          monitoring and tracing.
        </p>

        <div className="acid-chip-row">
          <span className="acid-chip">🔭 4 core concepts</span>
          <span className="acid-chip">📊 Metrics &amp; SLOs</span>
          <span className="acid-chip">🔍 Traces &amp; logs</span>
        </div>
      </section>

      {/* ===== TOPIC CARDS ===== */}
      <section className="acid-props">
        <h2 className="acid-section-title">The 4 Observability Concepts</h2>
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
