import React from "react";
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";

const SelectClass = () => {
  const { semester, subject } = useParams();
  const navigate = useNavigate();

  const classes = ["Class A", "Class B", "Class C", "Class D"];

  return (
    <Container maxWidth="lg" className="min-h-screen p-6 flex flex-col w-full mx-auto">
      <Typography variant="h4" component="h1" className="pb-8 mt-12 text-center">Please Select Class</Typography>
      <Box className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {classes.map((className) => (
          <Card key={className} onClick={() => navigate(`/select-questions/${semester}/${subject}/${className}`)} className="cursor-pointer">
            <CardContent className="flex flex-col justify-center items-center">
              <Box 
                className="flex justify-center items-center rounded-full bg-blue-500 text-white" 
                style={{ width: "100px", height: "100px" }}
              >
                <Typography variant="h4" component="span">{className.split(" ")[1]}</Typography>
              </Box>
              <Typography variant="h6" component="span" className="mt-4">{className}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default SelectClass;
