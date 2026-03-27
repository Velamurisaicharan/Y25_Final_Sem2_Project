import { useNavigate } from "react-router-dom";
import bg from "../assets/background.png"; 

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div
      className="welcome-page"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="welcome-card">
        <h1>Activity Log Dashboard</h1>

        <p>Real-time monitoring and activity tracking system.</p>
        <p>Manage logs, users and live events efficiently.</p>

        <div className="welcome-buttons">
  <button
    onClick={() => navigate("/login")}
    style={{
      padding: "14px 32px",
      borderRadius: "999px",
      border: "none",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      color: "white",
      background: "linear-gradient(135deg,#6366f1,#7c3aed)",
      boxShadow: "0 10px 25px rgba(99,102,241,.35)",
      transition: "all 0.25s ease"
    }}
  >
    Login
  </button>
</div>
      </div>
    </div>
  );
}