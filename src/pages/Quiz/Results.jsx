import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import trophyImage from '../../assets/trophy.png'; // Import trophy image
import clock from '../../assets/clock.png'; // Import clock image
import Button from '@mui/material/Button'; // Import MUI Button

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { correctAnswers, totalQuestions } = location.state;
  const passPercentage = (correctAnswers / totalQuestions) * 100;

  return (
    <div className="min-h-[100vh] flex flex-col items-center p-4 min-w-[100vw] bg-gray-50">
      {passPercentage > 30 ? (
        <>
          <img src={trophyImage} alt="Trophy" className="w-64 h-64 mb-4" />
          <p className="text-2xl font-bold mb-4 text-gray-700 text-center">Congratulations! You successfully passed this quiz.</p>
        </>
      ) : (
        <>
          <img src={clock} alt="Clock" className="w-64 h-64 mb-4" />
          <p className="text-2xl font-bold mb-4 text-white">You did not pass the quiz.</p>
        </>
      )}
      <p className="text-lg mb-4 text-gray-600">You got <span className='text-gray-700 font-semibold'>{correctAnswers}</span><span className='text-gray-700 font-semibold'>/{totalQuestions} </span>correct answers.</p>
      <Button 
        onClick={() => navigate('/leaderboard')}
        variant="contained"
        color="primary"
        style={{ minWidth: '10vw' }}
      >
        Leaderboard
      </Button>
    </div>
  );
};

export default Results;
