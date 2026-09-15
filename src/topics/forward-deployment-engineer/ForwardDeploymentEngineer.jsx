import { Link } from "react-router-dom";
import { fdeModules } from "../../data/fde/forwardDeploymentEngineerModules";
import "./ForwardDeploymentEngineer.css";

function ForwardDeploymentEngineer() {
  const totalWeeks = fdeModules.reduce(
    (acc, mod) => acc + parseInt(mod.duration, 10),
    0,
  );

  return (
    <div className="fde-page">
      {/* ===== Hero ===== */}
      <section className="fde-hero">
        <h1 className="fde-title">FORWARD DEPLOYMENT ENGINEER</h1>
        <p className="fde-tagline">
          Forward Deployed Engineer (FDE) — Course Content · Modules 1 to 6
        </p>

        <p className="fde-description">
          A hands-on, production-focused track for engineers who build and ship{" "}
          <strong>Agentic AI</strong> systems into the real world. Master{" "}
          <strong>prompt engineering &amp; LLM mastery</strong>,{" "}
          <strong>Python &amp; API foundations</strong>,{" "}
          <strong>RAG systems &amp; vector intelligence</strong>,{" "}
          <strong>fine-tuning</strong>, and <strong>agentic AI orchestration</strong>{" "}
          — then take it all the way through{" "}
          <strong>LLMOps, Kubernetes, Terraform and AWS</strong> deployment. You
          finish as a forward deployed engineer: someone who can take an AI idea,
          build it, deploy it, and keep it running reliably in production.
        </p>

        <div className="fde-stats">
          <div className="fde-stat">
            <strong>{fdeModules.length}</strong>
            <span>Modules</span>
          </div>
          <div className="fde-stat">
            <strong>{fdeModules.length}</strong>
            <span>Hands-on Projects</span>
          </div>
          <div className="fde-stat">
            <strong>{totalWeeks}</strong>
            <span>Weeks</span>
          </div>
        </div>
      </section>

      {/* ===== Equal-size module grid ===== */}
      <h2 className="fde-section-title">Curriculum Overview</h2>
      <p className="fde-section-subtitle">
        Six modules in a single grid — click a card to open its full content.
      </p>

      <div className="fde-grid">
        {fdeModules.map((mod) => (
          <Link
            key={mod.id}
            to={`/maang/forward-deployment-engineer/${mod.id}`}
            className="fde-card-link"
          >
            <article className="fde-card">
              <div className="fde-card-head">
                <span className="fde-card-no">{mod.no}</span>
                <span className="fde-card-icon">{mod.icon}</span>
                <h3 className="fde-card-title">{mod.title}</h3>
              </div>

              <div className="fde-card-duration">Duration – {mod.duration}</div>

              <p className="fde-card-summary">{mod.summary}</p>

              <div className="fde-card-spacer" />

              <div className="fde-card-project">
                <strong>Project:</strong> {mod.project}
              </div>
              <span className="fde-card-open">View Module →</span>
            </article>
          </Link>
        ))}
      </div>

      <p className="fde-back">
        <Link to="/maang">← Back to MAANG Preparation</Link>
      </p>
    </div>
  );
}

export default ForwardDeploymentEngineer;