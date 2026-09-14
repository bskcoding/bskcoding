export const SQL = `-- 3 tables — config + audit (hot-path state is in-memory or Redis)

CREATE TABLE rate_limit_configs (
  config_id    VARCHAR(20) PRIMARY KEY,
  client_id    VARCHAR(100) NOT NULL,
  algorithm    ENUM('TOKEN_BUCKET','LEAKY_BUCKET','SLIDING_WINDOW') NOT NULL,
  rate         INT NOT NULL,
  burst        INT NOT NULL,
  window_ms    INT NOT NULL DEFAULT 1000,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uk_client_algo (client_id, algorithm)
);
CREATE INDEX idx_config_client ON rate_limit_configs(client_id);

CREATE TABLE rate_limit_events (
  event_id     BIGINT AUTO_INCREMENT PRIMARY KEY,
  client_id    VARCHAR(100) NOT NULL,
  endpoint     VARCHAR(255) NOT NULL,
  allowed      BOOLEAN NOT NULL,
  algorithm    ENUM('TOKEN_BUCKET','LEAKY_BUCKET','SLIDING_WINDOW') NOT NULL,
  remaining    INT NOT NULL,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_event_client_time ON rate_limit_events(client_id, created_at);

CREATE TABLE rate_limit_violations (
  violation_id BIGINT AUTO_INCREMENT PRIMARY KEY,
  client_id    VARCHAR(100) NOT NULL,
  endpoint     VARCHAR(255) NOT NULL,
  count        INT NOT NULL DEFAULT 1,
  first_seen   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_seen    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uk_client_endpoint (client_id, endpoint)
);
CREATE INDEX idx_violation_client ON rate_limit_violations(client_id);`;

export const UML = `----------------------------------------
  RateLimiter (interface)
  + tryAcquire(clientId): boolean
  + getRemaining(clientId): int
----------------------------------------
  |-- TokenBucketLimiter  |-- LeakyBucketLimiter
  |   - buckets: Map      |   - queues: Map
  |   + tryAcquire        |   + tryAcquire
  +-- SlidingWindowLimiter
      - windows: Map
      + tryAcquire
----------------------------------------
  Each limiter owns per-client state:
  ClientBucket (tokens, lastRefill)
  ClientQueue (timestamps)
  ClientWindow (timestamps)

All limiters --use--> RateLimiterConfig (rate, burst, window)
RateLimiterFactory --creates--> RateLimiter
RateLimiterRegistry --holds--> Map<String, RateLimiter>`;