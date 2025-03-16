import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz/Quiz";
import Results from './pages/Quiz/Results';
import LeaderboardPage from './pages/Quiz/Leaderboard';
import SelectSemester from "./pages/SelectSemester";
import SelectSubject from "./pages/SelectSubject";
import SelectClass from "./pages/SelectClass";
import SelectQuestions from "./pages/SelectQuestions";
import ViewQuiz from "./pages/ViewQuiz";
import { FloatingNavbar } from "./components/navbar";

function App() {
  return (
    <div className="h-full w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/select-semester" element={<SelectSemester />} />
          <Route path="/select-subject/:semester" element={<SelectSubject />} />
          <Route path="/select-class/:semester/:subject" element={<SelectClass />} />
          <Route path="/select-questions/:semester/:subject/:className" element={<SelectQuestions />} />
          <Route path="/view-quiz/:quizIndex" element={<ViewQuiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;