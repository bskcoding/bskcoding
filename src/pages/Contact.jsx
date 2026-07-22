function Contact() {
  return (
    <div className="main-container">
      <section className="header-section">
        <div className="logo-container">
          <span className="logo-icon">✉️</span>
          <h1 className="logo-text">Contact Us</h1>
        </div>
        <p className="subtitle">
          Have questions? Reach out and we'll help you choose the best learning
          path.
        </p>
      </section>

      <section className="stats-section contact-section">
        <div className="contact-grid">
          <div className="contact-card">
            <h2>Email Support</h2>
            <p>support@bskcoding.com</p>
          </div>
          <div className="contact-card">
            <h2>Phone</h2>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="contact-card">
            <h2>Office</h2>
            <p>123 Learning Ave, Tech City</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
