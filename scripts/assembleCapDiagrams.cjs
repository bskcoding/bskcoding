const fs = require('fs');
const d = 'c:/Users/USER/bskcoding/src/maang/system-design/cap';
fs.mkdirSync(d, {recursive:true});

// Build capDiagrams.js by reading SVG content from txt files
const svg1 = fs.readFileSync(d + '/svg1.txt', 'utf8');
const svg2 = fs.readFileSync(d + '/svg2.txt', 'utf8');

const code = `// ===== CAP Theorem — SVG Diagrams =====
// Each function returns an SVG string matching the page's dark theme.

/**
 * CAP Theorem overview — the three pillars side by side.
 * Shows what C, A, and P each mean, with database examples.
 */
export function svgCAPOverview() {
  return \`${svg1}\`;
}

/**
 * CP vs AP tradeoff — what happens during a network partition.
 * Side-by-side comparison: CP refuses stale reads (returns error),
 * AP serves stale data (stays available).
 */
export function svgCPApTradeoff() {
  return \`${svg2}\`;
}
`;

fs.writeFileSync(d + '/capDiagrams.js', code);
console.log('capDiagrams.js assembled:', fs.statSync(d + '/capDiagrams.js').size, 'bytes');
