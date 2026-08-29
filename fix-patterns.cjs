const fs = require("fs");
const f = "src/maang/system-design/patterns/designPatternsDiagrams.js";
const c = fs.readFileSync(f, "utf8").split("\n");
while (c.length > 0 && c[c.length - 1].trim() === "") c.pop();
if (c.length >= 2 && c[c.length - 1].trim() === "}" && c[c.length - 2].trim() === "}") {
  c.pop();
}
fs.writeFileSync(f, c.join("\n"));
console.log("trimmed; last line:", JSON.stringify(c[c.length - 1]));