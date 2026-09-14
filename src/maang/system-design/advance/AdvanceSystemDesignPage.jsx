/**
 * AdvanceSystemDesignPage (Route: /maang/system-design/advanced).
 *
 * Landing hub that collects the "Top 12" interview questions split into the two
 * classic machine-coding / system-design buckets:
 *   - LLD (Low Level Design)  →  OOP, design patterns, state machines ...
 *   - HLD (High Level Design) →  scalable architecture, distributed systems ...
 *
 * The layout and colouring intentionally mirror {@link SystemDesignBasics} — it
 * imports the SAME stylesheet so the cards (rotating rainbow border, glow on
 * hover, coloured accent bar) look identical to the rest of the track.
 */

import { Link } from "react-router-dom";
import {
  FaLink,
  FaGaugeHigh,
  FaMagnifyingGlass,
  FaTicket,
} from "react-icons/fa6";
import {
  SiYoutube,
  SiWhatsapp,
  SiInstagram,
  SiUber,
  SiNetflix,
  SiX,
  SiGoogle,
  SiGoogledrive,
  SiStripe,
} from "react-icons/si";
import "../SystemDesignBasics.css";
import "./AdvanceSystemDesignPage.css";

// ===========================================================================
// LLD – TOP 12 QUESTIONS
// ===========================================================================
const LLD_QUESTIONS = [
  {
    emoji: "🚗",
    title: "Parking Lot",
    topics:
      "OOP, SOLID, Encapsulation, Inheritance, Polymorphism, Composition, Factory, Strategy, State",
    accent: "#c2410c",
  },
  {
    emoji: "🏢",
    title: "Elevator System",
    topics:
      "OOP, SOLID, State Pattern, Strategy Pattern, Scheduling, State Management, Concurrency",
    accent: "#15803d",
  },
  {
    emoji: "🥤",
    title: "Vending Machine",
    topics:
      "OOP, SOLID, State Pattern, Factory Pattern, State Management, Exception Handling",
    accent: "#b45309",
  },
  {
    emoji: "🧾",
    title: "Splitwise",
    topics:
      "OOP, SOLID, Strategy Pattern, Observer Pattern, Expense Management, Balance Calculation, Extensibility",
    accent: "#1d4ed8",
  },
  {
    emoji: "🏧",
    title: "ATM",
    topics:
      "OOP, SOLID, State Pattern, Chain of Responsibility, Authentication, Transaction Management",
    accent: "#0e7490",
  },
  {
    emoji: "♟️",
    title: "Chess Game",
    topics:
      "OOP, Inheritance, Polymorphism, Abstraction, Strategy Pattern, State Management, Game Rules",
    accent: "#4f46e5",
  },
  {
    emoji: "⭕",
    title: "Tic-Tac-Toe",
    topics: "OOP, Encapsulation, Strategy Pattern, Game State, Extensibility",
    accent: "#7c3aed",
  },
  {
    emoji: "🐍",
    title: "Snake & Ladder",
    topics:
      "OOP, Encapsulation, Composition, Strategy Pattern, Game State, Randomization",
    accent: "#0d9488",
  },
  {
    emoji: "🗂️",
    title: "LRU Cache",
    topics:
      "HashMap, Doubly Linked List, O(1) Operations, Encapsulation, Generics, Thread Safety",
    accent: "#c2410c",
  },
  {
    emoji: "⏱️",
    title: "Rate Limiter",
    topics:
      "OOP, Strategy Pattern, Token Bucket, Leaky Bucket, Sliding Window, Concurrency, Thread Safety",
        accent: "#15803d",
  },
  {
    emoji: "📚",
    title: "Library Management System",
    topics:
      "OOP, SOLID, Inheritance, Composition, Strategy Pattern, Search, Book/Member Management",
    accent: "#1d4ed8",
  },
  {
    emoji: "🏨",
    title: "Hotel Booking System",
    topics:
      "OOP, SOLID, State Pattern, Strategy Pattern, Availability, Booking, Concurrency, Payment",
    accent: "#7c3aed",
  },
]

// ===========================================================================
// HLD – TOP 12 QUESTIONS
// ===========================================================================
const HLD_QUESTIONS = [
  {
    Icon: FaLink,
    brandColor: "#3b82f6",
    title: "URL Shortener (TinyURL)",
    topics:
      "Scalability, Hashing, Database, Cache, Sharding, Load Balancer, ID Generation, Consistent Hashing",
    accent: "#c2410c",
  },
  {
    Icon: FaGaugeHigh,
    brandColor: "#f59e0b",
    title: "Rate Limiter",
    topics:
      "Distributed Systems, Redis, Token Bucket, Sliding Window, API Gateway, Scalability, High Availability",
    accent: "#15803d",
  },
  {
    Icon: SiYoutube,
    brandColor: "#ff0000",
    title: "YouTube",
    topics:
      "CDN, Object Storage, Video Upload, Chunking, Video Transcoding, Streaming, Metadata DB, Caching, Scalability",
    accent: "#b45309",
  },
  {
    Icon: SiWhatsapp,
    brandColor: "#25d366",
    title: "WhatsApp / Chat System",
    topics:
      "WebSocket, Real-Time Communication, Kafka, Message Queue, Delivery Guarantees, Online/Offline Status, Push Notifications, Database, Scalability",
    accent: "#1d4ed8",
  },
  {
    Icon: SiInstagram,
    brandColor: "#e1306c",
    title: "Instagram",
    topics:
      "Feed Generation, Fan-out, Caching, Database, Object Storage, CDN, Sharding, Ranking, Scalability",
    accent: "#0e7490",
  },
  {
    Icon: SiUber,
    brandColor: "#06c167",
    title: "Uber / Ride Sharing",
    topics:
      "Geospatial Indexing, Location Tracking, Driver-Rider Matching, WebSocket, Kafka, Redis, Database, Scalability, Real-Time Processing",
    accent: "#4f46e5",
  },
  {
    Icon: SiNetflix,
    brandColor: "#e50914",
    title: "Netflix",
    topics:
      "CDN, Video Streaming, Object Storage, Video Transcoding, Caching, Microservices, Recommendation System, Load Balancing, Scalability",
    accent: "#7c3aed",
  },
  {
    Icon: SiX,
    brandColor: "#e7e9ea",
    title: "Twitter / X",
    topics:
      "Feed, Fan-out on Write/Read, Caching, Kafka, Database, Sharding, Ranking, Load Balancing, Scalability",
    accent: "#0d9488",
  },
  {
    Icon: SiGoogle,
    brandColor: "#4285f4",
    title: "Search / Autocomplete",
    topics:
      "Elasticsearch, Inverted Index, Trie, Tokenization, Ranking, Sharding, Replication, Caching, Load Balancing",
    accent: "#c2410c",
  },
  {
    Icon: SiStripe,
    brandColor: "#635bff",
    title: "Payment System",
    topics:
      "Idempotency, ACID, Transactions, Distributed Transactions, Payment Gateway, Kafka, Retry, Consistency, Security, Fault Tolerance",
    accent: "#15803d",
  },
  {
    Icon: SiGoogledrive,
    brandColor: "#34a853",
    title: "File Storage / Google Drive",
    topics:
      "Chunking, Object Storage, Metadata DB, Multipart Upload, Deduplication, Sync, CDN, Sharding, Replication, Consistency",
    accent: "#1d4ed8",
  },
  {
    Icon: FaTicket,
    brandColor: "#f43f5e",
    title: "Ticket Booking System",
    topics:
      "Concurrency, Distributed Lock, Database Transactions, ACID, Idempotency, Inventory Management, Cache, Queue, Scalability",
    accent: "#0e7490",
  },
];

// Shared card-rendering helper (keeps the JSX below compact).
// Supports EITHER `Icon` (brand logo component) OR legacy `emoji`.
function renderGrid(questions, linkFor) {
  return (
    <div className="sdb-grids">
      {questions.map((q, i) => {
        const Brand = q.Icon;
        const inner = (
          <div
            className="sdb-card"
            style={{ "--sd-accent": q.accent, "--ml-idx": i }}
          >
            <span className="sdb-card-shine" aria-hidden="true" />
            <div className="sdb-card-top">
              <span className="sdb-card-emoji" aria-hidden="true">
                {Brand ? (
                  <Brand
                    className="asd-brand-icon"
                    style={{ color: q.brandColor || q.accent }}
                  />
                ) : (
                  q.emoji
                )}
              </span>
              <span className="sdb-card-num">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <span className="sdb-card-name">{q.title}</span>
            <span className="sdb-card-desc">{q.topics}</span>
          </div>
        );
        const to = linkFor ? linkFor(q) : null;
        if (to) {
          return (
            <Link key={`${q.title}-${i}`} to={to} className="sdb-card-link">{inner}</Link>
          );
        }
        return (
          <div key={`${q.title}-${i}`} className="sdb-card-link" style={{ cursor: "default" }}>{inner}</div>
        );
      })}
    </div>
  );
}

function AdvanceSystemDesignPage() {
    return (
    <div className="asd-page">
      {/* ===== HERO ===== */}
      <section className="asd-hero">
        <Link to="/maang/system-design-basics" className="sdb-back">
          ← Back to System Design Basics
        </Link>
        <h1 className="asd-title">
          Advance System <span className="asd-title-accent">Design</span>
        </h1>
        <p className="sdb-subtitle">
          The 24 most frequently asked interview problems — twelve Low Level
          Design (machine-coding) questions and twelve High Level Design
          (scalable architecture) questions. Master these and you'll be ready
          for both the coding round and the system design round of any MAANG
          interview.
        </p>
      </section>

      {/* ===== LLD GRID ===== */}
      <section className="asd-section asd-lld">
        <h2 className="asd-section-title">
          <span className="asd-bar" aria-hidden="true" />
          <span className="asd-badge asd-badge-ll" aria-hidden="true">
            LLD
          </span>
          <span className="asd-section-text">
            Top 12 <em>Questions</em>
          </span>
          <span className="asd-count" aria-hidden="true">
            12 problems
          </span>
        </h2>
        <p className="asd-section-subtitle">
          Object-oriented design problems that test your OOP fundamentals,
          design-pattern fluency and state-management skills.
        </p>
        {renderGrid(LLD_QUESTIONS, (q) => q.title === "Parking Lot" ? "/maang/system-design/lld-parking-lot" : null)}
      </section>

      {/* ===== HLD GRID ===== */}
      <section className="asd-section asd-hld">
        <h2 className="asd-section-title">
          <span className="asd-bar" aria-hidden="true" />
          <span className="asd-badge asd-badge-hld" aria-hidden="true">
            HLD
          </span>
          <span className="asd-section-text">
            Top 12 <em>Questions</em>
          </span>
          <span className="asd-count" aria-hidden="true">
            12 problems
          </span>
        </h2>
        <p className="asd-section-subtitle">
          High-scale architecture problems that test scalability, data
          modelling, caching, sharding and distributed-systems thinking.
        </p>
        {renderGrid(HLD_QUESTIONS)}
      </section>
    </div>
  );
}

export default AdvanceSystemDesignPage;
