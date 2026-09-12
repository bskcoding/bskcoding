// ===== CAP Theorem — topic data =====
// CAP = Consistency, Availability, Partition Tolerance
// In a distributed system, you can only pick 2 out of 3.

import {
  svgCAPOverview,
  svgConsistency,
  svgAvailability,
  svgPartitionTolerance,
  svgCPvsAP,
} from "./capDiagrams";

export const capTopics = [
  // ---------- 1. CAP Overview ----------
  {
    id: "cap-overview",
    icon: "fa-balance-scale",
    title: "CAP Theorem - The Big Picture",
    sub: "Pick any 2 of 3",
    desc: "In a distributed system, you can simultaneously guarantee at most 2 of: Consistency, Availability, Partition Tolerance.",
    definition:
      "CAP Theorem (Brewer's theorem) states that a distributed data store can only provide 2 of the 3 guarantees: Consistency (every read receives the most recent write), Availability (every request receives a response), Partition Tolerance (system continues despite network failures). In practice, network partitions WILL happen, so P is mandatory - leaving the real choice between CP and AP.",
    videoLink: "https://www.youtube.com/watch?v=6R1jr9gM41s",
    code: `// ===== CAP THEOREM - KEY INSIGHTS =====\n//\n// Scenario: 2 nodes (Node A and Node B) with a network partition\n//\n// BEFORE partition (both in sync):\n//   Node A: balance = $1000\n//   Node B: balance = $1000\n//   Status: synced\n//\n// NETWORK PARTITION happens (A cannot talk to B)\n//\n// Client writes $500 to Node A:\n//   Node A: balance = $1500  accepted\n//   Node B: balance = $1000  stale (cannot sync)\n//\n// CP SYSTEM:\n//   Client reads from Node B:\n//     Node B has stale data ($1000 vs real $1500)\n//     CP SYSTEM REFUSES to serve stale data\n//     Returns ERROR / timeout\n//     Consistency preserved, Availability lost\n//\n// AP SYSTEM:\n//   Client reads from Node B:\n//     Node B serves stale data ($1000)\n//     AP SYSTEM serves it anyway (stays available)\n//     Availability preserved, Consistency lost\n//     Data will sync when partition heals\n\n// ===== REAL-WORLD EXAMPLES =====\n//\n// CP Systems (Consistency + Partition Tolerance):\n//   - MongoDB (default settings)\n//   - HBase\n//   - Redis\n//   - ZooKeeper\n//   - PostgreSQL (single-primary)\n//   - Banking systems, payment processors\n//   When partition happens, some requests fail\n//\n// AP Systems (Availability + Partition Tolerance):\n//   - Cassandra\n//   - DynamoDB (default)\n//   - CouchDB\n//   - Riak\n//   - Social media feeds, like counters\n//   System stays up, may serve stale data briefly\n\n// ===== QUICK DECISION GUIDE =====\n//\n// Choose CP when:\n//   - Data correctness is critical (money, orders, inventory)\n//   - Stale data would cause real problems\n//   - You can afford some downtime during partitions\n//\n// Choose AP when:\n//   - System availability is more important than instant consistency\n//   - Brief staleness is acceptable (feeds, likes, comments)\n//   - Your app must stay up no matter what\n`,
    diagram: svgCAPOverview,
    relation: "Pick 2 of 3: CP or AP (P is mandatory)",
    points: [
      "CAP = Consistency, Availability, Partition Tolerance",
      "Max 2 of 3 at the same time",
      "P is mandatory (networks fail)",
      "Real choice: CP vs AP",
      "CA only in single-node DBs",
    ],
  },
  {
    id: "cap-consistency",
    icon: "fa-check-double",
    title: "C - Consistency",
    sub: "Every read gets latest write",
    desc: "All nodes see the same data at the same time. A read always returns the most recent write.",
    definition: "Consistency means every read receives the most recent write or an error. After a write completes, all later reads see that value. Bank example: deposit Rs.1000 at one ATM, any other ATM instantly shows Rs.1000 - never stale Rs.0.",
    videoLink: "https://www.youtube.com/watch?v=6R1jr9gM41s",
    diagram: svgConsistency,
    relation: "CP systems keep C, sacrifice A during partitions",
    points: [
      "Read = latest write, always",
      "No stale data ever served",
      "Needs sync replication / quorum",
      "Bank balances need this",
      "Costs latency + availability",
    ],
  },
  {
    id: "cap-availability",
    icon: "fa-bolt",
    title: "A - Availability",
    sub: "Every request gets a response",
    desc: "System is always on. Every request gets a (non-error) response, even if data is slightly stale.",
    definition: "Availability means every request receives a response, without guarantee it is the latest write. Social-media example: a Like counter may show 999 for one second instead of 1000 - but the app never goes down or errors.",
    videoLink: "https://www.youtube.com/watch?v=k-Yaq8AHj6I",
    diagram: svgAvailability,
    relation: "AP systems keep A, accept temporary staleness",
    points: [
      "Always responds, never hangs",
      "May serve slightly stale data",
      "Perfect for feeds and likes",
      "Heals when partition ends",
      "Costs instant correctness",
    ],
  },
  {
    id: "cap-partition",
    icon: "fa-network-wired",
    title: "P - Partition Tolerance",
    sub: "Survives network failures",
    desc: "System keeps working even when nodes cannot talk to each other. Mandatory in real distributed systems.",
    definition: "Partition tolerance means the cluster keeps operating despite dropped messages between nodes (cable cut, switch failure, datacenter outage). Any multi-node system over a network MUST have P - so the real CAP decision is always CP vs AP.",
    videoLink: "https://www.youtube.com/watch?v=BHqjEjzAicA",
    diagram: svgPartitionTolerance,
    relation: "P is non-negotiable - partitions always happen",
    points: [
      "Partition = nodes cannot sync",
      "System must keep functioning",
      "Mandatory for 2+ nodes",
      "Cause: cable, switch, DC outage",
      "So choice is CP vs AP only",
    ],
  },
  {
    id: "cap-cp-vs-ap",
    icon: "fa-scale-balanced",
    title: "CP vs AP - When and What",
    sub: "The real interview decision",
    desc: "During a partition pick correctness (CP) or uptime (AP). Banking needs CP, social feeds need AP.",
    definition: "When a partition hits: CP refuses stale reads (returns error, stays correct - MongoDB, banking). AP serves possibly-stale reads (stays up, syncs later - Cassandra, feeds). Interview line: partitions always happen, so say CP for money/orders and AP for feeds/likes/carts.",
    videoLink: "https://www.youtube.com/watch?v=Jw1Q5Tz8w-Y",
    diagram: svgCPvsAP,
    relation: "CP = money/orders, AP = feeds/likes/carts",
    points: [
      "CP: error over wrong data",
      "AP: stale data over downtime",
      "CP = MongoDB, banking",
      "AP = Cassandra, social feeds",
      "Say this line in interviews",
    ],
  },
];
