import { useState } from "react";
import { Link } from "react-router-dom";
import { skills } from "../data/skills";
import SkillCard from "../components/SkillCard";

function Home() {
  const linkFor = (id) => {
    if (id === "90-day-job-roadmap") return "/roadmap";
    if (id === "java") return "/java";
    if (id === "spring-boot") return "/spring-boot";
    return "#";
  };

  return (
    <div className="main-container">
      {/* Hero Section */}
      <section className="header-section">
        <div className="logo-container">
          <span className="logo-icon">🚀</span>
          <h1 className="logo-text">BSK CODING</h1>
        </div>
        <p className="subtitle">
          Master modern software engineering with real project learning paths,
          expert-led courses, and career-ready outcomes.
        </p>
        <div className="hero-actions">
          <Link to="/roadmap" className="cta-button primary">
            Start Learning Path
          </Link>
          <Link to="/about" className="cta-button secondary">
            Learn More
          </Link>
        </div>
        <div className="hero-badges">
          <div className="hero-badge">
            <span>7</span>
            <p>Expert Tracks</p>
          </div>
          <div className="hero-badge">
            <span>120+</span>
            <p>Hands-on Modules</p>
          </div>
          <div className="hero-badge">
            <span>24/7</span>
            <p>Support</p>
          </div>
        </div>
      </section>

      {/* Skills Grid with Sub-grids */}
      <section className="skills-section">
        <h2 className="section-title">Learning Tracks</h2>
        <p className="section-subtitle">
          Choose your path and start building real-world skills
        </p>
        <div className="skills-grid">
          {skills.map((skill) => {
            const linkPath = linkFor(skill.id);
            return (
              <div key={skill.id} className="skill-card-container">
                <Link to={linkPath} className="skill-card-link">
                  <SkillCard skill={skill} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="content">
          <h2 className="title">Ready to Transform Your Career?</h2>
          <p className="description">
            Join thousands of developers who are mastering cutting-edge
            technologies through our expertly crafted, hands-on learning paths
            designed for real-world success.
          </p>
          <div className="action-buttons">
            <button className="cta-button primary" type="button">
              Explore All Courses
            </button>
            <button className="cta-button secondary" type="button">
              View Learning Paths
            </button>
          </div>
          <div className="footer-badge">
            <span className="badge">Trusted by developers worldwide</span>
            <span className="badge">•</span>
            <span className="badge">Industry-recognized certificates</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
