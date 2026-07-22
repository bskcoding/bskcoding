function About() {
  return (
    <div className="main-container about-page">
      <header className="about-hero">
        <div className="about-hero-inner">
          <div className="about-icon" aria-hidden>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" fill="#3b82f6" />
              <path d="M7 9h10v4H7z" fill="#1e1b2e" opacity="0.9" />
            </svg>
          </div>
          <div>
            <h1 className="about-title">About BSK CODING</h1>
            <p className="about-lead">
              A platform built by developers, for developers. We provide
              structured roadmaps and hands-on learning paths to help you land
              your dream job in tech.
            </p>
          </div>
        </div>
      </header>

      <section>
        <div className="about-grid">
          <article className="about-card reveal" style={{ "--d": "0s" }}>
            <h3>Founder</h3>
            <div className="about-stat">
              <span>5+</span> Years Experience
            </div>
            <p>
              Venkatesh Bharath is a passionate software engineer with 5 years
              of hands-on experience in Java, Spring Boot, and backend
              development. Created this platform to help fellow developers
              navigate their career journey.
            </p>
          </article>

          <article className="about-card reveal" style={{ "--d": "0.12s" }}>
            <h3>Our Mission</h3>
            <div className="about-stat">
              <span>100%</span> Free Resources
            </div>
            <p>
              Building a community-driven platform where developers can access
              structured learning paths, interview preparation materials, and
              real-world project guidance completely free.
            </p>
          </article>

          <article className="about-card reveal" style={{ "--d": "0.24s" }}>
            <h3>What We Offer</h3>
            <div className="about-stat">
              <span>7+</span> Learning Tracks
            </div>
            <p>
              Comprehensive roadmaps covering Java, Spring Boot, Microservices,
              Kafka, Databases, System Design, DSA, and interview preparation
              with practical, project-based learning.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default About;
