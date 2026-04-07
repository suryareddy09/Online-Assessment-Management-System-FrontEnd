import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./InstructionPage.css";
import axios from "axios";

const InstructionPage = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();   // ✅ Get assessmentId from URL

  const handleStart = async () => {
    if (!agreed) return;

    try {
      // Optional: Fullscreen
      await document.documentElement.requestFullscreen();

      const res = await axios.post(
        `http://localhost:8080/api/exams/${id}/start?userId=1`
      );

      const attemptId = res.data;

      // Redirect to exam page
      navigate(`/exam/${attemptId}`);

    } catch (error) {
      console.error(error);
      alert("Unable to start exam");
    }
  };

  return (
    <div className="superset-container">

      {/* LEFT SIDE - INSTRUCTIONS */}
      <div className="instruction-left">
        <h2>General Instructions</h2>

        <div className="instruction-scroll">
          <h4>Before You Begin</h4>
          <ul>
            <li>The exam duration is 60 minutes.</li>
            <li>Ensure stable internet connectivity.</li>
            <li>Do not refresh or close the browser.</li>
            <li>Switching tabs may result in auto submission.</li>
            <li>All answers are auto-saved.</li>
            <li>Once submitted, the test cannot be retaken.</li>
            <li>Use only one device during the test.</li>
            <li>Make sure your device is fully charged.</li>
            <li>Do not use unfair means.</li>
            <li>Follow all guidelines strictly.</li>
          </ul>

          <h4>During The Exam</h4>
          <ul>
            <li>Read each question carefully.</li>
            <li>Manage time effectively.</li>
            <li>You can navigate between questions.</li>
            <li>Submit before time expires.</li>
          </ul>
        </div>

        <div className="agree-section">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <label>
            I have read and understood all the instructions.
          </label>
        </div>

        <button
          className={`start-btn ${agreed ? "enabled" : ""}`}
          disabled={!agreed}
          onClick={handleStart}
        >
          Start Test
        </button>
      </div>

      {/* RIGHT SIDE - EXAM SUMMARY */}
      <div className="instruction-right">
        <div className="summary-card">
          <h3>Test Summary</h3>

          <div className="summary-item">
            <span>Total Questions</span>
            <strong>20</strong>
          </div>

          <div className="summary-item">
            <span>Total Duration</span>
            <strong>60 Minutes</strong>
          </div>

          <div className="summary-item">
            <span>Total Marks</span>
            <strong>100</strong>
          </div>

          <div className="summary-item">
            <span>Negative Marking</span>
            <strong>No</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionPage;