import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./ExamPage.css";

const ExamPage = () => {
  const { attemptId } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // =========================
  // Load Questions
  // =========================
  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/exams/attempt/${attemptId}`
    );
    setQuestions(res.data.questions);
  };

  // =========================
  // Timer
  // =========================
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam(true); // auto submit
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // =========================
  // Save Answer
  // =========================
  const handleOptionClick = async (questionId, optionId) => {
    await axios.post(
      "http://localhost:8080/api/exams/submit-answer",
      {
        attemptId: attemptId,
        questionId: questionId,
        selectedOptionId: optionId
      }
    );

    loadQuestions();
  };

  // =========================
  // Submit Exam
  // =========================
  const handleSubmitExam = async (auto = false) => {
    if (isSubmitting) return;

    if (!auto) {
      const confirmSubmit = window.confirm(
        "Are you sure you want to submit the exam?"
      );
      if (!confirmSubmit) return;
    }

    setIsSubmitting(true);

    try {
      const res = await axios.post(
        `http://localhost:8080/api/exams/submit/${attemptId}`
      );

      navigate("/result", { state: res.data });

    } catch (error) {
      alert("Error submitting exam");
      setIsSubmitting(false);
    }
  };

  // =========================
  // Format Timer
  // =========================
  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  if (!questions.length)
    return <div className="loading">Loading...</div>;

  const question = questions[currentIndex];

  return (
    <div className="exam-layout">

      {/* HEADER */}
      <div className="exam-header">
        <div className="exam-title">Developer Hiring Test</div>
        <div className={`timer ${timeLeft < 300 ? "danger" : ""}`}>
          ⏳ {formatTime(timeLeft)}
        </div>
      </div>

      <div className="exam-body">

        {/* QUESTION SECTION */}
        <div className="question-section">
          <div className="question-number">
            Question {currentIndex + 1} of {questions.length}
          </div>

          <div className="question-text">
            {question.questionText}
          </div>

          <div className="options-container">
            {[question.optionA, question.optionB, question.optionC, question.optionD]
              .map((opt, index) => (
                <div
                  key={index}
                  className={`option-card ${
                    question.selectedAnswer === index + 1 ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleOptionClick(question.questionId, index + 1)
                  }
                >
                  <span className="option-label">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {opt}
                </div>
              ))}
          </div>
        </div>

        {/* PALETTE SECTION */}
        <div className="palette-section">
          <h4>Question Palette</h4>

          <div className="palette-grid">
            {questions.map((q, index) => (
              <div
                key={index}
                className={`palette-item 
                  ${index === currentIndex ? "current" : ""}
                  ${q.selectedAnswer ? "answered" : ""}`}
                onClick={() => setCurrentIndex(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="exam-footer">
        <button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(currentIndex - 1)}
        >
          Previous
        </button>

        <button
          disabled={currentIndex === questions.length - 1}
          onClick={() => setCurrentIndex(currentIndex + 1)}
        >
          Next
        </button>

        <button
          className="submit-btn"
          onClick={() => handleSubmitExam()}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Exam"}
        </button>
      </div>
    </div>
  );
};

export default ExamPage;