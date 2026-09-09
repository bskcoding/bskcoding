// Rebuild the IDFC (walk_in) interview data file with clean, well-structured
// rounds and questions.
//
// The interview is an actual 2-round drive:
//   - Round 1: Problem Solving  (Robot Movement)
//   - Round 2: System Design & Kafka  (Payment System, Kafka Q&A, Project HLD)
//
// Run:  node scripts/rebuild-idfc.mjs
//
// Output:  src/data/companyInterviews/idfc-walk-in/idfc.js

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COMPANY_DIR = path.join(
  __dirname,
  "..",
  "src",
  "data",
  "companyInterviews",
  "idfc-walk-in",
);

const code = (language, content) => ({ language, content });
const Q = (question, answer, codeBlock = null) => ({
  question,
  answer,
  code: codeBlock,
});

// -----------------------------------------------------------------------------
// Data — content mirrors the provider's "System Design & Kafka Interview Q&A"
// walk-in reference sheet (Round 1, Round 2, Kafka questions, Project HLD).
// -----------------------------------------------------------------------------

const rounds = [
  // ------------------------------ Round 1 ------------------------------
  {
    name: "Round 1: Problem Solving — Robot Movement",
    questions: [
      Q(
        "Robot Movement Problem: A robot starts at origin (0,0) facing right. Commands are F<number> (forward), U/D/L/R<number> (absolute movements), TL (turn left, 90° CCW), TR (turn right, 90° CW). Find the final position for input [\"F7\",\"TL\",\"F3\",\"TR\",\"TL\",\"TR\",\"TL\",\"F4\",\"U2\",\"F1\",\"D2\"].",
        "Start: (0,0) facing ➡️\n\nF7 → (7,0)\nTL → facing ⬆️\nF3 → (7,3)\nTR → facing ➡️\nTL → facing ⬆️\nTR → facing ➡️\nTL → facing ⬆️\nF4 → (7,7)\nU2 → (7,9)   (Absolute Up)\nF1 → (7,10)\nD2 → (7,8)   (Absolute Down)\n\n✅ Final Answer: (7, 8)",
        code(
          "java",
          `public static int[] findFinalPosition(String[] input) {
    int x = 0, y = 0;
    int dir = 0; // 0:Right, 1:Down, 2:Left, 3:Up
    int[][] moves = {{1,0}, {0,-1}, {-1,0}, {0,1}};

    for (String cmd : input) {
        char type = cmd.charAt(0);

        if (type == 'T') {
            if (cmd.equals("TL")) dir = (dir + 3) % 4;   // 90° CCW
            else if (cmd.equals("TR")) dir = (dir + 1) % 4; // 90° CW
        } else {
            int val = Integer.parseInt(cmd.substring(1));
            switch (type) {
                case 'F': x += moves[dir][0] * val; y += moves[dir][1] * val; break;
                case 'U': y += val; break;
                case 'D': y -= val; break;
                case 'R': x += val; break;
                case 'L': x -= val; break;
            }
        }
    }
    return new int[]{x, y};
}`,
        ),
      ),
    ],
  },

  // ------------------------------ Round 2 ------------------------------
  {
    name: "Round 2: System Design & Kafka — Payment System, Kafka & Project HLD",
    questions: [
      Q(
        "Design a Payment System for premium subscriptions on a video streaming platform. Cover high-level architecture, idempotency, core components, database schema, and key design principles.",
        "1. Requirements\nFunctional requirements:\n- Users can browse plans, subscribe, upgrade/downgrade, and cancel.\n- Collect payment securely via a PSP (Stripe / PayPal / Adyen).\n- Handle retries, refunds, chargebacks, and 3D-Secure flows.\n- Grant/revoke streaming access and send receipts/invoices.\nNon-functional requirements:\n- High availability (99.99%) — payments are critical and must never be lost.\n- Idempotency — a retried request must never double-charge.\n- Consistency — financial ledger must be strong & auditable; reads can be eventual.\n- Scalability — support millions of customers and high peak traffic.\n- Security & PCI-DSS compliance — never store raw card data.\n- Auditability — every financial change is an append-only record.\n\n2. Capacity Estimation\n- 5M paying subscribers, ~500K new transactions/day, ~15M charge/renewal events/day.\n- Peak load ≈ 50–100 TPS — easily handled by a small number of stateless instances.\n- Event volume: ~1M events/day → a partitioned Kafka topic handles this comfortably.\n- Storage: ~1KB/row → tens of millions of rows/year; archive old ledgers as needed.\n\n3. High-Level Architecture (see diagram below)\n- API Gateway: authentication, rate limiting, request routing.\n- Subscription Service: plan management, subscription lifecycle, invoices.\n- Payment Orchestrator: drives each payment attempt as a state machine.\n- Payment Gateway Adapter: a facade that wraps Stripe / PayPal / Adyen to avoid vendor lock-in.\n- Webhook Handler: consumes async PSP callbacks (success / failed / chargeback).\n- Event Bus (Kafka): decouples producers from downstream consumers via events.\n- Downstream: Email, Analytics, Access Provisioning, Invoice services.\n\n4. Payment Flow (request → response)\n- Client POSTs /subscribe with an idempotency_key and a payment token.\n- Orchestrator checks the idempotency table; a previous match returns the cached response.\n- Otherwise it creates a transaction row (INITIATED) and calls the PSP via the adapter.\n- PSP handles redirect / 3DS; on completion it POSTs a webhook with the result.\n- Webhook handler updates the transaction (SUCCESS / FAILED) and emits a Kafka event.\n- Downstream consumers provision access, send the receipt, and update analytics.\n- If the PSP is slow, the orchestrator reconciles with a scheduled job.\n\n5. Idempotency (why we never double-charge)\n- The client generates a UUID idempotency_key for each logical operation.\n- It is stored in idempotency_requests along with a cached response and a TTL.\n- A duplicate key returns the cached response without creating a new charge.\n- The same key is also forwarded to the PSP (Stripe idempotency_key) for caller-side safety.\n\n6. Database Schema (see SQL in the code box below).\n\n7. Key Design Principles & Trade-offs\n- Financial immutability: transactions are append-only; a refund is a new record, not an update.\n- Idempotency key + DB unique constraint prevents duplicate charges on retries.\n- Tokenization: we store only the PSP token (pm_xxx), never the raw card number (PCI).\n- Event-driven decoupling: producers don't wait for downstream; Kafka provides buffering + replay.\n- Retry with exponential backoff and a Dead Letter Queue for persistent failures.\n- Trade-off: async events give availability + throughput but introduce eventual consistency; we mitigate with reconciliation jobs (e.g. compare PSP + local ledger daily).",
        code(
          "plaintext",
          `============== HIGH-LEVEL ARCHITECTURE ==============
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT (Web / Mobile)                    │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│      API GATEWAY (Rate Limiting / Auth / Routing)           │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│           SUBSCRIPTION SERVICE (Business Logic)             │
│   Plan Mgmt • Upgrade/Downgrade • Cancellation              │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│       PAYMENT ORCHESTRATOR (State Machine)                  │
│   INITIATED → PENDING_PSP → SUCCESS / FAILED / CHARGEBACK   │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│    PAYMENT GATEWAY ADAPTER (Facade Pattern)                 │
│   ┌────────┐ ┌────────┐ ┌────────┐                          │
│   │ Stripe │ │ PayPal │ │ Adyen  │                          │
│   └────────┘ └────────┘ └────────┘                          │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│           WEBHOOK HANDLER (Async Callbacks)                 │
│   Payment Success • Payment Failed • Chargeback             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│     EVENT BUS (Kafka / RabbitMQ)                            │
│   📤 SubscriptionCreated  📤 PaymentSucceeded               │
│   📤 PaymentFailed        📤 SubscriptionCancelled          │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  DOWNSTREAM: Email • Analytics • Access Provision • Invoice │
└─────────────────────────────────────────────────────────────┘

============== DATABASE SCHEMA (SQL) ==============
-- Core tables (simplified for the interview)

-- 1. Users
CREATE TABLE users (
    user_id    UUID PRIMARY KEY,
    email      VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- 2. Subscription Plans
CREATE TABLE subscription_plans (
    plan_id        UUID PRIMARY KEY,
    name           VARCHAR(100) NOT NULL,
    price          DECIMAL(10,2) NOT NULL,
    billing_period VARCHAR(20) DEFAULT 'MONTHLY'
);

-- 3. User Subscriptions (current active state)
CREATE TABLE user_subscriptions (
    user_sub_id          UUID PRIMARY KEY,
    user_id              UUID REFERENCES users(user_id),
    plan_id              UUID REFERENCES subscription_plans(plan_id),
    status               VARCHAR(20) NOT NULL,   -- ACTIVE, PAST_DUE, CANCELED
    current_period_end   TIMESTAMP NOT NULL,
    cancel_at_period_end BOOLEAN DEFAULT FALSE
);

-- 4. Transactions (immutable audit trail — append-only ledger)
CREATE TABLE transactions (
    transaction_id     UUID PRIMARY KEY,
    user_id            UUID REFERENCES users(user_id),
    idempotency_key    UUID UNIQUE NOT NULL,     -- prevents double charge
    amount             DECIMAL(10,2) NOT NULL,
    status             VARCHAR(20) NOT NULL,     -- SUCCESS, FAILED, REFUNDED
    psp_transaction_id VARCHAR(255),
    created_at         TIMESTAMP DEFAULT NOW()
);

-- 5. Payment Methods (tokenized — never store raw PAN)
CREATE TABLE payment_methods (
    payment_method_id UUID PRIMARY KEY,
    user_id           UUID REFERENCES users(user_id),
    psp_token         VARCHAR(255) NOT NULL,     -- e.g. Stripe pm_xxx
    last_four         VARCHAR(4),
    is_default        BOOLEAN DEFAULT FALSE
);

-- 6. Idempotency Cache
CREATE TABLE idempotency_requests (
    idempotency_key UUID PRIMARY KEY,
    response_status INT NOT NULL,
    response_body   JSONB NOT NULL,
    expires_at      TIMESTAMP DEFAULT NOW() + INTERVAL '24 hours'
);`,
        ),
      ),
      Q(
        "A topic has 3 partitions and a consumer group has 7 consumers. How does message processing work in this scenario?",
        "In a consumer group, each partition is assigned to exactly one consumer.\n- Only 3 consumers (one per partition) actually process messages.\n- The remaining 4 consumers (C4–C7) stay idle as backups.\n- If one active consumer dies, a rebalance assigns its partition to an idle consumer so processing continues.",
        code(
          "plaintext",
          `📦 Topic  (3 partitions)
   P0      P1      P2
    │       │       │
    ▼       ▼       ▼
 🟢C1     🟢C2     🟢C3      (3 consumers active)
 ⚪C4  ⚪C5  ⚪C6  ⚪C7       (4 consumers idle)`,
        ),
      ),
      Q(
        "A topic has 7 partitions and a consumer group has 3 consumers. How are the partitions distributed?",
        "Kafka distributes the 7 partitions among the 3 consumers so that each partition is owned by exactly one consumer.\n- With RangeAssignor the split is 3, 2, 2.\n- Each consumer processes multiple partitions in parallel.\n- If group members change, a rebalance redistributes the partitions.",
        code(
          "plaintext",
          `📦 Topic  (7 partitions)
P0  P1  P2  P3  P4  P5  P6
│   │   │   │   │   │   │
▼   ▼   ▼   ▼   ▼   ▼   ▼
🟢C1     🟢C2     🟢C3
P0,P1,P2 P3,P4   P5,P6   (RangeAssignor → 3, 2, 2)`,
        ),
      ),
      Q(
        "Where does Kafka store consumer offsets? If a consumer crashes after processing but before committing, what happens?",
        "Storage: Since Kafka 0.9, offsets are stored in an internal compacted topic called __consumer_offsets on the brokers.\n\n⚠️ Crash Scenario (at-least-once):\n- Consumer reads offsets 100 → 150.\n- Processes every message successfully.\n- Crashes before calling commitSync().\n- The last committed offset is still 100.\n- On restart it reprocesses 100 → 150 again → duplicates are possible (At-least-once semantics).",
      ),
      Q(
        "What is Kafka rebalancing? When does it happen, and how can you reduce its impact?",
        "What is Rebalancing?\n- Kafka reassigns partition ownership among consumers in the same group.\n\nWhen it happens:\n- A new consumer joins the group.\n- A consumer leaves (crash / shutdown).\n- A new partition is added to a topic.\n\nImpact:\n- During rebalancing all consumers STOP consuming (Stop-The-World), causing latency spikes.\n\n✅ How to reduce the impact:\n- Increase session.timeout.ms and max.poll.interval.ms.\n- Use StickyAssignor to minimise partition movement.\n- Keep max.poll.records at a reasonable value.\n- Use Cooperative Rebalancing (Kafka 2.3+) — incremental instead of full stop.",
      ),
      Q(
        "What is a Dead Letter Queue (DLQ) in Kafka, and how do you implement it?",
        "What is DLQ?\n- A separate Kafka topic (e.g. topic-name-dlq) that stores messages a consumer cannot process after multiple retries.\n\nImplementation:\n- Implement exponential backoff and retry 3–5 times.\n- On final failure, produce the message to the DLQ topic with the original headers (topic, partition, offset, stack trace).\n- Set up alerts on DLQ message counts.\n- Build an admin tool to reprocess DLQ messages once the root cause is fixed.\n\nFlow: Consume → Process → Error? → Retry (3x) → Still fail? → Send to DLQ.",
      ),
      Q(
        "Explain the three Kafka delivery semantics. How do you achieve exactly-once processing?",
        "1️⃣ At-most-once:\n- Commit the offset before processing.\n- May lose messages, but gives the fastest throughput.\n\n2️⃣ At-least-once:\n- Commit the offset after processing.\n- May produce duplicates — the default and reliable choice.\n\n3️⃣ Exactly-once:\n- No duplicates, no loss.\n- Uses an idempotent producer + Kafka transactions.\n\n✅ Exactly-Once Implementation:\n- Enable Idempotent Producer → enable.idempotence=true.\n- Consumer → isolation.level=read_committed.\n- Use Kafka Transactions → atomic consume-process-produce.\n- For DB sinks → idempotent upserts using a unique key derived from the Kafka offset.",
      ),
      Q(
        "Walk through the High-Level Design of your previous project.",
        "My previous project was a PayPal Customer Orchestration Service — a microservices platform handling customer requests across PayPal products (PayPal, Venmo, Zettle, Xoom). It handled ~11M+ requests per day across 300+ REST endpoints using reactive programming with Project Reactor.\n\n🔴 API Layer:\n- 300+ REST endpoints, request validation and routing, high-volume API traffic.\n\n🟠 Reactive Processing:\n- Spring WebFlux + Project Reactor, non-blocking request processing.\n\n🟢 Event-Driven Communication:\n- Apache Kafka, asynchronous processing, decoupled downstream services.\n\n🟣 Reliability & Operations:\n- Security and authentication, logging and monitoring, scalable microservice deployment.\n\n🏆 Interview Summary:\n- Primary goal: support high-volume, low-latency customer requests while keeping services scalable and loosely coupled.\n- Java + Spring Boot microservices for the business layer, Project Reactor/WebFlux for reactive processing, REST APIs for sync communication, and Kafka for async event-driven communication.\n\n📊 Tech Stack: Java, Spring Boot, Spring WebFlux, Project Reactor, Microservices, REST APIs, Kafka.",
        code(
          "plaintext",
          `┌─────────────────────────────────────────────────────────────┐
│                   CLIENTS                                        │
│        Web / Mobile / PayPal Products (Venmo, Xoom…)             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              API GATEWAY / EDGE                             │
│       Authentication • Routing • Validation                 │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│      CUSTOMER ORCHESTRATION SERVICE                         │
│   Java • Spring Boot • Project Reactor/WebFlux              │
│   300+ REST APIs, Reactive Processing                       │
└─────────────────────────────────────────────────────────────┘
              │
      ┌───────┼────────┐
      ▼       ▼        ▼
┌──────────┐ ┌──────────┐ ┌──────────┐
│ Customer │ │ Payment/ │ │  Other   │
│ Services │ │ Account  │ │Downstream│
└──────────┘ └──────────┘ └──────────┘
              │
              ▼
┌─────────────────────────────────────────────────────────────┐
│                       KAFKA                                 │
│      Asynchronous Events / Event-Driven Processing          │
└─────────────────────────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────────────────────┐
│      DOWNSTREAM CONSUMERS / SERVICES                        │
│   Event Processing • Notifications • Other Systems          │
└─────────────────────────────────────────────────────────────┘`,
        ),
      ),
    ],
  },
];

// -----------------------------------------------------------------------------
// Build the company object that matches the existing app schema.
// -----------------------------------------------------------------------------
const questionCount = rounds.reduce(
  (sum, round) => sum + round.questions.length,
  0,
);

const company = {
  id: "idfc-walk-in",
  name: "IDFC (walk_in)",
  interviews: [
    {
      name: "IDFC Walk-in Interview",
      questionCount,
      rounds,
    },
  ],
  questionCount,
};

// -----------------------------------------------------------------------------
// Write the file
// -----------------------------------------------------------------------------
fs.mkdirSync(COMPANY_DIR, { recursive: true });
const outFile = path.join(COMPANY_DIR, "idfc.js");
const banner =
  "// AUTO-GENERATED file — company-wise interview data.\n" +
  "// Source: IDFC (walk_in) interview document(s).\n" +
  "// Regenerate with:  node scripts/rebuild-idfc.mjs\n\n";
const body =
  "export const company = " + JSON.stringify(company, null, 2) + ";\n";
fs.writeFileSync(outFile, banner + body, "utf8");

console.log(
  `✓ wrote ${path.relative(path.join(__dirname, ".."), outFile)}  (${rounds.length} rounds, ${questionCount} questions)`,
);