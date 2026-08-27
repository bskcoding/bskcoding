// Quick verification harness for buildWeeklyPlan (run: node scripts/test-weekly-plan.mjs)
// Simulates: Week 1 (no previous week) and Week 2 (mix of prev + this).
const store = new Map();
globalThis.window = {
  localStorage: {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
  },
};

const { buildWeeklyPlan, seededPick } = await import(
  "../src/maang/basic-dsa/weeklyPlan.js"
);

function mondayOf(date) {
  const d = new Date(date);
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  d.setHours(0, 0, 0, 0);
  return d;
}

// Fake bank of 40 problems: Basic(0-9) Advanced(10-19) DP(20-29) Graphs(30-39)
const bank = Array.from({ length: 40 }, (_, i) => ({
  uid: `p${i}`,
  title: `Problem ${i}`,
  topic: i < 10 ? "Basic" : i < 20 ? "Advanced" : i < 30 ? "DP" : "Graphs",
}));

function weekWithStartOffset(weeksAgo, offset) {
  const base = mondayOf(new Date());
  base.setDate(base.getDate() - weeksAgo * 7);
  store.set("maang-wp-start-monday", String(base.getTime()));
  return buildWeeklyPlan(bank, offset);
}

let failures = 0;
function check(name, cond, detail = "") {
  if (cond) {
    console.log(`  ✅ ${name}`);
  } else {
    failures++;
    console.error(`  ❌ ${name} ${detail}`);
  }
}

// ---------- Week 1 (course started this week) ----------
console.log("\n=== WEEK 1 (no previous week) ===");
const w1 = weekWithStartOffset(0, 0);
check("weekNo is 1", w1.weekNo === 1);
check("cannot go to prev week", w1.canGoPrev === false);

const sun1 = w1.days.find((d) => d.key === "sun");
const thisWeeks10 = w1.days
  .filter((d) => d.type === "practice")
  .flatMap((d) => d.problems);
const sun1Titles = sun1.problems.map((p) => p.title);
const sun1Topics = sun1.problems.map((p) => p.topic);
console.log(`  Sunday problems: ${sun1Titles.join(", ")} [${sun1Topics.join(", ")}]`);
check(
  "both Sunday problems come from THIS week's 10",
  sun1.problems.every((p) => thisWeeks10.includes(p)),
  JSON.stringify(sun1Titles),
);
check(
  "NO Graph/unreached-topic question on Week 1 Sunday",
  sun1.problems.every((p) => p.topic === "Basic"),
  JSON.stringify(sun1Topics),
);
check(
  "the two Sunday problems are different",
  sun1.problems[0].uid !== sun1.problems[1].uid,
);
check("Sunday flagged as no-prev-week", sun1.hasPrevWeek === false);

// Determinism: same week ⇒ same plan
const w1again = weekWithStartOffset(0, 0);
check(
  "deterministic across re-builds",
  JSON.stringify(w1again.days.map((d) => d.problems.map((p) => p.uid))) ===
    JSON.stringify(w1.days.map((d) => d.problems.map((p) => p.uid))),
);

// ---------- Week 2 (has a previous week) ----------
console.log("\n=== WEEK 2 (has previous week) ===");
const w2 = weekWithStartOffset(1, 0);
check("weekNo is 2", w2.weekNo === 2);
check("can go to prev week", w2.canGoPrev === true);
const sun2 = w2.days.find((d) => d.key === "sun");
const w2prev10 = weekWithStartOffset(1, -1).days
  .filter((d) => d.type === "practice")
  .flatMap((d) => d.problems);
const w2cur10 = w2.days
  .filter((d) => d.type === "practice")
  .flatMap((d) => d.problems);
console.log(
  `  Sunday problems: ${sun2.problems.map((p) => p.title).join(", ")}`,
);
check(
  "1 Sunday problem from LAST week",
  w2prev10.some((p) => p.uid === sun2.problems[0].uid),
);
check(
  "1 Sunday problem from THIS week",
  w2cur10.some((p) => p.uid === sun2.problems[1].uid),
);
check("Sunday flagged as having prev week", sun2.hasPrevWeek === true);

// ---------- Wrap-around: final week's Sunday still mixes correctly ----------
console.log("\n=== WRAP-AROUND (near end of bank) ===");
const w4 = weekWithStartOffset(1, 2); // course week 3
const sun4 = w4.days.find((d) => d.key === "sun");
console.log(
  `  Week 3 Sunday problems: ${sun4.problems.map((p) => p.title).join(", ")}`,
);
check(
  "two distinct problems on later weeks",
  sun4.problems[0].uid !== sun4.problems[1].uid,
);

console.log(
  failures === 0
    ? "\n🎉 ALL CHECKS PASSED"
    : `\n💥 ${failures} CHECK(S) FAILED`,
);
process.exit(failures === 0 ? 0 : 1);