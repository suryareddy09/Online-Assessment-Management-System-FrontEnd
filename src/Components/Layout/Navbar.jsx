import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    const name = localStorage.getItem("username");

    setIsLoggedIn(loginStatus);
    setUsername(name);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">SmartHire</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {!isLoggedIn ? (
          <>
            <Link className="nav-btn login" to="/login">Login</Link>
            <Link className="nav-btn signup" to="/signup">Sign Up</Link>
          </>
        ) : (
          <div className="profile-section" onClick={() => setOpen(!open)}>
            <div className="profile-icon">👤</div>
            <span className="profile-name">{username}</span>

            {open && (
              <div className="dropdown">
                <div onClick={handleLogout}>Logout</div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;