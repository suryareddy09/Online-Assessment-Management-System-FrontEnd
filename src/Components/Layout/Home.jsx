import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-inner">
          <h1>Hire Smarter. Hire Faster.</h1>
          <p>
            SmartHire is a modern online assessment platform designed to help 
            companies evaluate software talent efficiently, securely, and at scale.
          </p>

          <div className="hero-actions">
            <Link to="/signup" className="btn-primary">
              Get Started
            </Link>
            <Link to="/login" className="btn-outline">
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="container">
          <h2>About SmartHire</h2>
          <p>
            SmartHire is a powerful recruitment solution built for modern tech 
            companies. It allows organizations to create coding assessments, 
            conduct aptitude tests, and analyze candidate performance through 
            real-time dashboards.
          </p>
          <p>
            Our platform ensures secure test environments, automated evaluation, 
            and detailed analytics — enabling data-driven hiring decisions.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <div className="container">
          <h2>Platform Features</h2>

          <div className="feature-grid">

            <div className="feature-card">
              <h3>🧠 Intelligent Evaluation</h3>
              <p>
                Automated grading system with accurate scoring and 
                performance breakdown.
              </p>
            </div>

            <div className="feature-card">
              <h3>⚡ Real-Time Monitoring</h3>
              <p>
                Track candidate progress and monitor test activity instantly.
              </p>
            </div>

            <div className="feature-card">
              <h3>🔐 Secure Testing</h3>
              <p>
                Timed exams, randomized questions, and fair evaluation system.
              </p>
            </div>

            <div className="feature-card">
              <h3>📊 Detailed Analytics</h3>
              <p>
                Visual reports and scoring insights to simplify selection process.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats">
        <div className="container stats-grid">
          <div>
            <h3>500+</h3>
            <p>Assessments Conducted</p>
          </div>
          <div>
            <h3>300+</h3>
            <p>Companies Trust Us</p>
          </div>
          <div>
            <h3>95%</h3>
            <p>Hiring Accuracy</p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process">
        <div className="container">
          <h2>How It Works</h2>

          <div className="process-steps">
            <div>
              <span>1</span>
              <h4>Create Assessment</h4>
              <p>Design coding & aptitude tests tailored to your hiring needs.</p>
            </div>
            <div>
              <span>2</span>
              <h4>Invite Candidates</h4>
              <p>Share secure exam links and monitor performance live.</p>
            </div>
            <div>
              <span>3</span>
              <h4>Analyze & Hire</h4>
              <p>Review results and shortlist the best candidates easily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Transform Your Hiring Today</h2>
        <p>Experience smarter recruitment with SmartHire.</p>
        <Link to="/signup" className="btn-primary">
          Get Started Now
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 SmartHire | Designed for Modern Recruitment
      </footer>

    </div>
  );
}

export default Home;