import { useState } from "react";
import { Link } from "react-router-dom";
import "./UrlShortener.css";
import "./UrlShortenerHld.css";
import "./UrlShortenerHld2.css";
import FlowDiagram from "./FlowDiagram";
import { SecHead } from "./UrlStatic1";
import { QuestionSection } from "./UrlStatic1";
import { RequirementsSection, EntitySection } from "./UrlStatic2";
import { ApiSection, DbSection } from "./UrlStatic3";
import { DiveTop } from "./UrlDeepA";
import { DiveBottom } from "./UrlDeepB";
import { WRITE_NODES, WRITE_STEPS } from "./urlShortenerData1";
import { READ_NODES, READ_STEPS } from "./urlShortenerRead";
import { DASH_NODES, DASH_STEPS, CLEANUP_NODES, CLEANUP_STEPS } from "./urlShortenerFlows";

const TABS = [
  { id: "write", label: "✍️ Write Flow" },
  { id: "read", label: "🔍 Read Flow" },
  { id: "dash", label: "📊 Dashboard Flow" },
  { id: "cleanup", label: "⏰ Cleanup Flow", red: true },
];

export default function UrlShortenerPage() {
  const [tab, setTab] = useState("write");
  return (
    <div className="usd-doc">
      <Link to="/maang/system-design/advanced" className="usd-back">{"\u2190"} Back to Advanced System Design</Link>
      <div className="usd-header">
        <h1><span style={{ marginRight: 8 }}>⚡</span>URL Shortener — System Design</h1>
        <p>A complete, production-style walkthrough: requirements, entities, APIs, HLD, database, and non-functional design.</p>
      </div>

      <QuestionSection />
      <div className="usd-section-divider" />
      <RequirementsSection />
      <div className="usd-section-divider" />
      <EntitySection />
      <div className="usd-section-divider" />
      <ApiSection />
      <div className="usd-section-divider" />

      <div className="usd-section">
        <SecHead num="5" title="HLD Design" sub="The full system architecture. Use the tabs below to animate each of the four flows." />
        <div className="usd-hld">
          <div className="usd-tabs">
            {TABS.map((t) => (
              <button key={t.id} className={`usd-tab${tab === t.id ? " active" : ""}${t.red ? " red" : ""}`} onClick={() => setTab(t.id)}>
                {t.label}
              </button>
            ))}
          </div>
          {tab === "write" && <FlowDiagram nodes={WRITE_NODES} steps={WRITE_STEPS} dividerLabel="↓" />}
          {tab === "read" && <FlowDiagram nodes={READ_NODES} steps={READ_STEPS} dividerLabel="↓ (only if cache miss)" />}
          {tab === "dash" && <FlowDiagram nodes={DASH_NODES} steps={DASH_STEPS} dividerLabel="↓" />}
          {tab === "cleanup" && <FlowDiagram nodes={CLEANUP_NODES} steps={CLEANUP_STEPS} red dividerLabel="↓ (30 days later)" />}
        </div>
      </div>
      <div className="usd-section-divider" />

      <DbSection />
      <div className="usd-section-divider" />

      <div className="usd-section">
        <SecHead num="7" title="Design Deep Dive" sub="How each non-functional requirement is actually achieved." />
        <DiveTop />
        <DiveBottom />
      </div>
    </div>
  );
}
