import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
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

function App() {
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-shell">
        <ConfigBanner />
        <div className="navbar-container">
          <NavBar onOpenChangePassword={() => setShowChangePassword(true)} />
        </div>
        <main className="page-container">
          <Routes>
            {/* Redirect root to /bskcoding */}
            <Route path="/" element={<Navigate to="/bskcoding" replace />} />

            {/* Public routes */}
            <Route path="/bskcoding/login" element={<Login />} />
            <Route path="/bskcoding/register" element={<Register />} />

            {/* Protected routes */}
            <Route
              path="/bskcoding"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/bskcoding/about"
              element={
                <RequireAuth>
                  <About />
                </RequireAuth>
              }
            />
            <Route
              path="/bskcoding/roadmap"
              element={
                <RequireAuth>
                  <Roadmap90Day />
                </RequireAuth>
              }
            />
            <Route
              path="/bskcoding/java"
              element={
                <RequireAuth>
                  <JavaTopics />
                </RequireAuth>
              }
            />
            <Route
              path="/bskcoding/java/interview"
              element={
                <RequireAuth>
                  <JavaInterview />
                </RequireAuth>
              }
            />
            <Route
              path="/bskcoding/spring-boot"
              element={
                <RequireAuth>
                  <SpringBootTopics />
                </RequireAuth>
              }
            />
            <Route
              path="/bskcoding/spring-boot/interview"
              element={
                <RequireAuth>
                  <SpringBootInterview />
                </RequireAuth>
              }
            />
            <Route
              path="/bskcoding/contact"
              element={
                <RequireAuth>
                  <Contact />
                </RequireAuth>
              }
            />
            <Route
              path="/bskcoding/profile"
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
