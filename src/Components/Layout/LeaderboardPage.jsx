import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LeaderboardPage.css";

function LeaderboardPage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/exams/leaderboard/1")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>🏆 Leaderboard</h2>

      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>User ID</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.rank}</td>
              <td>{item.userId}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderboardPage;