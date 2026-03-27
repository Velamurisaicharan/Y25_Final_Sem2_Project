 import { useState } from "react";

export default function UserPanel({ onAdd }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    ip: "",
    category: "AUTH",
    action: "LOGIN_SUCCESS",
    severity: "INFO",
  });

  const update = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const submit = () => {
  if (!form.username || !form.email) return;

  onAdd({
    username: form.username,
    email: form.email,
    ip: form.ip,
    category: form.category,
    action: form.action,
    severity: form.severity,
  });
};

  return (
    <div className="user-panel">
      <div className="panel-title">
        <h3>Add New Event</h3>
        <p>Fill details and submit</p>
      </div>

      <label>Username</label>
      <input
        value={form.username}
        onChange={(e) => update("username", e.target.value)}
        placeholder="john_doe"
      />

      <label>Email</label>
      <input
        value={form.email}
        onChange={(e) => update("email", e.target.value)}
        placeholder="john@email.com"
      />

      <label>IP Address</label>
      <input
        value={form.ip}
        onChange={(e) => update("ip", e.target.value)}
      />

      <label>Category</label>
      <select onChange={(e) => update("category", e.target.value)}>
        <option>AUTH</option>
        <option>DATA</option>
        <option>SYSTEM</option>
        <option>API</option>
        <option>USER</option>
      </select>

      <label>Action</label>
      <input
        value={form.action}
        onChange={(e) => update("action", e.target.value)}
      />

      <div className="severity-row">
        {["INFO", "WARN", "ERROR", "SUCCESS"].map((s) => (
          <button
            key={s}
            className={form.severity === s ? "active" : ""}
            onClick={() => update("severity", s)}
          >
            {s}
          </button>
        ))}
      </div>

      <button className="submit-btn" onClick={submit}>
        Submit Event
      </button>
    </div>
  );
}