import React from "react";
import { Container, Typography, Box } from '@mui/material';
import { FloatingNavbar } from "../components/navbar";

const TeacherDashboard = () => {
  return (
    <Container maxWidth="lg" className="min-h-screen p-6 flex flex-col w-full mx-auto">
      <FloatingNavbar />
      <Typography variant="h4" component="h1" className="mb-8 mt-12">Teacher Dashboard</Typography>
      <Box className="w-full mb-8 flex flex-col md:flex-row gap-12">
        {/* Add teacher-specific components here */}
        <Typography variant="body1">Welcome, Teacher! Here you can manage your classes and quizzes.</Typography>
      </Box>
    </Container>
  );
};

export default TeacherDashboard;
