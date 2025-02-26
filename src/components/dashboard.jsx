import React, { useState, useEffect } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md min-h-[100vh]">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Quiz Dashboard</h2>
        <nav>
          <ul className="space-y-2">
            <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Home</a></li>
            <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">View All Quizzes</a></li>
            <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Create New Quiz</a></li>
            <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Analytics</a></li>
            <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Settings</a></li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export function QRScanner() {
  const [scanning, setScanning] = useState(false);
  const [enterCode, setEnterCode] = useState(false);
  const [code, setCode] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    let scanner;
    if (scanning) {
      scanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });
      scanner.render(onScanSuccess, onScanError);
    }
    return () => {
      if (scanner) {
        scanner.clear();
      }
    };
  }, [scanning]);

  const onScanSuccess = (decodedText, decodedResult) => {
    console.log(`Code matched = ${decodedText}`, decodedResult);
    setScanning(false);
    navigate('/quiz'); // Redirect to quiz page
  };

  const onScanError = (error) => {
    console.warn(error);
  };

  const handleCodeSubmit = () => {
    if (code) {
      navigate('/quiz'); // Redirect to quiz page
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md min-w-[78vw]">
      <h2 className="text-xl font-semibold mb-4">{enterCode ? 'Enter the Code' : 'QR Code Scanner'}</h2>
      {!scanning && !enterCode ? (
        <>
          <button 
            onClick={() => setScanning(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Scan QR Code
          </button>
          <a 
            href="#" 
            onClick={() => setEnterCode(true)}
            className="block mt-2 text-blue-500 hover:underline"
          >
            Enter Code
          </a>
        </>
      ) : enterCode ? (
        <>
          <input 
            type="text" 
            value={code} 
            onChange={(e) => setCode(e.target.value)} 
            className="border p-2 rounded mr-2"
          />
          <button 
            onClick={handleCodeSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
          <a 
            href="#" 
            onClick={() => setEnterCode(false)}
            className="block mt-2 text-blue-500 hover:underline"
          >
            Scan QR
          </a>
        </>
      ) : (
        <div id="qr-reader" className="w-full max-w-sm mx-auto"></div>
      )}
    </div>
  );
}

export function RecentQuizzes({ quizzes }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Quizzes</h2>
      <ul className="space-y-2">
        {quizzes.map((quiz, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{quiz.name}</span>
            <span className="text-sm text-gray-500">{quiz.date}</span>
            <span className="font-semibold">{quiz.score}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Leaderboard({ leaderboard }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
      <ul className="space-y-2">
        {leaderboard.map((entry, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>#{entry.rank}</span>
            <span>{entry.name}</span>
            <span className="font-semibold">{entry.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PerformanceGraph({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [{
      label: 'Quiz Performance',
      data: data.data,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Performance Graph</h2>
      <Line data={chartData} />
    </div>
  );
}

export function QuizCategories({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [{
      data: data.data,
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
    }]
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Quiz Categories</h2>
      <Pie data={chartData} />
    </div>
  );
}