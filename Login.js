import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = [
      { email: "applicant@example.com", password: "applicant123", role: "applicant" },
      { email: "hr@example.com", password: "hr123", role: "hr" },
      { email: "manager@example.com", password: "manager123", role: "manager" },
      { email: "interviewer@example.com", password: "interviewer123", role: "interviewer" },
      { email: "admin@example.com", password: "admin123", role: "admin" },
    ];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setError(null);
      setTimeout(() => {
        navigate(`/${user.role}`);
      }, 500);
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="container">
      <div className="image-section" />
      <div className="form-section">
        <h2 className="title">HR Operations Manager Login</h2>
        <form onSubmit={handleLogin} noValidate>
          <label className="label" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            className="input"
            type="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="input"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <div className="error">{error}</div>}

          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
