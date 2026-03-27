import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const [form,setForm]=useState({name:"",email:"",password:""});

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Sign Up</h2>

        <input
          placeholder="Full Name"
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input
          placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setForm({...form,password:e.target.value})}
        />

        <button onClick={()=>navigate("/dashboard")}>
          Create Account
        </button>
      </div>
    </div>
  );
}