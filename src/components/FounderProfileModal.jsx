import { useEffect, useRef, useState } from "react";

/**
 * FounderProfileModal
 * -------------------
 * Cinematic "spotlight reveal" shown when the navbar About item is clicked:
 *   1. A searchlight beam sweeps across a floating gold-dust starfield.
 *   2. The card materializes out of a blur with 3D mouse tilt.
 *   3. The name assembles letter by letter, the headline types itself out,
 *      and the three headline stats flip in one by one.
 *   4. "See Everything" expands the full bio, skills, and links in-place.
 * Replaces the old About page entirely.
 */
const NAME = "Venkatesh Bharath";
const HEADLINE = "Technical Specialist \u00B7 Founder at BSK Coding";
const SPOTLIGHT_MS = 1050;

const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "Free", label: "Learning" },
  { value: "12+", label: "Tracks" },
];

// Deterministic "gold dust" particles (stable positions across renders).
const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: (i * 37 + 11) % 100,
  top: 20 + ((i * 53 + 7) % 75),
  size: 2 + ((i * 7) % 4),
  delay: ((i * 11) % 45) / 10,
  duration: 6 + ((i * 13) % 7),
  cyan: i % 4 === 0,
}));

function FounderProfileModal({ isOpen, onClose }) {
  const [phase, setPhase] = useState("idle"); // idle -> spotlight -> reveal
  const [expanded, setExpanded] = useState(false);
  const [typed, setTyped] = useState("");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Phase machine: sweep the spotlight, then materialize the card.
  useEffect(() => {
    if (!isOpen) {
      setPhase("idle");
      setExpanded(false);
      return undefined;
    }
    document.body.style.overflow = "hidden";
    if (prefersReducedMotion) {
      setPhase("reveal");
      return () => {
        document.body.style.overflow = "";
      };
    }
    setPhase("spotlight");
    const timer = setTimeout(() => setPhase("reveal"), SPOTLIGHT_MS);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [isOpen, prefersReducedMotion]);

  // ESC closes.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Typewriter headline once the card is revealed.
  useEffect(() => {
    if (phase !== "reveal") return undefined;
    if (prefersReducedMotion) {
      setTyped(HEADLINE);
      return undefined;
    }
    setTyped("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(HEADLINE.slice(0, i));
      if (i >= HEADLINE.length) clearInterval(id);
    }, 26);
    return () => clearInterval(id);
  }, [phase, prefersReducedMotion]);

  // 3D tilt + cursor glow coordinates.
  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card || prefersReducedMotion) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (py - 0.5) * -8, y: (px - 0.5) * 10 });
    card.style.setProperty("--mx", `${px * 100}%`);
    card.style.setProperty("--my", `${py * 100}%`);
  };

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  if (!isOpen) return null;

  return (
    <div className="founder-overlay" onClick={onClose} role="presentation">
      <span className="founder-beam" aria-hidden="true" />
      <span className="founder-orb" aria-hidden="true" />
      <div className="founder-stars" aria-hidden="true">
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className={`founder-star${p.cyan ? " is-cyan" : ""}`}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {phase === "reveal" && (
        <div
          className="founder-modal is-entering"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            ref={cardRef}
            className="founder-modal-inner"
            role="dialog"
            aria-modal="true"
            aria-label="Founder profile"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
        <button
          type="button"
          className="founder-modal-close"
          onClick={onClose}
          aria-label="Close profile"
        >
          ✕
        </button>

        <div className="founder-avatar-wrap">
          <span className="founder-avatar-ring" aria-hidden="true" />
          <img
            src="/founder.png"
            alt="Venkatesh Bharath"
            className="founder-avatar"
          />
          <span className="founder-crown-chip">👑</span>
        </div>

        <h2 className="founder-name">
          {NAME.split("").map((ch, i) => (
            <span
              key={`${ch}-${i}`}
              className="founder-letter"
              style={{ animationDelay: `${240 + i * 34}ms` }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h2>

        <p className="founder-headline">
          {typed}
          <span className="founder-caret" aria-hidden="true" />
        </p>

        {/* Three headline stats — flip in one by one */}
        <div className="founder-headline-stats">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="founder-headline-stat"
              style={{ animationDelay: `${680 + i * 160}ms` }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        {!expanded ? (
          <button
            type="button"
            className="founder-view-all"
            onClick={() => setExpanded(true)}
          >
            See Everything →
          </button>
        ) : (
          <div className="founder-expanded">
            <p className="founder-bio">
              Venkatesh Bharath is a passionate Technical Specialist with 5
              years of hands-on experience in Java, Spring Boot, and backend
              development. He created this platform to help fellow developers
              navigate their career journey through structured roadmaps,
              hands-on learning paths, and real-world interview preparation.
            </p>

            <div className="founder-badges">
              <span className="founder-badge">Java</span>
              <span className="founder-badge">Spring Boot</span>
              <span className="founder-badge">Microservices</span>
              <span className="founder-badge">SQL</span>
              <span className="founder-badge">DSA</span>
              <span className="founder-badge">System Design</span>
            </div>

            <div className="founder-socials">
              <a
                href="https://www.youtube.com/@bskcoding"
                target="_blank"
                rel="noopener noreferrer"
                className="founder-social"
              >
                ▶ YouTube
              </a>
              <a
                href="https://topmate.io/venkatesh_bharath"
                target="_blank"
                rel="noopener noreferrer"
                className="founder-social"
              >
                🤝 1:1 Call
              </a>
            </div>
          </div>
        )}
          </div>
        </div>
      )}
    </div>
  );
}

export default FounderProfileModal;