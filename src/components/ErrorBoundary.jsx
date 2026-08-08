import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
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

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary-card">
            <div className="error-boundary-icon">⚠️</div>
            <h1 className="error-boundary-title">Something went wrong</h1>
            <p className="error-boundary-text">
              An unexpected error occurred while loading this page. This is
              usually caused by a stale cached version of the site.
            </p>
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
