import { useEffect, useMemo, useRef, useState } from "react";
import {
  changePassword,
  isPasswordProvider,
  isGoogleProvider,
} from "../utils/firebaseAuth";

// Password policy: min 8 chars, one upper, one lower, one number, one special.
const PASSWORD_RULES = [
  { key: "length", label: "At least 8 characters", test: (v) => v.length >= 8 },
  {
    key: "upper",
    label: "One uppercase letter",
    test: (v) => /[A-Z]/.test(v),
  },
  {
    key: "lower",
    label: "One lowercase letter",
    test: (v) => /[a-z]/.test(v),
  },
  { key: "number", label: "One number", test: (v) => /[0-9]/.test(v) },
  {
    key: "special",
    label: "One special character",
    test: (v) => /[^A-Za-z0-9]/.test(v),
  },
];

function validateNewPassword(value) {
  return PASSWORD_RULES.every((rule) => rule.test(value));
}

function ChangePasswordModal({ isOpen, onClose }) {
  const hasPasswordProvider = isPasswordProvider();
  const hasGoogleProvider = isGoogleProvider();

  // Show Google notice only if user is Google-only (no password provider)
  const showGoogleNotice = hasGoogleProvider && !hasPasswordProvider;

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message }
  const toastTimer = useRef(null);

  // Reset the form whenever the modal opens.
  useEffect(() => {
    if (isOpen) {
      return () => {
        setNewPassword("");
        setConfirmPassword("");
        setErrors({});
        setTouched({});
        setLoading(false);
      };
    }
  }, [isOpen]);

  // Close on Escape key.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Close when clicking outside the modal
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      // Close if clicking on the overlay (not the modal content)
      if (event.target === event.currentTarget) {
        onClose();
      }
    };

    // Add listener after a small delay to avoid interfering with form interactions
    const timer = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    },
    [],
  );

  const showToast = (type, message) => {
    setToast({ type, message });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 4000);
  };

  const ruleState = useMemo(
    () =>
      PASSWORD_RULES.map((rule) => ({
        ...rule,
        passed: rule.test(newPassword),
      })),
    [newPassword],
  );

  const validate = () => {
    const next = {};

    if (!newPassword) {
      next.newPassword = "New password is required.";
    } else if (!validateNewPassword(newPassword)) {
      next.newPassword =
        "Password must be 8+ chars with upper, lower, number & special character.";
    }

    if (!confirmPassword) {
      next.confirmPassword = "Please confirm your new password.";
    } else if (confirmPassword !== newPassword) {
      next.confirmPassword = "Passwords do not match.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      newPassword: true,
      confirmPassword: true,
    });
    if (!validate()) return;

    setLoading(true);
    try {
      await changePassword(newPassword);
      showToast("success", "Password updated successfully.");
      setTimeout(() => {
        setLoading(false);
        onClose();
      }, 900);
    } catch (err) {
      setLoading(false);
      const code = err?.code || "";
      if (
        code === "auth/invalid-credential" ||
        code === "auth/wrong-password"
      ) {
        showToast("error", "Invalid credentials. Please try again.");
      } else if (code === "auth/too-many-requests") {
        showToast("error", "Too many attempts. Please try again later.");
      } else if (code === "auth/requires-recent-login") {
        showToast("error", "Please log in again and retry.");
      } else {
        showToast("error", "Could not update password. Please try again.");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cpwd-overlay">
      <div
        className="cpwd-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cpwd-title"
      >
        <button
          className="cpwd-close"
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          ×
        </button>

        <h2 id="cpwd-title" className="cpwd-title">
          <span className="cpwd-title-icon">🔒</span> Change Password
        </h2>

        {showGoogleNotice ? (
          <div className="cpwd-google-notice">
            <div className="cpwd-google-badge">G</div>
            <p>
              This account uses Google Sign-In. Password changes are managed
              through your Google Account.
            </p>
            <button
              type="button"
              className="cpwd-btn cpwd-btn-primary"
              onClick={onClose}
            >
              Got it
            </button>
          </div>
        ) : (
          <form className="cpwd-form" onSubmit={handleSubmit} noValidate>
            <div className="cpwd-field">
              <label htmlFor="cpwd-new">New Password</label>
              <input
                id="cpwd-new"
                type="password"
                autoComplete="new-password"
                value={newPassword}
                disabled={loading}
                className={
                  touched.newPassword && errors.newPassword
                    ? "cpwd-input cpwd-input-error"
                    : "cpwd-input"
                }
                onChange={(e) => setNewPassword(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, newPassword: true }))}
                placeholder="Enter new password"
              />
              {touched.newPassword && errors.newPassword && (
                <span className="cpwd-error">{errors.newPassword}</span>
              )}
              {newPassword && (
                <ul className="cpwd-rules">
                  {ruleState.map((rule) => (
                    <li
                      key={rule.key}
                      className={rule.passed ? "cpwd-rule-ok" : "cpwd-rule-no"}
                    >
                      {rule.passed ? "✔" : "○"} {rule.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="cpwd-field">
              <label htmlFor="cpwd-confirm">Confirm Password</label>
              <input
                id="cpwd-confirm"
                type="password"
                autoComplete="new-password"
                value={confirmPassword}
                disabled={loading}
                className={
                  touched.confirmPassword && errors.confirmPassword
                    ? "cpwd-input cpwd-input-error"
                    : "cpwd-input"
                }
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={() =>
                  setTouched((t) => ({ ...t, confirmPassword: true }))
                }
                placeholder="Re-enter new password"
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <span className="cpwd-error">{errors.confirmPassword}</span>
              )}
            </div>

            <div className="cpwd-actions">
              <button
                type="button"
                className="cpwd-btn cpwd-btn-ghost"
                onClick={onClose}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="cpwd-btn cpwd-btn-primary"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="cpwd-spinner" /> Updating...
                  </>
                ) : (
                  "Update Password"
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {toast && (
        <div className={`cpwd-toast cpwd-toast-${toast.type}`}>
          <span className="cpwd-toast-icon">
            {toast.type === "success" ? "✓" : "!"}
          </span>
          {toast.message}
        </div>
      )}
    </div>
  );
}

export default ChangePasswordModal;
