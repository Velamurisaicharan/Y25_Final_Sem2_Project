import { useState } from "react";

export default function AddEventPanel({ addManualLog }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    ip: "",
    category: "AUTH",
    action: "LOGIN_SUCCESS",
    severity: "INFO"
  });

  const handleSubmit = () => {
    addManualLog({
      ...form,
      time: new Date().toLocaleTimeString()
    });

    setForm({
      username: "",
      email: "",
      ip: "",
      category: "AUTH",
      action: "LOGIN_SUCCESS",
      severity: "INFO"
    });
  };

  return (
    <div className="add-panel">
      <div className="panel-header">
        <h3>✨ Add New Event</h3>
        <p>Fill in details or load from API</p>
      </div>

      <label>Username *</label>
      <input
        value={form.username}
        onChange={(e)=>setForm({...form,username:e.target.value})}
        placeholder="john_doe"
      />

      <label>Email *</label>
      <input
        value={form.email}
        onChange={(e)=>setForm({...form,email:e.target.value})}
        placeholder="john@example.com"
      />

      <label>IP Address *</label>
      <input
        value={form.ip}
        onChange={(e)=>setForm({...form,ip:e.target.value})}
        placeholder="192.168.0.1"
      />

      <label>Category</label>
      <select
        value={form.category}
        onChange={(e)=>setForm({...form,category:e.target.value})}
      >
        <option>AUTH</option>
        <option>DATA</option>
        <option>SYSTEM</option>
        <option>API</option>
        <option>USER</option>
      </select>

      <label>Action</label>
      <input
        value={form.action}
        onChange={(e)=>setForm({...form,action:e.target.value})}
      />

      <label>Severity</label>
      <div className="severity-buttons">
        {["INFO","WARN","ERROR","SUCCESS"].map((s)=>(
          <button
            key={s}
            className={form.severity===s ? "active":""}
            onClick={()=>setForm({...form,severity:s})}
          >
            {s}
          </button>
        ))}
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Add Event
      </button>
    </div>
  );
}