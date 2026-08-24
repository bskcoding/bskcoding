import { useState } from "react";
import "./HldDiagram.css";

/**
 * HldDiagram — renders a High-Level Design architecture diagram.
 *
 * Accepts an optional list of components extracted from the answer text
 * (e.g. ["Frontend → React.js / Angular", "Database → PostgreSQL + Redis"]).
 * Falls back to sensible defaults per layer when a layer has no match.
 */

const DEFAULT_LAYERS = [
  {
    name: "Clients",
    icon: "👥",
    color: "#4ade80",
    nodes: [{ label: "Users", tech: "Web / Mobile" }],
  },
  {
    name: "Edge",
    icon: "🌐",
    color: "#38bdf8",
    nodes: [{ label: "Load Balancer", tech: "Nginx / AWS ALB" }],
  },
  {
    name: "Application",
    icon: "⚙️",
    color: "#c084fc",
    nodes: [
      { label: "Frontend", tech: "React.js / Angular" },
      { label: "Backend APIs", tech: "Spring Boot (Java)" },
      { label: "Auth", tech: "JWT + OAuth2" },
    ],
  },
  {
    name: "Services",
    icon: "🧩",
    color: "#fbbf24",
    nodes: [
      { label: "User Service", tech: "Auth & Profile" },
      { label: "Chef Service", tech: "Details & Availability" },
      { label: "Booking Service", tech: "Scheduling Logic" },
      { label: "Notification Service", tech: "Email / SMS / Push" },
    ],
  },
  {
    name: "Data & Infra",
    icon: "🗄️",
    color: "#f472b6",
    nodes: [
      { label: "Database", tech: "PostgreSQL / MySQL" },
      { label: "Cache", tech: "Redis" },
      { label: "Queue", tech: "Kafka / RabbitMQ" },
      { label: "Storage", tech: "AWS S3 / Firebase" },
    ],
  },
];

// Map a component line like "Frontend → React.js / Angular" into a layer
function classifyComponent(label, tech) {
  const l = label.toLowerCase();
  const t = (tech || "").toLowerCase();
  if (/user|chef|booking|notification|payment|order|inventory/.test(l))
    return "Services";
  if (/frontend|backend|api|auth|gateway|controller/.test(l))
    return "Application";
  if (/database|cache|queue|storage|kafka|redis|s3|db/.test(l + t))
    return "Data & Infra";
  if (/load balancer|cdn|nginx|alb/.test(l + t)) return "Edge";
  if (/client|user|mobile|web/.test(l) && !/service/.test(l)) return "Clients";
  return null;
}

// Parse a component string like "Frontend → React.js / Angular" into {label, tech}
function parseComponent(entry) {
  const arrowIdx = entry.indexOf("\u2192");
  if (arrowIdx < 0) return { label: entry.trim(), tech: "" };
  return {
    label: entry.slice(0, arrowIdx).trim(),
    tech: entry.slice(arrowIdx + 1).trim(),
  };
}

export default function HldDiagram({
  title = "High-Level Design (HLD)",
  components = [],
}) {
  const [open, setOpen] = useState(true);

  // Parse custom component lines and classify them into layers
  const customNodesByLayer = {};
  const unclassified = [];
  components.forEach((entry) => {
    const { label, tech } = parseComponent(entry);
    if (!label) return;
    const layer = classifyComponent(label, tech);
    if (layer) {
      if (!customNodesByLayer[layer]) customNodesByLayer[layer] = [];
      customNodesByLayer[layer].push({ label, tech });
    } else {
      unclassified.push({ label, tech });
    }
  });

  // For each layer, use custom nodes if available, otherwise fall back to defaults
  const layersToShow = DEFAULT_LAYERS.map((layer) => ({
    ...layer,
    nodes:
      customNodesByLayer[layer.name]?.length > 0
        ? customNodesByLayer[layer.name]
        : layer.nodes,
  }));

  return (
    <div className="hld-wrap">
      <button className="hld-toggle" onClick={() => setOpen(!open)}>
        <span className="hld-toggle-icon">🏗️</span>
        <span>{title}</span>
        <span className={`hld-chevron ${open ? "open" : ""}`}>▼</span>
      </button>

      {open && (
        <div className="hld-canvas">
          {layersToShow.map((layer, li) => (
            <div key={layer.name} className="hld-layer-row">
              <div className={`hld-layer hld-layer-${li}`}>
                <div className="hld-layer-label">
                  <span className="hld-layer-icon">{layer.icon}</span>
                  {layer.name}
                </div>
                <div className="hld-nodes">
                  {layer.nodes.map((n) => (
                    <div
                      key={n.label}
                      className="hld-node"
                      style={{ "--node-color": layer.color }}
                    >
                      <span className="hld-node-label">{n.label}</span>
                      <span className="hld-node-tech">{n.tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              {li < layersToShow.length - 1 && (
                <div className="hld-arrows" aria-hidden="true">
                  <span className="hld-arrow">↓</span>
                  <span className="hld-arrow up">↑</span>
                </div>
              )}
            </div>
          ))}

          {unclassified.length > 0 && (
            <div className="hld-layer-row">
              <div className="hld-layer hld-layer-extra">
                <div className="hld-layer-label">
                  <span className="hld-layer-icon">📦</span>
                  Additional Components
                </div>
                <div className="hld-nodes">
                  {unclassified.map((n, i) => (
                    <div
                      key={`${n.label}-${i}`}
                      className="hld-node"
                      style={{ "--node-color": "#fbbf24" }}
                    >
                      <span className="hld-node-label">{n.label}</span>
                      <span className="hld-node-tech">{n.tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="hld-caption">
            Request flows top → bottom; responses & async events flow back
            (notifications via queue).
          </div>
        </div>
      )}
    </div>
  );
}
