// Dashboard + Cleanup flow diagrams and steps
export const DASH_NODES = [
  { icon: "\uD83D\uDD17", name: "URL Service", sub: "publish event" },
  { icon: "\uD83D\uDCE8", name: "Kafka", sub: "click_events" },
  { icon: "\u2699\uFE0F", name: "Consumer", sub: "enrich + GeoIP" },
  { db: true, title: "\uD83D\uDCCA ClickHouse \u00B7 clicks", fields: [["event_id", "UInt64"], ["short_code", "String"], ["clicked_at", "DateTime"], ["country", "String"], ["referrer", "String"]], data: "INSERT INTO clicks VALUES ('3nZK8xQ1mN2', NOW(), 'India', 'twitter')" },
  { icon: "\uD83D\uDD27", name: "Analytics API", sub: ":8083" },
  { icon: "\uD83D\uDCC8", name: "Dashboard UI", sub: "charts" },
  { icon: "\uD83D\uDC64", name: "User Views", sub: "analytics" },
];

export const DASH_STEPS = [
  { title: "URL Service publishes a click event", call: 'producer.send("click_events", {\n  short_code: "3nZK8xQ1mN2",\n  ip: "203.0.113.42"\n})', what: "Every redirect fires a click event to Kafka. Fire-and-forget \u2014 it does NOT slow down the redirect.", outcome: "Event queued in Kafka." },
  { title: "Kafka buffers the event", call: "Topic: click_events\n  \u2192 12 partitions\n  \u2192 Replication factor: 3", what: "Kafka stores the event durably (3 replicas) and lets multiple consumers read it independently.", outcome: "Event stored in Kafka." },
  { title: "Consumer enriches the event", call: "GeoIP: 203.0.113.42 \u2192 India\nParse UA: iPhone / Safari\nBatch 1000 events or 1 second", what: "The <strong>Analytics Consumer</strong> enriches each event: IP to country, UA to device. Batched for efficiency.", outcome: "Event enriched: India / iPhone / Twitter." },
  { title: "Store in ClickHouse", call: "INSERT INTO clicks\n  (event_id, short_code, clicked_at, country, referrer)\nVALUES\n  (1234567890, '3nZK8xQ1mN2', NOW(), 'India', 'Twitter')", what: "<strong>ClickHouse</strong> is columnar. It stores billions of events and answers aggregations in milliseconds.", outcome: "Click stored for dashboard queries." },
  { title: "Dashboard API serves analytics", call: "GET /api/v1/analytics/3nZK8xQ1mN2\n  \u2192 SELECT country, COUNT(*)\n    FROM clicks GROUP BY country", what: "The <strong>Analytics API</strong> queries ClickHouse and returns JSON: totals, countries, referrers, time-series.", outcome: "API returns {total: 1247, ...}." },
  { title: "Dashboard UI renders charts", call: "Dashboard UI receives JSON\n  \u2192 line chart, pie chart, table", what: "The <strong>Dashboard UI</strong> renders visualizations. Auto-refreshes every 30 seconds.", outcome: "User sees charts with URL analytics." },
  { title: "You see your analytics", call: "User opens dashboard\n  \u2192 Total clicks: 1,247\n  \u2192 Top country: India (487)", what: "You log into your dashboard and see clicks, countries, referrers, peak times.", outcome: "Complete analytics for your short URL." },
];

export const CLEANUP_NODES = [
  { icon: "\u23F0", name: "Cron Job", sub: "Daily @ 2AM" },
  { icon: "\uD83E\uDDF9", name: "Cleanup Svc", sub: ":8084" },
  { db: true, danger: true, title: "\uD83D\uDDC4\uFE0F PostgreSQL \u00B7 soft delete", fields: [["short_code", "VARCHAR PK"], ["expires_at", "TIMESTAMP"], ["is_deleted", "BOOLEAN"]], data: "UPDATE short_urls SET is_deleted=true WHERE expires_at < NOW()" },
  { db: true, danger: true, title: "\u26A1 Redis \u00B7 purge", fields: [["DEL", "short:3nZK8xQ1mN2"], ["DEL", "short:def456"]], data: "DEL short:3nZK8xQ1mN2\nDEL short:def456" },
  { icon: "\uD83D\uDCE6", name: "Archive S3", sub: "Parquet" },
  { db: true, danger: true, title: "\uD83D\uDDC4\uFE0F PostgreSQL \u00B7 hard delete", fields: [["DELETE FROM", "short_urls"], ["WHERE", "is_deleted = true"], ["AND deleted_at", "< NOW() - 30d"]], data: "DELETE FROM short_urls WHERE is_deleted=true AND deleted_at < NOW() - 30d" },
  { icon: "\uD83D\uDCCA", name: "Metrics", sub: "urls_expired" },
];

export const CLEANUP_STEPS = [
  { title: "Cron job triggers at 2 AM", call: "Cron schedule: 0 2 * * *\n  \u2192 Acquire distributed lock:\n    SET lock:cleanup NX EX 3600", what: "Every day at 2 AM, a <strong>cron job</strong> wakes the Cleanup Service. It grabs a Redis lock so only one worker runs.", outcome: "Cron job started. Lock acquired." },
  { title: "Find expired URLs", call: "SELECT short_code FROM short_urls\nWHERE expires_at < NOW()\n  AND is_deleted = false\nLIMIT 10000", what: "Query <strong>PostgreSQL</strong> for URLs past <code>expires_at</code>. Batched at 10,000 rows to avoid long locks.", outcome: "Found 10,000 expired URLs (batch 1)." },
  { title: "Soft delete in PostgreSQL", call: "UPDATE short_urls\nSET is_deleted = true, deleted_at = NOW()\nWHERE short_code IN (...)", what: "We <strong>soft delete</strong>: set <code>is_deleted = true</code>. Rows stay 30 days for recovery and analytics.", outcome: "Expired URLs no longer served." },
  { title: "Purge from Redis cache", call: "DEL short:3nZK8xQ1mN2\nDEL short:def456", what: "Remove expired keys from <strong>Redis</strong>. Future clicks return 404.", outcome: "Redis purged." },
  { title: "Archive to S3 (after 30 days)", call: "SELECT * FROM short_urls\nWHERE is_deleted = true\n  AND deleted_at < NOW() - 30d\n  \u2192 Parquet \u2192 S3/Glacier", what: "Archive job moves soft-deleted rows to <strong>S3/Glacier</strong> as Parquet. DB storage is freed.", outcome: "Old records archived." },
  { title: "Hard delete from PostgreSQL", call: "DELETE FROM short_urls\nWHERE is_deleted = true\n  AND deleted_at < NOW() - 30d", what: "Once archived, we <strong>hard delete</strong>. The row lives only in S3 archives now.", outcome: "Space reclaimed." },
  { title: "Emit metrics and alert", call: "urls_expired_total = 10432\ncleanup_duration_seconds = 45", what: "Emit <strong>metrics</strong>. Grafana visualizes; PagerDuty alerts on failure.", outcome: "Cleanup complete. Next run tomorrow." },
];
