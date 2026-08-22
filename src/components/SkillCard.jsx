function SkillCard({ skill }) {
  return (
    <div
      className={`skill-card${skill.featured ? " featured" : ""}`}
      style={{
        "--skill-color": skill.color,
      }}
    >
      {/* Animated badge for featured (e.g. MAANG) tracks */}
      {skill.featured && (
        <div className="skill-card-featured-badge" aria-label="Featured track">
          <span className="badge-emoji">🔥</span>
          <span className="badge-text">HOT</span>
          <span className="badge-sparkle" />
          <span className="badge-sparkle badge-sparkle--2" />
          <span className="badge-sparkle badge-sparkle--3" />
        </div>
      )}

      {/* Top Section — 20%: icon + title */}
      <div className="skill-card-top">
        <span
          className="skill-card-icon"
          style={{
            backgroundColor: skill.color + "18",
            color: skill.color,
            boxShadow: `0 0 20px ${skill.color}25, inset 0 0 0 1px ${skill.color}30`,
          }}
        >
          {skill.icon}
        </span>
        <span className="skill-card-title">{skill.name}</span>
      </div>

      {/* Middle Section — 15%: divider | badge | divider */}
      <div className="skill-card-middle">
        <span className="skill-card-line" />
        <span
          className="skill-card-badge"
          style={{
            background: skill.color + "18",
            color: skill.color,
            borderColor: skill.color + "40",
          }}
        >
          {skill.progress}% Complete
        </span>
        <span className="skill-card-line" />
      </div>

      {/* Bottom Section — 65%: description + button */}
      <div className="skill-card-bottom">
        <p className="skill-card-desc">{skill.description}</p>
        <button
          className="skill-card-btn"
          style={{
            background: skill.color + "15",
            color: skill.color,
            borderColor: skill.color + "35",
          }}
        >
          Explore
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SkillCard;
