// ===== SOLID Principles — SVG Diagrams =====
// Each function returns an SVG string matching the page's theme.

export function svgSRP() {
  return `<svg viewBox="0 0 720 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .srp-box   { fill: #f8f9fc; stroke: #302b63; stroke-width: 2; rx: 12; }
        .srp-bad   { fill: #fff5f5; stroke: #d32f2f; stroke-width: 2; rx: 12; }
        .srp-title { font-weight: 700; font-size: 14px; font-family: Segoe UI, sans-serif; fill: #1a1a2e; }
        .srp-method{ font-size: 11px; font-family: monospace; fill: #1a1a2e; }
        .srp-divider { stroke: #ccc; stroke-width: 1; }
        .srp-label { fill: #e94560; font-weight: 600; font-size: 11px; font-family: Segoe UI, sans-serif; }
        .srp-good-label { fill: #2e7d32; font-weight: 700; font-size: 12px; font-family: Segoe UI, sans-serif; }
      </style>
    </defs>

    <!-- ❌ BAD: One class doing 3 jobs -->
    <rect x="20" y="20" width="240" height="160" class="srp-bad" />
    <text x="140" y="42" text-anchor="middle" class="srp-title" fill="#d32f2f">❌ SalaryManager (3 jobs)</text>
    <line x1="30" y1="54" x2="250" y2="54" class="srp-divider" />
    <text x="36" y="76" class="srp-method" fill="#d32f2f">+ calculateSalary()</text>
    <text x="36" y="98" class="srp-method" fill="#d32f2f">+ saveSalary()</text>
    <text x="36" y="120" class="srp-method" fill="#d32f2f">+ generateReport()</text>
    <text x="140" y="148" text-anchor="middle" class="srp-label">3 reasons to change!</text>

    <!-- ✅ GOOD: 3 single-responsibility classes -->
    <rect x="320" y="20"  width="170" height="110" class="srp-box" />
    <text x="405" y="42" text-anchor="middle" class="srp-title">SalaryService</text>
    <line x1="330" y1="54" x2="480" y2="54" class="srp-divider" />
    <text x="336" y="76" class="srp-method">+ calculateSalary()</text>
    <text x="405" y="100" text-anchor="middle" class="srp-label">→ 1 job</text>

    <rect x="510" y="20"  width="170" height="110" class="srp-box" />
    <text x="595" y="42" text-anchor="middle" class="srp-title">SalaryRepository</text>
    <line x1="520" y1="54" x2="670" y2="54" class="srp-divider" />
    <text x="526" y="76" class="srp-method">+ saveSalary()</text>
    <text x="595" y="100" text-anchor="middle" class="srp-label">→ 1 job</text>

    <rect x="415" y="160" width="170" height="110" class="srp-box" />
    <text x="500" y="182" text-anchor="middle" class="srp-title">SalaryReport</text>
    <line x1="425" y1="194" x2="575" y2="194" class="srp-divider" />
    <text x="431" y="216" class="srp-method">+ generateReport()</text>
    <text x="500" y="240" text-anchor="middle" class="srp-label">→ 1 job</text>

    <rect x="240" y="310" width="440" height="60" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5" rx="10" />
    <text x="460" y="334" text-anchor="middle" class="srp-good-label">✅ One class = one responsibility → one reason to change</text>
    <text x="460" y="354" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#2e7d32">Each class does ONE job. Easy to test, maintain, and reuse.</text>
  </svg>`;
}

export function svgOCP() {
  return `<svg viewBox="0 0 760 410" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .ocp-box   { fill: #f8f9fc; stroke: #302b63; stroke-width: 2; rx: 12; }
        .ocp-iface { fill: #fff8e1; stroke: #f57c00; stroke-width: 2; rx: 12; }
        .ocp-conc  { fill: #e3f2fd; stroke: #1565c0; stroke-width: 2; rx: 12; }
        .ocp-new   { fill: #e8f5e9; stroke: #2e7d32; stroke-width: 2.5; rx: 12; stroke-dasharray: 4,3; }
        .ocp-title { font-weight: 700; font-size: 13px; font-family: Segoe UI, sans-serif; fill: #1a1a2e; }
        .ocp-iface-title { font-style: italic; fill: #e65100; }
        .ocp-method{ font-size: 11px; font-family: monospace; fill: #1a1a2e; }
        .ocp-divider { stroke: #ccc; stroke-width: 1; }
        .ocp-label { fill: #e94560; font-weight: 600; font-size: 11px; font-family: Segoe UI, sans-serif; }
        .ocp-arrow { stroke: #00695c; stroke-width: 2.5; marker-end: url(#arrowOCP); }
        .ocp-arrow-new { stroke: #2e7d32; stroke-width: 2.5; marker-end: url(#arrowOCP); stroke-dasharray: 4,3; }
      </style>
      <marker id="arrowOCP" markerWidth="12" markerHeight="8" refX="12" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="#00695c" />
      </marker>
    </defs>

    <!-- Payment interface (abstraction) -->
    <rect x="290" y="20" width="170" height="100" class="ocp-iface" />
    <text x="375" y="44" text-anchor="middle" class="ocp-title ocp-iface-title">«interface» Payment</text>
    <line x1="300" y1="56" x2="450" y2="56" class="ocp-divider" />
    <text x="305" y="80" class="ocp-method" font-style="italic">+ pay()</text>
    <text x="305" y="100" class="ocp-label">⬅ abstraction</text>

    <!-- Existing payment types -->
    <rect x="40"  y="170" width="170" height="80" class="ocp-conc" />
    <text x="125" y="192" text-anchor="middle" class="ocp-title">PaypalPayment</text>
    <line x1="50" y1="204" x2="200" y2="204" class="ocp-divider" />
    <text x="60" y="226" class="ocp-method">+ pay() → "PayPal"</text>

    <rect x="290" y="170" width="170" height="80" class="ocp-conc" />
    <text x="375" y="192" text-anchor="middle" class="ocp-title">UPIPayment</text>
    <line x1="300" y1="204" x2="450" y2="204" class="ocp-divider" />
    <text x="310" y="226" class="ocp-method">+ pay() → "UPI"</text>

    <rect x="540" y="170" width="170" height="80" class="ocp-conc" />
    <text x="625" y="192" text-anchor="middle" class="ocp-title">CreditCardPayment</text>
    <line x1="550" y1="204" x2="700" y2="204" class="ocp-divider" />
    <text x="560" y="226" class="ocp-method">+ pay() → "Credit Card"</text>

    <!-- NEW payment (added without modifying existing) -->
    <rect x="290" y="290" width="170" height="80" class="ocp-new" />
    <text x="375" y="312" text-anchor="middle" class="ocp-title" fill="#2e7d32">CryptoPayment (NEW)</text>
    <line x1="300" y1="324" x2="450" y2="324" class="ocp-divider" />
    <text x="310" y="346" class="ocp-method">+ pay() → "Crypto"</text>

    <!-- Arrows: existing classes implement Payment -->
    <line x1="125" y1="170" x2="320" y2="120" class="ocp-arrow" />
    <line x1="375" y1="170" x2="375" y2="120" class="ocp-arrow" />
    <line x1="625" y1="170" x2="430" y2="120" class="ocp-arrow" />
    <text x="190" y="148" class="ocp-label" fill="#00695c">implements</text>
    <text x="385" y="148" class="ocp-label" fill="#00695c">implements</text>
    <text x="560" y="148" class="ocp-label" fill="#00695c">implements</text>

    <!-- Arrow: NEW class also implements Payment (no modification of existing) -->
    <line x1="375" y1="290" x2="375" y2="120" class="ocp-arrow-new" />
    <text x="385" y="270" class="ocp-label" fill="#2e7d32">implements (new)</text>

    <rect x="60" y="380" width="640" height="24" fill="#e8f5e9" />
    <text x="380" y="398" text-anchor="middle" font-size="12" font-weight="700" fill="#2e7d32" font-family="Segoe UI,sans-serif">
      ✅ Add CryptoPayment → no existing class modified (open for extension, closed for modification)
    </text>
  </svg>`;
}
export function svgLSP() {
  return `<svg viewBox="0 0 760 410" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .lsp-iface  { fill: #fff8e1; stroke: #f57c00; stroke-width: 2; rx: 12; }
        .lsp-box    { fill: #e3f2fd; stroke: #1565c0; stroke-width: 2; rx: 12; }
        .lsp-title  { font-weight: 700; font-size: 13px; font-family: Segoe UI, sans-serif; fill: #1a1a2e; }
        .lsp-iface-title { font-style: italic; fill: #e65100; }
        .lsp-method { font-size: 11px; font-family: monospace; fill: #1a1a2e; }
        .lsp-divider{ stroke: #ccc; stroke-width: 1; }
        .lsp-arrow  { stroke: #00695c; stroke-width: 2.5; marker-end: url(#arrowLSP); fill: none; }
        .lsp-label  { fill: #e94560; font-weight: 600; font-size: 11px; font-family: Segoe UI, sans-serif; }
        .lsp-good   { font-weight: 700; font-size: 12px; font-family: Segoe UI, sans-serif; }
      </style>
      <marker id="arrowLSP" markerWidth="12" markerHeight="8" refX="12" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="#00695c" />
      </marker>
    </defs>

    <!-- Parent: Payment interface -->
    <rect x="290" y="20" width="180" height="90" class="lsp-iface" />
    <text x="380" y="44" text-anchor="middle" class="lsp-title lsp-iface-title">«interface» Payment</text>
    <line x1="300" y1="56" x2="460" y2="56" class="lsp-divider" />
    <text x="305" y="78" class="lsp-method" font-style="italic">+ pay()</text>
    <text x="305" y="96" class="lsp-label">parent contract</text>

    <!-- Child: PaypalPayment -->
    <rect x="40" y="170" width="200" height="100" class="lsp-box" />
    <text x="140" y="192" text-anchor="middle" class="lsp-title">PaypalPayment</text>
    <line x1="50" y1="204" x2="230" y2="204" class="lsp-divider" />
    <text x="60" y="226" class="lsp-method">public void pay() {</text>
    <text x="60" y="244" class="lsp-method">  println("PayPal");</text>
    <text x="60" y="262" class="lsp-method">}</text>

    <!-- Child: UPIPayment -->
    <rect x="280" y="170" width="200" height="100" class="lsp-box" />
    <text x="380" y="192" text-anchor="middle" class="lsp-title">UPIPayment</text>
    <line x1="290" y1="204" x2="470" y2="204" class="lsp-divider" />
    <text x="300" y="226" class="lsp-method">public void pay() {</text>
    <text x="300" y="244" class="lsp-method">  println("UPI");</text>
    <text x="300" y="262" class="lsp-method">}</text>

    <!-- Child: CreditCardPayment -->
    <rect x="520" y="170" width="200" height="100" class="lsp-box" />
    <text x="620" y="192" text-anchor="middle" class="lsp-title">CreditCardPayment</text>
    <line x1="530" y1="204" x2="710" y2="204" class="lsp-divider" />
    <text x="540" y="226" class="lsp-method">public void pay() {</text>
    <text x="540" y="244" class="lsp-method">  println("Credit Card");</text>
    <text x="540" y="262" class="lsp-method">}</text>

    <!-- Inheritance arrows -->
    <line x1="140" y1="170" x2="335" y2="110" class="lsp-arrow" />
    <line x1="380" y1="170" x2="380" y2="110" class="lsp-arrow" />
    <line x1="620" y1="170" x2="425" y2="110" class="lsp-arrow" />
    <text x="200" y="148" class="lsp-label" fill="#00695c">implements</text>
    <text x="540" y="148" class="lsp-label" fill="#00695c">implements</text>

    <!-- Substitutability demo -->
    <rect x="40" y="295" width="680" height="95" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5" rx="10" />
    <text x="60" y="320" font-size="12" font-weight="700" fill="#6a1b9a" font-family="Segoe UI,sans-serif">
      Payment payment;     ← same parent type, different children
    </text>
    <text x="60" y="345" font-size="11" font-family="monospace" fill="#1a1a2e">
      payment = new PaypalPayment();      payment.pay();   // ✓
    </text>
    <text x="60" y="364" font-size="11" font-family="monospace" fill="#1a1a2e">
      payment = new UPIPayment();         payment.pay();   // ✓
    </text>
    <text x="60" y="383" font-size="11" font-family="monospace" fill="#1a1a2e">
      payment = new CreditCardPayment();  payment.pay();   // ✓
    </text>

    <text x="380" y="406" text-anchor="middle" class="lsp-good" fill="#2e7d32">
      ✅ Any child can substitute the parent — no broken behavior
    </text>
  </svg>`;
}
export function svgISP() {
  return `<svg viewBox="0 0 800 430" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .isp-fat   { fill: #fff3e0; stroke: #e65100; stroke-width: 2; rx: 12; }
        .isp-slim  { fill: #e8f5e9; stroke: #2e7d32; stroke-width: 2; rx: 12; }
        .isp-cust  { fill: #e3f2fd; stroke: #1565c0; stroke-width: 2; rx: 12; }
        .isp-admin { fill: #f3e5f5; stroke: #6a1b9a; stroke-width: 2; rx: 12; }
        .isp-title { font-weight: 700; font-size: 13px; font-family: Segoe UI, sans-serif; fill: #1a1a2e; }
        .isp-iface { font-style: italic; fill: #e65100; }
        .isp-method{ font-size: 11px; font-family: monospace; fill: #1a1a2e; }
        .isp-divider { stroke: #ccc; stroke-width: 1; }
        .isp-arrow { stroke: #e94560; stroke-width: 2; marker-end: url(#arrowISP); fill: none; }
        .isp-arrow-ok { stroke: #2e7d32; stroke-width: 2; marker-end: url(#arrowISPok); fill: none; }
        .isp-label { fill: #e94560; font-weight: 600; font-size: 11px; font-family: Segoe UI, sans-serif; }
        .isp-good-label { fill: #2e7d32; font-weight: 600; font-size: 11px; font-family: Segoe UI, sans-serif; }
      </style>
      <marker id="arrowISP" markerWidth="12" markerHeight="8" refX="12" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="#e94560" />
      </marker>
      <marker id="arrowISPok" markerWidth="12" markerHeight="8" refX="12" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="#2e7d32" />
      </marker>
    </defs>

    <!-- ❌ BAD: One fat interface (what we DON'T want) -->
    <rect x="20" y="20" width="200" height="170" class="isp-fat" />
    <text x="120" y="42" text-anchor="middle" class="isp-title isp-iface">❌ LoanAllInOne (Fat)</text>
    <line x1="30" y1="56" x2="210" y2="56" class="isp-divider" />
    <text x="40" y="78"  class="isp-method" font-style="italic">+ applyLoan()</text>
    <text x="40" y="100" class="isp-method" font-style="italic">+ checkLoanStatus()</text>
    <text x="40" y="122" class="isp-method" font-style="italic">+ cancelLoan()</text>
    <text x="40" y="144" class="isp-method" font-style="italic">+ repayLoan()</text>
    <text x="40" y="166" class="isp-method" font-style="italic">+ forecloseLoan()</text>
    <text x="120" y="186" text-anchor="middle" class="isp-label">5 methods in one</text>

    <!-- ✅ GOOD: 3 slim interfaces -->
    <rect x="270" y="20"  width="160" height="70" class="isp-slim" />
    <text x="350" y="42" text-anchor="middle" class="isp-title isp-iface" fill="#2e7d32">ApplyLoan</text>
    <line x1="280" y1="54" x2="420" y2="54" class="isp-divider" />
    <text x="285" y="76" class="isp-method" font-style="italic">+ applyLoan()</text>

    <rect x="450" y="20"  width="160" height="70" class="isp-slim" />
    <text x="530" y="42" text-anchor="middle" class="isp-title isp-iface" fill="#2e7d32">CheckLoanStatus</text>
    <line x1="460" y1="54" x2="600" y2="54" class="isp-divider" />
    <text x="465" y="76" class="isp-method" font-style="italic">+ checkLoanStatus()</text>

    <rect x="630" y="20"  width="160" height="70" class="isp-slim" />
    <text x="710" y="42" text-anchor="middle" class="isp-title isp-iface" fill="#2e7d32">CancelLoan</text>
    <line x1="640" y1="54" x2="780" y2="54" class="isp-divider" />
    <text x="645" y="76" class="isp-method" font-style="italic">+ cancelLoan()</text>

    <!-- ❌ Customer forced to implement fat interface -->
    <rect x="40" y="220" width="180" height="80" class="isp-cust" />
    <text x="130" y="242" text-anchor="middle" class="isp-title">Customer</text>
    <line x1="50" y1="254" x2="210" y2="254" class="isp-divider" />
    <text x="60" y="274" class="isp-method" fill="#d32f2f" font-size="10">cancelLoan() {}  // empty!</text>
    <text x="60" y="290" class="isp-method" fill="#d32f2f" font-size="10">repayLoan() {}   // empty!</text>
    <line x1="120" y1="190" x2="120" y2="220" class="isp-arrow" />

    <!-- ❌ Admin also forced -->
    <rect x="240" y="220" width="180" height="80" class="isp-cust" style="stroke:#6a1b9a;" />
    <text x="330" y="242" text-anchor="middle" class="isp-title" fill="#6a1b9a">Admin</text>
    <line x1="250" y1="254" x2="410" y2="254" class="isp-divider" />
    <text x="260" y="274" class="isp-method" fill="#d32f2f" font-size="10">forecloseLoan(){}  // empty!</text>
    <line x1="330" y1="190" x2="330" y2="220" class="isp-arrow" />

    <!-- ✅ Customer with slim interfaces (no empty methods) -->
    <rect x="450" y="220" width="160" height="80" class="isp-slim" style="fill:#e3f2fd;stroke:#1565c0;" />
    <text x="530" y="242" text-anchor="middle" class="isp-title">Customer</text>
    <line x1="460" y1="254" x2="600" y2="254" class="isp-divider" />
    <text x="465" y="274" class="isp-method">applyLoan()</text>
    <text x="465" y="290" class="isp-method">checkLoanStatus()</text>
    <line x1="350" y1="90" x2="510" y2="220" class="isp-arrow-ok" />
    <line x1="530" y1="90" x2="545" y2="220" class="isp-arrow-ok" />

    <!-- ✅ Admin with all 3 slim interfaces -->
    <rect x="630" y="220" width="160" height="80" class="isp-slim" style="fill:#f3e5f5;stroke:#6a1b9a;" />
    <text x="710" y="242" text-anchor="middle" class="isp-title" fill="#6a1b9a">Admin</text>
    <line x1="640" y1="254" x2="780" y2="254" class="isp-divider" />
    <text x="645" y="274" class="isp-method">applyLoan()</text>
    <text x="645" y="290" class="isp-method">checkLoanStatus()</text>
    <text x="710" y="306" text-anchor="middle" class="isp-method">+ cancelLoan()</text>
    <line x1="350" y1="90" x2="530" y2="220" class="isp-arrow-ok" />
    <line x1="530" y1="90" x2="565" y2="220" class="isp-arrow-ok" />
    <line x1="710" y1="90" x2="710" y2="220" class="isp-arrow-ok" />

    <rect x="20" y="330" width="770" height="80" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5" rx="10" />
    <text x="405" y="356" text-anchor="middle" font-size="13" font-weight="700" fill="#2e7d32" font-family="Segoe UI,sans-serif">
      ✅ Slim, role-based interfaces — no empty method implementations
    </text>
    <text x="405" y="378" text-anchor="middle" font-size="12" fill="#2e7d32" font-family="Segoe UI,sans-serif">
      Customer implements only what it needs (apply + check). Admin gets all 3 powers.
    </text>
    <text x="405" y="400" text-anchor="middle" font-size="11" fill="#d32f2f" font-family="Segoe UI,sans-serif">
      ❌ With the fat LoanAllInOne, both were forced to write empty methods.
    </text>
  </svg>`;
}
export function svgDIP() {
  return `<svg viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .dip-high     { fill: #f8f9fc; stroke: #302b63; stroke-width: 2; rx: 12; }
        .dip-abstr    { fill: #fff8e1; stroke: #f57c00; stroke-width: 2.5; rx: 12; }
        .dip-low      { fill: #e3f2fd; stroke: #1565c0; stroke-width: 2; rx: 12; }
        .dip-bad      { fill: #fff5f5; stroke: #d32f2f; stroke-width: 2; rx: 12; }
        .dip-title    { font-weight: 700; font-size: 13px; font-family: Segoe UI, sans-serif; fill: #1a1a2e; }
        .dip-iface    { font-style: italic; fill: #e65100; }
        .dip-method   { font-size: 11px; font-family: monospace; fill: #1a1a2e; }
        .dip-divider  { stroke: #ccc; stroke-width: 1; }
        .dip-label    { fill: #e94560; font-weight: 600; font-size: 11px; font-family: Segoe UI, sans-serif; }
        .dip-good     { fill: #2e7d32; font-weight: 600; font-size: 11px; font-family: Segoe UI, sans-serif; }
        .dip-arrow    { stroke: #00695c; stroke-width: 2.5; fill: none; marker-end: url(#arrowDIP); }
        .dip-arrow-bad{ stroke: #d32f2f; stroke-width: 2.5; fill: none; marker-end: url(#arrowDIPbad); stroke-dasharray: 5,3; }
        .dip-arrow-ok { stroke: #2e7d32; stroke-width: 2.5; fill: none; marker-end: url(#arrowDIPok); }
      </style>
      <marker id="arrowDIP" markerWidth="12" markerHeight="8" refX="12" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="#00695c" />
      </marker>
      <marker id="arrowDIPbad" markerWidth="12" markerHeight="8" refX="12" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="#d32f2f" />
      </marker>
      <marker id="arrowDIPok" markerWidth="12" markerHeight="8" refX="12" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="#2e7d32" />
      </marker>
    </defs>

    <!-- High-level service (top) -->
    <rect x="290" y="20" width="180" height="100" class="dip-high" />
    <text x="380" y="44" text-anchor="middle" class="dip-title">PaymentService (High-level)</text>
    <line x1="300" y1="56" x2="460" y2="56" class="dip-divider" />
    <text x="305" y="76" class="dip-method">private final Payment payment;</text>
    <text x="305" y="96" class="dip-method">PaymentService(Payment p) { this.payment = p; }</text>
    <text x="305" y="114" class="dip-method">public void makePayment() { payment.pay(); }</text>

    <!-- Abstraction (middle) -->
    <rect x="290" y="170" width="180" height="80" class="dip-abstr" />
    <text x="380" y="194" text-anchor="middle" class="dip-title dip-iface">«interface» Payment</text>
    <line x1="300" y1="206" x2="460" y2="206" class="dip-divider" />
    <text x="305" y="226" class="dip-method" font-style="italic">+ pay()</text>
    <text x="305" y="242" class="dip-good">⬅ ABSTRACTION</text>

    <!-- Low-level implementations (bottom) -->
    <rect x="120" y="300" width="180" height="80" class="dip-low" />
    <text x="210" y="322" text-anchor="middle" class="dip-title">PaypalPayment</text>
    <line x1="130" y1="334" x2="290" y2="334" class="dip-divider" />
    <text x="140" y="356" class="dip-method">public void pay() {</text>
    <text x="140" y="372" class="dip-method">  println("PayPal");</text>

    <rect x="320" y="300" width="180" height="80" class="dip-low" />
    <text x="410" y="322" text-anchor="middle" class="dip-title">UPIPayment</text>
    <line x1="330" y1="334" x2="490" y2="334" class="dip-divider" />
    <text x="340" y="356" class="dip-method">public void pay() {</text>
    <text x="340" y="372" class="dip-method">  println("UPI");</text>

    <rect x="520" y="300" width="180" height="80" class="dip-low" />
    <text x="610" y="322" text-anchor="middle" class="dip-title">CryptoPayment</text>
    <line x1="530" y1="334" x2="690" y2="334" class="dip-divider" />
    <text x="540" y="356" class="dip-method">public void pay() {</text>
    <text x="540" y="372" class="dip-method">  println("Crypto");</text>

    <!-- ❌ Bad: high-level depends on low-level DIRECTLY (dashed red) -->
    <line x1="380" y1="120" x2="210" y2="300" class="dip-arrow-bad" />
    <text x="195" y="220" class="dip-label" fill="#d32f2f">❌ direct = new PayPalPayment()</text>

    <!-- ✅ Good: high-level depends on abstraction -->
    <line x1="380" y1="120" x2="380" y2="170" class="dip-arrow-ok" />
    <text x="385" y="150" class="dip-good">depends on</text>

    <!-- Low-levels implement abstraction -->
    <line x1="210" y1="300" x2="335" y2="250" class="dip-arrow" />
    <line x1="410" y1="300" x2="380" y2="250" class="dip-arrow" />
    <line x1="610" y1="300" x2="425" y2="250" class="dip-arrow" />
    <text x="240" y="280" class="dip-good">implements</text>
    <text x="430" y="280" class="dip-good">implements</text>
    <text x="600" y="280" class="dip-good">implements</text>

    <rect x="20" y="395" width="720" height="22" fill="#e8f5e9" />
    <text x="380" y="412" text-anchor="middle" font-size="12" font-weight="700" fill="#2e7d32" font-family="Segoe UI,sans-serif">
      ✅ High-level depends on abstraction (Payment), NOT on concrete PayPal/UPI/Crypto — inject via constructor.
    </text>
  </svg>`;
}

