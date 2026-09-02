const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '_tcs-data.json'), 'utf8'));

// Group by round name
const roundMap = new Map();
data.forEach(([roundName, question, answer, code]) => {
  if (!roundMap.has(roundName)) roundMap.set(roundName, []);
  roundMap.get(roundName).push({ question, answer, code });
});

const rounds = [];
for (const [name, questions] of roundMap.entries()) {
  rounds.push({ name, questions });
}

const company = {
  id: "tcs",
  name: "TCS",
  interviews: [
    {
      name: "TCS",
      questionCount: data.length,
      rounds,
    },
  ],
  questionCount: data.length,
};

// Custom stringifier to match existing format
function stringify(obj, indent = 0) {
  const pad = '  '.repeat(indent);
  const pad2 = '  '.repeat(indent + 1);
  if (obj === null) return 'null';
  if (typeof obj === 'string') {
    return JSON.stringify(obj);
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj);
  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]';
    const items = obj.map(item => pad2 + stringify(item, indent + 1));
    return '[\n' + items.join(',\n') + '\n' + pad + ']';
  }
  if (typeof obj === 'object') {
    const entries = Object.entries(obj);
    if (entries.length === 0) return '{}';
    const lines = entries.map(([k, v]) => {
      let valStr;
      if (v === null) valStr = 'null';
      else if (typeof v === 'string') valStr = JSON.stringify(v);
      else valStr = stringify(v, indent + 1);
      return pad2 + JSON.stringify(k) + ': ' + valStr;
    });
    return '{\n' + lines.join(',\n') + '\n' + pad + '}';
  }
  return String(obj);
}

const header = `// AUTO-GENERATED file \u2014 company-wise interview data.
// Source: TCS interview document(s).
// Do not edit manually \u2014 regenerate with: node scripts/convert-company-interviews.cjs

export const company = `;
const out = header + stringify(company, 0) + ';\n';
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'companyInterviews', 'tcs', 'tcs.js'), out, 'utf8');
console.log('Wrote tcs.js with', data.length, 'questions across', rounds.length, 'rounds');
