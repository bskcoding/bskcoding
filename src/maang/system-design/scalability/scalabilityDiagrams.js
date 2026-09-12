// ===== Scalability, Load Balancing & Caching SVG diagrams =====
export function svgScalabilityOverview() {
  return `<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg">
    <text x="380" y="30" text-anchor="middle" font-size="19" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Scalability - Growing With Demand</text>
    <text x="380" y="53" text-anchor="middle" font-size="13" font-family="Segoe UI,sans-serif" fill="#666">More traffic? Add more servers, not just a bigger one</text>
    <circle cx="210" cy="150" r="60" fill="#fef2f2" stroke="#b45309" stroke-width="2.5"/>
    <text x="210" y="144" text-anchor="middle" font-size="26" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b45309">+</text>
    <text x="210" y="168" text-anchor="middle" font-size="12" font-weight="600" font-family="Segoe UI,sans-serif" fill="#b45309">Vertical</text>
    <circle cx="550" cy="150" r="60" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2.5"/>
    <text x="550" y="144" text-anchor="middle" font-size="26" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">+</text>
    <text x="550" y="168" text-anchor="middle" font-size="12" font-weight="600" font-family="Segoe UI,sans-serif" fill="#1d4ed8">Horizontal</text>
    <rect x="150" y="260" width="140" height="60" rx="10" fill="#fef2f2" stroke="#b45309" stroke-width="1.5"/>
    <text x="220" y="286" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b45309">1 big server</text>
    <text x="220" y="306" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">up to 4x RAM</text>
    <rect x="470" y="260" width="140" height="60" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/>
    <text x="540" y="286" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">10 small servers</text>
    <text x="540" y="306" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">scale out freely</text>
    <line x1="246" y1="210" x2="246" y2="260" stroke="#64748b" stroke-width="2" marker-end="url(#slcArrow)"/>
    <line x1="514" y1="210" x2="514" y2="260" stroke="#64748b" stroke-width="2" marker-end="url(#slcArrow)"/>
    <defs><marker id="slcArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#64748b"/></marker></defs>
  </svg>`;
}
export function svgVerticalScaling() {
  return `<svg viewBox="0 0 720 400" xmlns="http://www.w3.org/2000/svg">
    <text x="360" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Vertical Scaling - Bigger Single Server</text>
    <text x="360" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">Add RAM / CPU to the SAME machine</text>
    <rect x="100" y="120" width="180" height="200" rx="12" fill="#fef2f2" stroke="#b91c1c" stroke-width="2"/>
    <text x="190" y="150" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">Server A</text>
    <text x="190" y="170" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">2 vCPU . 4GB RAM</text>
    <rect x="370" y="80" width="180" height="240" rx="12" fill="#b91c1c"/>
    <text x="460" y="110" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#fff">Server A (upgraded)</text>
    <text x="460" y="130" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#fff">8 vCPU . 32GB RAM</text>
    <text x="460" y="150" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#fff">Same IP, same DB</text>
    <line x1="280" y1="220" x2="370" y2="220" stroke="#64748b" stroke-width="3" marker-end="url(#slcVArrow)"/>
    <text x="325" y="210" text-anchor="middle" font-size="12" font-weight="600" font-family="Segoe UI,sans-serif" fill="#64748b">upgrade</text>
    <rect x="80" y="340" width="220" height="40" rx="8" fill="#fef2f2" stroke="#b91c1c" stroke-width="1.5"/>
    <text x="190" y="365" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">Simple but hits a ceiling</text>
    <rect x="360" y="340" width="220" height="40" rx="8" fill="#fef2f2" stroke="#b91c1c" stroke-width="1.5"/>
    <text x="470" y="365" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">Downtime during upgrade</text>
    <defs><marker id="slcVArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#64748b"/></marker></defs>
  </svg>`;
}

export function svgHorizontalScaling() {
  return `<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg">
    <text x="380" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Horizontal Scaling - More Machines</text>
    <text x="380" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">Add identical servers behind a load balancer</text>
    <rect x="60" y="100" width="640" height="60" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
    <text x="380" y="135" text-anchor="middle" font-size="14" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">Load Balancer</text>
    <rect x="80" y="200" width="130" height="80" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/>
    <text x="145" y="235" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">Server 1</text>
    <text x="145" y="255" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">vCPU 2 / 4GB</text>
    <rect x="220" y="200" width="130" height="80" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/>
    <text x="285" y="235" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">Server 2</text>
    <text x="285" y="255" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">vCPU 2 / 4GB</text>
    <rect x="360" y="200" width="130" height="80" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/>
    <text x="425" y="235" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">Server 3</text>
    <text x="425" y="255" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">vCPU 2 / 4GB</text>
    <rect x="500" y="200" width="130" height="80" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/>
    <text x="565" y="235" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">Server N</text>
    <text x="565" y="255" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">vCPU 2 / 4GB</text>
    <line x1="145" y1="160" x2="145" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#slcHArrow)"/>
    <line x1="285" y1="160" x2="285" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#slcHArrow)"/>
    <line x1="425" y1="160" x2="425" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#slcHArrow)"/>
    <line x1="565" y1="160" x2="565" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#slcHArrow)"/>
    <rect x="140" y="310" width="440" height="70" rx="10" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
    <text x="360" y="340" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#15803d">Add or remove nodes without downtime</text>
    <text x="360" y="362" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">Stateless services required - sessions live in Redis, not on the server</text>
    <defs><marker id="slcHArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#64748b"/></marker></defs>
  </svg>`;
}

export function svgStatelessStateful() {
  return `<svg viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg">
    <text x="380" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Stateless vs Stateful Servers</text>
    <text x="380" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">Can any server handle any request?</text>
    <rect x="40" y="90" width="310" height="200" rx="12" fill="#f0fdf4" stroke="#15803d" stroke-width="2"/>
    <text x="195" y="120" text-anchor="middle" font-size="14" font-weight="700" font-family="Segoe UI,sans-serif" fill="#15803d">Stateless Server</text>
    <text x="60" y="150" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">No memory of past requests</text>
    <text x="60" y="172" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">Session data in Redis / DB</text>
    <text x="60" y="194" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">Any replica can serve any user</text>
    <text x="60" y="216" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">Easy to add / remove nodes</text>
    <rect x="60" y="230" width="270" height="34" rx="8" fill="#15803d"/>
    <text x="195" y="252" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#fff">SCALE-FRIENDLY</text>
    <rect x="410" y="90" width="310" height="200" rx="12" fill="#fef2f2" stroke="#b91c1c" stroke-width="2"/>
    <text x="565" y="120" text-anchor="middle" font-size="14" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">Stateful Server</text>
    <text x="430" y="150" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">Stores session / cache locally</text>
    <text x="430" y="172" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">User must hit the same server</text>
    <text x="430" y="194" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">Removing a node loses state</text>
    <text x="430" y="216" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">Harder to scale horizontally</text>
    <rect x="430" y="230" width="270" height="34" rx="8" fill="#b91c1c"/>
    <text x="565" y="252" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#fff">STICKY SESSIONS NEEDED</text>
    <rect x="140" y="310" width="480" height="70" rx="10" fill="#fff8e1" stroke="#f59f00" stroke-width="1.5"/>
    <text x="380" y="340" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#e65100">Rule: push state to Redis / DB, keep app servers stateless</text>
    <text x="380" y="362" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">Traffic goes only to healthy ones</text>
  </svg>`;
}

export function svgLoadDistribution() {
  return `<svg viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg">
    <text x="380" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Load Distribution - Spreading Traffic Fairly</text>
    <text x="380" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">A load balancer decides which server handles each request</text>
    <rect x="280" y="90" width="200" height="70" rx="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
    <text x="380" y="120" text-anchor="middle" font-size="14" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">Load Balancer</text>
    <text x="380" y="142" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">Single entry point for clients</text>
    <rect x="60" y="210" width="150" height="80" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/>
    <text x="135" y="245" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">Server 1</text>
    <text x="135" y="265" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">33% traffic</text>
    <rect x="230" y="210" width="150" height="80" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/>
    <text x="305" y="245" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">Server 2</text>
    <text x="305" y="265" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">33% traffic</text>
    <rect x="400" y="210" width="150" height="80" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/>
    <text x="475" y="245" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">Server 3</text>
    <text x="475" y="265" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">33% traffic</text>
    <line x1="340" y1="160" x2="160" y2="210" stroke="#64748b" stroke-width="2" marker-end="url(#slcLDIcon)"/>
    <line x1="380" y1="160" x2="305" y2="210" stroke="#64748b" stroke-width="2" marker-end="url(#slcLDIcon)"/>
    <line x1="420" y1="160" x2="475" y2="210" stroke="#64748b" stroke-width="2" marker-end="url(#slcLDIcon)"/>
    <rect x="100" y="320" width="560" height="70" rx="10" fill="#fff8e1" stroke="#f59f00" stroke-width="1.5"/>
    <text x="380" y="350" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#e65100">Goal: no server is idle while another is overwhelmed</text>
    <text x="380" y="372" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">Algorithms: round-robin, least-connections, weighted, IP hash</text>
    <defs><marker id="slcLDIcon" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#64748b"/></marker></defs>
  </svg>`;
}

export function svgLoadBalancer() {
  return `<svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg">
    <text x="360" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Load Balancer - Traffic Cop</text>
    <text x="360" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">Distributes requests and hides server failures</text>
    <circle cx="360" cy="130" r="55" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.5"/>
    <text x="360" y="125" text-anchor="middle" font-size="14" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">LB</text>
    <text x="360" y="148" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#1d4ed8">reverse proxy</text>
    <rect x="60" y="230" width="140" height="70" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/>
    <text x="130" y="260" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">Server A</text>
    <text x="130" y="280" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">healthy</text>
    <rect x="250" y="230" width="140" height="70" rx="10" fill="#fef2f2" stroke="#b91c1c" stroke-width="1.5"/>
    <text x="320" y="260" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">Server B</text>
    <text x="320" y="280" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">UNHEALTHY</text>
    <rect x="440" y="230" width="140" height="70" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/>
    <text x="510" y="260" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">Server C</text>
    <text x="510" y="280" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">healthy</text>
    <line x1="310" y1="170" x2="140" y2="230" stroke="#64748b" stroke-width="2" marker-end="url(#slcLBIcon)"/>
    <line x1="360" y1="185" x2="320" y2="230" stroke="#64748b" stroke-width="2" stroke-dasharray="5,4"/>
    <line x1="410" y1="170" x2="510" y2="230" stroke="#64748b" stroke-width="2" marker-end="url(#slcLBIcon)"/>
    <text x="360" y="330" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#64748b">No traffic to Server B</text>
    <defs><marker id="slcLBIcon" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#64748b"/></marker></defs>
  </svg>`;
}

export function svgRoundRobin() {
  return `<svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg">
    <text x="360" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Round-Robin - Rotate Through Servers</text>
    <text x="360" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">Each request goes to the next server in order</text>
    <rect x="260" y="80" width="200" height="60" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
    <text x="360" y="115" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">Request queue</text>
    <circle cx="100" cy="220" r="40" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/>
    <text x="100" y="215" text-anchor="middle" font-size="11" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">S1</text>
    <text x="100" y="235" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">req 1,4</text>
    <circle cx="250" cy="220" r="40" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/>
    <text x="250" y="215" text-anchor="middle" font-size="11" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">S2</text>
    <text x="250" y="235" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">req 2,5</text>
    <circle cx="400" cy="220" r="40" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/>
    <text x="400" y="215" text-anchor="middle" font-size="11" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">S3</text>
    <text x="400" y="235" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">req 3,6</text>
    <line x1="320" y1="140" x2="120" y2="185" stroke="#64748b" stroke-width="2" marker-end="url(#slcRRArrow)"/>
    <line x1="360" y1="140" x2="260" y2="185" stroke="#64748b" stroke-width="2" marker-end="url(#slcRRArrow)"/>
    <line x1="400" y1="140" x2="400" y2="180" stroke="#64748b" stroke-width="2" marker-end="url(#slcRRArrow)"/>
    <rect x="80" y="290" width="560" height="64" rx="10" fill="#fff8e1" stroke="#f59f00" stroke-width="1.5"/>
    <text x="360" y="316" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#e65100">Simple, fair, but ignores server load</text>
    <text x="360" y="338" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">Use when all servers have similar capacity and requests are similar</text>
    <defs><marker id="slcRRArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#64748b"/></marker></defs>
  </svg>`;
}

export function svgLeastConnections() {
  return `<svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg">
    <text x="360" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Least Connections - Send to the Freest Server</text>
    <text x="360" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">Track open connections per server, pick the lowest</text>
    <rect x="260" y="80" width="200" height="60" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
    <text x="360" y="115" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">New request arrives</text>
    <circle cx="100" cy="220" r="45" fill="#fef2f2" stroke="#b91c1c" stroke-width="2"/>
    <text x="100" y="215" text-anchor="middle" font-size="11" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">S1</text>
    <text x="100" y="235" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">8 active</text>
    <circle cx="280" cy="220" r="45" fill="#f0fdf4" stroke="#15803d" stroke-width="2"/>
    <text x="280" y="215" text-anchor="middle" font-size="11" font-weight="700" font-family="Segoe UI,sans-serif" fill="#15803d">S2</text>
    <text x="280" y="235" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">2 active</text>
    <circle cx="460" cy="220" r="45" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/>
    <text x="460" y="215" text-anchor="middle" font-size="11" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">S3</text>
    <text x="460" y="235" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#555">5 active</text>
    <line x1="360" y1="140" x2="280" y2="175" stroke="#15803d" stroke-width="3" marker-end="url(#slcLCIcon)"/>
    <text x="340" y="162" text-anchor="middle" font-size="11" font-weight="700" font-family="Segoe UI,sans-serif" fill="#15803d">pick S2</text>
    <rect x="80" y="290" width="560" height="64" rx="10" fill="#fff8e1" stroke="#f59f00" stroke-width="1.5"/>
    <text x="360" y="316" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#e65100">Better for long-lived connections</text>
    <text x="360" y="338" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">Use when requests have very different durations (WebSockets, API calls)</text>
    <defs><marker id="slcLCIcon" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#15803d"/></marker></defs>
  </svg>`;
}

export function svgHealthChecks() {
  return `<svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg">
    <text x="360" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Health Checks - Detect Failed Servers</text>
    <text x="360" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">LB pings each server regularly; unhealthy ones get removed</text>
    <rect x="260" y="80" width="200" height="60" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
    <text x="360" y="115" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1d4ed8">Load Balancer</text>
    <circle cx="100" cy="220" r="40" fill="#f0fdf4" stroke="#15803d" stroke-width="2"/>
    <text x="100" y="215" text-anchor="middle" font-size="11" font-weight="700" font-family="Segoe UI,sans-serif" fill="#15803d">S1</text>
    <text x="100" y="235" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#15803d">200 OK</text>
    <circle cx="280" cy="220" r="40" fill="#fef2f2" stroke="#b91c1c" stroke-width="2"/>
    <text x="280" y="215" text-anchor="middle" font-size="11" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">S2</text>
    <text x="280" y="235" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#b91c1c">TIMEOUT</text>
    <circle cx="460" cy="220" r="40" fill="#f0fdf4" stroke="#15803d" stroke-width="2"/>
    <text x="460" y="215" text-anchor="middle" font-size="11" font-weight="700" font-family="Segoe UI,sans-serif" fill="#15803d">S3</text>
    <text x="460" y="235" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" fill="#15803d">200 OK</text>
    <line x1="320" y1="140" x2="120" y2="185" stroke="#15803d" stroke-width="2" marker-end="url(#slcHCArrow)"/>
    <line x1="360" y1="140" x2="280" y2="180" stroke="#b91c1c" stroke-width="2" stroke-dasharray="5,4"/>
    <line x1="400" y1="140" x2="460" y2="180" stroke="#15803d" stroke-width="2" marker-end="url(#slcHCArrow)"/>
    <text x="360" y="290" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#64748b">S2 marked unhealthy - no traffic sent</text>
    <defs><marker id="slcHCArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#15803d"/></marker></defs>
  </svg>`;
}

export function svgRedis() {
  return `<svg viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg">
    <text x="380" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Redis - In-Memory Cache</text>
    <text x="380" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">Sub-millisecond reads for hot data</text>
    <rect x="60" y="100" width="150" height="80" rx="12" fill="#f0f0f0" stroke="#94a3b8" stroke-width="2"/>
    <text x="135" y="140" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#475569">App Server</text>
    <text x="135" y="160" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">checks cache first</text>
    <rect x="260" y="100" width="160" height="80" rx="12" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
    <text x="340" y="135" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#92400e">Redis Cache</text>
    <text x="340" y="155" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">in-memory store</text>
    <rect x="480" y="100" width="150" height="80" rx="12" fill="#f0f0f0" stroke="#94a3b8" stroke-width="2"/>
    <text x="555" y="140" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#475569">Database</text>
    <text x="555" y="160" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">source of truth</text>
    <line x1="210" y1="140" x2="260" y2="140" stroke="#64748b" stroke-width="2" marker-end="url(#slcRedisArrow)"/>
    <line x1="420" y1="140" x2="480" y2="140" stroke="#64748b" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#slcRedisArrow)"/>
    <rect x="100" y="220" width="560" height="70" rx="10" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
    <text x="380" y="250" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#15803d">Hit: return from Redis (fast)</text>
    <text x="380" y="272" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">On miss: read DB, write Redis, return to client</text>
    <defs><marker id="slcRedisArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#64748b"/></marker></defs>
  </svg>`;
}

export function svgCacheAside() {
  return `<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg">
    <text x="380" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Cache-Aside - Lazy Loading</text>
    <text x="380" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">App checks cache first; on miss, reads DB and fills cache</text>
    <rect x="40" y="100" width="150" height="80" rx="12" fill="#f0f0f0" stroke="#94a3b8" stroke-width="2"/>
    <text x="115" y="140" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#475569">App Server</text>
    <text x="115" y="160" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">checks cache first</text>
    <rect x="250" y="100" width="160" height="80" rx="12" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
    <text x="330" y="135" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#92400e">Redis Cache</text>
    <text x="330" y="155" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">in-memory store</text>
    <rect x="480" y="100" width="150" height="80" rx="12" fill="#f0f0f0" stroke="#94a3b8" stroke-width="2"/>
    <text x="555" y="140" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#475569">Database</text>
    <text x="555" y="160" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">source of truth</text>
    <line x1="190" y1="140" x2="250" y2="140" stroke="#64748b" stroke-width="2" marker-end="url(#slcCAArrow)"/>
    <line x1="410" y1="140" x2="480" y2="140" stroke="#64748b" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#slcCAArrow)"/>
    <rect x="100" y="220" width="560" height="70" rx="10" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
    <text x="380" y="250" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#15803d">Hit: return from Redis (fast)</text>
    <text x="380" y="272" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">On miss: read DB, write Redis, return to client</text>
    <defs><marker id="slcCAArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#64748b"/></marker></defs>
  </svg>`;
}

export function svgWriteThrough() {
  return `<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg">
    <text x="380" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Write-Through - Cache and DB Together</text>
    <text x="380" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">Every write updates both cache and database</text>
    <rect x="40" y="110" width="150" height="80" rx="12" fill="#302b63"/>
    <text x="115" y="150" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#fff">App Server</text>
    <text x="115" y="170" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#fff">writes to cache</text>
    <rect x="250" y="110" width="160" height="80" rx="12" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
    <text x="330" y="145" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#92400e">Redis Cache</text>
    <line x1="410" y1="150" x2="460" y2="150" stroke="#64748b" stroke-width="2" marker-end="url(#slcWTArrow)"/>
    <rect x="470" y="110" width="150" height="80" rx="12" fill="#f0f0f0" stroke="#94a3b8" stroke-width="2"/>
    <text x="545" y="150" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#475569">Database</text>
    <rect x="100" y="240" width="560" height="70" rx="10" fill="#fff8e1" stroke="#f59f00" stroke-width="1.5"/>
    <text x="380" y="270" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#e65100">Consistent data, slower writes</text>
    <text x="380" y="292" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">Cache failure can block writes</text>
    <defs><marker id="slcWTArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#64748b"/></marker></defs>
  </svg>`;
}

export function svgWriteBack() {
  return `<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg">
    <text x="380" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Write-Back - Delayed Database Sync</text>
    <text x="380" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">Writes return quickly from cache; DB updates later</text>
    <rect x="40" y="110" width="150" height="80" rx="12" fill="#f0f0f0" stroke="#94a3b8" stroke-width="2"/>
    <text x="115" y="150" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#475569">Database</text>
    <line x1="190" y1="150" x2="240" y2="150" stroke="#64748b" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#slcWBArrow)"/>
    <rect x="250" y="110" width="160" height="80" rx="12" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
    <text x="330" y="145" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#92400e">Redis Cache</text>
    <line x1="410" y1="150" x2="460" y2="150" stroke="#64748b" stroke-width="2" marker-end="url(#slcWBArrow)"/>
    <rect x="470" y="110" width="150" height="80" rx="12" fill="#302b63"/>
    <text x="545" y="145" text-anchor="middle" font-size="13" font-weight="700" font-family="Segoe UI,sans-serif" fill="#fff">App Server</text>
    <rect x="250" y="270" width="260" height="70" rx="10" fill="#fff8e1" stroke="#f59f00" stroke-width="1.5"/>
    <text x="380" y="305" text-anchor="middle" font-size="12" font-weight="700" font-family="Segoe UI,sans-serif" fill="#e65100">Fast writes, but risk of data loss</text>
    <text x="380" y="325" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">Flush interval or dirty flag controls sync</text>
    <defs><marker id="slcWBArrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#64748b"/></marker></defs>
  </svg>`;
}

export function svgLRULFU() {
  return `<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg">
    <text x="380" y="30" text-anchor="middle" font-size="18" font-weight="700" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Cache Eviction - LRU &amp; LFU</text>
    <text x="380" y="52" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#666">When the cache is full, decide what to remove</text>
    <rect x="40" y="100" width="280" height="190" rx="12" fill="#f0fdf4" stroke="#15803d" stroke-width="2"/>
    <text x="180" y="130" text-anchor="middle" font-size="14" font-weight="700" font-family="Segoe UI,sans-serif" fill="#15803d">LRU - Least Recently Used</text>
    <text x="180" y="158" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">Evict the item not accessed</text>
    <text x="180" y="178" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">for the longest time</text>
    <text x="180" y="205" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">Good when recent access predicts reuse</text>
    <rect x="440" y="100" width="280" height="190" rx="12" fill="#fef2f2" stroke="#b91c1c" stroke-width="2"/>
    <text x="580" y="130" text-anchor="middle" font-size="14" font-weight="700" font-family="Segoe UI,sans-serif" fill="#b91c1c">LFU - Least Frequently Used</text>
    <text x="580" y="158" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">Evict the item accessed</text>
    <text x="580" y="178" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" fill="#333">the fewest times</text>
    <text x="580" y="205" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#555">Good when hot items repeat often</text>
    <defs><marker id="slcEvict" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#64748b"/></marker></defs>
  </svg>`;
}
