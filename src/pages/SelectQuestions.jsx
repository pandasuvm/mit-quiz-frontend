import React, { useState } from "react";
import { Container, Typography, Box, Card, CardContent, Button } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";

const questions = [
  { id: 1, question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  { id: 2, question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
  { id: 3, question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
  { id: 4, question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Jane Austen", "Mark Twain", "J.K. Rowling"], answer: "Harper Lee" },
  { id: 5, question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: "2" },
  { id: 6, question: "What is the speed of light?", options: ["3,000,000 m/s", "300,000 km/s", "300,000 m/s", "30,000 km/s"], answer: "300,000 km/s" },
  { id: 7, question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Gold", "Osmium", "Ozone"], answer: "Oxygen" },
  { id: 8, question: "What is the tallest mountain in the world?", options: ["Mount Everest", "K2", "Kangchenjunga", "Mount Kilimanjaro"], answer: "Mount Everest" },
  { id: 9, question: "Which country is the largest by area?", options: ["USA", "Canada", "China", "Russia"], answer: "Russia" },
  { id: 10, question: "What is the freezing point of water?", options: ["0°C", "32°F", "100°C", "212°F"], answer: "0°C" },
  { id: 11, question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: "Leonardo da Vinci" },
  { id: 12, question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Saturn"], answer: "Mars" },
];

const SelectQuestions = () => {
  const { semester, subject, className } = useParams();
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const navigate = useNavigate();

  const handleSelectQuestion = (question) => {
    if (selectedQuestions.length < 5 && !selectedQuestions.includes(question)) {
      setSelectedQuestions([...selectedQuestions, question]);
    }
  };

  const handleDeselectQuestion = (question) => {
    setSelectedQuestions(selectedQuestions.filter(q => q.id !== question.id));
  };

  const handleCreateQuiz = () => {
    const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    quizzes.push({ subject, className, questions: selectedQuestions });
    localStorage.setItem("quizzes", JSON.stringify(quizzes));
    navigate("/teacher-dashboard");
  };

  return (
    <Container maxWidth="lg" className="min-h-screen p-6 flex flex-col w-full mx-auto">
      <Typography variant="h4" component="h1" className="mb-8 mt-12">Please Select Questions</Typography>
      <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {questions.map((question) => (
          <Card 
            key={question.id} 
            className={`cursor-pointer ${selectedQuestions.includes(question) ? "bg-green-100" : ""}`}
            style={{ border: selectedQuestions.includes(question) ? "2px solid green" : "none" }}
          >
            <CardContent>
              <Typography variant="h6" component="h3">{question.question}</Typography>
              <ul>
                {question.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
              <div className="mt-4">
                {selectedQuestions.includes(question) ? (
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={() => handleDeselectQuestion(question)} 
                    className="mt-8"
                  >
                    Cancel
                  </Button>
                ) : (
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => handleSelectQuestion(question)} 
                    className="mt-8"
                  >
                    Select
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </Box>
      {selectedQuestions.length === 5 && (
        <div className="pt-8 w-full">
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleCreateQuiz} 
            className="pt-4 w-full"
          >
            Create Quiz
          </Button>
        </div>
      )}
    </Container>
  );
};

export default SelectQuestions;
