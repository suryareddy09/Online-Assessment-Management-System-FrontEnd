import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">

      <div className="about-hero">
        <h1>About SmartHire</h1>
        <p>
          SmartHire is an advanced online assessment platform designed to help 
          companies evaluate talent efficiently and securely.
        </p>
      </div>

      <div className="about-content">

        <div className="about-card">
          <h3>🎯 Our Mission</h3>
          <p>
            To simplify recruitment by providing secure, scalable,
            and data-driven online assessments.
          </p>
        </div>

        <div className="about-card">
          <h3>🚀 What We Offer</h3>
          <p>
            Coding tests, aptitude exams, real-time evaluation,
            and detailed performance analytics.
          </p>
        </div>

        <div className="about-card">
          <h3>🔒 Secure & Reliable</h3>
          <p>
            Timed exams, question randomization, and controlled environments
            ensure fairness and integrity.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;