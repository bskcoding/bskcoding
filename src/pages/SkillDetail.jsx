import { Link, useParams } from "react-router-dom";
import { skills } from "../data/skills";

function SkillDetail() {
  const { skillId } = useParams();
  const skill = skills.find((item) => item.id === skillId);

  if (!skill) {
    return (
      <div className="main-container">
        <section className="header-section">
          <h1 className="logo-text">Skill not found</h1>
          <Link to="/" className="cta-button secondary">
            Back to Home
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="main-container">
      <section className="header-section">
        <div className="logo-container">
          <span className="logo-icon">{skill.icon}</span>
          <h1 className="logo-text">{skill.name}</h1>
        </div>
        <p className="subtitle">{skill.description}</p>
      </section>

      <section className="stats-section">
        <h2 className="stats-title">What You’ll Learn</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-header" style={{ cursor: "default" }}>
              <div className="skill-info">
                <span
                  className="skill-icon"
                  style={{
                    backgroundColor: skill.color + "20",
                    color: skill.color,
                  }}
                >
                  {skill.icon}
                </span>
                <div>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-meta">
                    <span className="skill-level">
                      {skill.progress}% Complete
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-content open">
              <ul className="subtopics-list">
                {skill.subtopics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="content">
          <h2 className="title">Customize this Skill Page</h2>
          <p className="description">
            Edit the detail content in <code>src/data/skills.js</code> and
            customize the skill page layout in{" "}
            <code>src/pages/SkillDetail.jsx</code>.
          </p>
          <div className="action-buttons">
            <button className="cta-button primary" type="button">
              Start Learning Path
            </button>
            <Link to="/" className="cta-button secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillDetail;
