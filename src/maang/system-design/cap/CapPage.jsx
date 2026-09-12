import { useState } from "react";
import { Link } from "react-router-dom";
import "./CapPage.css";
import { capTopics } from "./capData";

function CapCard({ topic, index, isActive, onClick }) {
  const short = topic.desc.length > 120 ? topic.desc.slice(0, 120) + "..." : topic.desc;
  return (
    <article className={`cap-card ${isActive ? "active" : ""}`} onClick={() => onClick(topic.id)}>
      <div className="cap-card-head">
        <span className="cap-card-letter"><i className={`fas ${topic.icon}`} /></span>
        <div>
          <h3 className="cap-card-name">{topic.title}</h3>
          <span className="cap-card-tagline">{topic.sub}</span>
        </div>
      </div>
      <p className="cap-card-summary">{short}</p>
      <div className="cap-card-actions">
        <button className="cap-card-btn" type="button">Learn more</button>
        <a className="cap-card-badge" href={topic.videoLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Video</a>
      </div>
      <span className="cap-card-index">{index + 1} / {capTopics.length}</span>
      {isActive && <span className="cap-active-indicator">check</span>}
    </article>
  );
}

function CapDetail({ topic, onClose }) {
  if (!topic) return null;
  return (
    <div className="cap-modal-backdrop" onClick={onClose}>
      <div className="cap-detail-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cap-detail-header">
          <h2><span className="cap-detail-title">{topic.title}</span><span className="cap-detail-sub">{topic.sub}</span></h2>
          <button className="cap-close-btn" onClick={onClose} aria-label="Close">X</button>
        </div>
        <div className="cap-modal-scroll-content">
          <div className="cap-definition-box"><strong>Definition: </strong>{topic.definition}</div>
          <div className="cap-detail-grid">
            <div className="cap-info-box">
              <h3>Key points</h3>
              <ul>{topic.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
              <p><strong>Relation: </strong>{topic.relation}</p>
            </div>
            <div className="cap-code-box">
              <h3>Diagram</h3>
              <div dangerouslySetInnerHTML={{ __html: topic.diagram() }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function CapPage() {
  const [activeId, setActiveId] = useState(null);
  const active = capTopics.find((t) => t.id === activeId) || null;
  return (
    <div className="cap-page">
      <Link to="/maang/system-design-basics" className="cap-back">Back to System Design Basics</Link>
      <header className="cap-hero">
        <h1 className="cap-title">CAP <span>Theorem</span></h1>
        <p className="cap-subtitle">Consistency, Availability, Partition Tolerance - pick any 2 of 3. Diagrams plus CP vs AP interview answer.</p>
        <div className="cap-chip-row">
          <span className="cap-chip">C - Consistency</span>
          <span className="cap-chip">A - Availability</span>
          <span className="cap-chip">P - Partition Tolerance</span>
          <span className="cap-chip">CP vs AP</span>
        </div>
      </header>
      <section className="cap-define">
        <h2>What is CAP Theorem?</h2>
        <p>Brewer theorem: a distributed store guarantees at most 2 of 3. Since partitions WILL happen, P is mandatory - real choice is CP vs AP.</p>
        <div className="cap-one-liner"><strong>One-liner: </strong>Banking needs CP, social feeds need AP.</div>
      </section>
      <section className="cap-props">
        <h2 className="cap-section-title">The 3 guarantees + the real decision</h2>
        <p className="cap-section-sub">Click any card for definition and diagram.</p>
        <div className="cap-grid">
          {capTopics.map((t, i) => <CapCard key={t.id} topic={t} index={i} isActive={t.id === activeId} onClick={(id) => setActiveId(id)} />)}
        </div>
      </section>
      <CapDetail topic={active} onClose={() => setActiveId(null)} />
      <section className="cap-together">
        <h2>How they work together (partition story)</h2>
        <div className="cap-together-wrap">
          <div className="cap-flow">
            <div className="cap-flow-step"><span className="cap-flow-num">1</span><p><b>Healthy:</b> A and B in sync, $1000.</p></div>
            <div className="cap-flow-step"><span className="cap-flow-num">2</span><p><b>Partition:</b> write $1500 only on A.</p></div>
            <div className="cap-flow-step"><span className="cap-flow-num">3</span><p><b>CP:</b> read at B refused (ERROR).</p></div>
            <div className="cap-flow-step"><span className="cap-flow-num">4</span><p><b>AP:</b> read at B served stale, heals later.</p></div>
          </div>
          <pre className="cap-code cap-code-big"><code>{`BEFORE: A=$1000 B=$1000 (in sync)\nPARTITION: A X B (no sync)\nWRITE: A=$1500, B=$1000 stale\nCP READ B -> ERROR\nAP READ B -> $1000 stale`}</code></pre>
        </div>
      </section>
      <section className="cap-why">
        <h2>Why CAP matters in System Design</h2>
        <div className="cap-why-grid">
          <div className="cap-why-card"><h4>When to pick CP</h4><ul><li>Money, orders, inventory.</li><li>MongoDB, HBase, Redis.</li><li>OK with brief errors.</li></ul></div>
          <div className="cap-why-card"><h4>When to pick AP</h4><ul><li>Feeds, likes, carts.</li><li>Cassandra, DynamoDB.</li><li>Must stay up.</li></ul></div>
          <div className="cap-why-card"><h4>Interview tip</h4><ul><li>P is mandatory, so CP vs AP.</li><li>Give bank (CP) + likes (AP).</li><li>Name real DBs.</li></ul></div>
        </div>
      </section>
      <div className="cap-footer-note">CAP in one line - partitions happen, choose correctness (CP) or uptime (AP).</div>
    </div>
  );
}

export default CapPage;
