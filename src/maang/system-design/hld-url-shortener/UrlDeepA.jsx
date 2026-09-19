import "./UrlShortener.css";
import { SecHead, List } from "./UrlStatic1";

export function DiveTop() {
  return (
    <>
      <div className="usd-card">
        <h3>🔑 How we guarantee globally unique short codes <span className="usd-nfr green">NFR1 · NFR4</span></h3>
        <p><strong>NFR addressed: Consistency on writes (NFR1), Durability (NFR4).</strong></p>
        <p>We use <strong>Snowflake IDs</strong> — a 64-bit integer composed of four parts. Because the ID includes the timestamp, datacenter, and machine ID, two different machines will never generate the same number at the same millisecond.</p>
        <p><strong>Encoding length:</strong> A full 64-bit Snowflake ID has up to ~1.84 × 10<sup>19</sup> possible values. A 7-character Base62 string only covers ~3.5 × 10<sup>12</sup> values — not enough. We therefore use <strong>11 Base62 characters</strong>, which covers ~5.2 × 10<sup>19</sup> values — comfortably above the full 64-bit range.</p>
      </div>
      <div className="usd-grid2">
        <div className="usd-card">
          <h3>🧮 Snowflake ID breakdown (64 bits)</h3>
          <table className="usd-table"><tbody>
            <tr><th>Part</th><th>Bits</th><th>Purpose</th></tr>
            <tr><td><strong>Timestamp</strong></td><td>41</td><td>Milliseconds since custom epoch → 69 years of unique time</td></tr>
            <tr><td><strong>Datacenter</strong></td><td>5</td><td>32 datacenters</td></tr>
            <tr><td><strong>Machine</strong></td><td>5</td><td>32 machines per datacenter</td></tr>
            <tr><td><strong>Sequence</strong></td><td>12</td><td>4096 IDs per millisecond per machine</td></tr>
          </tbody></table>
          <p style={{ marginTop: 12 }}>Combined capacity: <strong>4 million IDs per millisecond</strong> across all machines. More than enough for 1K writes/sec.</p>
        </div>
        <div className="usd-card">
          <h3>🔤 Base62 encoding — length matters</h3>
          <table className="usd-table"><tbody>
            <tr><th>Length</th><th>Total combinations</th><th>Covers 64-bit?</th></tr>
            <tr><td>7 chars</td><td>3.5 × 10<sup>12</sup></td><td style={{ color: "#f85149" }}>✗ No</td></tr>
            <tr><td>10 chars</td><td>8.4 × 10<sup>17</sup></td><td style={{ color: "#f85149" }}>✗ No</td></tr>
            <tr><td><strong>11 chars</strong></td><td>5.2 × 10<sup>19</sup></td><td style={{ color: "#3fb950" }}>✓ Yes</td></tr>
          </tbody></table>
          <pre className="usd-pre">{`function toBase62(num) {\n  const chars = 'a-zA-Z0-9';  // 62 chars\n  let result = '';\n  while (num > 0 || result.length < 11) {\n    result = chars[num % 62] + result;\n    num = Math.floor(num / 62);\n  }\n  return result;\n}\n// 7512345678901234567 → "3nZK8xQ1mN2"`}</pre>
        </div>
      </div>
      <div className="usd-card">
        <h3>❓ Why not auto-increment?</h3>
        <p>A single auto-increment counter becomes a <strong>bottleneck</strong> (every write must go through one DB) and a <strong>single point of failure</strong>. Snowflake lets each machine generate IDs independently — no coordination needed.</p>
        <p><strong>Alternative approach:</strong> If you specifically want 7-character codes, use a small allocated counter (e.g., 1–3.5 trillion) instead of a full Snowflake ID. The trade-off is that you now need a coordination service (KGS) to allocate ranges — that's the classic "7-character short code" design. Pick one; don't mix.</p>
      </div>
      <div className="usd-card" style={{ marginTop: 32 }}>
        <h3>⚡ How we keep redirect latency under 50 ms <span className="usd-nfr">NFR3 · NFR2</span></h3>
        <p><strong>NFR addressed: Latency (NFR3), Scalability (NFR2).</strong></p>
        <p>95% of traffic is reads. If every redirect hit PostgreSQL, the database would melt under 10K reads/sec. <strong>Redis absorbs that load.</strong></p>
      </div>
      <div className="usd-grid2">
        <div className="usd-card">
          <h3>📥 What we cache</h3>
          <List items={[
            ["›", "<strong>Key:</strong> <code>short:3nZK8xQ1mN2</code>"],
            ["›", "<strong>Value:</strong> the original long URL"],
            ["›", "<strong>TTL:</strong> matches the URL's <code>expires_at</code>"],
            ["›", "<strong>Eviction:</strong> <code>allkeys-lru</code> — when memory fills, least-recently-used keys are dropped. Hot URLs stay cached."],
          ]} />
        </div>
        <div className="usd-card">
          <h3>📊 Cache hit / miss path</h3>
          <table className="usd-table"><tbody>
            <tr><th>Scenario</th><th>Latency</th><th>Frequency</th></tr>
            <tr><td>Cache HIT (Redis)</td><td>&lt; 1 ms</td><td>~95%</td></tr>
            <tr><td>Cache MISS → DB</td><td>~5 ms</td><td>~5%</td></tr>
            <tr><td>Redirect total (p99)</td><td>&lt; 50 ms</td><td>—</td></tr>
          </tbody></table>
        </div>
      </div>
      <div className="usd-card">
        <h3>🌐 Redis Cluster &amp; replication</h3>
        <p>Data is sharded across <strong>6 nodes</strong> (3 masters, 3 replicas) using 16,384 hash slots. Each master handles a subset of keys. Replicas provide failover — if a master dies, Sentinel promotes a replica automatically.</p>
        <p><strong>Capacity:</strong> 100K+ ops/sec, sub-millisecond latency.</p>
      </div>
      <div className="usd-card">
        <h3>🔒 Cache consistency on delete</h3>
        <p>When a URL is deleted, we purge the Redis key <em>first</em>, then soft-delete the PostgreSQL row. This means a very brief window (microseconds) where a stale read could occur — acceptable for our AP read model.</p>
      </div>
      <div className="usd-card" style={{ marginTop: 32 }}>
        <h3>📈 How we scale to 100M URLs and 10K reads/sec <span className="usd-nfr green">NFR2 · NFR3</span></h3>
        <p><strong>NFR addressed: Scalability (NFR2), Availability (NFR3).</strong></p>
        <p>Every layer of the stack scales horizontally. No single component is a bottleneck.</p>
      </div>
      <div className="usd-grid2">
        <div className="usd-card">
          <h3>🔼 Horizontal scaling</h3>
          <List items={[
            ["›", "<strong>API servers:</strong> Stateless — any server can handle any request. Scale by adding instances behind the load balancer."],
            ["›", "<strong>PostgreSQL:</strong> Primary handles writes; 2+ read replicas handle reads. Add replicas for more read capacity."],
            ["›", "<strong>Redis:</strong> Shard keys across 6+ nodes. Add nodes to increase memory and throughput."],
            ["›", "<strong>Kafka:</strong> 12 partitions allow 12 parallel consumers. Add partitions for more throughput."],
            ["›", "<strong>Sharding:</strong> When one PostgreSQL can't hold all rows, shard by <code>hash(short_code)</code>."],
          ]} />
        </div>
        <div className="usd-card">
          <h3>🛡️ High availability (99.99%)</h3>
          <List items={[
            ["›", "<strong>Multi-AZ deployment:</strong> Servers spread across 3 availability zones. One AZ failure doesn't take down the service."],
            ["›", "<strong>Database failover:</strong> Patroni auto-promotes a replica if the primary dies. Downtime &lt; 30 s."],
            ["›", "<strong>Redis Sentinel:</strong> Monitors masters and promotes replicas on failure."],
            ["›", "<strong>Kafka replication factor 3:</strong> Each partition replicated to 3 brokers. One broker failure = no data loss."],
            ["›", "<strong>Graceful degradation:</strong> If Redis is down, redirects fall back to PostgreSQL. If analytics is down, redirects still work."],
          ]} />
        </div>
      </div>
      <div className="usd-card">
        <h3>📊 Capacity math</h3>
        <table className="usd-table"><tbody>
          <tr><th>Metric</th><th>Value</th><th>How</th></tr>
          <tr><td>Write throughput</td><td>1,000/sec</td><td>Snowflake generates 4M IDs/ms globally — no coordination</td></tr>
          <tr><td>Read throughput</td><td>10,000/sec</td><td>Redis cluster handles 100K+ ops/sec; DB replicas as fallback</td></tr>
          <tr><td>Storage (URLs)</td><td>100M rows × ~500 B</td><td>~50 GB in PostgreSQL — trivial for modern hardware</td></tr>
          <tr><td>Storage (analytics)</td><td>Billions of events</td><td>ClickHouse compresses 10× → ~100 GB per year</td></tr>
        </tbody></table>
      </div>
    </>
  );
}
