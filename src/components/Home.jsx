import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  }

  return (
    <div className="home-container">
      <nav className="navbar">
        <h1 className="logo">MyApp</h1>
        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      </nav>

      <main className="home-content">
        <div className="welcome-card">
          <div className="avatar">
            {currentUser?.displayName?.[0]?.toUpperCase() ||
              currentUser?.email?.[0]?.toUpperCase()}
          </div>
          <h2>Welcome, {currentUser?.displayName || "User"}! 👋</h2>
          <p className="email">{currentUser?.email}</p>

          <div className="info-grid">
            <div className="info-card">
              <h3>Profile</h3>
              <p>Manage your account settings</p>
            </div>
            <div className="info-card">
              <h3>Dashboard</h3>
              <p>View your activity</p>
            </div>
            <div className="info-card">
              <h3>Messages</h3>
              <p>Check your inbox</p>
            </div>
            <div className="info-card">
              <h3>Settings</h3>
              <p>Customize your experience</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}