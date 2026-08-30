// ===== UML Diagram SVG generators =====
export function svgClassDiagram() {
  return `<svg viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="umlArrInh" markerWidth="12" markerHeight="12" refX="2" refY="6" orient="auto">
        <polygon points="0 0, 12 6, 0 12" fill="white" stroke="#1565c0" stroke-width="1.5" />
      </marker>
      <marker id="umlArrComp" markerWidth="14" markerHeight="12" refX="2" refY="6" orient="auto">
        <polygon points="0 0, 10 0, 10 12, 0 12" fill="#2e7d32" />
      </marker>
    </defs>
    <rect x="40" y="40" width="200" height="140" fill="#fff8e1" stroke="#f57c00" stroke-width="2" rx="10" />
    <text x="140" y="60" text-anchor="middle" font-weight="700" font-size="13" font-family="Segoe UI,sans-serif">Employee</text>
    <line x1="50" y1="72" x2="230" y2="72" stroke="#ccc" />
    <text x="55" y="92" font-size="11" font-family="monospace">- name : String</text>
    <text x="55" y="110" font-size="11" font-family="monospace">- id : int</text>
    <text x="55" y="128" font-size="11" font-family="monospace">- salary : double</text>
    <line x1="50" y1="140" x2="230" y2="140" stroke="#ccc" />
    <text x="55" y="158" font-size="11" font-family="monospace">+ getSalary() : double</text>
    <text x="55" y="174" font-size="11" font-family="monospace">+ setName(n: String)</text>
    <rect x="340" y="40" width="200" height="140" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="10" />
    <text x="440" y="60" text-anchor="middle" font-weight="700" font-size="13" font-family="Segoe UI,sans-serif" fill="#1565c0">Manager</text>
    <line x1="350" y1="72" x2="530" y2="72" stroke="#ccc" />
    <text x="355" y="92" font-size="11" font-family="monospace">- team : List&lt;Employee&gt;</text>
    <text x="355" y="110" font-size="11" font-family="monospace">- bonus : double</text>
    <line x1="350" y1="122" x2="530" y2="122" stroke="#ccc" />
    <text x="355" y="140" font-size="11" font-family="monospace">+ manageTeam()</text>
    <text x="355" y="158" font-size="11" font-family="monospace">+ approveLeave()</text>
    <line x1="340" y1="110" x2="240" y2="110" stroke="#1565c0" stroke-width="2" marker-end="url(#umlArrInh)" />
    <text x="248" y="100" font-size="11" font-weight="600" fill="#1565c0" font-family="Segoe UI,sans-serif">? extends</text>
    <rect x="40" y="240" width="220" height="120" fill="#f8f9fc" stroke="#302b63" stroke-width="2" rx="10" />
    <text x="150" y="260" text-anchor="middle" font-weight="700" font-size="13" font-family="Segoe UI,sans-serif">Department</text>
    <line x1="50" y1="272" x2="250" y2="272" stroke="#ccc" />
    <text x="55" y="292" font-size="11" font-family="monospace">- name : String</text>
    <text x="55" y="310" font-size="11" font-family="monospace">- employees : List&lt;Employee&gt;</text>
    <line x1="50" y1="322" x2="250" y2="322" stroke="#ccc" />
    <text x="55" y="342" font-size="11" font-family="monospace">+ addEmployee(e)</text>
    <text x="55" y="358" font-size="11" font-family="monospace">+ listEmployees()</text>
    <line x1="150" y1="240" x2="140" y2="180" stroke="#2e7d32" stroke-width="2" marker-end="url(#umlArrComp)" />
    <text x="60" y="220" font-size="11" font-weight="600" fill="#2e7d32" font-family="Segoe UI,sans-serif">? contains 1..*</text>
    <rect x="320" y="240" width="400" height="130" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5" rx="8" />
    <text x="335" y="262" font-size="12" font-weight="700" fill="#1565c0" font-family="Segoe UI,sans-serif">?? Class Diagram Notation</text>
    <text x="335" y="285" font-size="11" font-family="monospace">+ public      - private      # protected</text>
    <text x="335" y="305" font-size="11" font-family="monospace">---&gt;   association</text>
    <text x="335" y="323" font-size="11" font-family="monospace">?   inheritance</text>
    <text x="335" y="341" font-size="11" font-family="monospace">?   composition  ?  aggregation</text>
    <text x="335" y="359" font-size="11" font-family="monospace">??   dependency (dashed)</text>
    <rect x="40" y="390" width="680" height="22" fill="#e8f5e9" />
    <text x="380" y="406" text-anchor="middle" font-size="12" font-weight="700" fill="#2e7d32" font-family="Segoe UI,sans-serif">Static view: classes + attributes + methods + relationships</text>
  </svg>`;
}
export function svgSequenceDiagram() {
  return `<svg viewBox="0 0 780 460" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="seqArr" markerWidth="10" markerHeight="8" refX="10" refY="4" orient="auto">
        <polygon points="0 0, 10 4, 0 8" fill="#1565c0" />
      </marker>
      <marker id="seqArrRet" markerWidth="10" markerHeight="8" refX="10" refY="4" orient="auto">
        <polygon points="0 0, 10 4, 0 8" fill="#2e7d32" />
      </marker>
    </defs>
    <rect x="40"  y="20" width="120" height="36" fill="#f8f9fc" stroke="#302b63" stroke-width="2" rx="10" />
    <text x="100" y="42" text-anchor="middle" font-weight="700" font-size="12" font-family="Segoe UI,sans-serif">:User</text>
    <line x1="100" y1="56" x2="100" y2="440" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4" />
    <rect x="220" y="20" width="140" height="36" fill="#f8f9fc" stroke="#302b63" stroke-width="2" rx="10" />
    <text x="290" y="42" text-anchor="middle" font-weight="700" font-size="12" font-family="Segoe UI,sans-serif">:OrderService</text>
    <line x1="290" y1="56" x2="290" y2="440" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4" />
    <rect x="420" y="20" width="150" height="36" fill="#f8f9fc" stroke="#302b63" stroke-width="2" rx="10" />
    <text x="495" y="42" text-anchor="middle" font-weight="700" font-size="12" font-family="Segoe UI,sans-serif">:PaymentGateway</text>
    <line x1="495" y1="56" x2="495" y2="440" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4" />
    <rect x="620" y="20" width="140" height="36" fill="#f8f9fc" stroke="#302b63" stroke-width="2" rx="10" />
    <text x="690" y="42" text-anchor="middle" font-weight="700" font-size="12" font-family="Segoe UI,sans-serif">:OrderRepo</text>
    <line x1="690" y1="56" x2="690" y2="440" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4" />
    <rect x="285" y="80"  width="10" height="160" fill="#fff3e0" stroke="#e65100" stroke-width="1" />
    <rect x="490" y="120" width="10" height="80"  fill="#fff3e0" stroke="#e65100" stroke-width="1" />
    <rect x="685" y="220" width="10" height="60"  fill="#fff3e0" stroke="#e65100" stroke-width="1" />
    <line x1="100" y1="80" x2="285" y2="80" stroke="#1565c0" stroke-width="2" marker-end="url(#seqArr)" />
    <text x="110" y="74" font-size="10" font-family="monospace">1: placeOrder(order)</text>
    <line x1="290" y1="120" x2="490" y2="120" stroke="#1565c0" stroke-width="2" marker-end="url(#seqArr)" />
    <text x="295" y="114" font-size="10" font-family="monospace">2: processPayment(amount)</text>
    <line x1="495" y1="170" x2="290" y2="170" stroke="#2e7d32" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#seqArrRet)" />
    <text x="305" y="164" font-size="10" font-family="monospace">3: paymentOk</text>
    <line x1="290" y1="220" x2="685" y2="220" stroke="#1565c0" stroke-width="2" marker-end="url(#seqArr)" />
    <text x="300" y="214" font-size="10" font-family="monospace">4: save(order)</text>
    <line x1="690" y1="260" x2="290" y2="260" stroke="#2e7d32" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#seqArrRet)" />
    <text x="300" y="254" font-size="10" font-family="monospace">5: orderSaved</text>
    <line x1="290" y1="300" x2="100" y2="300" stroke="#1565c0" stroke-width="2" marker-end="url(#seqArr)" />
    <text x="110" y="294" font-size="10" font-family="monospace">6: confirm()</text>
    <rect x="40" y="350" width="720" height="80" fill="#fff8e1" stroke="#f57c00" stroke-width="1.5" rx="8" />
    <text x="60" y="372" font-size="12" font-weight="700" fill="#e65100" font-family="Segoe UI,sans-serif">?? Sequence Diagram � how to read</text>
    <text x="60" y="392" font-size="11" font-family="monospace">- top-to-bottom = time order    - - - - lifelines (dashed)</text>
    <text x="60" y="408" font-size="11" font-family="monospace">? activations (focus of control) ? call    ? return (dashed)</text>
    <text x="60" y="424" font-size="11" font-family="monospace">numbers (1,2,3...) indicate message ordering</text>
  </svg>`;
}
export function svgUseCaseDiagram() {
  return `<svg viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg">
    <rect x="200" y="40" width="500" height="340" fill="#f8f9fc" stroke="#302b63" stroke-width="2" rx="14" />
    <text x="450" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="#302b63" font-family="Segoe UI,sans-serif">Online Shopping System</text>
    <circle cx="80" cy="170" r="14" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" />
    <line x1="80" y1="184" x2="80" y2="220" stroke="#1565c0" stroke-width="2" />
    <line x1="64" y1="198" x2="96" y2="198" stroke="#1565c0" stroke-width="2" />
    <line x1="80" y1="220" x2="64" y2="248" stroke="#1565c0" stroke-width="2" />
    <line x1="80" y1="220" x2="96" y2="248" stroke="#1565c0" stroke-width="2" />
    <text x="80" y="270" text-anchor="middle" font-size="11" font-weight="600" font-family="Segoe UI,sans-serif">Customer</text>
    <circle cx="700" cy="170" r="14" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="2" />
    <line x1="700" y1="184" x2="700" y2="220" stroke="#6a1b9a" stroke-width="2" />
    <line x1="684" y1="198" x2="716" y2="198" stroke="#6a1b9a" stroke-width="2" />
    <line x1="700" y1="220" x2="684" y2="248" stroke="#6a1b9a" stroke-width="2" />
    <line x1="700" y1="220" x2="716" y2="248" stroke="#6a1b9a" stroke-width="2" />
    <text x="700" y="270" text-anchor="middle" font-size="11" font-weight="600" font-family="Segoe UI,sans-serif">Admin</text>
    <ellipse cx="320" cy="120" rx="80" ry="22" fill="#fff3e0" stroke="#e65100" stroke-width="2" />
    <text x="320" y="125" text-anchor="middle" font-size="12" font-weight="600" font-family="Segoe UI,sans-serif">Browse Products</text>
    <ellipse cx="320" cy="190" rx="80" ry="22" fill="#fff3e0" stroke="#e65100" stroke-width="2" />
    <text x="320" y="195" text-anchor="middle" font-size="12" font-weight="600" font-family="Segoe UI,sans-serif">Place Order</text>
    <ellipse cx="320" cy="260" rx="80" ry="22" fill="#fff3e0" stroke="#e65100" stroke-width="2" />
    <text x="320" y="265" text-anchor="middle" font-size="12" font-weight="600" font-family="Segoe UI,sans-serif">Make Payment</text>
    <ellipse cx="320" cy="330" rx="80" ry="22" fill="#fff3e0" stroke="#e65100" stroke-width="2" />
    <text x="320" y="335" text-anchor="middle" font-size="12" font-weight="600" font-family="Segoe UI,sans-serif">Track Order</text>
    <ellipse cx="560" cy="150" rx="80" ry="22" fill="#fff3e0" stroke="#e65100" stroke-width="2" />
    <text x="560" y="155" text-anchor="middle" font-size="12" font-weight="600" font-family="Segoe UI,sans-serif">Manage Products</text>
    <ellipse cx="560" cy="240" rx="80" ry="22" fill="#fff3e0" stroke="#e65100" stroke-width="2" />
    <text x="560" y="245" text-anchor="middle" font-size="12" font-weight="600" font-family="Segoe UI,sans-serif">View Reports</text>
    <ellipse cx="560" cy="330" rx="80" ry="22" fill="#fff3e0" stroke="#e65100" stroke-width="2" />
    <text x="560" y="335" text-anchor="middle" font-size="12" font-weight="600" font-family="Segoe UI,sans-serif">Manage Users</text>
    <line x1="98" y1="180" x2="240" y2="120" stroke="#302b63" stroke-width="1.5" />
    <line x1="98" y1="190" x2="240" y2="190" stroke="#302b63" stroke-width="1.5" />
    <line x1="98" y1="195" x2="240" y2="260" stroke="#302b63" stroke-width="1.5" />
    <line x1="98" y1="200" x2="240" y2="330" stroke="#302b63" stroke-width="1.5" />
    <line x1="685" y1="180" x2="640" y2="150" stroke="#302b63" stroke-width="1.5" />
    <line x1="685" y1="190" x2="640" y2="240" stroke="#302b63" stroke-width="1.5" />
    <line x1="685" y1="200" x2="640" y2="330" stroke="#302b63" stroke-width="1.5" />
    <rect x="320" y="395" width="260" height="20" fill="#e8f5e9" />
    <text x="450" y="410" text-anchor="middle" font-size="12" font-weight="700" fill="#2e7d32" font-family="Segoe UI,sans-serif">Actors ? Use Cases ? System boundary</text>
  </svg>`;
}

export function svgActivityDiagram() {
  return `<svg viewBox="0 0 760 480" xmlns="http://www.w3.org/2000/svg">
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#302b63" font-family="Segoe UI,sans-serif">Activity Diagram - Order Processing</text>
    <circle cx="100" cy="80" r="14" fill="#1b5e20" />
    <rect x="160" y="60"  width="160" height="40" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="14" />
    <text x="240" y="86" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="600" fill="#1a1a2e">Receive Order</text>
    <rect x="160" y="130" width="160" height="40" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="14" />
    <text x="240" y="156" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="600" fill="#1a1a2e">Validate Order</text>
    <rect x="160" y="200" width="160" height="40" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="14" />
    <text x="240" y="226" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="600" fill="#1a1a2e">Process Payment</text>
    <polygon points="430,80 480,30 530,80 480,130" fill="#fff3e0" stroke="#e65100" stroke-width="2" />
    <text x="480" y="86" text-anchor="middle" font-size="10" font-family="Segoe UI,sans-serif" font-weight="700" fill="#1a1a2e">Payment OK?</text>
    <rect x="600" y="60" width="140" height="40" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2" rx="14" />
    <text x="670" y="86" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="600" fill="#1a1a2e">Ship Order</text>
    <line x1="120" y1="80"  x2="160" y2="80"  stroke="#302b63" stroke-width="2" marker-end="url(#arrowAD)" />
    <line x1="240" y1="100" x2="240" y2="130" stroke="#302b63" stroke-width="2" marker-end="url(#arrowAD)" />
    <line x1="240" y1="170" x2="240" y2="200" stroke="#302b63" stroke-width="2" marker-end="url(#arrowAD)" />
    <line x1="320" y1="80"  x2="430" y2="80"  stroke="#302b63" stroke-width="2" marker-end="url(#arrowAD)" />
    <line x1="530" y1="80"  x2="600" y2="80"  stroke="#302b63" stroke-width="2" marker-end="url(#arrowAD)" />
    <line x1="480" y1="130" x2="480" y2="200" stroke="#b71c1c" stroke-width="2" marker-end="url(#arrowAD)" stroke-dasharray="4,3" />
    <text x="490" y="170" font-size="11" font-family="Segoe UI,sans-serif" font-weight="700" fill="#b71c1c">[no] - fail</text>
    <defs><marker id="arrowAD" markerWidth="12" markerHeight="8" refX="12" refY="4" orient="auto"><polygon points="0 0, 12 4, 0 8" fill="#302b63" /></marker></defs>
    <text x="380" y="160" text-anchor="middle" font-size="12" font-weight="700" fill="#2e7d32" font-family="Segoe UI,sans-serif">Workflow: start - actions - decision - branches - end</text>
  </svg>`;
}
export function svgStateMachineDiagram() {
  return `<svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg">
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#302b63" font-family="Segoe UI,sans-serif">State Machine - Order Lifecycle</text>
    <circle cx="60" cy="200" r="14" fill="#1b5e20" />
    <rect x="120" y="180" width="110" height="44" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="22" />
    <text x="175" y="207" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="700" fill="#1a1a2e">Placed</text>
    <rect x="280" y="100" width="110" height="44" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="22" />
    <text x="335" y="127" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="700" fill="#1a1a2e">Paid</text>
    <rect x="280" y="180" width="110" height="44" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="22" />
    <text x="335" y="207" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="700" fill="#1a1a2e">Packed</text>
    <rect x="280" y="260" width="110" height="44" fill="#fff3e0" stroke="#e65100" stroke-width="2" rx="22" />
    <text x="335" y="287" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="700" fill="#1a1a2e">Cancelled</text>
    <rect x="440" y="180" width="110" height="44" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="22" />
    <text x="495" y="207" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="700" fill="#1a1a2e">Shipped</text>
    <rect x="600" y="180" width="110" height="44" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2" rx="22" />
    <text x="655" y="207" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="700" fill="#1a1a2e">Delivered</text>
    <defs>
      <marker id="arrowSM" markerWidth="12" markerHeight="8" refX="12" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="#302b63" />
      </marker>
    </defs>
    <line x1="74" y1="200" x2="120" y2="202" stroke="#302b63" stroke-width="2" marker-end="url(#arrowSM)" />
    <line x1="230" y1="195" x2="280" y2="125" stroke="#302b63" stroke-width="2" marker-end="url(#arrowSM)" />
    <text x="245" y="160" font-size="10" font-family="Segoe UI,sans-serif" font-weight="600" fill="#b71c1c">pay()</text>
    <line x1="335" y1="144" x2="335" y2="180" stroke="#302b63" stroke-width="2" marker-end="url(#arrowSM)" />
    <text x="345" y="166" font-size="10" font-family="Segoe UI,sans-serif" font-weight="600" fill="#b71c1c">pack()</text>
    <line x1="390" y1="202" x2="440" y2="202" stroke="#302b63" stroke-width="2" marker-end="url(#arrowSM)" />
    <text x="402" y="196" font-size="10" font-family="Segoe UI,sans-serif" font-weight="600" fill="#b71c1c">ship()</text>
    <line x1="550" y1="202" x2="600" y2="202" stroke="#302b63" stroke-width="2" marker-end="url(#arrowSM)" />
    <text x="562" y="196" font-size="10" font-family="Segoe UI,sans-serif" font-weight="600" fill="#b71c1c">deliver()</text>
    <line x1="230" y1="218" x2="280" y2="278" stroke="#b71c1c" stroke-width="2" marker-end="url(#arrowSM)" stroke-dasharray="4,3" />
    <text x="240" y="258" font-size="10" font-family="Segoe UI,sans-serif" font-weight="600" fill="#b71c1c">cancel()</text>
    <text x="380" y="345" text-anchor="middle" font-size="12" font-weight="700" fill="#2e7d32" font-family="Segoe UI,sans-serif">States + transitions triggered by events</text>
  </svg>`;
}

export function svgComponentDiagram() {
  return `<svg viewBox="0 0 780 360" xmlns="http://www.w3.org/2000/svg">
    <text x="390" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#302b63" font-family="Segoe UI,sans-serif">Component Diagram - E-commerce</text>
    <circle cx="80" cy="100" r="8" fill="#e65100" />
    <line x1="88" y1="100" x2="180" y2="100" stroke="#e65100" stroke-width="2" />
    <text x="40" y="105" font-size="10" font-family="Segoe UI,sans-serif" font-weight="600" fill="#e65100">UserService</text>
    <circle cx="80" cy="180" r="8" fill="#e65100" />
    <line x1="88" y1="180" x2="180" y2="180" stroke="#e65100" stroke-width="2" />
    <text x="40" y="185" font-size="10" font-family="Segoe UI,sans-serif" font-weight="600" fill="#e65100">OrderService</text>
    <rect x="180" y="80"  width="160" height="44" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="2" rx="8" />
    <text x="260" y="107" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="700" fill="#1a1a2e">UserComponent</text>
    <rect x="180" y="160" width="160" height="44" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="2" rx="8" />
    <text x="260" y="187" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="700" fill="#1a1a2e">OrderComponent</text>
    <rect x="420" y="160" width="160" height="44" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="2" rx="8" />
    <text x="500" y="187" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="700" fill="#1a1a2e">PaymentComponent</text>
    <rect x="420" y="80"  width="160" height="44" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="2" rx="8" />
    <text x="500" y="107" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="700" fill="#1a1a2e">NotificationComponent</text>
    <defs>
      <marker id="arrowCD" markerWidth="12" markerHeight="8" refX="12" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="#302b63" />
      </marker>
    </defs>
    <line x1="340" y1="180" x2="420" y2="180" stroke="#302b63" stroke-width="2" marker-end="url(#arrowCD)" />
    <text x="362" y="172" font-size="9" font-family="Segoe UI,sans-serif" font-weight="600" fill="#302b63">uses</text>
    <line x1="340" y1="200" x2="500" y2="124" stroke="#302b63" stroke-width="2" marker-end="url(#arrowCD)" />
    <text x="400" y="160" font-size="9" font-family="Segoe UI,sans-serif" font-weight="600" fill="#302b63">notify</text>
    <text x="390" y="320" text-anchor="middle" font-size="12" font-weight="700" fill="#2e7d32" font-family="Segoe UI,sans-serif">Components connected through provided/required interfaces</text>
  </svg>`;
}

export function svgDeploymentDiagram() {
  return `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
    <text x="400" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#302b63" font-family="Segoe UI,sans-serif">Deployment Diagram - 3-tier Web Architecture</text>
    <rect x="40" y="100" width="140" height="60" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="8" />
    <text x="110" y="135" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="700" fill="#1a1a2e">Client Browser</text>
    <rect x="240" y="80"  width="200" height="100" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="8" />
    <text x="340" y="108" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="700" fill="#1a1a2e">Web Server</text>
    <rect x="260" y="120" width="160" height="48" fill="#fff3e0" stroke="#e65100" stroke-width="1.5" rx="6" />
    <text x="340" y="150" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#1a1a2e">React SPA .jar</text>
    <rect x="240" y="220" width="200" height="100" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="8" />
    <text x="340" y="248" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="700" fill="#1a1a2e">App Server</text>
    <rect x="260" y="260" width="160" height="48" fill="#fff3e0" stroke="#e65100" stroke-width="1.5" rx="6" />
    <text x="340" y="290" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Spring Boot .war</text>
    <rect x="500" y="220" width="220" height="100" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="8" />
    <text x="610" y="248" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="700" fill="#1a1a2e">DB Server</text>
    <rect x="520" y="260" width="180" height="48" fill="#fff3e0" stroke="#e65100" stroke-width="1.5" rx="6" />
    <text x="610" y="290" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#1a1a2e">MySQL Cluster</text>
    <rect x="500" y="80" width="220" height="100" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="8" />
    <text x="610" y="108" text-anchor="middle" font-size="12" font-family="Segoe UI,sans-serif" font-weight="700" fill="#1a1a2e">Cache Server</text>
    <rect x="520" y="120" width="180" height="48" fill="#fff3e0" stroke="#e65100" stroke-width="1.5" rx="6" />
    <text x="610" y="150" text-anchor="middle" font-size="11" font-family="Segoe UI,sans-serif" fill="#1a1a2e">Redis .exe</text>
    <defs>
      <marker id="arrowDP" markerWidth="12" markerHeight="8" refX="12" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="#302b63" />
      </marker>
    </defs>
    <line x1="180" y1="130" x2="240" y2="130" stroke="#302b63" stroke-width="2" fill="none" marker-end="url(#arrowDP)" stroke-dasharray="4,3" />
    <line x1="340" y1="180" x2="340" y2="220" stroke="#302b63" stroke-width="2" fill="none" marker-end="url(#arrowDP)" stroke-dasharray="4,3" />
    <line x1="440" y1="270" x2="500" y2="270" stroke="#302b63" stroke-width="2" fill="none" marker-end="url(#arrowDP)" stroke-dasharray="4,3" />
    <line x1="440" y1="140" x2="500" y2="140" stroke="#302b63" stroke-width="2" fill="none" marker-end="url(#arrowDP)" stroke-dasharray="4,3" />
    <text x="400" y="380" text-anchor="middle" font-size="12" font-weight="700" fill="#2e7d32" font-family="Segoe UI,sans-serif">Nodes (servers) - Artifacts (deployable files) - Connections (protocols)</text>
  </svg>`;
}
export function svgPackageDiagram() {
  return `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
    <text x="400" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#302b63" font-family="Segoe UI,sans-serif">Package Diagram - Layered Architecture</text>
    <rect x="40" y="60" width="220" height="120" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="2" rx="8" />
    <text x="60" y="84" font-size="13" font-weight="700" fill="#6a1b9a" font-family="Segoe UI,sans-serif">Controllers</text>
    <rect x="60" y="100" width="180" height="32" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5" rx="6" />
    <text x="150" y="120" text-anchor="middle" font-size="10" font-family="monospace" fill="#1a1a2e">UserController</text>
    <rect x="60" y="138" width="180" height="32" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5" rx="6" />
    <text x="150" y="158" text-anchor="middle" font-size="10" font-family="monospace" fill="#1a1a2e">OrderController</text>
    <rect x="290" y="60" width="220" height="120" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="2" rx="8" />
    <text x="310" y="84" font-size="13" font-weight="700" fill="#6a1b9a" font-family="Segoe UI,sans-serif">Services</text>
    <rect x="310" y="100" width="180" height="32" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5" rx="6" />
    <text x="400" y="120" text-anchor="middle" font-size="10" font-family="monospace" fill="#1a1a2e">UserService</text>
    <rect x="310" y="138" width="180" height="32" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5" rx="6" />
    <text x="400" y="158" text-anchor="middle" font-size="10" font-family="monospace" fill="#1a1a2e">OrderService</text>
    <rect x="540" y="60" width="220" height="120" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="2" rx="8" />
    <text x="560" y="84" font-size="13" font-weight="700" fill="#6a1b9a" font-family="Segoe UI,sans-serif">Repositories</text>
    <rect x="560" y="100" width="180" height="32" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5" rx="6" />
    <text x="650" y="120" text-anchor="middle" font-size="10" font-family="monospace" fill="#1a1a2e">UserRepository</text>
    <rect x="560" y="138" width="180" height="32" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5" rx="6" />
    <text x="650" y="158" text-anchor="middle" font-size="10" font-family="monospace" fill="#1a1a2e">OrderRepository</text>
    <rect x="170" y="220" width="460" height="120" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="2" rx="8" />
    <text x="190" y="244" font-size="13" font-weight="700" fill="#6a1b9a" font-family="Segoe UI,sans-serif">Model</text>
    <rect x="190" y="260" width="200" height="32" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5" rx="6" />
    <text x="290" y="280" text-anchor="middle" font-size="10" font-family="monospace" fill="#1a1a2e">User</text>
    <rect x="410" y="260" width="200" height="32" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5" rx="6" />
    <text x="510" y="280" text-anchor="middle" font-size="10" font-family="monospace" fill="#1a1a2e">Order</text>
    <defs>
      <marker id="arrowPK" markerWidth="12" markerHeight="8" refX="12" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="#b71c1c" />
      </marker>
    </defs>
    <line x1="260" y1="116" x2="290" y2="116" stroke="#b71c1c" stroke-width="2" fill="none" marker-end="url(#arrowPK)" />
    <line x1="260" y1="154" x2="290" y2="154" stroke="#b71c1c" stroke-width="2" fill="none" marker-end="url(#arrowPK)" />
    <line x1="510" y1="116" x2="540" y2="116" stroke="#b71c1c" stroke-width="2" fill="none" marker-end="url(#arrowPK)" />
    <line x1="510" y1="154" x2="540" y2="154" stroke="#b71c1c" stroke-width="2" fill="none" marker-end="url(#arrowPK)" />
    <line x1="400" y1="180" x2="290" y2="260" stroke="#b71c1c" stroke-width="2" fill="none" marker-end="url(#arrowPK)" />
    <line x1="430" y1="180" x2="510" y2="260" stroke="#b71c1c" stroke-width="2" fill="none" marker-end="url(#arrowPK)" />
    <text x="400" y="385" text-anchor="middle" font-size="12" font-weight="700" fill="#2e7d32" font-family="Segoe UI,sans-serif">Packages group related classes - show module dependencies</text>
  </svg>`;
}