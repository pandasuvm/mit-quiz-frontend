import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const subjectImages = {
  Math: "/images/math3.jpg",
  Science: "/images/science.jpg",
  History: "/images/history.jpg",
  English: "/images/english.jpg"
};

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const storedQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    setQuizzes(storedQuizzes);
  }, []);

  const handleDeleteQuiz = (index) => {
    const updatedQuizzes = quizzes.filter((_, i) => i !== index);
    setQuizzes(updatedQuizzes);
    localStorage.setItem("quizzes", JSON.stringify(updatedQuizzes));
  };

  return (
    <Container maxWidth="lg" className="min-h-screen p-6 flex flex-col w-full mx-auto">
      <Typography variant="h4" component="h1" className="pb-8 mt-12 text-center">Teacher Dashboard</Typography>
      <Box className="w-full mb-8 flex flex-col md:flex-row gap-12">
        <Card className="w-full md:w-1/2 mb-10">
          <CardContent>
            <Typography variant="h5" component="h2" className="pb-10">Create Quiz</Typography>
            <Button variant="contained" color="primary" onClick={() => navigate("/select-semester")} className="mt-4 w-full md:w-auto">
              Create Quiz
            </Button>
          </CardContent>
        </Card>
      </Box>
      {quizzes.length > 0 && (
        <Box className="w-full mb-8 flex flex-col md:flex-row gap-12">
          {quizzes.map((quiz, index) => (
            <Card key={index} className="w-full md:w-1/2">
              <CardContent className="flex flex-col justify-center items-center">
                <Box 
                  className="flex justify-center items-center rounded-full bg-blue-500 text-white" 
                  style={{ width: "100px", height: "100px", overflow: "hidden" }}
                >
                  <img src={subjectImages[quiz.subject]} alt={quiz.subject} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
                <Typography variant="h5" component="h2" className="pt-4 pb-4">{quiz.subject} - {quiz.className}</Typography>
                <Box className="flex flex-row md:flex-col gap-4 w-full">
                  <Button variant="contained" color="primary" onClick={() => navigate(`/view-quiz/${index}`)} className="mt-4 flex-1">
                    View Quiz
                  </Button>
                  <Button 
                    variant="contained" 
                    style={{ backgroundColor: "#ff4d6d", color: "#fff" }} 
                    onClick={() => handleDeleteQuiz(index)} 
                    className="mt-4 flex-1"
                  >
                    Delete Quiz
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default TeacherDashboard;
