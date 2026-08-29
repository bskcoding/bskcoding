// ===== SOLID Principles — SVG Diagrams =====
// Each function returns an SVG string matching the page's theme.

export function svgSRP() {
  return `<svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .srp-box { fill: #f8f9fc; stroke: #302b63; stroke-width: 2; rx: 12; }
        .srp-bad { fill: #fff5f5; stroke: #d32f2f; stroke-width: 2; rx: 12; }
        .srp-title { font-weight: 700; font-size: 14px; font-family: Segoe UI, sans-serif; }
        .srp-field { font-size: 11px; font-family: monospace; fill: #444; }
        .srp-method { font-size: 11px; font-family: monospace; fill: #1a1a2e; }
        .srp-divider { stroke: #ccc; stroke-width: 1; }
        .srp-label { fill: #e94560; font-weight: 600; font-size: 11px; font-family: Segoe UI, sans-serif; }
        .srp-good-label { fill: #2e7d32; font-weight: 600; font-size: 12px; font-family: Segoe UI, sans-serif; }
      </style>
    </defs>
    <rect x="20" y="20" width="300" height="150" class="srp-bad" />
    <text x="170" y="44" text-anchor="middle" class="srp-title" fill="#d32f2f">❌ ReportGenerator (One Class, 3 Jobs)</text>
    <line x1="30" y1="60" x2="310" y2="60" class="srp-divider" />
    <text x="40" y="82" class="srp-method">+ buildReport()</text>
    <text x="40" y="104" class="srp-method" fill="#d32f2f">+ saveToDatabase()</text>
    <text x="40" y="126" class="srp-method" fill="#d32f2f">+ sendEmail()</text>
    <text x="170" y="145" text-anchor="middle" class="srp-label">❌ One reason to change... but it has THREE</text>
    <rect x="380" y="20" width="160" height="110" class="srp-box" />
    <text x="460" y="40" text-anchor="middle" class="srp-title">ReportBuilder</text>
    <line x1="390" y1="52" x2="530" y2="52" class="srp-divider" />
    <text x="400" y="74" class="srp-method">+ buildReport()</text>
    <rect x="380" y="155" width="160" height="110" class="srp-box" />
    <text x="460" y="175" text-anchor="middle" class="srp-title">ReportRepository</text>
    <line x1="390" y1="187" x2="530" y2="187" class="srp-divider" />
    <text x="400" y="209" class="srp-method">+ save()</text>
    <rect x="560" y="155" width="160" height="110" class="srp-box" />
    <text x="640" y="175" text-anchor="middle" class="srp-title">NotificationService</text>
    <line x1="570" y1="187" x2="710" y2="187" class="srp-divider" />
    <text x="580" y="209" class="srp-method">+ sendReport()</text>
        <text x="460" y="300" text-anchor="middle" class="srp-good-label">✅ Good: 3 focused classes → 1 responsibility each</text>
  </svg>`;
}

export function svgOCP() {
  return `<svg viewBox="0 0 760 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .ocp-box { fill: #f8f9fc; stroke: #302b63; stroke-width: 2; rx: 12; }
        .ocp-closed { fill: #e8f5e9; stroke: #2e7d32; stroke-width: 3; rx: 12; stroke-dasharray: 2,2; }
        .ocp-title { font-weight: 700; font-size: 14px; font-family: Segoe UI, sans-serif; }
        .ocp-method { font-size: 11px; font-family: monospace; fill: #1a1a2e; }
        .ocp-divider { stroke: #ccc; stroke-width: 1; }
        .ocp-label { fill: #e94560; font-weight: 600; font-size: 11px; font-family: Segoe UI, sans-serif; }
        .ocp-arrow { stroke: #00695c; stroke-width: 2.5; marker-end: url(#arrowOCP); }
      </style>
      <marker id="arrowOCP" markerWidth="12" markerHeight="8" refX="12" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="#00695c" />
      </marker>
    </defs>
    <rect x="20" y="20" width="200" height="140" class="ocp-box" />
    <text x="120" y="40" text-anchor="middle" class="ocp-title">PriceCalculator</text>
    <line x1="30" y1="52" x2="210" y2="52" class="ocp-divider" />
    <text x="40" y="75" class="ocp-method">+ addStrategy(s: Strategy)</text>
    <text x="40" y="97" class="ocp-method">+ calculate()</text>
    <rect x="240" y="20" width="160" height="140" class="ocp-box" />
    <text x="320" y="40" text-anchor="middle" class="ocp-title">DiscountStrategy</text>
    <line x1="250" y1="52" x2="390" y2="52" class="ocp-divider" />
    <text x="260" y="75" class="ocp-method" font-style="italic">+ apply(price): double</text>
    <rect x="440" y="20" width="140" height="100" class="ocp-box" />
    <text x="510" y="40" text-anchor="middle" class="ocp-title">SeasonalDiscount</text>
    <line x1="450" y1="52" x2="570" y2="52" class="ocp-divider" />
    <text x="460" y="74" class="ocp-method">-10%</text>
    <rect x="440" y="140" width="140" height="100" class="ocp-box" />
    <text x="510" y="160" text-anchor="middle" class="ocp-title">VIPDiscount</text>
    <line x1="450" y1="172" x2="570" y2="172" class="ocp-divider" />
    <text x="460" y="194" class="ocp-method">-20%</text>
    <rect x="600" y="80" width="140" height="100" class="ocp-box" style="border-color:#e65100;" />
    <text x="670" y="100" text-anchor="middle" class="ocp-title" fill="#e65100">BlackFridayDiscount</text>
    <line x1="610" y1="112" x2="730" y2="112" class="ocp-divider" />
    <text x="620" y="134" class="ocp-method">-30%</text>
    <line x1="220" y1="70" x2="240" y2="40" class="ocp-arrow" />
    <line x1="220" y1="92" x2="240" y2="130" class="ocp-arrow" />
    <line x1="410" y1="70" x2="440" y2="70" class="ocp-arrow" />
    <line x1="410" y1="162" x2="440" y2="180" class="ocp-arrow" />
    <line x1="580" y1="100" x2="600" y2="130" class="ocp-arrow" style="stroke:#e65100;" />
    <rect x="320" y="270" width="420" height="100" class="ocp-closed" />
    <text x="530" y="295" text-anchor="middle" class="ocp-title" fill="#2e7d32">✅ Calculator = CLOSED for modification</text>
    <text x="530" y="318" class="ocp-method">Add new DiscountStrategy → no edit needed</text>
    <text x="530" y="340" class="ocp-label">Strategies plug in without touching existing code</text>
  </svg>`;
}
export function svgLSP() {
  return `<svg viewBox="0 0 720 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .lsp-bad { fill: #fff5f5; stroke: #d32f2f; stroke-width: 2; rx: 12; }
        .lsp-good { fill: #e8f5e9; stroke: #2e7d32; stroke-width: 2; rx: 12; }
        .lsp-title { font-weight: 700; font-size: 14px; font-family: Segoe UI, sans-serif; }
        .lsp-method { font-size: 11px; font-family: monospace; }
        .lsp-divider { stroke: #ccc; stroke-width: 1; }
        .lsp-label { font-weight: 600; font-size: 11px; font-family: Segoe UI, sans-serif; }
      </style>
    </defs>
    <rect x="20" y="20" width="200" height="150" class="lsp-bad" />
    <text x="120" y="42" text-anchor="middle" class="lsp-title" fill="#d32f2f">❌ Rectangle (BAD)</text>
    <line x1="30" y1="56" x2="210" y2="56" class="lsp-divider" />
    <text x="40" y="80" class="lsp-method" fill="#d32f2f">+ setWidth()</text>
    <text x="40" y="100" class="lsp-method" fill="#d32f2f">+ setHeight()</text>
    <text x="40" y="120" class="lsp-method" fill="#d32f2f">+ getArea()</text>
    <rect x="260" y="20" width="180" height="150" class="lsp-bad" style="stroke:#1565c0;" />
    <text x="350" y="42" text-anchor="middle" class="lsp-title" fill="#1565c0">Square extends Rectangle</text>
    <line x1="270" y1="56" x2="430" y2="56" class="lsp-divider" />
    <text x="280" y="80" class="lsp-method" fill="#1565c0">+ setWidth()  → both = w</text>
    <text x="280" y="100" class="lsp-method" fill="#1565c0">+ setHeight() → both = h</text>
    <text x="280" y="120" class="lsp-method" fill="#d32f2f" font-style="italic">❌ breaks contract!</text>
    <line x1="240" y1="95" x2="258" y2="95" stroke="#d32f2f" stroke-width="2" marker-end="url(#none)" stroke-dasharray="5,3" />
    <text x="245" y="90" class="lsp-label" fill="#d32f2f">extends</text>

    <rect x="470" y="20" width="180" height="150" class="lsp-good" />
    <text x="560" y="42" text-anchor="middle" class="lsp-title" fill="#2e7d32">✅ Shape (abstract)</text>
    <line x1="480" y1="56" x2="640" y2="56" class="lsp-divider" />
    <text x="490" y="80" class="lsp-method" font-style="italic" fill="#2e7d32">+ getArea()</text>
    <rect x="470" y="200" width="180" height="150" class="lsp-good" />
    <text x="560" y="222" text-anchor="middle" class="lsp-title" fill="#2e7d32">Rectangle</text>
    <line x1="480" y1="236" x2="640" y2="236" class="lsp-divider" />
    <text x="490" y="260" class="lsp-method">w × h</text>
    <rect x="470" y="370" width="180" height="150" class="lsp-bad" style="stroke:#1565c0;stroke-width:3;" />
    <text x="560" y="392" text-anchor="middle" class="lsp-title" fill="#1565c0">Square</text>
    <line x1="480" y1="406" x2="640" y2="406" class="lsp-divider" />
    <text x="490" y="430" class="lsp-method">s × s</text>

    <rect x="100" y="320" width="520" height="60" fill="#e3f2fd" stroke="#302b63" stroke-width="1.5" rx="8" />
    <text x="360" y="342" text-anchor="middle" class="lsp-label" fill="#302b63">✅ Both Rectangle & Square are Shapes → substitutable</text>
    <text x="360" y="362" class="lsp-method" font-size="12" fill="#302b63">printArea(Shape s) — works for both without breaking</text>
  </svg>`;
}
export function svgISP() {
  return `<svg viewBox="0 0 740 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .isp-fat { fill: #fff3e0; stroke: #e65100; stroke-width: 2; rx: 12; }
        .isp-slim { fill: #e8f5e9; stroke: #2e7d32; stroke-width: 2; rx: 12; }
        .isp-title { font-weight: 700; font-size: 14px; font-family: Segoe UI, sans-serif; }
        .isp-method { font-size: 11px; font-family: monospace; }
        .isp-divider { stroke: #ccc; stroke-width: 1; }
        .isp-label { fill: #e94560; font-weight: 600; font-size: 11px; font-family: Segoe UI, sans-serif; }
        .isp-arrow { stroke: #e94560; stroke-width: 2; marker-end: url(#arrowISP); fill: none; }
      </style>
      <marker id="arrowISP" markerWidth="12" markerHeight="8" refX="12" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="#e94560" />
      </marker>
    </defs>
    <rect x="20" y="20" width="220" height="180" class="isp-fat" />
    <text x="130" y="44" text-anchor="middle" class="isp-title" fill="#e65100">❌ WorkerAllInOne (Fat)</text>
    <line x1="30" y1="56" x2="230" y2="56" class="isp-divider" />
    <text x="40" y="80" class="isp-method">+ code()</text>
    <text x="40" y="100" class="isp-method">+ test()</text>
    <text x="40" y="120" class="isp-method">+ designUI()</text>
    <text x="40" y="140" class="isp-method" fill="#d32f2f">+ leadTeam()</text>
    <text x="40" y="160" class="isp-method" fill="#d32f2f">+ writeDocs()</text>
    <rect x="280" y="40" width="80" height="100" class="isp-fat" />
    <text x="320" y="62" text-anchor="middle" class="isp-title" fill="#d32f2f">Developer<br/>implements</text>
    <rect x="280" y="180" width="80" height="100" class="isp-fat" />
    <text x="320" y="202" text-anchor="middle" class="isp-title" fill="#6a1b9a">TechLead<br/>implements</text>
    <text x="40" y="215" class="isp-label" font-size="11">❌ forced empty implementations</text>

    <rect x="420" y="20" width="100" height="80" class="isp-slim" />
    <text x="470" y="44" text-anchor="middle" class="isp-title" fill="#2e7d32">Coder</text>
    <line x1="430" y1="56" x2="510" y2="56" class="isp-divider" />
    <text x="440" y="78" class="isp-method" font-style="italic">+ code()</text>
    <rect x="540" y="20" width="100" height="80" class="isp-slim" />
    <text x="590" y="44" text-anchor="middle" class="isp-title" fill="#2e7d32">Tester</text>
    <line x1="550" y1="56" x2="630" y2="56" class="isp-divider" />
    <text x="560" y="78" class="isp-method" font-style="italic">+ test()</text>
    <rect x="420" y="120" width="100" height="80" class="isp-slim" />
    <text x="470" y="144" text-anchor="middle" class="isp-title" fill="#2e7d32">Designer</text>
    <line x1="430" y1="156" x2="510" y2="156" class="isp-divider" />
    <text x="440" y="178" class="isp-method" font-style="italic">+ designUI()</text>
    <rect x="540" y="120" width="100" height="80" class="isp-slim" />
    <text x="590" y="144" text-anchor="middle" class="isp-title" fill="#2e7d32">Leader</text>
    <line x1="550" y1="156" x2="630" y2="156" class="isp-divider" />
    <text x="560" y="178" class="isp-method" font-style="italic">+ leadTeam()</text>

    <rect x="680" y="50" width="40" height="200" fill="none" stroke="#e94560" stroke-width="2" stroke-dasharray="6,4" />
    <polygon points="700,45 715,55 700,65" fill="#e94560" />
    <text x="690" y="30" class="isp-label" font-size="10" fill="#e94560">implements</text>
    <rect x="740" y="30" width="100" height="140" class="isp-slim" />
    <text x="790" y="50" text-anchor="middle" class="isp-title" fill="#2e7d32">Developer</text>
    <line x1="750" y1="62" x2="830" y2="62" class="isp-divider" />
    <text x="760" y="84" class="isp-method" font-size="10">+ code</text>
    <line x1="790" y1="100" x2="830" y2="100" stroke="#e94560" stroke-width="1" marker-end="url(#arrowISP)" />
    <rect x="740" y="180" width="100" height="80" class="isp-slim" />
    <text x="790" y="202" text-anchor="middle" class="isp-title" fill="#2e7d32">Manager</text>
    <line x1="750" y1="212" x2="830" y2="212" class="isp-divider" />
    <text x="760" y="234" class="isp-method" font-size="10">+ lead, docs</text>

    <rect x="420" y="320" width="400" height="60" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5" rx="8" />
    <text x="620" y="342" text-anchor="middle" class="isp-title" fill="#2e7d32">✅ Slim interfaces → no empty method implementations</text>
    <text x="620" y="362" class="isp-label" font-size="11">Developer implements only Coder/Tester/Designer</text>
  </svg>`;
}
export function svgDIP() {
  return `<svg viewBox="0 0 740 380" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .dip-abstraction { fill: #f8f9fc; stroke: #302b63; stroke-width: 2; rx: 12; }
        .dip-concrete { fill: #fff9e6; stroke: #f9a825; stroke-width: 2; rx: 12; }
        .dip-bad { fill: #fff5f5; stroke: #d32f2f; stroke-width: 2; rx: 12; }
        .dip-title { font-weight: 700; font-size: 14px; font-family: Segoe UI, sans-serif; }
        .dip-method { font-size: 11px; font-family: monospace; }
        .dip-divider { stroke: #ccc; stroke-width: 1; }
        .dip-label { fill: #e94560; font-weight: 600; font-size: 11px; font-family: Segoe UI, sans-serif; }
        .dip-arrow { stroke: #00695c; stroke-width: 2.5; fill: none; marker-end: url(#arrowDIP); }
      </style>
      <marker id="arrowDIP" markerWidth="12" markerHeight="8" refX="12" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="#00695c" />
      </marker>
    </defs>
    <rect x="20" y="20" width="200" height="110" class="dip-bad" />
    <text x="120" y="44" text-anchor="middle" class="dip-title" fill="#d32f2f">❌ OrderService (BAD)</text>
    <line x1="30" y1="56" x2="210" y2="56" class="dip-divider" />
    <text x="40" y="80" class="dip-method" fill="#d32f2f">private MySQLDatabase db =</text>
    <text x="40" y="100" class="dip-method" fill="#d32f2f">new MySQLDatabase();  ← direct</text>
    <rect x="40" y="120" width="150" height="70" class="dip-bad" />
    <text x="115" y="140" text-anchor="middle" class="dip-title" fill="#1565c0">MySQLDatabase</text>
    <line x1="50" y1="152" x2="170" y2="152" class="dip-divider" />
    <text x="60" y="170" class="dip-method" font-size="10">+ save()</text>
    <line x1="120" y1="115" x2="120" y2="120" stroke="#d32f2f" stroke-width="2" stroke-dasharray="4,3" />
    <text x="135" y="108" class="dip-label" fill="#d32f2f">new / direct depend</text>

    <rect x="280" y="30" width="90" height="100" class="dip-abstraction" />
    <text x="325" y="55" text-anchor="middle" class="dip-title">Database</text>
    <line x1="290" y1="66" x2="360" y2="66" class="dip-divider" />
    <text x="300" y="88" class="dip-method" font-style="italic">+ save()</text>

    <rect x="420" y="30" width="110" height="80" class="dip-concrete" />
    <text x="475" y="52" text-anchor="middle" class="dip-title" fill="#e65100">MySQLDatabase</text>
    <rect x="420" y="120" width="110" height="80" class="dip-concrete" />
    <text x="475" y="142" text-anchor="middle" class="dip-title" fill="#e65100">PostgresDatabase</text>
    <line x1="335" y1="80" x2="375" y2="50" class="dip-arrow" />
    <line x1="335" y1="80" x2="375" y2="140" class="dip-arrow" />
    <text x="345" y="45" class="dip-label">implements</text>
    <text x="345" y="160" class="dip-label">implements</text>

    <rect x="60" y="240" width="150" height="110" class="dip-concrete" />
    <text x="135" y="262" text-anchor="middle" class="dip-title" fill="#e65100">OrderService (GOOD)</text>
    <line x1="70" y1="276" x2="200" y2="276" class="dip-divider" />
    <text x="80" y="300" class="dip-method">private Database db;</text>
    <text x="80" y="320" class="dip-method">  (abstraction!)</text>
    <line x1="135" y1="235" x2="135" y2="240" class="dip-arrow" />
    <text x="80" y="230" class="dip-label">depends on</text>

    <rect x="260" y="240" width="200" height="110" class="dip-abstraction" />
    <text x="360" y="262" text-anchor="middle" class="dip-title">MySQLDatabase</text>
    <line x1="270" y1="276" x2="450" y2="276" class="dip-divider" />
    <text x="280" y="300" class="dip-method">public MySQLDatabase()</text>
    <text x="280" y="320" class="dip-method">+ save()</text>
    <line x1="135" y1="300" x2="260" y2="290" class="dip-arrow" />
    <text x="200" y="295" class="dip-label">injected constructor</text>

    <rect x="260" y="30" width="200" height="110" class="dip-abstraction" />
    <text x="360" y="52" text-anchor="middle" class="dip-title">OrderService (GOOD)</text>
    <line x1="270" y1="66" x2="450" y2="66" class="dip-divider" />
    <text x="280" y="90" class="dip-method">private Database db;</text>

    <rect x="500" y="180" width="220" height="80" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5" rx="8" />
    <text x="610" y="205" text-anchor="middle" class="dip-label" fill="#2e7d32">✅ Depends on ABSTRACTION (interface)</text>
    <text x="610" y="225" class="dip-method" font-size="11" fill="#2e7d32">Swap MySQL → Postgres: no OrderService change</text>
    </svg>`;
}

