import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from '../../components/popup'; // Import Popup component

const questions = [
  // Sample questions with correct answers
  { id: 1, question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, dolorum.?", options: ["Option 1", "Option 2", "Option 3", "Option 4"], correct: "Option 1" },
  { id: 2, question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur animi dolor labore aut maiores provident.?", options: ["Option 1", "Option 2", "Option 3", "Option 4"], correct: "Option 2" },
  { id: 3, question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, excepturi??", options: ["Option 1", "Option 2", "Option 3", "Option 4"], correct: "Option 3" },
  // ...add more questions up to 10
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
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
      setPopupMessage("You have answered all the questions. Are you sure you want to submit?");
    }
    setShowPopup(true);
  };

  const handlePopupAction = () => {
    const correctAnswers = questions.filter(q => answers[q.id] === q.correct).length;
    navigate('/results', { state: { correctAnswers, totalQuestions: questions.length } });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const progressPercentage = (Object.keys(answers).length / questions.length) * 100;

  return (
    <div
      className="min-h-screen flex flex-col items-center p-4 min-w-[78vw] w-full"
      style={{ backgroundImage: 'linear-gradient(180deg, rgb(75,0,130) 0%, rgb(129,75,218) 60%, #C77CDE 70%, #FEBBC6 100%)' }}
    >
      {/* Header */}
      <div className="w-full flex justify-center text-lg font-bold py-2 mt-12">
  <span className="text-gray-50 text-2xl mb-10">Embedded Systems</span>
</div>

      {/* Progress Bar */}
      <div className="w-full lg:w-[30vw] flex flex-col mb-5">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg text-white font-medium">{currentQuestionIndex + 1}/{questions.length}</span>
          <span className=" text-md font-medium rounded-full bg-white px-3 py-1 text-black">
            ⏳ {Math.floor(timeLeft / 60)}min {timeLeft % 60}s
          </span>
        </div>
        <div className="w-full  h-3 items-center mx-auto bg-gray-100 rounded-full">
          <div className="h-3 bg-[#F994BF] rounded-full" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>

      {/* Question Section */}
<div
  className="bg-gray-100 min-h-[65vh] overflow-y-auto h-auto p-4 rounded-lg shadow-md mt-4 w-full max-w-md"
  style={{
    minWidth: '300px',
    scrollbarWidth: 'thin',
    scrollbarColor: '#A9A9A9 #E6E6E6',
  }}
>
  <style>
    {`
      .bg-gray-100::-webkit-scrollbar {
        width: 8px;
      }
      .bg-gray-100::-webkit-scrollbar-track {
        background: #E6E6E6;
        border-radius: 10px;
      }
      .bg-gray-100::-webkit-scrollbar-thumb {
        background-color: #A9A9A9;
        border-radius: 10px;
        border: 2px solid #E6E6E6;
      }
      .bg-gray-100::-webkit-scrollbar-thumb:vertical {
        border-radius: 10px;
      }
    `}
  </style>
        <h3 className="text-lg font-semibold">
          Q{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
        </h3>
        <div className="mt-3">
          {questions[currentQuestionIndex].options.map((option, idx) => (
            <label
              key={idx}
              className={`flex items-center p-3 border rounded-lg mb-2 cursor-pointer ${answers[questions[currentQuestionIndex].id] === option ? "border-[#bdd462] bg-[#E6F7B9]" : "border-gray-300"}`}
            >
              <input
                type="radio"
                name={`question-${questions[currentQuestionIndex].id}`}
                value={option}
                checked={answers[questions[currentQuestionIndex].id] === option}
                onChange={() => handleOptionChange(questions[currentQuestionIndex].id, option)}
                className="hidden"
              />
              <span
                className={`w-5 h-5 rounded-full border flex items-center justify-center ${answers[questions[currentQuestionIndex].id] === option ? "border-[#bdd462]" : "border-gray-400"}`}
              >
                {answers[questions[currentQuestionIndex].id] === option && <span className="w-3 h-3 bg-[#bdd462] rounded-full"></span>}
              </span>
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
        <div className="flex justify-between w-full max-w-md mt-4">
        <button 
          onClick={handlePreviousQuestion}
          className="border-2 border-[#774EE9] min-w-[35vw] rounded-2xl text-[#774EE9] font-medium px-4 py-2 hover:bg-gray-200 lg:min-w-[14vw] cursor-pointer"
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        {currentQuestionIndex === questions.length - 1 ? (
          <button 
            onClick={handleSubmit}
            className="text-white rounded-2xl font-medium px-4 py-2 min-w-[35vw] hover:bg-[#774EE9] lg:min-w-[12vw] cursor-pointer"
            style={{ backgroundImage: 'linear-gradient(to top, #A271F1  0%, #774EE9 50%)' }}
          >
            Submit
          </button>
        ) : (
          <button 
            onClick={handleNextQuestion}
            className="text-white rounded-2xl font-medium px-4 py-2 min-w-[35vw] hover:bg-[#774EE9] lg:min-w-[12vw] cursor-pointer" 
            style={{ backgroundImage: 'linear-gradient(to top, #A271F1  0%, #774EE9 50%)' }}
          >
            Next
          </button>
        )}
      </div>
    </div>
     
      {/* Popup */}
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