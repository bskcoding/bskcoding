import { useState } from "react";

/**
 * FounderProfileModal
 * -------------------
 * Opens the founder profile popup directly (no crown trigger button). Shown
 * when `isOpen` is true. The popup displays a compact summary with three
 * headline stats, plus a "See Everything" button that expands to the
 * founder's full bio, skills, and social links — all inside the same popup
 * (no separate About page).
 */
function FounderProfileModal({ isOpen, onClose }) {
  const [expanded, setExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="founder-overlay" onClick={onClose} role="presentation">
      <div
        className="founder-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Founder profile"
        onClick={(e) => e.stopPropagation()}
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
          <img
            src="/founder.png"
            alt="Venkatesh Bharath"
            className="founder-avatar"
          />
          <span className="founder-crown-chip">👑</span>
        </div>

        <h2 className="founder-name">Venkatesh Bharath</h2>
        <p className="founder-headline">
          Technical Specialist · Founder at BSK Coding
        </p>

        {/* Three headline stats — compact summary */}
        <div className="founder-headline-stats">
          <div className="founder-headline-stat">
            <strong>5+</strong>
            <span>Years Experience</span>
          </div>
          <div className="founder-headline-stat">
            <strong>Free</strong>
            <span>Learning</span>
          </div>
          <div className="founder-headline-stat">
            <strong>12+</strong>
            <span>Tracks</span>
          </div>
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
  );
}

export default FounderProfileModal;