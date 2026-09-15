import { Component } from "react";
import { Link } from "react-router-dom";

// Auto-reload settings. When a page fails to load (commonly a stale cached
// bundle after a deploy), the boundary automatically reloads the page up to
// MAX_AUTO_RELOADS times before giving up and showing the manual buttons.
const AUTO_RELOAD_KEY = "errorBoundaryAutoReloadCount";
const MAX_AUTO_RELOADS = 2; // number of automatic retry reloads per session visit
const AUTO_RELOAD_DELAY_MS = 3000; // show a short notice before reloading

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, reloading: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  componentDidMount() {
    if (this.state.hasError) {
      // A load error happened: try to recover by reloading automatically.
      this.scheduleAutoReload();
    } else {
      // Loaded fine: reset the retry counter for the next visit.
      this.resetReloadCount();
    }
  }

  componentWillUnmount() {
    if (this.reloadTimer) clearTimeout(this.reloadTimer);
  }

  scheduleAutoReload() {
    let count = this.getReloadCount();

    if (count >= MAX_AUTO_RELOADS) {
      // Already tried auto-reloading enough this session — show manual UI.
      return;
    }

    this.setState({ reloading: true });
    this.setReloadCount(count + 1);

    // Give the user a moment to see the notice, then reload.
    this.reloadTimer = setTimeout(this.handleReload, AUTO_RELOAD_DELAY_MS);
  }

  getReloadCount() {
    try {
      return parseInt(window.sessionStorage.getItem(AUTO_RELOAD_KEY) || "0", 10);
    } catch (e) {
      return 0;
    }
  }

  setReloadCount(value) {
    try {
      window.sessionStorage.setItem(AUTO_RELOAD_KEY, String(value));
    } catch (e) {
      /* storage unavailable — ignore */
    }
  }

  resetReloadCount() {
    try {
      window.sessionStorage.removeItem(AUTO_RELOAD_KEY);
    } catch (e) {
      /* storage unavailable — ignore */
    }
  }

  render() {
    if (this.state.hasError) {
      const auto = this.state.reloading;
      return (
        <div className="error-boundary">
          <div className="error-boundary-card">
            <div className="error-boundary-icon">
              {auto ? "🔄" : "⚠️"}
            </div>
            <h1 className="error-boundary-title">
              {auto ? "Reloading automatically" : "Something went wrong"}
            </h1>
            <p className="error-boundary-text">
              {auto
                ? "A temporary problem happened while loading this page. We're refreshing it for you now — this usually fixes itself."
                : "An unexpected error occurred while loading this page. This is usually caused by a stale cached version of the site."}
            </p>
            {auto && (
              <p className="error-boundary-auto">
                Reloading in {AUTO_RELOAD_DELAY_MS / 1000} seconds… If the page
                doesn't refresh automatically, use the button below.
              </p>
            )}
            {this.state.error && (
              <pre className="error-boundary-detail">
                {this.state.error.message || String(this.state.error)}
              </pre>
            )}
            <div className="error-boundary-actions">
              <button
                type="button"
                className="error-boundary-btn error-boundary-primary"
                onClick={this.handleReload}
              >
                🔄 Reload Page
              </button>
              <Link
                to="/"
                className="error-boundary-btn error-boundary-secondary"
              >
                🏠 Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
