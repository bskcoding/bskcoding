// ===== CAP Theorem — SVG Diagrams =====
// Each function returns an SVG string matching the page's dark theme.
// CAP = Consistency, Availability, Partition Tolerance (Brewer's theorem).
// In a distributed system, you can only guarantee 2 of the 3 at the same time.

export function svgCAPOverview() {
  return `<svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .cap-title  { font-weight: 700; font-size: 17px; font-family: Segoe UI, sans-serif; fill: #1a1a2e; }
        .cap-text   { font-size: 12px; font-family: Segoe UI, sans-serif; fill: #333; }
        .cap-sub    { font-size: 11px; font-family: Segoe UI, sans-serif; fill: #666; }
        .cap-lbl    { font-size: 12px; font-weight: 700; font-family: Segoe UI, sans-serif; }
        .cap-box    { fill: #f8f9fc; stroke: #302b63; stroke-width: 2; rx: 14; }
      </style>
      <linearGradient id="gc" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ff6b6b"/><stop offset="100%" stop-color="#c0392b"/>
      </linearGradient>
      <linearGradient id="ga" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#51cf66"/><stop offset="100%" stop-color="#2b8a3e"/>
      </linearGradient>
      <linearGradient id="gp" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#5c7cfa"/><stop offset="100%" stop-color="#2c3e7a"/>
      </linearGradient>
    </defs>
    <text x="380" y="32" text-anchor="middle" class="cap-title">CAP Theorem — Pick Any 2 of 3</text>
    <text x="380" y="52" text-anchor="middle" class="cap-sub">In a distributed system, you can only guarantee 2 of these 3 properties at the same time</text>

    <!-- C: Consistency -->
    <rect x="20" y="72" width="230" height="200" class="cap-box"/>
    <rect x="20" y="72" width="230" height="46" fill="url(#gc)" rx="14"/>
    <rect x="20" y="108" width="230" height="10" fill="url(#gc)"/>
    <text x="135" y="99" text-anchor="middle" class="cap-lbl" fill="#fff">C — Consistency</text>
    <text x="45" y="135" class="cap-text">Every read receives the</text>
    <text x="45" y="153" class="cap-text"><b>most recent write</b> or an</text>
    <text x="45" y="171" class="cap-text">error.</text>
    <text x="45" y="190" class="cap-text">All nodes see the same</text>
    <text x="45" y="208" class="cap-text">data at the <b>same time</b>.</text>
    <text x="135" y="244" text-anchor="middle" class="cap-lbl" fill="#c0392b">RDBMS · MongoDB · HBase</text>

    <!-- A: Availability -->
    <rect x="265" y="72" width="230" height="200" class="cap-box"/>
    <rect x="265" y="72" width="230" height="46" fill="url(#ga)" rx="14"/>
    <rect x="265" y="108" width="230" height="10" fill="url(#ga)"/>
    <text x="380" y="99" text-anchor="middle" class="cap-lbl" fill="#fff">A — Availability</text>
    <text x="290" y="135" class="cap-text">Every request receives a</text>
    <text x="290" y="153" class="cap-text"><b>response</b> (success or</text>
    <text x="290" y="171" class="cap-text">failure) — no timeouts.</text>
    <text x="290" y="190" class="cap-text">The system is <b>always</b></text>
    <text x="290" y="208" class="cap-text">on, always reachable.</text>
    <text x="380" y="244" text-anchor="middle" class="cap-lbl" fill="#2b8a3e">Cassandra · DynamoDB · CouchDB</text>

    <!-- P: Partition Tolerance -->
    <rect x="510" y="72" width="230" height="200" class="cap-box"/>
    <rect x="510" y="72" width="230" height="46" fill="url(#gp)" rx="14"/>
    <rect x="510" y="108" width="230" height="10" fill="url(#gp)"/>
    <text x="625" y="99" text-anchor="middle" class="cap-lbl" fill="#fff">P — Partition</text>
    <text x="625" y="117" text-anchor="middle" class="cap-lbl" fill="#fff">Tolerance</text>
    <text x="535" y="135" class="cap-text">The system keeps working</text>
    <text x="535" y="153" class="cap-text">even when network links</text>
    <text x="535" y="171" class="cap-text">between nodes <b>break</b>.</text>
    <text x="535" y="190" class="cap-text">Survives network splits —</text>
    <text x="535" y="208" class="cap-text">no single point of failure.</text>
    <text x="625" y="244" text-anchor="middle" class="cap-lbl" fill="#2c3e7a">Any distributed system</text>

    <!-- Bottom: the tradeoff -->
    <rect x="40" y="290" width="680" height="58" rx="12" fill="#fff8e1" stroke="#f57c00" stroke-width="2" stroke-dasharray="6,4"/>
    <text x="380" y="314" text-anchor="middle" class="cap-lbl" fill="#e65100">🎯  The Real Trade-off — CP  vs  AP</text>
    <text x="380" y="334" text-anchor="middle" class="cap-sub">Since network partitions WILL happen, P is mandatory. You must choose: Consistency (CP) or Availability (AP)?</text>

    <!-- CA note -->
    <rect x="40" y="360" width="680" height="44" rx="8" fill="#eef2f7" stroke="#94a3b8" stroke-width="1"/>
    <text x="380" y="384" text-anchor="middle" class="cap-sub">CA (without P) = only possible in a single-node / single-datacenter system with no network partitions. Once you distribute, you cannot drop P.</text>
  </svg>`;
}

export function svgConsistency() {
  return `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .c-title { font-weight: 700; font-size: 14px; font-family: Segoe UI, sans-serif; fill: #1a1a2e; }
        .c-text  { font-size: 11px; font-family: Segoe UI, sans-serif; fill: #333; }
        .c-sub   { font-size: 10px; font-family: Segoe UI, sans-serif; fill: #666; }
        .c-lbl   { font-size: 11px; font-weight: 700; font-family: Segoe UI, sans-serif; fill: #fff; }
        .c-box   { fill: #f8f9fc; stroke: #302b63; stroke-width: 2; rx: 10; }
        .c-grn   { fill: #2e7d32; font-weight: 700; font-size: 10px; font-family: Segoe UI, sans-serif; }
        .c-red   { fill: #d32f2f; font-weight: 700; font-size: 10px; font-family: Segoe UI, sans-serif; }
      </style>
    </defs>
    <text x="360" y="26" text-anchor="middle" class="c-title">C — Consistency: Every Read Gets the Latest Write</text>
    <text x="360" y="44" text-anchor="middle" class="c-sub">All nodes see the same data at the same time</text>
    <rect x="30" y="62" width="330" height="110" rx="10" fill="#f0faf0" stroke="#2b8a3e" stroke-width="1.5"/>
    <text x="195" y="85" text-anchor="middle" class="c-title" fill="#2b8a3e">What Consistency Guarantees</text>
    <text x="50" y="106" class="c-text">A read always returns the <b>most recent write</b></text>
    <text x="50" y="122" class="c-text">After a write completes, all subsequent reads</text>
    <text x="65" y="138" class="c-text">see that new value — no stale data</text>
    <text x="50" y="154" class="c-text">All nodes have <b>same data at same time</b></text>
    <rect x="390" y="62" width="300" height="110" rx="10" fill="#fff5f5" stroke="#d32f2f" stroke-width="1.5"/>
    <text x="540" y="85" text-anchor="middle" class="c-title" fill="#d32f2f">Without Consistency (Stale Reads)</text>
    <text x="410" y="106" class="c-text">Client writes balance=$1500 to Node A</text>
    <text x="410" y="122" class="c-text">Client reads from Node B → gets $1000!</text>
    <text x="410" y="138" class="c-text">Data is <b>inconsistent</b> across nodes</text>
    <text x="410" y="154" class="c-text" fill="#d32f2f">Makes wrong decisions based on old data</text>
    <rect x="30" y="190" width="660" height="90" rx="10" fill="#fff8e1" stroke="#f57c00" stroke-width="1.5"/>
    <text x="360" y="212" text-anchor="middle" class="c-title" fill="#e65100">Bank Balance Analogy</text>
    <text x="50" y="235" class="c-text">Deposit $1000 at ATM in New York → balance = $1000</text>
    <text x="50" y="252" class="c-text">Friend checks balance at ATM in London 1 sec later</text>
    <text x="50" y="269" class="c-text" fill="#2e7d32">With consistency: friend sees $1000 (latest). ✓</text>
    <text x="50" y="286" class="c-text" fill="#d32f2f">Without: friend sees $0 (stale). ✗</text>
    <rect x="30" y="298" width="660" height="44" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1" stroke-dasharray="4,3"/>
    <text x="360" y="320" text-anchor="middle" class="c-grn">Achieved via: synchronous replication, distributed transactions, quorum reads</text>
  </svg>`;
}
export function svgAvailability() {
  return `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .a-title { font-weight: 700; font-size: 14px; font-family: Segoe UI, sans-serif; fill: #1a1a2e; }
        .a-text  { font-size: 11px; font-family: Segoe UI, sans-serif; fill: #333; }
        .a-sub   { font-size: 10px; font-family: Segoe UI, sans-serif; fill: #666; }
        .a-lbl   { font-size: 11px; font-weight: 700; font-family: Segoe UI, sans-serif; fill: #fff; }
        .a-box   { fill: #f8f9fc; stroke: #302b63; stroke-width: 2; rx: 10; }
        .a-grn   { fill: #2e7d32; font-weight: 700; font-size: 10px; font-family: Segoe UI, sans-serif; }
        .a-org   { fill: #f59f00; font-weight: 700; font-size: 10px; font-family: Segoe UI, sans-serif; }
      </style>
    </defs>
    <text x="360" y="26" text-anchor="middle" class="a-title">A — Availability: Every Request Gets a Response</text>
    <text x="360" y="44" text-anchor="middle" class="a-sub">The system is always on — every request receives a (non-error) response</text>
    <rect x="30" y="62" width="330" height="120" rx="10" fill="#f0faf0" stroke="#2b8a3e" stroke-width="1.5"/>
    <text x="195" y="85" text-anchor="middle" class="a-title" fill="#2b8a3e">What Availability Guarantees</text>
    <text x="50" y="106" class="a-text">Every request receives a <b>response</b> (success or error)</text>
    <text x="50" y="122" class="a-text">The system <b>never sleeps</b> — always on, always reachable</text>
    <text x="50" y="138" class="a-text">No request ever <b>times out</b> waiting for a response</text>
    <text x="50" y="154" class="a-text" fill="#f59f00">Response may contain <b>slightly stale</b> data (that's OK)</text>
    <rect x="390" y="62" width="300" height="120" rx="10" fill="#fff8e1" stroke="#f57c00" stroke-width="1.5"/>
    <text x="540" y="85" text-anchor="middle" class="a-title" fill="#e65100">The Availability Trade-off</text>
    <text x="410" y="106" class="a-text">During a network partition:</text>
    <text x="410" y="122" class="a-text">→ Nodes may have <b>divergent data</b> temporarily</text>
    <text x="410" y="138" class="a-text">→ A read might return data from BEFORE the last write</text>
    <text x="410" y="154" class="a-text">→ But the system <b>keeps running</b> — no errors, no downtime</text>
    <rect x="30" y="200" width="660" height="110" rx="10" fill="#e8f5e9" stroke="#2b8a3e" stroke-width="1.5"/>
    <text x="360" y="222" text-anchor="middle" class="a-title" fill="#2b8a3e">Social Media Like Counter Analogy</text>
    <text x="50" y="244" class="a-text">You click Like: counter 999 to 1000.</text>
    <text x="50" y="260" class="a-text">Friend refreshes elsewhere: sees 999 (1 sec stale).</text>
    <text x="50" y="276" class="a-text">Available system: always responds, even if stale.</text>
    <text x="50" y="292" class="a-text">Unavailable system: refuses to respond during partition.</text>
  </svg>`;
}

export function svgPartitionTolerance() {
  return `<svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg">
    <defs><style>
      .p-title { font-weight: 700; font-size: 14px; font-family: Segoe UI, sans-serif; fill: #1a1a2e; }
      .p-text  { font-size: 11px; font-family: Segoe UI, sans-serif; fill: #333; }
      .p-sub   { font-size: 10px; font-family: Segoe UI, sans-serif; fill: #666; }
      .p-wht   { font-size: 11px; font-weight: 700; font-family: Segoe UI, sans-serif; fill: #fff; }
      .p-grn   { fill: #2e7d32; font-weight: 700; font-size: 11px; font-family: Segoe UI, sans-serif; }
    </style></defs>
    <text x="360" y="26" text-anchor="middle" class="p-title">P - Partition Tolerance: Surviving Network Failures</text>
    <text x="360" y="44" text-anchor="middle" class="p-sub">System keeps working even when nodes cannot talk to each other</text>
    <rect x="30" y="62" width="660" height="120" rx="10" fill="#eef2ff" stroke="#2c3e7a" stroke-width="1.5"/>
    <text x="360" y="85" text-anchor="middle" class="p-title" fill="#2c3e7a">What is a Network Partition?</text>
    <text x="50" y="108" class="p-text">A partition = break between nodes (cable cut, switch failure, DC outage).</text>
    <text x="50" y="124" class="p-text">Node A and Node B serve clients, but A cannot sync with B.</text>
    <text x="50" y="140" class="p-text">Partition tolerance = whole system KEEPS FUNCTIONING despite split.</text>
    <text x="50" y="156" class="p-text">Partitions WILL happen - so P is mandatory in real systems.</text>
    <rect x="30" y="196" width="210" height="110" rx="10" fill="#ffffff" stroke="#2c3e7a" stroke-width="1.5"/>
    <text x="135" y="218" text-anchor="middle" class="p-title" fill="#2c3e7a">Node A (East US)</text>
    <circle cx="135" cy="250" r="22" fill="#5c7cfa"/>
    <text x="135" y="255" text-anchor="middle" class="p-wht">A</text>
    <text x="135" y="282" text-anchor="middle" class="p-text">balance = $1500</text>
    <text x="135" y="296" text-anchor="middle" class="p-sub">serving writes</text>
    <rect x="255" y="196" width="210" height="110" rx="10" fill="#ffe8e8" stroke="#d32f2f" stroke-width="1.5" stroke-dasharray="6,4"/>
    <text x="360" y="218" text-anchor="middle" class="p-title" fill="#d32f2f">Partition (broken link)</text>
    <text x="360" y="244" text-anchor="middle" class="p-text">A  X  B (no sync)</text>
    <text x="360" y="262" text-anchor="middle" class="p-sub">cable cut / outage</text>
    <text x="360" y="280" text-anchor="middle" class="p-text">must still operate!</text>
    <rect x="480" y="196" width="210" height="110" rx="10" fill="#ffffff" stroke="#2c3e7a" stroke-width="1.5"/>
    <text x="585" y="218" text-anchor="middle" class="p-title" fill="#2c3e7a">Node B (West EU)</text>
    <circle cx="585" cy="250" r="22" fill="#5c7cfa"/>
    <text x="585" y="255" text-anchor="middle" class="p-wht">B</text>
    <text x="585" y="282" text-anchor="middle" class="p-text">balance = $1000 (stale)</text>
    <text x="585" y="296" text-anchor="middle" class="p-sub">serving reads</text>
    <rect x="30" y="318" width="660" height="44" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1" stroke-dasharray="4,3"/>
    <text x="360" y="341" text-anchor="middle" class="p-grn">Rule: 2+ nodes over a network means you MUST be partition-tolerant</text>
  </svg>`;
}

export function svgCPvsAP() {
  return `<svg viewBox="0 0 720 400" xmlns="http://www.w3.org/2000/svg">
    <defs><style>
      .v-title { font-weight: 700; font-size: 14px; font-family: Segoe UI, sans-serif; fill: #1a1a2e; }
      .v-text  { font-size: 11px; font-family: Segoe UI, sans-serif; fill: #333; }
      .v-sub   { font-size: 10px; font-family: Segoe UI, sans-serif; fill: #666; }
      .v-wht   { font-size: 11px; font-weight: 700; font-family: Segoe UI, sans-serif; fill: #fff; }
    </style></defs>
    <text x="360" y="26" text-anchor="middle" class="v-title">CP vs AP: The Real Choice During a Partition</text>
    <text x="360" y="44" text-anchor="middle" class="v-sub">P is mandatory - choose Consistency OR Availability</text>
    <rect x="30" y="62" width="320" height="250" rx="10" fill="#fff5f5" stroke="#d32f2f" stroke-width="1.5"/>
    <text x="190" y="86" text-anchor="middle" class="v-title" fill="#d32f2f">CP - Consistency + Partition</text>
    <text x="190" y="102" text-anchor="middle" class="v-sub">correctness first, fail rather than lie</text>
    <text x="50" y="126" class="v-text">Write $1500 lands on Node A.</text>
    <text x="50" y="142" class="v-text">Read arrives at Node B (stale $1000).</text>
    <text x="50" y="158" class="v-text">CP refuses: returns ERROR / timeout.</text>
    <text x="50" y="174" class="v-text">Never serves wrong data.</text>
    <rect x="50" y="188" width="280" height="30" rx="6" fill="#d32f2f"/>
    <text x="190" y="207" text-anchor="middle" class="v-wht">READ from B - ERROR (unavailable)</text>
    <text x="50" y="232" class="v-text">Examples: MongoDB, HBase, Redis,</text>
    <text x="50" y="246" class="v-text">ZooKeeper, banking / payments.</text>
    <text x="50" y="264" class="v-text">Use when: money, orders, inventory.</text>
    <text x="50" y="282" class="v-text">Trade-off: some downtime OK.</text>
    <rect x="370" y="62" width="320" height="250" rx="10" fill="#f0faf0" stroke="#2b8a3e" stroke-width="1.5"/>
    <text x="530" y="86" text-anchor="middle" class="v-title" fill="#2b8a3e">AP - Availability + Partition</text>
    <text x="530" y="102" text-anchor="middle" class="v-sub">uptime first, sync later</text>
    <text x="390" y="126" class="v-text">Write $1500 lands on Node A.</text>
    <text x="390" y="142" class="v-text">Read arrives at Node B (stale $1000).</text>
    <text x="390" y="158" class="v-text">AP serves it anyway: returns $1000.</text>
    <text x="390" y="174" class="v-text">Stays up, heals after partition.</text>
    <rect x="390" y="188" width="280" height="30" rx="6" fill="#2b8a3e"/>
    <text x="530" y="207" text-anchor="middle" class="v-wht">READ from B - $1000 (stale but up)</text>
    <text x="390" y="232" class="v-text">Examples: Cassandra, DynamoDB,</text>
    <text x="390" y="246" class="v-text">CouchDB, social feeds, likes.</text>
    <text x="390" y="264" class="v-text">Use when: feeds, carts, sessions.</text>
    <text x="390" y="282" class="v-text">Trade-off: brief staleness OK.</text>
    <rect x="30" y="324" width="660" height="58" rx="8" fill="#fff8e1" stroke="#f57c00" stroke-width="1.5"/>
    <text x="360" y="344" text-anchor="middle" class="v-title" fill="#e65100">Interview one-liner</text>
    <text x="360" y="362" text-anchor="middle" class="v-text">Banking needs CP, social feeds need AP. Say this in interviews.</text>
  </svg>`;
}



