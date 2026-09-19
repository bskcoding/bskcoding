// URL Shortener HLD — flow diagrams + step walkthroughs (from user's HTML doc)
export const WRITE_NODES = [
  { icon: "\uD83D\uDC64", name: "Client", sub: "POST /shorten" },
  { icon: "\uD83D\uDEAA", name: "API Gateway", sub: ":8080" },
  { icon: "\uD83D\uDD17", name: "URL Service", sub: ":8081" },
  { icon: "\uD83D\uDD11", name: "Key Gen", sub: ":8082" },
  {
    db: true,
    title: "\uD83D\uDDC4\uFE0F PostgreSQL \u00B7 short_urls",
    fields: [["short_code", "VARCHAR(11) PK"], ["long_url", "TEXT"], ["user_id", "UUID FK"], ["created_at", "TIMESTAMP"], ["expires_at", "TIMESTAMP"], ["is_deleted", "BOOLEAN"]],
    data: "INSERT INTO short_urls VALUES ('3nZK8xQ1mN2', 'https://...', NOW(), NOW()+'1y')",
  },
  {
    db: true,
    title: "\u26A1 Redis Cache",
    fields: [["KEY", "short:3nZK8xQ1mN2"], ["VALUE", "long_url"], ["TTL", "1 year"]],
    data: 'SET short:3nZK8xQ1mN2 "https://..." EX 31536000',
  },
  { icon: "\u2705", name: "Response", sub: "short.ly/3nZK8xQ1mN2" },
];

export const WRITE_STEPS = [
  { title: "You paste a long URL", call: 'POST /api/v1/shorten\nBody: { "long_url": "https://www.example.com/very/long/path/article?id=12345" }', what: "You open the app, paste your long URL, and click <strong>Shorten</strong>. The app sends this URL to our server with your API key for authentication.", outcome: "Request sent to API Gateway. Nothing stored yet." },
  { title: "API Gateway checks you in", call: "API Gateway :8080\n  \u2192 Verify API key\n  \u2192 Check rate limit\n  \u2192 Route to URL Service :8081", what: "The <strong>API Gateway</strong> is the front door. It validates your API key, ensures you haven't exceeded your rate limit, and forwards the request to the URL Service.", outcome: "Request forwarded to URL Service." },
  { title: "URL Service validates and checks cache", call: "URL Service :8081\n  \u2192 Validate URL format (https \u2713, not private IP \u2713)\n  \u2192 GET long_url:https://... \u2192 (nil, not found)", what: "The <strong>URL Service</strong> first checks if this URL is valid. Then it asks Redis: have we shortened this exact URL before? If yes, return the existing short URL. If no, continue.", outcome: "URL is valid and new. We need a unique short code." },
  { title: "Key Gen creates a unique code", call: 'Key Gen Service :8082\n  \u2192 Snowflake ID: 7512345678901234567\n  \u2192 Base62 encode (11 chars): "3nZK8xQ1mN2"\n  \u2192 Return "3nZK8xQ1mN2"', what: "The <strong>Key Gen Service</strong> creates a unique 11-character code using Snowflake (64-bit ID) + Base62. 11 chars covers the full 64-bit range (62^11 \u2248 5.2 \u00D7 10^19 > 2^64). This guarantees no two URLs ever receive the same code.", outcome: "Unique code 3nZK8xQ1mN2 is ready." },
  { title: "Save to PostgreSQL (source of truth)", call: "INSERT INTO short_urls\n  (short_code, long_url, user_id, created_at, expires_at)\nVALUES\n  ('3nZK8xQ1mN2', 'https://...', 'user_abc123',\n   NOW(), NOW() + INTERVAL '1 year')", what: "The mapping is persisted to <strong>PostgreSQL</strong> \u2014 the source of truth. ACID guarantees no duplicate short codes. The <code>expires_at</code> timestamp is set to 1 year from now.", outcome: "Row stored. Replicated to read replicas. Read-your-writes marker set." },
  { title: "Copy to Redis for fast reads", call: 'SET short:3nZK8xQ1mN2 "https://www.example.com/..." EX 31536000', what: "The mapping is copied to <strong>Redis</strong> with a TTL of 1 year. Next time someone clicks this URL, Redis answers in under 1 ms \u2014 no database needed.", outcome: "Redis now holds the mapping with a 1-year TTL." },
  { title: "You get your short URL", call: 'HTTP 201 Created\n{ "short_url": "https://short.ly/3nZK8xQ1mN2", "short_code": "3nZK8xQ1mN2" }', what: "Everything is stored. The URL Service returns the short URL to your app. You see <strong>short.ly/3nZK8xQ1mN2</strong> on screen.", outcome: "\u2705 Short URL created in ~50-100 ms." },
];
