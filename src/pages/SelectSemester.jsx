import React from "react";
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { FloatingNavbar } from "../components/navbar";

const SelectSemester = () => {
  const navigate = useNavigate();

  const semesters = [1, 2, 3, 4];

  const toRoman = (num) => {
    const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
    return romanNumerals[num - 1];
  };

  return (
    <Container maxWidth="lg" className="min-h-screen p-6 flex flex-col w-full mx-auto">
      {/* <FloatingNavbar /> */}
      <Typography variant="h4" component="h1" className=" mt-12 text-center font-bold pb-10">Please Select Semester</Typography>
      <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {semesters.map((semester) => (
          <Card key={semester} onClick={() => navigate(`/select-subject/${semester}`)} className="cursor-pointer">
            <CardContent className="flex flex-col justify-center items-center">
              <Box 
                className="flex justify-center items-center rounded-full bg-blue-500 text-white" 
                style={{ width: "100px", height: "100px" }}
              >
                <Typography variant="h4" component="span">{toRoman(semester)}</Typography>
              </Box>
              <Typography variant="h6" component="span" className="mt-4">Semester {semester}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default SelectSemester;
