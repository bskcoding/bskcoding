import "./UrlShortener.css";
import { SecHead, List } from "./UrlStatic1";

export function DiveBottom() {
  return (
    <>
      <div className="usd-card" style={{ marginTop: 32 }}>
        <h3>🛡️ How we achieve durability <span className="usd-nfr red">NFR4</span></h3>
        <p><strong>NFR addressed: Durability (NFR4).</strong></p>
        <p>We state durability in terms of the concrete mechanisms used and the resulting RPO/RTO:</p>
        <List items={[
          ["›", "<strong>Synchronous WAL replication</strong> to at least one replica in a different AZ. A <code>COMMIT</code> returns to the client only after the WAL has been flushed on both the primary and the sync replica."],
          ["›", "<strong>Automated base backups</strong> (e.g., pgBackRest / WAL-G) every 6 hours, retained 30 days."],
          ["›", "<strong>Continuous WAL archiving</strong> to object storage, allowing point-in-time recovery (PITR) to any second within the retention window."],
          ["›", "<strong>Cross-region disaster recovery</strong> replica with async replication. RPO target ≤ 1 minute across regions; RTO target ≤ 15 minutes."],
          ["›", "<strong>Tested restore drills</strong> quarterly. A backup that has never been restored is not a backup."],
        ]} />
        <p style={{ marginTop: 12 }}><strong>What this actually gives us:</strong> acknowledged writes survive single-node and single-AZ failures with zero loss. Cross-region failures may lose up to ~1 minute of writes (RPO ≤ 1 min) depending on replica lag.</p>
      </div>
      <div className="usd-card" style={{ marginTop: 32 }}>
        <h3>🔒 How we keep the service safe <span className="usd-nfr purple">NFR1 · Security</span></h3>
        <p><strong>NFR addressed: Security (part of NFR1).</strong></p>
      </div>
      <div className="usd-grid2">
        <div className="usd-card">
          <h3>🛡️ Transport &amp; auth</h3>
          <List items={[
            ["›", "<strong>HTTPS only:</strong> TLS 1.2+ everywhere. HSTS headers. No HTTP fallback."],
            ["›", "<strong>API key auth:</strong> Keys hashed at rest (bcrypt). Rotatable. Scoped permissions."],
            ["›", "<strong>Rate limiting:</strong> Token bucket per API key + per IP at the gateway. Default 100 req/min."],
          ]} />
        </div>
        <div className="usd-card">
          <h3>🛡️ Input &amp; redirect safety</h3>
          <List items={[
            ["›", "<strong>URL validation:</strong> Reject non-http(s) schemes, private IPs (SSRF), and URLs &gt; 2048 chars."],
            ["›", "<strong>No open redirect:</strong> Block <code>javascript:</code> and <code>data:</code> schemes."],
            ["›", "<strong>XSS/CSRF:</strong> CSP headers, SameSite cookies, no user HTML rendering."],
          ]} />
        </div>
      </div>
      <div className="usd-card">
        <h3>📊 Monitoring &amp; observability</h3>
        <List items={[
          ["›", "<strong>Metrics (Prometheus):</strong> <code>redirect_latency_p99</code>, <code>cache_hit_rate</code>, <code>urls_created_total</code>, <code>kafka_lag</code>, <code>replica_lag_seconds</code>."],
          ["›", "<strong>Logging (ELK):</strong> Structured JSON logs with <code>X-Request-ID</code> for end-to-end tracing."],
          ["›", "<strong>Tracing (Jaeger):</strong> Distributed tracing across API → Redis → DB → Kafka."],
          ["›", "<strong>Alerting (PagerDuty):</strong> Fire if p99 &gt; 100 ms, error rate &gt; 0.1%, cache hit &lt; 90%, or replica lag &gt; 5 s."],
        ]} />
      </div>
      <div className="usd-card" style={{ marginTop: 32 }}>
        <h3>⚖️ Design decisions we made and why</h3>
        <p>Every system design is a series of trade-offs. Here are ours.</p>
      </div>
      <div className="usd-card">
        <h3>1. SQL vs NoSQL</h3>
        <p><strong>Chose PostgreSQL (SQL).</strong> URL mappings need strong consistency — two users must never get the same short code. ACID transactions enforce this. A NoSQL store like Cassandra would scale writes better but risks duplicates.</p>
      </div>
      <div className="usd-card">
        <h3>2. 301 vs 302 redirects</h3>
        <p><strong>Requirement-dependent choice.</strong> Use <strong>301 (permanent)</strong> when the short-code → destination mapping is effectively immutable — browsers cache it, which reduces server load. Use <strong>302 (temporary)</strong> when the destination may change, when you need server-side control over every click (e.g., for accurate analytics), or when you want the freedom to retarget. Many production shorteners default to 302 for exactly this reason. We expose the choice per-URL based on whether the mapping is declared immutable.</p>
      </div>
      <div className="usd-card">
        <h3>3. CAP under partition</h3>
        <p>CAP describes a trade-off <strong>during a network partition</strong>, not a per-operation choice. During a partition: the <strong>read path favors availability</strong> — stale-but-usable redirects beat 503s, because a redirect that's a few seconds out of date is harmless. The <strong>write path favors consistency</strong> — a short code must never be assigned twice, even under partition, so we prefer to reject a write rather than risk a duplicate.</p>
      </div>
      <div className="usd-card">
        <h3>4. Replica stale-read on cache miss</h3>
        <p>On a cache miss, a redirect could hit a read replica that hasn't yet received a recently written URL, incorrectly returning 404. We fix this with a <strong>read-your-writes guard</strong>: if the short code was created within the last N seconds (tracked via a small in-process or Redis-backed "recent writes" set, or a per-request flag), the read path queries the <strong>primary</strong> instead of a replica. After N seconds (well above typical replica lag), reads fall back to replicas. This keeps the hot path fast while eliminating the 404-after-create bug.</p>
      </div>
      <div className="usd-card">
        <h3>5. Snowflake vs Key Generation Service (KGS)</h3>
        <p><strong>Chose Snowflake + 11-char Base62.</strong> Simpler — no extra service to run, and the full 64-bit range fits in 11 characters. Downside: relies on clock synchronization across machines. KGS (pre-generating 7-character keys and storing them in a DB) gives shorter codes but adds a service dependency. Both are valid; we picked the one that matches our 11-char code length.</p>
      </div>
      <div className="usd-card">
        <h3>6. Soft delete vs hard delete</h3>
        <p><strong>Chose soft delete first.</strong> Expired URLs are marked <code>is_deleted = true</code> for 30 days, allowing recovery and analytics. After 30 days, they're archived to S3 and hard-deleted from PostgreSQL. Balances safety with storage cost.</p>
      </div>
      <div className="usd-card">
        <h3>7. Durability claim</h3>
        <p><strong>Honest framing.</strong> Instead of claiming "eleven nines" (which requires very specific multi-region sync replication topologies), we state the actual mechanisms — synchronous WAL replication to a second AZ, automated backups, WAL archiving, cross-region DR — and express durability in terms of RPO (≤ 1 min cross-region) and RTO (≤ 15 min).</p>
      </div>
    </>
  );
}

export function DeepDive() {
  return (
    <div className="usd-section">
      <SecHead num="7" title="Design Deep Dive" sub="How each non-functional requirement is actually achieved." />
      <DiveTopInline />
    </div>
  );
}

function DiveTopInline() {
  return null;
}
