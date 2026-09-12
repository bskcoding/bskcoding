// ===== Caching SVG diagrams =====

export function svgRedis() {
  return `<svg viewBox="0 0 720 420" xmlns="http://www.w3.org/2000/svg">
    <text x="360" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Redis</text>
    <text x="360" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">In-memory key-value store for caching</text>
    <rect x="80" y="90" width="560" height="200" rx="14" fill="#fef2f2" stroke="#b91c1c" stroke-width="2"/>
    <text x="360" y="120" text-anchor="middle" font-size="14" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">Redis (In-Memory Store)</text>
    <rect x="100" y="140" width="160" height="60" rx="8" fill="#fff" stroke="#b91c1c" stroke-width="1.5"/>
    <text x="180" y="165" text-anchor="middle" font-size="11" font-weight="700" font-family="Segoe UI,sans-serif" fill="#333">Key: user:1001</text>
    <text x="180" y="185" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#666">Value: {name, email}</text>
    <rect x="280" y="140" width="160" height="60" rx="8" fill="#fff" stroke="#b91c1c" stroke-width="1.5"/>
    <text x="360" y="165" text-anchor="middle" font-size="11" font-weight="700" font-family="Segoe UI,sans-serif" fill="#333">Key: product:42</text>
    <text x="360" y="185" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#666">Value: {title, price}</text>
    <rect x="460" y="140" width="160" height="60" rx="8" fill="#fff" stroke="#b91c1c" stroke-width="1.5"/>
    <text x="540" y="165" text-anchor="middle" font-size="11" font-weight="700" font-family="Segoe UI,sans-serif" fill="#333">Key: session:abc</text>
    <text x="540" y="185" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#666">Value: userId, ttl</text>
    <rect x="100" y="220" width="520" height="50" rx="8" fill="#fef2f2" stroke="#b91c1c" stroke-width="1"/>
    <text x="360" y="245" text-anchor="middle" font-size="11" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">TTL - keys auto-expire after a set time</text>
    <text x="360" y="262" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#666">Sub-millisecond reads/writes</text>
    <rect x="80" y="310" width="560" height="80" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
    <text x="360" y="340" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#16a34a">Redis sits between App and Database</text>
    <text x="360" y="360" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">App -&gt; Redis (hit=fast) -&gt; DB (miss=slow, then fill cache)</text>
    <text x="360" y="378" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#888">Use for: sessions, leaderboards, rate limiting</text>
  </svg>`;
}

export function svgCacheAside() {
  return `<svg viewBox="0 0 720 420" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="caArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#64748b"/></marker></defs>
    <text x="360" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Cache-Aside</text>
    <text x="360" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">App checks cache first, DB on miss</text>
    <rect x="280" y="90" width="160" height="60" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
    <text x="360" y="120" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">App Server</text>
    <line x1="280" y1="120" x2="180" y2="120" stroke="#64748b" stroke-width="2" marker-end="url(#caArrow)"/>
    <rect x="60" y="90" width="120" height="60" rx="10" fill="#fef2f2" stroke="#b91c1c" stroke-width="2"/>
    <text x="120" y="115" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">Cache</text>
    <text x="120" y="135" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">Check first</text>
    <line x1="120" y1="150" x2="120" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#caArrow)"/>
    <text x="150" y="180" font-size="10" font-family="Segoe UI,sans-serif" fill="#b91c1c">MISS</text>
    <rect x="60" y="200" width="120" height="60" rx="10" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
    <text x="120" y="225" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#ca8a04">Database</text>
    <text x="120" y="245" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">Read data</text>
    <line x1="180" y1="230" x2="320" y2="230" stroke="#64748b" stroke-width="2" marker-end="url(#caArrow)"/>
    <text x="220" y="220" font-size="10" font-family="Segoe UI,sans-serif" fill="#16a34a">Fill cache + return</text>
    <rect x="460" y="90" width="200" height="170" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
    <text x="560" y="120" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#16a34a">Flow</text>
    <text x="560" y="145" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">1. Check cache</text>
    <text x="560" y="165" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">2. HIT: return</text>
    <text x="560" y="185" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">3. MISS: read DB</text>
    <text x="560" y="205" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">4. Fill cache</text>
    <text x="560" y="225" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">5. Return data</text>
    <text x="560" y="245" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">6. Next read = HIT</text>
    <rect x="60" y="290" width="600" height="60" rx="10" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
    <text x="360" y="315" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#ca8a04">Most common pattern - simple, for reads</text>
    <text x="360" y="335" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">Data can be stale until TTL expires</text>
  </svg>`;
}

export function svgWriteThrough() {
  return `<svg viewBox="0 0 720 420" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="wtArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#64748b"/></marker></defs>
    <text x="360" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Write-Through</text>
    <text x="360" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">Write to cache and DB together</text>
    <rect x="280" y="90" width="160" height="60" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
    <text x="360" y="120" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">App Server</text>
    <line x1="320" y1="150" x2="180" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#wtArrow)"/>
    <line x1="400" y1="150" x2="540" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#wtArrow)"/>
    <text x="240" y="180" font-size="10" font-family="Segoe UI,sans-serif" fill="#1d4ed8">Write</text>
    <text x="480" y="180" font-size="10" font-family="Segoe UI,sans-serif" fill="#ca8a04">Write</text>
    <rect x="60" y="200" width="240" height="70" rx="10" fill="#fef2f2" stroke="#b91c1c" stroke-width="2"/>
    <text x="180" y="230" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">Cache</text>
    <text x="180" y="250" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">Updated sync</text>
    <rect x="420" y="200" width="240" height="70" rx="10" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
    <text x="540" y="230" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#ca8a04">Database</text>
    <text x="540" y="250" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">Updated sync</text>
    <rect x="60" y="300" width="600" height="90" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
    <text x="360" y="325" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#16a34a">Both updated together - cache is always fresh</text>
    <text x="360" y="345" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">Pro: No stale reads. Con: Higher write latency</text>
    <text x="360" y="365" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">Use when reads must be accurate</text>
    <text x="360" y="380" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#888">Trade-off: slower writes for consistency</text>
  </svg>`;
}

export function svgWriteBack() {
  return `<svg viewBox="0 0 720 420" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="wbArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#64748b"/></marker></defs>
    <text x="360" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Write-Back</text>
    <text x="360" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">Write to cache first, DB later</text>
    <rect x="280" y="90" width="160" height="60" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
    <text x="360" y="120" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">App Server</text>
    <line x1="360" y1="150" x2="360" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#wbArrow)"/>
    <text x="370" y="180" font-size="10" font-family="Segoe UI,sans-serif" fill="#1d4ed8">Write</text>
    <rect x="240" y="200" width="240" height="70" rx="10" fill="#fef2f2" stroke="#b91c1c" stroke-width="2"/>
    <text x="360" y="230" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">Cache</text>
    <text x="360" y="250" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">Updated now</text>
    <line x1="480" y1="240" x2="560" y2="240" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#wbArrow)"/>
    <text x="490" y="230" font-size="10" font-family="Segoe UI,sans-serif" fill="#ca8a04">Async</text>
    <rect x="520" y="200" width="160" height="70" rx="10" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
    <text x="600" y="230" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#ca8a04">Database</text>
    <text x="600" y="250" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">Updated later</text>
    <rect x="60" y="300" width="600" height="90" rx="10" fill="#fef2f2" stroke="#b91c1c" stroke-width="1.5"/>
    <text x="360" y="325" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">Fast writes, but risk of data loss</text>
    <text x="360" y="345" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">Pro: Very fast writes. Con: Data loss if cache crashes</text>
    <text x="360" y="365" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">Use when write speed matters more</text>
    <text x="360" y="380" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#888">Trade-off: fast writes for risk of data loss</text>
  </svg>`;
}

export function svgLRULFU() {
  return `<svg viewBox="0 0 720 420" xmlns="http://www.w3.org/2000/svg">
    <text x="360" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Cache Eviction (LRU / LFU)</text>
    <text x="360" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">Remove old data when cache is full</text>
    <rect x="60" y="80" width="280" height="140" rx="12" fill="#fef2f2" stroke="#b91c1c" stroke-width="2"/>
    <text x="200" y="105" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">LRU - Least Recently Used</text>
    <rect x="80" y="120" width="240" height="35" rx="6" fill="#fff" stroke="#b91c1c" stroke-width="1"/>
    <text x="200" y="142" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#333">Removes item not used for longest time</text>
    <rect x="80" y="160" width="240" height="25" rx="6" fill="#fef2f2" stroke="#b91c1c" stroke-width="1"/>
    <text x="200" y="177" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#b91c1c">Example: oldest unread item</text>
    <rect x="80" y="190" width="240" height="25" rx="6" fill="#fef2f2" stroke="#b91c1c" stroke-width="1"/>
    <text x="200" y="207" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#b91c1c">Good for: general workloads</text>
    <rect x="380" y="80" width="280" height="140" rx="12" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
    <text x="520" y="105" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#ca8a04">LFU - Least Frequently Used</text>
    <rect x="400" y="120" width="240" height="35" rx="6" fill="#fff" stroke="#ca8a04" stroke-width="1"/>
    <text x="520" y="142" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#333">Removes item accessed fewest times</text>
    <rect x="400" y="160" width="240" height="25" rx="6" fill="#fefce8" stroke="#ca8a04" stroke-width="1"/>
    <text x="520" y="177" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#ca8a04">Example: least popular item</text>
    <rect x="400" y="190" width="240" height="25" rx="6" fill="#fefce8" stroke="#ca8a04" stroke-width="1"/>
    <text x="520" y="207" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#ca8a04">Good for: stable access patterns</text>
    <rect x="60" y="240" width="600" height="120" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
    <text x="360" y="265" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#16a34a">TTL - Auto-expire keys</text>
    <text x="360" y="285" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">Keys auto-expire after a set time</text>
    <text x="360" y="305" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">Redis supports: LRU, LFU, TTL, random</text>
    <text x="360" y="325" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">Interview: Redis + LRU + 5min TTL</text>
    <text x="360" y="345" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#888">Prevents cache from growing forever</text>
  </svg>`;
}
