import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const isValid =
  form.email.length >= 8 && form.password.length >= 8;

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <input
          type="password"
          placeholder="Password"
          
          onChange={(e)=>setForm({...form,password:e.target.value})}
        />
        
  {!isValid && (
    <p style={{color:"red",fontSize:"12px"}}>
      Password must be at least 8 characters
    </p>
  )}

        <button
        disabled={!isValid}
        onClick={() => navigate("/dashboard")}
        >
        Submit
        </button>
          
      </div>
    </div>
  );
}