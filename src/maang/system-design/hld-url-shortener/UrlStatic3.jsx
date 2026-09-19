import "./UrlShortener.css";
import { SecHead } from "./UrlStatic1";

export function ApiSection() {
  return (
    <div className="usd-section">
      <SecHead num="4" title="Core APIs" sub="The public HTTP contract of the service." />
      <div className="usd-card">
        <h3>🌐 REST Endpoints</h3>
        <table className="usd-table"><tbody>
          <tr><th>Method</th><th>Path</th><th>Purpose</th><th>Request</th><th>Response</th></tr>
          <tr><td><span className="usd-nfr green">POST</span></td><td><code>/api/v1/shorten</code></td><td>Create a short URL</td><td><code>{"{ long_url, custom_alias?, expires_in? }"}</code></td><td><code>{"{ short_url, short_code, expires_at }"}</code></td></tr>
          <tr><td><span className="usd-nfr">GET</span></td><td><code>/:short_code</code></td><td>Redirect to long URL</td><td>—</td><td><code>301 or 302 Location: long_url</code></td></tr>
          <tr><td><span className="usd-nfr">GET</span></td><td><code>/api/v1/urls</code></td><td>List user's URLs (paginated)</td><td>Header: <code>X-API-Key</code></td><td><code>[ {"{ short_code, long_url, clicks }"} ]</code></td></tr>
          <tr><td><span className="usd-nfr yellow">DELETE</span></td><td><code>/api/v1/urls/:code</code></td><td>Soft-delete a short URL</td><td>Header: <code>X-API-Key</code></td><td><code>204 No Content</code></td></tr>
          <tr><td><span className="usd-nfr">GET</span></td><td><code>/api/v1/analytics/:code</code></td><td>Get click analytics</td><td>Query: <code>?from=&amp;to=</code></td><td><code>{"{ total, countries, referrers, timeseries }"}</code></td></tr>
        </tbody></table>
      </div>
      <div className="usd-card">
        <h3>📝 Example Request / Response</h3>
        <pre className="usd-pre">{`// POST /api/v1/shorten\n{\n  "long_url": "https://www.example.com/very/long/path/article?id=12345",\n  "expires_in": 31536000\n}\n\n// 201 Created\n{\n  "short_url": "https://short.ly/3nZK8xQ1mN2",\n  "short_code": "3nZK8xQ1mN2",\n  "expires_at": "2025-01-15T10:30:00Z"\n}`}</pre>
      </div>
    </div>
  );
}

export function DbSection() {
  return (
    <div className="usd-section">
      <SecHead num="6" title="Database Design" sub="Two databases: one for the source of truth, one for analytics." />
      <div className="usd-grid2">
        <div className="usd-card">
          <h3>🗄️ PostgreSQL <span className="usd-tag">Primary · Relational</span></h3>
          <p><strong>Why relational?</strong> URL mappings need <strong>strong consistency</strong>. When a short URL is created, it must be immediately readable. ACID transactions guarantee no duplicate short codes even under concurrent writes.</p>
          <p><strong>Schema:</strong> The <code>short_urls</code> table is indexed on <code>short_code</code> (B-tree, O(log n) lookups) and <code>expires_at</code> (partial index for active rows).</p>
          <p><strong>Replication:</strong> One primary handles writes. Two or more replicas handle reads via streaming replication. If the primary dies, Patroni promotes a replica in under 30 seconds.</p>
          <p><strong>Read-your-writes guard:</strong> On a cache miss immediately after a write, the read path queries the <strong>primary</strong> (not a replica), so a freshly created short code is never incorrectly reported as 404.</p>
          <p><strong>Sharding (future):</strong> When the table exceeds 100M rows, shard by <code>hash(short_code)</code> across multiple PostgreSQL instances.</p>
          <pre className="usd-pre">{`CREATE TABLE short_urls (\n  short_code  VARCHAR(11) PRIMARY KEY,\n  long_url    TEXT NOT NULL,\n  user_id     UUID REFERENCES users(user_id),\n  created_at  TIMESTAMP DEFAULT NOW(),\n  expires_at  TIMESTAMP NOT NULL,\n  is_deleted  BOOLEAN DEFAULT false\n);\n\nCREATE INDEX idx_short_code ON short_urls(short_code);\nCREATE INDEX idx_expires ON short_urls(expires_at) WHERE is_deleted = false;`}</pre>
        </div>
        <div className="usd-card">
          <h3>📊 ClickHouse <span className="usd-tag">Analytics · Columnar</span></h3>
          <p><strong>Why columnar?</strong> Analytics queries like <code>COUNT(*) GROUP BY country</code> scan billions of rows. Columnar storage reads only the needed columns, compresses 10×, and returns aggregations in milliseconds.</p>
          <p><strong>Schema:</strong> The <code>clicks</code> table is partitioned by month for fast pruning, and ordered by <code>(short_code, clicked_at)</code> for time-series queries.</p>
          <p><strong>Ingestion:</strong> Events arrive from Kafka in batches of ~1,000 rows. ClickHouse's MergeTree engine merges parts in the background, optimized for high write throughput.</p>
          <p><strong>Retention:</strong> Raw events kept 90 days. Pre-aggregated rollups (daily counts) kept indefinitely.</p>
          <pre className="usd-pre">{`CREATE TABLE clicks (\n  event_id    UInt64,\n  short_code  String,\n  clicked_at  DateTime,\n  country     String,\n  referrer    String,\n  user_agent  String\n) ENGINE = MergeTree()\nPARTITION BY toYYYYMM(clicked_at)\nORDER BY (short_code, clicked_at);`}</pre>
        </div>
      </div>
    </div>
  );
}
