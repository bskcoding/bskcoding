import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          id: currentUser.uid,
          name:
            currentUser.displayName || currentUser.email?.split("@")[0] || "",
          email: currentUser.email,
          photoURL: currentUser.photoURL,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <p>Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {user.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
          <h1 className="profile-title">{user.name}</h1>
          <p className="profile-email">{user.email}</p>
        </div>

        <div className="profile-details">
          <div className="profile-detail-item profile-detail-primary">
            <span className="profile-detail-label">Email Address</span>
            <span className="profile-detail-value">{user.email}</span>
          </div>
          <div className="profile-detail-item">
            <span className="profile-detail-label">Display Name</span>
            <span className="profile-detail-value">{user.name}</span>
          </div>
          {user.photoURL && (
            <div className="profile-detail-item">
              <span className="profile-detail-label">Profile Photo</span>
              <img
                src={user.photoURL}
                alt="Profile"
                className="profile-photo"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
