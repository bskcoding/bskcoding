import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="main-container">
      <div className="not-found">
        <h1>404</h1>
        <p>The page you are looking for doesn't exist yet.</p>
        <Link to="/" className="cta-button primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
