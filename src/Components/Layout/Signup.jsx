import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8080/api/auth/signup",
        {
          name: formData.fullName,
          email: formData.email,
          password: formData.password
        }
      );

      navigate("/login");

    } catch (error) {
      setError("Registration failed. Try again.");
    }
  };

  return (
    <div className="signup-container">

      <div className="signup-card">

        <h2>Create Your Account 🚀</h2>
        <p className="subtitle">Join our smart hiring platform today</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Create Account
          </button>

        </form>

        <div className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>

      </div>

    </div>
  );
}

export default Signup;
