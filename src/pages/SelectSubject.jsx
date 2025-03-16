import React from "react";
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";

const SelectSubject = () => {
  const { semester } = useParams();
  const navigate = useNavigate();

  const subjects = [
    { name: "Math", image: "/images/math3.jpg" },
    { name: "Science", image: "/images/science.jpg" },
    { name: "History", image: "/images/history.jpg" },
    { name: "English", image: "/images/english.jpg" }
  ];

  return (
    <Container maxWidth="lg" className="min-h-screen p-6 flex flex-col w-full mx-auto">
      <Typography variant="h4" component="h1" className="pb-8 mt-12 text-center font-bold">Please Select Subject</Typography>
      <Box className="flex flex-wrap gap-8 w-full">
        {subjects.map((subject) => (
          <Card 
            key={subject.name} 
            onClick={() => navigate(`/select-class/${semester}/${subject.name}`)} 
            className="cursor-pointer" 
            style={{ flex: "1 1 calc(25% - 24px)", minWidth: "200px" }}
          >
            <CardContent className="flex flex-col justify-center items-center">
              <Box 
                className="flex justify-center items-center rounded-full bg-blue-500 text-white" 
                style={{ width: "100px", height: "100px", overflow: "hidden" }}
              >
                <img src={subject.image} alt={subject.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
              <Typography variant="h6" component="span" className="pt-4">{subject.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default SelectSubject;
