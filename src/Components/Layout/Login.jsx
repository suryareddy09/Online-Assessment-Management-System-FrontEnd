import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // If already logged in → redirect
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        formData
      );

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", response.data.username);

      navigate("/dashboard");

    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1>Smart Hiring Platform</h1>
        <p>
          Conduct secure online assessments and streamline your hiring process.
        </p>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h2>Login to Your Account</h2>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                id="email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                id="password"
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" disabled={loading} className="auth-btn">
              {loading ? "Signing In..." : "Login"}
            </button>
          </form>

          <div className="bottom-text">
            Don’t have an account? <Link to="/signup">Create Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;