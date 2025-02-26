import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaderboard } from '../../components/dashboard';
import Popup from '../../components/popup'; // Import Popup component

const questions = [
  // Sample questions
  { id: 1, question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, dolorum.?", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
  { id: 2, question: "Question 2?", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
  { id: 3, question: "Question 3?", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
  // ...add more questions up to 10
];

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOptionChange = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = () => {
    const unanswered = questions.some(q => !answers[q.id]);
    if (unanswered) {
      setPopupMessage("Are you sure you want to submit? There are some unanswered questions.");
    } else {
      setPopupMessage("Are you sure you want to submit?");
    }
    setShowPopup(true);
  };

  const handlePopupAction = () => {
    navigate('/leaderboard');
  };

  return (
    <div className="p-6 min-w-[78vw]">
      <div className="flex overflow-x-auto mb-4">
        {questions.map((q, index) => (
          <div key={q.id} className={`p-2 ${answers[q.id] ? 'bg-green-500' : 'bg-gray-200'} rounded-full mx-1`}>
            {index + 1}
          </div>
        ))}
      </div>
      <div className="mb-4">
        Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}
      </div>
      {questions.map(q => (
        <div key={q.id} className="mb-4">
          <h3 className="font-semibold">{q.question}</h3>
          {q.options.map(option => (
            <label key={option} className="block">
              <input 
                type="radio" 
                name={`question-${q.id}`} 
                value={option} 
                checked={answers[q.id] === option}
                onChange={() => handleOptionChange(q.id, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button 
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit Quiz
      </button>
      {showPopup && (
        <Popup 
          message={popupMessage} 
          onCancel={() => setShowPopup(false)} 
          onAction={handlePopupAction} 
        />
      )}
    </div>
  );
};

export default Quiz;
