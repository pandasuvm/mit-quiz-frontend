import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/dashboard";
import Dashboard from "./pages/dashboard";
import Quiz from "./pages/Quiz/Quiz";
import Results from './pages/Quiz/Results';
import LeaderboardPage from './pages/Quiz/Leaderboard';

function App() {
  return (
    <Router>
          <Routes>
          <Route path="/" element={<Dashboard />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
          </Routes>
    </Router>
  );
}

export default App;