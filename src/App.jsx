import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);
import { Sidebar, QRScanner, RecentQuizzes, QuizCategories, Leaderboard, PerformanceGraph } from './components/dashboard';
import Quiz from './pages/Quiz/Quiz';
import LeaderboardPage from './pages/Quiz/Leaderboard';

function App() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    // Fetch dashboard data
    fetch('http://localhost:3002/dashboard-data')
      .then(response => response.json())
      .then(data => setDashboardData(data))
      .catch(error => console.error('Error fetching dashboard data:', error));
  }, []);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/" element={
              <>
                <h1 className="text-3xl font-bold mb-6">Quiz Platform Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <QRScanner />
                </div>
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
