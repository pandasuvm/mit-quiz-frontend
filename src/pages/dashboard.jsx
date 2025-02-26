import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from "react-router-dom";
import { QrCode, Clock, Bolt, Star, Users, Trophy, Target, CheckCircle,Zap, Flame  } from "lucide-react";
import { motion } from "framer-motion";
import { FloatingNavbar } from "../components/navbar";


export function Dashboard() {
  const [scanning, setScanning] = useState(false);
  const [enterCode, setEnterCode] = useState(false);
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let scanner;
    if (scanning) {
      scanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 200 });
      scanner.render(onScanSuccess, onScanError);
    }
    return () => scanner?.clear();
  }, [scanning]);

  const onScanSuccess = (decodedText) => {
    setScanning(false);
    navigate("/quiz", { state: { code: decodedText } });
  };

  const onScanError = (error) => {
    console.warn(error);
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center mt-14 w-full max-w-[1600px] mx-auto" style={{ backgroundImage: 'linear-gradient(to top, #FEBBC6 0%, rgb(129,75,218) 30%)' }}>
      <FloatingNavbar />

      {/* Welcome Message */}
      <motion.h1 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-4xl font-bold text-center mb-8 text-white "
      >
        Welcome back, Shubham! 🎉
      </motion.h1>

      <div className="w-full mb-8 flex flex-col md:flex-row gap-12">
        {/* QR Scanner / Code Entry */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col items-center w-full md:w-1/2"
        >
          <h2 className="text-2xl font-semibold mb-4 text-black">
            {enterCode ? "Enter the Code" : "Scan QR Code"}
          </h2>
          {!scanning && !enterCode ? (
            <>
              <button 
                onClick={() => setScanning(true)} 
                className="bg-purple-500 w-full py-3 rounded-full text-white flex justify-center items-center hover:bg-purple-600 transition duration-300"
              >
                <QrCode className="mr-2" /> Scan QR Code
              </button>
              <button 
                onClick={() => setEnterCode(true)} 
                className="mt-4 text-black hover:underline-offset"
              >
                Enter Code
              </button>
            </>
          ) : enterCode ? (
            <>
              <input 
                type="text" 
                value={code} 
                onChange={(e) => setCode(e.target.value)} 
                className="w-full bg-gray-100 bg-opacity-20 text-slate-600 p-2 rounded-full mb-4" 
                placeholder="Enter code here"
              />
              <button 
                onClick={() => navigate("/quiz", { state: { code } })} 
                className="bg-purple-500 w-full py-3 rounded-full text-white hover:bg-purple-600 transition duration-300"
              >
                Submit
              </button>
              <button 
                onClick={() => setEnterCode(false)} 
                className="mt-4 text-white hover:underline"
              >
                Back
              </button>
            </>
          ) : (
            <div id="qr-reader" className="w-full max-w-sm mx-auto"></div>
          )}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
          <StatBlock color="bg-yellow-500" title="Progress" icon={<Users />} value="543" description="Out of 1,225 pages" />
          <StatBlock color="bg-green-500" title="Streak" icon={<Bolt />} value="7 Days" description="Keep it up!" />
          <StatBlock color="bg-orange-500" title="Time" icon={<Clock />} value="6:24" description="Avg: 7:28" />
          <StatBlock color="bg-blue-200" title="Level" icon={<Star />} value="2" description="145 points to next" />
        </div>
      </div>

      {/* Leaderboard */}
      <Leaderboard leaderboard={dummyLeaderboard} />

      {/* Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <RecentActivity />
        <Challenges />
      </div>

    </div>
  );
}

function StatBlock({ color, title, icon, value, description }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      transition={{ type: "spring", stiffness: 300 }}
      className={`${color} p-4 rounded-lg shadow-md flex flex-col items-center`}
    > 
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        {icon} <span className="ml-2">{title}</span>
      </h3>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-center">{description}</p>
    </motion.div>
  );
}

function Leaderboard({ leaderboard }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="bg-slate-100 bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full mt-8"
    >
      <h2 className="text-2xl font-semibold mb-4 text-black">Leaderboard</h2>
      <div className="flex flex-col space-y-2">
        {leaderboard.map((entry, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex justify-between items-center p-2 rounded ${index % 2 === 0 ? "bg-slate-200 bg-opacity-10" : "bg-slate-500 bg-opacity-5"}`}
          > 
            <span className="font-bold">#{entry.rank}</span>
            <span>{entry.name}</span>
            <span>{entry.score}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}




function RecentActivity() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-pink-200 bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full mt-8"
    >
      <h2 className="text-2xl font-semibold mb-4 text-black flex items-center">
        <Trophy className="mr-2" size={24} color="#000000" />
        Recent Activity
      </h2>
      <ul className="space-y-2 text-black">
        <li className="flex items-center">
          <CheckCircle className="mr-2" size={20} color="#4CAF50" />
          Completed "Math Quiz - Level 2"
        </li>
        <li className="flex items-center">
          <Star className="mr-2" size={20} color="#FFC107" />
          Scored 85% in "Science Challenge"
        </li>
        <li className="flex items-center">
          <Trophy className="mr-2" size={20} color="#FF5722" />
          New High Score in "History Battle"!
        </li>
      </ul>
    </motion.div>
  );
}

function Challenges() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full mt-8"
    >
      <h2 className="text-2xl font-semibold mb-4 text-black flex items-center">
        <Zap className="mr-2" size={24} color="#000000" />
        Challenges
      </h2>
      <ul className="space-y-2 text-black">
        <li className="flex items-center">
          <Flame className="mr-2" size={20} color="#FF5722" />
          3-Day Streak Challenge - Keep playing daily!
        </li>
        <li className="flex items-center">
          <Zap className="mr-2" size={20} color="#2196F3" />
          Speed Run: Answer 10 questions under 2 min!
        </li>
        <li className="flex items-center">
          <Target className="mr-2" size={20} color="#4CAF50" />
          Accuracy Master: Get 95%+ in the next quiz!
        </li>
      </ul>
    </motion.div>
  );
}


const dummyLeaderboard = [
  { rank: 1, name: "Alice", score: "95%" },
  { rank: 2, name: "Bob", score: "90%" },
  { rank: 3, name: "Charlie", score: "85%" },
  { rank: 4, name: "Dave", score: "80%" },
  { rank: 5, name: "Eve", score: "78%" }
];

export default Dashboard;
