import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

  const [username, setUsername] = useState("");
  const [greeting, setGreeting] = useState("");
  const navigate = useNavigate();

  const upcomingExams = [
    {
      id: 1,
      title: "Java Developer Assessment",
      date: "18 Feb 2026",
      time: "10:00 AM",
      duration: 60
    },
    {
      id: 2,
      title: "Aptitude & Communication Test",
      date: "20 Feb 2026",
      time: "12:30 PM",
      duration: 45
    }
  ];

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) setUsername(storedUsername);

    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  const handleStartExam = (exam) => {
    navigate(`/instructions/${exam.id}`, { state: exam });
  };

  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <h2>{greeting}, {username || "Candidate"} 👋</h2>
        <p>Track your assessments and monitor your recruitment progress.</p>
      </div>

      {/* Upcoming Exams Section */}
      <div className="upcoming-section">
        <h3>Upcoming Assessments</h3>

        {upcomingExams.map((exam) => (
          <div key={exam.id} className="exam-card">
            <div>
              <h4>{exam.title}</h4>
              <p>{exam.date} | {exam.time}</p>
              <p>Duration: {exam.duration} mins</p>
            </div>

            <button
              className="start-btn"
              onClick={() => handleStartExam(exam)}
            >
              Start Exam
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Dashboard;
