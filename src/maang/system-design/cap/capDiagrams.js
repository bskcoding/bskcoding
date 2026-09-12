// CAP diagrams - clean rewrite
export function svgCAPOverview() {
  return `<svg viewBox="0 0 760 470" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="capArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L8,4.5 L0,9 Z" fill="#64748b"/>
      </marker>
    </defs>
    <text x="380" y="30" text-anchor="middle" font-size="19" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">CAP Theorem - Pick Any 2 of 3</text>
    <text x="380" y="53" text-anchor="middle" font-size="13" font-family="Segoe UI,sans-serif" fill="#666">Distributed system: at most 2 guarantees at once</text>
    <circle cx="380" cy="128" r="58" fill="#ff6b6b" stroke="#b91c1c" stroke-width="2.5"/>
    <text x="380" y="122" text-anchor="middle" fill="#fff" font-size="26" font-weight="700" font-family="Segoe UI,sans-serif">C</text>
    <text x="380" y="143" text-anchor="middle" fill="#fff" font-size="11" font-weight="600" font-family="Segoe UI,sans-serif">Consistency</text>
    <circle cx="252" cy="292" r="58" fill="#51cf66" stroke="#15803d" stroke-width="2.5"/>
    <text x="252" y="286" text-anchor="middle" fill="#fff" font-size="26" font-weight="700" font-family="Segoe UI,sans-serif">A</text>
    <text x="252" y="307" text-anchor="middle" fill="#fff" font-size="11" font-weight="600" font-family="Segoe UI,sans-serif">Availability</text>
    <circle cx="508" cy="292" r="58" fill="#5c7cfa" stroke="#1d4ed8" stroke-width="2.5"/>
    <text x="508" y="286" text-anchor="middle" fill="#fff" font-size="26" font-weight="700" font-family="Segoe UI,sans-serif">P</text>
    <text x="508" y="307" text-anchor="middle" fill="#fff" font-size="10" font-weight="600" font-family="Segoe UI,sans-serif">Partition Tol.</text>
    <line x1="340" y1="168" x2="290" y2="246" stroke="#64748b" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#capArrow)"/>
    <line x1="420" y1="168" x2="470" y2="246" stroke="#64748b" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#capArrow)"/>
    <line x1="312" y1="292" x2="446" y2="292" stroke="#64748b" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#capArrow)"/>
    <text x="282" y="212" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">CA</text>
    <text x="478" y="212" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">CP</text>
    <text x="380" y="286" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#15803d">AP</text>
    <rect x="90" y="368" width="180" height="64" rx="10" fill="#fef2f2" stroke="#b91c1c" stroke-width="1.5"/>
    <text x="180" y="390" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">CA - single node</text>
    <text x="180" y="410" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">rare in practice</text>
    <rect x="290" y="368" width="180" height="64" rx="10" fill="#f0fdf4" stroke="#15803d" stroke-width="2"/>
    <text x="380" y="390" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#15803d">CP - banking</text>
    <text x="380" y="410" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">correct over up</text>
    <rect x="490" y="368" width="180" height="64" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/>
    <text x="580" y="390" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">AP - feeds</text>
    <text x="580" y="410" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">up over correct</text>
  </svg>`;
}
export function svgConsistency() {
  return `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="cArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L8,4.5 L0,9 Z" fill="#15803d"/>
      </marker>
    </defs>
    <text x="360" y="32" text-anchor="middle" font-size="19" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">C - Consistency: every read gets latest write</text>
    <text x="360" y="56" text-anchor="middle" font-size="13" font-family="Segoe UI,sans-serif" fill="#666">All nodes show the SAME value at the SAME time</text>
    <rect x="60" y="84" width="170" height="80" rx="12" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
    <text x="145" y="110" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1565c0">1. WRITE</text>
    <text x="145" y="132" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">balance = $1500</text>
    <text x="145" y="150" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#666">client writes</text>
    <rect x="275" y="84" width="170" height="80" rx="12" fill="#fff8e1" stroke="#f57c00" stroke-width="2"/>
    <text x="360" y="110" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#e65100">2. SYNC</text>
    <text x="360" y="132" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">copy to all nodes</text>
    <text x="360" y="150" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#666">before replying OK</text>
    <rect x="490" y="84" width="170" height="80" rx="12" fill="#f0fdf4" stroke="#15803d" stroke-width="2"/>
    <text x="575" y="110" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#15803d">3. READ</text>
    <text x="575" y="132" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">any node: $1500</text>
    <text x="575" y="150" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#666">always fresh</text>
    <line x1="230" y1="124" x2="271" y2="124" stroke="#15803d" stroke-width="3" marker-end="url(#cArrow)"/>
    <line x1="445" y1="124" x2="486" y2="124" stroke="#15803d" stroke-width="3" marker-end="url(#cArrow)"/>
    <rect x="145" y="192" width="200" height="64" rx="12" fill="#15803d"/>
    <text x="245" y="218" text-anchor="middle" font-size="15" font-weight="700" font-family="Segoe UI,sans-serif" fill="#fff">Node A: $1500</text>
    <text x="245" y="238" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#fff">latest value</text>
    <rect x="375" y="192" width="200" height="64" rx="12" fill="#15803d"/>
    <text x="475" y="218" text-anchor="middle" font-size="15" font-weight="700" font-family="Segoe UI,sans-serif" fill="#fff">Node B: $1500</text>
    <text x="475" y="238" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#fff">same value</text>
    <line x1="345" y1="224" x2="371" y2="224" stroke="#15803d" stroke-width="3" stroke-dasharray="6,4" marker-end="url(#cArrow)"/>
    <rect x="60" y="276" width="600" height="60" rx="10" fill="#fff8e1" stroke="#f57c00" stroke-width="1.5"/>
    <text x="360" y="299" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#e65100">Bank example: deposit Rs.1000 - every ATM shows Rs.1000 instantly</text>
    <text x="360" y="320" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#555">Never stale. Used by: MongoDB, HBase, banking.</text>
  </svg>`;
}
export function svgAvailability() {
  return `<svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="aArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L8,4.5 L0,9 Z" fill="#15803d"/>
      </marker>
    </defs>
    <text x="360" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">A - Availability: every request gets an answer</text>
    <text x="360" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">System stays UP even if the answer is slightly old</text>
    <rect x="100" y="72" width="220" height="76" rx="12" fill="#15803d"/>
    <text x="210" y="100" text-anchor="middle" font-size="15" font-weight="700" font-family="Segoe UI,sans-serif" fill="#fff">Node A: $1500</text>
    <text x="210" y="122" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#fff">got the new write</text>
    <rect x="400" y="72" width="220" height="76" rx="12" fill="#f59f00"/>
    <text x="510" y="100" text-anchor="middle" font-size="15" font-weight="700" font-family="Segoe UI,sans-serif" fill="#fff">Node B: $1000</text>
    <text x="510" y="122" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#fff">old value (stale)</text>
    <line x1="320" y1="110" x2="400" y2="110" stroke="#b91c1c" stroke-width="3" stroke-dasharray="7,5"/>
    <text x="360" y="102" text-anchor="middle" font-size="18">&#9986;</text>
    <text x="360" y="138" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#b91c1c">link broken</text>
    <rect x="100" y="168" width="220" height="88" rx="10" fill="#f0fdf4" stroke="#15803d" stroke-width="2"/>
    <text x="210" y="192" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#15803d">Read from A:</text>
    <rect x="130" y="202" width="160" height="32" rx="8" fill="#15803d"/>
    <text x="210" y="224" text-anchor="middle" font-size="14" font-weight="700" font-family="Segoe UI,sans-serif" fill="#fff">$1500 fresh</text>
    <text x="210" y="244" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">answers instantly</text>
    <rect x="400" y="168" width="220" height="88" rx="10" fill="#fff8e1" stroke="#f59f00" stroke-width="2"/>
    <text x="510" y="192" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#e65100">Read from B:</text>
    <rect x="430" y="202" width="160" height="32" rx="8" fill="#f59f00"/>
    <text x="510" y="224" text-anchor="middle" font-size="14" font-weight="700" font-family="Segoe UI,sans-serif" fill="#fff">$1000 stale, UP</text>
    <text x="510" y="244" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">no error, no waiting</text>
    <rect x="60" y="272" width="600" height="88" rx="10" fill="#e8f5e9" stroke="#15803d" stroke-width="1.5"/>
    <text x="360" y="298" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#15803d">Rule: A replies always (maybe stale) - C replies fresh (maybe fails)</text>
    <text x="360" y="320" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#555">Like-counter shows 999 for 1 sec instead of going down.</text>
    <text x="360" y="340" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#555">Used by: Cassandra, DynamoDB, feeds.</text>
  </svg>`;
}
export function svgPartitionTolerance() {
  return `<svg viewBox="0 0 720 370" xmlns="http://www.w3.org/2000/svg">
    <text x="360" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">P - Partition Tolerance: works when network splits</text>
    <text x="360" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">Mandatory for any distributed system</text>
    <rect x="80" y="72" width="220" height="76" rx="12" fill="#5c7cfa"/>
    <text x="190" y="100" text-anchor="middle" font-size="15" font-weight="700" font-family="Segoe UI,sans-serif" fill="#fff">Node A group</text>
    <text x="190" y="122" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#fff">keeps serving users</text>
    <rect x="420" y="72" width="220" height="76" rx="12" fill="#5c7cfa"/>
    <text x="530" y="100" text-anchor="middle" font-size="15" font-weight="700" font-family="Segoe UI,sans-serif" fill="#fff">Node B group</text>
    <text x="530" y="122" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#fff">keeps serving users</text>
    <line x1="300" y1="110" x2="420" y2="110" stroke="#b91c1c" stroke-width="3" stroke-dasharray="7,5"/>
    <text x="360" y="102" text-anchor="middle" font-size="18">&#9986;</text>
    <text x="360" y="138" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#b91c1c">network split - nodes cannot talk</text>
    <rect x="80" y="168" width="560" height="88" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/>
    <text x="360" y="194" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">System does NOT crash - each side keeps working alone</text>
    <text x="360" y="216" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#555">Then must choose: stop one side (CP) or allow stale reads (AP)</text>
    <text x="360" y="236" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#555">Single server can skip P. Real networks cannot.</text>
    <rect x="80" y="270" width="560" height="76" rx="10" fill="#fff8e1" stroke="#f59f00" stroke-width="1.5"/>
    <text x="360" y="296" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#e65100">Cable cut / data-center down / switch failure = partition</text>
    <text x="360" y="318" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#555">Used by: every distributed DB - Cassandra, MongoDB, Kafka.</text>
  </svg>`;
}
export function svgCPvsAP() {
  return `<svg viewBox="0 0 720 370" xmlns="http://www.w3.org/2000/svg">
    <text x="360" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Partition happens - CP vs AP choice</text>
    <text x="360" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">Same failure, two opposite decisions</text>
    <rect x="40" y="72" width="310" height="190" rx="12" fill="#fef2f2" stroke="#b91c1c" stroke-width="2"/>
    <text x="195" y="98" text-anchor="middle" font-size="14" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">CP - Consistency + Partition</text>
    <text x="195" y="118" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#666">correct first, fail rather than lie</text>
    <text x="60" y="142" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">Write $1500 lands on Node A.</text>
    <text x="60" y="162" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">Read arrives at Node B ($1000).</text>
    <text x="60" y="182" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">CP refuses: returns ERROR.</text>
    <rect x="60" y="194" width="270" height="32" rx="8" fill="#b91c1c"/>
    <text x="195" y="215" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#fff">READ from B: ERROR</text>
    <text x="60" y="244" font-size="11" font-family="Segoe UI,sans-serif" fill="#666">Never wrong data. Ex: MongoDB, HBase</text>
    <rect x="370" y="72" width="310" height="190" rx="12" fill="#f0fdf4" stroke="#15803d" stroke-width="2"/>
    <text x="525" y="98" text-anchor="middle" font-size="14" font-weight="700" font-family="Segoe UI,sans-serif" fill="#15803d">AP - Availability + Partition</text>
    <text x="525" y="118" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#666">up first, stale rather than down</text>
    <text x="390" y="142" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">Same write $1500 on Node A.</text>
    <text x="390" y="162" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">Same read at Node B ($1000).</text>
    <text x="390" y="182" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">AP answers with old value.</text>
    <rect x="390" y="194" width="270" height="32" rx="8" fill="#15803d"/>
    <text x="525" y="215" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#fff">READ from B: $1000 (stale)</text>
    <text x="390" y="244" font-size="11" font-family="Segoe UI,sans-serif" fill="#666">Never downtime. Ex: Cassandra, Dynamo</text>
    <rect x="40" y="276" width="640" height="74" rx="10" fill="#fff8e1" stroke="#f59f00" stroke-width="1.5"/>
    <text x="360" y="302" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#e65100">Interview line: banking needs CP, feeds need AP</text>
    <text x="360" y="324" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#555">Single-node DB can be CA - networked systems pick CP or AP.</text>
  </svg>`;
}
