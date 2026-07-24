import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerWithEmail } from "../utils/firebaseAuth";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const user = await registerWithEmail(name, email, password);
      localStorage.setItem(
        "bsk_current_user",
        JSON.stringify({
          id: user.uid,
          name: user.displayName || name,
          email: user.email,
        }),
      );
      navigate("/bskcoding");
    } catch (err) {
      const code = err?.code || "";
      let msg = "Registration failed. Please try again.";

      if (code === "auth/email-already-in-use") {
        msg =
          "This email is already registered. Please use a different email or sign in.";
      } else if (code === "auth/invalid-email") {
        msg = "Please enter a valid email address.";
      } else if (code === "auth/weak-password") {
        msg = "Password is too weak. Please use a stronger password.";
      } else if (code === "auth/too-many-requests") {
        msg = "Too many attempts. Please try again later.";
      } else if (err?.message) {
        msg = err.message;
      }

      setError(msg);
      console.error("Register error:", err);
    }
  };

  return (
    <div className="main-container auth-page">
      <div className="register-card">
        {/* Top icon */}
        <div className="register-icon">
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

        <h2 className="register-heading">Create Your Account</h2>
        <p className="register-sub">
          Join BSK Coding and start learning today.
        </p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="register-form">
          <div className="register-input-wrap">
            <span className="register-input-icon">👤</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>

          <div className="register-input-wrap">
            <span className="register-input-icon">📧</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="register-input-wrap">
            <span className="register-input-icon">🔒</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <p className="register-footer">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/bskcoding/login")}
            className="register-link"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
