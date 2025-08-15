import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const sampleQuestions = [
      "What is the difference between let and var in JavaScript?",
      "How does the Spring Boot security module work?",
      "Explain the concept of closures in JavaScript.",
      "What are the features of React 18?",
      "How to connect React frontend with Spring Boot backend?",
    ];
    setQuestions(sampleQuestions);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    navigate("/login");
  };

  const filteredQuestions = questions.filter((q) =>
    q.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to the Question App</h1>
        <p className="subtitle">Ask. Learn. Share.</p>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </header>

      <main className="dashboard-main">
        <div className="info-card animated">
          <h2>About This App</h2>
          <p>
            A platform where you can post questions, find answers, and share knowledge with others.
          </p>
        </div>

        <div className="questions-section animated">
          <h2>Top Questions</h2>

          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <ul className="question-list">
            {filteredQuestions.map((question, index) => (
              <li key={index} className="question-card" onClick={() => navigate(`/question/${index}`)}>
                {question}
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className="dashboard-footer">
        <p>&copy; 2025 Question App | Built by Shraddha Joshi</p>
      </footer>
    </div>
  );
}

export default Dashboard;
