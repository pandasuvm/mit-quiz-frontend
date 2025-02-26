import React from "react";
import { Crown } from 'lucide-react';
import goldMedal from "../../assets/gold.png";
import silverMedal from "../../assets/silver.png";
import bronzeMedal from "../../assets/bronze.png";

const leaderboardData = [
  { rank: 1, name: "Stanley Graham", score: 99.3, image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { rank: 2, name: "Gina Kelly", score: 98.5, image: "https://randomuser.me/api/portraits/women/1.jpg" },
  { rank: 3, name: "Louis Davis", score: 98.1, image: "https://randomuser.me/api/portraits/men/2.jpg" },
  { rank: 4, name: "Ralph Warren", score: 97.6, image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { rank: 5, name: "Antonio Woods", score: 96.4, image: "https://randomuser.me/api/portraits/men/4.jpg" },
  { rank: 6, name: "Eduardo Chavez", score: 95, image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { rank: 7, name: "Susan Williams", score: 94.8, image: "https://randomuser.me/api/portraits/women/2.jpg" },
];

const userRank = 16;
const userScore = 94.8;

const LeaderboardPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen min-w-[100vw] bg-gradient-to-b from-purple-600 to-purple-900 text-white p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold text-center mb-2 text-[#FBF819] flex items-center">
        <Crown className="mr-2" /> LEADERBOARD
      </h2>
      <p className="text-sm text-gray-300 mb-6">Top 10 Winners</p>

      {/* Month Selector (Optional for Expansion) */}
      <div className="flex items-center justify-center mb-6">
        <span className="mx-4 text-lg font-semibold">Embedded Systems</span>
      </div>

      {/* Top 3 Users */}
      <div className="flex items-end justify-center gap-6 mb-6">
        {/* Second Place */}
        <div className="relative flex flex-col items-center">
          <div className="relative">
            <img src={leaderboardData[1].image} alt="2nd" className="w-16 h-16 rounded-full border-4 border-gray-300" />
            <img src={silverMedal} alt="Silver Medal" className="absolute bottom-0 right-0 w-6 h-8" />
          </div>
          <span className="bg-green-400 text-xs px-2 py-1 rounded-full mt-2">2nd</span>
          <p className="text-sm">{leaderboardData[1].name}</p>
          <p className="text-lg font-semibold">{leaderboardData[1].score}</p>
        </div>

        {/* First Place (Center) */}
        <div className="relative flex flex-col items-center">
          <div className="relative">
            <img src={leaderboardData[0].image} alt="1st" className="w-24 h-24 rounded-full border-4 border-yellow-400" />
            <img src={goldMedal} alt="Gold Medal" className="absolute bottom-0 right-0 w-8 h-10" />
          </div>
          <span className="bg-yellow-500 text-xs px-3 py-1 rounded-full mt-2">1st</span>
          <p className="text-lg font-bold">{leaderboardData[0].name}</p>
          <p className="text-xl font-bold">{leaderboardData[0].score}</p>
        </div>

        {/* Third Place */}
        <div className="relative flex flex-col items-center">
          <div className="relative">
            <img src={leaderboardData[2].image} alt="3rd" className="w-16 h-16 rounded-full border-4 border-gray-400" />
            <img src={bronzeMedal} alt="Bronze Medal" className="absolute bottom-0 right-0 w-6 h-8" />
          </div>
          <span className="bg-purple-400 text-xs px-2 py-1 rounded-full mt-2">3rd</span>
          <p className="text-sm">{leaderboardData[2].name}</p>
          <p className="text-lg font-semibold">{leaderboardData[2].score}</p>
        </div>
      </div>

      {/* Remaining Rankings */}
      <div className="w-full max-w-md bg-white text-black rounded-lg shadow-lg p-4 overflow-y-auto" style={{ height: '220px' }}>
        {leaderboardData.slice(3).map((entry, index) => (
          <div key={entry.rank} className="flex justify-between items-center border-b border-gray-200 p-3">
            <div className="flex items-center">
              <img src={entry.image} alt={entry.name} className="w-8 h-8 rounded-full mr-3" />
              <span className="font-medium">{entry.name}</span>
            </div>
            <span className="font-semibold text-purple-600">{entry.score}</span>
          </div>
        ))}
      </div>

      {/* User's Rank & Score */}
      <div className="flex justify-between items-center w-full max-w-md mt-6 bg-white text-black p-3 rounded-lg shadow-md">
        <span>Your Rank <span className="text-purple-600">{userRank}</span></span>
        <span>Score <span className="text-purple-600">{userScore}</span></span>
      </div>
    </div>
  );
};

export default LeaderboardPage;
