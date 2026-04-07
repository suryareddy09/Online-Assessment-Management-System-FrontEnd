import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ResultPage.css";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state;

  if (!result) {
    return (
      <div className="result-container">
        <h2>No Result Found</h2>
        <button onClick={() => navigate("/dashboard")}>
          Go To Dashboard
        </button>
      </div>
    );
  }

  const totalQuestions = 20; // adjust if dynamic later
  const percentage = ((result.totalScore / totalQuestions) * 100).toFixed(1);
  const passed = percentage >= 50;

  return (
    <div className="result-container">
      <div className="result-card">

        <h1>Exam Result</h1>

        <div className={`score-circle ${passed ? "pass" : "fail"}`}>
          {percentage}%
        </div>

        <div className="score-details">
          <p><strong>Score:</strong> {result.totalScore} / {totalQuestions}</p>
          <p><strong>Status:</strong> {passed ? "PASS" : "FAIL"}</p>
          <p><strong>Completed At:</strong> {new Date(result.endTime).toLocaleString()}</p>
        </div>

        <button onClick={() => navigate("/dashboard")}>
          Back To Dashboard
        </button>

      </div>
    </div>
  );
};

export default ResultPage;