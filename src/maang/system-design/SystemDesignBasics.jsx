import { Link } from "react-router-dom";
import "./SystemDesignBasics.css";

/**
 * SystemDesignBasics — landing page for the "System Design - Basics" track
 * on the MAANG preparation path. Shows the four foundation pillars as
 * colourful grids styled exactly like the subtopic cards on the MAANG page
 * (dark inside, coloured accent border + left bar, rotating rainbow border
 * and surrounding glow on hover).
 */

// Dark-variant accents (same hues as the MAANG letter palette, deep tones).
const CARDS = [
  {
    emoji: "🧱",
    name: "OOPS",
    accent: "#c2410c", // dark coral (M)
    desc: "Classes & Objects · Inheritance · Polymorphism · Abstraction · Encapsulation",
  },
  {
    emoji: "📐",
    name: "SOLID Principles",
    accent: "#b45309", // dark amber (A)
    desc: "S · O · L · I · D — five principles for maintainable, scalable design",
  },
  {
    emoji: "🧩",
    name: "Design Patterns",
    accent: "#15803d", // dark green (A)
    desc: "Creational · Structural · Behavioural patterns asked in LLD rounds",
  },
  {
    emoji: "📊",
    name: "UML Diagrams",
    accent: "#1d4ed8", // dark royal blue (N)
    desc: "Class · Sequence · Use-case · Activity diagrams for system modelling",
  },
];

function SystemDesignBasics() {
  return (
    <div className="sdb-page">
      {/* ===== HERO (same panel colouring as the MAANG page hero) ===== */}
      <section className="sdb-hero">
        <Link to="/maang" className="sdb-back">
          ← Back to MAANG Preparation
        </Link>
        <h1 className="sdb-title">
          System Design <span className="sdb-title-accent">Basics</span>
        </h1>
        <p className="sdb-subtitle">
          Master the four pillars of Low-Level Design — the foundation every
          MAANG interviewer expects before HLD &amp; machine-coding rounds.
        </p>
      </section>

      {/* ===== 4 GRIDS — styled like the MAANG subtopic cards ===== */}
      <section className="sdb-section">
        <h2 className="sdb-section-title">What You'll Master</h2>
        <p className="sdb-section-subtitle">
          Four foundation grids — click through as content lands
        </p>
        <div className="sdb-grids">
          {CARDS.map((card, i) => {
            const inner = (
              <div
                key={card.name}
                className="sdb-card"
                style={{ "--sd-accent": card.accent, "--ml-idx": i }}
              >
                <span className="sdb-card-shine" aria-hidden="true" />
                <div className="sdb-card-top">
                  <span className="sdb-card-emoji" aria-hidden="true">
                    {card.emoji}
                  </span>
                  <span className="sdb-card-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="sdb-card-name">{card.name}</span>
                <span className="sdb-card-desc">{card.desc}</span>
              </div>
            );

            // The OOPS pillar has its full page built out — link it.
            if (card.name === "OOPS") {
              return (
                <Link
                  key={card.name}
                  to="/maang/system-design/oops"
                  className="sdb-card-link"
                >
                  {inner}
                </Link>
              );
            }
            return inner;
          })}
        </div>
      </section>
    </div>
  );
}

export default SystemDesignBasics;
