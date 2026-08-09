import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ConfigBanner from "./components/ConfigBanner";
import RequireAuth from "./components/RequireAuth";
import ChangePasswordModal from "./components/ChangePasswordModal";
import ErrorBoundary from "./components/ErrorBoundary";
import { BASENAME } from "./utils/basePath";

// Route-level code splitting: each page is loaded on demand, so the main
// bundle stays small and large pages (interview/topic pages) are only
// downloaded when the user actually visits them.
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Roadmap90Day = lazy(
  () => import("./topics/90-day-job-roadmap/Roadmap90Day"),
);
const JavaTopics = lazy(() => import("./topics/java/JavaTopics"));
const JavaInterview = lazy(() => import("./topics/java/JavaInterview"));
const SpringBootTopics = lazy(
  () => import("./topics/spring-boot/SpringBootTopics"),
);
const SpringBootInterview = lazy(
  () => import("./topics/spring-boot/SpringBootInterview"),
);
const MicroservicesTopics = lazy(
  () => import("./topics/microservices/MicroservicesTopics"),
);
const MicroservicesInterview = lazy(
  () => import("./topics/microservices/MicroservicesInterview"),
);
const SQLTopics = lazy(() => import("./topics/sql/SQLTopics"));
const SQLInterview = lazy(() => import("./topics/sql/SQLInterview"));
const KafkaTopics = lazy(() => import("./topics/kafka/KafkaTopics"));
const KafkaInterview = lazy(() => import("./topics/kafka/KafkaInterview"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Contact = lazy(() => import("./pages/Contact"));
const Profile = lazy(() => import("./pages/Profile"));
const AiChat = lazy(() => import("./pages/AiChat"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Restores the original route after GitHub Pages 404 redirect.
// When a user refreshes /login, GitHub Pages serves 404.html which
// redirects to <base>/index.html?path=/login. This component reads that
// query param and navigates to the correct page, then cleans the URL.
// On GitHub Pages (<repo>), the clean URL must include the base prefix.
function RouteRestorer() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const path = params.get("path");

    if (path && path !== "/" && path !== "/index.html") {
      const cleanUrl = BASENAME === "/" ? path : BASENAME + path;
      // Replace the URL with the clean path and navigate to it
      window.history.replaceState({}, "", cleanUrl);
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return null;
}

function PageLoader() {
  return (
    <div className="page-loader">
      <div className="loader-spinner" />
    </div>
  );
}

function App() {
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <BrowserRouter basename={BASENAME}>
      <ErrorBoundary>
        <RouteRestorer />
        <div className="app-shell">
          <ConfigBanner />
          <div className="navbar-container">
            <NavBar onOpenChangePassword={() => setShowChangePassword(true)} />
          </div>
          <main className="page-container">
            <Suspense fallback={<PageLoader />}>
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
                  path="/microservices"
                  element={
                    <RequireAuth>
                      <MicroservicesTopics />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/microservices/interview"
                  element={
                    <RequireAuth>
                      <MicroservicesInterview />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/sql"
                  element={
                    <RequireAuth>
                      <SQLTopics />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/sql/interview"
                  element={
                    <RequireAuth>
                      <SQLInterview />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/kafka"
                  element={
                    <RequireAuth>
                      <KafkaTopics />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/kafka/interview"
                  element={
                    <RequireAuth>
                      <KafkaInterview />
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
                <Route
                  path="/ai-chat"
                  element={
                    <RequireAuth>
                      <AiChat />
                    </RequireAuth>
                  }
                />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          <ChangePasswordModal
            isOpen={showChangePassword}
            onClose={() => setShowChangePassword(false)}
          />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
