// Read flow diagram + steps
export const READ_NODES = [
  { icon: "\uD83D\uDC64", name: "Client", sub: "GET /3nZK8xQ1mN2" },
  { icon: "\uD83D\uDEAA", name: "API Gateway", sub: ":8080" },
  { icon: "\uD83D\uDD17", name: "URL Service", sub: ":8081" },
  { db: true, title: "\u26A1 Redis Cache HIT", fields: [["GET", "short:3nZK8xQ1mN2"]], data: '\u2192 "https://www.example.com/..." (found in <1ms)' },
  { db: true, title: "\uD83D\uDDC4\uFE0F PostgreSQL \u00B7 fallback", fields: [["SELECT long_url", "FROM short_urls"], ["WHERE short_code", "= '3nZK8xQ1mN2'"], ["AND expires_at", "> NOW()"]], data: '\u2192 returns: "https://www.example.com/..."' },
  { icon: "\u26A1", name: "Redis Fill", sub: "SET key" },
  { icon: "\u21AA\uFE0F", name: "Redirect", sub: "301 or 302" },
];

export const READ_STEPS = [
  { title: "Someone clicks your short URL", call: "GET /3nZK8xQ1mN2\nHeaders: User-Agent, Referer, IP", what: "Someone clicks <strong>short.ly/3nZK8xQ1mN2</strong>. Their browser sends a GET request. This is the most frequent operation \u2014 thousands per second.", outcome: "Request sent to API Gateway." },
  { title: "API Gateway routes the request", call: "API Gateway :8080\n  \u2192 No auth needed (public redirect)\n  \u2192 Route to URL Service :8081", what: "The <strong>API Gateway</strong> sees this is a public redirect (no auth needed) and forwards it to the URL Service.", outcome: "Request forwarded to URL Service." },
  { title: "URL Service checks Redis (fast path)", call: 'URL Service :8081\n  \u2192 Extract "3nZK8xQ1mN2"\n  \u2192 GET short:3nZK8xQ1mN2\n  \u2192 Redis returns long URL', what: "The <strong>URL Service</strong> asks Redis for the long URL. Redis answers from RAM in under 1 ms. <strong>95% of requests end here</strong>.", outcome: "Cache HIT! Long URL found in <1 ms." },
  { title: "(Cache miss) Query PostgreSQL", call: "Redis returned nil\n  \u2192 If written < N sec ago: SELECT from PRIMARY\n  \u2192 Otherwise: SELECT from REPLICA\n\nSELECT long_url FROM short_urls\n  WHERE short_code = '3nZK8xQ1mN2'\n  AND expires_at > NOW()", what: "Fallback to <strong>PostgreSQL</strong>. <strong>Read-your-writes guard:</strong> recently created codes query the <strong>primary</strong>; otherwise a <strong>replica</strong>.", outcome: "Long URL found, even for brand-new URLs." },
  { title: "Fill Redis for next time", call: 'SET short:3nZK8xQ1mN2 "https://..." EX 31536000\n  \u2192 Kafka publish click event (async)', what: "We write the result back to Redis so the next request is a cache hit. Click event published to Kafka <em>asynchronously</em>.", outcome: "Redis filled. Analytics event queued." },
  { title: "Return HTTP redirect", call: "HTTP 301 (immutable) or 302 (may change)\nLocation: https://www.example.com/...", what: "The URL Service returns a redirect. <strong>301</strong> when immutable (browsers cache it). <strong>302</strong> when the destination may change.", outcome: "Browser receives redirect in < 50 ms." },
  { title: "User lands on the original page", call: "Browser follows redirect \u2192 loads original page\nKafka \u2192 Consumer \u2192 ClickHouse", what: "The browser loads the long URL. In the background, the click event is stored in ClickHouse for analytics.", outcome: "User on original page. 1 click recorded." },
];
