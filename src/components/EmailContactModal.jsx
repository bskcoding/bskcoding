import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function EmailContactModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSending(true);

    try {
      const templateParams = {
        from_name: name.trim(),
        from_email: email.trim(),
        subject: subject.trim() || `Message from ${name.trim()} via BSK Coding`,
        message: message.trim(),
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      setSending(false);
      setSuccess(true);

      // Reset form and close after showing success
      setTimeout(() => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error("Email send error:", err);
      setSending(false);
      setError("Sorry, we couldn't send your message. Please try again later.");
    }
  };

  return (
    <div className="email-modal-overlay" onClick={onClose}>
      <div
        className="email-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Send us an email"
      >
        <button
          className="email-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <div className="email-modal-header">
          <span className="email-modal-icon">✉️</span>
          <h2>Send Us a Message</h2>
          <p>Fill in the form below and we'll get back to you soon.</p>
        </div>

        {success ? (
          <div className="email-modal-success">
            <span className="email-modal-success-icon">✅</span>
            <h3>Message Sent!</h3>
            <p>
              Thank you, {name.trim()}! Your message has been sent successfully.
              We'll get back to you soon.
            </p>
          </div>
        ) : (
          <form className="email-modal-form" onSubmit={handleSubmit}>
            <div className="email-modal-field">
              <label htmlFor="email-name">Your Name</label>
              <input
                id="email-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
              />
            </div>

            <div className="email-modal-field">
              <label htmlFor="email-address">Your Email</label>
              <input
                id="email-address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div className="email-modal-field">
              <label htmlFor="email-subject">Subject (optional)</label>
              <input
                id="email-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Question about a course"
              />
            </div>

            <div className="email-modal-field">
              <label htmlFor="email-message">Message</label>
              <textarea
                id="email-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you?"
                rows="5"
              />
            </div>

            {error && <div className="email-modal-error">{error}</div>}

            <div className="email-modal-actions">
              <button
                type="button"
                className="email-modal-btn email-modal-btn-ghost"
                onClick={onClose}
                disabled={sending}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="email-modal-btn email-modal-btn-primary"
                disabled={sending}
              >
                {sending ? (
                  <>
                    <span className="email-modal-spinner" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        )}
        <style>{`
.email-modal-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.email-modal-field label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #cbd5e1;
  letter-spacing: 0.02em;
}

.email-modal-field input,
.email-modal-field textarea {
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8fafc;
  font-size: 0.95rem;
  font-family: inherit;
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.email-modal-field input::placeholder,
.email-modal-field textarea::placeholder {
  color: rgba(229, 231, 235, 0.5);
}

.email-modal-field input:focus,
.email-modal-field textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.35);
  background: rgba(15, 23, 42, 0.85);
}

.email-modal-field textarea {
  resize: vertical;
  min-height: 120px;
}
`}</style>
      </div>
    </div>
  );
}

export default EmailContactModal;
