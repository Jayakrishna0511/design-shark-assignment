import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import colors from '../theme';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      // ✅ Save login state in localStorage
      localStorage.setItem('isLoggedIn', 'true');

      // ✅ Navigate to dashboard
      navigate('/dashboard');
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #000000 0%, #8B0000 100%)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: '100%',
          maxWidth: 400,
          p: 4,
          borderRadius: 3,
          backgroundColor: 'rgba(26, 26, 26, 0.95)',
          color: colors.text,
        }}
      >
        <Typography variant="h5" mb={2}>
          Login to your account
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              mb: 2,
              input: { color: '#fff' },
              label: { color: '#bbb' },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              mb: 3,
              input: { color: '#fff' },
              label: { color: '#bbb' },
            }}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#D32F2F',
              '&:hover': {
                backgroundColor: '#B71C1C',
              },
              color: '#fff',
              fontWeight: 'bold',
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
