import { useState, useRef, useEffect } from "react";
import "./UrlShortenerHld.css";
import "./UrlShortenerHld2.css";

// Generic interactive stepper: nodes + arrows + step panel + Next/Prev.
export default function FlowDiagram({ nodes, steps, red = false, dividerLabel }) {
  const [current, setCurrent] = useState(-1);
  const stageRef = useRef(null);
  const nodeRefs = useRef([]);
  const [dot, setDot] = useState({ left: 0, top: 0, show: false });

  useEffect(() => {
    if (current < 0 || !stageRef.current || !nodeRefs.current[current]) {
      setDot((d) => ({ ...d, show: false }));
      return;
    }
    const n = nodeRefs.current[current];
    const s = stageRef.current;
    const nr = n.getBoundingClientRect();
    const sr = s.getBoundingClientRect();
    setDot({
      left: nr.left - sr.left + nr.width / 2 - 5,
      top: nr.top - sr.top + nr.height / 2 - 5,
      show: true,
    });
  }, [current]);

  const total = steps.length;
  const renderNode = (n, i) => {
    if (n.db) {
      const cls = `usd-db${i === current ? " active" : ""}${i < current ? " done" : ""}${n.danger ? " danger" : ""}`;
      return (
        <div key={i} ref={(el) => (nodeRefs.current[i] = el)} className={cls}>
          <div className="usd-db-title">{n.title}</div>
          {n.fields.map(([k, v], j) => (
            <div key={j} className="usd-field">
              <span className="usd-fk">{k}</span>
              <span className="usd-ft">{v}</span>
            </div>
          ))}
          {n.data && <div className={`usd-data${i < current ? " show" : ""}${n.danger ? " danger" : ""}`}>{n.data}</div>}
        </div>
      );
    }
    const cls = `usd-node${i === current ? " active" : ""}${i < current ? " done" : ""}${n.danger ? " danger" : ""}`;
    return (
      <div key={i} ref={(el) => (nodeRefs.current[i] = el)} className={cls}>
        <span className="usd-icon">{n.icon}</span>
        <div className="usd-name">{n.name}</div>
        <div className="usd-sub">{n.sub}</div>
      </div>
    );
  };

  return (
    <div>
      <div className="usd-stage" ref={stageRef}>
        <div className={`usd-dot${red ? " danger" : ""}`} style={{ opacity: dot.show ? 1 : 0, left: dot.left, top: dot.top }} />
        <div className="usd-track">
          {nodes.slice(0, 4).map((n, i) => (
            <span key={`t${i}`} style={{ display: "contents" }}>
              {renderNode(n, i)}
              {i < 3 && <span className={`usd-arrow${i === current ? " active" : ""}${i < current ? " done" : ""}`}>&rarr;</span>}
            </span>
          ))}
        </div>
        <div className={`usd-divider${3 === current ? " active" : ""}${3 < current ? " done" : ""}`}>
          {dividerLabel || (red ? "\u2193 (30 days later)" : "\u2193")}
        </div>
        <div className="usd-track">
          {nodes.slice(4).map((n, k) => {
            const i = k + 4;
            return (
              <span key={`b${i}`} style={{ display: "contents" }}>
                {renderNode(n, i)}
                {k < nodes.length - 5 && <span className={`usd-arrow${i === current ? " active" : ""}${i < current ? " done" : ""}`}>&rarr;</span>}
              </span>
            );
          })}
        </div>
      </div>
      <div className="usd-panel">
        {current === -1 ? (
          <>
            <div className="usd-step-head">
              <span className={`usd-badge${red ? " red" : ""}`}>Step 1 / {total}</span>
              <span className="usd-step-title">Click "Next Step" to begin the {red ? "cleanup" : "flow"}</span>
            </div>
            <div className="usd-what">Each step will highlight the active component and explain what is happening with real SQL and Redis commands.</div>
          </>
        ) : (
          <>
            <div className="usd-step-head">
              <span className={`usd-badge${red ? " red" : ""}`}>Step {current + 1} / {total}</span>
              <span className="usd-step-title">{steps[current].title}</span>
            </div>
            <div className={`usd-call${red ? " red" : ""}`}>{steps[current].call}</div>
            <div className="usd-what" dangerouslySetInnerHTML={{ __html: steps[current].what }} />
            <div className={`usd-outcome${red ? " red" : ""}`}>{steps[current].outcome}</div>
          </>
        )}
      </div>
      <div className="usd-controls">
        <button className="usd-btn" disabled={current <= 0} onClick={() => setCurrent((c) => c - 1)}>&larr; Previous</button>
        <button className={`usd-btn${red ? " danger" : " primary"}`} disabled={current >= total - 1} onClick={() => setCurrent((c) => c + 1)}>Next Step &rarr;</button>
        <button className="usd-btn" onClick={() => setCurrent(-1)}>Reset</button>
        <span className="usd-counter">{current === -1 ? "Ready" : `Step ${current + 1} / ${total}`}</span>
      </div>
    </div>
  );
}
