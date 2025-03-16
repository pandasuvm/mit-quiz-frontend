import React from "react";
import { Container, Typography, Box, Card, CardContent, Button } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";

const ViewQuiz = () => {
  const { quizIndex } = useParams();
  const navigate = useNavigate();
  const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
  const quiz = quizzes[quizIndex];

  return (
    <Container maxWidth="lg" className="min-h-screen p-6 flex flex-col w-full mx-auto">
      <Typography variant="h4" component="h1" className="pb-8 mt-12 text-center">{quiz.subject} - {quiz.className}</Typography>
      <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10">
        {quiz.questions.map((question, index) => (
          <Card key={index}>
            <CardContent>
              <Typography variant="h6" component="h3">{question.question}</Typography>
              <ul>
                {question.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
              <Typography variant="body2" className="mt-2">Answer: {question.answer}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Button variant="contained" color="primary" onClick={() => navigate("/start-quiz")} className="mt-4">
        Start Quiz
      </Button>
    </Container>
  );
};

export default ViewQuiz;
