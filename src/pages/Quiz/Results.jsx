import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import trophyImage from '../../assets/trophy.png'; // Import trophy image
import clock from '../../assets/clock.png'; // Import clock image

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { correctAnswers, totalQuestions } = location.state;
  const passPercentage = (correctAnswers / totalQuestions) * 100;

  return (
    <div className="min-h-[100vh] flex flex-col items-center p-4 min-w-[100vw]"
      style={{ backgroundImage: 'linear-gradient(180deg, rgb(75,0,130) 0%, rgb(129,75,218) 50%, #C77CDE 70%, #FEBBC6 100%)' }}
    >
      {passPercentage > 30 ? (
        <>
          <img src={trophyImage} alt="Trophy" className="w-64 h-64 mb-4" />
          <p className="text-2xl font-bold mb-4 text-white text-center">Congratulations! You successfully passed this quiz.</p>
        </>
      ) : (
        <>

        <img src={clock} alt="Trophy" className="w-64 h-64 mb-4" />
        <p className="text-2xl font-bold mb-4 text-white">You did not pass the quiz.</p>
        </>
      )}
      <p className="text-lg mb-4 text-white">You got <span className='text-green-500 font-semibold'>{correctAnswers}</span><span className='text-white font-semibold'>/{totalQuestions} </span>correct answers.</p>
      <button 
        onClick={() => navigate('/leaderboard')}
        className="bg-white text-[#774EE9] px-5 font-semibold border-2 border-[#774EE9] cursor-pointer py-2 rounded-2xl hover:bg-gray-300"
      >
        Leaderboard
      </button>
    </div>
  );
};

export default Results;
