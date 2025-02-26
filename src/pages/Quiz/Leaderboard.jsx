import React from 'react';
import { Leaderboard } from '../../components/dashboard'; // Correctly import Leaderboard

const LeaderboardPage = () => {
  const leaderboardData = [
    // Sample leaderboard data
    { rank: 1, name: "User 1", score: 95 },
    // ...add more leaderboard entries
  ];

  return (
    <div className="p-6 min-w-[78vw]">
      <Leaderboard leaderboard={leaderboardData} />
    </div>
  );
};

export default LeaderboardPage;
