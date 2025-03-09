import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, MenuItem, Typography, Box } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "student") {
      navigate("/dashboard");
    } else if (role === "teacher") {
      navigate("/teacher-dashboard");
    }
  };

  return (
    <Container maxWidth="sm" className="flex gap-10 flex-col items-center min-h-screen justify-center">
      <Typography variant="h4" component="h1" className="mb-4">Login</Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        className="mb-4"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        className="mb-4"
      />
      <TextField
        select
        label="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        fullWidth
        className="mb-4"
      >
        <MenuItem value="student">Student</MenuItem>
        <MenuItem value="teacher">Teacher</MenuItem>
      </TextField>
      <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>Login</Button>
    </Container>
  );
};

export default Login;
