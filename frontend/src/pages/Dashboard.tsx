import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FolderIcon from '@mui/icons-material/Folder';
import Sidebar from '../components/Sidebar';

const folders = [
  { title: 'Brochures', route: '/brochures' },
  { title: 'Offline Marketing', route: '/offline-marketing' },
  { title: 'Reels', route: '/reels' },
  { title: 'Static Posts', route: '/static-posts' },
  { title: "LOGO's", route: '/logos' },
  { title: 'WEBSITES', route: '/websites' },
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h5" color="#fff" gutterBottom>
          All Files
        </Typography>

        <Grid container spacing={3}>
          {folders.map((folder, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                onClick={() => navigate(folder.route)}
                sx={{
                  backgroundColor: '#1e1e1e',
                  color: '#fff',
                  cursor: 'pointer',
                  '&:hover': { backgroundColor: '#2a2a2a' },
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <FolderIcon sx={{ fontSize: 50, mb: 1 }} />
                  <Typography variant="h6">{folder.title}</Typography>
                  <Typography variant="caption" color="#aaa">
                    Total Items: --
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
