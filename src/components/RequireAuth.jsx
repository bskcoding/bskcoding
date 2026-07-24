import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

export default function RequireAuth({ children }) {
  const location = useLocation();
  if (!isAuthenticated()) {
    return (
      <Navigate to="/bskcoding/login" state={{ from: location }} replace />
    );
  }
  return children;
}
