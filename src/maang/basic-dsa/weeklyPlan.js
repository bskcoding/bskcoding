// ===== Weekly DSA Preparation Planner (shared) ==========================
// Builds a deterministic 7-day study plan from any problem bank:
//   • Mon–Fri ..... learn 2 new problems per day, IN TRACK ORDER
//                   (no shuffling — Basic → Advanced → DP → Graphs,
//                    each sheet in its own numbering)
//   • Saturday .... assessment: 2 problems taken from THIS week's 10
//   • Sunday ...... assessment: 1 random from LAST week
//                             + 1 random from THIS week (never anywhere else)
// Same course week number ⇒ exact same schedule (stable, no flicker on
// re-render, safe across builds/servers).

/** FNV-1a string hash → unsigned 32-bit integer. */
function fnv1a(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

/** mulberry32 PRNG — tiny, fast and fully deterministic for a given seed. */
function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Shallow-copy `items`, deterministically shuffle them (Fisher–Yates driven
 * by the hashed seed) and return the first `count` entries.
 */
export function seededPick(items, count, seedStr) {
  const rand = mulberry32(fnv1a(String(seedStr)));
  const arr = items.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.max(0, count));
}

/** Monday 00:00 (local) of the week containing `date`. */
function mondayOf(date) {
  const d = new Date(date);
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); // Mon=0 … Sun=6
  d.setHours(0, 0, 0, 0);
  return d;
}

// ---------------------------------------------------------------------------
// Course-style week numbering ("Week 1", "Week 2", …)
//
// We deliberately do NOT show real calendar dates/ISO week numbers — those
// feel wrong for a self-paced plan (someone logging in after a month would
// see "Week 42 · Oct 12 – Oct 18" which means nothing to them).
//
// Instead, the very first visit records the user's start Monday in
// localStorage and every week afterwards is numbered relative to that:
//   first visit .......... Week 1
//   following Monday ..... Week 2   (and so on, forever)
// Navigation (Prev/Next) simply moves ±1 in the same numbering.
// ---------------------------------------------------------------------------

const START_WEEK_KEY = "maang-wp-start-monday";
const DAY_MS_LOCAL = 24 * 60 * 60 * 1000;

function startMonday() {
  try {
    const stored = window.localStorage.getItem(START_WEEK_KEY);
    if (stored && !Number.isNaN(Number(stored))) {
      return mondayOf(new Date(Number(stored)));
    }
    // First visit — anchor the course to the current week.
    const first = mondayOf(new Date());
    window.localStorage.setItem(START_WEEK_KEY, String(first.getTime()));
    return first;
  } catch {
    // Storage unavailable (private mode etc.) — fall back to current week.
    return mondayOf(new Date());
  }
}

/**
 * The 10 problem slots assigned to the given course week index. Slots are
 * carved straight out of `order` (the track's natural sequence), so practice
 * advances sequentially through the course and wraps around at the end.
 */
function slotsForWeek(order, weekIdx) {
  const out = [];
  const len = order.length;
  for (let i = 0; i < 10; i++) {
    const idx = (((weekIdx * 10 + i) % len) + len) % len;
    out.push(order[idx]);
  }
  return out;
}

/**
 * Build the plan for `offset` weeks relative to the user's CURRENT course
 * week (0 = this week, -1 = last week, +1 = next week …).
 *
 * Returns { weekNo, canGoPrev, days[] } where each day is
 * { key, name, jsDay, type, problems[2] } and type is one of:
 * "practice" | "test-week" (Sat) | "test-mixed" (Sun).
 */
export function buildWeeklyPlan(bank, offset = 0) {
  if (!bank || bank.length === 0) return null;

  // Natural track order — NO shuffling. The bank is already assembled as
  // Basic → Advanced → DP → Graphs (each sheet in its own sequence), so
  // practice moves through the course week by week in a sensible order.
  const order = bank;
  const base = startMonday(); // Week 1 Monday (first-ever visit)
  const thisMonday = mondayOf(new Date());

  // Whole weeks elapsed since the course started (round guards DST drift).
  const currentIdx = Math.round((thisMonday.getTime() - base.getTime()) / (7 * DAY_MS_LOCAL));
  const targetIdx = currentIdx + offset;

  const current = slotsForWeek(order, targetIdx);
  const previous = slotsForWeek(order, targetIdx - 1);

  const PRACTICE_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const days = PRACTICE_DAYS.map((name, i) => ({
    key: `p-${i}`,
    name,
    jsDay: i + 1, // Mon=1 … Fri=5
    type: "practice",
    problems: [current[i * 2], current[i * 2 + 1]],
  }));

  // Saturday — assessment on THIS week's practice material.
  days.push({
    key: "sat",
    name: "Saturday",
    jsDay: 6,
    type: "test-week",
    problems: seededPick(current, 2, `sat-${targetIdx}-${bank.length}`),
  });

  // Sunday — retention test mixing LAST week + THIS week.
  const prevPick = seededPick(previous, 1, `sun-prev-${targetIdx}-${bank.length}`)[0];
  const curPool = current.filter((p) => p !== prevPick);
  const curPick = seededPick(
    curPool.length ? curPool : current,
    1,
    `sun-cur-${targetIdx}-${bank.length}`,
  )[0];
  days.push({
    key: "sun",
    name: "Sunday",
    jsDay: 0,
    type: "test-mixed",
    problems: [prevPick, curPick],
  });

  return {
    weekNo: Math.max(1, targetIdx + 1), // course-style: starts at Week 1
    canGoPrev: targetIdx > 0,           // nothing before Week 1
    days,
  };
}
