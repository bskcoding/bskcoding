import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getCurrentUser, logout } from "../utils/auth";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import ChangePasswordModal from "./ChangePasswordModal";

const CURRENT_USER_KEY = "bsk_current_user";

function NavBar({ onOpenChangePassword }) {
  const [user, setUser] = useState(getCurrentUser());
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [glowColor, setGlowColor] = useState("blue");
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setUser(getCurrentUser());
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userData = {
          id: currentUser.uid,
          name:
            currentUser.displayName || currentUser.email?.split("@")[0] || "",
          email: currentUser.email,
        };
        setUser(userData);
        // Save to localStorage for RequireAuth check
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userData));
      } else {
        setUser(null);
        localStorage.removeItem(CURRENT_USER_KEY);
      }
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("storage", handler);
    window.addEventListener("scroll", handleScroll);
    return () => {
      unsubscribe();
      window.removeEventListener("storage", handler);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate("/");
    setMenuOpen(false);
    setProfileOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setProfileOpen(false);
  };

  // Toggle profile dropdown
  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const handleGlowClick = () => {
    setGlowColor(glowColor === "blue" ? "green" : "blue");
  };

  return (
    <header className={`nav-bar${scrolled ? " nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <NavLink to="/" className="nav-brand" onClick={closeMenu}>
          <div
            className={`nav-logo-wrapper${glowColor === "green" ? " green-glow" : ""}`}
            onClick={handleGlowClick}
          >
            <img src="/bskimg.svg" alt="BSK Coding" className="nav-logo" />
          </div>
        </NavLink>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links${menuOpen ? " open" : ""}`}>
          <NavLink to="/" end className="nav-link" onClick={closeMenu}>
            <span>Home</span>
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>
            <span>About</span>
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
            <span>Contact</span>
          </NavLink>
          {!user && (
            <>
              <NavLink
                to="/login"
                className="nav-link nav-link-highlight"
                onClick={closeMenu}
              >
                <span>Login</span>
              </NavLink>
              <NavLink
                to="/register"
                className="nav-link nav-link-cta"
                onClick={closeMenu}
              >
                Register
              </NavLink>
            </>
          )}
          {user && (
            <>
              <div className="nav-user-wrapper" ref={profileRef}>
                <button
                  className="nav-user-trigger"
                  onClick={toggleProfile}
                  aria-label="User menu"
                  aria-expanded={profileOpen}
                >
                  <div className="nav-user-avatar">
                    {user.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                  <span className="nav-user-name">{user.name}</span>
                  <span className="nav-user-arrow">▼</span>
                </button>

                {profileOpen && (
                  <div className="profile-dropdown">
                    <div className="profile-dropdown-header">
                      <div className="profile-avatar-large">
                        {user.name?.charAt(0)?.toUpperCase() || "U"}
                      </div>
                      <div className="profile-info">
                        <div className="profile-name">{user.name}</div>
                        <div className="profile-email">{user.email}</div>
                      </div>
                    </div>

                    <div className="profile-dropdown-divider" />

                    <button
                      className="profile-dropdown-item"
                      onClick={() => {
                        setProfileOpen(false);
                        navigate("/profile");
                      }}
                    >
                      <span className="profile-item-icon">👤</span>
                      <span>My Profile</span>
                    </button>

                    <button
                      className="profile-dropdown-item"
                      onClick={() => {
                        setProfileOpen(false);
                        if (onOpenChangePassword) {
                          onOpenChangePassword();
                        }
                      }}
                    >
                      <span className="profile-item-icon">🔒</span>
                      <span>Change Password</span>
                    </button>

                    <div className="profile-dropdown-divider" />

                    <button
                      className="profile-dropdown-item profile-dropdown-logout"
                      onClick={handleLogout}
                    >
                      <span className="profile-item-icon">🚪</span>
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
