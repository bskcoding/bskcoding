const fs = require('fs');
const path = 'c:/Users/USER/bskcoding/src/maang/system-design/cap/capDiagrams.js';
const header = `// ===== CAP Theorem — SVG Diagrams =====
// Each function returns an SVG string matching the page's theme.
// CAP = Consistency, Availability, Partition Tolerance (Brewer's theorem)
// You can pick at most 2 out of 3 in a distributed system.
// Follows same visual style as solidDiagrams.js, acid diagrams, oops diagrams.
`;
fs.writeFileSync(path, header);
console.log('Header written:', fs.statSync(path).size);
