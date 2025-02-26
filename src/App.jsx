import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Quiz from "./pages/Quiz/Quiz";

function App() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "linear-gradient(to top, #FEBBC6 0%, rgb(129,75,218) 30%)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
