import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ConfigBanner from "./components/ConfigBanner";
import Home from "./pages/Home";
import About from "./pages/About";
import Roadmap90Day from "./topics/90-day-job-roadmap/Roadmap90Day";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SkillDetail from "./pages/SkillDetail";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import RequireAuth from "./components/RequireAuth";
import ChangePasswordModal from "./components/ChangePasswordModal";

function App() {
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <HashRouter>
      <div className="app-shell">
        <ConfigBanner />
        <div className="navbar-container">
          <NavBar onOpenChangePassword={() => setShowChangePassword(true)} />
        </div>
        <main className="page-container">
          <Routes>
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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/roadmap"
              element={
                <RequireAuth>
                  <Roadmap90Day />
                </RequireAuth>
              }
            />
            <Route
              path="/course/:skillId"
              element={
                <RequireAuth>
                  <SkillDetail />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <ChangePasswordModal
          isOpen={showChangePassword}
          onClose={() => setShowChangePassword(false)}
        />
      </div>
    </HashRouter>
  );
}

export default App;
