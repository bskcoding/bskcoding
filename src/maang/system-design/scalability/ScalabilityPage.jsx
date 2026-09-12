import { useState } from "react";
import { Link } from "react-router-dom";
import "./ScalabilityPage.css";
import { scalabilityTopics } from "./scalabilityData";

function ScalabilityCard({ topic, index, isActive, onClick }) {
  const short = topic.desc.length > 120 ? topic.desc.slice(0, 120) + "..." : topic.desc;
  return (
    <article className={`slc-card ${isActive ? "active" : ""}`} onClick={() => onClick(topic.id)}>
      <div className="slc-card-head">
        <span className="slc-card-letter"><i className={`fas ${topic.icon}`} /></span>
        <div>
          <h3 className="slc-card-name">{topic.title}</h3>
          <span className="slc-card-tagline">{topic.sub}</span>
        </div>
      </div>
      <p className="slc-card-summary">{short}</p>
      <div className="slc-card-actions">
        <button className="slc-card-btn" type="button">Learn more</button>
        <a className="slc-card-badge" href={topic.videoLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Video</a>
      </div>
      <span className="slc-card-index">{index + 1} / {scalabilityTopics.length}</span>
      {isActive && <span className="slc-active-indicator">check</span>}
    </article>
  );
}

function ScalabilityDetail({ topic, onClose }) {
  if (!topic) return null;
  return (
    <div className="slc-modal-backdrop" onClick={onClose}>
      <div className="slc-detail-panel" onClick={(e) => e.stopPropagation()}>
        <div className="slc-detail-header">
          <h2><span className="slc-detail-title">{topic.title}</span><span className="slc-detail-sub">{topic.sub}</span></h2>
          <button className="slc-close-btn" onClick={onClose} aria-label="Close">X</button>
        </div>
        <div className="slc-modal-scroll-content">
          <div className="slc-definition-box"><strong>Definition: </strong>{topic.definition}</div>
          {topic.definition2 && <div className="slc-definition-box slc-definition-box-secondary"><strong>Also compare: </strong>{topic.definition2}</div>}
          <div className="slc-detail-grid">
            <div className="slc-info-box">
              <h3>Key points</h3>
              <ul>{topic.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
              <p><strong>Relation: </strong>{topic.relation}</p>
            </div>
            <div className="slc-code-box">
              <h3>Diagram</h3>
              <div dangerouslySetInnerHTML={{ __html: topic.diagram() }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScalabilityPage() {
  const [activeId, setActiveId] = useState(null);
  const active = scalabilityTopics.find((t) => t.id === activeId) || null;
  return (
    <div className="slc-page">
      <Link to="/maang/system-design-basics" className="slc-back">← Back to System Design Basics</Link>
      <header className="slc-hero">
        <h1 className="slc-title">Scalability</h1>
        <p className="slc-subtitle">Grow your system to handle more traffic — vertically or horizontally.</p>
        <div className="slc-chip-row">
          <span className="slc-chip">Vertical Scaling</span>
          <span className="slc-chip">Horizontal Scaling</span>
          <span className="slc-chip">Load Distribution</span>
        </div>
      </header>
      <section className="slc-define">
        <h2>What is Scalability?</h2>
        <p>Scalability means the system can handle more load by adding resources. Vertical scaling upgrades the same machine, while horizontal scaling adds more machines.</p>
        <div className="slc-one-liner"><strong>One line: </strong>Vertical is quick but capped; horizontal is the standard path for high-traffic apps.</div>
      </section>
      <section className="slc-props">
        <h2 className="slc-section-title">Scalability Concepts</h2>
        <p className="slc-section-sub">Click any card to see the idea in plain language, with a diagram and the trade-offs.</p>
        <div className="slc-grid">
          {scalabilityTopics.map((t, i) => <ScalabilityCard key={t.id} topic={t} index={i} isActive={t.id === activeId} onClick={(id) => setActiveId(id)} />)}
        </div>
      </section>
      <ScalabilityDetail topic={active} onClose={() => setActiveId(null)} />
      <section className="slc-together">
        <h2>How Scaling Works (one flow)</h2>
        <div className="slc-together-wrap">
          <div className="slc-flow">
            <div className="slc-flow-step"><span className="slc-flow-num">1</span><p><b>Traffic grows</b> — one server cannot handle all requests.</p></div>
            <div className="slc-flow-step"><span className="slc-flow-num">2</span><p><b>Vertical scaling</b> — upgrade CPU/RAM on the same machine.</p></div>
            <div className="slc-flow-step"><span className="slc-flow-num">3</span><p><b>Horizontal scaling</b> — add more servers behind a load balancer.</p></div>
            <div className="slc-flow-step"><span className="slc-flow-num">4</span><p><b>Load distribution</b> — spread traffic evenly across all servers.</p></div>
          </div>
          <pre className="slc-code slc-code-big"><code>{`1 server -> 1000 users (OK)
1 server -> 10000 users (SLOW)
Vertical: 1 big server -> 10000 users (OK)
Horizontal: 10 small servers -> 100000 users (OK)`}</code></pre>
        </div>
      </section>
      <section className="slc-why">
        <h2>When to Use What</h2>
        <div className="slc-why-grid">
          <div className="slc-why-card"><h4>Vertical Scaling</h4><ul><li>Small systems</li><li>Quick capacity boost</li><li>No code changes</li></ul></div>
          <div className="slc-why-card"><h4>Horizontal Scaling</h4><ul><li>Internet-scale apps</li><li>Fault tolerance</li><li>Auto-scaling groups</li></ul></div>
          <div className="slc-why-card"><h4>Interview tip</h4><ul><li>Say horizontal for web apps</li><li>Mention stateless servers</li><li>Discuss load balancer</li></ul></div>
        </div>
      </section>
      <div className="slc-footer-note">One line to remember — vertical scales up, horizontal scales out.</div>
    </div>
  );
}

export default ScalabilityPage;
