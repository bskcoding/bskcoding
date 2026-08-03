import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ConfigBanner from "./components/ConfigBanner";
import Home from "./pages/Home";
import About from "./pages/About";
import Roadmap90Day from "./topics/90-day-job-roadmap/Roadmap90Day";
import JavaTopics from "./topics/java/JavaTopics";
import JavaInterview from "./pages/JavaInterview";
import SpringBootTopics from "./topics/spring-boot/SpringBootTopics";
import SpringBootInterview from "./pages/SpringBootInterview";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import RequireAuth from "./components/RequireAuth";
import ChangePasswordModal from "./components/ChangePasswordModal";

// Restores the original route after GitHub Pages 404 redirect.
// When a user refreshes /login, GitHub Pages serves 404.html which
// redirects to /index.html?path=/login. This component reads that
// query param and navigates to the correct page, then cleans the URL.
function RouteRestorer() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const path = params.get("path");

    if (path && path !== "/" && path !== "/index.html") {
      // Replace the URL with the clean path and navigate to it
      window.history.replaceState({}, "", path);
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return null;
}

function App() {
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <BrowserRouter>
      <RouteRestorer />
      <div className="app-shell">
        <ConfigBanner />
        <div className="navbar-container">
          <NavBar onOpenChangePassword={() => setShowChangePassword(true)} />
        </div>
        <main className="page-container">
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected routes */}
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/about"
              element={
                <RequireAuth>
                  <About />
                </RequireAuth>
              }
            />
            <Route
              path="/roadmap"
              element={
                <RequireAuth>
                  <Roadmap90Day />
                </RequireAuth>
              }
            />
            <Route
              path="/java"
              element={
                <RequireAuth>
                  <JavaTopics />
                </RequireAuth>
              }
            />
            <Route
              path="/java/interview"
              element={
                <RequireAuth>
                  <JavaInterview />
                </RequireAuth>
              }
            />
            <Route
              path="/spring-boot"
              element={
                <RequireAuth>
                  <SpringBootTopics />
                </RequireAuth>
              }
            />
            <Route
              path="/spring-boot/interview"
              element={
                <RequireAuth>
                  <SpringBootInterview />
                </RequireAuth>
              }
            />
            <Route
              path="/contact"
              element={
                <RequireAuth>
                  <Contact />
                </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <ChangePasswordModal
          isOpen={showChangePassword}
          onClose={() => setShowChangePassword(false)}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
