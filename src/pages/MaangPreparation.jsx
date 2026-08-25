import { Link } from "react-router-dom";
import { skills } from "../data/skills";
import MaangLetterGrid from "../components/MaangLetterGrid";

/**
 * MaangPreparation
 *
 * Landing page for the MAANG Preparation track. Shows the colourful
 * letter grid (every character a different colour) plus the list of
 * sub-topics you need to master to crack the top product companies.
 *
 * Sub-topics that have a dedicated page are rendered as navigation links;
 * the rest remain as static cards.
 */

// Map MAANG sub-topics to their route paths (only the ones that exist)
const subtopicRoutes = {
  "📊 DSA Foundation": "/maang/basic-dsa",
};

function MaangPreparation() {
  const maang = skills.find((s) => s.id === "maang") || {};

  const charColors = maang.charColors;
  const subtopics = maang.subtopics || [];
  const description =
    maang.description ||
    "Master DSA + System Design + Reactive + Agentic AI to crack top product-based companies";

  return (
    <div className="maang-page">
      <section className="maang-page-hero">
        <h1 className="maang-page-title">MAANG Preparation</h1>
        <p className="maang-page-subtitle">{description}</p>

        <div className="maang-letter-wrap maang-page-grid">
          <MaangLetterGrid charColors={charColors} />
        </div>
      </section>

      <section className="maang-subtopics">
        <h2 className="section-title">What You'll Master</h2>
        <p className="section-subtitle">
          A complete learning path from fundamentals to mock interviews
        </p>
        <div className="maang-subtopics-grid">
          {subtopics.map((topic, i) => {
            const route = subtopicRoutes[topic];

            return route ? (
              <Link
                key={topic}
                to={route}
                className="maang-subtopic-card maang-subtopic-link"
              >
                <span className="maang-subtopic-shine" aria-hidden="true" />
                <div className="maang-subtopic-top">
                  <span
                    className="maang-subtopic-emoji"
                    style={{ "--ml-idx": i }}
                    aria-hidden="true"
                  >
                    {topic.match(/^\S+/)?.[0] ?? "📌"}
                  </span>
                  <span className="maang-subtopic-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="maang-subtopic-name">{topic}</span>
              </Link>
            ) : (
              <div key={topic} className="maang-subtopic-card">
                <span className="maang-subtopic-shine" aria-hidden="true" />
                <div className="maang-subtopic-top">
                  <span
                    className="maang-subtopic-emoji"
                    style={{ "--ml-idx": i }}
                    aria-hidden="true"
                  >
                    {topic.match(/^\S+/)?.[0] ?? "📌"}
                  </span>
                  <span className="maang-subtopic-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="maang-subtopic-name">{topic}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="maang-page-cta">
        <Link to="/" className="cta-button secondary">
          Back to Home
        </Link>
      </section>
    </div>
  );
}

export default MaangPreparation;
