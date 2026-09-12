import { useState } from "react";
import { Link } from "react-router-dom";
import "../acid/AcidPage.css";

/**
 * Cloud & Infrastructure page
 * (Route: /maang/system-design/cloud-infrastructure).
 */

const TOPICS = [
  {
    id: "DOCKER",
    name: "Docker & Containers",
    icon: "🐳",
    tagline: "Package app + deps into portable units",
    accent: "#1d4ed8",
    meaning:
      "Containers package an application with its runtime, dependencies and config into a portable image that runs identically anywhere — dev laptop, CI, production. Unlike VMs, containers share the host OS kernel, so they start in seconds and use far less resources. Images are built from Dockerfiles and run via isolated processes (namespaces, cgroups).",
    analogy:
      "Shipping containers: standardized boxes that fit any ship, truck, or crane worldwide. Cargo companies don't care what's inside — the box shape is universal. Same for your app in any environment.",
    sql: `# Dockerfile (simple web service)
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]

# Commands
docker build -t myapp:1.0 .
docker run -p 3000:3000 myapp:1.0
docker compose up     # multi-container

# Container vs VM
VM     : full guest OS, GBs, minutes
Container: shared kernel, MBs, seconds
# Registry: Docker Hub, ECR, GCR`,
  },
  {
    id: "K8S",
    name: "Kubernetes",
    icon: "☸️",
    tagline: "Orchestrate containers at scale",
    accent: "#c2410c",
    meaning:
      "Kubernetes (K8s) orchestrates containers across a cluster: it schedules pods onto nodes, restarts failed ones (self-healing), scales replicas on load, rolls out updates with zero downtime, load-balances via Services, and manages config/secrets. It's the de-facto platform for running microservices at scale.",
    analogy:
      "An airport control tower: it doesn't fly planes itself but continuously decides which plane lands where, reschedules when weather hits, replaces grounded aircraft, and keeps the flow running — you just declare how many flights you want.",
    sql: `# Declare desired state (YAML)
apiVersion: apps/v1
kind: Deployment
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: api
        image: myapp:1.0
        resources:
          requests: { cpu: 250m }

# K8s constantly reconciles:
actual state -> desired state

# Key objects
Pod      : smallest unit (1+ containers)
Service  : stable VIP + load balancing
Ingress  : HTTP routing from outside
HPA      : auto-scale pods on CPU/QPS
StatefulSet: DBs with stable identity
# self-healing, rolling updates,
# service discovery built-in (DNS)`,
  },
  {
    id: "MESH",
    name: "Service Mesh",
    icon: "🕸️",
    tagline: "Networking for microservices, out of your code",
    accent: "#15803d",
    meaning:
      "A service mesh (Istio, Linkerd) injects a sidecar proxy next to every service pod, handling mTLS encryption, retries, timeouts, circuit breaking, traffic shifting (canary), and telemetry — all via infrastructure config, not application code. App developers write business logic; the mesh standardizes service-to-service communication.",
    analogy:
      "A private postal system for an office campus: every building has a mailroom (sidecar) that handles encryption, tracking, re-delivery, and delivery reports. Departments just drop letters in — no one writes their own courier logic.",
    sql: `# Sidecar pattern
[pod] = [app container][envoy proxy]
all in/out traffic flows via envoy:
  - mTLS between every pair (zero trust)
  - retry / timeout / circuit breaker
  - golden metrics per hop (free)

# Traffic management (canary)
VirtualService:
  route:
  - destination: reviews-v2
    weight: 10      # 10% new version
  - destination: reviews-v1
    weight: 90

# Trade-off: operational complexity +
# latency per hop; adopt when microservice
# count makes libraries unreliable.`,
  },
  {
    id: "CICD",
    name: "CI/CD & Infrastructure as Code",
    icon: "⚙️",
    tagline: "Ship safely and reproducibly",
    accent: "#7c3aed",
    meaning:
      "CI automatically builds and tests every commit; CD deploys those artifacts automatically through environments (dev -> staging -> prod) with strategies like blue-green or canary. Infrastructure as Code (Terraform, CloudFormation) defines servers/networks in versioned files, making environments reproducible and reviewable — no snowflake servers.",
    analogy:
      "A restaurant kitchen with standardized recipes (code): every chef (pipeline) cooks a new dish the same way, tastes it (tests) before serving, and rolls it out to a few tables first (canary) before the whole menu.",
    sql: `# Pipeline (GitHub Actions example)
push -> CI:
  1. build & unit tests
  2. build Docker image, push to ECR
  3. integration tests
main -> CD:
  4. deploy to staging (auto)
  5. deploy to prod: canary 5% ->
     watch metrics -> 100%
  6. rollback = redeploy previous tag

# Infrastructure as Code (Terraform)
resource "aws_instance" "api" {
  ami           = var.ami
  instance_type = "t3.micro"
}
# infra in git: review, diff, rollback,
# identical dev/staging/prod`,
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

export default function CloudInfrastructurePage() {
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
          Cloud & <span>Infrastructure</span>
        </h1>
        <p className="acid-subtitle">
          Docker, Kubernetes, service mesh, CI/CD and Infrastructure as Code — how modern systems are deployed and run.
        </p>

        <div className="acid-chip-row">
          <span className="acid-chip">🐳 Docker</span>
          <span className="acid-chip">☸️ Kubernetes</span>
          <span className="acid-chip">⚙️ CI/CD</span>
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
