import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Activity Log</h3>
      <Link to="/">All</Link>
      <Link to="/auth">Auth</Link>
      <Link to="/system">System</Link>
    </div>
  );
}