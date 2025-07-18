
import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Topbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#111' }} elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight={600}>
          DEZIGN <span style={{ color: '#e50914' }}>SHARK</span>
        </Typography>
        <Box>
          <IconButton color="inherit">
            <DarkModeIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
