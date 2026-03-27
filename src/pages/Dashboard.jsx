import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../api/usersApi";
import { generateLog } from "../utils/generateLogs";
import Filters from "../components/Filters";
import LogList from "../components/LogList";
import SummaryCards from "../components/SummaryCards";
import AddEventPanel from "../components/AddEventPanel";
import UserPanel from "../components/UserPanel";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [logs, setLogs] = useState([]);
  const [search, setSearch] = useState("");
  const [severity, setSeverity] = useState("");
  const [live, setLive] = useState(true);

const navigate = useNavigate();
   
const addManualLog = (data) => {
  const manualLog = {
    id: Date.now(),
    time: new Date().toLocaleTimeString(),
    username: data.username,   
    user: data.email,
    action: data.action,
    severity: data.severity,
    category: data.category,
  };

  setLogs((prev) => [manualLog, ...prev]);
};

  
  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  // Async updates
 useEffect(() => {
  if (!users.length || !live) return;  

  const interval = setInterval(() => {
    const randomUser = users[Math.floor(Math.random()*users.length)];
    const newLog = generateLog(randomUser);
    setLogs(prev => [newLog, ...prev]);
  }, 4000);

  return () => clearInterval(interval);
}, [users, live]);

  // PERFORMANCE OPTIMIZATION using useMemo
  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      const matchesSearch =
        log.user.toLowerCase().includes(search.toLowerCase());

      const matchesSeverity = severity
        ? log.severity === severity
        : true;

      return matchesSearch && matchesSeverity;
    });
  }, [logs, search, severity]);

 return (
  <div className="page">

    {/* HEADER WITH LIVE BUTTON */}
    <div className="header-row">
  <h1 className="page-title">Activity Log</h1>

  <div className="header-actions">
    {/* LOGIN BUTTON */}
    <button
  className="nav-btn login-btn"
  onClick={() => navigate("/login")}
>
  Login
</button>

    

    {/* LIVE BUTTON */}
    <button
      className={`live-btn ${live ? "on" : "off"}`}
      onClick={() => setLive(!live)}
    >
      ● Live
    </button>
  </div>
</div>

    <div className="content-layout">

      {/* LEFT USER PANEL */}
      <div className="left-column">
        <UserPanel onAdd={addManualLog} />
      </div>

      {/* RIGHT DASHBOARD */}
      <div className="right-column">
        <h2 className="title">Dashboard</h2>

        <Filters
          search={search}
          setSearch={setSearch}
          severity={severity}
          setSeverity={setSeverity}
        />

        <SummaryCards logs={logs} />

        <LogList logs={filteredLogs} />
      </div>

    </div>
  </div>
);
}