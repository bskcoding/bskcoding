import { Link } from "react-router-dom";
import "../java/JavaTopics.css";

function KafkaTopics() {
  const kafkaColor = "#07acff";

  return (
    <div className="java-topics-page">
      <section className="header-section">
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#60a5fa", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500, padding: "8px 16px", borderRadius: "8px", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}>← Back to Home</Link>
        </div>
        <div className="logo-container">
          <span className="logo-icon">⚡</span>
          <h1 className="logo-text">APACHE KAFKA</h1>
        </div>
        <p className="subtitle">
          Learn event streaming, real-time pipelines, and Kafka interview prep
        </p>
      </section>

      <section className="skills-section">
        <h2 className="section-title">Choose Your Path</h2>
        <p className="section-subtitle">
          Select a learning track to get started
        </p>
        <div className="skills-grid">
          <Link to="/kafka/course" className="skill-card-link">
            <div className="skill-card" style={{ borderColor: kafkaColor }}>
              <div className="skill-card-top">
                <span
                  className="skill-card-icon"
                  style={{
                    backgroundColor: kafkaColor + "18",
                    color: kafkaColor,
                    boxShadow: `0 0 20px ${kafkaColor}25, inset 0 0 0 1px ${kafkaColor}30`,
                  }}
                >
                  📚
                </span>
                <span className="skill-card-title">Kafka Full Course</span>
              </div>
              <div className="skill-card-middle">
                <span className="skill-card-line" />
                <span
                  className="skill-card-badge"
                  style={{
                    background: kafkaColor + "18",
                    color: kafkaColor,
                    borderColor: kafkaColor + "40",
                  }}
                >
                  Course
                </span>
                <span className="skill-card-line" />
              </div>
              <div className="skill-card-bottom">
                <p className="skill-card-desc">
                  Understand Kafka architecture, producers, consumers,
                  replication, and streaming patterns
                </p>
                <button
                  className="skill-card-btn"
                  style={{
                    background: kafkaColor + "15",
                    color: kafkaColor,
                    borderColor: kafkaColor + "35",
                  }}
                >
                  Start Learning
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
          </Link>

          <Link to="/kafka/interview" className="skill-card-link">
            <div className="skill-card" style={{ borderColor: kafkaColor }}>
              <div className="skill-card-top">
                <span
                  className="skill-card-icon"
                  style={{
                    backgroundColor: kafkaColor + "18",
                    color: kafkaColor,
                    boxShadow: `0 0 20px ${kafkaColor}25, inset 0 0 0 1px ${kafkaColor}30`,
                  }}
                >
                  💼
                </span>
                <span className="skill-card-title">Kafka Interview Q&A</span>
              </div>
              <div className="skill-card-middle">
                <span className="skill-card-line" />
                <span
                  className="skill-card-badge"
                  style={{
                    background: kafkaColor + "18",
                    color: kafkaColor,
                    borderColor: kafkaColor + "40",
                  }}
                >
                  100 Questions
                </span>
                <span className="skill-card-line" />
              </div>
              <div className="skill-card-bottom">
                <p className="skill-card-desc">
                  Practice Kafka interview questions with detailed answers and
                  examples
                </p>
                <button
                  className="skill-card-btn"
                  style={{
                    background: kafkaColor + "15",
                    color: kafkaColor,
                    borderColor: kafkaColor + "35",
                  }}
                >
                  Start Practicing
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
          </Link>
        </div>
      </section>
    </div>
  );
}

export default KafkaTopics;
