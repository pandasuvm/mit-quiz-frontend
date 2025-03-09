import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz/Quiz";
import Results from './pages/Quiz/Results';
import LeaderboardPage from './pages/Quiz/Leaderboard';
import { FloatingNavbar } from "./components/navbar";

function App() {
  return (
    <div
      className="h-full w-full"
    >

    <Router><FloatingNavbar />
          <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
          </Routes>
    </Router>
    </div>
  );
}

export default App;