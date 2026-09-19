import "./UrlShortener.css";
import { SecHead, List } from "./UrlStatic1";

export function RequirementsSection() {
  return (
    <div className="usd-section">
      <SecHead num="2" title="Requirements" sub="What the system must do (functional) and how well it must do it (non-functional)." />
      <div className="usd-grid2">
        <div className="usd-card">
          <h3>✅ Functional Requirements <span className="usd-tag">FR</span></h3>
          <List items={[
            ["FR1", "<strong>Shorten URL:</strong> A user can submit a long URL and receive a unique short URL (e.g., <code>short.ly/3nZK8xQ1mN2</code>)."],
            ["FR2", "<strong>Redirect:</strong> When anyone visits a short URL, the system redirects them to the original long URL with HTTP 301/302."],
            ["FR3", "<strong>Dashboard / Analytics:</strong> A user can see click counts, top countries, top referrers, and a time-series of clicks for their short URLs."],
            ["FR4", "<strong>Auto-Expire:</strong> URLs expire after a configurable time (default 1 year). An automated job removes expired URLs from both database and cache."],
          ]} />
        </div>
        <div className="usd-card">
          <h3>⚙️ Non-Functional Requirements <span className="usd-tag">NFR</span></h3>
          <List items={[
            ["NFR1", "<strong>CAP under partition:</strong> During a network partition, the read path prioritizes availability (stale-but-usable redirects beat 503s) while the write path prioritizes consistency (a short code is never assigned twice). CAP describes a per-partition trade-off, not a per-operation one."],
            ["NFR2", "<strong>Scalability:</strong> Support 100M+ URLs, 10K reads/sec, 1K writes/sec via horizontal scaling."],
            ["NFR3", "<strong>Latency:</strong> Redirect p99 under 50 ms; URL creation under 200 ms."],
            ["NFR4", "<strong>Durability:</strong> No acknowledged write is ever lost. We achieve this with synchronous WAL replication, automated backups, and cross-region DR, sized to the required RPO/RTO."],
          ]} />
        </div>
      </div>
    </div>
  );
}

export function EntitySection() {
  const tbl = (rows) => (
    <table className="usd-table"><tbody>
      <tr><th>Field</th><th>Type</th></tr>
      {rows.map(([f, t], i) => (
        <tr key={i}><td><code>{f}</code></td><td dangerouslySetInnerHTML={{ __html: t }} /></tr>
      ))}
    </tbody></table>
  );
  return (
    <div className="usd-section">
      <SecHead num="3" title="Entity Design" sub="The three core entities and how they relate to each other." />
      <div className="usd-card">
        <h3>🗂️ Entity Relationship</h3>
        <p>Three entities: <strong>User</strong> owns many <strong>ShortURLs</strong>; each ShortURL generates many <strong>ClickEvents</strong>. The relationship chain is User → ShortURL → Analytics.</p>
        <pre className="usd-pre">{"User 1 \u2500\u2500\u2500\u25B6 N ShortURL 1 \u2500\u2500\u2500\u25B6 N ClickEvent"}</pre>
      </div>
      <div className="usd-grid3">
        <div className="usd-card"><h3>👤 User</h3>{tbl([["user_id", "UUID <strong>PK</strong>"], ["email", "VARCHAR UNIQUE"], ["api_key", "VARCHAR INDEX"], ["created_at", "TIMESTAMP"]])}</div>
        <div className="usd-card"><h3>🔗 ShortURL</h3>{tbl([["short_code", "VARCHAR(11) <strong>PK</strong>"], ["long_url", "TEXT"], ["user_id", "UUID <strong>FK</strong>"], ["created_at", "TIMESTAMP"], ["expires_at", "TIMESTAMP INDEX"], ["is_deleted", "BOOLEAN"]])}</div>
        <div className="usd-card"><h3>📊 ClickEvent</h3>{tbl([["event_id", "UInt64 <strong>PK</strong>"], ["short_code", "String <strong>FK</strong>"], ["clicked_at", "DateTime"], ["country", "String"], ["referrer", "String"], ["user_agent", "String"]])}</div>
      </div>
    </div>
  );
}
