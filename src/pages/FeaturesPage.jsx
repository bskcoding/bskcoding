import { Link } from "react-router-dom";
import MaangLetterGrid from "../components/MaangLetterGrid";
import ColoredMaangText from "../components/ColoredMaangText";
import { getCurrentUser } from "../utils/auth";
import "./FeaturesPage.css";

// Same vibrant palette the MAANG brand uses across the app.
const MAANG_COLORS = ["#FF5733", "#FFBD33", "#33FF57", "#33A1FF", "#A133FF"];

/**
 * FeaturesPage
 *
 * A dedicated landing page that showcases the two premium features of
 * BSK Coding side by side:
 *   1. MAANG Preparation — structured interview prep track
 *   2. Resume Builder    — ATS-friendly resume generator (login required)
 *
 * Reached from the navbar "MAANG Kit" dropdown.
 */
function FeaturesPage() {
  const isLoggedIn = !!getCurrentUser();

  return (
    <div className="main-container features-page">
      {/* Hero */}
      <section className="features-hero">
        <span className="features-hero-eyebrow">✨ BSK CODING Features</span>
        <h1 className="features-hero-title">Tools That Get You Hired</h1>
        <p className="features-hero-subtitle">
          Two power-packed features designed to take you from preparation to
          offer letter — crack MAANG-level interviews and build a resume that
          stands out to recruiters.
        </p>
      </section>

      {/* Feature cards grid */}
      <section className="features-grid">
        {/* MAANG Preparation card */}
        <Link to="/maang" className="feature-card feature-card-maang">
          <div className="feature-card-badge feature-card-badge-maang">
            {isLoggedIn ? "🔥 Featured" : "🔒 Login required"}
          </div>
          <div className="feature-card-visual feature-card-visual-maang">
            <MaangLetterGrid charColors={MAANG_COLORS} compact />
          </div>
          <h2 className="feature-card-title feature-card-title-maang">
            <span className="feature-card-title-emoji">🏆</span>
            <span className="maang-letters-glued">
              <ColoredMaangText text="MAANG" colors={MAANG_COLORS} />
              <span className="maang-word-gap" aria-hidden="true" />
              <ColoredMaangText text="Preparation" colors={MAANG_COLORS} color="#33FF57" />
            </span>
          </h2>
          <p className="feature-card-desc">
            A complete, structured interview preparation track — from DSA
            foundation to advanced graphs, dynamic programming and system
            design, with weekly plans to keep you on track.
          </p>
          <div className="feature-card-tags">
            <span>DSA Foundation</span>
            <span>Graphs</span>
            <span>Dynamic Programming</span>
            <span>System Design</span>
          </div>
          <span className="feature-card-cta">
            Explore MAANG Preparation
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
          </span>
        </Link>

        {/* Resume Builder card */}
        <Link to="/resume-builder" className="feature-card feature-card-resume">
          <div className="feature-card-badge feature-card-badge-resume">
            {isLoggedIn ? "⚡ Ready to use" : "🔒 Login required"}
          </div>
          <div className="feature-card-visual feature-card-visual-resume">
            <span className="feature-resume-icon">📄</span>
          </div>
          <h2 className="feature-card-title">
            <span className="feature-card-title-emoji">🚀</span> Resume Builder
          </h2>
          <p className="feature-card-desc">
            Create a professional, ATS-friendly resume in minutes. Pick a
            template, fill in your details and export a polished PDF that gets
            you noticed by recruiters.
          </p>
          <div className="feature-card-tags">
            <span>ATS Friendly</span>
            <span>Pro Templates</span>
            <span>PDF Export</span>
          </div>
          <span className="feature-card-cta">
            Build My Resume
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
          </span>
        </Link>
      </section>
    </div>
  );
}

export default FeaturesPage;
