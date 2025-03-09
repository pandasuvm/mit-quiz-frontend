import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/dashboard";
import Dashboard from "./pages/dashboard";
import Quiz from "./pages/Quiz/Quiz";
import Results from './pages/Quiz/Results';
import LeaderboardPage from './pages/Quiz/Leaderboard';
import { FloatingNavbar } from "./components/navbar";

function App() {
  return (
    <div
      className="h-full w-full"
      style={{
     backgroundImage: 'linear-gradient(180deg, rgb(75,0,130) 0%, rgb(129,75,218) 60%, #C77CDE 70%, #FEBBC6 100%)' }}

    >

    <Router><FloatingNavbar />
          <Routes>
          <Route path="/" element={<Dashboard />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
          </Routes>
    </Router>
    </div>
  );
}

export default App;