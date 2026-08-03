import { BrowserRouter, Routes, Route } from "react-router-dom";
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
