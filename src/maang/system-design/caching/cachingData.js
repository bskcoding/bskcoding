// ===== Caching — topic data =====

import {
  svgRedis,
  svgCacheAside,
  svgWriteThrough,
  svgWriteBack,
  svgLRULFU,
} from "./cachingDiagrams";

export const cachingTopics = [
  {
    id: "redis",
    icon: "fa-server",
    title: "Redis",
    sub: "In-memory data store",
    desc: "Redis is an in-memory key-value store used for caching, session storage, and real-time data.",
    definition:
      "Redis stores data in RAM for ultra-fast reads and writes. It supports strings, hashes, lists, sets, and more. It is commonly used as a cache layer in front of a database to reduce load and latency.",
    videoLink: "https://www.youtube.com/watch?v=jgpVdJB2QUk",
    diagram: svgRedis,
    relation: "Use Redis when you need sub-millisecond reads and can afford to lose data on restart (or enable persistence).",
    points: [
      "In-memory key-value store",
      "Sub-millisecond read/write latency",
      "Supports TTL (auto-expire keys)",
      "Used for caching, sessions, leaderboards",
      "Can persist to disk (RDB/AOF)",
    ],
  },
  {
    id: "cache-aside",
    icon: "fa-code-branch",
    title: "Cache-Aside",
    sub: "App manages the cache",
    desc: "App checks cache first. On miss, reads from DB and fills the cache.",
    definition:
      "In cache-aside, the application checks the cache first. If data is missing (cache miss), it reads from the database, stores a copy in the cache, and returns the result. This pattern is simple and works well for read-heavy workloads.",
    videoLink: "https://www.youtube.com/watch?v=jgpVdJB2QUk",
    diagram: svgCacheAside,
    relation: "Use cache-aside for read-heavy apps where occasional stale data is acceptable.",
    points: [
      "App checks cache first",
      "Cache miss: read from DB, fill cache",
      "Simple to implement",
      "Data can be stale until TTL expires",
      "Most common caching pattern",
    ],
  },
  {
    id: "write-through",
    icon: "fa-pen",
    title: "Write-Through",
    sub: "Write to cache and DB together",
    desc: "Every write goes to cache and DB at the same time, keeping them in sync.",
    definition:
      "Write-through updates both the cache and the database on every write. This keeps the cache fresh but adds write latency because two writes happen on every update.",
    videoLink: "https://www.youtube.com/watch?v=jgpVdJB2QUk",
    diagram: svgWriteThrough,
    relation: "Use write-through when you need strong consistency between cache and DB.",
    points: [
      "Write goes to cache and DB together",
      "Cache is always fresh",
      "Higher write latency",
      "No stale reads",
      "Good when reads must be accurate",
    ],
  },
  {
    id: "write-back",
    icon: "fa-undo",
    title: "Write-Back",
    sub: "Write to cache first, DB later",
    desc: "Writes go to cache only. DB is updated asynchronously in the background.",
    definition:
      "Write-back updates the cache immediately and defers the database write. This gives fast writes but risks data loss if the cache fails before the DB is updated.",
    videoLink: "https://www.youtube.com/watch?v=jgpVdJB2QUk",
    diagram: svgWriteBack,
    relation: "Use write-back when write speed matters more than durability.",
    points: [
      "Write goes to cache only",
      "DB updated asynchronously",
      "Very fast writes",
      "Risk of data loss on cache failure",
      "Good for high-write workloads",
    ],
  },
  {
    id: "cache-eviction",
    icon: "fa-trash-alt",
    title: "Cache Eviction (LRU/LFU)",
    sub: "Remove old data when cache is full",
    desc: "When the cache is full, old or unused data is removed to make room for new entries.",
    definition:
      "Cache eviction policies decide which data to remove when the cache is full. LRU (Least Recently Used) removes the oldest unused item. LFU (Least Frequently Used) removes the least accessed item. TTL-based expiry auto-removes stale keys.",
    videoLink: "https://www.youtube.com/watch?v=jgpVdJB2QUk",
    diagram: svgLRULFU,
    relation: "Use LRU for general workloads, LFU for items with stable access patterns.",
    points: [
      "LRU: removes least recently used item",
      "LFU: removes least frequently used item",
      "TTL: auto-expires keys after a time",
      "Prevents cache from growing forever",
      "Redis supports all of these",
    ],
  },  {
    id: "STAMPEDE",
    name: "Cache Stampede",
    icon: "🐎",
    tagline: "When everyone misses at once",
    accent: "#7c3aed",
    meaning:
      "A cache stampede (dogpile) happens when a hot key expires and hundreds of concurrent requests all miss simultaneously — all hitting the database for the same data at once, potentially crushing it. Fixes: request coalescing (only one request recomputes), locking, serving stale values while refreshing, and jittered TTLs.",
    analogy:
      "A shop's popular item sells out; a restock announcement makes 500 shoppers storm the store at once. Better: one staff member restocks while everyone else calmly waits in line (or is served from the last-known price list).",
    sql: `# The failure mode
key expires at T
  500 concurrent requests at T
    -> ALL miss cache
    -> ALL run the expensive DB query
    -> DB overload / cascading failure

# Fix 1: coalescing (single-flight)
value = cache.get(k)
if (miss) {
  lock(k)          // others wait
  value = db.query(k)
  cache.set(k, value, ttl)
  unlock(k)
}

# Fix 2: stale-while-revalidate
# Fix 3: jitter TTLs so keys don't
# expire simultaneously`,
  },
  {
    id: "HOTKEY",
    name: "Hot Key",
    icon: "🔥",
    tagline: "One key that melts one cache node",
    accent: "#b45309",
    meaning:
      "A hot key is a single cache key receiving disproportionate traffic (a celebrity's profile, a viral product). Sharded caches (Redis cluster) place a key on exactly one node — that node saturates while others idle. Fixes: replicate the key across nodes with random suffixes, add a local in-memory cache layer, and monitor per-key QPS.",
    analogy:
      "One ATM in a stadium serving 50,000 people: the queue melts it down while other ATMs stand idle. Solution: stock the same cash in several machines and send people to a random one.",
    sql: `# Problem
"product:123" -> hash -> node_7 only
all reads for the viral product hit
node_7 -> CPU/NIC maxed, timeouts

# Fix 1: key replication
key:1, key:2, ... key:N (random pick)
same value on N nodes, spread load

# Fix 2: L1 local cache (in-app)
process-level cache with tiny TTL
in front of Redis -> absorbs spikes

# Fix 3: detect + alert
monitor per-key QPS; auto-replicate
when one key exceeds threshold.`,
  },

];
